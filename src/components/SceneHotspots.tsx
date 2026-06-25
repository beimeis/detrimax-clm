export interface SceneHotspotDef {
  id: string
  action: string
  label: string
  /** позиция на canvas-overlay в % */
  top: string
  left: string
}

interface Props {
  hotspots: SceneHotspotDef[]
  revealed: Set<string>
  activeId: string | null
  onTap: (hotspot: SceneHotspotDef) => void
  hint?: string
}

export default function SceneHotspots({
  hotspots,
  revealed,
  activeId,
  onTap,
  hint = 'Нажмите на зону щита',
}: Props) {
  const pending = hotspots.filter(h => !revealed.has(h.id))

  return (
    <div className="scene-hotspots-layer">
      {pending.length > 0 && (
        <div className="scene-tap-hint">{hint}</div>
      )}
      {hotspots.map(h => {
        const isRevealed = revealed.has(h.id)
        const isActive = activeId === h.id
        if (isRevealed) return null
        return (
          <button
            key={h.id}
            type="button"
            className={`scene-hotspot-btn ${isActive ? 'active' : ''}`}
            style={{ top: h.top, left: h.left }}
            onClick={() => onTap(h)}
          >
            <span className="scene-hotspot-pulse" />
            <span className="scene-hotspot-label">{h.label}</span>
          </button>
        )
      })}
    </div>
  )
}
