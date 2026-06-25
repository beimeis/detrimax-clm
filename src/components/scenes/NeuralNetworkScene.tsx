import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

const NODES = [
  { id: 'vdr', x: 120, y: 100, label: 'VDR' },
  { id: 'plasticity', x: 280, y: 100, label: 'Пластичность' },
  { id: 'neuroprotect', x: 200, y: 200, label: 'Защита' },
]

export default function NeuralNetworkScene({ activeZone, revealed }: AnimatedSceneProps) {
  const mode = activeZone ?? (revealed.has('vdr') ? 'vdr' : revealed.has('plasticity') ? 'plasticity' : revealed.has('neuroprotect') ? 'neuroprotect' : null)

  return (
    <div className={`anim-scene anim-scene--neural ${activeZone ? 'is-lit' : ''} ${mode ? `is-mode-${mode}` : ''}`} aria-hidden>
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        <path
          d="M200 55 C250 55 280 90 275 130 C290 150 285 190 260 210 C240 235 200 245 160 210 C135 190 130 150 145 130 C140 90 170 55 200 55 Z"
          className={`anim-brain-outline ${mode === 'neuroprotect' ? 'is-shielded' : ''}`}
        />

        {mode === 'neuroprotect' && (
          <path
            d="M200 55 C250 55 280 90 275 130 C290 150 285 190 260 210 C240 235 200 245 160 210 C135 190 130 150 145 130 C140 90 170 55 200 55 Z"
            className="anim-brain-shield"
          />
        )}

        {NODES.map(n => {
          const on = zoneActive(activeZone, revealed, n.id)
          return (
            <g key={n.id}>
              {on && mode === 'vdr' && (
                <>
                  <circle cx="160" cy="130" r="8" className="anim-neural-flash" />
                  <circle cx="240" cy="130" r="8" className="anim-neural-flash anim-neural-flash--b" />
                  <circle cx="200" cy="170" r="8" className="anim-neural-flash anim-neural-flash--c" />
                </>
              )}
              <line x1={n.x} y1={n.y} x2={200} y2={150} className={`anim-neural-link ${on ? 'is-on' : ''} ${mode === 'plasticity' && on ? 'is-fast' : ''}`} />
              <circle cx={n.x} cy={n.y} r={on ? 22 : 16} className={`anim-neural-node ${on ? 'is-on' : ''}`} />
              <text x={n.x} y={n.y + 40} className="anim-neural-label">{n.label}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
