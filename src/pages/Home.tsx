import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { BABY_COLOR } from '../data/baby'
import { ACTIVE_COLOR } from '../data/active'
import { usePresentationStore } from '../store/usePresentationStore'
import SlideBackground from '../components/layout/SlideBackground'
import WiresLogo from '../components/layout/WiresLogo'

export default function Home() {
  const navigate = useNavigate()
  const setBranch = usePresentationStore((s) => s.setBranch)

  const selectBranch = (branch: 'baby' | 'active') => {
    setBranch(branch)
    navigate(`/${branch}/1`)
  }

  return (
    <div className="slide-frame">
      <SlideBackground />
      <WiresLogo />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="home-hero-title mt-4">ДЕТРИМАКС</h1>
          <p className="home-hero-subtitle mt-5">
            <span>УНИВЕРСАЛЬНЫЙ ИСТОЧНИК</span>
            <span>ВИТАМИНА D3</span>
          </p>
        </motion.div>

        <motion.div
          className="grid w-full max-w-2xl grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <button
            type="button"
            className="card-panel group flex flex-col items-center gap-4 p-6 transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => selectBranch('baby')}
          >
            <div className="flex h-44 w-full items-center justify-center">
              <img
                src="/products/detrimax-baby-pack.png"
                alt="Детримакс® Бэби"
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold">
                <span className="text-detrimax">Детримакс®</span>{' '}
                <span style={{ color: BABY_COLOR }}>Бэби</span>
              </p>
              <p className="mt-1 text-sm text-brand-muted">200 МЕ · с рождения</p>
              <p className="mt-2 text-xs text-brand-source">Младенцы 0–12 месяцев</p>
            </div>
          </button>

          <button
            type="button"
            className="card-panel group flex flex-col items-center gap-4 p-6 transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => selectBranch('active')}
          >
            <div className="flex h-44 w-full items-center justify-center">
              <img
                src="/products/detrimax-active-pack.png"
                alt="Детримакс® Актив"
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold">
                <span className="text-detrimax">Детримакс®</span>{' '}
                <span style={{ color: ACTIVE_COLOR }}>Актив</span>
              </p>
              <p className="mt-1 text-sm text-brand-muted">500 МЕ · с 3 лет</p>
              <p className="mt-2 text-xs text-brand-source">Школьники</p>
            </div>
          </button>
        </motion.div>

      </div>
    </div>
  )
}
