import { ChipIconSvg, resolveZoneIcon, type ChipIcon } from './chipIcons'

interface Props {
  label: string
  icon: ChipIcon
  top?: string
  left?: string
  isActive?: boolean
  isSelected?: boolean
  isVisited?: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
  inline?: boolean
}

export default function InteractiveChip({
  label,
  icon,
  top,
  left,
  isActive = false,
  isSelected = false,
  isVisited = false,
  onClick,
  disabled,
  className = '',
  inline = false,
}: Props) {
  const isInline = inline || (!top && !left)
  const highlighted = isActive || isSelected

  return (
    <button
      type="button"
      className={[
        'interactive-chip',
        isInline && 'interactive-chip--inline',
        highlighted && 'is-active',
        isVisited && 'is-visited',
        className,
      ].filter(Boolean).join(' ')}
      style={isInline ? undefined : { top, left }}
      onClick={onClick}
      aria-label={label}
      aria-pressed={highlighted}
      disabled={disabled}
    >
      <span className="interactive-chip__icon">
        <ChipIconSvg icon={icon} />
      </span>
      <span className="interactive-chip__label">{label}</span>
      {isVisited && <span className="interactive-chip__check" aria-hidden>✓</span>}
    </button>
  )
}

export { resolveZoneIcon, type ChipIcon }
