interface Props {
  active: boolean
  dose?: string
  accent?: string
}

/** CSS-капля вместо Three.js */
export default function VitaminDropEffect({ active, dose = '200 МЕ', accent = '#FFB300' }: Props) {
  if (!active) return null
  return (
    <div className="vit-drop-effect" style={{ '--gold': accent } as React.CSSProperties} aria-hidden>
      <span className="vit-drop-blob" />
      <span className="vit-drop-caption">1 капля = {dose}</span>
    </div>
  )
}
