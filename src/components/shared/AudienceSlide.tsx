import { motion } from 'framer-motion'
import SourceBadge from '../shared/SourceBadge'
import type { AudienceSlideData } from '../../data/types'

interface AudienceSlideProps {
  title: string
  data: AudienceSlideData
}

export default function AudienceSlide({ title, data }: AudienceSlideProps) {
  return (
    <div className="flex flex-1 flex-col gap-5 overflow-hidden px-8 pb-4 pt-2">
      <header>
        <h1 className="slide-title">{title}</h1>
        <p className="slide-category mt-1">{data.category}</p>
      </header>

      <div className="flex min-h-0 flex-1 gap-5">
        <motion.div
          className="card-panel flex w-[45%] items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <img
            src={data.image}
            alt={data.imageAlt}
            className="max-h-80 w-full object-contain"
          />
        </motion.div>

        <motion.div
          className="card-panel flex w-[55%] flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="slide-thesis text-xl leading-snug">{data.thesis}</p>
          {data.highlights && data.highlights.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {data.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 bg-brand-bg/60 px-3 py-2 text-sm font-semibold text-brand-heading"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
          <div className="mt-6">
            <SourceBadge source={data.source} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
