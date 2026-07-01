import type { ReactNode } from 'react'

const NAVY = '#18324A'
const TEAL = '#159A9C'
const DIVIDER = '#E4E8EB'

interface FeatureItem {
  title: string
  text: string
  icon: ReactNode
}

function BoneIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden>
      <path d="M15.5 17.5 30.5 32.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M13.6 20.5c-2.7.8-5.5-.8-6.3-3.5-.7-2.5.6-5.1 3-6.1-.2-2.6 1.5-5 4.1-5.7 2.8-.8 5.6.8 6.4 3.5.4 1.5.1 3-.6 4.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34.4 27.5c2.7-.8 5.5.8 6.3 3.5.7 2.5-.6 5.1-3 6.1.2 2.6-1.5 5-4.1 5.7-2.8.8-5.6-.8-6.4-3.5-.4-1.5-.1-3 .6-4.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden>
      <path d="M24 5.5 38 11v10.5c0 9.1-5.6 17.2-14 20.8-8.4-3.6-14-11.7-14-20.8V11l14-5.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M18 24.2 22.1 28 31 18.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden>
      <path d="M33.5 33.6c-10.2 0-18.4-8.2-18.4-18.4 0-2.1.4-4.1 1-5.9C10.1 12.2 6 18.2 6 25.2 6 34.5 13.5 42 22.8 42c7 0 13-4.2 15.8-10.2-1.6 1.1-3.3 1.8-5.1 1.8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M34 8v8M30 12h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden>
      <path d="M9 39h31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 34V22M24 34V14M36 34V9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 10h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 24c6.4-.5 13.2-4 23-14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden>
      <path d="M18 39c-5 0-9-4-9-9 0-3 1.5-5.8 3.8-7.4-.4-1-.6-2-.6-3.1 0-4.1 3.3-7.5 7.5-7.5 1.2-3.2 4.3-5.5 7.9-5.5 4.6 0 8.4 3.8 8.4 8.4v.8c3.4 1.2 5.8 4.4 5.8 8.2 0 4.8-3.9 8.7-8.7 8.7H31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 13v29M17 24h7M24 29h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden>
      <path d="M24 14v13" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 34h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function IconCircle({ children, size = 64 }: { children: ReactNode; size?: 64 | 70 }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border text-[#159A9C]"
      style={{ width: size, height: size, borderColor: TEAL }}
    >
      {children}
    </div>
  )
}

const featureItems: FeatureItem[] = [
  {
    title: 'Кости и зубы',
    text: 'Минерализация костей и формирование здоровых зубов',
    icon: <BoneIcon />,
  },
  {
    title: 'Иммунитет',
    text: 'Поддержка врожденного иммунитета, снижение риска инфекций',
    icon: <ShieldIcon />,
  },
  {
    title: 'Сон и развитие',
    text: 'Участие в регуляции сна и нервно-психическом развитии',
    icon: <MoonIcon />,
  },
  {
    title: 'Рост и развитие',
    text: 'Важен для нормального роста и общего развития ребенка',
    icon: <GrowthIcon />,
  },
]

const importanceItems: FeatureItem[] = [
  {
    title: 'Минерализация костей и зубов',
    text: 'D3 способствует усвоению кальция и фосфора, необходимых для формирования крепкой костной ткани и зубов.',
    icon: <BoneIcon />,
  },
  {
    title: 'Иммунная защита',
    text: 'D3 помогает формированию врожденного иммунитета и снижает риск инфекционных заболеваний.',
    icon: <ShieldIcon />,
  },
  {
    title: 'Нервно-психическое развитие',
    text: 'Участвует в развитии мозга, улучшает адаптацию и поддерживает когнитивные функции.',
    icon: <BrainIcon />,
  },
  {
    title: 'Качество сна и настроение',
    text: 'Способствует регуляции сна и поддерживает эмоциональный комфорт малыша.',
    icon: <MoonIcon />,
  },
  {
    title: 'Рост и гармоничное развитие',
    text: 'Необходим для нормального роста, обмена веществ и общего развития.',
    icon: <GrowthIcon />,
  },
]

export default function Slide01Audience() {
  return (
    <section className="relative h-full overflow-hidden px-[35px] pt-0" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[38px] font-bold leading-[1.08] tracking-normal text-[#18324A]">
          Аудитория и потребность
        </h1>
        <p className="mt-2 text-[18px] font-medium leading-none text-[#6D7A86]">
          Пациент: младенец 0–12 месяцев
        </p>
      </header>

      <div className="absolute left-[35px] top-[104px] h-[1018px] w-[430px] rounded-[20px] bg-white px-7 py-[30px] shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-center text-[24px] font-bold leading-tight text-[#159A9C]">
          Кто наш пациент?
        </h2>
        <p className="mt-3 text-center text-[25px] font-bold leading-tight text-[#18324A]">
          Младенец 0–12 месяцев
        </p>

        <div className="mt-5 h-[310px] w-full overflow-hidden rounded-[14px] bg-[#F7F3ED]">
          <img
            src="/assets/characters/baby-audience.png"
            alt="Младенец"
            className="h-full w-full object-cover object-[50%_34%]"
            draggable={false}
          />
        </div>

        <h3 className="mt-6 text-[23px] font-bold leading-tight text-[#159A9C]">
          Потребность в витамине D3
        </h3>
        <p className="mt-2 text-[16px] font-semibold leading-[1.28] text-[#18324A]">
          Период интенсивного роста и формирования ключевых систем организма
        </p>

        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">
          {featureItems.map((item) => (
            <article key={item.title} className="min-h-[138px]">
              <IconCircle>{item.icon}</IconCircle>
              <h4 className="mt-2 text-[16px] font-bold leading-tight text-[#18324A]">
                {item.title}
              </h4>
              <p className="mt-1 text-[12px] font-medium leading-[1.25] text-[#6D7A86]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-[14px] bg-[#EAF8F7] p-[18px]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#159A9C]">
            <AlertIcon />
          </div>
          <p className="text-[15px] font-semibold leading-[1.32] text-[#18324A]">
            Младенцы полностью зависят от поступления витамина D3 извне — с пищей и добавками.
          </p>
        </div>
      </div>

      <div className="absolute right-[35px] top-[104px] h-[1018px] w-[460px] rounded-[20px] bg-white px-7 py-[30px] shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[31px] font-bold leading-[1.12] text-[#18324A]">
          Почему витамин D3 важен
          <br />
          <span className="text-[#159A9C]">для младенца?</span>
        </h2>

        <div className="mt-8">
          {importanceItems.map((item, index) => (
            <article
              key={item.title}
              className="flex gap-4 py-[17px] first:pt-0"
              style={{ borderTop: index === 0 ? '0' : `1px solid ${DIVIDER}` }}
            >
              <IconCircle size={70}>{item.icon}</IconCircle>
              <div className="pt-1">
                <h3 className="text-[18px] font-bold leading-[1.18] text-[#18324A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.32] text-[#6D7A86]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex gap-4 rounded-[16px] bg-[#EAF8F7] p-6">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-white text-[#159A9C]">
            <ShieldIcon />
          </div>
          <div>
            <p className="text-[19px] font-bold leading-tight text-[#159A9C]">Рекомендация:</p>
            <p className="mt-2 text-[19px] font-bold leading-[1.22] text-[#18324A]">
              Профилактический приём витамина D3 с первых дней жизни!
            </p>
            <p className="mt-2 text-[14px] font-medium leading-[1.35] text-[#6D7A86]">
              Суточная потребность 400–1000 МЕ в зависимости от возраста и рекомендаций педиатра.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/35 backdrop-blur-[1px]" />
    </section>
  )
}
