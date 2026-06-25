import { create } from 'zustand'
import type { BranchId } from '../data/types'

interface PresentationState {
  branch: BranchId | null
  slideIndex: number
  activeCards: Record<string, string>
  menuOpen: boolean

  setBranch: (branch: BranchId | null) => void
  setSlideIndex: (index: number) => void
  setActiveCard: (slideKey: string, cardId: string) => void
  getActiveCard: (slideKey: string, defaultId: string) => string
  setMenuOpen: (open: boolean) => void
}

export const usePresentationStore = create<PresentationState>((set, get) => ({
  branch: null,
  slideIndex: 0,
  activeCards: {},
  menuOpen: false,

  setBranch: (branch) => set({ branch }),

  setSlideIndex: (index) => set({ slideIndex: index }),

  setActiveCard: (slideKey, cardId) =>
    set((state) => ({
      activeCards: { ...state.activeCards, [slideKey]: cardId },
    })),

  getActiveCard: (slideKey, defaultId) => {
    const stored = get().activeCards[slideKey]
    return stored ?? defaultId
  },

  setMenuOpen: (open) => set({ menuOpen: open }),
}))

export function slideKey(branch: BranchId, slideId: number): string {
  return `${branch}-slide-${slideId}`
}
