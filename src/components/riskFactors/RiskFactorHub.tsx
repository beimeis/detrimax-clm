import RiskChildFigure from './RiskChildFigure'

interface Props {
  activeZone: 'lifestyle' | 'physiology' | null
  pulseKey: number
}

export default function RiskFactorHub({ activeZone, pulseKey }: Props) {
  return (
    <div className="risk-hub" aria-hidden>
      <div className="risk-hub-ambient" />
      <div className="risk-hub-floor-glow" />

      <svg className="risk-hub-hud-svg" viewBox="0 0 480 480">
        <circle cx="240" cy="240" r="228" className="risk-hud-ring risk-hud-ring--1" />
        <circle cx="240" cy="240" r="198" className="risk-hud-ring risk-hud-ring--2" />
        <circle cx="240" cy="240" r="168" className="risk-hud-ring risk-hud-ring--3" />
        <circle cx="240" cy="240" r="138" className="risk-hud-ring risk-hud-ring--4" />
        <path d="M240 12 L240 36 M240 444 L240 468 M12 240 L36 240 M444 240 L468 240" className="risk-hud-cross" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180
          const x1 = 240 + Math.cos(a) * 210
          const y1 = 240 + Math.sin(a) * 210
          const x2 = 240 + Math.cos(a) * 222
          const y2 = 240 + Math.sin(a) * 222
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="risk-hud-tick" />
        })}
      </svg>

      <div className="risk-hub-orbit risk-hub-orbit--a" />
      <div className="risk-hub-orbit risk-hub-orbit--b" />

      <div className="risk-hub-particles">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="risk-hub-particle" style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>

      {activeZone && (
        <>
          <div key={`p1-${pulseKey}`} className={`risk-hub-pulse risk-hub-pulse--${activeZone}`} />
          <div key={`p2-${pulseKey}`} className={`risk-hub-pulse risk-hub-pulse--${activeZone} delay`} />
        </>
      )}

      <div className="risk-child-slot">
        <RiskChildFigure />
      </div>
    </div>
  )
}
