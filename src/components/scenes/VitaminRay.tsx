interface Props {
  from: { x: number; y: number }
  to: { x: number; y: number }
  active: boolean
}

export default function VitaminRay({ from, to, active }: Props) {
  if (!active) return null
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      className="anim-vitamin-ray"
    />
  )
}
