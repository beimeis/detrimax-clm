import type { CSSProperties } from 'react'
import type { ProductVariant } from '../ProductPack'

interface Props {
  variant: ProductVariant
  activeId: string | null
  revealed: Set<string>
  bottleOpened: boolean
  onBottleClick: () => void
}

export default function ProductAnimatedScene({
  variant,
  activeId,
  revealed,
  bottleOpened,
  onBottleClick,
}: Props) {
  const accent = variant === 'baby' ? '#FF9100' : '#00A896'
  const dose = variant === 'baby' ? '1 капля = 200 МЕ' : '1 капля = 500 МЕ'
  const lit = !!activeId
  const showDrop = bottleOpened
  const showDose = bottleOpened
  const showUtps = bottleOpened
  const phase = showUtps && revealed.size > 0 ? 'utp' : showDose ? 'dose' : showDrop ? 'drop' : 'idle'

  const utpIds = variant === 'baby'
    ? ['dose', 'pump', 'age']
    : ['dose', 'age', 'regular']

  return (
    <div
      className={`anim-scene anim-scene--product is-phase-${phase} ${lit ? 'is-lit' : ''} ${bottleOpened ? 'is-opened' : ''}`}
      style={{ '--product-accent': accent } as CSSProperties}
      aria-hidden
    >
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        {showUtps && (
          <ellipse cx="200" cy="155" rx="120" ry="75" className="anim-product-orbit" fill="none" />
        )}

        {showUtps && utpIds.map((id, i) => {
          const angle = -60 + i * 60
          const rad = (angle * Math.PI) / 180
          const x = 200 + Math.cos(rad) * 105
          const y = 155 + Math.sin(rad) * 48
          const on = revealed.has(id) || activeId === id
          return on ? (
            <g key={id} transform={`translate(${x}, ${y})`}>
              <circle r="12" className="anim-product-orbit-dot is-on" />
            </g>
          ) : null
        })}

        <g
          transform="translate(200, 160)"
          className={`anim-product-bottle ${bottleOpened ? 'is-opened' : ''} ${lit ? 'is-tapped' : ''}`}
          onClick={onBottleClick}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onBottleClick()}
        >
          <rect x="-30" y="-58" width="60" height="88" rx="14" className="anim-bottle-body" />
          <rect x="-14" y="-76" width="28" height="22" rx="6" className="anim-bottle-cap" />
          {!bottleOpened && (
            <text y="8" textAnchor="middle" className="anim-bottle-hint">Нажмите</text>
          )}
        </g>

        {showDrop && (
          <g className="anim-product-drop-seq">
            <path d="M200 48 Q208 90 200 118 Q192 90 200 48" className="anim-drop-shape anim-drop-shape--once" />
          </g>
        )}

        {showDose && (
          <text x="200" y="248" textAnchor="middle" className="anim-product-dose-text">{dose}</text>
        )}

        <circle cx="200" cy="48" r="24" className="anim-product-glow anim-pulse-slow" />
      </svg>
    </div>
  )
}
