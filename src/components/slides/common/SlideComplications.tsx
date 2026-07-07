import type { ReactNode } from 'react'

const NAVY = '#18324A'

/* ── Icons ─────────────────────────────────────────────── */

function BoneIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M18.5 20.5 35.5 37.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16.5 24c-3.2 1-6.6-.9-7.5-4.1-.8-3 .8-6.2 3.6-7.4-.2-3.1 1.9-5.9 5-6.8 3.3-1 6.7.9 7.7 4.2.5 1.8.1 3.6-.8 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39.5 32c3.2-1 6.6.9 7.5 4.1.8 3-.8 6.2-3.6 7.4.2 3.1-1.9 5.9-5 6.8-3.3 1-6.7-.9-7.7-4.2-.5-1.8-.1-3.6.8-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RibsIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 9v38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 16c-8 0-14 4.3-16.5 11M28 16c8 0 14 4.3 16.5 11M28 25c-7 0-12.4 3.7-14.6 9.2M28 25c7 0 12.4 3.7 14.6 9.2M28 34c-5.7 0-10.1 2.9-12 7M28 34c5.7 0 10.1 2.9 12 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 12h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BrainIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M21 43c-5.8 0-10.5-4.5-10.5-10.1 0-3.4 1.7-6.3 4.2-8.2-.4-1.1-.7-2.3-.7-3.6 0-4.7 3.8-8.6 8.6-8.6 1.4-3.7 5-6.4 9.2-6.4 5.4 0 9.8 4.4 9.8 9.8v.9c3.9 1.4 6.7 5.1 6.7 9.5 0 5.6-4.5 10.1-10.1 10.1H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 14v29M19 28h9M28 34h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon({ className = 'h-7 w-7', check = false }: { className?: string; check?: boolean }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {check && <path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  )
}

function MoonIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M38.8 39c-11.6 0-21-9.4-21-21 0-2.4.4-4.6 1.1-6.7C12 14.6 7.4 21.4 7.4 29.4 7.4 40 16 48.6 26.6 48.6c8 0 14.9-4.7 18.1-11.5-1.8 1.2-3.8 1.9-5.9 1.9Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M40 9v7M36.5 12.5h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function HeadIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M34 47v-7.5c5.2-2.3 8.8-7.5 8.8-13.6C42.8 17.6 36 11 27.6 11 19.6 11 13 17.3 13 25.2c0 4.6 2.2 8.7 5.6 11.4V47" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6 36.6h-3.2c-1.4 0-2.2-1.6-1.4-2.7l2.4-3.3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 24.5a3 3 0 0 1 6 0c0 2-3 2.5-3 4.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LegsIcon({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M21 9c-2.5 9.5-2.2 18.4 1 26.8l-7.5 8.7c-1.5 1.7-.3 4.5 2 4.5h7.8c1.5 0 2.8-.8 3.5-2.1l3.1-6.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 9c2.5 9.5 2.2 18.4-1 26.8l7.5 8.7c1.5 1.7.3 4.5-2 4.5h-7.8c-1.5 0-2.8-.8-3.5-2.1l-3.1-6.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Data ──────────────────────────────────────────────── */

interface RiskItem {
  title: string
  text: string
  icon: ReactNode
}

const riskZones: RiskItem[] = [
  {
    title: 'Рахит',
    text: 'Нарушение минерализации костной ткани.',
    icon: <BoneIcon className="h-7 w-7" />,
  },
  {
    title: 'Деформации скелета',
    text: 'Искривление костей, деформация грудной клетки и конечностей.',
    icon: <RibsIcon className="h-7 w-7" />,
  },
  {
    title: 'Задержка развития',
    text: 'Нарушение моторного и когнитивного развития.',
    icon: <BrainIcon className="h-7 w-7" />,
  },
  {
    title: 'Ослабление иммунитета',
    text: 'Повышенная восприимчивость к инфекциям.',
    icon: <ShieldIcon className="h-7 w-7" />,
  },
]

interface StageBlock {
  num: number
  title: string
  text: string
  icon: ReactNode
  accent: boolean
}

const stageBlocks: StageBlock[] = [
  {
    num: 1,
    title: 'Ранние симптомы',
    text: 'Потливость (особенно головы), беспокойство, нарушение сна, вздрагивания, облысение затылка.',
    icon: <MoonIcon className="h-8 w-8" />,
    accent: false,
  },
  {
    num: 2,
    title: 'Поздние / выраженные симптомы',
    text: 'Размягчение костей черепа, «чётки» на рёбрах, «браслеты» на запястьях, искривление ног (О- или Х-образные), «лягушачий» живот, задержка прорезывания зубов и развития.',
    icon: <HeadIcon className="h-8 w-8" />,
    accent: false,
  },
  {
    num: 3,
    title: 'Деформации скелета',
    text: 'Длительный дефицит может вызвать искривление ног, деформацию грудной клетки и нарушение осанки.',
    icon: <LegsIcon className="h-8 w-8" />,
    accent: false,
  },
  {
    num: 4,
    title: 'Профилактика дефицита — лучшая защита от осложнений',
    text: 'Своевременная профилактика и контроль уровня витамина D помогают поддерживать нормальное развитие и здоровье ребёнка.',
    icon: <ShieldIcon className="h-8 w-8" check />,
    accent: true,
  },
]

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideComplications() {

  return (
    <section className="relative h-full overflow-hidden px-[32px]" style={{ color: NAVY }}>
      <header className="absolute left-[32px] top-[34px]">
        <h1 className="font-display text-[40px] font-extrabold leading-[1.04] tracking-tight text-[#18324A]">
          Осложнения дефицита витамина D у детей
        </h1>
        <p className="mt-2 text-[19px] font-medium leading-none text-[#6D7A86]">
          От ранних признаков к осложнениям
        </p>
        <div className="mt-3 h-[4px] w-[160px] rounded-full bg-[#21A7A2]" />
      </header>

      {/* Left card */}
      <div className="absolute left-[32px] top-[168px] flex h-[898px] w-[452px] flex-col rounded-[26px] bg-white px-8 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[27px] font-bold leading-tight text-[#18324A]">
          Классическое осложнение — <span className="text-[#21A7A2]">рахит</span>
        </h2>

        <div className="relative mt-4 h-[212px] w-full overflow-hidden rounded-[20px] bg-[#F2F7F6]">
          <img
            src="/assets/characters/baby-audience.webp"
            alt="Спокойный малыш в светлой домашней обстановке"
            className="h-full w-full object-cover object-[50%_28%]"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        <p className="mt-4 text-[17.5px] font-medium leading-[1.4] text-[#54616C]">
          <span className="font-bold text-[#18324A]">Рахит</span> — нарушение минерального обмена
          у детей 2–3 месяцев – 3 лет, ведущее к размягчению и деформации костей из-за дефицита
          витамина D, кальция и фосфора.
        </p>

        <div className="mt-4 flex min-h-0 flex-1 flex-col rounded-[20px] bg-[#EAF8F7] p-5">
          <h3 className="text-[21px] font-bold leading-tight text-[#0E8F8B]">Ключевые зоны риска</h3>
          <ul className="mt-3 flex flex-1 flex-col justify-between gap-2.5">
            {riskZones.map((item) => (
              <li key={item.title} className="flex items-start gap-3.5">
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2] shadow-[0_4px_12px_rgba(33,167,162,0.16)]">
                  {item.icon}
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-[18.5px] font-bold leading-tight text-[#18324A]">{item.title}</p>
                  <p className="mt-0.5 text-[15px] font-medium leading-[1.3] text-[#6D7A86]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right card */}
      <div className="absolute right-[32px] top-[168px] flex h-[898px] w-[476px] flex-col rounded-[26px] bg-white px-8 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[25px] font-bold leading-[1.22] text-[#18324A]">
          Что может произойти при длительном дефиците витамина D у ребёнка
        </h2>

        <div className="mt-4 flex min-h-0 flex-1 flex-col justify-between">
          {stageBlocks.map((block) => (
            <article
              key={block.num}
              className={`flex items-start gap-4 rounded-[18px] border px-5 py-3.5 ${
                block.accent
                  ? 'border-[#21A7A2] bg-[#EAF8F7]'
                  : 'border-[#EAEEF1] bg-white shadow-[0_6px_16px_rgba(24,50,74,0.05)]'
              }`}
            >
              <div
                className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full border ${
                  block.accent
                    ? 'border-[#21A7A2] bg-white text-[#21A7A2]'
                    : 'border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]'
                }`}
              >
                {block.icon}
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-[20px] font-bold leading-[1.16] text-[#18324A]">
                  <span className="text-[#21A7A2]">{block.num}.</span> {block.title}
                </h3>
                <p className="mt-1 text-[15.5px] font-medium leading-[1.34] text-[#6D7A86]">
                  {block.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="absolute bottom-[14px] left-[32px] text-[13px] font-medium leading-none text-[#9AA5AF]">
        Источник: cito-priory.ru / материалы по рахиту и остеомаляции
      </p>

    </section>
  )
}
