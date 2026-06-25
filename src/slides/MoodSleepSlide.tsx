import type { RouteId } from '../types'
import { ROUTES } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'sleep-quality', label: 'Сон', title: 'Циркадные ритмы', thesis: 'D3 участвует в регуляции сна.', top: '28%', left: '32%', icon: 'sleep' as const },
  { id: 'serotonin', label: 'Настроение', title: 'Нейромедиаторы', thesis: 'D3 связан с регуляцией настроения.', top: '38%', left: '68%', icon: 'mood' as const },
  { id: 'adhd', label: 'Поведение', title: 'Сон и поведение', thesis: 'Дефицит D3 может сопровождаться нарушениями сна и поведения.', top: '52%', left: '48%', icon: 'behavior' as const },
]

export default function MoodSleepSlide({ route }: Props) {
  const accent = ROUTES[route].color
  return (
    <>
      <SlideHeader route={route} slideId="mood-sleep" />
      <MedicalSceneLayout
        slideId="mood-sleep"
        scene="sleep-rhythm"
        zones={ZONES}
        accent={accent}
        headline="Сон и настроение — зона влияния D3"
        conclusion="D3 может влиять на сон, настроение и адаптацию ребёнка."
      />
      <SourceFooter>PubMed: 24558199</SourceFooter>
    </>
  )
}
