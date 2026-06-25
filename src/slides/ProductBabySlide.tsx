import ProductSlideLayout from '../components/clm/ProductSlideLayout'
import SlideHeader from '../components/SlideHeader'
import type { RouteId } from '../types'

const UTPS = [
  { id: 'dose', label: 'Доза', title: '1 капля = 200 МЕ', desc: 'Точная доза для младенцев', top: '36%', left: '72%', icon: 'dose' as const },
  { id: 'pump', label: 'Дозатор', title: 'Удобный дозатор', desc: '1 нажатие = 1 капля', top: '52%', left: '28%', icon: 'pump' as const },
  { id: 'age', label: 'Возраст', title: 'С рождения', desc: 'По рекомендации врача', top: '68%', left: '72%', icon: 'baby' as const },
]

interface Props { route: RouteId }

export default function ProductBabySlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="product-baby" />
      <ProductSlideLayout
        slideId="product-baby"
        variant="baby"
        accent="#FF9100"
        ageLabel="С рождения"
        doseLabel="200 МЕ / 1 капля"
        utps={UTPS}
        whenRecommend={{
          title: 'Когда рекомендовать Детримакс® Бэби',
          bullets: [
            'Профилактика дефицита D3',
            'Низкий статус 25(OH)D у матери или ребёнка',
            'Период активного роста',
          ],
        }}
        howToTake={{
          title: 'Как принимать',
          bullets: [
            '1 капля (200 МЕ) в сутки',
            'Можно капать на ложку или соску',
            'Контроль 25(OH)D через 3–6 месяцев',
          ],
        }}
        conclusion="Приказ №422: профилактика D3 у младенцев по рекомендации врача."
      />
    </>
  )
}
