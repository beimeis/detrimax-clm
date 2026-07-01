import type { BranchConfig, TagItem, AudienceSlideData, ProductTag } from './types'

export const ACTIVE_COLOR = '#00A896'

export const activeBranch: BranchConfig = {
  id: 'active',
  label: 'Детримакс® Актив',
  color: ACTIVE_COLOR,
  productName: 'Детримакс® Актив',
  dose: '500 МЕ / 1 капля',
  age: 'С 3 лет (школьники)',
  slides: [
    { id: 1, title: 'Аудитория и потребность', menuLabel: 'Школьник' },
    { id: 2, title: 'Факторы риска дефицита', menuLabel: 'Факторы риска' },
    { id: 3, title: 'Последствия дефицита', menuLabel: 'Последствия' },
    { id: 4, title: 'Роль D3', menuLabel: 'Механизм D3' },
    { id: 5, title: 'Продукт', menuLabel: 'Детримакс® Актив' },
    { id: 6, title: 'Подбор дозы', menuLabel: 'Подбор дозы' },
    { id: 7, title: 'Приказ №422', menuLabel: 'Приказ №422' },
  ],
}

export const activeAudience: AudienceSlideData = {
  category: 'Пациент: ребёнок школьного возраста',
  thesis: 'D3 необходим для когнитивного развития, иммунной защиты и адаптации к учебным нагрузкам',
  source: 'Клинические рекомендации по профилактике дефицита витамина D · Минздрав РФ',
  image: '/assets/characters/active-audience-schoolboy.png',
  imageAlt: 'Школьник',
  highlights: [
    'Концентрация и обучение',
    'Иммунитет и снижение частоты ОРВИ',
    'Настроение и качество сна',
    'Поддержка в период активного роста',
  ],
}

export const activeRiskFactors: TagItem[] = [
  {
    id: 'sun',
    label: 'Солнце',
    icon: '☀️',
    category: 'Образ жизни',
    thesis: 'Дети мало бывают на улице',
    detail: 'Школьники проводят большую часть дня в помещении — синтез D3 в коже существенно снижается по сравнению с летним периодом.',
    image: '/assets/characters/active-risk-schoolboy-indoor.png',
  },
  {
    id: 'gadgets',
    label: 'Гаджеты',
    icon: '📱',
    category: 'Экранное время',
    thesis: 'Экранное время вместо прогулок',
    detail: 'Увеличение времени за экранами замещает активность на свежем воздухе — основной источник естественной инсоляции теряется.',
    image: '/assets/characters/active-risk-schoolboy-indoor.png',
  },
  {
    id: 'growth',
    label: 'Рост',
    icon: '📈',
    category: 'Физиология',
    thesis: 'Интенсивный рост в школьном возрасте',
    detail: 'Период школьного возраста — время активного роста скелета и мышечной массы, потребность в D3 для минерализации костей возрастает.',
    image: '/assets/characters/active-audience-schoolboy.png',
  },
  {
    id: 'season',
    label: 'Сезон',
    icon: '❄️',
    category: 'Климат',
    thesis: 'Осень/зима в регионах с низкой инсоляцией',
    detail: 'В осенне-зимний период угол солнца и продолжительность светового дня снижаются — риск дефицита D3 у детей возрастает.',
    image: '/assets/characters/active-risk-schoolboy-indoor.png',
  },
]

export const activeComplications: TagItem[] = [
  {
    id: 'early',
    label: 'Ранние признаки',
    icon: '⚠️',
    category: 'Начальная стадия',
    thesis: 'Усталость, снижение концентрации, частые простуды',
    detail: 'Дефицит D3 у школьника проявляется снижением работоспособности, трудностями концентрации и повышенной частотой ОРВИ.',
    image: '/assets/characters/active-brain-learning.png',
  },
  {
    id: 'late',
    label: 'Поздние осложнения',
    icon: '🦴',
    category: 'Тяжёлые последствия',
    thesis: 'Остеопения, миалгии, иммунодефицит',
    detail: 'При длительном дефиците снижается минеральная плотность костей, развиваются мышечные боли и нарушения адаптивного иммунитета.',
    image: '/assets/characters/active-risk-schoolboy-indoor.png',
  },
]

export const activeMechanism: TagItem[] = [
  {
    id: 'cognition',
    label: 'Когниция',
    icon: '🧠',
    category: 'Нервная система',
    thesis: 'VDR в мозге, нейропластичность, нейрозащита',
    detail: 'Рецепторы витамина D (VDR) экспрессируются в гиппокампе и коре — D3 поддерживает нейропластичность и когнитивные функции.',
    image: '/assets/characters/active-brain-learning.png',
  },
  {
    id: 'mood',
    label: 'Настроение и сон',
    icon: '😴',
    category: 'Психоэмоциональное',
    thesis: 'Регуляция серотонина и мелатонина',
    detail: 'D3 участвует в синтезе серотонина и мелатонина — гормонов настроения и сна, что важно для адаптации к школьным нагрузкам.',
    image: '/assets/characters/active-sleep-child.png',
  },
  {
    id: 'immunity',
    label: 'Иммунитет',
    icon: '🛡️',
    category: 'Иммунная система',
    thesis: 'Врождённый и адаптивный иммунный ответ',
    detail: 'D3 модулирует врождённый иммунитет (барьер, NK-клетки) и адаптивный (T-клетки, Treg) — снижая частоту инфекций.',
    image: '/assets/characters/active-immunity-child.png',
  },
]

export const activeProductTags: ProductTag[] = [
  {
    id: 'dose',
    label: 'Доза',
    category: 'Дозировка',
    thesis: '500 МЕ в 1 капле — суточная доза для школьника',
    detail: 'Одна капля содержит 500 МЕ витамина D3 — рекомендуемая профилактическая доза для детей с 3 лет.',
  },
  {
    id: 'age',
    label: 'Возраст',
    category: 'Показания',
    thesis: 'С 3 лет и старше',
    detail: 'Предназначен для профилактики и лечения дефицита D3 у детей школьного возраста по назначению врача.',
  },
  {
    id: 'course',
    label: 'Курс',
    category: 'Длительность',
    thesis: 'Курс 6 месяцев с контролем 25(OH)D',
    detail: 'Рекомендуемый курс приёма — 6 месяцев с последующим контролем уровня 25(OH)D через 3–6 месяцев.',
  },
  {
    id: 'dropper',
    label: 'Дозатор',
    category: 'Удобство',
    thesis: 'Капельница-дозатор для точного дозирования',
    detail: 'Встроенная капельница обеспечивает точное дозирование — 1 капля = 500 МЕ без необходимости измерять объём.',
  },
]
