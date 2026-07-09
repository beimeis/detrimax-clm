import { useState, type ReactNode } from 'react'

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

/* ── Summary illustration ──────────────────────────────── */

function D3Shield({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 66" className={className} aria-hidden>
      <path d="M32 4 56 12.5V29c0 14.4-9 27.3-24 32C17 56.3 8 43.4 8 29V12.5L32 4Z" fill="#21A7A2" />
      <path d="M32 4 56 12.5V29c0 14.4-9 27.3-24 32C17 56.3 8 43.4 8 29V12.5L32 4Z" fill="none" stroke="#0E8F8B" strokeWidth="2" />
      <text x="32" y="40" textAnchor="middle" fontSize="21" fontWeight="800" fill="#ffffff" fontFamily="Montserrat, Inter, sans-serif">D3</text>
    </svg>
  )
}

/* ── Chevron ───────────────────────────────────────────── */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Mini-infographics ─────────────────────────────────── */

function TrimesterViz() {
  return (
    <div className="flex items-end gap-2.5">
      {[
        { t: 'I', h: 'h-7', active: false },
        { t: 'II', h: 'h-10', active: false },
        { t: 'III', h: 'h-[68px]', active: true },
      ].map((b) => (
        <div key={b.t} className="flex flex-col items-center gap-1.5">
          <div className={`w-11 rounded-lg ${b.h} ${b.active ? 'bg-[#21A7A2]' : 'bg-[#DDF3F0]'}`} />
          <span className={`text-[13px] font-bold ${b.active ? 'text-[#0E8F8B]' : 'text-[#9AA5AF]'}`}>{b.t}</span>
        </div>
      ))}
    </div>
  )
}

function GapBarsViz() {
  return (
    <div className="w-full space-y-3">
      <div>
        <div className="flex items-center justify-between text-[15px] font-bold">
          <span className="text-[#33475A]">В грудном молоке</span>
          <span className="text-[#0E8F8B]">10–80 МЕ/л</span>
        </div>
        <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-[#DDF3F0]">
          <div className="h-full w-[10%] rounded-full bg-[#21A7A2]" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between text-[15px] font-bold">
          <span className="text-[#33475A]">Потребность младенца</span>
          <span className="text-[#0E8F8B]">400–1000 МЕ/сут</span>
        </div>
        <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-[#DDF3F0]">
          <div className="h-full w-[92%] rounded-full bg-[#21A7A2]" />
        </div>
      </div>
    </div>
  )
}

function ZeroSynthViz() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[13px] font-bold">
        <span className="text-[#6D7A86]">Синтез витамина D через кожу</span>
        <span className="text-[#0E8F8B]">≈ 0 МЕ</span>
      </div>
      <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-[#DDF3F0]">
        <div className="h-full w-[3%] rounded-full bg-[#21A7A2]" />
      </div>
    </div>
  )
}

function GrowthViz() {
  return (
    <div className="flex items-end gap-2.5">
      {['h-6', 'h-9', 'h-12', 'h-[64px]'].map((h, i) => (
        <div key={i} className={`w-9 rounded-lg bg-[#21A7A2] ${h}`} style={{ opacity: 0.55 + i * 0.15 }} />
      ))}
    </div>
  )
}

/* ── Data ──────────────────────────────────────────────── */

interface CauseCard {
  num: number
  title: string
  accent: string
  text: string
  icon: ReactNode
  stat: string
  statCaption: string
  viz: ReactNode
}

const causes: CauseCard[] = [
  {
    num: 1,
    title: 'Дефицит у матери во время беременности',
    accent: 'Трансплацентарный перенос',
    text: 'Плод получает основной запас витамина D только в третьем триместре. Если у матери был дефицит, ребёнок рождается с критически низким уровнем, который невозможно быстро восполнить.',
    icon: <PregnantIcon />,
    stat: 'III',
    statCaption: 'триместр — основной перенос витамина D к плоду',
    viz: <TrimesterViz />,
  },
  {
    num: 2,
    title: '«Парадокс» грудного молока',
    accent: 'Естественный дефицит',
    text: 'Грудное молоко — идеальное питание, но в нём крайне мало витамина D (10–80 МЕ/л при потребности младенца 400–1000 МЕ/сут). Грудное вскармливание без дополнительного приёма D3 повышает риск дефицита.',
    icon: <BottleDropIcon />,
    stat: '5–100×',
    statCaption: 'разрыв между поступлением с молоком и потребностью',
    viz: <GapBarsViz />,
  },
  {
    num: 3,
    title: 'Отсутствие синтеза через кожу',
    accent: 'Защита от солнца',
    text: 'Тонкая кожа младенца беззащитна перед прямым ультрафиолетом. Новорождённым не рекомендуется находиться под прямыми лучами солнца, а одежда и тень почти полностью блокируют выработку витамина D3.',
    icon: <SunShieldIcon />,
    stat: '≈ 0',
    statCaption: 'выработки D3 через кожу — прямое солнце младенцам не рекомендовано',
    viz: <ZeroSynthViz />,
  },
  {
    num: 4,
    title: 'Высокая скорость роста',
    accent: 'Пиковое потребление',
    text: 'В первый год жизни ребёнок быстро растёт, активно формирует скелет и зубы. Расход витамина D3 на «строительство» костей и зубов часто превышает поступление, быстро истощая начальные запасы.',
    icon: <GrowthBoneIcon />,
    stat: '×3',
    statCaption: 'рост массы тела за 1-й год — пиковый расход D3 на скелет',
    viz: <GrowthViz />,
  },
]

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideDeficitCauses() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const anyOpen = openIndex >= 0

  return (
    <section className="relative h-full overflow-hidden px-[40px] pb-[10px] pt-[16px]" style={{ color: NAVY }}>
      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[28px] bg-white px-9 py-7 shadow-[0_16px_44px_rgba(24,50,74,0.10)]">
        {/* Hero banner (top quarter): full-width photo, title overlaid on the light left */}
        <div className="relative -mx-9 -mt-7 h-[300px] shrink-0 overflow-hidden bg-[#F1EADD]">
          <img
            src="/assets/characters/baby-hero.webp"
            alt="Спокойный младенец на светлом покрывале"
            className="h-full w-full object-cover object-[50%_38%]"
            draggable={false}
          />
          {/* Left light scrim — keeps the title readable over the bedding */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.62)_30%,rgba(255,255,255,0)_58%)]" />
          {/* Bottom fade — smooth transition into the cards area */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,#ffffff_0%,rgba(255,255,255,0)_100%)]" />
          {/* Title overlaid on the free left area */}
          <div className="absolute inset-y-0 left-0 flex w-[60%] flex-col justify-center pl-9 pr-3">
            <h1 className="font-display text-[39px] font-extrabold leading-[1.07] tracking-tight text-[#18324A]">
              Почему возникает дефицит витамина D3 у новорождённых?
            </h1>
            <p className="mt-3 text-[21px] font-semibold leading-[1.15] text-[#5B6B78]">
              4 главных фактора «пустого депо» у младенца
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="mt-6 flex min-h-0 flex-1 flex-col gap-3">
          {causes.map((card, i) => {
            const open = openIndex === i
            return (
              <article
                key={card.num}
                className={`flex min-h-0 flex-col overflow-hidden rounded-[20px] transition-[border-color,background-color,box-shadow] duration-300 ${
                  open
                    ? 'flex-1 border-2 border-[#21A7A2] bg-white shadow-[0_16px_36px_rgba(33,167,162,0.22)]'
                    : anyOpen
                      ? 'shrink-0 border border-white/40 bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] shadow-[0_9px_22px_rgba(24,50,74,0.16)]'
                      : 'flex-1 border border-white/40 bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] shadow-[0_9px_22px_rgba(24,50,74,0.16)]'
                }`}
              >
                {/* Header row (toggle) */}
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className={`flex w-full items-center gap-4 px-6 py-[13px] text-left ${!anyOpen ? 'flex-1' : ''}`}
                >
                  <div className="relative shrink-0">
                    <div
                      className={`flex h-[54px] w-[54px] items-center justify-center rounded-full border text-[#21A7A2] ${
                        open ? 'border-[#CBEBE8] bg-[#EAF8F7]' : 'border-white/70 bg-white'
                      }`}
                    >
                      {card.icon}
                    </div>
                    <span
                      className={`absolute -left-1 -top-1 flex h-[25px] w-[25px] items-center justify-center rounded-full text-[13px] font-bold shadow-[0_4px_10px_rgba(24,50,74,0.28)] ${
                        open
                          ? 'bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white'
                          : 'bg-white text-[#0E8F8B]'
                      }`}
                    >
                      {card.num}
                    </span>
                  </div>
                  <h3
                    className={`min-w-0 flex-1 text-[26px] font-extrabold leading-[1.1] ${
                      open ? 'text-[#18324A]' : 'text-white'
                    }`}
                  >
                    {card.title}
                  </h3>
                  <span
                    className={`flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      open ? 'bg-[#21A7A2] text-white' : 'bg-white/25 text-white'
                    }`}
                  >
                    <Chevron open={open} />
                  </span>
                </button>

                {/* Expandable body */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'min-h-0 flex-1' : 'shrink-0'}`}
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="h-full overflow-hidden">
                    <div className="flex h-full items-stretch gap-6 px-6 pb-6 pt-1">
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <p className="text-[22px] font-extrabold leading-tight text-[#21A7A2]">{card.accent}</p>
                        <p className="mt-2.5 text-[21px] font-semibold leading-[1.4] text-[#22384B]">{card.text}</p>
                      </div>
                      <div className="flex w-[340px] shrink-0 flex-col justify-center gap-3.5 rounded-[16px] border border-[#CBEBE8] bg-[#DDF3F0] px-5 py-5">
                        <div className="flex items-center gap-3.5">
                          <span className="shrink-0 text-[44px] font-extrabold leading-none text-[#0E8F8B]">{card.stat}</span>
                          <p className="text-[15.5px] font-bold leading-[1.28] text-[#22384B]">{card.statCaption}</p>
                        </div>
                        <div className="flex items-end justify-center">{card.viz}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Summary */}
        <div className="mt-5 flex items-center gap-5 rounded-[22px] border border-[#CBEBE8] bg-[#EAF8F7] px-7 py-5">
          <D3Shield className="h-[60px] w-[60px] shrink-0" />
          <p className="flex-1 text-[22px] font-medium leading-[1.26] text-[#18324A]">
            <span className="text-[25px] font-extrabold text-[#0E8F8B]">Итог:</span> у младенца мало
            источников витамина D3, а потребность в нём очень высокая.
          </p>
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
