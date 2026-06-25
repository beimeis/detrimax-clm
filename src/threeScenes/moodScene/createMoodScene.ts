import * as THREE from 'three'
import type { Scene3D } from '../types'
import { getDevicePixelRatio } from '../utils/capabilities'
import { setupStudio } from '../shared/studioSetup'
import type { D3SceneOptions } from '../shared/d3SceneTypes'

export function createMoodScene(
  container: HTMLElement,
  options: D3SceneOptions = {},
): Scene3D {
  const accent = options.accentColor ?? 0x5c6bc0
  let moon: THREE.Mesh | null = null
  let pulse = 0

  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let animationId = 0
  let destroyed = false
  let clock = new THREE.Clock()
  const stars: THREE.Mesh[] = []

  const resizeObserver = new ResizeObserver(() => {
    if (!renderer || !camera || destroyed) return
    const w = container.clientWidth
    const h = container.clientHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
  })

  const ids = ['serotonin', 'adhd', 'sleep-quality', '0', '1', '2']

  return {
    init() {
      const w = container.clientWidth || 400
      const h = container.clientHeight || 400
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 40)
      camera.position.set(0, 0, 3.5)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(getDevicePixelRatio())
      renderer.setSize(w, h, false)
      container.appendChild(renderer.domElement)
      setupStudio(scene, renderer, { accent, lowPower: options.lowPower })

      moon = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 48, 48),
        new THREE.MeshPhysicalMaterial({
          color: 0xe8eaf6,
          emissive: new THREE.Color(accent),
          emissiveIntensity: 0.25,
          roughness: 0.4,
          metalness: 0,
        }),
      )
      moon.position.set(0, 0.1, 0)
      scene.add(moon)

      for (let i = 0; i < 24; i++) {
        const s = new THREE.Mesh(
          new THREE.SphereGeometry(0.02 + Math.random() * 0.02, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }),
        )
        s.position.set((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3, -0.5 - Math.random())
        scene.add(s)
        stars.push(s)
      }

      resizeObserver.observe(container)
    },

    play() {
      const tick = () => {
        if (destroyed) return
        animationId = requestAnimationFrame(tick)
        const t = clock.getElapsedTime()
        if (moon) {
          ;(moon.material as THREE.MeshPhysicalMaterial).emissiveIntensity =
            0.2 + Math.sin(t * 2) * 0.1 + (pulse > 0 ? 0.4 : 0)
          moon.rotation.y = t * 0.08
        }
        stars.forEach((s, i) => {
          ;(s.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(t * 3 + i) * 0.25
        })
        if (pulse > 0) pulse -= 0.016
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
      pulse = 1
      const hues = [0x5c6bc0, 0xff9100, 0x7986cb]
      const idx = ids.indexOf(action)
      const hue = hues[idx >= 0 ? idx % hues.length : 0]
      if (moon) {
        ;(moon.material as THREE.MeshPhysicalMaterial).emissive = new THREE.Color(hue)
      }
    },
  }
}
