import { useRef, useEffect, useCallback } from 'react'

interface SwipeHandlers {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
}

const THRESHOLD = 60
const MAX_VERTICAL = 80

export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeHandlers) {
  const start = useRef({ x: 0, y: 0, t: 0 })

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    start.current = { x: t.clientX, y: t.clientY, t: Date.now() }
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const t = e.changedTouches[0]
    const dx = t.clientX - start.current.x
    const dy = Math.abs(t.clientY - start.current.y)
    const dt = Date.now() - start.current.t
    if (dy > MAX_VERTICAL || dt > 600) return
    if (dx < -THRESHOLD) onSwipeLeft?.()
    else if (dx > THRESHOLD) onSwipeRight?.()
  }, [onSwipeLeft, onSwipeRight])

  return { onTouchStart, onTouchEnd }
}

export function useSwipeElement(handlers: SwipeHandlers, enabled = true) {
  const ref = useRef<HTMLDivElement>(null)
  const start = useRef({ x: 0, y: 0, t: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return

    const onStart = (e: TouchEvent) => {
      const t = e.touches[0]
      start.current = { x: t.clientX, y: t.clientY, t: Date.now() }
    }

    const onEnd = (e: TouchEvent) => {
      const t = e.changedTouches[0]
      const dx = t.clientX - start.current.x
      const dy = Math.abs(t.clientY - start.current.y)
      const dt = Date.now() - start.current.t
      if (dy > MAX_VERTICAL || dt > 600) return
      if (dx < -THRESHOLD) handlers.onSwipeLeft?.()
      else if (dx > THRESHOLD) handlers.onSwipeRight?.()
    }

    el.addEventListener('touchstart', onStart, { passive: true })
    el.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchend', onEnd)
    }
  }, [enabled, handlers.onSwipeLeft, handlers.onSwipeRight])

  return ref
}
