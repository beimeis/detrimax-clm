const tabs = {
  bones: {
    title: 'Роль D3',
    subtitle: 'Шаблон состояния: кости',
    visualTitle: 'Визуальный блок',
    visualText: 'Здесь будет изображение ребёнка и четыре смысловые иконки.',
    sectionTitle: 'Информационный блок состояния',
    sectionDescription: 'Описание будет заменяться вместе с выбранной вкладкой.',
    callouts: ['Иконка 1', 'Иконка 2', 'Иконка 3', 'Иконка 4'],
    items: ['Карточка 1', 'Карточка 2', 'Карточка 3', 'Карточка 4'],
    summaryTitle: 'Итог',
    summaryText: 'Здесь будет итоговый вывод для выбранного состояния.',
  },
  sleep: {
    title: 'Роль D3',
    subtitle: 'Шаблон состояния: сон',
    visualTitle: 'Состояние Сон',
    visualText: 'Контент сна будет добавлен следующей командой.',
    sectionTitle: 'Как D3 связан со сном',
    sectionDescription: 'Пока это placeholder для будущего текста.',
    callouts: ['Ритмы', 'Мелатонин', 'Качество', 'Комфорт'],
    items: ['Циркадные ритмы', 'Мелатонин', 'Качество сна', 'Спокойствие'],
    summaryTitle: 'Главное',
    summaryText: 'Итоговый текст будет подставлен позже.',
  },
  immunity: {
    title: 'Роль D3',
    subtitle: 'Шаблон состояния: иммунитет',
    visualTitle: 'Состояние Иммунитет',
    visualText: 'Контент иммунитета будет добавлен следующей командой.',
    sectionTitle: 'Иммунная роль D3',
    sectionDescription: 'Пока это placeholder для будущего текста.',
    callouts: ['Барьер', 'Клетки', 'Ответ', 'Защита'],
    items: ['Барьерная защита', 'Врожденный иммунитет', 'Адаптивный ответ', 'Профилактика'],
    summaryTitle: 'Главное',
    summaryText: 'Итоговый текст будет подставлен позже.',
  },
  muscles: {
    title: 'Роль D3',
    subtitle: 'Шаблон состояния: мышцы',
    visualTitle: 'Состояние Мышцы',
    visualText: 'Контент мышц будет добавлен следующей командой.',
    sectionTitle: 'Мышечная роль D3',
    sectionDescription: 'Пока это placeholder для будущего текста.',
    callouts: ['Тонус', 'Координация', 'Моторика', 'Активность'],
    items: ['Мышечный тонус', 'Координация', 'Моторное развитие', 'Физическая активность'],
    summaryTitle: 'Главное',
    summaryText: 'Итоговый текст будет подставлен позже.',
  },
}

const icons = {
  circle: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v8M8 12h8"></path></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.2 2.9 8.1 7 9 4.1-.9 7-4.8 7-9V6l-7-3Z"></path><path d="m9 12 2 2 4-5"></path></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3Z"></path></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg>',
  graph: '<svg viewBox="0 0 24 24"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="m7 15 4-4 3 3 5-7"></path><path d="M15 7h4v4"></path></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M20 14.5A7.5 7.5 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"></path><path d="M17 4h.01"></path><path d="M21 8h.01"></path></svg>',
  bone: '<svg viewBox="0 0 24 24"><path d="M7.5 3.5a3 3 0 0 1 4 4l5 5a3 3 0 1 1-2 2l-5-5a3 3 0 1 1-2-6Z"></path><path d="M6.3 6.3 17.7 17.7"></path></svg>',
}

let activeTab = 'bones'
let activeInfo = 'item-1'

function setIconContent() {
  ['calloutIcon1', 'calloutIcon2', 'calloutIcon3', 'calloutIcon4'].forEach((id, index) => {
    document.getElementById(id).innerHTML = [icons.bone, icons.moon, icons.graph, icons.heart][index]
  })
  ;['infoIcon1', 'infoIcon2', 'infoIcon3', 'infoIcon4'].forEach((id, index) => {
    document.getElementById(id).innerHTML = [icons.bone, icons.moon, icons.graph, icons.shield][index]
  })
  document.getElementById('visualNoteIcon').innerHTML = icons.shield
  document.getElementById('summaryIcon').innerHTML = icons.star
}

function renderTabContent(tabName) {
  const data = tabs[tabName] || tabs.bones
  activeTab = tabName

  document.getElementById('slideTitle').textContent = data.title
  document.getElementById('slideSubtitle').textContent = data.subtitle
  document.getElementById('visualTitle').textContent = data.visualTitle
  document.getElementById('visualText').textContent = data.visualText
  document.getElementById('sectionTitle').textContent = data.sectionTitle
  document.getElementById('sectionDescription').textContent = data.sectionDescription
  document.getElementById('visualNoteTitle').textContent = 'Подготовленный инфоблок'
  document.getElementById('visualNoteText').textContent = 'Этот блок готов для итогового текста внутри левой карточки.'
  document.getElementById('summaryTitle').textContent = data.summaryTitle
  document.getElementById('summaryText').textContent = data.summaryText

  data.callouts.forEach((label, index) => {
    document.getElementById('calloutLabel' + (index + 1)).textContent = label
  })

  data.items.forEach((title, index) => {
    document.getElementById('infoTitle' + (index + 1)).textContent = title
    document.getElementById('infoText' + (index + 1)).textContent = 'Краткое описание будет заменено финальным медицинским текстом.'
  })

  document.querySelectorAll('.tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === tabName)
  })

  setActiveInfo('item-1')
}

function setActiveInfo(id) {
  activeInfo = id
  document.querySelectorAll('.info-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.id === id)
  })
}

function setActiveDot(index) {
  document.querySelectorAll('.dot').forEach((dot) => {
    dot.classList.toggle('active', dot.dataset.slide === String(index))
  })
}

function bindEvents() {
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      console.log('tab clicked:', tab.dataset.tab)
      renderTabContent(tab.dataset.tab)
    })
  })

  document.querySelectorAll('.info-item').forEach((item) => {
    item.addEventListener('click', () => {
      console.log('info card clicked:', item.dataset.id)
      setActiveInfo(item.dataset.id)
    })
  })

  document.querySelectorAll('.callout').forEach((callout) => {
    callout.addEventListener('click', () => {
      console.log('callout clicked:', callout.dataset.target)
      setActiveInfo(callout.dataset.target)
    })
  })

  document.querySelectorAll('.nav-button').forEach((button) => {
    button.addEventListener('click', () => {
      console.log(button.dataset.action + ' clicked')
    })
  })

  document.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      console.log('dot clicked:', dot.dataset.slide)
      setActiveDot(dot.dataset.slide)
    })
  })
}

function scaleSlide() {
  const slide = document.querySelector('.slide')
  const scale = Math.min(window.innerWidth / 1024, window.innerHeight / 1366)
  slide.style.setProperty('--slide-scale', String(scale))
}

window.addEventListener('resize', scaleSlide)
window.addEventListener('DOMContentLoaded', () => {
  setIconContent()
  bindEvents()
  renderTabContent(activeTab)
  scaleSlide()
})
