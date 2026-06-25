import InteractiveCard from '../../shared/InteractiveCard'
import { babyComplications, BABY_COLOR } from '../../../data/baby'

export default function Slide03Complications() {
  return (
    <InteractiveCard
      slideKey="baby-slide-3"
      title="Последствия дефицита"
      category="От ранних признаков к осложнениям"
      tags={babyComplications}
      branchColor={BABY_COLOR}
      source="Клинические рекомендации по рахиту · Минздрав РФ"
      showScale
    />
  )
}
