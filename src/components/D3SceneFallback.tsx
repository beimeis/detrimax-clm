interface Props {
  accent?: string
  variant?: 'drop' | 'network' | 'scale' | 'cards' | 'moon'
}

/** CSS-fallback для 3D-сцен без WebGL */
export default function D3SceneFallback({ accent = '#FFB300', variant = 'drop' }: Props) {
  return (
    <div className={`d3-scene-fallback d3-scene-fallback--${variant}`}>
      <div className="d3-fallback-glow" style={{ '--accent': accent } as React.CSSProperties} />
      {variant === 'drop' && <div className="d3-fallback-drop" style={{ '--accent': accent } as React.CSSProperties} />}
      {variant === 'network' && (
        <svg className="d3-fallback-network" viewBox="0 0 200 160">
          <line x1="30" y1="80" x2="90" y2="40" stroke={accent} strokeWidth="1.5" opacity="0.4" />
          <line x1="90" y1="40" x2="160" y2="70" stroke={accent} strokeWidth="1.5" opacity="0.4" />
          <line x1="90" y1="40" x2="110" y2="120" stroke={accent} strokeWidth="1.5" opacity="0.4" />
          <circle cx="30" cy="80" r="6" fill={accent} opacity="0.5" />
          <circle cx="90" cy="40" r="8" fill={accent} opacity="0.7" />
          <circle cx="160" cy="70" r="6" fill={accent} opacity="0.5" />
          <circle cx="110" cy="120" r="6" fill={accent} opacity="0.5" />
        </svg>
      )}
      {variant === 'scale' && (
        <div className="d3-fallback-scale">
          {['#D32F2F', '#EF6C00', '#00A896', '#FFB300'].map(c => (
            <div key={c} className="d3-fallback-scale-seg" style={{ background: c }} />
          ))}
        </div>
      )}
      {variant === 'cards' && (
        <div className="d3-fallback-cards">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="d3-fallback-card" style={{ transform: `rotateY(${i * 12 - 18}deg)` }} />
          ))}
        </div>
      )}
      {variant === 'moon' && <div className="d3-fallback-moon" />}
      <p className="d3-fallback-caption">Интерактивная D3-сцена</p>
    </div>
  )
}
