import { useEffect } from 'react'

const BASE_WIDTH = 1024
const BASE_HEIGHT = 1366
const MIN_SCALE = 0.25
const MAX_SCALE = 1

export function computeFrameScale(): number {
  const viewport = window.visualViewport
  const width = viewport?.width ?? window.innerWidth
  const height = viewport?.height ?? window.innerHeight

  if (width <= 0 || height <= 0) return 1
  if (width >= BASE_WIDTH && height >= BASE_HEIGHT) return 1

  const scale = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT)

  return Math.max(MIN_SCALE, Math.min(scale, MAX_SCALE))
}

export function applyFrameScale(): void {
  const scale = computeFrameScale()
  const roundedScale = Number(scale.toFixed(6))
  const root = document.documentElement

  root.style.setProperty('--frame-scale', roundedScale.toFixed(6))
  root.style.setProperty('--scaled-frame-width', `${BASE_WIDTH * roundedScale}px`)
  root.style.setProperty('--scaled-frame-height', `${BASE_HEIGHT * roundedScale}px`)
}

export function useFrameScale() {
  useEffect(() => {
    applyFrameScale()

    window.addEventListener('resize', applyFrameScale)
    window.addEventListener('orientationchange', applyFrameScale)
    window.visualViewport?.addEventListener('resize', applyFrameScale)

    return () => {
      window.removeEventListener('resize', applyFrameScale)
      window.removeEventListener('orientationchange', applyFrameScale)
      window.visualViewport?.removeEventListener('resize', applyFrameScale)
    }
  }, [])
}
