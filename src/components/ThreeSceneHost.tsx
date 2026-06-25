import { useEffect, useRef, useState, useCallback } from 'react'
import type { Scene3D, Scene3DOptions } from '../threeScenes/types'
import {
  isWebGLAvailable,
  prefersReducedMotion,
  isLowPowerDevice,
} from '../threeScenes/utils/capabilities'

interface Props<T extends Scene3DOptions = Scene3DOptions> {
  factory: (container: HTMLElement, options?: T) => Scene3D
  options?: T
  fallback: React.ReactNode
  className?: string
  onSceneReady?: (scene: Scene3D) => void
}

export default function ThreeSceneHost<T extends Scene3DOptions>({
  factory,
  options = {} as T,
  fallback,
  className = '',
  onSceneReady,
}: Props<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<Scene3D | null>(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (!isWebGLAvailable()) {
      setUseFallback(true)
      return
    }

    const sceneOptions = {
      reducedMotion: prefersReducedMotion(),
      lowPower: isLowPowerDevice(),
      ...options,
    } as T

    const scene = factory(container, sceneOptions)
    scene.init()
    scene.play()
    sceneRef.current = scene
    onSceneReady?.(scene)

    return () => {
      scene.destroy()
      sceneRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- factory стабилен; options задаются через useMemo в родителе
  }, [factory])

  const trigger = useCallback((action: string) => {
    sceneRef.current?.trigger(action)
  }, [])

  // Expose trigger via data attribute for parent buttons
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    ;(el as HTMLElement & { trigger3D?: (a: string) => void }).trigger3D = trigger
  }, [trigger, useFallback])

  if (useFallback) {
    return <div className={`three-scene-fallback ${className}`}>{fallback}</div>
  }

  return (
    <div
      ref={containerRef}
      className={`three-scene-host ${className}`}
      data-three-host
    />
  )
}

/** Вызов trigger на host-элементе из родителя */
export function triggerThreeScene(hostEl: HTMLElement | null, action: string) {
  if (!hostEl) return
  const host = hostEl.querySelector('[data-three-host]') as HTMLElement & { trigger3D?: (a: string) => void }
  host?.trigger3D?.(action)
}
