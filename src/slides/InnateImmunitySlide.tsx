import type { RouteId } from '../types'
import { ROUTES } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'peptides', label: 'Барьер', title: 'Антимикробные пептиды', thesis: 'D3 поддерживает барьерную защиту слизистых.', top: '34%', left: '32%', icon: 'barrier' as const },
  { id: 'phagocytosis', label: 'Клетки', title: 'Фагоцитоз', thesis: 'D3 влияет на клетки врождённого иммунитета.', top: '34%', left: '68%', icon: 'cell' as const },
]

export default function InnateImmunitySlide({ route }: Props) {
  const accent = ROUTES[route].color
  return (
    <>
      <SlideHeader route={route} slideId="innate-immunity" />
      <MedicalSceneLayout
        slideId="innate-immunity"
        scene="immune-shield"
        zones={ZONES}
        accent={accent}
        headline="Врождённый иммунитет — первая линия защиты"
        conclusion="D3 участвует в регуляции врождённого иммунитета."
      />
      <SourceFooter>PubMed: 28202713</SourceFooter>
    </>
  )
}
