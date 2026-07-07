export type BranchId = 'baby' | 'active'

export interface SlideMeta {
  id: number
  title: string
  menuLabel: string
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
