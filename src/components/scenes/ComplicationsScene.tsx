import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

const STAGES = [
  { id: 'sweat', label: 'Потливость', zone: 'early' as const },
  { id: 'sleep-early', label: 'Сон', zone: 'early' as const },
  { id: 'rachit', label: 'Рахит', zone: 'late' as const },
]

export default function ComplicationsScene({ activeZone, revealed }: AnimatedSceneProps) {
  const active = STAGES.find(s => s.id === activeZone || revealed.has(s.id))
  const riskZone = active?.zone ?? null

  return (
    <div className={`anim-scene anim-scene--complications ${activeZone ? 'is-lit' : ''} ${riskZone ? `is-${riskZone}` : ''}`} aria-hidden>
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        <text x="200" y="32" className="anim-stage-title">Клиническая шкала риска</text>

        {/* Risk gauge */}
        <g transform="translate(200, 170)">
          <rect x="-24" y="-90" width="48" height="180" rx="24" className="anim-risk-gauge-bg" />
          <rect x="-18" y="-84" width="36" height="56" rx="14" className="anim-risk-zone anim-risk-zone--early" />
          <rect x="-18" y="-28" width="36" height="56" rx="0" className="anim-risk-zone anim-risk-zone--mid" />
          <rect x="-18" y="28" width="36" height="56" rx="14" className="anim-risk-zone anim-risk-zone--late" />
          <circle
            cy={riskZone === 'early' ? -56 : riskZone === 'late' ? 56 : 0}
            r="14"
            className={`anim-risk-indicator ${riskZone ? 'is-on' : ''}`}
          />
        </g>

        <text x="250" y="100" className="anim-stage-caption">Ранние</text>
        <text x="250" y="200" className="anim-stage-caption">Поздние</text>

        {STAGES.map((s, i) => {
          const on = zoneActive(activeZone, revealed, s.id)
          const x = 70 + i * 130
          return (
            <g key={s.id} transform={`translate(${x}, 280)`}>
              <rect x="-44" y="-22" width="88" height="44" rx="12" className={`anim-stage-card ${on ? 'is-on' : ''}`} />
              <text y="5" className="anim-stage-label">{s.label}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
