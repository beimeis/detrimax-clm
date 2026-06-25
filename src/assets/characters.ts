export type MedicalSceneType =
  | 'infant-body'
  | 'immune-shield'
  | 'immune-layers'
  | 'deficit-orbit'
  | 'complications-body'
  | 'adaptive-cells'
  | 'neural-head'
  | 'sleep-rhythm'
  | 'dose-panel'
  | 'problem-chart'
  | 'risks-scale'
  | 'school-risks'

export type CharacterId =
  | 'baby'
  | 'childImmunity'
  | 'schoolboy'
  | 'studentBrain'
  | 'sleepChild'

export type SceneImageId = CharacterId | 'schoolScene' | 'riskScene' | 'immunityScene'

export const CHARACTERS: Record<CharacterId, { src: string; alt: string }> = {
  baby: { src: '/assets/characters/baby-3d.png', alt: 'Младенец' },
  childImmunity: { src: '/assets/characters/child-immunity-3d.png', alt: 'Ребёнок — иммунитет' },
  schoolboy: { src: '/assets/characters/schoolboy-3d.png', alt: 'Школьник' },
  studentBrain: { src: '/assets/characters/student-brain-3d.png', alt: 'Школьник — когнитивное развитие' },
  sleepChild: { src: '/assets/characters/sleep-child-3d.png', alt: 'Ребёнок — сон' },
}

export const PLACEHOLDER_CHARACTERS: Record<CharacterId, string> = {
  baby: '/assets/characters/placeholders/baby.svg',
  childImmunity: '/assets/characters/placeholders/child-immunity.svg',
  schoolboy: '/assets/characters/placeholders/schoolboy.svg',
  studentBrain: '/assets/characters/placeholders/student-brain.svg',
  sleepChild: '/assets/characters/placeholders/sleep-child.svg',
}

export const SCENE_IMAGES: Partial<Record<MedicalSceneType, { src: string; alt: string }>> = {
  'school-risks': { src: '/assets/characters/school.png', alt: 'Школьник — факторы риска' },
  'problem-chart': { src: '/assets/characters/baby.png', alt: 'Дефицит D3 у детей' },
  'risks-scale': { src: '/assets/characters/risk.png', alt: 'Риски дефицита D3' },
  'immune-shield': { src: '/assets/characters/immunity.png', alt: 'Иммунитет ребёнка' },
  'immune-layers': { src: '/assets/characters/immunity.png', alt: 'Иммунитет ребёнка' },
}

export const SCENE_CHARACTERS: Partial<Record<MedicalSceneType, CharacterId>> = {
  'infant-body': 'baby',
  'deficit-orbit': 'baby',
  'complications-body': 'baby',
  'adaptive-cells': 'childImmunity',
  'neural-head': 'studentBrain',
  'sleep-rhythm': 'sleepChild',
  'dose-panel': 'schoolboy',
}

export const HOME_ROUTE_IMAGES: Record<string, string> = {
  quick: '/assets/characters/immunity.png',
  baby: '/assets/characters/baby-3d.png',
  school: '/assets/characters/school.png',
  immunity: '/assets/characters/immunity.png',
}
