import { motion, AnimatePresence } from 'framer-motion'
import TagButton from './TagButton'
import SourceBadge from './SourceBadge'
import { usePresentationStore } from '../../store/usePresentationStore'
import type { TagItem } from '../../data/types'

interface InteractiveCardProps {
  slideKey: string
  title: string
  category: string
  tags: TagItem[]
  branchColor: string
  source?: string
  showScale?: boolean
}

export default function InteractiveCard({
  slideKey,
  title,
  category,
  tags,
  branchColor,
  source,
  showScale = false,
}: InteractiveCardProps) {
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
        <div className="card-panel flex w-[42%] flex-col items-center justify-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-5xl">{active.icon}</span>
              {active.image && (
                <img
                  src={active.image}
                  alt=""
                  className="h-44 w-44 rounded-xl object-contain"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {showScale && (
            <div className="w-full px-2">
              <div className="relative h-2 overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ backgroundColor: branchColor }}
                  initial={{ width: '0%' }}
                  animate={{ width: active.id === 'late' ? '100%' : '35%' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
              <div className="mt-1.5 flex justify-between text-[11px] text-brand-muted">
                <span>Ранние признаки</span>
                <span>Осложнения</span>
              </div>
            </div>
          )}
        </div>

        <div className="card-panel flex w-[58%] flex-col justify-center">
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

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagButton
            key={tag.id}
            label={tag.label}
            icon={tag.icon}
            active={activeId === tag.id}
            branchColor={branchColor}
            onClick={() => setActiveCard(slideKey, tag.id)}
          />
        ))}
      </div>

      {source && (
        <div className="px-1">
          <SourceBadge source={source} />
        </div>
      )}
    </div>
  )
}
