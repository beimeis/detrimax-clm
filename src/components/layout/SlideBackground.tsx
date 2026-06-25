import { SLIDE_BACKGROUND } from '../../constants/backgrounds'

export default function SlideBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${SLIDE_BACKGROUND})` }}
      aria-hidden
    />
  )
}
