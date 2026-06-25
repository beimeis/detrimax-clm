import * as THREE from 'three'
import type { Scene3D } from '../types'
import { getDevicePixelRatio } from '../utils/capabilities'
import { setupStudio } from '../shared/studioSetup'
import type { D3SceneOptions } from '../shared/d3SceneTypes'

const NODE_POS = [
  [-1.2, 0.6, 0],
  [-0.4, 1.0, 0.3],
  [0.5, 0.8, -0.2],
  [1.1, 0.2, 0.1],
  [0.2, -0.3, 0.4],
  [-0.8, -0.5, -0.1],
  [0.8, -0.7, 0.2],
]

export function createNeuralNetworkScene(
  container: HTMLElement,
  options: D3SceneOptions = {},
): Scene3D {
  const accent = options.accentColor ?? 0x00a896
  const nodes: THREE.Mesh[] = []
  const lines: THREE.Line[] = []
  let activeIdx = -1
  let pulse = 0

  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let animationId = 0
  let destroyed = false
  let clock = new THREE.Clock()

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
      camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 40)
      camera.position.set(0, 0, 3.5)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(getDevicePixelRatio())
      renderer.setSize(w, h, false)
      container.appendChild(renderer.domElement)
      setupStudio(scene, renderer, { accent, lowPower: options.lowPower })

      const nodeGeo = new THREE.SphereGeometry(0.12, 24, 24)
      NODE_POS.forEach((p) => {
        const m = new THREE.Mesh(
          nodeGeo,
          new THREE.MeshStandardMaterial({
            color: accent,
            emissive: new THREE.Color(accent),
            emissiveIntensity: 0.2,
            roughness: 0.3,
          }),
        )
        m.position.set(p[0], p[1], p[2])
        scene!.add(m)
        nodes.push(m)
      })

      for (let i = 0; i < nodes.length - 1; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() > 0.45) continue
          const pts = [nodes[i].position, nodes[j].position]
          const geo = new THREE.BufferGeometry().setFromPoints(pts)
          const line = new THREE.Line(
            geo,
            new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.25 }),
          )
          scene!.add(line)
          lines.push(line)
        }
      }

      resizeObserver.observe(container)
    },

    play() {
      const tick = () => {
        if (destroyed) return
        animationId = requestAnimationFrame(tick)
        const t = clock.getElapsedTime()
        nodes.forEach((n, i) => {
          const glow = activeIdx === i ? 0.8 + Math.sin(t * 6) * 0.3 : 0.2
          ;(n.material as THREE.MeshStandardMaterial).emissiveIntensity = glow
          n.scale.setScalar(activeIdx === i ? 1.25 : 1)
        })
        lines.forEach(l => {
          ;(l.material as THREE.LineBasicMaterial).opacity =
            activeIdx >= 0 ? 0.15 + Math.sin(t * 4 + pulse) * 0.25 : 0.25
        })
        renderer?.render(scene!, camera!)
      }
      tick()
    },

    pause() { cancelAnimationFrame(animationId) },

    destroy() {
      destroyed = true
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
      renderer?.dispose()
      container.innerHTML = ''
    },

    trigger(action: string) {
      const map: Record<string, number> = { vdr: 1, plasticity: 3, neuroprotect: 5, '0': 0, '1': 1, '2': 2 }
      activeIdx = map[action] ?? 2
      pulse += 1
    },
  }
}
