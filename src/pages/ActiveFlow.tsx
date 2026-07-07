import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SlideLayout from '../components/layout/SlideLayout'
import { activeBranch, ACTIVE_COLOR } from '../data/active'
import { usePresentationStore } from '../store/usePresentationStore'
import type { BranchId } from '../data/types'
import ActiveAudienceSlide from '../components/slides/active/SlideAudience'
import CommonComplicationsSlide from '../components/slides/common/SlideComplications'
import CommonDeficitCausesSlide from '../components/slides/common/SlideDeficitCauses'
import CommonImmunitySlide from '../components/slides/common/SlideImmunity'
import CommonCognitiveSlide from '../components/slides/common/SlideCognitive'
import ActiveRiskFactorsSlide from '../components/slides/active/SlideRiskFactorsSchool'
import CommonImmunitySupportSlide from '../components/slides/common/SlideImmunitySupport'
import ActiveProductSlide from '../components/slides/active/SlideProduct'
import CommonDosingSlide from '../components/slides/common/SlideDosing'
import Order422Slide from '../components/slides/decree/SlideOrder422'

const SLIDES = [
  ActiveAudienceSlide,
  CommonComplicationsSlide,
  CommonDeficitCausesSlide,
  CommonImmunitySlide,
  CommonCognitiveSlide,
  ActiveRiskFactorsSlide,
  CommonImmunitySupportSlide,
  ActiveProductSlide,
  CommonDosingSlide,
  Order422Slide,
]

const TOTAL_SLIDES = SLIDES.length

export default function ActiveFlow() {
  const { slideId } = useParams<{ slideId: string }>()
  const navigate = useNavigate()
  const setBranch = usePresentationStore((s) => s.setBranch)
  const setSlideIndex = usePresentationStore((s) => s.setSlideIndex)

  const slideIndex = Math.min(Math.max(parseInt(slideId ?? '1', 10) || 1, 1), TOTAL_SLIDES)
  const SlideComponent = SLIDES[slideIndex - 1]

  useEffect(() => {
    setBranch('active')
    setSlideIndex(slideIndex)
  }, [slideIndex, setBranch, setSlideIndex])

  const goToSlide = useCallback(
    (n: number) => navigate(`/active/${n}`),
    [navigate],
  )

  const handleNavigate = useCallback(
    (branch: BranchId, slide: number) => {
      navigate(`/${branch}/${slide}`)
    },
    [navigate],
  )

  const handleFinale = useCallback(() => navigate('/finale'), [navigate])
  const handleHome = useCallback(() => navigate('/'), [navigate])

  return (
    <SlideLayout
      branch="active"
      branchLabel={activeBranch.label}
      branchColor={ACTIVE_COLOR}
      slideIndex={slideIndex}
      totalSlides={TOTAL_SLIDES}
      slideKey={slideIndex}
      onPrev={() => goToSlide(slideIndex - 1)}
      onNext={() => {
        if (slideIndex >= TOTAL_SLIDES) navigate('/finale')
        else goToSlide(slideIndex + 1)
      }}
      onDotClick={goToSlide}
      onNavigate={handleNavigate}
      onFinale={handleFinale}
      onHome={handleHome}
    >
      <SlideComponent />
    </SlideLayout>
  )
}
