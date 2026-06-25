import { QUICK_NAV_TARGETS, type RouteId, type SlideId } from '../../types'

interface Props {
  currentSlide: SlideId
  onNavigate: (slide: SlideId, route: RouteId) => void
  onGoHome: () => void
}

export default function RefCompactQuickNav({ currentSlide, onNavigate, onGoHome }: Props) {
  const items = [
    QUICK_NAV_TARGETS.dose,
    QUICK_NAV_TARGETS.baby,
    QUICK_NAV_TARGETS.active,
  ]

  return (
    <nav className="ref-quick-nav" aria-label="Быстрые переходы">
      <button type="button" className="ref-quick-nav-btn ref-quick-nav-btn--menu" onClick={onGoHome}>
        Меню
      </button>
      {items.map(item => (
        <button
          key={`${item.route}-${item.slide}`}
          type="button"
          className={`ref-quick-nav-btn ${currentSlide === item.slide ? 'is-here' : ''}`}
          onClick={() => onNavigate(item.slide, item.route)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
