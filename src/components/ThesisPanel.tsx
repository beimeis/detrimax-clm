interface Props {
  title: string
  text: string
  accent?: string
}

export default function ThesisPanel({ title, text, accent }: Props) {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean)

  return (
    <div className="thesis-panel" style={{ '--accent': accent } as React.CSSProperties}>
      <div className="thesis-label">{title}</div>
      <div className="thesis-lines">
        {sentences.map((line, i) => (
          <p key={i} className="thesis-line" style={{ animationDelay: `${i * 0.12}s` }}>
            {line}
          </p>
        ))}
        {sentences.length === 0 && (
          <p className="thesis-line">{text}</p>
        )}
      </div>
    </div>
  )
}
