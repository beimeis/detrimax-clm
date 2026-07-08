import type { ReactNode } from 'react'

const NAVY = '#18324A'

/* ── Card icons ────────────────────────────────────────── */

function PregnantIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="25" cy="11" r="5" stroke="currentColor" strokeWidth="3" />
      <path d="M23 16.5c-3.4.6-5.8 3.5-5.8 7.2V46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 16.5c5.4 0 9.6 3.8 9.6 9.4 0 5.2-3.8 8.8-9.6 9.6V46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30.6 25.9c-1-1.3-3.2-1-3.5.7-.3-1.7-2.5-2-3.5-.7-1.1 1.4-.2 3.3 3.5 5.4 3.7-2.1 4.6-4 3.5-5.4Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  )
}

function BottleDropIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M17 8c0 5.5-5 7.6-5 12.4a5 5 0 0 0 10 0C22 15.6 17 13.5 17 8Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <rect x="29" y="21" width="16" height="26" rx="4.5" stroke="currentColor" strokeWidth="2.8" />
      <path d="M32.5 21v-3.2a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5V21" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M29 30h16M35 27v6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function SunShieldIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="27" cy="17" r="7" stroke="currentColor" strokeWidth="2.8" />
      <path d="M27 4v3.5M27 26.5V30M14 17h3.5M36.5 17H40M18 8l2.5 2.5M36 8l-2.5 2.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M28 32.5 40 36v5c0 6.2-3.8 11.8-12 14.2C19.8 52.8 16 47.2 16 41v-5l12-3.5Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
    </svg>
  )
}

function GrowthBoneIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M10 45h26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 45V33M23 45V26M31 45V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 30c8-.6 16-6 24-18" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M33 12h6v6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 40.5l6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M39.2 41.6a2.6 2.6 0 1 1-3-3M46.8 45.4a2.6 2.6 0 1 1-3-3" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Summary illustrations ─────────────────────────────── */

function D3Shield({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 66" className={className} aria-hidden>
      <path d="M32 4 56 12.5V29c0 14.4-9 27.3-24 32C17 56.3 8 43.4 8 29V12.5L32 4Z" fill="#21A7A2" />
      <path d="M32 4 56 12.5V29c0 14.4-9 27.3-24 32C17 56.3 8 43.4 8 29V12.5L32 4Z" fill="none" stroke="#0E8F8B" strokeWidth="2" />
      <text x="32" y="40" textAnchor="middle" fontSize="21" fontWeight="800" fill="#ffffff" fontFamily="Montserrat, Inter, sans-serif">D3</text>
    </svg>
  )
}

function SleepingBabyCloud({ className = 'h-[74px] w-[150px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 74" className={className} fill="none" aria-hidden>
      <path d="M118 20l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6L118 20Z" fill="#7FCFCA" />
      <path d="M132 34l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1L132 34Z" fill="#A9DFDC" />
      <path d="M104 10l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9L104 10Z" fill="#A9DFDC" />
      <path d="M38 58c-9 0-16-5.6-16-13.4 0-6.8 5.4-12 12.4-12 1.8-6 7.3-10.2 13.8-10.2 7 0 12.9 4.8 14.4 11.3 6.7.2 11.9 4.9 11.9 11.2 0 7-6.2 13.1-14.2 13.1H38Z" stroke="#21A7A2" strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="55" cy="40" r="7.5" stroke="#21A7A2" strokeWidth="2.4" />
      <path d="M52.5 40c1.6 1.4 3.4 1.4 5 0" stroke="#21A7A2" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M48 46.5c-6 .6-10 2.4-12.5 5.5M62.5 46.5c4.3.8 7.4 2.4 9.5 5" stroke="#21A7A2" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

/* ── Data ──────────────────────────────────────────────── */

interface CauseCard {
  num: number
  title: string
  accent: string
  text: string
  icon: ReactNode
}

const causes: CauseCard[] = [
  {
    num: 1,
    title: 'Дефицит у матери во время беременности',
    accent: 'Трансплацентарный перенос:',
    text: 'Плод получает основной запас витамина D только в третьем триместре. Если у матери был дефицит, ребёнок рождается с критически низким уровнем, который невозможно быстро восполнить.',
    icon: <PregnantIcon />,
  },
  {
    num: 2,
    title: '«Парадокс» грудного молока',
    accent: 'Естественный дефицит:',
    text: 'Грудное молоко — идеальное питание, но в нём крайне мало витамина D (10–80 МЕ/л при потребности младенца 400–1000 МЕ/сут). Грудное вскармливание без дополнительного приёма D3 повышает риск дефицита.',
    icon: <BottleDropIcon />,
  },
  {
    num: 3,
    title: 'Отсутствие синтеза через кожу',
    accent: 'Защита от солнца:',
    text: 'Тонкая кожа младенца беззащитна перед прямым ультрафиолетом. Новорождённым не рекомендуется находиться под прямыми лучами солнца, а одежда и тень почти полностью блокируют выработку витамина D3.',
    icon: <SunShieldIcon />,
  },
  {
    num: 4,
    title: 'Высокая скорость роста',
    accent: 'Пиковое потребление:',
    text: 'В первый год жизни ребёнок быстро растёт, активно формирует скелет и зубы. Расход витамина D3 на «строительство» костей и зубов часто превышает поступление, быстро истощая начальные запасы.',
    icon: <GrowthBoneIcon />,
  },
]

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideDeficitCauses() {

  return (
    <section className="relative h-full overflow-hidden px-[40px] pb-[10px] pt-[16px]" style={{ color: NAVY }}>
      <div className="relative z-10 flex h-full flex-col rounded-[28px] bg-white px-9 py-7 shadow-[0_16px_44px_rgba(24,50,74,0.10)]">
        {/* Top: header + photo */}
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0 pt-1">
            <h1 className="font-display text-[35px] font-extrabold leading-[1.08] tracking-tight text-[#18324A]">
              Почему возникает дефицит<br />витамина D3 у новорождённых?
            </h1>
            <p className="mt-2 text-[19px] font-medium leading-none text-[#6D7A86]">
              4 главных фактора «пустого депо» у младенца
            </p>
          </div>

          <div className="h-[176px] w-[286px] shrink-0 overflow-hidden rounded-[20px] bg-[#F2F7F6] shadow-[0_10px_24px_rgba(24,50,74,0.10)]">
            <img
              src="/assets/characters/baby-sleep.webp"
              alt="Спокойный младенец на светлом покрывале"
              className="h-full w-full object-cover object-[50%_32%]"
              draggable={false}
            />
          </div>
        </div>

        {/* 2×2 factor grid */}
        <div className="mt-6 grid flex-1 grid-cols-2 grid-rows-2 gap-6">
          {causes.map((card) => (
            <article
              key={card.num}
              className="relative flex gap-4 rounded-[20px] border border-[#EAEEF1] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(24,50,74,0.06)]"
            >
              <span className="absolute -left-2.5 -top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-[16px] font-bold text-white shadow-[0_6px_14px_rgba(33,167,162,0.32)]">
                {card.num}
              </span>
              <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[18px] border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]">
                {card.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[21px] font-bold leading-[1.14] text-[#18324A]">{card.title}</h3>
                <p className="mt-2 text-[17px] font-bold leading-tight text-[#21A7A2]">{card.accent}</p>
                <p className="mt-1.5 text-[16.5px] font-medium leading-[1.32] text-[#6D7A86]">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 flex items-center gap-5 rounded-[22px] bg-[#EAF8F7] px-7 py-5">
          <D3Shield className="h-[64px] w-[64px] shrink-0" />
          <p className="flex-1 text-[22px] font-medium leading-[1.26] text-[#18324A]">
            <span className="text-[25px] font-extrabold text-[#0E8F8B]">Итог:</span> у младенца мало
            источников витамина D3, а потребность в нём очень высокая.
          </p>
          <SleepingBabyCloud className="h-[74px] w-[150px] shrink-0" />
        </div>

        {/* Source */}
        <p className="mt-3 text-[12px] font-medium leading-none text-[#9AA5AF]">
          Источник:{' '}
          <span className="text-[#21A7A2]">
            https://www.jognn.org/article/S0884-2175(16)30357-4/fulltext
          </span>
        </p>
      </div>
    </section>
  )
}
