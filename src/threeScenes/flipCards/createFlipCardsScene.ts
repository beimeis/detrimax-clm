import * as THREE from 'three'
import type { Scene3D } from '../types'
import { getDevicePixelRatio } from '../utils/capabilities'
import { setupStudio, easeOutCubic } from '../shared/studioSetup'
import type { D3SceneOptions } from '../shared/d3SceneTypes'

export function createFlipCardsScene(
  container: HTMLElement,
  options: D3SceneOptions = {},
): Scene3D {
  const accent = options.accentColor ?? 0xd32f2f
  const cards: { mesh: THREE.Mesh; angle: number; flipped: boolean; flipT: number }[] = []
  const count = 4

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

  const cardIds = ['mother', 'milk', 'skin', 'growth', 'sweat', 'sleep-early', 'bones', 'rachit', '0', '1', '2']

  return {
    init() {
      const w = container.clientWidth || 400
      const h = container.clientHeight || 400
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 40)
      camera.position.set(0, 0.3, 4.2)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(getDevicePixelRatio())
      renderer.setSize(w, h, false)
      container.appendChild(renderer.domElement)
      setupStudio(scene, renderer, { accent, lowPower: options.lowPower })

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 0.8 - Math.PI * 0.4
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.55, 0.75, 0.04),
          new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0.15,
            metalness: 0.05,
            clearcoat: 0.8,
          }),
        )
        mesh.position.set(Math.sin(angle) * 1.4, 0, Math.cos(angle) * 1.4 - 0.5)
        mesh.rotation.y = -angle
        scene!.add(mesh)
        cards.push({ mesh, angle, flipped: false, flipT: 0 })
      }

      resizeObserver.observe(container)
    },

    play() {
      const tick = () => {
        if (destroyed) return
        animationId = requestAnimationFrame(tick)
        cards.forEach(c => {
          if (c.flipT > 0 && c.flipT < 1) {
            c.flipT += 0.04
            const t = easeOutCubic(Math.min(1, c.flipT))
            c.mesh.rotation.x = c.flipped ? t * Math.PI : (1 - t) * Math.PI
          }
          c.mesh.position.y = Math.sin(Date.now() * 0.001 + c.angle) * 0.04
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
      const idx = cardIds.indexOf(action)
      const i = idx >= 0 ? idx % count : 0
      const c = cards[i]
      if (!c || c.flipped) return
      c.flipped = true
      c.flipT = 0.01
      ;(c.mesh.material as THREE.MeshPhysicalMaterial).color.setHex(accent)
    },
  }
}
