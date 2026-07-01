import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SlideLayout from '../components/layout/SlideLayout'
import { activeBranch, ACTIVE_COLOR } from '../data/active'
import { usePresentationStore } from '../store/usePresentationStore'
import type { BranchId } from '../data/types'
import ActiveSlide01 from '../components/slides/active/Slide01Audience'
import ActiveSlide02 from '../components/slides/active/Slide02RiskFactors'
import ActiveSlide03 from '../components/slides/active/Slide03Complications'
import ActiveSlide04 from '../components/slides/active/Slide04MechanismD3'
import ActiveSlide05 from '../components/slides/active/Slide05Product'
import CommonDosingSlide from '../components/slides/common/SlideDosing'
import Order422Slide from '../components/slides/decree/Slide01Order422'

const SLIDES = [
  ActiveSlide01,
  ActiveSlide02,
  ActiveSlide03,
  ActiveSlide04,
  ActiveSlide05,
  CommonDosingSlide,
  Order422Slide,
]

export default function ActiveFlow() {
  const { slideId } = useParams<{ slideId: string }>()
  const navigate = useNavigate()
  const setBranch = usePresentationStore((s) => s.setBranch)
  const setSlideIndex = usePresentationStore((s) => s.setSlideIndex)

  const slideIndex = Math.min(Math.max(parseInt(slideId ?? '1', 10) || 1, 1), 7)
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
      totalSlides={7}
      slideKey={slideIndex}
      onPrev={() => goToSlide(slideIndex - 1)}
      onNext={() => {
        if (slideIndex >= 7) navigate('/finale')
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
