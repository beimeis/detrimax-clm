import { useState } from 'react'
import { SCHOOL_CHILD_ASSET } from './schoolChildAsset'

export default function RiskChildFigure() {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className="risk-child-asset">
      {!failed && (
        <img
          src={SCHOOL_CHILD_ASSET}
          alt=""
          className={`risk-child-photo ${loaded ? 'is-loaded' : ''}`}
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}

      {(!loaded || failed) && (
        <div className="risk-child-placeholder" aria-hidden={loaded && !failed}>
          <div className="risk-child-placeholder-glow" />
          <p className="risk-child-placeholder-label">3D / photo asset</p>
          <p className="risk-child-placeholder-path">
            public/assets/risk-factors/school-child.png
          </p>
        </div>
      )}

      <div className="risk-child-ground" aria-hidden />
    </div>
  )
}
