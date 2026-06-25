import type { Scene3DOptions } from '../types'

export interface ImmuneShieldOptions extends Scene3DOptions {
  accentColor?: number
  goldColor?: number
  virusCount?: number
  /** Вызывается при старте анимации */
  onActionStart?: (action: string) => void
  /** Вызывается по завершении анимации (~1.2s) */
  onActionComplete?: (action: string) => void
}

export type ShieldAction =
  | 'peptides'
  | 'phagocytosis'
  | 'activate'
  | 'cold'
  | 'renewal'
