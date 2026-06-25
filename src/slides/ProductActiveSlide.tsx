import ProductSlideLayout from '../components/clm/ProductSlideLayout'
import SlideHeader from '../components/SlideHeader'
import type { RouteId } from '../types'

const UTPS = [
  { id: 'dose', label: 'Доза', title: '1 капля = 500 МЕ', desc: 'Для детей старшего возраста', top: '36%', left: '72%', icon: 'dose' as const },
  { id: 'age', label: 'Возраст', title: 'С 3 лет', desc: '2 капли/сут', top: '52%', left: '28%', icon: 'active' as const },
  { id: 'regular', label: 'Курс', title: 'Регулярный приём', desc: 'Контроль через 3–6 месяцев', top: '68%', left: '72%', icon: 'calendar' as const },
]

interface Props { route: RouteId }

export default function ProductActiveSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="product-active" />
      <ProductSlideLayout
        slideId="product-active"
        variant="active"
        accent="#00A896"
        ageLabel="С 3 лет"
        doseLabel="500 МЕ / 1 капля"
        utps={UTPS}
        whenRecommend={{
          title: 'Когда рекомендовать Детримакс® Актив',
          bullets: [
            'Школьники с низким статусом 25(OH)D',
            'Мало солнца и высокая учебная нагрузка',
            'Профилактика в осенне-зимний период',
          ],
        }}
        howToTake={{
          title: 'Как принимать',
          bullets: [
            '2 капли (1000 МЕ) в сутки',
            'Удобный помповый дозатор',
            'Контроль 25(OH)D через 3–6 месяцев',
          ],
        }}
        conclusion="Без глютена, ГМО и лактозы · по рекомендации врача."
      />
    </>
  )
}
