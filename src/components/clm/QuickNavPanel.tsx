import { QUICK_NAV_TARGETS, type RouteId, type SlideId } from '../../types'

interface Props {
  currentSlide: SlideId
  onNavigate: (slide: SlideId, route: RouteId) => void
  onGoHome: () => void
}

export default function QuickNavPanel({ currentSlide, onNavigate, onGoHome }: Props) {
  const items = [
    QUICK_NAV_TARGETS.dose,
    QUICK_NAV_TARGETS.baby,
    QUICK_NAV_TARGETS.active,
    QUICK_NAV_TARGETS.immunity,
    QUICK_NAV_TARGETS.risks,
  ]

  return (
    <div className="quick-nav" role="navigation" aria-label="Быстрые переходы">
      {items.map(item => (
        <button
          key={`${item.route}-${item.slide}`}
          type="button"
          className={`quick-nav-btn ${currentSlide === item.slide ? 'is-here' : ''}`}
          onClick={() => onNavigate(item.slide, item.route)}
        >
          {item.label}
        </button>
      ))}
      <button type="button" className="quick-nav-btn quick-nav-btn--menu" onClick={onGoHome}>
        Меню
      </button>
    </div>
  )
}
