import ProductPack from './ProductPack'

/** @deprecated используйте ProductPack */
export function ProductBottle(props: { variant: 'baby' | 'active'; glowing?: boolean }) {
  return <ProductPack variant={props.variant} glowing={props.glowing} enlarged />
}

export function SunRays() {
  return (
    <div className="sun-rays" aria-hidden>
      <div className="sun-orb" />
      <div className="sun-ray sun-ray-1" />
      <div className="sun-ray sun-ray-2" />
      <div className="sun-ray sun-ray-3" />
    </div>
  )
}

const BODY_ZONES: Record<string, { top: string; left: string }> = {
  bones: { top: '58%', left: '50%' },
  teeth: { top: '12%', left: '50%' },
  muscles: { top: '72%', left: '38%' },
  sleep: { top: '18%', left: '62%' },
  allergy: { top: '42%', left: '58%' },
}

export function BabyBodyMap({ activeZone }: { activeZone: string | null }) {
  return (
    <div className="baby-body-map">
      <svg className="baby-silhouette" viewBox="0 0 100 140" aria-hidden>
        <ellipse cx="50" cy="18" rx="14" ry="16" fill="currentColor" opacity="0.25" />
        <rect x="38" y="32" width="24" height="36" rx="10" fill="currentColor" opacity="0.2" />
        <rect x="30" y="66" width="14" height="40" rx="6" fill="currentColor" opacity="0.18" />
        <rect x="56" y="66" width="14" height="40" rx="6" fill="currentColor" opacity="0.18" />
        <rect x="36" y="104" width="12" height="28" rx="5" fill="currentColor" opacity="0.16" />
        <rect x="52" y="104" width="12" height="28" rx="5" fill="currentColor" opacity="0.16" />
      </svg>
      {Object.entries(BODY_ZONES).map(([id, pos]) => (
        <div
          key={id}
          className={`body-zone ${activeZone === id ? 'zone-active' : ''}`}
          style={{ top: pos.top, left: pos.left }}
        />
      ))}
    </div>
  )
}

export function ImmunityHero({ accent }: { accent: string }) {
  return (
    <div className="immunity-hero" style={{ '--accent': accent } as React.CSSProperties}>
      <div className="immunity-child" aria-hidden>
        <svg className="child-silhouette" viewBox="0 0 80 120">
          <ellipse cx="40" cy="16" rx="12" ry="14" fill="currentColor" opacity="0.35" />
          <rect x="30" y="28" width="20" height="32" rx="8" fill="currentColor" opacity="0.3" />
          <rect x="22" y="58" width="12" height="34" rx="5" fill="currentColor" opacity="0.25" />
          <rect x="46" y="58" width="12" height="34" rx="5" fill="currentColor" opacity="0.25" />
        </svg>
      </div>

      <div className="virus-field" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="virus-dot" />
        ))}
      </div>

      <button type="button" className="shield-btn" aria-label="Иммунный щит">
        <div className="shield-wave-ring" />
        <div className="shield-wave-ring delay" />
        <svg className="shield-svg" viewBox="0 0 120 140">
          <path
            d="M60 8 L100 28 V70 C100 98 82 118 60 128 C38 118 20 98 20 70 V28 Z"
            fill="color-mix(in srgb, var(--accent) 18%, white)"
            stroke="var(--accent)"
            strokeWidth="2.5"
          />
        </svg>
      </button>
    </div>
  )
}

export function NeuronNetwork({ active }: { active?: boolean }) {
  return (
    <div className={`neuron-network ${active ? 'neuron-active' : ''}`}>
      <svg className="neuron-svg" viewBox="0 0 200 120" aria-hidden>
        <line className="neuron-line" x1="20" y1="60" x2="80" y2="30" />
        <line className="neuron-line" x1="80" y1="30" x2="140" y2="55" />
        <line className="neuron-line" x1="80" y1="30" x2="100" y2="90" />
        <line className="neuron-line" x1="140" y1="55" x2="180" y2="40" />
        <line className="neuron-line" x1="100" y1="90" x2="160" y2="95" />
        <circle className="neuron-node" cx="20" cy="60" r="4" />
        <circle className="neuron-node" cx="80" cy="30" r="5" />
        <circle className="neuron-node" cx="140" cy="55" r="4" />
        <circle className="neuron-node" cx="100" cy="90" r="4" />
        <circle className="neuron-node" cx="180" cy="40" r="3.5" />
        <circle className="neuron-node" cx="160" cy="95" r="3.5" />
      </svg>
    </div>
  )
}

export function SchoolVisual({ highlight }: { highlight: 'lifestyle' | 'physiology' | null }) {
  return (
    <div className="school-visual">
      <div className={`school-device ${highlight === 'lifestyle' ? 'highlight' : ''}`}>
        <div className="device-screen" />
        <div className="device-base" />
      </div>
      <div className={`school-growth ${highlight === 'physiology' ? 'highlight' : ''}`}>
        <svg className="skeleton-icon" viewBox="0 0 60 100" aria-hidden>
          <ellipse cx="30" cy="12" rx="10" ry="12" fill="currentColor" opacity="0.35" />
          <rect x="24" y="22" width="12" height="28" rx="4" fill="currentColor" opacity="0.3" />
          <rect x="18" y="48" width="8" height="30" rx="3" fill="currentColor" opacity="0.25" />
          <rect x="34" y="48" width="8" height="30" rx="3" fill="currentColor" opacity="0.25" />
          <rect x="22" y="76" width="7" height="22" rx="3" fill="currentColor" opacity="0.2" />
          <rect x="31" y="76" width="7" height="22" rx="3" fill="currentColor" opacity="0.2" />
        </svg>
      </div>
    </div>
  )
}
