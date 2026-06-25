import { useMemo, useState, useCallback, type ReactNode } from 'react'
import ThreeSceneHost from './ThreeSceneHost'
import FloatingThesis from './FloatingThesis'
import ConclusionBanner from './ConclusionBanner'
import { useScene3DController } from '../hooks/useScene3DController'
import type { Scene3DOptions, SceneFactory } from '../threeScenes/types'

export interface D3Topic {
  id: string
  action: string
  label: string
  title: string
  thesis: string
  icon?: string
}

interface Props<T extends Scene3DOptions> {
  topics: D3Topic[]
  conclusion: string
  accent: string
  hint?: string
  factory: SceneFactory<T>
  sceneOptions?: T
  fallback: ReactNode
  animMs?: number
  allowRetrigger?: boolean
}

export default function D3SlideLayout<T extends Scene3DOptions>({
  topics,
  conclusion,
  accent,
  hint = 'Выберите пункт — 3D-сцена отреагирует, затем появится тезис',
  factory,
  sceneOptions,
  fallback,
  animMs = 1100,
  allowRetrigger = false,
}: Props<T>) {
  const { onSceneReady, trigger } = useScene3DController()
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [activeId, setActiveId] = useState<string | null>(null)
  const [currentThesis, setCurrentThesis] = useState<D3Topic | null>(null)

  const options = useMemo(() => sceneOptions ?? ({} as T), [sceneOptions])

  const handleTopic = useCallback((topic: D3Topic) => {
    if (!allowRetrigger && revealed.has(topic.id)) return
    if (activeId) return
    setActiveId(topic.id)
    setCurrentThesis(null)
    trigger(topic.action)
    window.setTimeout(() => {
      setRevealed(prev => new Set(prev).add(topic.id))
      setCurrentThesis(topic)
      setActiveId(null)
    }, animMs)
  }, [revealed, activeId, trigger, animMs, allowRetrigger])

  const allRevealed = revealed.size >= topics.length
  const cols = topics.length <= 2 ? 2 : topics.length <= 4 ? 2 : 2

  return (
    <div className="d3-slide-layout">
      <div className="d3-slide-viewport">
        <ThreeSceneHost<T>
          factory={factory}
          options={options}
          onSceneReady={onSceneReady}
          className="d3-slide-canvas"
          fallback={fallback}
        />
      </div>

      <div className="d3-slide-panel">
        <p className="d3-slide-hint">{hint}</p>

        <div className={`topic-chip-grid cols-${cols}`}>
          {topics.map((topic, i) => {
            const isRevealed = revealed.has(topic.id)
            const isActive = activeId === topic.id
            const isDimmed = activeId !== null && !isActive
            return (
              <button
                key={topic.id}
                type="button"
                className={`topic-chip d3-topic-chip card-cascade ${isRevealed ? 'done' : ''} ${isActive ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}`}
                style={{ animationDelay: `${0.1 + i * 0.06}s`, '--accent': accent } as React.CSSProperties}
                onClick={() => handleTopic(topic)}
                disabled={(!allowRetrigger && isRevealed) || !!activeId}
              >
                {topic.icon && <span className="topic-chip-icon">{topic.icon}</span>}
                {isRevealed && <span className="topic-chip-check">✓</span>}
                <span className="topic-chip-label">{topic.label}</span>
              </button>
            )
          })}
        </div>

        {currentThesis && (
          <FloatingThesis
            title={currentThesis.title}
            text={currentThesis.thesis}
            visible
            accent={accent}
            inline
          />
        )}

        {allRevealed ? (
          <ConclusionBanner visible>{conclusion}</ConclusionBanner>
        ) : (
          <div className="d3-slide-progress">
            <span>{revealed.size} / {topics.length} изучено</span>
          </div>
        )}
      </div>
    </div>
  )
}
