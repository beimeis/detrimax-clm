import type { RouteId } from '../types'
import { ROUTES } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'cold', label: 'ОРВИ', title: 'ОРВИ', thesis: 'Дефицит D3 может быть связан с более частыми ОРВИ.', top: '28%', left: '50%', icon: 'virus' as const },
  { id: 'peptides', label: 'Барьер', title: 'Барьерная защита', thesis: 'D3 участвует в регуляции антимикробных пептидов.', top: '44%', left: '30%', icon: 'barrier' as const },
  { id: 'phagocytosis', label: 'Клетки', title: 'Клетки иммунитета', thesis: 'D3 влияет на клетки врождённого и адаптивного иммунитета.', top: '44%', left: '70%', icon: 'cell' as const },
]

export default function ImmuneInfluenceSlide({ route }: Props) {
  const accent = ROUTES[route].color
  return (
    <>
      <SlideHeader route={route} slideId="immune-influence" />
      <MedicalSceneLayout
        slideId="immune-influence"
        scene="immune-layers"
        zones={ZONES}
        accent={accent}
        headline="D3 — один из регуляторов иммунного ответа"
        conclusion="D3 поддерживает иммунную систему ребёнка."
      />
      <SourceFooter>NCBI PMC6210343</SourceFooter>
    </>
  )
}
