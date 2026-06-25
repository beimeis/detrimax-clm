import * as THREE from 'three'
import type { Scene3D } from '../types'
import { getDevicePixelRatio } from '../utils/capabilities'
import { setupStudio } from '../shared/studioSetup'
import type { D3SceneOptions } from '../shared/d3SceneTypes'

export function createVitaminDropScene(
  container: HTMLElement,
  options: D3SceneOptions = {},
): Scene3D {
  const accent = options.accentColor ?? 0xffb300
  const reduced = options.reducedMotion ?? false

  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let animationId = 0
  let destroyed = false
  let clock = new THREE.Clock()
  let drop: THREE.Mesh | null = null
  let ripple: THREE.Mesh | null = null
  let rippleT = 999
  let pulseT = 0
  let glow: THREE.PointLight | null = null

  const resizeObserver = new ResizeObserver(() => {
    if (!renderer || !camera || destroyed) return
    const w = container.clientWidth
    const h = container.clientHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  })

  return {
    init() {
      const w = container.clientWidth || 400
      const h = container.clientHeight || 400
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 40)
      camera.position.set(0, 0.2, 3.2)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(getDevicePixelRatio())
      renderer.setSize(w, h, false)
      container.appendChild(renderer.domElement)

      setupStudio(scene, renderer, { accent, lowPower: options.lowPower })

      const dropGeo = new THREE.LatheGeometry(
        [
          new THREE.Vector2(0, -0.55),
          new THREE.Vector2(0.12, -0.5),
          new THREE.Vector2(0.28, -0.15),
          new THREE.Vector2(0.22, 0.35),
          new THREE.Vector2(0.08, 0.55),
          new THREE.Vector2(0, 0.58),
        ],
        32,
      )
      drop = new THREE.Mesh(
        dropGeo,
        new THREE.MeshPhysicalMaterial({
          color: accent,
          roughness: 0.12,
          metalness: 0.05,
          transmission: 0.35,
          thickness: 0.8,
          clearcoat: 1,
          clearcoatRoughness: 0.08,
          emissive: new THREE.Color(accent),
          emissiveIntensity: 0.15,
        }),
      )
      drop.castShadow = true
      scene.add(drop)

      ripple = new THREE.Mesh(
        new THREE.RingGeometry(0.2, 0.22, 64),
        new THREE.MeshBasicMaterial({
          color: accent,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
        }),
      )
      ripple.rotation.x = -Math.PI / 2
      ripple.position.y = -0.55
      scene.add(ripple)

      glow = new THREE.PointLight(accent, 0.6, 6)
      glow.position.set(0, 0.5, 1)
      scene.add(glow)

      resizeObserver.observe(container)
    },

    play() {
      const tick = () => {
        if (destroyed) return
        animationId = requestAnimationFrame(tick)
        const dt = clock.getDelta()
        if (drop && !reduced) drop.rotation.y += dt * 0.35
        if (pulseT > 0) {
          pulseT -= dt
          const s = 1 + Math.sin(pulseT * 8) * 0.06 * (pulseT / 0.8)
          drop?.scale.setScalar(s)
        } else {
          drop?.scale.setScalar(1)
        }
        if (ripple && rippleT < 1.2) {
          rippleT += dt
          const p = rippleT / 1.2
          ripple.scale.setScalar(1 + p * 4)
          ;(ripple.material as THREE.MeshBasicMaterial).opacity = (1 - p) * 0.45
        }
        renderer?.render(scene!, camera!)
      }
      tick()
    },

    pause() {
      cancelAnimationFrame(animationId)
    },

    destroy() {
      destroyed = true
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
      renderer?.dispose()
      container.innerHTML = ''
    },

    trigger(_action: string) {
      rippleT = 0
      pulseT = 0.8
      if (glow) glow.intensity = 1.4
      window.setTimeout(() => { if (glow) glow.intensity = 0.6 }, 600)
    },
  }
}
