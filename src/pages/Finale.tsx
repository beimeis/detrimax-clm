import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { BABY_COLOR } from '../data/baby'
import { ACTIVE_COLOR } from '../data/active'
import DetrimaxBrand from '../components/shared/DetrimaxBrand'
import SlideBackground from '../components/layout/SlideBackground'
import WiresLogo from '../components/layout/WiresLogo'

export default function Finale() {
  const navigate = useNavigate()
  const goHome = () => navigate('/')

  return (
    <div className="slide-frame">
      <SlideBackground />
      <WiresLogo />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <h1 className="font-display text-[32px] font-bold leading-tight text-brand-heading">
            <DetrimaxBrand /> — правильный D3 для каждого возраста
          </h1>
        </motion.div>

        <motion.div
          className="grid w-full max-w-3xl grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
        >
          <button
            type="button"
            className="card-panel border-l-4 p-6 text-left transition-transform duration-200 hover:scale-[1.02]"
            style={{ borderColor: BABY_COLOR }}
            onClick={goHome}
          >
            <div className="mb-4 flex h-44 items-center justify-center">
              <img
                src="/products/detrimax-baby-pack.png"
                alt="Детримакс® Бэби"
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </div>
            <p className="font-display text-lg font-bold" style={{ color: BABY_COLOR }}>
              Бэби · 200 МЕ
            </p>
            <p className="mt-2 text-sm text-brand-muted">С рождения</p>
            <p className="mt-1 text-[17px] font-medium text-brand-heading">
              1 капля = точная доза
            </p>
          </button>

          <button
            type="button"
            className="card-panel border-l-4 p-6 text-left transition-transform duration-200 hover:scale-[1.02]"
            style={{ borderColor: ACTIVE_COLOR }}
            onClick={goHome}
          >
            <div className="mb-4 flex h-44 items-center justify-center">
              <img
                src="/products/detrimax-active-pack.png"
                alt="Детримакс® Актив"
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </div>
            <p className="font-display text-lg font-bold" style={{ color: ACTIVE_COLOR }}>
              Актив · 500 МЕ
            </p>
            <p className="mt-2 text-sm text-brand-muted">С 3 лет</p>
            <p className="mt-1 text-[17px] font-medium text-brand-heading">
              1 капля = точная доза
            </p>
          </button>
        </motion.div>

        <motion.p
          className="font-display text-3xl font-bold text-brand-heading"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          «1 капля в день — курс 6 месяцев»
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
        >
          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-3xl shadow-card transition-transform duration-200 hover:scale-[1.04]"
            aria-label="На главный экран"
            onClick={goHome}
          >
            ⌂
          </button>
        </motion.div>
      </div>
    </div>
  )
}
