import { useState } from 'react'
import type { CardItem } from '../types'
import ThesisPanel from './ThesisPanel'
import ConclusionBanner from './ConclusionBanner'

interface Props {
  cards: CardItem[]
  accent: string
  conclusion?: string
  columns?: 2 | 3 | 4
  className?: string
}

export default function InteractiveCardGrid({
  cards,
  accent,
  conclusion,
  columns = 2,
  className = '',
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [revealed, setRevealed] = useState<Set<string>>(new Set())

  const handleClick = (id: string) => {
    setActiveId(prev => (prev === id ? null : id))
    setRevealed(prev => new Set(prev).add(id))
  }

  const allRevealed = revealed.size >= cards.length
  const activeCard = cards.find(c => c.id === activeId)

  return (
    <div className={`slide-interactive ${className}`}>
      <div className={`card-grid cols-${columns}`}>
        {cards.map((card, i) => {
          const isActive = activeId === card.id
          const isRevealed = revealed.has(card.id)
          const isDimmed = activeId !== null && !isActive

          return (
            <button
              key={card.id}
              type="button"
              className={`smi-card card-cascade ${isActive ? 'active' : ''} ${isDimmed ? 'dimmed' : ''} ${isRevealed ? 'done' : ''}`}
              style={{ animationDelay: `${0.15 + i * 0.07}s`, '--accent': accent } as React.CSSProperties}
              onClick={() => handleClick(card.id)}
            >
              {isRevealed && <span className="smi-check">✓</span>}
              {card.icon && <span className="smi-card-icon">{card.icon}</span>}
              <span className="smi-card-title">{card.title}</span>
              {!isRevealed && <span className="smi-card-hint">Нажмите для тезиса</span>}
            </button>
          )
        })}
      </div>

      {activeCard && (
        <ThesisPanel title={activeCard.title} text={activeCard.thesis} accent={accent} />
      )}

      <ConclusionBanner visible={allRevealed && !!conclusion}>
        {conclusion}
      </ConclusionBanner>
    </div>
  )
}
