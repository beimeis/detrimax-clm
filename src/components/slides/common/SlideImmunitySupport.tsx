import type { ReactNode } from 'react'

const NAVY = '#18324A'

/* ── Icons ─────────────────────────────────────────────── */

function ShieldIcon({ className = 'h-6 w-6', check = false }: { className?: string; check?: boolean }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {check && <path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  )
}

function ShieldCrossIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M28 20v13M21.5 26.5h13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function CellIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 8c8 0 12 5 16 9s6 13 1 20-15 11-23 8-13-11-11-19 8-18 16-18Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <circle cx="26" cy="28" r="6" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="38" cy="21" r="2.4" fill="currentColor" />
      <circle cx="37" cy="35" r="2" fill="currentColor" />
    </svg>
  )
}

function HeadCrossIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M34 47v-8c5.2-2.4 8.8-7.6 8.8-13.6C42.8 17.6 36 11 27.6 11 19.6 11 13 17.4 13 25.4c0 4.6 2.2 8.8 5.6 11.4V47" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.5 20v11M22 25.5h11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function MoleculeIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M15 20 27 30l14-8M27 30v10" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="19" r="5" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="42" cy="21" r="5" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="27" cy="43" r="5" stroke="currentColor" strokeWidth="2.8" />
    </svg>
  )
}

function CellCycleIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="9" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="28" cy="28" r="2.4" fill="currentColor" />
      <path d="M42 20a17 17 0 1 1-6-6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M36 8v8h8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DocIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3v5h5M8.5 13h7M8.5 16.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

/* ── Mini illustrations (right side of each point) ─────── */

function ShieldSparkIllus() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden>
      <path d="M32 12 48 18v10c0 9-5.6 17-16 20.5C21.6 45 16 37 16 28V18l16-6Z" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M26 30.5 30.5 35 39 24" stroke="#21A7A2" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 14l1.2 3 3 1.2-3 1.2L50 23.4l-1.2-3-3-1.2 3-1.2L50 14Z" fill="#8FD6D1" />
    </svg>
  )
}

function VirusArrowIllus() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden>
      <g stroke="#F0A24E" strokeWidth="2">
        <circle cx="15" cy="24" r="6" fill="#FDEFDD" />
        <path d="M15 15v-3M15 33v3M6 24H3M24 24h3M9 18l-2-2M21 18l2-2" strokeLinecap="round" />
      </g>
      <path d="M28 30h8" stroke="#9AA5AF" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M34 27l4 3-4 3" stroke="#9AA5AF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 20 60 24v6c0 5.4-3.4 10.2-10 12-6.6-1.8-10-6.6-10-12v-6l10-4Z" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M45 30l3.5 3.5L55 26" stroke="#21A7A2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PeptideIllus() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden>
      <path d="M8 40c6-8 10-8 16 0s10 8 16 0 10-8 16 0" stroke="#21A7A2" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="8" cy="40" r="3.4" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2" />
      <circle cx="24" cy="24" r="3.4" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2" />
      <circle cx="40" cy="40" r="3.4" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2" />
      <circle cx="56" cy="24" r="3.4" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2" />
    </svg>
  )
}

function CellClusterIllus() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" aria-hidden>
      <circle cx="22" cy="26" r="10" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2.2" />
      <circle cx="42" cy="22" r="8" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2.2" />
      <circle cx="38" cy="42" r="9" fill="#EAF8F7" stroke="#21A7A2" strokeWidth="2.2" />
      <circle cx="22" cy="26" r="3" fill="#21A7A2" />
      <circle cx="42" cy="22" r="2.4" fill="#21A7A2" />
      <circle cx="38" cy="42" r="2.6" fill="#21A7A2" />
      <path d="M54 12l1 2.6 2.6 1-2.6 1L54 20l-1-2.4-2.6-1 2.6-1L54 12Z" fill="#8FD6D1" />
    </svg>
  )
}

/* ── Data ──────────────────────────────────────────────── */

const theses = [
  { icon: <ShieldIcon />, title: 'Активация защитной функции' },
  { icon: <ShieldCrossIcon />, title: 'Снижение риска простудных заболеваний' },
  { icon: <CellIcon />, title: 'Обновление клеток иммунной системы' },
]

interface Point {
  num: number
  text: string
  icon: ReactNode
  illus: ReactNode
}

const points: Point[] = [
  {
    num: 1,
    text: 'Способствует активации защитной функции организма',
    icon: <ShieldIcon check />,
    illus: <ShieldSparkIllus />,
  },
  {
    num: 2,
    text: 'Снижает риск развития простудных заболеваний',
    icon: <HeadCrossIcon />,
    illus: <VirusArrowIllus />,
  },
  {
    num: 3,
    text: 'Запускает в организме синтез собственных антимикробных пептидов',
    icon: <MoleculeIcon />,
    illus: <PeptideIllus />,
  },
  {
    num: 4,
    text: 'Регулирует рост, развитие и обновление клеток иммунной системы',
    icon: <CellCycleIcon />,
    illus: <CellClusterIllus />,
  },
]

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideImmunitySupport() {

  return (
    <section className="relative h-full overflow-hidden px-[45px]" style={{ color: NAVY }}>
      <header className="absolute left-[45px] top-[40px]">
        <h1 className="font-display text-[37px] font-extrabold leading-[1.05] tracking-tight text-[#18324A]">
          Влияние витамина D3 на иммунную систему
        </h1>
        <p className="mt-1.5 text-[17px] font-medium leading-none text-[#6D7A86]">
          Поддержка защитной функции организма
        </p>
        <div className="mt-3 h-[3px] w-[150px] rounded-full bg-[#21A7A2]" />
      </header>

      {/* Left card */}
      <div className="absolute left-[45px] top-[176px] flex h-[856px] w-[406px] flex-col rounded-[24px] bg-white px-6 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="relative mx-auto h-[452px] w-[338px]">
          <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(ellipse_at_50%_40%,rgba(124,207,202,0.5)_0%,rgba(124,207,202,0.16)_44%,rgba(255,255,255,0)_68%)] blur-[6px]" />
          <div className="absolute inset-x-[18px] inset-y-[8px] overflow-hidden rounded-[26px] bg-[#F1EDE6] shadow-[0_12px_30px_rgba(24,50,74,0.14)]">
            <img src="/assets/characters/active-brain-learning.webp" alt="Ребёнок под защитой иммунитета" className="h-full w-full object-cover object-[50%_16%]" draggable={false} />
          </div>
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 338 452" fill="none" aria-hidden>
            <path d="M169 14 300 58v138c0 96-60 158-131 190C67 354 38 292 38 196V58L169 14Z" stroke="#7FCFCA" strokeWidth="3.5" strokeLinejoin="round" opacity="0.85" />
            <g stroke="#8FD6D1" strokeWidth="1.8">
              <g><circle cx="52" cy="120" r="6" fill="#EAF8F7" /><path d="M52 111v-4M52 129v4M43 120h-4M61 120h4M46 114l-3-3M58 114l3-3" strokeLinecap="round" /></g>
              <g><circle cx="286" cy="150" r="5" fill="#EAF8F7" /><path d="M286 143v-3M286 157v3M279 150h-3M293 150h3" strokeLinecap="round" /></g>
              <g><circle cx="66" cy="300" r="5" fill="#EAF8F7" /><path d="M66 293v-3M66 307v3M59 300h-3M73 300h3" strokeLinecap="round" /></g>
            </g>
            <g fill="#8FD6D1">
              <path d="M40 200l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6L40 200Z" />
              <path d="M292 250l1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4L292 250Z" />
            </g>
          </svg>
        </div>

        <div className="mt-5 flex flex-1 flex-col justify-center rounded-[18px] bg-[#EAF8F7] px-5">
          {theses.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 py-3.5"
              style={{ borderTop: i === 0 ? '0' : '1px solid rgba(33,167,162,0.16)' }}
            >
              <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2] shadow-[0_4px_12px_rgba(33,167,162,0.16)]">
                {t.icon}
              </span>
              <p className="text-[15.5px] font-bold leading-[1.22] text-[#18324A]">{t.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right card */}
      <div className="absolute right-[45px] top-[176px] flex h-[856px] w-[500px] flex-col rounded-[24px] bg-white px-7 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        {points.map((p, i) => (
          <article
            key={p.num}
            className="flex flex-1 items-center gap-4"
            style={{ borderTop: i === 0 ? '0' : '1px solid #EEF1F4' }}
          >
            <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
              {p.icon}
            </div>
            <p className="min-w-0 flex-1 text-[16px] font-semibold leading-[1.28] text-[#18324A]">
              <span className="mr-1 font-extrabold text-[#21A7A2]">{p.num}.</span>
              {p.text}
            </p>
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[16px] bg-[#F4FAF9]">
              {p.illus}
            </div>
          </article>
        ))}
      </div>

      {/* Summary */}
      <div className="absolute left-[45px] right-[45px] top-[1046px] flex items-center gap-4 rounded-[20px] bg-[linear-gradient(135deg,#EAF8F7,#DDF3F0)] px-7 py-4 shadow-[0_10px_25px_rgba(33,167,162,0.12)]">
        <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
          <ShieldIcon check className="h-7 w-7" />
        </span>
        <p className="text-[16px] font-medium leading-[1.3] text-[#18324A]">
          <span className="text-[18px] font-extrabold text-[#0E8F8B]">Итог:</span> витамин D3
          поддерживает иммунную защиту ребёнка, способствует выработке антимикробных факторов и
          помогает снижать риск инфекций.
        </p>
      </div>

      <p className="absolute bottom-[16px] left-[45px] flex items-center gap-1.5 text-[11.5px] font-medium leading-none text-[#9AA5AF]">
        <span className="text-[#21A7A2]"><DocIcon /></span>
        Источник: <span className="text-[#21A7A2]">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6210343/</span>
      </p>

    </section>
  )
}
