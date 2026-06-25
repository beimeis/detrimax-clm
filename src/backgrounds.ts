export type BgTheme = 'home' | 'baby' | 'immunity' | 'school' | 'risk' | 'final'

export const BACKGROUNDS: Record<BgTheme, string> = {
  home: '/backgrounds/home.png?v=1',
  baby: '/backgrounds/baby.png',
  immunity: '/backgrounds/immunity.png',
  school: '/backgrounds/school.png',
  risk: '/backgrounds/risk.png',
  final: '/backgrounds/final.png?v=1',
}

export function getBackgroundTheme(
  slideId: string,
  route: string | null,
): BgTheme {
  if (slideId === 'home') return 'home'
  if (slideId === 'final') return 'final'
  if (slideId === 'deficit-causes' || slideId === 'complications' || slideId === 'quick-risks') return 'risk'
  if (slideId === 'quick-products' || slideId === 'product-baby') return 'baby'
  if (route === 'quick') return 'immunity'
  if (route === 'baby') return 'baby'
  if (route === 'school') return 'school'
  if (route === 'immunity') return 'immunity'
  return 'home'
}
