import { useState, useCallback, useEffect, useRef } from 'react'
import type { RouteId, SlideId } from './types'
import { ROUTES, getSlideTheme } from './types'
import { getBackgroundTheme, BACKGROUNDS } from './backgrounds'
import SlideShell from './components/SlideShell'
import SourcesModal from './components/clm/SourcesModal'
import DetrimaxLogo from './components/DetrimaxLogo'
import { useSwipeElement } from './hooks/useSwipe'
import { useFrameScale } from './hooks/useFrameScale'
import HomeSlide from './slides/HomeSlide'
import InfantSlide from './slides/InfantSlide'
import DeficitCausesSlide from './slides/DeficitCausesSlide'
import ComplicationsSlide from './slides/ComplicationsSlide'
import InnateImmunitySlide from './slides/InnateImmunitySlide'
import AdaptiveImmunitySlide from './slides/AdaptiveImmunitySlide'
import ImmuneInfluenceSlide from './slides/ImmuneInfluenceSlide'
import SchoolRisksSlide from './slides/SchoolRisksSlide'
import CognitiveSlide from './slides/CognitiveSlide'
import MoodSleepSlide from './slides/MoodSleepSlide'
import DoseSlide from './slides/DoseSlide'
import ProductBabySlide from './slides/ProductBabySlide'
import ProductActiveSlide from './slides/ProductActiveSlide'
import FinalSlide from './slides/FinalSlide'
import QuickProductsSlide from './slides/QuickProductsSlide'
import { QuickProblemSlide, QuickRisksSlide } from './slides/QuickVisitSlides'
import D3ImmuneResponseRefSlide from './slides/D3ImmuneResponseRefSlide'

type Direction = 'forward' | 'back'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<SlideId>('home')
  const [currentRoute, setCurrentRoute] = useState<RouteId | null>(null)
  const [slideKey, setSlideKey] = useState(0)
  const [direction, setDirection] = useState<Direction>('forward')
  const [sourcesOpen, setSourcesOpen] = useState(false)
  const transitioning = useRef(false)

  useFrameScale()

  const theme = currentSlide === 'home'
    ? 'home'
    : currentSlide === 'final'
      ? 'final'
      : getSlideTheme(currentSlide, currentRoute)

  const bgTheme = getBackgroundTheme(currentSlide, currentRoute)

  const goToSlide = useCallback((slide: SlideId, dir: Direction = 'forward') => {
    if (transitioning.current) return
    transitioning.current = true
    setDirection(dir)
    setCurrentSlide(slide)
    setSlideKey(k => k + 1)
    setTimeout(() => { transitioning.current = false }, 450)
  }, [])

  const startRoute = useCallback((route: RouteId) => {
    setCurrentRoute(route)
    goToSlide(ROUTES[route].slides[0], 'forward')
  }, [goToSlide])

  const goHome = useCallback(() => {
    setCurrentRoute(null)
    goToSlide('home', 'back')
  }, [goToSlide])

  const goNext = useCallback(() => {
    if (!currentRoute) return
    const slides = ROUTES[currentRoute].slides
    const idx = slides.indexOf(currentSlide)
    if (idx < slides.length - 1) goToSlide(slides[idx + 1], 'forward')
  }, [currentRoute, currentSlide, goToSlide])

  const goPrev = useCallback(() => {
    if (!currentRoute) return
    const slides = ROUTES[currentRoute].slides
    const idx = slides.indexOf(currentSlide)
    if (idx > 0) goToSlide(slides[idx - 1], 'back')
  }, [currentRoute, currentSlide, goToSlide])

  const routeSlides = currentRoute ? ROUTES[currentRoute].slides : []
  const slideIndex = routeSlides.indexOf(currentSlide)
  const canPrev = slideIndex > 0
  const canNext = slideIndex >= 0 && slideIndex < routeSlides.length - 1

  const swipeRef = useSwipeElement({
    onSwipeLeft: canNext ? goNext : undefined,
    onSwipeRight: canPrev ? goPrev : undefined,
  }, currentSlide !== 'home' && currentSlide !== 'final')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'Escape') goHome()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, goHome])

  const transitionClass = direction === 'forward' ? 'slide-enter-forward' : 'slide-enter-back'

  const renderSlide = () => {
    const route = currentRoute!
    switch (currentSlide) {
      case 'home':
        return <HomeSlide onSelectRoute={startRoute} />
      case 'infant':
        return <InfantSlide route={route} />
      case 'deficit-causes':
        return <DeficitCausesSlide route={route} />
      case 'complications':
        return <ComplicationsSlide route={route} />
      case 'innate-immunity':
        return <InnateImmunitySlide route={route} />
      case 'adaptive-immunity':
        return <AdaptiveImmunitySlide route={route} />
      case 'immune-influence':
        return <ImmuneInfluenceSlide route={route} />
      case 'school-risks':
        return <SchoolRisksSlide route={route} />
      case 'cognitive':
        return <CognitiveSlide route={route} />
      case 'mood-sleep':
        return <MoodSleepSlide route={route} />
      case 'dose':
        return <DoseSlide route={route} />
      case 'product-baby':
        return <ProductBabySlide route={route} />
      case 'product-active':
        return <ProductActiveSlide route={route} />
      case 'quick-problem':
        return <QuickProblemSlide route={route} />
      case 'quick-immunity':
        return <D3ImmuneResponseRefSlide route={route} />
      case 'quick-risks':
        return <QuickRisksSlide route={route} />
      case 'quick-products':
        return <QuickProductsSlide route={route} />
      case 'final':
        return (
          <FinalSlide
            onGoHome={goHome}
            onSelectProduct={() => goToSlide(
              currentRoute === 'baby' || currentRoute === 'quick' ? 'product-baby' : 'product-active',
              'back',
            )}
          />
        )
      default:
        return null
    }
  }

  const accent = currentRoute ? ROUTES[currentRoute].color : '#028090'
  const isMinimalSlide = currentSlide !== 'home'
  const isRefD3Slide = currentSlide === 'quick-immunity'

  return (
    <>
      <div className="slide-viewport">
        <div
          ref={swipeRef}
          className={`slide-frame theme-${theme} has-photo-bg clm-full${isMinimalSlide ? ' clm-minimal' : ''}${isRefD3Slide ? ' ref-d3-mode' : ''}`}
          style={{ '--accent': accent } as React.CSSProperties}
        >
          <div className="slide-bg" style={{ backgroundImage: `url(${BACKGROUNDS[bgTheme]})` }} aria-hidden />
          <div className={`slide-bg-overlay overlay-${bgTheme}`} aria-hidden />

          {isMinimalSlide && <DetrimaxLogo className="clm-minimal-brand" />}

          <SlideShell
            key={slideKey}
            showNav={currentSlide !== 'home' && currentSlide !== 'final'}
            routeSlides={routeSlides}
            currentSlide={currentSlide}
            canPrev={canPrev}
            canNext={canNext}
            onPrev={goPrev}
            onNext={goNext}
            onHome={goHome}
            transitionClass={transitionClass}
          >
            {renderSlide()}
          </SlideShell>
        </div>
      </div>
      <SourcesModal open={sourcesOpen} onClose={() => setSourcesOpen(false)} />
    </>
  )
}
