import { useState, useCallback } from 'react'
import type { RouteId } from '../types'
import { ROUTES } from '../types'
import { SourceFooter } from '../components/SlideShell'
import RefImmuneInteractiveScene from '../components/clm/RefImmuneInteractiveScene'

interface Factor {
  id: string
  label: string
  title: string
  thesis: string
  insight: string
  top: string
  left: string
}

const FACTORS: Factor[] = [
  {
    id: 'barrier',
    label: 'Барьер',
    title: 'Барьерная защита',
    thesis: 'D3 участвует в регуляции антимикробных пептидов — барьерной защиты слизистых.',
    insight: 'Слизистые — первая линия защиты от патогенов.',
    top: '22%',
    left: '14%',
  },
  {
    id: 'cells',
    label: 'Клетки',
    title: 'Клетки иммунитета',
    thesis: 'D3 может влиять на функцию клеток врождённого и адаптивного иммунитета.',
    insight: 'Клетки иммунитета координированно отражают угрозы.',
    top: '22%',
    left: '86%',
  },
  {
    id: 'orvi',
    label: 'Сезон ОРВИ',
    title: 'Сезон ОРВИ',
    thesis: 'Дефицит D3 может ассоциироваться с более частыми респираторными инфекциями в сезон ОРВИ.',
    insight: 'В сезон ОРВИ статус D3 особенно важен.',
    top: '78%',
    left: '18%',
  },
]

const FINAL_CONCLUSION =
  'D3 участвует в регуляции врождённого и адаптивного иммунитета — обсудите профилактику с врачом.'

interface Props {
  route: RouteId
}

export default function D3ImmuneResponseRefSlide({ route }: Props) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [activeId, setActiveId] = useState<string | null>(null)
  const [panel, setPanel] = useState<Factor | null>(null)

  const allRevealed = revealed.size >= FACTORS.length

  const handleSelect = useCallback((id: string) => {
    if (activeId) return
    const factor = FACTORS.find(f => f.id === id)
    if (!factor) return

    if (revealed.has(id)) {
      setPanel(factor)
      return
    }

    setActiveId(id)
    setPanel(null)

    window.setTimeout(() => {
      setRevealed(prev => new Set(prev).add(id))
      setPanel(factor)
      setActiveId(null)
    }, 480)
  }, [activeId, revealed])

  return (
    <div className="ref-d3-slide" style={{ '--accent': '#00A896' } as React.CSSProperties}>
      <header className="ref-d3-header">
        <nav className="ref-d3-breadcrumb" aria-label="Маршрут">
          <span className="ref-d3-breadcrumb-brand">Детримакс®</span>
          <span className="ref-d3-breadcrumb-sep">/</span>
          <span>{ROUTES[route].label}</span>
        </nav>
        <h1 className="ref-d3-title">D3 и иммунный ответ</h1>
        <p className="ref-d3-headline">
          Витамин D3 участвует в регуляции врождённого и адаптивного иммунитета
        </p>
      </header>

      <div className="ref-d3-body">
        <RefImmuneInteractiveScene
          objects={FACTORS.map(({ id, label, top, left }) => ({ id, label, top, left }))}
          activeId={activeId}
          selectedId={panel?.id ?? null}
          revealed={revealed}
          onSelect={handleSelect}
        />

        <aside className="ref-d3-panel">
          {panel ? (
            <div className="ref-d3-panel-card ref-d3-panel-card--filled" key={panel.id}>
              <span className="ref-d3-panel-tag">{panel.label}</span>
              <h2 className="ref-d3-panel-title">{panel.title}</h2>
              <p className="ref-d3-panel-thesis">{panel.thesis}</p>
              <p className="ref-d3-panel-insight">{panel.insight}</p>
            </div>
          ) : (
            <div className="ref-d3-panel-card ref-d3-panel-card--empty">
              <p className="ref-d3-panel-hint">
                Нажмите на объект в сцене, чтобы раскрыть фактор
              </p>
            </div>
          )}

          {allRevealed && (
            <div className="ref-d3-panel-conclusion">
              <span className="ref-d3-panel-conclusion-label">Вывод</span>
              <p>{FINAL_CONCLUSION}</p>
            </div>
          )}

          {!allRevealed && revealed.size > 0 && (
            <p className="ref-d3-panel-progress">
              {revealed.size} из {FACTORS.length}
            </p>
          )}
        </aside>
      </div>

      <SourceFooter>PubMed: 28202713 · NCBI PMC6210343</SourceFooter>
    </div>
  )
}
