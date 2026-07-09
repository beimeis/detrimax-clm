import { useState } from 'react'
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
  points: string[]
  icon: ReactNode
}

const riskZones: RiskItem[] = [
  {
    title: 'Рахит',
    text: 'Нарушение минерализации кости.',
    points: [
      'Нарушение минерализации костной ткани.',
      'Может приводить к деформациям и задержке моторного развития.',
      'Профилактика связана с адекватным уровнем витамина D.',
    ],
    icon: <BoneIcon className="h-9 w-9" />,
  },
  {
    title: 'Деформации скелета',
    text: 'Искривление костей и грудной клетки.',
    points: [
      'Искривление костей ног (О- или Х-образное).',
      'Деформация грудной клетки и нарушение осанки.',
      'Раннее выявление и профилактика снижают риск.',
    ],
    icon: <RibsIcon className="h-9 w-9" />,
  },
  {
    title: 'Задержка развития',
    text: 'Задержка моторики и когниции.',
    points: [
      'Замедление моторного развития: позже садится, ползает, ходит.',
      'Влияние на когнитивные функции и внимание.',
      'Адекватный уровень D3 поддерживает нервную систему.',
    ],
    icon: <BrainIcon className="h-9 w-9" />,
  },
  {
    title: 'Ослабление иммунитета',
    text: 'Частые инфекции.',
    points: [
      'Повышенная восприимчивость к инфекциям, частые ОРВИ.',
      'Витамин D участвует в работе иммунной защиты.',
      'Профилактический приём поддерживает иммунитет.',
    ],
    icon: <ShieldIcon className="h-9 w-9" />,
  },
]

interface StageBlock {
  num: number
  title: string
  text: string
  detail: string
  icon: ReactNode
  accent: boolean
}

const stageBlocks: StageBlock[] = [
  {
    num: 1,
    title: 'Ранние симптомы',
    text: 'Потливость головы, беспокойство, плохой сон, облысение затылка.',
    detail:
      'Первые признаки появляются уже в 2–3 месяца. Малыш становится беспокойным, хуже спит и вздрагивает во сне. Характерна повышенная потливость — особенно головы во время кормления и сна. Из-за того что ребёнок трёт голову о подушку, появляется облысение затылка, а мышечный тонус снижается.',
    icon: <MoonIcon className="h-8 w-8" />,
    accent: false,
  },
  {
    num: 2,
    title: 'Поздние / выраженные симптомы',
    text: 'Размягчение черепа, «чётки» на рёбрах, искривление ног, «лягушачий» живот.',
    detail:
      'При прогрессировании развиваются костные изменения: размягчение краёв родничка и костей черепа, утолщения на рёбрах («рахитические чётки») и запястьях («браслеты»). Ноги искривляются О- или Х-образно, из-за слабости мышц формируется «лягушачий» живот. Задерживаются прорезывание зубов и моторное развитие.',
    icon: <HeadIcon className="h-8 w-8" />,
    accent: false,
  },
  {
    num: 3,
    title: 'Деформации скелета',
    text: 'Искривление ног, деформация грудной клетки, нарушение осанки.',
    detail:
      'Длительный некорректированный дефицит приводит к стойким деформациям скелета, которые могут сохраниться на всю жизнь: искривление ног, деформация грудной клетки, нарушение осанки и формы таза. В старшем возрасте такие изменения тяжело поддаются коррекции.',
    icon: <LegsIcon className="h-8 w-8" />,
    accent: false,
  },
  {
    num: 4,
    title: 'Профилактика — лучшая защита',
    text: 'Своевременный контроль витамина D — залог здоровья ребёнка.',
    detail:
      'Рахит и его осложнения предотвратимы. Ключ — своевременная профилактика витамином D₃ с первых дней жизни и контроль уровня 25(OH)D. Регулярный приём в профилактической дозе поддерживает минерализацию костей, развитие и иммунитет. Профилактика всегда проще и безопаснее лечения сформировавшихся деформаций.',
    icon: <ShieldIcon className="h-8 w-8" check />,
    accent: true,
  },
]

/* ── Decorative helpers ────────────────────────────────── */

function Spark({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 1.5l1.9 6.6 6.6 1.9-6.6 1.9L12 22.5l-1.9-6.6L3.5 14l6.6-1.9L12 1.5Z" />
    </svg>
  )
}

function ChevronRight({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseX({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M5 12.5l4.2 4L19 6.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideComplications() {
  const [active, setActive] = useState<StageBlock | null>(null)
  const [activeRisk, setActiveRisk] = useState<RiskItem | null>(null)

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
      <div className="absolute left-[20px] top-[150px] flex h-[956px] w-[484px] flex-col rounded-[26px] border border-[#E7EEF0] bg-white px-7 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[32px] font-bold leading-[1.1] text-[#18324A]">
          Классическое осложнение — <span className="underline decoration-[#21A7A2]/50 underline-offset-4">рахит</span>
        </h2>

        <div className="relative mt-4 h-[224px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#F2F7F6]">
          <img
            src="/assets/characters/complications-rickets.gif"
            alt="Осложнения дефицита витамина D — иллюстрация"
            className="h-full w-full object-contain object-center"
            draggable={false}
          />
        </div>

        {/* 2×2 clickable risk cards */}
        <div className="mt-4 grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-3.5">
          {riskZones.map((zone) => (
            <button
              key={zone.title}
              type="button"
              onClick={() => setActiveRisk(zone)}
              className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-[22px] border border-white/40 bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] px-3 py-3 text-center shadow-[0_12px_28px_rgba(20,143,139,0.30)] transition duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[44%] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0))]" />
              <span className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/95 text-[#0E8F8B] [&>svg]:h-[32px] [&>svg]:w-[32px]">
                {zone.icon}
              </span>
              <p className="relative text-[21px] font-bold leading-[1.1] text-white">{zone.title}</p>
              <p className="relative px-1 text-[15px] font-medium leading-[1.24] text-white/85">{zone.text}</p>
              <span className="absolute bottom-3 right-3 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/22 text-white transition group-hover:bg-white group-hover:text-[#0E8F8B]">
                <ChevronRight className="h-[18px] w-[18px]" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right card */}
      <div className="absolute right-[20px] top-[150px] flex h-[956px] w-[484px] flex-col rounded-[26px] border border-white/25 bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] px-7 py-6 shadow-[0_16px_40px_rgba(24,50,74,0.20)]">
        <h2 className="text-center text-[33px] font-extrabold leading-[1.16] text-white">
          Что может произойти при длительном дефиците витамина D у ребёнка
        </h2>

        <div className="mt-7 flex min-h-0 flex-1 flex-col justify-center gap-4">
          {stageBlocks.map((block) => (
            <button
              key={block.num}
              type="button"
              onClick={() => setActive(block)}
              className="group flex w-full items-center gap-4 rounded-[20px] border border-[#EAEEF1] bg-white px-5 py-5 text-left shadow-[0_6px_16px_rgba(24,50,74,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(24,50,74,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]">
                {block.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[26px] font-bold leading-[1.16] text-[#18324A]">
                  <span className="text-[#21A7A2]">{block.num}.</span> {block.title}
                </h3>
              </div>
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2] transition group-hover:bg-[#21A7A2] group-hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="absolute bottom-[14px] left-[32px] text-[13px] font-medium leading-none text-[#9AA5AF]">
        Источник: cito-priory.ru / материалы по рахиту и остеомаляции
      </p>

      {/* Detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-10"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-[#0E2A3B]/45 backdrop-blur-[3px]"
            onClick={() => setActive(null)}
          />

          <div className="relative w-[720px] max-w-full overflow-hidden rounded-[30px] bg-[linear-gradient(160deg,#FFFFFF_0%,#F2FBFA_55%,#E7F6F4_100%)] shadow-[0_44px_96px_rgba(14,42,59,0.42)] ring-1 ring-[#CBEBE8]">
            {/* top accent bar (theme-aware: teal in active, orange in baby) */}
            <div className="h-[9px] w-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)]" />

            {/* corner ornaments */}
            <Spark className="pointer-events-none absolute left-6 top-[38px] h-6 w-6 text-[#8FD6D1] opacity-70" />
            <Spark className="pointer-events-none absolute left-[78px] top-[20px] h-3.5 w-3.5 text-[#FFC15A] opacity-70" />
            <Spark className="pointer-events-none absolute bottom-8 left-9 h-4 w-4 text-[#8FD6D1] opacity-60" />
            <Spark className="pointer-events-none absolute bottom-[46px] right-9 h-6 w-6 text-[#8FD6D1] opacity-70" />
            <Spark className="pointer-events-none absolute bottom-6 right-[74px] h-3.5 w-3.5 text-[#FFC15A] opacity-70" />

            {/* dashed inner frame */}
            <div className="pointer-events-none absolute inset-x-4 bottom-4 top-6 rounded-[22px] border border-dashed border-[#B7E7E4]" />

            {/* close */}
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Закрыть"
              className="absolute right-6 top-[30px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E8F8B] shadow-[0_6px_16px_rgba(14,42,59,0.16)] transition hover:bg-[#EAF8F7]"
            >
              <CloseX className="h-6 w-6" />
            </button>

            <div className="relative px-12 pb-12 pt-9">
              <div className="flex items-center gap-5">
                <span className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_12px_26px_rgba(14,42,59,0.2)]">
                  {active.icon}
                </span>
                <div className="min-w-0 pr-14">
                  <p className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-[#21A7A2]">
                    Пункт {active.num} из 4
                  </p>
                  <h3 className="mt-1.5 text-[34px] font-extrabold leading-[1.08] text-[#18324A]">
                    {active.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-[#CBEBE8]" />

              <p className="mt-6 text-[24px] font-medium leading-[1.5] text-[#3C4A57]">
                {active.detail}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Risk zone modal */}
      {activeRisk && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-10"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-[#0E2A3B]/45 backdrop-blur-[3px]"
            onClick={() => setActiveRisk(null)}
          />

          <div className="relative w-[720px] max-w-full overflow-hidden rounded-[30px] bg-[linear-gradient(160deg,#FFFFFF_0%,#F2FBFA_55%,#E7F6F4_100%)] shadow-[0_44px_96px_rgba(14,42,59,0.42)] ring-1 ring-[#CBEBE8]">
            <div className="h-[9px] w-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)]" />

            <Spark className="pointer-events-none absolute left-6 top-[38px] h-6 w-6 text-[#8FD6D1] opacity-70" />
            <Spark className="pointer-events-none absolute left-[78px] top-[20px] h-3.5 w-3.5 text-[#FFC15A] opacity-70" />
            <Spark className="pointer-events-none absolute bottom-8 left-9 h-4 w-4 text-[#8FD6D1] opacity-60" />
            <Spark className="pointer-events-none absolute bottom-[46px] right-9 h-6 w-6 text-[#8FD6D1] opacity-70" />

            <div className="pointer-events-none absolute inset-x-4 bottom-4 top-6 rounded-[22px] border border-dashed border-[#B7E7E4]" />

            <button
              type="button"
              onClick={() => setActiveRisk(null)}
              aria-label="Закрыть"
              className="absolute right-6 top-[30px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E8F8B] shadow-[0_6px_16px_rgba(14,42,59,0.16)] transition hover:bg-[#EAF8F7]"
            >
              <CloseX className="h-6 w-6" />
            </button>

            <div className="relative px-12 pb-11 pt-9">
              <div className="flex items-center gap-5">
                <span className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_12px_26px_rgba(14,42,59,0.2)]">
                  {activeRisk.icon}
                </span>
                <div className="min-w-0 pr-14">
                  <p className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-[#21A7A2]">
                    Зона риска
                  </p>
                  <h3 className="mt-1.5 text-[36px] font-extrabold leading-[1.05] text-[#18324A]">
                    {activeRisk.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-[#CBEBE8]" />

              <ul className="mt-6 flex flex-col gap-4">
                {activeRisk.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2]">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                    <p className="text-[23px] font-medium leading-[1.34] text-[#3C4A57]">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
