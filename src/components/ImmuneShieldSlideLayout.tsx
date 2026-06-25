import { useMemo, useState, useCallback, useRef } from 'react'
import ThreeSceneHost from './ThreeSceneHost'
import FloatingThesis from './FloatingThesis'
import ConclusionBanner from './ConclusionBanner'
import ImmuneShieldFallback from './ImmuneShieldFallback'
import { useScene3DController } from '../hooks/useScene3DController'
import { createImmuneShieldScene, type ImmuneShieldOptions } from '../threeScenes'

export interface ImmunityTopic {
  id: string
  action: string
  label: string
  title: string
  thesis: string
}

interface Props {
  topics: ImmunityTopic[]
  conclusion: string
  accent: string
  hint?: string
  virusCount?: number
}

export default function ImmuneShieldSlideLayout({
  topics,
  conclusion,
  accent,
  hint = 'Выберите механизм — щит активирует защиту, затем появится тезис',
  virusCount = 18,
}: Props) {
  const { onSceneReady, trigger } = useScene3DController()
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [activeId, setActiveId] = useState<string | null>(null)
  const [currentThesis, setCurrentThesis] = useState<ImmunityTopic | null>(null)
  const pendingTopic = useRef<ImmunityTopic | null>(null)

  const sceneOptions = useMemo<ImmuneShieldOptions>(() => ({
    accentColor: 0x5a8a96,
    virusCount,
    onActionComplete: (action) => {
      const topic = pendingTopic.current
      if (topic && topic.action === action) {
        setRevealed(prev => new Set(prev).add(topic.id))
        setCurrentThesis(topic)
        setActiveId(null)
        pendingTopic.current = null
      }
    },
  }), [virusCount])

  const handleTopic = useCallback((topic: ImmunityTopic) => {
    if (revealed.has(topic.id) || activeId) return
    setActiveId(topic.id)
    setCurrentThesis(null)
    pendingTopic.current = topic
    trigger(topic.action)
  }, [revealed, activeId, trigger])

  const allRevealed = revealed.size >= topics.length
  const cols = topics.length <= 2 ? 2 : 2

  return (
    <div className="immunity-3d-layout">
      <div className="immunity-3d-viewport">
        <ThreeSceneHost<ImmuneShieldOptions>
          factory={createImmuneShieldScene}
          options={sceneOptions}
          onSceneReady={onSceneReady}
          className="immunity-3d-canvas"
          fallback={<ImmuneShieldFallback accent={accent} virusCount={virusCount} />}
        />
        {currentThesis && (
          <FloatingThesis
            title={currentThesis.title}
            text={currentThesis.thesis}
            visible
            accent={accent}
          />
        )}
      </div>

      <div className="immunity-3d-panel">
        <p className="immunity-3d-hint">{hint}</p>

        <div className={`topic-chip-grid cols-${cols}`}>
          {topics.map(topic => {
            const isRevealed = revealed.has(topic.id)
            const isActive = activeId === topic.id
            const isDimmed = activeId !== null && !isActive
            return (
              <button
                key={topic.id}
                type="button"
                className={`topic-chip ${isRevealed ? 'done' : ''} ${isActive ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}`}
                style={{ '--accent': accent } as React.CSSProperties}
                onClick={() => handleTopic(topic)}
                disabled={isRevealed || !!activeId}
              >
                {isRevealed && <span className="topic-chip-check">✓</span>}
                <span className="topic-chip-label">{topic.label}</span>
              </button>
            )
          })}
        </div>

        {allRevealed ? (
          <ConclusionBanner visible>{conclusion}</ConclusionBanner>
        ) : (
          <div className="immunity-3d-progress">
            <span>{revealed.size} / {topics.length} механизмов изучено</span>
          </div>
        )}
      </div>
    </div>
  )
}
