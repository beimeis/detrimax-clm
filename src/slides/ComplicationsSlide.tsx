import type { RouteId } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'sweat', label: 'Потливость', title: 'Ранний признак', thesis: 'Потливость может быть ранним признаком дефицита D3.', top: '20%', left: '68%', icon: 'drop' as const },
  { id: 'sleep-early', label: 'Сон', title: 'Сон', thesis: 'При дефиците D3 возможны нарушения сна.', top: '42%', left: '32%', icon: 'sleep' as const },
  { id: 'rachit', label: 'Рахит', title: 'Рахит', thesis: 'Дефицит D3 повышает риск рахита.', top: '62%', left: '68%', icon: 'bones' as const },
]

export default function ComplicationsSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="complications" />
      <MedicalSceneLayout
        slideId="complications"
        scene="complications-body"
        zones={ZONES}
        accent="#D32F2F"
        headline="Дефицит D3 — от ранних признаков к осложнениям"
        conclusion="Ранняя коррекция D3 снижает риск осложнений."
      />
      <SourceFooter>ЦИТО им. Приорова · Приказ №422 от 23.04.2024</SourceFooter>
    </>
  )
}
