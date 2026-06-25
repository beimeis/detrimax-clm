import { useEffect } from 'react'

export const IPAD_W = 1024
export const IPAD_H = 1366

/** Масштабирует холст 1024×1366 под viewport; на iPad Pro 12.9" — 1:1 */
export function useFrameScale() {
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const scale = Math.min(w / IPAD_W, h / IPAD_H, 1)
      const isNative = w >= IPAD_W && h >= IPAD_H - 100

      document.documentElement.style.setProperty('--frame-scale', String(scale))
      document.documentElement.classList.toggle('ipad-native', isNative)
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    window.addEventListener('orientationchange', update)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
      document.documentElement.classList.remove('ipad-native')
    }
  }, [])
}
