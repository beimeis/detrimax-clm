interface Props {
  children: React.ReactNode
  visible: boolean
}

export default function ConclusionBanner({ children, visible }: Props) {
  if (!visible) return null
  return (
    <div className="conclusion-banner conclusion-reveal">
      <div className="conclusion-icon">✓</div>
      <div className="conclusion-text">{children}</div>
    </div>
  )
}
