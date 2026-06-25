import type { BranchConfig, DosingLevel, DosingRow, DosingStep, TagItem, AudienceSlideData, ProductTag } from './types'

export const BABY_COLOR = '#F5A623'

export const babyBranch: BranchConfig = {
  id: 'baby',
  label: 'Детримакс® Бэби',
  color: BABY_COLOR,
  productName: 'Детримакс® Бэби',
  dose: '200 МЕ / 1 капля',
  age: 'С рождения (0–12 мес)',
  slides: [
    { id: 1, title: 'Аудитория и потребность', menuLabel: 'Младенец 0–12 мес' },
    { id: 2, title: 'Факторы риска дефицита', menuLabel: 'Факторы риска' },
    { id: 3, title: 'Последствия дефицита', menuLabel: 'Последствия' },
    { id: 4, title: 'Роль D3', menuLabel: 'Механизм D3' },
    { id: 5, title: 'Продукт', menuLabel: 'Детримакс® Бэби' },
    { id: 6, title: 'Подбор дозы', menuLabel: 'Подбор дозы' },
  ],
}

export const babyAudience: AudienceSlideData = {
  category: 'Пациент: младенец 0–12 месяцев',
  thesis: 'D3 критичен для минерализации костей, сна и формирования иммунитета в период интенсивного роста',
  source: 'Национальная программа «10 шагов к здоровью ребёнка» · Клинические рекомендации',
  image: '/assets/characters/baby-audience.png',
  imageAlt: 'Младенец',
}

export const babyRiskFactors: TagItem[] = [
  {
    id: 'mother',
    label: 'Мама',
    icon: '🤱',
    category: 'Пренатальный фактор',
    thesis: 'Дефицит D у матери во время беременности',
    detail: 'Низкий уровень 25(OH)D у матери снижает запас витамина D у плода и новорождённого. Грудничок получает ограниченный «стартовый депо».',
    image: '/assets/characters/baby-audience.png',
  },
  {
    id: 'bf',
    label: 'ГВ',
    icon: '🤱',
    category: 'Питание',
    thesis: 'Грудное молоко содержит мало D3',
    detail: 'Даже при полноценном грудном вскармливании суточная дотация D3 из молока недостаточна для профилактики дефицита у младенца.',
    image: '/assets/characters/baby-audience.png',
  },
  {
    id: 'sun',
    label: 'Солнце',
    icon: '☀️',
    category: 'Инсоляция',
    thesis: 'Недостаток инсоляции, закрытая одежда',
    detail: 'Младенцы проводят мало времени на солнце; плотная одежда и сезонность снижают синтез D3 в коже.',
    image: '/assets/characters/baby-audience.png',
  },
  {
    id: 'growth',
    label: 'Рост',
    icon: '📈',
    category: 'Физиология',
    thesis: 'Высокая скорость роста = высокая потребность',
    detail: 'В первый год жизни масса тела и длина костей увеличиваются в разы — потребность в D3 для минерализации скелета максимальна.',
    image: '/assets/characters/baby-growth.png',
  },
]

export const babyComplications: TagItem[] = [
  {
    id: 'early',
    label: 'Ранние признаки',
    icon: '⚠️',
    category: 'Начальная стадия',
    thesis: 'Потливость, нарушение сна, беспокойство',
    detail: 'Ранние проявления дефицита D3 у младенца часто неспецифичны: избыточная потливость головы, беспокойный сон, повышенная возбудимость.',
    image: '/assets/characters/baby-restless.png',
  },
  {
    id: 'late',
    label: 'Поздние осложнения',
    icon: '🦴',
    category: 'Тяжёлые последствия',
    thesis: 'Рахит, деформации скелета, задержка развития',
    detail: 'При длительном дефиците нарушается минерализация костей — развивается рахит, деформации грудной клетки и конечностей, задержка моторного развития.',
    image: '/assets/characters/baby-audience.png',
  },
]

export const babyMechanism: TagItem[] = [
  {
    id: 'bones',
    label: 'Кости',
    icon: '🦴',
    category: 'Скелет',
    thesis: 'Минерализация и рост костной ткани',
    detail: 'D3 регулирует всасывание кальция и фосфора, необходимых для формирования прочного скелета в период активного роста.',
    image: '/assets/characters/baby-audience.png',
  },
  {
    id: 'sleep',
    label: 'Сон',
    icon: '😴',
    category: 'Циркадные ритмы',
    thesis: 'Регуляция мелатонина и качества сна',
    detail: 'D3 участвует в синтезе мелатонина — гормона сна. Адекватный уровень способствует более спокойному засыпанию и глубокому сну.',
    image: '/assets/characters/baby-sleep.png',
  },
  {
    id: 'immunity',
    label: 'Иммунитет',
    icon: '🛡️',
    category: 'Иммунная система',
    thesis: 'Врождённый и адаптивный иммунный ответ',
    detail: 'D3 поддерживает барьерную функцию кожи и слизистых, активирует врождённые клетки и регулирует T-клетки и Treg.',
    image: '/assets/characters/baby-immunity.png',
  },
  {
    id: 'muscles',
    label: 'Мышцы',
    icon: '💪',
    category: 'Моторика',
    thesis: 'Тонус и физическое развитие',
    detail: 'D3 влияет на мышечный тонус и координацию движений — дефицит ассоциирован с гипотонией и задержкой моторных навыков.',
    image: '/assets/characters/baby-growth.png',
  },
]

export const babyProductTags: ProductTag[] = [
  {
    id: 'dose',
    label: 'Доза',
    category: 'Дозировка',
    thesis: '200 МЕ в 1 капле — точная суточная доза',
    detail: 'Одна капля содержит 200 МЕ витамина D3 — рекомендуемая профилактическая доза для младенцев с рождения.',
  },
  {
    id: 'age',
    label: 'Возраст',
    category: 'Показания',
    thesis: 'С рождения до 12 месяцев',
    detail: 'Предназначен для профилактики и лечения дефицита D3 у детей с рождения, включая недоношенных по назначению врача.',
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
    detail: 'Встроенная капельница обеспечивает точное дозирование — 1 капля = 200 МЕ без необходимости измерять объём.',
  },
]

export const DOSING_STEPS: DosingStep[] = [
  { num: 1, title: 'Анализ', text: 'Определить исходный уровень 25(OH)D в крови.' },
  { num: 2, title: 'Цель', text: 'Ориентир — 30–60 нг/мл по рекомендации врача.' },
  { num: 3, title: 'Доза', text: 'Подобрать суточную дозу по таблице.' },
  { num: 4, title: 'Контроль', text: 'Повторить анализ через 3–6 месяцев.' },
]

export const DOSING_LEVELS: DosingLevel[] = [
  { label: 'Дефицит', range: '< 20', color: '#D32F2F' },
  { label: 'Недостаточность', range: '21–29', color: '#EF6C00' },
  { label: 'Адекватный', range: '30–70', color: '#00A896' },
  { label: 'Высокий', range: '71–90', color: '#FFB300' },
]

export const DOSING_ROWS: DosingRow[] = [
  { initial: '10', to20: '1000', to30: '2200', to40: '3600' },
  { initial: '15', to20: '500', to30: '1700', to40: '3200' },
  { initial: '20', to20: '—', to30: '1200', to40: '2600' },
  { initial: '25', to20: '—', to30: '600', to40: '2000' },
]

export const DOSING_BANNER = 'Целевой уровень 25(OH)D: 30–60 нг/мл · контроль через 3–6 месяцев'
export const DOSING_SOURCE = 'Клинические рекомендации РАЭ · Минздрав РФ'
