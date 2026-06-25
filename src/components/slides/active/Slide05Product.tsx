import ProductCard from '../../shared/ProductCard'
import DetrimaxBrand from '../../shared/DetrimaxBrand'
import { activeProductTags, ACTIVE_COLOR } from '../../../data/active'

export default function Slide05Product() {
  return (
    <ProductCard
      slideKey="active-slide-5"
      title={
        <>
          <DetrimaxBrand />{' '}
          <span style={{ color: ACTIVE_COLOR }}>Актив</span>
        </>
      }
      category="Витамин D3 в каплях · с 3 лет"
      tags={activeProductTags}
      branchColor={ACTIVE_COLOR}
      productImage="/products/detrimax-active.svg"
      productAlt="Детримакс® Актив"
      source="Инструкция по медицинскому применению"
    />
  )
}
