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
    <footer className="relative z-10 flex shrink-0 items-center justify-between border-t border-gray-100 bg-white/90 px-8 py-4 backdrop-blur-sm">
      <button
        type="button"
        className="btn-secondary min-w-[100px]"
        onClick={() => setMenuOpen(true)}
      >
        ≡ Меню
      </button>

      <div className="flex items-center gap-2.5" role="tablist" aria-label="Прогресс слайдов">
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
              className="h-2.5 w-2.5 rounded-full transition-all duration-200"
              style={{
                backgroundColor: isActive ? branchColor : '#D1D5DB',
                transform: isActive ? 'scale(1.2)' : 'scale(1)',
              }}
              onClick={() => onDotClick(slideNum)}
            />
          )
        })}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="btn-secondary min-w-[100px]"
          disabled={!canGoBack}
          onClick={onPrev}
        >
          ← Назад
        </button>
        <button
          type="button"
          className="btn-primary min-w-[100px]"
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
