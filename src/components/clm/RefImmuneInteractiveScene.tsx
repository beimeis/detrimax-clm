import { type FC } from 'react'

interface SceneObject {
  id: string
  label: string
  top: string
  left: string
}

interface Props {
  objects: SceneObject[]
  activeId: string | null
  selectedId?: string | null
  revealed: Set<string>
  onSelect: (id: string) => void
}

function BarrierObject({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div className={`ref-scene-obj-visual ref-scene-obj-visual--barrier ${active ? 'is-active' : ''} ${done ? 'is-done' : ''}`}>
      <svg viewBox="0 0 64 72" className="ref-scene-obj-svg" aria-hidden>
        <path
          d="M32 6 L54 16 V38 C54 54 44 64 32 68 C20 64 10 54 10 38 V16 Z"
          className="ref-scene-shield-path"
        />
        <path d="M22 34 Q32 28 42 34" className="ref-scene-wave" />
      </svg>
      <span className="ref-scene-obj-caption">Барьер</span>
    </div>
  )
}

function CellsObject({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div className={`ref-scene-obj-visual ref-scene-obj-visual--cells ${active ? 'is-active' : ''} ${done ? 'is-done' : ''}`}>
      <div className="ref-scene-cell-cluster" aria-hidden>
        <span className="ref-scene-cell ref-scene-cell--a" />
        <span className="ref-scene-cell ref-scene-cell--b" />
        <span className="ref-scene-cell ref-scene-cell--c" />
      </div>
      <span className="ref-scene-obj-caption">Клетки</span>
    </div>
  )
}

function OrviObject({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div className={`ref-scene-obj-visual ref-scene-obj-visual--orvi ${active ? 'is-active' : ''} ${done ? 'is-done' : ''}`}>
      <svg viewBox="0 0 48 48" className="ref-scene-obj-svg ref-scene-obj-svg--virus" aria-hidden>
        <circle cx="24" cy="24" r="8" className="ref-scene-virus-core" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <line
            key={deg}
            x1="24"
            y1="24"
            x2={24 + 14 * Math.cos((deg * Math.PI) / 180)}
            y2={24 + 14 * Math.sin((deg * Math.PI) / 180)}
            className="ref-scene-virus-spike"
          />
        ))}
      </svg>
      <span className="ref-scene-obj-caption">Сезон ОРВИ</span>
    </div>
  )
}

const VISUALS: Record<string, FC<{ active: boolean; done: boolean }>> = {
  barrier: BarrierObject,
  cells: CellsObject,
  orvi: OrviObject,
}

export default function RefImmuneInteractiveScene({ objects, activeId, selectedId = null, revealed, onSelect }: Props) {
  const sceneLit = !!activeId

  return (
    <div className={`ref-scene-stage ${sceneLit ? 'is-lit' : ''}`}>
      <div className="ref-scene-ambient" aria-hidden>
        <div className="ref-scene-window-light" />
        <div className="ref-scene-shelf" />
        <div className="ref-scene-plant ref-scene-plant--left" />
        <div className="ref-scene-plant ref-scene-plant--right" />
        <div className="ref-scene-table" />
        <div className="ref-scene-halo" />
      </div>

      <div className="ref-scene-hero">
        <div className="ref-scene-shield-wrap" aria-hidden>
          <svg viewBox="0 0 120 150" className="ref-scene-shield-bg">
            <defs>
              <linearGradient id="refShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="100%" stopColor="rgba(0,168,150,0.12)" />
              </linearGradient>
            </defs>
            <path
              d="M60 10 L98 28 L98 72 C98 102 78 124 60 132 C42 124 22 102 22 72 L22 28 Z"
              fill="url(#refShieldGrad)"
              className="ref-scene-shield-fill"
            />
            <path
              d="M60 10 L98 28 L98 72 C98 102 78 124 60 132 C42 124 22 102 22 72 L22 28 Z"
              className="ref-scene-shield-outline"
            />
          </svg>
        </div>

        <img
          src="/assets/characters/child-immunity-3d.png"
          alt=""
          className="ref-scene-child"
          draggable={false}
        />

        <div className="ref-scene-virus-orbit" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="ref-scene-orbit-virus" style={{ ['--i' as string]: i }} />
          ))}
        </div>
      </div>

      {objects.map(obj => {
        const Visual = VISUALS[obj.id]
        const isActive = activeId === obj.id
        const isSelected = selectedId === obj.id
        const isVisited = revealed.has(obj.id)
        return (
          <button
            key={obj.id}
            type="button"
            className={[
              'ref-scene-obj',
              (isActive || isSelected) && 'is-active',
              isVisited && 'is-visited',
            ].filter(Boolean).join(' ')}
            style={{ top: obj.top, left: obj.left }}
            onClick={() => onSelect(obj.id)}
            disabled={!!activeId}
            aria-label={obj.label}
            aria-pressed={isActive || isSelected}
          >
            {Visual && <Visual active={isActive || isSelected} done={isVisited} />}
          </button>
        )
      })}
    </div>
  )
}
