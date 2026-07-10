import { usePresentationStore } from '../../store/usePresentationStore'

function HomeIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 11.2 12 4l8 7.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9.2a.8.8 0 0 0 .8.8H17.2a.8.8 0 0 0 .8-.8V10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

interface BottomNavProps {
  totalSlides: number
  currentSlide: number
  branchColor: string
  canGoBack: boolean
  canGoNext: boolean
  onPrev: () => void
  onNext: () => void
  onDotClick: (slide: number) => void
  onHome: () => void
}

export default function BottomNav({
  totalSlides,
  currentSlide,
  branchColor,
  canGoBack,
  canGoNext,
  onPrev,
  onNext,
  onDotClick,
  onHome,
}: BottomNavProps) {
  const setMenuOpen = usePresentationStore((s) => s.setMenuOpen)

  return (
    <footer className="relative z-10 flex h-[110px] shrink-0 items-center border-t border-[#E1E9EE] bg-white/95 px-[35px] py-0 shadow-[0_-8px_24px_rgba(18,58,88,0.08)] backdrop-blur-md">
      <div className="absolute left-[35px] top-1/2 flex -translate-y-1/2 items-center gap-2.5">
        <button
          type="button"
          className="btn-secondary h-[54px] min-w-[132px] rounded-[12px] px-6 py-0 text-[16.5px]"
          onClick={() => setMenuOpen(true)}
        >
          ≡ Меню
        </button>
        <button
          type="button"
          className="btn-secondary flex h-[54px] w-[54px] items-center justify-center rounded-[12px] px-0 py-0"
          onClick={onHome}
          aria-label="На главную"
          title="На главную"
        >
          <HomeIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5" role="tablist" aria-label="Прогресс слайдов">
        {Array.from({ length: totalSlides }, (_, i) => {
          const slideNum = i + 1
          const isActive = slideNum === currentSlide
          return (
            <button
              key={slideNum}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Слайд ${slideNum}`}
              className="h-[10px] w-[10px] rounded-full transition-all duration-200"
              style={{
                backgroundColor: isActive ? branchColor : '#D1D5DB',
                transform: isActive ? 'scale(1.2)' : 'scale(1)',
              }}
              onClick={() => onDotClick(slideNum)}
            />
          )
        })}
      </div>

      <div className="absolute right-[35px] top-1/2 flex -translate-y-1/2 gap-3">
        {canGoBack && (
          <button
            type="button"
            className="btn-secondary h-[54px] min-w-[132px] rounded-[12px] px-6 py-0 text-[16.5px]"
            onClick={onPrev}
          >
            ← Назад
          </button>
        )}
        <button
          type="button"
          className="btn-primary h-[54px] min-w-[132px] rounded-[12px] px-6 py-0 text-[16.5px]"
          style={{ backgroundColor: branchColor, opacity: canGoNext ? 1 : 0.5 }}
          disabled={!canGoNext}
          onClick={onNext}
        >
          Далее →
        </button>
      </div>
    </footer>
  )
}
