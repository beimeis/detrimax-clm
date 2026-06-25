import type { RouteId } from '../types'
import { ROUTES, SLIDE_SUBTITLES, SLIDE_TITLES } from '../types'
import type { SlideId } from '../types'

interface Props {
  route: RouteId | null
  slideId: SlideId
  title?: string
  subtitle?: string
}

export default function SlideHeader({ route, slideId, title, subtitle }: Props) {
  const breadcrumb = route ? ROUTES[route].label : 'Детримакс® CLM'

  return (
    <header className="slide-header">
      <div className="breadcrumb">
        <span className="breadcrumb-brand">Детримакс®</span>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-route">{breadcrumb}</span>
      </div>
      <h2 className="slide-title title-enter">{title ?? SLIDE_TITLES[slideId]}</h2>
      {(subtitle ?? SLIDE_SUBTITLES[slideId]) && (
        <p className="slide-subtitle subtitle-enter">{subtitle ?? SLIDE_SUBTITLES[slideId]}</p>
      )}
    </header>
  )
}
