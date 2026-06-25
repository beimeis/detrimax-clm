export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isLowPowerDevice(): boolean {
  const cores = navigator.hardwareConcurrency ?? 4
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
  return cores <= 4 || memory <= 4
}

export function getDevicePixelRatio(max = 2): number {
  return Math.min(window.devicePixelRatio || 1, max)
}
