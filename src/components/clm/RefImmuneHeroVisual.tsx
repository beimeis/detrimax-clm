interface Props {
  activeHotspot: string | null
}

function VirusParticle({ index, total }: { index: number; total: number }) {
  const angle = (index / total) * 360 - 90
  const radius = index % 2 === 0 ? 44 : 38
  const size = index % 3 === 0 ? 22 : 18

  return (
    <span
      className="ref-virus"
      style={{
        ['--angle' as string]: `${angle}deg`,
        ['--radius' as string]: `${radius}%`,
        ['--size' as string]: `${size}px`,
        ['--delay' as string]: `${index * 0.35}s`,
      }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="ref-virus-svg">
        <circle cx="12" cy="12" r="5" className="ref-virus-core" />
        <g className="ref-virus-spikes">
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <line
              key={deg}
              x1="12"
              y1="12"
              x2={12 + 9 * Math.cos((deg * Math.PI) / 180)}
              y2={12 + 9 * Math.sin((deg * Math.PI) / 180)}
            />
          ))}
        </g>
      </svg>
    </span>
  )
}

export default function RefImmuneHeroVisual({ activeHotspot }: Props) {
  const shieldPulse = activeHotspot === 'barrier' || activeHotspot === 'cells'

  return (
    <div className={`ref-hero-visual ${shieldPulse ? 'is-active' : ''}`} aria-hidden>
      <div className="ref-hero-glow" />

      <div className="ref-virus-field">
        {Array.from({ length: 10 }).map((_, i) => (
          <VirusParticle key={i} index={i} total={10} />
        ))}
      </div>

      <div className="ref-shield">
        <svg viewBox="0 0 120 150" className="ref-shield-svg">
          <defs>
            <linearGradient id="refShieldFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
              <stop offset="100%" stopColor="rgba(0,168,150,0.14)" />
            </linearGradient>
          </defs>
          <path
            d="M60 10 L98 28 L98 72 C98 102 78 124 60 132 C42 124 22 102 22 72 L22 28 Z"
            className="ref-shield-body"
            fill="url(#refShieldFill)"
          />
          <path
            d="M60 10 L98 28 L98 72 C98 102 78 124 60 132 C42 124 22 102 22 72 L22 28 Z"
            className="ref-shield-stroke"
          />
        </svg>
      </div>

      <div className="ref-hero-child">
        <img
          src="/assets/characters/child-immunity-3d.png"
          alt=""
          className="ref-hero-child-img"
          draggable={false}
        />
      </div>
    </div>
  )
}
