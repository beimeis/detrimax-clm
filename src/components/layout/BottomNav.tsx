import { usePresentationStore } from '../../store/usePresentationStore'

interface BottomNavProps {
  totalSlides: number
  currentSlide: number
  branchColor: string
  canGoBack: boolean
  canGoNext: boolean
  onPrev: () => void
  onNext: () => void
  onDotClick: (slide: number) => void
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
}: BottomNavProps) {
  const setMenuOpen = usePresentationStore((s) => s.setMenuOpen)

  return (
    <footer className="relative z-10 flex h-[110px] shrink-0 items-center border-t border-white/60 bg-white/55 px-[35px] py-0 shadow-[0_-8px_24px_rgba(18,58,88,0.06)] backdrop-blur-xl">
      <button
        type="button"
        className="btn-secondary absolute left-[35px] top-1/2 h-[44px] min-w-[112px] -translate-y-1/2 rounded-[10px] px-5 py-0 text-[15px]"
        onClick={() => setMenuOpen(true)}
      >
        ≡ Меню
      </button>

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
        <button
          type="button"
          className="btn-secondary h-[44px] min-w-[112px] rounded-[10px] px-5 py-0 text-[15px]"
          disabled={!canGoBack}
          onClick={onPrev}
        >
          ← Назад
        </button>
        <button
          type="button"
          className="btn-primary h-[44px] min-w-[112px] rounded-[10px] px-5 py-0 text-[15px]"
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
