import type { RouteId } from '../types'
import { ROUTES } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'vdr', label: 'VDR', title: 'VDR-рецепторы', thesis: 'VDR-рецепторы есть в структурах мозга.', top: '24%', left: '30%', icon: 'vdr' as const },
  { id: 'plasticity', label: 'Пластичность', title: 'Нейропластичность', thesis: 'D3 участвует в процессах обучения.', top: '24%', left: '70%', icon: 'brain' as const },
  { id: 'neuroprotect', label: 'Защита', title: 'Нейропротекция', thesis: 'D3 поддерживает защиту нервных клеток.', top: '38%', left: '50%', icon: 'shield' as const },
]

export default function CognitiveSlide({ route }: Props) {
  const accent = ROUTES[route].color
  return (
    <>
      <SlideHeader route={route} slideId="cognitive" />
      <MedicalSceneLayout
        slideId="cognitive"
        scene="neural-head"
        zones={ZONES}
        accent={accent}
        headline="D3 и нервная система"
        conclusion="D3 участвует в работе нервной системы и процессах обучения."
      />
      <SourceFooter>PubMed: 15589699</SourceFooter>
    </>
  )
}
