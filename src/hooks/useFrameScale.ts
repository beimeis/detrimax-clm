import { useEffect } from 'react'

const FRAME_W = 1024
const FRAME_H = 1366

export function computeFrameScale(): number {
  const w = window.innerWidth
  const h = window.innerHeight
  if (w <= 0 || h <= 0) return 1
  return Math.max(0.25, Math.min(w / FRAME_W, h / FRAME_H, 1))
}

export function applyFrameScale(): void {
  document.documentElement.style.setProperty('--frame-scale', String(computeFrameScale()))
}

export function useFrameScale() {
  useEffect(() => {
    applyFrameScale()
    window.addEventListener('resize', applyFrameScale)
    return () => window.removeEventListener('resize', applyFrameScale)
  }, [])
}
