interface TagButtonProps {
  label: string
  icon?: string
  active: boolean
  branchColor: string
  onClick: () => void
}

export default function TagButton({ label, icon, active, branchColor, onClick }: TagButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`tag-btn ${active ? 'tag-btn-active' : ''}`}
      style={active ? { backgroundColor: branchColor } : undefined}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {label}
    </button>
  )
}
