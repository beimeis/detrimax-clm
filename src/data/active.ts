import type { BranchConfig } from './types'

export const ACTIVE_COLOR = '#42918A'

export const activeBranch: BranchConfig = {
  id: 'active',
  label: 'Детримакс® Актив',
  color: ACTIVE_COLOR,
  productName: 'Детримакс® Актив',
  dose: '500 МЕ / 1 капля',
  age: 'С 3 лет (школьники)',
  slides: [
    { id: 1, title: 'Аудитория и потребность', menuLabel: 'Школьник' },
    { id: 2, title: 'Осложнения дефицита витамина D', menuLabel: 'Осложнения дефицита' },
    { id: 3, title: 'Причины дефицита D3', menuLabel: 'Причины дефицита' },
    { id: 4, title: 'D3 и иммунитет', menuLabel: 'D3 и иммунитет' },
    { id: 5, title: 'D3, мозг и настроение', menuLabel: 'Мозг и настроение' },
    { id: 6, title: 'Факторы риска у школьников', menuLabel: 'Факторы риска' },
    { id: 7, title: 'D3 и иммунная защита', menuLabel: 'Иммунная защита' },
    { id: 8, title: 'Продукт', menuLabel: 'Детримакс® Актив' },
    { id: 9, title: 'Подбор дозы', menuLabel: 'Подбор дозы' },
    { id: 10, title: 'Приказ №422', menuLabel: 'Приказ №422' },
  ],
}
