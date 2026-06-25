interface Props {
  title: string
  text: string
  visible: boolean
  accent?: string
  inline?: boolean
}

export default function FloatingThesis({
  title,
  text,
  visible,
  accent = 'var(--accent)',
  inline = false,
}: Props) {
  if (!visible) return null

  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean)

  return (
    <div
      className={`floating-thesis ${inline ? 'floating-thesis--inline' : 'floating-thesis--overlay'}`}
      style={{ '--accent': accent } as React.CSSProperties}
      role="status"
    >
      <div className="floating-thesis-accent" />
      <div className="floating-thesis-label">{title}</div>
      <div className="floating-thesis-body">
        {(sentences.length ? sentences : [text]).map((line, i) => (
          <p key={i} className="floating-thesis-line" style={{ animationDelay: `${i * 0.1}s` }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
