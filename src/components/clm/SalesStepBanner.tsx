interface Props {
  children: React.ReactNode
  visible?: boolean
}

export default function SalesStepBanner({ children, visible = true }: Props) {
  if (!visible) return null
  return (
    <div className="sales-step-banner">
      <span className="sales-step-icon" aria-hidden>→</span>
      <div className="sales-step-body">
        <span className="sales-step-label">Следующий шаг</span>
        <p className="sales-step-text">{children}</p>
      </div>
    </div>
  )
}
