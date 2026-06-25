import { useState } from 'react'
import type { TabItem } from '../types'
import ThesisPanel from './ThesisPanel'
import ConclusionBanner from './ConclusionBanner'

interface Props {
  tabs: TabItem[]
  accent: string
  conclusion?: string
  onTabChange?: (tabId: string) => void
}

export default function InteractiveTabs({ tabs, accent, conclusion, onTabChange }: Props) {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(new Set())
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set())

  const currentTab = tabs.find(t => t.id === activeTab)

  const selectTab = (id: string) => {
    setActiveTab(id)
    setVisitedTabs(prev => new Set(prev).add(id))
    setActiveCard(null)
    onTabChange?.(id)
  }

  const handleCardClick = (cardId: string) => {
    setActiveCard(prev => (prev === cardId ? null : cardId))
    setRevealedCards(prev => new Set(prev).add(cardId))
  }

  const allTabsVisited = visitedTabs.size >= tabs.length
  const allCardsRevealed = tabs.every(t => t.cards.every(c => revealedCards.has(c.id)))
  const activeCardData = currentTab?.cards.find(c => c.id === activeCard)

  return (
    <div className="slide-interactive">
      <div className="tab-bar">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn card-cascade ${activeTab === tab.id ? 'active' : ''} ${visitedTabs.has(tab.id) ? 'visited' : ''} ${activeTab && activeTab !== tab.id ? 'dimmed' : ''}`}
            style={{ animationDelay: `${0.1 + i * 0.06}s`, '--accent': accent } as React.CSSProperties}
            onClick={() => selectTab(tab.id)}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            <span className="tab-label">{tab.label}</span>
            <span className="tab-arrow">›</span>
          </button>
        ))}
      </div>

      {currentTab && (
        <div className={`card-grid cols-${Math.min(currentTab.cards.length, 2) as 2}`}>
          {currentTab.cards.map((card, i) => {
            const isActive = activeCard === card.id
            const isDimmed = activeCard !== null && !isActive
            const isRevealed = revealedCards.has(card.id)
            return (
              <button
                key={card.id}
                type="button"
                className={`smi-card card-cascade ${isActive ? 'active' : ''} ${isDimmed ? 'dimmed' : ''} ${isRevealed ? 'done' : ''}`}
                style={{ animationDelay: `${i * 0.07}s`, '--accent': accent } as React.CSSProperties}
                onClick={() => handleCardClick(card.id)}
              >
                {isRevealed && <span className="smi-check">✓</span>}
                {card.icon && <span className="smi-card-icon">{card.icon}</span>}
                <span className="smi-card-title">{card.title}</span>
                {!isRevealed && <span className="smi-card-hint">Нажмите для тезиса</span>}
              </button>
            )
          })}
        </div>
      )}

      {activeCardData && (
        <ThesisPanel title={activeCardData.title} text={activeCardData.thesis} accent={accent} />
      )}

      <ConclusionBanner visible={allTabsVisited && allCardsRevealed && !!conclusion}>
        {conclusion}
      </ConclusionBanner>
    </div>
  )
}
