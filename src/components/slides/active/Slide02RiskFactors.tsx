import InteractiveCard from '../../shared/InteractiveCard'
import { activeRiskFactors, ACTIVE_COLOR } from '../../../data/active'

export default function Slide02RiskFactors() {
  return (
    <InteractiveCard
      slideKey="active-slide-2"
      title="Факторы риска дефицита"
      category="Образ жизни и факторы среды"
      tags={activeRiskFactors}
      branchColor={ACTIVE_COLOR}
      source="Клинические рекомендации по профилактике дефицита витамина D · Минздрав РФ"
    />
  )
}
