interface Props {
  accent?: string
  virusCount?: number
}

/** CSS-fallback без WebGL */
export default function ImmuneShieldFallback({
  accent = '#5A8A96',
  virusCount = 18,
}: Props) {
  const count = Math.min(20, Math.max(15, virusCount))

  return (
    <div className="immune-shield-fallback">
      <div className="fallback-shield-wrap">
        <div className="fallback-shield" style={{ '--accent': accent } as React.CSSProperties}>
          <svg viewBox="0 0 100 120" className="fallback-shield-svg" aria-hidden>
            <defs>
              <linearGradient id="fbShieldGlass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                <stop offset="100%" stopColor={accent} stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              d="M50 8 L88 28 L88 62 C88 86 68 104 50 112 C32 104 12 86 12 62 L12 28 Z"
              fill="url(#fbShieldGlass)"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.2"
            />
          </svg>
        </div>
        {[...Array(count)].map((_, i) => (
          <span key={i} className="fallback-virus" style={{ animationDelay: `${(i % 8) * 0.2}s` }} />
        ))}
      </div>
      <p className="fallback-caption">Стеклянный иммунный барьер · выберите механизм ниже</p>
    </div>
  )
}
