import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

const NODES = [
  { id: 'mother', label: 'Мама', angle: -90 },
  { id: 'milk', label: 'ГВ', angle: 0 },
  { id: 'skin', label: 'Солнце', angle: 90 },
  { id: 'growth', label: 'Рост', angle: 180 },
]

function nodePos(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180
  return { x: 200 + r * Math.cos(rad), y: 160 + r * Math.sin(rad) }
}

export default function DeficitCausesScene({ activeZone, revealed }: AnimatedSceneProps) {
  const center = { x: 200, y: 160 }

  return (
    <div className={`anim-scene anim-scene--deficit ${activeZone ? 'is-lit' : ''}`} aria-hidden>
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        <text x="200" y="28" className="anim-stage-title">Пустое депо D3</text>

        {NODES.map(n => {
          const far = nodePos(n.angle, 118)
          const near = nodePos(n.angle, 72)
          const on = zoneActive(activeZone, revealed, n.id)
          const pos = on ? near : far
          return (
            <g key={n.id} className={`anim-depot-node ${on ? 'is-linked' : ''}`}>
              <line
                x1={center.x}
                y1={center.y}
                x2={pos.x}
                y2={pos.y}
                className={`anim-hub-line ${on ? 'is-on' : ''}`}
              />
              <g transform={`translate(${pos.x}, ${pos.y})`} className={`anim-depot-node-body ${on ? 'is-near' : ''}`}>
                <circle r={on ? 34 : 28} className={`anim-hub-node ${on ? 'is-on' : ''}`} />
                <text y="5" className="anim-hub-label">{n.label}</text>
              </g>
            </g>
          )
        })}

        <g className="anim-hub-center">
          <circle cx={center.x} cy={center.y} r="46" className="anim-depot-empty anim-pulse-slow" />
          <ellipse cx={center.x} cy={center.y - 8} rx="20" ry="22" className="anim-body-fill" />
          <path d={`M${center.x - 16} ${center.y + 8} Q${center.x} ${center.y + 20} ${center.x + 16} ${center.y + 8} L${center.x + 12} ${center.y + 34} Q${center.x} ${center.y + 44} ${center.x - 12} ${center.y + 34} Z`} className="anim-body-fill" />
        </g>
      </svg>
    </div>
  )
}
