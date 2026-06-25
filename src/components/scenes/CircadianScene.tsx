import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

export default function CircadianScene({ activeZone, revealed }: AnimatedSceneProps) {
  const sleep = zoneActive(activeZone, revealed, 'sleep-quality')
  const mood = zoneActive(activeZone, revealed, 'serotonin')
  const behavior = zoneActive(activeZone, revealed, 'adhd')
  const mode = sleep ? 'sleep' : mood ? 'mood' : behavior ? 'behavior' : 'idle'

  return (
    <div className={`anim-scene anim-scene--circadian is-mode-${mode} ${activeZone ? 'is-lit' : ''}`} aria-hidden>
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        {/* Biorhythm sphere */}
        <circle cx="200" cy="140" r="72" className="anim-bio-sphere" />
        <circle cx="200" cy="140" r="58" className={`anim-bio-core ${mode === 'mood' ? 'is-gold' : ''}`} />

        {mode === 'behavior' && (
          <g className="anim-particles">
            {Array.from({ length: 12 }).map((_, i) => (
              <circle
                key={i}
                cx={200 + Math.cos(i * 0.9) * (40 + (i % 3) * 8)}
                cy={140 + Math.sin(i * 0.9) * (40 + (i % 3) * 8)}
                r="3"
                className="anim-particle"
                style={{ ['--i' as string]: i }}
              />
            ))}
          </g>
        )}

        <path d="M60 210 A140 140 0 0 1 340 210" className="anim-circadian-arc" fill="none" />
        <circle
          cx={sleep ? 90 : mood ? 200 : behavior ? 310 : 140}
          cy={sleep ? 130 : mood ? 70 : behavior ? 130 : 95}
          r="16"
          className={`anim-circadian-orb ${mode === 'sleep' ? 'is-moon' : mode === 'mood' ? 'is-gold' : 'is-sun'}`}
        />

        <g transform="translate(200, 250)">
          <ellipse cx="0" cy="0" rx="48" ry="10" className="anim-bed" />
          <circle cx="0" cy="-16" r="12" className="anim-body-fill" />
        </g>

        <text x="200" y="300" className="anim-circadian-caption">
          {mode === 'sleep' ? 'Мягкий ночной режим' : mode === 'mood' ? 'Серотонин · дофамин' : mode === 'behavior' ? 'Ритм выстраивается' : 'Биоритм'}
        </text>
      </svg>
    </div>
  )
}
