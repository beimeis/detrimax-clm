import type { ReactNode } from 'react'
import MedicalSceneVisual, { type MedicalSceneType } from './MedicalSceneVisual'

interface Props {
  headline?: string
  scene?: MedicalSceneType
  imageSrc?: string
  bullets: string[]
  note?: string
  children?: ReactNode
}

export default function SimpleSlideLayout({
  headline,
  scene,
  imageSrc,
  bullets,
  note,
  children,
}: Props) {
  return (
    <div className="simple-slide">
      {headline && <p className="simple-headline">{headline}</p>}

      <div className="simple-visual">
        {scene ? (
          <MedicalSceneVisual scene={scene} activeZone={null} revealed={new Set()} />
        ) : imageSrc ? (
          <img src={imageSrc} alt="" className="simple-image" draggable={false} />
        ) : null}
      </div>

      <ul className="simple-bullets">
        {bullets.map(line => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {note && <p className="simple-note">{note}</p>}
      {children}
    </div>
  )
}
