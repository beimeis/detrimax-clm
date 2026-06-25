import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TagButton from './TagButton'
import SourceBadge from './SourceBadge'
import { usePresentationStore } from '../../store/usePresentationStore'
import type { ProductTag } from '../../data/types'

interface ProductCardProps {
  slideKey: string
  title: ReactNode
  category: string
  tags: ProductTag[]
  branchColor: string
  productImage: string
  productAlt: string
  source?: string
  onWhenRecommend?: () => void
  onHowTake?: () => void
}

export default function ProductCard({
  slideKey,
  title,
  category,
  tags,
  branchColor,
  productImage,
  productAlt,
  source,
  onWhenRecommend,
  onHowTake,
}: ProductCardProps) {
  const defaultId = tags[0].id
  const activeId = usePresentationStore((s) => s.getActiveCard(slideKey, defaultId))
  const setActiveCard = usePresentationStore((s) => s.setActiveCard)
  const active = tags.find((t) => t.id === activeId) ?? tags[0]

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-hidden px-8 pb-4 pt-2">
      <header>
        <h1 className="slide-title">{title}</h1>
        <p className="slide-category mt-1">{category}</p>
      </header>

      <div className="flex min-h-0 flex-1 gap-5">
        <div className="card-panel relative flex w-[48%] flex-col items-center justify-center">
          <img
            src={productImage}
            alt={productAlt}
            className="h-72 w-auto object-contain"
          />
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <TagButton
                key={tag.id}
                label={tag.label}
                active={activeId === tag.id}
                branchColor={branchColor}
                onClick={() => setActiveCard(slideKey, tag.id)}
              />
            ))}
          </div>
        </div>

        <div className="card-panel flex w-[52%] flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <p className="slide-category">{active.category}</p>
              <p className="slide-thesis mt-2">{active.thesis}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">{active.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="btn-secondary flex-1"
          onClick={onWhenRecommend}
        >
          Когда рекомендовать
        </button>
        <button
          type="button"
          className="btn-primary flex-1"
          style={{ backgroundColor: branchColor }}
          onClick={onHowTake}
        >
          Как принимать
        </button>
      </div>

      {source && <SourceBadge source={source} />}
    </div>
  )
}
