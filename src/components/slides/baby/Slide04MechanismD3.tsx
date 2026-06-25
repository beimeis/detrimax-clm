import InteractiveCard from '../../shared/InteractiveCard'
import { babyMechanism, BABY_COLOR } from '../../../data/baby'

export default function Slide04MechanismD3() {
  return (
    <InteractiveCard
      slideKey="baby-slide-4"
      title="Роль D3"
      category="Механизм действия витамина D3 у младенца"
      tags={babyMechanism}
      branchColor={BABY_COLOR}
      source="PubMed · Клинические рекомендации РАЭ"
    />
  )
}
