import type { RouteId } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import SimpleSlideLayout from '../components/clm/SimpleSlideLayout'
import ProductPack from '../components/ProductPack'

interface Props { route: RouteId }

export function ProblemSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="quick-problem" />
      <SimpleSlideLayout
        headline="Дефицит D3 у детей встречается часто"
        scene="problem-chart"
        bullets={[
          'Часто встречается у младенцев и школьников',
          'Мало солнца, питание и рост',
          'Важно раннее выявление',
        ]}
        note="Контроль 25(OH)D"
      />
      <SourceFooter>Национальная программа D-дефицита · 2021</SourceFooter>
    </>
  )
}

export function ImmunitySlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="quick-immunity" />
      <SimpleSlideLayout
        headline="D3 участвует в регуляции иммунного ответа"
        scene="immune-shield"
        bullets={[
          'Поддерживает барьерную защиту слизистых',
          'Влияет на клетки врождённого иммунитета',
          'Особенно актуален в сезон ОРВИ',
        ]}
        note="Не заменяет стандартную терапию"
      />
      <SourceFooter>PubMed: 28202713</SourceFooter>
    </>
  )
}

export function ProductsSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="quick-products" />
      <div className="simple-slide">
        <p className="simple-headline">Выберите продукт под возраст</p>
        <div className="simple-products">
          <div className="simple-product">
            <ProductPack variant="baby" enlarged />
            <strong>Детримакс® Бэби</strong>
            <span>200 МЕ · 1 капля · с рождения</span>
          </div>
          <div className="simple-product">
            <ProductPack variant="active" enlarged />
            <strong>Детримакс® Актив</strong>
            <span>500 МЕ · 1 капля · с 3 лет</span>
          </div>
        </div>
        <ul className="simple-bullets">
          <li>Удобный капельный дозатор</li>
          <li>Без вкуса и запаха</li>
        </ul>
      </div>
      <SourceFooter>По рекомендации врача</SourceFooter>
    </>
  )
}

export function DoseSimpleSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="dose" />
      <div className="simple-slide">
        <p className="simple-headline">Алгоритм: анализ → доза → контроль</p>
        <div className="simple-algo">
          {['Анализ 25(OH)D', 'Подбор дозы', 'Контроль 3–6 мес'].map((step, i) => (
            <div key={step} className="simple-algo-step">
              <span className="simple-algo-num">{i + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
        <ul className="simple-bullets">
          <li>Целевой уровень: 30–60 нг/мл</li>
          <li>Бэби: 200 МЕ/капля · Актив: 500 МЕ/капля</li>
        </ul>
      </div>
      <SourceFooter>Клинические рекомендации РАЭ</SourceFooter>
    </>
  )
}
