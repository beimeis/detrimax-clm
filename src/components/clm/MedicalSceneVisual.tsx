import type { ReactNode } from 'react'
import CharacterFigure from './CharacterFigure'
import {
  SCENE_CHARACTERS,
  SCENE_IMAGES,
  type CharacterId,
  type MedicalSceneType,
} from '../../assets/characters'

export type { MedicalSceneType }

interface Props {
  scene: MedicalSceneType
  activeZone: string | null
  revealed: Set<string>
}

function zoneOn(activeZone: string | null, revealed: Set<string>, id: string) {
  return activeZone === id || revealed.has(id) ? 'on' : ''
}

function SceneImage({ src, className = '' }: { src: string; className?: string }) {
  return (
    <div className={`scene-image ${className}`.trim()} aria-hidden>
      <img src={src} alt="" className="scene-image-img" draggable={false} />
      <div className="char-figure-glow" />
    </div>
  )
}

function SceneCharacter({ id, size = 'full' }: { id: CharacterId; size?: 'full' | 'compact' | 'wide' | 'hero' }) {
  return <CharacterFigure id={id} size={size} />
}

function ShieldOverlay({ wave, layers, lit }: { wave: boolean; layers: number; lit: boolean }) {
  return (
    <div className={`med-shield-wrap ${wave ? 'is-wave' : ''} ${lit ? 'is-active' : ''}`}>
      <svg viewBox="0 0 80 100" className="med-shield-svg" aria-hidden>
        <path d="M40 8 L68 22 L68 52 C68 72 54 86 40 92 C26 86 12 72 12 52 L12 22 Z" className="med-shield-glass" />
        {Array.from({ length: layers }).map((_, i) => (
          <path
            key={i}
            d="M40 8 L68 22 L68 52 C68 72 54 86 40 92 C26 86 12 72 12 52 L12 22 Z"
            className="med-shield-layer"
            style={{ transform: `scale(${1 + i * 0.08})`, transformOrigin: '40px 50px' }}
          />
        ))}
      </svg>
    </div>
  )
}

function VirusRing({ repelled, pulled }: { repelled: boolean; pulled: boolean }) {
  return (
    <div className={`med-virus-ring ${repelled ? 'is-repelled' : ''} ${pulled ? 'is-pulled' : ''}`}>
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="med-virus" style={{ ['--i' as string]: i }} />
      ))}
    </div>
  )
}

function renderCharacterScene(
  sceneClass: string,
  charId: CharacterId,
  lit: boolean,
  extras?: ReactNode,
  size: 'full' | 'compact' | 'wide' | 'hero' = 'full',
) {
  return (
    <div className={`med-scene med-scene--photo ${sceneClass} ${lit ? 'is-lit' : ''}`} aria-hidden>
      <SceneCharacter id={charId} size={size} />
      {extras}
    </div>
  )
}

export default function MedicalSceneVisual({ scene, activeZone, revealed }: Props) {
  const lit = !!activeZone
  const charId = SCENE_CHARACTERS[scene]
  const sceneImage = SCENE_IMAGES[scene]

  if (scene === 'infant-body' && charId) {
    return renderCharacterScene('med-scene--infant', charId, lit, (
      <>
        <div className={`med-zone-glow med-zone-glow--head ${zoneOn(activeZone, revealed, 'sleep')}`} />
        <div className={`med-zone-glow med-zone-glow--chest ${zoneOn(activeZone, revealed, 'immunity')}`} />
        <div className={`med-zone-glow med-zone-glow--torso ${zoneOn(activeZone, revealed, 'bones')}`} />
        <div className={`med-zone-glow med-zone-glow--legs ${zoneOn(activeZone, revealed, 'muscles')}`} />
      </>
    ))
  }

  if ((scene === 'immune-shield' || scene === 'immune-layers') && sceneImage) {
    const layers = scene === 'immune-layers' ? revealed.size : activeZone ? 1 : 0
    const wave = activeZone === 'peptides' || activeZone === 'activate' || activeZone === 'cold'
    const pulled = activeZone === 'phagocytosis'
    return (
      <div className={`med-scene med-scene--photo med-scene--immune ${lit ? 'is-lit' : ''}`} aria-hidden>
        <SceneImage src={sceneImage.src} />
        <ShieldOverlay wave={wave} layers={layers} lit={lit} />
        <VirusRing repelled={wave} pulled={pulled} />
      </div>
    )
  }

  if (scene === 'deficit-orbit' && charId) {
    return renderCharacterScene('med-scene--deficit', charId, lit)
  }

  if (scene === 'complications-body' && charId) {
    const late = revealed.has('rachit') || revealed.has('bones')
    return renderCharacterScene('med-scene--complications', charId, lit, (
      <div className="med-risk-meter">
        <div className="med-risk-meter-track" />
        <div className={`med-risk-meter-fill ${late ? 'is-late' : 'is-early'}`} />
        <span className="med-risk-meter-label">{late ? 'Поздние' : 'Ранние'}</span>
      </div>
    ), 'wide')
  }

  if (scene === 'adaptive-cells' && charId) {
    return renderCharacterScene('med-scene--cells', charId, lit, (
      <>
        <div className="med-cell-orbit">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="med-cell-dot" style={{ ['--i' as string]: i }} />
          ))}
        </div>
        {activeZone === 'treg' && <div className="med-treg-shell" />}
      </>
    ))
  }

  if (scene === 'neural-head' && charId) {
    return renderCharacterScene('med-scene--neural', charId, lit, (
      <svg viewBox="0 0 120 80" className="med-neural-overlay" aria-hidden>
        <g className="med-neural-net">
          <line x1="20" y1="20" x2="60" y2="38" />
          <line x1="100" y1="20" x2="60" y2="38" />
          <circle cx="60" cy="38" r="5" className={activeZone === 'vdr' ? 'hot' : ''} />
        </g>
      </svg>
    ))
  }

  if (scene === 'sleep-rhythm' && charId) {
    return renderCharacterScene('med-scene--sleep', charId, lit, (
      <div className="med-clock-widget"><span className="med-clock-hand" /></div>
    ))
  }

  if (scene === 'dose-panel' && charId) {
    return renderCharacterScene('med-scene--dose', charId, lit, (
      <div className={`med-dose-tablet ${lit ? 'is-active' : ''}`}>
        <div className="med-dose-tablet-bar" style={{ width: lit ? '78%' : '42%' }} />
      </div>
    ), 'compact')
  }

  if (scene === 'school-risks' && SCENE_IMAGES['school-risks']) {
    const img = SCENE_IMAGES['school-risks']
    return (
      <div className={`med-scene med-scene--photo med-scene--school ${lit ? 'is-lit' : ''}`} aria-hidden>
        <SceneImage src={img.src} className="scene-image--hero" />
        <div className={`med-school-badge med-school-badge--sun ${zoneOn(activeZone, revealed, 'sun')}`}>☀️</div>
        <div className={`med-school-badge med-school-badge--gadget ${zoneOn(activeZone, revealed, 'gadgets')}`}>📱</div>
        <div className={`med-school-badge med-school-badge--growth ${zoneOn(activeZone, revealed, 'growth')}`}>📈</div>
        <div className={`med-school-badge med-school-badge--season ${zoneOn(activeZone, revealed, 'seasonal')}`}>❄️</div>
      </div>
    )
  }

  if (scene === 'problem-chart' && sceneImage) {
    return (
      <div className="med-scene med-scene--chart-layout" aria-hidden>
        <SceneImage src={sceneImage.src} className="scene-image--compact" />
        <div className="med-stat-bars">
          <div className="med-stat-bar" style={{ height: '72%' }}><span>0–1 год</span></div>
          <div className="med-stat-bar" style={{ height: '58%' }}><span>Школа</span></div>
          <div className="med-stat-bar med-stat-bar--accent" style={{ height: '85%' }}><span>Дефицит</span></div>
        </div>
      </div>
    )
  }

  if (scene === 'risks-scale' && sceneImage) {
    return (
      <div className="med-scene med-scene--chart-layout" aria-hidden>
        <SceneImage src={sceneImage.src} className="scene-image--compact" />
        <div className="med-risk-list">
          {['Кости', 'Инфекции', 'Образ жизни', 'Рост'].map((label, i) => (
            <div key={label} className={`med-risk-item ${revealed.has(String(i)) || activeZone === String(i) ? 'on' : ''}`}>
              {label}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}
