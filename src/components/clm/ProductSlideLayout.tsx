import { useState, useCallback } from 'react'
import ProductPack, { type ProductVariant } from '../ProductPack'
import ConclusionBanner from '../ConclusionBanner'
import InteractiveChip, { resolveZoneIcon, type ChipIcon } from './InteractiveChip'
import type { SlideId } from '../../types'

interface UtpItem {
  id: string
  title: string
  desc: string
  label: string
  top: string
  left: string
  icon?: ChipIcon
}

interface ModalContent {
  title: string
  bullets: string[]
}

interface Props {
  slideId: SlideId
  variant: ProductVariant
  accent: string
  ageLabel: string
  doseLabel: string
  utps: UtpItem[]
  whenRecommend: ModalContent
  howToTake: ModalContent
  conclusion: string
}

export default function ProductSlideLayout({
  slideId: _slideId,
  variant,
  accent,
  ageLabel,
  doseLabel,
  utps,
  whenRecommend,
  howToTake,
  conclusion,
}: Props) {
  const [modal, setModal] = useState<'when' | 'how' | null>(null)
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [active, setActive] = useState<UtpItem | null>(null)
  const [selected, setSelected] = useState<UtpItem | null>(null)

  const handleHotspot = useCallback((utp: UtpItem) => {
    if (active) return

    if (revealed.has(utp.id)) {
      setSelected(utp)
      return
    }

    setActive(utp)
    setSelected(null)
    window.setTimeout(() => {
      setRevealed(prev => new Set(prev).add(utp.id))
      setSelected(utp)
      setActive(null)
    }, 400)
  }, [active, revealed])

  const thesis = selected

  return (
    <div className="product-clm" style={{ '--accent': accent } as React.CSSProperties}>
      <p className="clm-headline">Капельная форма с точным дозированием</p>

      <div className="med-body">
        <div className="med-viewport product-clm-viewport">
          <div className="product-clm-visual product-clm-visual--solo">
            <ProductPack variant={variant} enlarged glowing />
            <div className="product-clm-dose-badge">{doseLabel}</div>
            <div className="product-clm-age-badge">{ageLabel}</div>
          </div>

          {utps.map(utp => (
            <InteractiveChip
              key={utp.id}
              label={utp.label}
              icon={resolveZoneIcon(utp.id, utp.icon)}
              top={utp.top}
              left={utp.left}
              isActive={active?.id === utp.id}
              isSelected={selected?.id === utp.id}
              isVisited={revealed.has(utp.id)}
              onClick={() => handleHotspot(utp)}
              className="interactive-chip--product"
            />
          ))}
        </div>

        <aside className="med-side-panel">
          {thesis ? (
            <div className="med-thesis-card">
              <span className="med-thesis-label">{thesis.title}</span>
              <p className="med-thesis-text">{thesis.desc}</p>
            </div>
          ) : (
            <div className="med-thesis-card med-thesis-card--empty">
              <p className="med-thesis-text">Выберите преимущество на упаковке</p>
            </div>
          )}
        </aside>
      </div>

      <div className="product-clm-actions product-clm-actions--row">
        <button type="button" className="product-clm-btn" onClick={() => setModal('when')}>
          Когда рекомендовать
        </button>
        <button type="button" className="product-clm-btn product-clm-btn--outline" onClick={() => setModal('how')}>
          Как принимать
        </button>
      </div>

      <div className="product-clm-footer">
        {revealed.size >= utps.length && <ConclusionBanner visible>{conclusion}</ConclusionBanner>}
      </div>

      {modal && (
        <div className="product-clm-modal-backdrop" onClick={() => setModal(null)} role="presentation">
          <div className="product-clm-modal" onClick={e => e.stopPropagation()} role="dialog">
            <button type="button" className="product-clm-modal-close" onClick={() => setModal(null)} aria-label="Закрыть">×</button>
            <h3>{modal === 'when' ? whenRecommend.title : howToTake.title}</h3>
            <ul>
              {(modal === 'when' ? whenRecommend.bullets : howToTake.bullets).map(line => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
