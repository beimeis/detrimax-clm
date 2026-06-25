export interface SourceItem {
  topic: string
  refs: string[]
}

export const SOURCES: SourceItem[] = [
  {
    topic: 'Дефицит D3 у детей',
    refs: [
      'Национальная программа «Недостаточность витамина D у детей и подростков РФ», 2021',
      'JOGNN, 2016 · RMJ: Vitamin D у новорождённых',
    ],
  },
  {
    topic: 'Осложнения и рахит',
    refs: [
      'ЦИТО им. Приорова',
      'Приказ №422 от 23.04.2024',
    ],
  },
  {
    topic: 'Иммунитет',
    refs: [
      'PubMed: 28202713',
      'NCBI PMC6210343',
    ],
  },
  {
    topic: 'Когнитивное развитие',
    refs: ['PubMed: 15589699'],
  },
  {
    topic: 'Сон и настроение',
    refs: ['PubMed: 24558199'],
  },
  {
    topic: 'Дозирование',
    refs: [
      'Клинические рекомендации РАЭ',
      'Минздрав РФ',
    ],
  },
]
