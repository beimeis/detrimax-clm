import ProductCard from '../../shared/ProductCard'
import DetrimaxBrand from '../../shared/DetrimaxBrand'
import { babyProductTags, BABY_COLOR } from '../../../data/baby'

export default function Slide05Product() {
  return (
    <ProductCard
      slideKey="baby-slide-5"
      title={
        <>
          <DetrimaxBrand />{' '}
          <span style={{ color: BABY_COLOR }}>Бэби</span>
        </>
      }
      category="Витамин D3 в каплях · с рождения"
      tags={babyProductTags}
      branchColor={BABY_COLOR}
      productImage="/products/detrimax-baby.svg"
      productAlt="Детримакс® Бэби"
      source="Инструкция по медицинскому применению"
    />
  )
}
