import * as THREE from 'three'
import type { Scene3D } from '../types'
import { getDevicePixelRatio } from '../utils/capabilities'
import { setupStudio, easeOutCubic } from '../shared/studioSetup'
import type { ImmuneShieldOptions, ShieldAction } from './types'

const ACCENT = 0x5a8a96
const VIRUS_COLOR = 0x7a2222

function createShieldGeometry(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape()
  shape.moveTo(0, 1.05)
  shape.lineTo(0.72, 1.28)
  shape.lineTo(0.72, 0.52)
  shape.bezierCurveTo(0.72, -0.08, 0.36, -0.52, 0, -0.82)
  shape.bezierCurveTo(-0.36, -0.52, -0.72, -0.08, -0.72, 0.52)
  shape.lineTo(-0.72, 1.28)
  shape.closePath()
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.08,
    bevelEnabled: true,
    bevelThickness: 0.028,
    bevelSize: 0.028,
    bevelSegments: 3,
    curveSegments: 32,
  })
}

function createVirusMesh(geo: THREE.IcosahedronGeometry): THREE.Group {
  const group = new THREE.Group()
  const body = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      color: VIRUS_COLOR,
      roughness: 0.94,
      metalness: 0,
    }),
  )
  body.castShadow = true
  group.add(body)

  const spikeGeo = new THREE.ConeGeometry(0.012, 0.045, 6)
  const spikeMat = new THREE.MeshStandardMaterial({
    color: 0x5c1818,
    roughness: 0.92,
    metalness: 0,
  })
  const dirs = [
    [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
  ]
  for (const [x, y, z] of dirs) {
    const spike = new THREE.Mesh(spikeGeo, spikeMat)
    spike.position.set(x * 0.05, y * 0.05, z * 0.05)
    spike.lookAt(x * 2, y * 2, z * 2)
    spike.castShadow = true
    group.add(spike)
  }
  return group
}

interface VirusState {
  angle: number
  radius: number
  y: number
  speed: number
  mesh: THREE.Group
  phase: 'orbit' | 'burst' | 'pull' | 'gone'
  burstDir?: THREE.Vector3
  waveHit?: boolean
}

interface Macrophage {
  mesh: THREE.Mesh
}

interface WaveState {
  active: boolean
  time: number
  duration: number
  /** 0–1: доля вирусов, которых волна отталкивает */
  reach: number
}

interface ActiveAnim {
  action: ShieldAction
  time: number
  duration: number
}

export function createImmuneShieldScene(
  container: HTMLElement,
  options: ImmuneShieldOptions = {},
): Scene3D {
  const accent = options.accentColor ?? ACCENT
  const virusCount = Math.min(20, Math.max(15, options.virusCount ?? 18))
  const reduced = options.reducedMotion ?? false
  const lowPower = options.lowPower ?? false
  const onStart = options.onActionStart
  const onComplete = options.onActionComplete

  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let animationId = 0
  let running = false
  let destroyed = false
  let clock = new THREE.Clock()

  let shield: THREE.Mesh | null = null
  let waveShell: THREE.Mesh | null = null
  let viruses: VirusState[] = []
  let macrophages: Macrophage[] = []
  let activeAnim: ActiveAnim | null = null
  let wave: WaveState = { active: false, time: 0, duration: 1.1, reach: 1 }
  let shieldActivation = 0
  let virusGeo: THREE.IcosahedronGeometry | null = null
  const triggered = new Set<ShieldAction>()

  const resizeObserver = new ResizeObserver(() => {
    if (!renderer || !camera || destroyed) return
    const w = container.clientWidth
    const h = container.clientHeight
    if (w === 0 || h === 0) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  })

  function startWave(reach: number, duration = 1.15) {
    wave = { active: true, time: 0, duration, reach }
    if (waveShell) {
      waveShell.visible = true
      waveShell.scale.setScalar(0.35)
      const mat = waveShell.material as THREE.MeshPhysicalMaterial
      mat.opacity = 0.28
    }
  }

  function clearMacrophages() {
    macrophages.forEach(m => {
      scene?.remove(m.mesh)
      m.mesh.geometry.dispose()
      ;(m.mesh.material as THREE.Material).dispose()
    })
    macrophages = []
  }

  function spawnMacrophages() {
    clearMacrophages()
    const count = lowPower ? 2 : 3
    for (let i = 0; i < count; i++) {
      const geo = new THREE.SphereGeometry(0.1, 20, 20)
      const mat = new THREE.MeshStandardMaterial({
        color: 0xd4dce4,
        roughness: 0.72,
        metalness: 0.02,
        transparent: true,
        opacity: 0.92,
      })
      const mesh = new THREE.Mesh(geo, mat)
      const angle = (i / count) * Math.PI * 2 - Math.PI / 2
      mesh.position.set(Math.cos(angle) * 0.35, -0.05 + i * 0.08, Math.sin(angle) * 0.18 + 0.15)
      mesh.castShadow = true
      scene?.add(mesh)
      macrophages.push({ mesh })
    }
  }

  function repelVirusesWithWave(reach: number) {
    viruses.forEach((v, i) => {
      if (v.phase !== 'orbit') return
      if (i / virusCount <= reach) {
        v.waveHit = true
      }
    })
  }

  function startAction(action: ShieldAction) {
    if (triggered.has(action)) return
    triggered.add(action)
    onStart?.(action)

    const duration = reduced ? 0.35 : 1.25
    activeAnim = { action, time: 0, duration }
    shieldActivation = Math.min(1, shieldActivation + 0.28)

    if (action === 'peptides') {
      startWave(1, reduced ? 0.35 : 1.2)
      repelVirusesWithWave(1)
    } else if (action === 'activate') {
      startWave(0.55, reduced ? 0.35 : 1.05)
      repelVirusesWithWave(0.55)
    } else if (action === 'cold') {
      startWave(0.75, reduced ? 0.35 : 1.1)
      repelVirusesWithWave(0.75)
    } else if (action === 'phagocytosis' || action === 'renewal') {
      spawnMacrophages()
      viruses.forEach(v => {
        if (v.phase === 'orbit') v.phase = 'pull'
      })
    }

    if (reduced) {
      activeAnim.time = duration
      finishAction(action)
    }
  }

  function finishAction(action: ShieldAction) {
    onComplete?.(action)
    activeAnim = null
  }

  function init() {
    if (destroyed) return
    const width = container.clientWidth || 400
    const height = container.clientHeight || 400

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 50)
    camera.position.set(0, 0.08, 4.35)
    camera.lookAt(0, 0.02, 0)

    renderer = new THREE.WebGLRenderer({
      antialias: !lowPower,
      alpha: true,
      powerPreference: lowPower ? 'low-power' : 'default',
    })
    renderer.setPixelRatio(getDevicePixelRatio(lowPower ? 1.5 : 2))
    renderer.setSize(width, height, false)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    setupStudio(scene, renderer, { accent, lowPower })

    const shieldGeo = createShieldGeometry()
    shieldGeo.center()

    shield = new THREE.Mesh(
      shieldGeo,
      new THREE.MeshPhysicalMaterial({
        color: 0xf8fcff,
        metalness: 0,
        roughness: 0.04,
        transmission: 0.94,
        thickness: 0.85,
        ior: 1.48,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
        envMapIntensity: 0.85,
        clearcoat: 0.55,
        clearcoatRoughness: 0.12,
        attenuationColor: new THREE.Color(accent),
        attenuationDistance: 3.2,
      }),
    )
    shield.scale.set(1.32, 1.32, 1.32)
    shield.castShadow = true
    shield.receiveShadow = true
    scene.add(shield)

    waveShell = new THREE.Mesh(
      new THREE.SphereGeometry(1, 48, 48),
      new THREE.MeshPhysicalMaterial({
        color: 0xe8f4f8,
        metalness: 0,
        roughness: 0.15,
        transmission: 0.72,
        thickness: 0.4,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
        attenuationColor: new THREE.Color(accent),
        attenuationDistance: 1.8,
      }),
    )
    waveShell.visible = false
    scene.add(waveShell)

    virusGeo = new THREE.IcosahedronGeometry(0.048, lowPower ? 0 : 1)
    for (let i = 0; i < virusCount; i++) {
      const mesh = createVirusMesh(virusGeo)
      const angle = (i / virusCount) * Math.PI * 2
      const radius = 1.45 + (i % 5) * 0.12
      const y = ((i % 7) - 3) * 0.22
      mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius * 0.32)
      mesh.rotation.set(i * 0.3, i * 0.5, 0)
      scene.add(mesh)
      viruses.push({
        angle,
        radius,
        y,
        speed: 0.14 + (i % 4) * 0.04,
        mesh,
        phase: 'orbit',
      })
    }

    resizeObserver.observe(container)
    clock.start()
  }

  function updateWave(dt: number) {
    if (!wave.active || !waveShell) return
    wave.time += dt
    const p = Math.min(wave.time / wave.duration, 1)
    const eased = easeOutCubic(p)
    const scale = 0.35 + eased * 2.65
    waveShell.scale.setScalar(scale)

    const mat = waveShell.material as THREE.MeshPhysicalMaterial
    mat.opacity = Math.max(0, 0.32 * (1 - p * 0.95))

    const waveFront = scale * 0.95
    viruses.forEach(v => {
      if (v.phase !== 'orbit' || !v.waveHit) return
      const dist = v.mesh.position.length()
      if (dist < waveFront && !v.burstDir) {
        v.phase = 'burst'
        v.burstDir = v.mesh.position.clone().normalize()
        if (v.burstDir.lengthSq() < 0.01) v.burstDir.set(0, 0, 1)
      }
    })

    if (p >= 1) {
      wave.active = false
      waveShell.visible = false
      mat.opacity = 0
    }
  }

  function animate() {
    if (!running || destroyed || !renderer || !scene || !camera) return
    const dt = Math.min(clock.getDelta(), 0.05)
    const t = clock.getElapsedTime()

    if (activeAnim) {
      activeAnim.time += dt
      if (activeAnim.time >= activeAnim.duration) {
        finishAction(activeAnim.action)
      }
    }

    updateWave(dt)

    if (shield) {
      const m = shield.material as THREE.MeshPhysicalMaterial
      m.opacity = THREE.MathUtils.lerp(m.opacity, 0.5 + shieldActivation * 0.22, dt * 1.8)
    }

    viruses.forEach((v, i) => {
      if (v.phase === 'gone' || !v.mesh.visible) return

      if (v.phase === 'burst' && v.burstDir) {
        v.mesh.position.addScaledVector(v.burstDir, dt * 1.85)
        v.mesh.rotation.y += dt * 1.2
        const fade = 1 - (v.mesh.userData.fade ?? 0)
        v.mesh.userData.fade = (v.mesh.userData.fade ?? 0) + dt * 0.85
        v.mesh.scale.setScalar(Math.max(0.01, fade * 0.95))
        if (fade <= 0.05) {
          v.phase = 'gone'
          v.mesh.visible = false
        }
      } else if (v.phase === 'pull' && macrophages.length) {
        const target = macrophages[i % macrophages.length].mesh.position
        v.mesh.position.lerp(target, dt * 2.2)
        v.mesh.scale.multiplyScalar(1 - dt * 1.1)
        if (v.mesh.scale.x < 0.12) {
          v.phase = 'gone'
          v.mesh.visible = false
        }
      } else if (v.phase === 'orbit' && !reduced) {
        v.angle += v.speed * dt * 0.22
        v.mesh.position.x = Math.cos(v.angle) * v.radius
        v.mesh.position.z = Math.sin(v.angle) * v.radius * 0.32
        v.mesh.position.y = v.y + Math.sin(t * 0.7 + i * 0.35) * 0.025
        v.mesh.rotation.y += dt * 0.15
      }
    })

    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }

  function play() {
    if (running || destroyed) return
    running = true
    animationId = requestAnimationFrame(animate)
  }

  function pause() {
    running = false
    cancelAnimationFrame(animationId)
  }

  function trigger(actionName: string) {
    startAction(actionName as ShieldAction)
  }

  function destroy() {
    destroyed = true
    pause()
    resizeObserver.disconnect()

    viruses.forEach(v => {
      v.mesh.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose()
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          mats.forEach(m => m.dispose())
        }
      })
      scene?.remove(v.mesh)
    })
    viruses = []
    virusGeo?.dispose()

    clearMacrophages()

    shield?.geometry.dispose()
    ;(shield?.material as THREE.Material)?.dispose()
    waveShell?.geometry.dispose()
    ;(waveShell?.material as THREE.Material)?.dispose()

    if (renderer) {
      renderer.dispose()
      renderer.domElement.remove()
    }
    scene = null
    camera = null
    renderer = null
  }

  return { init, play, pause, destroy, trigger }
}
