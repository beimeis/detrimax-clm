import type { RouteId } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import MedicalSceneLayout from '../components/clm/MedicalSceneLayout'

interface Props { route: RouteId }

export function QuickProblemSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="quick-problem" />
      <MedicalSceneLayout
        slideId="quick-problem"
        scene="problem-chart"
        zones={[
          { id: 'infant', label: 'Младенцы', title: '0–1 год', thesis: 'У младенцев дефицит D3 встречается часто.', top: '36%', left: '72%', icon: 'baby' as const },
          { id: 'school', label: 'Школа', title: 'Школьники', thesis: 'Мало солнца и нагрузка в школе могут снижать статус D3.', top: '52%', left: '28%', icon: 'school' as const },
          { id: 'deficit', label: 'Дефицит', title: 'Риски', thesis: 'Низкий статус D3 связан с риском для костей и иммунитета.', top: '68%', left: '72%', icon: 'chart' as const },
        ]}
        accent="#028090"
        headline="Дефицит D3 — распространённая проблема у детей"
        conclusion="Тактика зависит от возраста и уровня 25(OH)D."
      />
      <SourceFooter>Национальная программа D-дефицита · 2021</SourceFooter>
    </>
  )
}

const RISK_ZONES = [
  { id: '0', label: 'Кости', title: 'Кости', thesis: 'Дефицит D3 нарушает минерализацию костей.', top: '26%', left: '72%', icon: 'bones' as const },
  { id: '1', label: 'Инфекции', title: 'Инфекции', thesis: 'Низкий статус D3 связан с частыми ОРВИ.', top: '42%', left: '28%', icon: 'infection' as const },
  { id: '2', label: 'Образ жизни', title: 'Образ жизни', thesis: 'Мало солнца и экранное время снижают статус D3.', top: '58%', left: '72%', icon: 'lifestyle' as const },
  { id: '3', label: 'Рост', title: 'Рост', thesis: 'В периоды активного роста потребность в D3 возрастает.', top: '74%', left: '32%', icon: 'growth' as const },
]

export function QuickRisksSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="quick-risks" />
      <MedicalSceneLayout
        slideId="quick-risks"
        scene="risks-scale"
        zones={RISK_ZONES}
        accent="#D32F2F"
        headline="На что обратить внимание на приёме"
        conclusion="Раннее выявление дефицита помогает скорректировать тактику ведения."
      />
      <SourceFooter>ЦИТО им. Приорова · Приказ №422</SourceFooter>
    </>
  )
}
