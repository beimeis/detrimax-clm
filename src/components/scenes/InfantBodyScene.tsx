import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'
import VitaminRay from './VitaminRay'

const ZONES = [
  { id: 'sleep', cx: 200, cy: 68 },
  { id: 'teeth', cx: 228, cy: 88 },
  { id: 'immunity', cx: 200, cy: 132 },
  { id: 'bones', cx: 200, cy: 198 },
  { id: 'muscles', cx: 200, cy: 262 },
]

const DROP = { x: 200, y: 24 }

export default function InfantBodyScene({ activeZone, revealed }: AnimatedSceneProps) {
  const lit = !!activeZone
  const active = ZONES.find(z => z.id === activeZone)

  return (
    <div className={`anim-scene anim-scene--infant ${lit ? 'is-lit' : ''}`} aria-hidden>
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        <defs>
          <radialGradient id="infant-glow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FFB74D" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFB74D" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="200" cy="160" rx="120" ry="130" fill="url(#infant-glow)" className="anim-pulse-slow" />

        <g className="anim-d3-drop" transform="translate(200, 24)">
          <circle r="14" className="anim-d3-drop-core" />
          <circle r="22" className="anim-d3-drop-halo" />
        </g>

        {active && <VitaminRay from={DROP} to={{ x: active.cx, y: active.cy }} active />}

        <g className="anim-infant-body">
          <ellipse cx="200" cy="68" rx="36" ry="40" className="anim-body-fill" />
          <path d="M168 108 Q200 118 232 108 L228 230 Q200 248 172 230 Z" className="anim-body-fill" />
          <ellipse cx="158" cy="175" rx="14" ry="28" className="anim-body-fill" />
          <ellipse cx="242" cy="175" rx="14" ry="28" className="anim-body-fill" />
          <ellipse cx="182" cy="268" rx="12" ry="32" className="anim-body-fill" />
          <ellipse cx="218" cy="268" rx="12" ry="32" className="anim-body-fill" />
          {/* Teeth hint */}
          <g transform="translate(218, 82)" className={`anim-teeth-hint ${zoneActive(activeZone, revealed, 'teeth') ? 'is-on' : ''}`}>
            <rect x="-8" y="0" width="5" height="8" rx="2" className="anim-tooth" />
            <rect x="-1" y="0" width="5" height="8" rx="2" className="anim-tooth" />
            <rect x="6" y="0" width="5" height="8" rx="2" className="anim-tooth" />
          </g>
        </g>

        {ZONES.map(z => (
          <circle
            key={z.id}
            cx={z.cx}
            cy={z.cy}
            r={zoneActive(activeZone, revealed, z.id) ? 26 : 0}
            className={`anim-zone-ring ${zoneActive(activeZone, revealed, z.id) ? 'is-on' : ''}`}
            opacity={zoneActive(activeZone, revealed, z.id) ? 1 : 0}
          />
        ))}
      </svg>
    </div>
  )
}
