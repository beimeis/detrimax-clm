export type BranchId = 'baby' | 'active'

export interface TagItem {
  id: string
  label: string
  icon: string
  category: string
  thesis: string
  detail: string
  image?: string
}

export interface SlideMeta {
  id: number
  title: string
  menuLabel: string
}

export interface ProductTag {
  id: string
  label: string
  category: string
  thesis: string
  detail: string
}

export interface BranchConfig {
  id: BranchId
  label: string
  color: string
  productName: string
  dose: string
  age: string
  slides: SlideMeta[]
}

export interface AudienceSlideData {
  category: string
  thesis: string
  source: string
  image: string
  imageAlt: string
  highlights?: string[]
}

export interface DosingStep {
  num: number
  title: string
  text: string
}

export interface DosingLevel {
  label: string
  range: string
  color: string
}

export interface DosingRow {
  initial: string
  to20: string
  to30: string
  to40: string
}
