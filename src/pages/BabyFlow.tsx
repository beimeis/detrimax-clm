import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SlideLayout from '../components/layout/SlideLayout'
import { babyBranch, BABY_COLOR } from '../data/baby'
import { usePresentationStore } from '../store/usePresentationStore'
import type { BranchId } from '../data/types'
import BabySlide01 from '../components/slides/baby/Slide01Audience'
import BabySlide02 from '../components/slides/baby/Slide02RiskFactors'
import BabySlide03 from '../components/slides/baby/Slide03Complications'
import BabySlide04 from '../components/slides/baby/Slide04MechanismD3'
import BabySlide05 from '../components/slides/baby/Slide05Product'
import CommonDosingSlide from '../components/slides/common/SlideDosing'
import Order422Slide from '../components/slides/decree/Slide01Order422'

const SLIDES = [
  BabySlide01,
  BabySlide02,
  BabySlide03,
  BabySlide04,
  BabySlide05,
  CommonDosingSlide,
  Order422Slide,
]

export default function BabyFlow() {
  const { slideId } = useParams<{ slideId: string }>()
  const navigate = useNavigate()
  const setBranch = usePresentationStore((s) => s.setBranch)
  const setSlideIndex = usePresentationStore((s) => s.setSlideIndex)

  const slideIndex = Math.min(Math.max(parseInt(slideId ?? '1', 10) || 1, 1), 7)
  const SlideComponent = SLIDES[slideIndex - 1]

  useEffect(() => {
    setBranch('baby')
    setSlideIndex(slideIndex)
  }, [slideIndex, setBranch, setSlideIndex])

  const goToSlide = useCallback(
    (n: number) => navigate(`/baby/${n}`),
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
      branch="baby"
      branchLabel={babyBranch.label}
      branchColor={BABY_COLOR}
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
