import InteractiveCard from '../../shared/InteractiveCard'
import { activeMechanism, ACTIVE_COLOR } from '../../../data/active'

export default function Slide04MechanismD3() {
  return (
    <InteractiveCard
      slideKey="active-slide-4"
      title="Роль D3"
      category="Механизм действия витамина D3 у школьника"
      tags={activeMechanism}
      branchColor={ACTIVE_COLOR}
      source="PubMed: 15589899 · PubMed: 24558199"
    />
  )
}
