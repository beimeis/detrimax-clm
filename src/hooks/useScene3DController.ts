import { useCallback, useRef } from 'react'
import type { Scene3D } from '../threeScenes/types'

export function useScene3DController() {
  const sceneRef = useRef<Scene3D | null>(null)

  const onSceneReady = useCallback((scene: Scene3D) => {
    sceneRef.current = scene
  }, [])

  const trigger = useCallback((action: string) => {
    sceneRef.current?.trigger(action)
  }, [])

  return { sceneRef, onSceneReady, trigger }
}
