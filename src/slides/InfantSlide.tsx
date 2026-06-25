import type { RouteId } from '../types'
import { ROUTES } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

const ZONES = [
  { id: 'sleep', label: 'Сон', title: 'Сон', thesis: 'D3 участвует в регуляции сна.', icon: 'sleep' as const },
  { id: 'bones', label: 'Кости', title: 'Кости', thesis: 'D3 нужен для усвоения кальция и роста скелета.', icon: 'bones' as const },
  { id: 'immunity', label: 'Иммунитет', title: 'Иммунитет', thesis: 'D3 поддерживает иммунный ответ с раннего возраста.', icon: 'shield' as const },
  { id: 'muscles', label: 'Мышцы', title: 'Мышцы', thesis: 'D3 поддерживает мышечную функцию.', icon: 'muscles' as const },
]

export default function InfantSlide({ route }: Props) {
  const accent = ROUTES[route].color
  return (
    <>
      <SlideHeader route={route} slideId="infant" />
      <MedicalSceneLayout
        slideId="infant"
        scene="infant-body"
        zones={ZONES}
        accent={accent}
        headline="Первый год — пик потребности в D3"
        conclusion="В первый год D3 важен для костей, сна и иммунитета."
      />
      <SourceFooter>Национальная программа «Недостаточность витамина D у детей и подростков РФ», 2021</SourceFooter>
    </>
  )
}
