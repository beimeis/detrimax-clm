import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

export default function AdaptiveImmunityScene({ activeZone, revealed }: AnimatedSceneProps) {
  const tcell = zoneActive(activeZone, revealed, 'tcells')
  const treg = zoneActive(activeZone, revealed, 'treg')
  const balanced = tcell && treg
  const balance = balanced ? 0 : tcell ? -14 : treg ? 14 : 8

  return (
    <div className={`anim-scene anim-scene--adaptive ${activeZone ? 'is-lit' : ''} ${balanced ? 'is-balanced' : ''}`} aria-hidden>
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        <text x="200" y="32" className="anim-stage-title">Баланс иммунного ответа</text>

        <g transform="translate(200, 95)">
          <rect x="-4" y="0" width="8" height="88" rx="4" className="anim-balance-pole" />
          <g transform={`rotate(${balance})`} className="anim-balance-beam">
            <rect x="-110" y="-4" width="220" height="8" rx="4" className="anim-balance-bar" />
          </g>
        </g>

        <g transform="translate(95, 195)" className={`anim-cell-group ${tcell ? 'is-on is-stable' : ''}`}>
          {[0, 1, 2].map(i => (
            <circle key={i} cx={i * 16 - 16} cy={Math.sin(i * 2) * 4} r="12" className="anim-cell anim-cell--t" />
          ))}
          <text y="38" className="anim-cell-label">T-клетки</text>
        </g>

        <g transform="translate(305, 195)" className={`anim-cell-group ${treg ? 'is-on' : ''}`}>
          {treg && <ellipse cx="0" cy="0" rx="42" ry="36" className="anim-treg-shell" />}
          {[0, 1].map(i => (
            <circle key={i} cx={i * 18 - 9} cy={0} r="10" className="anim-cell anim-cell--treg" />
          ))}
          <text y="38" className="anim-cell-label">Treg</text>
        </g>

        {(tcell || treg) && (
          <path d="M95 195 Q200 145 305 195" className={`anim-cell-link ${balanced ? 'is-balanced' : 'anim-dash-flow'}`} />
        )}
      </svg>
    </div>
  )
}
