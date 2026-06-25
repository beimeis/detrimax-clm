import type { RouteId } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'mother', label: 'Мама', title: 'Дефицит у матери', thesis: 'При дефиците у матери D3 у ребёнка тоже может быть низким.', top: '0', left: '0', icon: 'mother' as const },
  { id: 'milk', label: 'ГВ', title: 'Грудное молоко', thesis: 'В грудном молоке D3 часто недостаточно.', top: '0', left: '0', icon: 'bottle' as const },
  { id: 'skin', label: 'Солнце', title: 'Солнечный синтез', thesis: 'Синтез D3 у младенца ограничен.', top: '0', left: '0', icon: 'sun' as const },
  { id: 'growth', label: 'Рост', title: 'Скорость роста', thesis: 'Быстрый рост повышает потребность в D3.', top: '0', left: '0', icon: 'growth' as const },
]

export default function DeficitCausesSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="deficit-causes" />
      <MedicalSceneLayout
        slideId="deficit-causes"
        scene="deficit-orbit"
        zones={[]}
        orbitZones={ZONES}
        accent="#D32F2F"
        headline="4 причины дефицита D3 у младенца"
        hint="Выберите карточку ниже"
        conclusion="Дефицит D3 у младенцев часто требует дополнительного приёма по рекомендации врача."
      />
      <SourceFooter>JOGNN, 2016 · RMJ: Vitamin D у новорождённых</SourceFooter>
    </>
  )
}
