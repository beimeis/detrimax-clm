import type { RouteId } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'
import ProductPack from '../components/ProductPack'

interface Props { route: RouteId }

const PRODUCT_ZONES = [
  { id: 'baby-dose', label: 'Бэби', title: '200 МЕ', thesis: '1 капля = 200 МЕ. Удобный дозатор, с рождения по рекомендации врача.', icon: 'dose' as const },
  { id: 'baby-utp', label: 'Дозатор', title: 'Удобство', thesis: '1 нажатие = 1 капля. Без вкуса и запаха.', icon: 'pump' as const },
  { id: 'active-dose', label: 'Актив', title: '500 МЕ', thesis: '1 капля = 500 МЕ для детей с 3 лет — или по схеме врача.', icon: 'dose' as const },
  { id: 'active-utp', label: 'Курс', title: 'Регулярность', thesis: 'Регулярный приём и контроль 25(OH)D через 3–6 месяцев.', icon: 'calendar' as const },
]

export default function QuickProductsSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="quick-products" />
      <MedicalSceneLayout
        slideId="quick-products"
        visual={(
          <div className="product-duo-visual">
            <ProductPack variant="baby" enlarged />
            <ProductPack variant="active" enlarged />
          </div>
        )}
        zones={PRODUCT_ZONES}
        accent="#028090"
        headline="Выберите продукт под возраст пациента"
        hint="Выберите карточку ниже"
        conclusion="Детримакс® Бэби и Актив — капельные формы с точным дозированием."
      />
      <SourceFooter>По рекомендации врача</SourceFooter>
    </>
  )
}
