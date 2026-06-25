import type { ReactNode } from 'react'
import type { SlideId } from '../types'
import { SLIDE_TITLES } from '../types'

interface Props {
  children: ReactNode
  showNav: boolean
  routeSlides: SlideId[]
  currentSlide: SlideId
  canPrev: boolean
  canNext: boolean
  onPrev: () => void
  onNext: () => void
  onHome: () => void
  transitionClass?: string
}

export default function SlideShell({
  children,
  showNav,
  routeSlides,
  currentSlide,
  canPrev,
  canNext,
  onPrev,
  onNext,
  onHome,
  transitionClass = 'slide-enter-forward',
}: Props) {
  const progress = routeSlides.indexOf(currentSlide)

  return (
    <>
      <div className={`slide-content ${transitionClass}`}>
        {children}
      </div>

      {showNav && (
        <nav className="nav-bar">
          <button type="button" className="nav-btn secondary" onClick={onHome}>
            ☰ Меню
          </button>

          <div className="route-progress" aria-label="Прогресс маршрута">
            {routeSlides.map((s, i) => (
              <div
                key={s}
                className={`route-dot ${s === currentSlide ? 'active' : ''} ${progress > i ? 'done' : ''}`}
                title={SLIDE_TITLES[s]}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button type="button" className="nav-btn secondary" onClick={onPrev} disabled={!canPrev}>
              ← Назад
            </button>
            <button type="button" className="nav-btn primary" onClick={onNext} disabled={!canNext}>
              Далее →
            </button>
          </div>
        </nav>
      )}
    </>
  )
}

export function SourceFooter({ children }: { children: ReactNode }) {
  return <div className="source-footer">{children}</div>
}

export function SlideLayout({
  visual,
  interactive,
  fullWidth,
}: {
  visual?: ReactNode
  interactive: ReactNode
  fullWidth?: boolean
}) {
  if (fullWidth || !visual) {
    return (
      <div className="slide-body stack">
        {visual && <div className="slide-visual">{visual}</div>}
        <div className="slide-interactive full-width">{interactive}</div>
      </div>
    )
  }
  return (
    <div className="slide-body">
      <div className="slide-visual">{visual}</div>
      <div className="slide-interactive">{interactive}</div>
    </div>
  )
}
