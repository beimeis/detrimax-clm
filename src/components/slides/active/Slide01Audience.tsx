import AudienceSlide from '../../shared/AudienceSlide'
import { activeAudience } from '../../../data/active'

export default function Slide01Audience() {
  return <AudienceSlide title="Аудитория и потребность" data={activeAudience} />
}
