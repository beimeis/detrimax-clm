import ProductPack from '../components/ProductPack'

interface Props {
  onGoHome: () => void
  onSelectProduct: () => void
}

export default function FinalSlide({ onGoHome, onSelectProduct }: Props) {
  return (
    <div className="final-screen">
      <h2 className="final-simple-title">Спасибо за внимание</h2>
      <p className="final-simple-text">Детримакс® — D3 для младенцев и школьников</p>

      <div className="simple-products simple-products--compact">
        <div className="simple-product">
          <ProductPack variant="baby" />
          <span>Бэби · 200 МЕ</span>
        </div>
        <div className="simple-product">
          <ProductPack variant="active" />
          <span>Актив · 500 МЕ</span>
        </div>
      </div>

      <div className="final-actions">
        <button type="button" className="home-simple-start home-simple-start--secondary" onClick={onGoHome}>
          В меню
        </button>
        <button type="button" className="home-simple-start" onClick={onSelectProduct}>
          К продукту
        </button>
      </div>
    </div>
  )
}
