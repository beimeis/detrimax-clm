export type RouteId = 'quick' | 'baby' | 'school' | 'immunity'
export type ThemeId = RouteId | 'risk' | 'default'

export type SlideId =
  | 'home'
  | 'infant'
  | 'deficit-causes'
  | 'complications'
  | 'innate-immunity'
  | 'adaptive-immunity'
  | 'immune-influence'
  | 'school-risks'
  | 'cognitive'
  | 'mood-sleep'
  | 'dose'
  | 'product-baby'
  | 'product-active'
  | 'quick-problem'
  | 'quick-risks'
  | 'quick-immunity'
  | 'quick-products'
  | 'final'

export interface CardItem {
  id: string
  title: string
  thesis: string
  icon?: string
}

export interface TabItem {
  id: string
  label: string
  icon?: string
  cards: CardItem[]
}

export interface RouteTheme {
  label: string
  color: string
  colorDeep: string
  colorGold?: string
  bgSoft: string
  slides: SlideId[]
}

export const ROUTES: Record<RouteId, RouteTheme> = {
  quick: {
    label: 'Быстрый визит 3–5 мин',
    color: '#028090',
    colorDeep: '#01579B',
    colorGold: '#FFB300',
    bgSoft: '#E0F2F1',
    slides: ['quick-problem', 'quick-immunity', 'quick-products', 'dose', 'final'],
  },
  baby: {
    label: 'Младенцы 0–12 месяцев',
    color: '#FF9100',
    colorDeep: '#EF6C00',
    colorGold: '#FFB300',
    bgSoft: '#FFF3E0',
    slides: ['infant', 'deficit-causes', 'complications', 'innate-immunity', 'adaptive-immunity', 'product-baby', 'dose', 'final'],
  },
  school: {
    label: 'Школьники',
    color: '#00A896',
    colorDeep: '#028090',
    colorGold: '#FFB300',
    bgSoft: '#E0F7FA',
    slides: ['school-risks', 'cognitive', 'mood-sleep', 'product-active', 'dose', 'final'],
  },
  immunity: {
    label: 'Иммунитет и ОРВИ',
    color: '#00A896',
    colorDeep: '#028090',
    colorGold: '#FFB300',
    bgSoft: '#E0F7FA',
    slides: ['immune-influence', 'innate-immunity', 'adaptive-immunity', 'complications', 'product-active', 'dose', 'final'],
  },
}

export const SLIDE_TITLES: Record<SlideId, string> = {
  home: 'Главное меню',
  infant: 'Младенец 0–12 месяцев',
  'deficit-causes': 'Дефицит у новорождённых',
  complications: 'Осложнения дефицита',
  'innate-immunity': 'Врождённый иммунитет',
  'adaptive-immunity': 'Адаптивный иммунитет',
  'immune-influence': 'D3 и иммунная система',
  'school-risks': 'Факторы риска',
  cognitive: 'Когнитивное развитие',
  'mood-sleep': 'Настроение и сон',
  dose: 'Подбор дозы',
  'product-baby': 'Детримакс® Бэби',
  'product-active': 'Детримакс® Актив',
  'quick-problem': 'Дефицит витамина D у детей',
  'quick-risks': 'Ключевые риски',
  'quick-immunity': 'D3 и иммунный ответ',
  'quick-products': 'Линейка Детримакс®',
  final: 'Итог',
}

export const SLIDE_SUBTITLES: Partial<Record<SlideId, string>> = {
  infant: 'D3 поддерживает рост, кости, сон и иммунитет',
  'deficit-causes': '4 фактора «пустого депо» у младенца',
  complications: 'Ранние признаки и поздние осложнения',
  'innate-immunity': 'Барьерная защита организма',
  'adaptive-immunity': 'Регуляция иммунного ответа',
  'immune-influence': 'D3 и иммунная система ребёнка',
  'school-risks': 'Образ жизни и физиология',
  cognitive: 'D3 и нервная система',
  'mood-sleep': 'Сон, настроение, поведение',
  dose: 'Целевой уровень 30–60 нг/мл',
  'product-baby': '200 МЕ в одной капле · с рождения',
  'product-active': '500 МЕ в одной капле · с 3 лет',
  'quick-problem': 'Почему дефицит D3 часто встречается у детей',
  'quick-risks': 'На что обратить внимание на приёме',
  'quick-immunity': 'Витамин D3 и регуляция иммунитета',
  'quick-products': 'Выберите продукт под возраст пациента',
}

export const QUICK_NAV_TARGETS = {
  dose: { slide: 'dose' as SlideId, route: 'baby' as RouteId, label: 'Доза' },
  baby: { slide: 'product-baby' as SlideId, route: 'baby' as RouteId, label: 'Бэби' },
  active: { slide: 'product-active' as SlideId, route: 'school' as RouteId, label: 'Актив' },
  immunity: { slide: 'immune-influence' as SlideId, route: 'immunity' as RouteId, label: 'Иммунитет' },
  risks: { slide: 'school-risks' as SlideId, route: 'school' as RouteId, label: 'Риски' },
} as const

export function getSlideTheme(slideId: SlideId, route: RouteId | null): ThemeId {
  if (slideId === 'complications' || slideId === 'deficit-causes' || slideId === 'quick-risks') return 'risk'
  if (route) return route
  return 'default'
}

export function resolveRouteForSlide(slide: SlideId, current: RouteId | null): RouteId {
  if (current && ROUTES[current].slides.includes(slide)) return current
  for (const [id, r] of Object.entries(ROUTES) as [RouteId, RouteTheme][]) {
    if (r.slides.includes(slide)) return id
  }
  return 'baby'
}
