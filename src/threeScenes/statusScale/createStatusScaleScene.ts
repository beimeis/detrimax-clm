import * as THREE from 'three'
import type { Scene3D } from '../types'
import { getDevicePixelRatio } from '../utils/capabilities'
import { setupStudio } from '../shared/studioSetup'
import type { D3SceneOptions } from '../shared/d3SceneTypes'

const LEVELS = [
  { id: 'deficit', color: 0xd32f2f, h: 0.35 },
  { id: 'insufficient', color: 0xef6c00, h: 0.55 },
  { id: 'adequate', color: 0x00a896, h: 0.75 },
  { id: 'high', color: 0xffb300, h: 0.95 },
]

export function createStatusScaleScene(
  container: HTMLElement,
  options: D3SceneOptions = {},
): Scene3D {
  const segments: THREE.Mesh[] = []
  let fillLevel = 0.75
  let targetLevel = 0.75
  let marker: THREE.Mesh | null = null

  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let animationId = 0
  let destroyed = false

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
      camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 40)
      camera.position.set(0.3, 0, 3.8)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(getDevicePixelRatio())
      renderer.setSize(w, h, false)
      container.appendChild(renderer.domElement)
      setupStudio(scene, renderer, { accent: 0x00a896, lowPower: options.lowPower })

      const barW = 0.5
      LEVELS.forEach((lv, i) => {
        const seg = new THREE.Mesh(
          new THREE.BoxGeometry(barW, 0.38, 0.22),
          new THREE.MeshPhysicalMaterial({
            color: lv.color,
            roughness: 0.25,
            metalness: 0.1,
            transparent: true,
            opacity: 0.85,
          }),
        )
        seg.position.y = -0.75 + i * 0.42
        scene!.add(seg)
        segments.push(seg)
      })

      marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.14, 24, 24),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0x00a896,
          emissiveIntensity: 0.5,
        }),
      )
      marker.position.set(barW * 0.85, -0.75 + 0.75 * 1.68, 0.15)
      scene!.add(marker)

      resizeObserver.observe(container)
    },

    play() {
      const tick = () => {
        if (destroyed) return
        animationId = requestAnimationFrame(tick)
        fillLevel += (targetLevel - fillLevel) * 0.08
        if (marker) {
          marker.position.y = -0.75 + fillLevel * 1.68
        }
        segments.forEach((s, i) => {
          const lv = LEVELS[i]
          const active = Math.abs(fillLevel - lv.h) < 0.18
          ;(s.material as THREE.MeshPhysicalMaterial).emissive = new THREE.Color(active ? lv.color : 0x000000)
          ;(s.material as THREE.MeshPhysicalMaterial).emissiveIntensity = active ? 0.35 : 0
          s.scale.x = active ? 1.08 : 1
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
      const lv = LEVELS.find(l => l.id === action)
      if (lv) targetLevel = lv.h
    },
  }
}
