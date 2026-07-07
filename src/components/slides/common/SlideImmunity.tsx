import { useState } from 'react'
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

function MucosaIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M8 20c5-6 10-6 15 0s10 6 15 0 10-6 10-6M8 30c5-6 10-6 15 0s10 6 15 0 10-6 10-6M8 40c5-6 10-6 15 0s10 6 15 0 10-6 10-6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MoleculeIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M15 20 27 30l14-8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 30v10" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="14" cy="19" r="5" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="42" cy="21" r="5" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="27" cy="43" r="5" stroke="currentColor" strokeWidth="2.8" />
    </svg>
  )
}

function DnaIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M19 9c0 10 18 12 18 19s-18 9-18 19M37 9c0 10-18 12-18 19s18 9 18 19" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M22 16h12M20.5 22h15M20.5 34h15M22 40h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
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

function MotionIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="34" cy="28" r="10" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="34" cy="28" r="3" fill="currentColor" />
      <path d="M6 22h12M4 28h11M6 34h12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  )
}

function TargetMicrobeIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="17" stroke="currentColor" strokeWidth="2.6" />
      <path d="M28 6v7M28 43v7M6 28h7M43 28h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="28" cy="28" r="7" stroke="currentColor" strokeWidth="2.4" />
      <path d="M28 21v-4M28 35v4M21 28h-4M35 28h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function FlameIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M29 8c1 8 11 12 11 23a12 12 0 0 1-24 0c0-5 2.5-8.5 5-11.5.3 3.4 1.8 5.5 3.8 5.5 2.6 0 3.2-3.4 1.4-7C25.5 18 27 12 29 8Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
    </svg>
  )
}

function ScalesIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 11v33M18 44h20" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M13 17h30" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="28" cy="12" r="2.4" fill="currentColor" />
      <path d="M13 17 7 30h12L13 17ZM43 17l-6 13h12l-6-13Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  )
}

function LungsIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 9v16" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M22 19c1 3-4 4-6.5 7.5C13 30 12 38 13 43c.5 2.8 3.8 3 6 .8 3-3 5-8.5 5-15V22c0-2-1-3.5-2-3Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M34 19c-1 3 4 4 6.5 7.5C43 30 44 38 43 43c-.5 2.8-3.8 3-6 .8-3-3-5-8.5-5-15V22c0-2 1-3.5 2-3Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  )
}

function TregIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="17" stroke="currentColor" strokeWidth="2.8" />
      <path d="M20 23h16M28 23v13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function PeopleIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="17" r="6" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="13" cy="21" r="4.6" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="43" cy="21" r="4.6" stroke="currentColor" strokeWidth="2.6" />
      <path d="M18 44v-4a10 10 0 0 1 20 0v4" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M8 44v-3a6.5 6.5 0 0 1 8.5-6.2M48 44v-3a6.5 6.5 0 0 0-8.5-6.2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
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

/* ── Building blocks ───────────────────────────────────── */

interface Step {
  icon: ReactNode
  label: string
  accent?: boolean
}

function StepChip({ icon, label, accent = false }: Step) {
  return (
    <div className="flex w-[112px] flex-col items-center text-center">
      <span
        className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border ${
          accent ? 'border-[#FFC15A] bg-[#FFF6E6] text-[#E79A19]' : 'border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]'
        }`}
      >
        {icon}
      </span>
      <p className="mt-2 text-[11.5px] font-bold leading-[1.16] text-[#18324A]">{label}</p>
    </div>
  )
}

function Arrow() {
  return <span className="mt-[18px] text-[26px] leading-none text-[#B7CBD0]">›</span>
}

function StepScheme({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-4 flex items-start justify-between">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-start">
          {i > 0 && <Arrow />}
          <StepChip {...s} />
        </div>
      ))}
    </div>
  )
}

/* ── View data ─────────────────────────────────────────── */

interface Mechanism {
  title: string
  text: string
  icon: ReactNode
  steps: Step[]
}

interface ImmunityView {
  subtitle: string
  leftTitle: ReactNode
  photo: string
  photoAlt: string
  photo2: string
  photoAlt2: string
  glow: string
  theses: { icon: ReactNode; title: string }[]
  rightTitle: string
  rightSub: string
  mechanisms: Mechanism[]
  summary: ReactNode
  source: string
}

const innate: ImmunityView = {
  subtitle: 'Поддержка врождённого иммунитета и барьерной защиты',
  leftTitle: 'Барьерная защита',
  photo: '/assets/characters/active-immunity-child.webp',
  photoAlt: 'Улыбающийся ребёнок под защитой иммунитета',
  photo2: '/assets/characters/baby-immunity.webp',
  photoAlt2: 'Здоровый малыш с крепким иммунитетом',
  glow: 'rgba(255,214,110,0.55)',
  theses: [
    { icon: <MucosaIcon />, title: 'Слизистые — первый барьер организма' },
    { icon: <MoleculeIcon />, title: 'Антимикробные пептиды — прямое действие на вирусы и бактерии' },
    { icon: <ShieldIcon check />, title: 'Первая линия защиты — быстрое распознавание и нейтрализация патогенов' },
  ],
  rightTitle: 'Активация врождённого иммунитета',
  rightSub: '(Барьерная защита)',
  mechanisms: [
    {
      title: 'Синтез антимикробных пептидов',
      text: 'Витамин D через активацию генов-мишеней стимулирует выработку кателицидина (LL-37) и β-дефензинов. Эти молекулы обладают прямым вирулицидным и бактерицидным действием на слизистых.',
      icon: <MoleculeIcon className="h-7 w-7" />,
      steps: [
        { icon: <DnaIcon />, label: 'Активация генов-мишеней' },
        { icon: <MoleculeIcon />, label: 'LL-37 и β-дефензины' },
        { icon: <ShieldIcon />, label: 'Прямое действие на слизистые' },
      ],
    },
    {
      title: 'Хемотаксис и фагоцитоз',
      text: 'Повышает активность макрофагов и моноцитов, ускоряя распознавание и элиминацию патогенов при их первом контакте с организмом.',
      icon: <CellIcon className="h-7 w-7" />,
      steps: [
        { icon: <CellIcon />, label: 'Активация макрофагов и моноцитов' },
        { icon: <MotionIcon />, label: 'Движение к патогену (хемотаксис)' },
        { icon: <TargetMicrobeIcon />, label: 'Распознавание и элиминация', accent: true },
      ],
    },
  ],
  summary: (
    <>
      <span className="font-extrabold text-[#0E8F8B]">Итог:</span> витамин D3 усиливает первую линию
      иммунной защиты ребёнка, помогая организму быстрее распознавать и нейтрализовать вирусы и бактерии.
    </>
  ),
  source: 'https://pubmed.ncbi.nlm.nih.gov/28202713/',
}

const adaptive: ImmunityView = {
  subtitle: 'Модуляция адаптивного иммунитета и противовоспалительный эффект',
  leftTitle: (
    <>
      Противовоспалительный
      <br />эффект
    </>
  ),
  photo: '/assets/characters/active-immunity-child.webp',
  photoAlt: 'Здоровый ребёнок под сбалансированной иммунной защитой',
  photo2: '/assets/characters/baby-immunity.webp',
  photoAlt2: 'Здоровый малыш с крепким иммунитетом',
  glow: 'rgba(120,206,201,0.55)',
  theses: [
    { icon: <FlameIcon />, title: 'Контроль воспаления — снижение избыточной иммунной реакции' },
    { icon: <ScalesIcon />, title: 'Иммунная толерантность — поддержка баланса защитных механизмов' },
    { icon: <LungsIcon />, title: 'Профилактика ОРВИ и гриппа — особенно при исходном дефиците D3' },
  ],
  rightTitle: 'Модуляция адаптивного иммунитета',
  rightSub: '(Противовоспалительный эффект)',
  mechanisms: [
    {
      title: '1. Т-клеточная дифференцировка',
      text: 'D3 подавляет избыточную пролиферацию провоспалительных клеток, предотвращая «цитокиновый шторм» и повреждение собственных тканей.',
      icon: <CellIcon className="h-7 w-7" />,
      steps: [
        { icon: <CellIcon />, label: 'Баланс Т-клеток' },
        { icon: <ShieldIcon check />, label: 'Снижение избыточного воспаления' },
        { icon: <ShieldCrossIcon />, label: 'Защита собственных тканей' },
      ],
    },
    {
      title: '2. Индукция Т-регуляторных клеток (Treg)',
      text: 'Способствует формированию иммунной толерантности, что критически важно для профилактики аутоиммунных и аллергических заболеваний у детей.',
      icon: <TregIcon className="h-7 w-7" />,
      steps: [
        { icon: <TregIcon />, label: 'Активация Treg' },
        { icon: <ShieldIcon check />, label: 'Иммунная толерантность' },
        { icon: <PeopleIcon />, label: 'Профилактика аутоиммунных и аллергических реакций', accent: true },
      ],
    },
  ],
  summary: (
    <>
      Регулярный приём витамина D3 признан эффективной стратегией снижения риска острых инфекций
      дыхательных путей (ОРВИ, грипп). Наибольший эффект наблюдается в группах с исходным уровнем
      25(OH)D ниже 25 нмоль/л.
    </>
  ),
  source: 'https://pubmed.ncbi.nlm.nih.gov/28202713/',
}

/* ── View renderer ─────────────────────────────────────── */

function ViewContent({ view }: { view: ImmunityView }) {
  return (
    <>
      {/* Left card */}
      <div className="absolute left-[45px] top-[128px] flex h-[964px] w-[418px] flex-col rounded-[24px] bg-white px-7 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3">
          <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2]">
            <ShieldIcon />
          </span>
          <h2 className="text-[23px] font-bold leading-[1.1] text-[#21A7A2]">{view.leftTitle}</h2>
        </div>

        {/* Two stacked photos */}
        <div className="relative mx-auto mt-3 h-[350px] w-[300px]">
          <div
            className="absolute inset-0 rounded-[30px] blur-[6px]"
            style={{ background: `radial-gradient(ellipse at 50% 42%, ${view.glow} 0%, ${view.glow.replace(/0\.55\)/, '0.16)')} 44%, rgba(255,255,255,0) 68%)` }}
          />
          <div className="absolute inset-x-[14px] inset-y-[6px] flex flex-col gap-2.5">
            <div className="relative flex-1 overflow-hidden rounded-[20px] bg-[#EAF3FA] shadow-[0_10px_26px_rgba(24,50,74,0.14)] ring-2 ring-white">
              <img src={view.photo} alt={view.photoAlt} className="h-full w-full object-cover object-[50%_16%]" draggable={false} />
            </div>
            <div className="relative flex-1 overflow-hidden rounded-[20px] bg-[#EAF3FA] shadow-[0_10px_26px_rgba(24,50,74,0.14)] ring-2 ring-white">
              <img src={view.photo2} alt={view.photoAlt2} className="h-full w-full object-cover object-[50%_32%]" draggable={false} />
            </div>
          </div>
        </div>

        {/* Theses */}
        <div className="mt-4 flex flex-1 flex-col justify-center gap-2.5 rounded-[18px] bg-[#EAF8F7] p-5">
          {view.theses.map((t, i) => (
            <div key={i} className="flex items-center gap-3.5">
              <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2] shadow-[0_4px_12px_rgba(33,167,162,0.16)]">
                {t.icon}
              </span>
              <p className="text-[14px] font-bold leading-[1.24] text-[#18324A]">{t.title}</p>
            </div>
          ))}
        </div>

        <p className="mt-3 flex items-center gap-1.5 text-[11.5px] font-medium leading-none text-[#9AA5AF]">
          <span className="text-[#21A7A2]"><DocIcon /></span>
          Источник: <span className="text-[#21A7A2]">{view.source}</span>
        </p>
      </div>

      {/* Right card */}
      <div className="absolute right-[45px] top-[128px] flex h-[964px] w-[472px] flex-col rounded-[24px] bg-white px-7 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3">
          <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
            <ShieldIcon check />
          </span>
          <div>
            <h2 className="text-[22px] font-bold leading-tight text-[#18324A]">{view.rightTitle}</h2>
            <p className="text-[15px] font-bold leading-tight text-[#21A7A2]">{view.rightSub}</p>
          </div>
        </div>

        {view.mechanisms.map((m, i) => (
          <div key={i} className={`${i === 0 ? 'mt-4' : 'mt-3.5'} rounded-[18px] border border-[#EAEEF1] bg-white p-5 shadow-[0_6px_18px_rgba(24,50,74,0.05)]`}>
            <div className="flex items-center gap-3">
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]">
                {m.icon}
              </span>
              <h3 className="text-[18px] font-bold leading-tight text-[#18324A]">{m.title}</h3>
            </div>
            <p className="mt-3 text-[13.5px] font-medium leading-[1.38] text-[#6D7A86]">{m.text}</p>
            <StepScheme steps={m.steps} />
          </div>
        ))}

        <div className="mt-auto flex items-center gap-4 rounded-[18px] bg-[#EAF8F7] px-6 py-4">
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
            <ShieldIcon check className="h-7 w-7" />
          </span>
          <p className="text-[14.5px] font-medium leading-[1.3] text-[#18324A]">{view.summary}</p>
        </div>
      </div>
    </>
  )
}

/* ── Slide ─────────────────────────────────────────────── */

type Tab = 'innate' | 'adaptive'

export default function SlideImmunity() {
  const [tab, setTab] = useState<Tab>('innate')
  const view = tab === 'innate' ? innate : adaptive

  return (
    <section className="relative h-full overflow-hidden px-[45px]" style={{ color: NAVY }}>
      <header className="absolute left-[45px] top-[40px]">
        <h1 className="font-display text-[36px] font-extrabold leading-[1.05] tracking-tight text-[#18324A]">
          Витамин D3 и иммунитет ребёнка
        </h1>
        <p className="mt-1.5 text-[16px] font-medium leading-none text-[#6D7A86]">{view.subtitle}</p>
      </header>

      <ViewContent view={view} />

      {/* Tabs */}
      <div className="absolute bottom-[16px] left-[45px] flex h-11 items-center gap-3">
        <button
          type="button"
          className={`h-11 cursor-pointer rounded-[12px] px-5 text-[15px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 ${tab === 'innate' ? 'bg-[#21A7A2] text-white shadow-[0_8px_18px_rgba(33,167,162,0.22)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86]'}`}
          onClick={() => setTab('innate')}
        >
          🛡️ Врождённый иммунитет
        </button>
        <button
          type="button"
          className={`h-11 cursor-pointer rounded-[12px] px-5 text-[15px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 ${tab === 'adaptive' ? 'bg-[#21A7A2] text-white shadow-[0_8px_18px_rgba(33,167,162,0.22)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86]'}`}
          onClick={() => setTab('adaptive')}
        >
          ⚖️ Адаптивный иммунитет
        </button>
      </div>

    </section>
  )
}
