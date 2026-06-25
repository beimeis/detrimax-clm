import { useState, useCallback, type ReactNode } from 'react'
import ConclusionBanner from '../ConclusionBanner'
import MedicalSceneVisual, { type MedicalSceneType } from './MedicalSceneVisual'
import InteractiveChip, { resolveZoneIcon, type ChipIcon } from './InteractiveChip'
import type { SlideId } from '../../types'

export interface MedicalZone {
  id: string
  label: string
  title: string
  thesis: string
  top?: string
  left?: string
  icon?: ChipIcon
  width?: string
  height?: string
}

interface Props {
  slideId: SlideId
  scene?: MedicalSceneType
  visual?: ReactNode
  zones: MedicalZone[]
  accent: string
  conclusion: string
  headline?: string
  hint?: string
  orbitZones?: MedicalZone[]
  children?: ReactNode
}

export default function MedicalSceneLayout({
  slideId: _slideId,
  scene,
  visual,
  zones,
  accent,
  conclusion,
  headline,
  hint = 'Выберите карточку ниже',
  orbitZones,
  children,
}: Props) {
  const allZones = orbitZones ?? zones
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [activeId, setActiveId] = useState<string | null>(null)
  const [thesis, setThesis] = useState<MedicalZone | null>(null)

  const handleZone = useCallback((zone: MedicalZone) => {
    if (activeId) return

    if (revealed.has(zone.id)) {
      setThesis(zone)
      return
    }

    setActiveId(zone.id)
    setThesis(null)
    window.setTimeout(() => {
      setRevealed(prev => new Set(prev).add(zone.id))
      setThesis(zone)
      setActiveId(null)
    }, 450)
  }, [activeId, revealed])

  const allRevealed = allZones.length === 0 || revealed.size >= allZones.length

  return (
    <div className="med-layout">
      {headline && <p className="clm-headline">{headline}</p>}

      <div className="med-body">
        <div className="med-viewport med-viewport--strip" style={{ '--accent': accent } as React.CSSProperties}>
          <div className="med-viewport-scene">
            {visual ?? (scene ? (
              <MedicalSceneVisual scene={scene} activeZone={activeId} revealed={revealed} />
            ) : null)}
            {children}
          </div>

          {allZones.length > 0 && (
            <div className="interactive-chip-row">
              {allZones.map(zone => (
                <InteractiveChip
                  key={zone.id}
                  label={zone.label}
                  icon={resolveZoneIcon(zone.id, zone.icon)}
                  isActive={activeId === zone.id}
                  isSelected={thesis?.id === zone.id}
                  isVisited={revealed.has(zone.id)}
                  onClick={() => handleZone(zone)}
                  inline
                />
              ))}
            </div>
          )}
        </div>

        <aside className="med-side-panel" style={{ '--accent': accent } as React.CSSProperties}>
          {thesis ? (
            <div className="med-thesis-card">
              <span className="med-thesis-label">{thesis.title}</span>
              <p className="med-thesis-text">{thesis.thesis}</p>
            </div>
          ) : (
            <div className="med-thesis-card med-thesis-card--empty">
              <p className="med-thesis-text">{hint}</p>
            </div>
          )}
        </aside>
      </div>

      <div className="med-footer">
        {allRevealed && <ConclusionBanner visible>{conclusion}</ConclusionBanner>}
      </div>
    </div>
  )
}
