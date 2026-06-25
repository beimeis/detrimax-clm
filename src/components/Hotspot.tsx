interface Props {
  x: number
  y: number
  label: string
  active?: boolean
  revealed?: boolean
  onClick: () => void
}

export default function Hotspot({ x, y, label, active, revealed, onClick }: Props) {
  return (
    <button
      className={`hotspot ${active ? 'active' : ''} ${revealed ? 'revealed' : ''}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
      aria-label={label}
    >
      <span className="hotspot-pulse" />
      <span className="hotspot-core" />
      {revealed && <span className="hotspot-check">✓</span>}
    </button>
  )
}
