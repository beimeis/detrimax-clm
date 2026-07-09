import type { BranchConfig } from './types'

export const BABY_COLOR = '#DFA24E'

export const babyBranch: BranchConfig = {
  id: 'baby',
  label: 'Детримакс® Бэби',
  color: BABY_COLOR,
  productName: 'Детримакс® Бэби',
  dose: '200 МЕ / 1 капля',
  age: 'С рождения (0–12 мес)',
  slides: [
    { id: 1, title: 'Аудитория и потребность', menuLabel: 'Младенец 0–12 мес' },
    { id: 2, title: 'Осложнения дефицита витамина D', menuLabel: 'Осложнения дефицита' },
    { id: 3, title: 'Причины дефицита D3', menuLabel: 'Причины дефицита' },
    { id: 4, title: 'D3 и иммунитет', menuLabel: 'D3 и иммунитет' },
    { id: 5, title: 'D3, мозг и настроение', menuLabel: 'Мозг и настроение' },
    { id: 6, title: 'D3 и иммунная защита', menuLabel: 'Иммунная защита' },
    { id: 7, title: 'Продукт', menuLabel: 'Детримакс® Бэби' },
    { id: 8, title: 'Подбор дозы', menuLabel: 'Подбор дозы' },
    { id: 9, title: 'Приказ №422', menuLabel: 'Приказ №422' },
  ],
}
