import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

interface Props extends AnimatedSceneProps {
  variant?: 'shield' | 'layers'
}

export default function InnateImmunityScene({ activeZone, revealed, variant = 'shield' }: Props) {
  const peptides = zoneActive(activeZone, revealed, 'peptides')
  const phago = zoneActive(activeZone, revealed, 'phagocytosis')
  const cold = zoneActive(activeZone, revealed, 'cold')
  const wave = peptides || cold
  const lit = !!activeZone
  const layers = variant === 'layers' ? revealed.size : 0

  return (
    <div className={`anim-scene anim-scene--immune ${lit ? 'is-lit' : ''} ${wave ? 'is-wave' : ''} ${phago ? 'is-phago' : ''}`} aria-hidden>
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        <g transform="translate(200, 210)">
          <ellipse cy="-70" rx="32" ry="34" className="anim-body-fill" />
          <path d="M-28 -36 Q0 -26 28 -36 L24 40 Q0 56 -24 40 Z" className="anim-body-fill" />
        </g>

        <g transform="translate(200, 115)" className={`anim-shield ${wave || phago ? 'is-active' : ''}`}>
          {[0, 1, 2].map(i => (
            layers > i && (
              <path
                key={i}
                d="M0 -48 L38 -32 V8 C38 32 20 48 0 54 C-20 48 -38 32 -38 8 V-32 Z"
                className="anim-shield-layer"
                style={{ transform: `scale(${1 + i * 0.12})`, transformOrigin: '0px 0px' }}
              />
            )
          ))}
          <path d="M0 -48 L38 -32 V8 C38 32 20 48 0 54 C-20 48 -38 32 -38 8 V-32 Z" className="anim-shield-path" />
          {wave && (
            <>
              <path d="M-24 0 Q0 -14 24 0" className="anim-shield-wave" />
              <path d="M-24 12 Q0 -2 24 12" className="anim-shield-wave anim-shield-wave--b" />
            </>
          )}
        </g>

        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2
          const baseR = 72
          const r = wave ? baseR + 40 + i * 4 : baseR
          const x = 200 + Math.cos(angle) * (wave ? baseR : r)
          const y = 130 + Math.sin(angle) * (wave ? baseR * 0.65 : r * 0.65)
          const repelX = wave ? Math.cos(angle) * 50 : 0
          const repelY = wave ? Math.sin(angle) * -35 : 0
          return (
            <g
              key={i}
              transform={`translate(${x + repelX}, ${y + repelY})`}
              className={`anim-virus ${wave ? 'is-repelled' : ''}`}
              style={{ opacity: wave ? 0.15 : 1 }}
            >
              <circle r="5" className="anim-virus-core" />
            </g>
          )
        })}

        {variant === 'layers' && (
          <text x="200" y="300" className="anim-immune-caption">Слои защиты: {layers}/3</text>
        )}
      </svg>
    </div>
  )
}
