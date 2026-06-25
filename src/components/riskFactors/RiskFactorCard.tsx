export interface RiskCardData {
  id: string
  title: string
  icon: string
  thesis: string
}

interface Props {
  card: RiskCardData
  index: number
  zone: 'lifestyle' | 'physiology'
  active: boolean
  dimmed: boolean
  visited: boolean
  onSelect: () => void
}

export default function RiskFactorCard({
  card,
  index,
  zone,
  active,
  dimmed,
  visited,
  onSelect,
}: Props) {
  return (
    <div className="risk-card-wrap">
      <button
        type="button"
        className={`risk-card risk-card--${zone} card-cascade ${active ? 'active' : ''} ${dimmed ? 'dimmed' : ''} ${visited ? 'visited' : ''}`}
        style={{ animationDelay: `${0.12 + index * 0.07}s` }}
        onClick={onSelect}
      >
        <span className="risk-card-badge">{card.icon}</span>
        <span className="risk-card-title">{card.title}</span>
        <span className="risk-card-arrow" aria-hidden>›</span>
        <span className="risk-card-dots" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={`risk-card-dot ${i === index ? 'on' : ''}`} />
          ))}
        </span>
      </button>

      {active && (
        <p className={`risk-card-thesis risk-card-thesis--${zone}`}>
          {card.thesis}
        </p>
      )}
    </div>
  )
}
