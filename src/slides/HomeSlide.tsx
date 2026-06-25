import { useState } from 'react'
import type { RouteId } from '../types'
import { SunRays } from '../components/VisualEffects'
import ProductPack from '../components/ProductPack'
import WiresLogo from '../components/WiresLogo'

interface Props {
  onSelectRoute: (route: RouteId) => void
}

type ProductId = 'baby' | 'active'

const PRODUCT_UTPS: Record<ProductId, { text: string; route: RouteId }[]> = {
  baby: [
    { text: '1 капля = 200 МЕ', route: 'baby' },
    { text: 'Для младенцев с рождения', route: 'baby' },
    { text: 'Удобный дозатор-помпа', route: 'baby' },
  ],
  active: [
    { text: '1 капля = 500 МЕ', route: 'school' },
    { text: 'Для детей старшего возраста', route: 'school' },
    { text: 'Регулярный приём 6 месяцев', route: 'school' },
  ],
}

export default function HomeSlide({ onSelectRoute }: Props) {
  const [selected, setSelected] = useState<ProductId | null>(null)
  const [showUtp, setShowUtp] = useState(false)

  const handleProduct = (id: ProductId) => {
    setSelected(id)
    setTimeout(() => setShowUtp(true), 300)
  }

  const handleContinue = () => {
    if (!selected) return
    const route = selected === 'baby' ? 'baby' : 'school'
    onSelectRoute(route)
  }

  return (
    <div className="home-screen">
      <WiresLogo className="home-wires-logo" />
      <SunRays />

      <div className="home-hero-block">
        <div className="home-brand">
          <div className="home-logo title-enter">ДЕТРИМАКС®</div>
          <p className="home-tagline subtitle-enter">Универсальный источник витамина D3</p>
        </div>

        <div className="home-products">
          <button
            type="button"
            className={`home-product baby card-cascade ${selected === 'baby' ? 'selected' : ''} ${selected === 'active' ? 'dimmed' : ''}`}
            style={{ animationDelay: '0.1s' }}
            onClick={() => handleProduct('baby')}
          >
            <ProductPack variant="baby" />
            <div className="home-product-name" style={{ color: '#FF9100' }}>Детримакс® Бэби</div>
            <div className="home-product-dose">200 МЕ · с рождения</div>
            {selected === 'baby' && showUtp && (
              <div className="home-utp-list">
                {PRODUCT_UTPS.baby.map((u, i) => (
                  <div key={i} className="home-utp-item" style={{ animationDelay: `${i * 0.1}s`, color: '#FF9100' }}>
                    {u.text}
                  </div>
                ))}
                <button type="button" className="home-continue" style={{ background: '#FF9100' }} onClick={handleContinue}>
                  Маршрут младенца →
                </button>
              </div>
            )}
          </button>

          <button
            type="button"
            className={`home-product active-prod card-cascade ${selected === 'active' ? 'selected' : ''} ${selected === 'baby' ? 'dimmed' : ''}`}
            style={{ animationDelay: '0.18s' }}
            onClick={() => handleProduct('active')}
          >
            <ProductPack variant="active" />
            <div className="home-product-name" style={{ color: '#00A896' }}>Детримакс® Актив</div>
            <div className="home-product-dose">500 МЕ · с 3 лет</div>
            {selected === 'active' && showUtp && (
              <div className="home-utp-list">
                {PRODUCT_UTPS.active.map((u, i) => (
                  <div key={i} className="home-utp-item" style={{ animationDelay: `${i * 0.1}s`, color: '#00A896' }}>
                    {u.text}
                  </div>
                ))}
                <button type="button" className="home-continue" style={{ background: '#00A896' }} onClick={handleContinue}>
                  Маршрут школьника →
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
