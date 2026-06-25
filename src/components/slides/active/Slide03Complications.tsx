import InteractiveCard from '../../shared/InteractiveCard'
import { activeComplications, ACTIVE_COLOR } from '../../../data/active'

export default function Slide03Complications() {
  return (
    <InteractiveCard
      slideKey="active-slide-3"
      title="Последствия дефицита"
      category="От ранних признаков к осложнениям"
      tags={activeComplications}
      branchColor={ACTIVE_COLOR}
      source="Клинические рекомендации РАЭ · Минздрав РФ"
      showScale
    />
  )
}
