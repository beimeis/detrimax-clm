import { useEffect, useMemo } from 'react'
import ThreeSceneHost from './ThreeSceneHost'
import D3SceneFallback from './D3SceneFallback'
import { useScene3DController } from '../hooks/useScene3DController'
import { createVitaminDropScene } from '../threeScenes'

interface Props {
  active: boolean
  accent: string
  accentHex?: number
}

/** Мини 3D-капля D3 для продуктовых слайдов */
export default function ProductD3Aura({ active, accent, accentHex = 0xff9100 }: Props) {
  const { onSceneReady, trigger } = useScene3DController()
  const options = useMemo(() => ({ accentColor: accentHex }), [accentHex])

  useEffect(() => {
    if (active) trigger('pulse')
  }, [active, trigger])

  return (
    <div className={`product-d3-aura ${active ? 'active' : ''}`} aria-hidden>
      <ThreeSceneHost
        factory={createVitaminDropScene}
        options={options}
        onSceneReady={onSceneReady}
        fallback={<D3SceneFallback accent={accent} variant="drop" />}
      />
    </div>
  )
}
