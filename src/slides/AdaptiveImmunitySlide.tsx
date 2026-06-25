import type { RouteId } from '../types'
import { ROUTES } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'tcells', label: 'T-клетки', title: 'T-клетки', thesis: 'D3 влияет на баланс T-клеток.', top: '36%', left: '32%', icon: 'cell' as const },
  { id: 'treg', label: 'Treg', title: 'Treg', thesis: 'D3 поддерживает регуляторные T-клетки.', top: '36%', left: '68%', icon: 'shield' as const },
]

export default function AdaptiveImmunitySlide({ route }: Props) {
  const accent = ROUTES[route].color
  return (
    <>
      <SlideHeader route={route} slideId="adaptive-immunity" />
      <MedicalSceneLayout
        slideId="adaptive-immunity"
        scene="adaptive-cells"
        zones={ZONES}
        accent={accent}
        headline="Адаптивный иммунитет — точная регуляция ответа"
        conclusion="D3 участвует в регуляции адаптивного иммунного ответа."
      />
      <SourceFooter>PubMed: 28202713</SourceFooter>
    </>
  )
}
