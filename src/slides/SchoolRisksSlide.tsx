import type { RouteId } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'sun', label: 'Солнце', title: 'Мало солнца', thesis: 'Учёба в помещении снижает естественный синтез D3.', top: '22%', left: '28%', icon: 'sun' as const },
  { id: 'gadgets', label: 'Гаджеты', title: 'Экранное время', thesis: 'Экранное время вытесняет прогулки.', top: '38%', left: '72%', icon: 'gadgets' as const },
  { id: 'growth', label: 'Рост', title: 'Активный рост', thesis: 'В периоды роста потребность в D3 для костей возрастает.', top: '58%', left: '32%', icon: 'growth' as const },
  { id: 'seasonal', label: 'Сезон', title: 'Сезонный дефицит', thesis: 'Осенью и зимой синтез D3 снижается.', top: '72%', left: '68%', icon: 'season' as const },
]

export default function SchoolRisksSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="school-risks" />
      <MedicalSceneLayout
        slideId="school-risks"
        scene="school-risks"
        zones={ZONES}
        accent="#00A896"
        headline="У школьника D3 часто не хватает из‑за образа жизни"
        conclusion="Школьникам может потребоваться регулярный приём D3 по рекомендации врача."
      />
      <SourceFooter>Национальная программа D-дефицита · 2021</SourceFooter>
    </>
  )
}
