import { useState } from 'react'
import { CHARACTERS, PLACEHOLDER_CHARACTERS, type CharacterId } from '../../assets/characters'

interface Props {
  id: CharacterId
  size?: 'full' | 'compact' | 'wide' | 'hero'
  className?: string
}

export default function CharacterFigure({ id, size = 'full', className = '' }: Props) {
  const character = CHARACTERS[id]
  const [src, setSrc] = useState(character.src)

  return (
    <div className={`char-figure char-figure--${size} ${className}`.trim()} aria-hidden>
      <img
        src={src}
        alt=""
        className="char-figure-img"
        draggable={false}
        onError={() => setSrc(PLACEHOLDER_CHARACTERS[id])}
      />
      <div className="char-figure-glow" />
    </div>
  )
}
