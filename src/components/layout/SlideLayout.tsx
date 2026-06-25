import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'
import Breadcrumb from './Breadcrumb'
import BottomNav from './BottomNav'
import SideMenu from './SideMenu'
import WiresLogo from './WiresLogo'
import SlideBackground from './SlideBackground'
import type { BranchId } from '../../data/types'

interface SlideLayoutProps {
  branch: BranchId
  branchLabel: string
  branchColor: string
  slideIndex: number
  totalSlides: number
  slideKey: number
  children: ReactNode
  onPrev: () => void
  onNext: () => void
  onDotClick: (slide: number) => void
  onNavigate: (branch: BranchId, slide: number) => void
  onFinale: () => void
  onHome: () => void
  showNav?: boolean
}

export default function SlideLayout({
  branch,
  branchLabel,
  branchColor,
  slideIndex,
  totalSlides,
  slideKey,
  children,
  onPrev,
  onNext,
  onDotClick,
  onNavigate,
  onFinale,
  onHome,
  showNav = true,
}: SlideLayoutProps) {
  return (
    <div className="slide-frame">
      <SlideBackground />
      <WiresLogo />
      <Breadcrumb branchLabel={branchLabel} branchColor={branchColor} />

      <AnimatePresence mode="wait">
        <motion.main
          key={slideKey}
          className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {showNav && (
        <BottomNav
          totalSlides={totalSlides}
          currentSlide={slideIndex}
          branchColor={branchColor}
          canGoBack={slideIndex > 1}
          canGoNext={slideIndex <= totalSlides}
          onPrev={onPrev}
          onNext={onNext}
          onDotClick={onDotClick}
        />
      )}

      <SideMenu
        currentBranch={branch}
        currentSlide={slideIndex}
        onNavigate={onNavigate}
        onFinale={onFinale}
        onHome={onHome}
      />
    </div>
  )
}
