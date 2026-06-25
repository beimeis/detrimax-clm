import InteractiveCard from '../../shared/InteractiveCard'
import { babyRiskFactors, BABY_COLOR } from '../../../data/baby'

export default function Slide02RiskFactors() {
  return (
    <InteractiveCard
      slideKey="baby-slide-2"
      title="Факторы риска дефицита"
      category="Почему младенец в группе риска"
      tags={babyRiskFactors}
      branchColor={BABY_COLOR}
      source="Национальная программа «10 шагов к здоровью ребёнка» · Клинические рекомендации"
    />
  )
}
