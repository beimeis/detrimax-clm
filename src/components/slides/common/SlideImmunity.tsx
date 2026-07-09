import { useState, cloneElement, isValidElement } from 'react'
import type { ReactNode, ReactElement } from 'react'

const NAVY = '#18324A'

/** Re-render an icon element at a larger size for the expanded view. */
function bigIcon(icon: ReactNode, size = 'h-14 w-14'): ReactNode {
  return isValidElement(icon)
    ? cloneElement(icon as ReactElement<{ className?: string }>, { className: size })
    : icon
}

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

function StepChip({ icon, label, accent = false, big = false }: Step & { big?: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center ${big ? 'w-[152px]' : 'w-[104px]'}`}>
      <span
        className={`flex items-center justify-center rounded-full border ${
          big ? 'h-[74px] w-[74px] [&>svg]:h-9 [&>svg]:w-9' : 'h-[52px] w-[52px]'
        } ${accent ? 'border-[#FFC15A] bg-[#FFF6E6] text-[#E79A19]' : 'border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]'}`}
      >
        {icon}
      </span>
      <p className={`mt-2 font-bold leading-[1.16] text-[#18324A] ${big ? 'text-[17.5px]' : 'text-[13.5px]'}`}>{label}</p>
    </div>
  )
}

function Arrow({ big = false }: { big?: boolean }) {
  return <span className={`leading-none text-[#B7CBD0] ${big ? 'mt-[26px] text-[34px]' : 'mt-[18px] text-[26px]'}`}>›</span>
}

function StepScheme({ steps, big = false }: { steps: Step[]; big?: boolean }) {
  return (
    <div className={`flex items-start justify-between ${big ? 'mt-7' : 'mt-4'}`}>
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-start">
          {i > 0 && <Arrow big={big} />}
          <StepChip {...s} big={big} />
        </div>
      ))}
    </div>
  )
}

/* ── View data ─────────────────────────────────────────── */

interface Mechanism {
  title: string
  short: string
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
  gif: string
  illustrationCaption: string
  theses: { icon: ReactNode; title: string; detail: string }[]
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
  gif: '/assets/characters/immunity-teaching.gif',
  illustrationCaption: 'Первая линия защиты помогает организму быстрее распознавать угрозы',
  theses: [
    {
      icon: <MucosaIcon />,
      title: 'Слизистые — первый барьер организма',
      detail: 'Слизь и плотный эпителий физически задерживают патогены и не дают им проникнуть внутрь.',
    },
    {
      icon: <MoleculeIcon />,
      title: 'Антимикробные пептиды — прямое действие на вирусы и бактерии',
      detail: 'Кателицидин (LL-37) и β-дефензины разрушают оболочку возбудителей прямо на слизистых.',
    },
    {
      icon: <ShieldIcon check />,
      title: 'Первая линия защиты — быстрое распознавание и нейтрализация патогенов',
      detail: 'Врождённый иммунитет срабатывает за минуты — до того как инфекция успеет развиться.',
    },
  ],
  rightTitle: 'Активация врождённого иммунитета',
  rightSub: '(Барьерная защита)',
  mechanisms: [
    {
      title: 'Синтез антимикробных пептидов',
      short: 'Выработка LL-37 и β-дефензинов',
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
      short: 'Активнее захватывают патогены',
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
  gif: '/assets/characters/immunity-adaptive.gif',
  illustrationCaption: 'D3 помогает регулировать чрезмерный воспалительный ответ',
  theses: [
    {
      icon: <FlameIcon />,
      title: 'Контроль воспаления — снижение избыточной иммунной реакции',
      detail: 'D3 сдерживает избыточный ответ и снижает риск повреждения собственных тканей.',
    },
    {
      icon: <ScalesIcon />,
      title: 'Иммунная толерантность — поддержка баланса защитных механизмов',
      detail: 'Поддерживает баланс защиты и переносимости, снижая риск аутоиммунных и аллергических реакций.',
    },
    {
      icon: <LungsIcon />,
      title: 'Профилактика ОРВИ и гриппа — особенно при исходном дефиците D3',
      detail: 'При низком исходном уровне D3 регулярный приём ощутимо снижает частоту ОРВИ и гриппа.',
    },
  ],
  rightTitle: 'Модуляция адаптивного иммунитета',
  rightSub: '(Противовоспалительный эффект)',
  mechanisms: [
    {
      title: '1. Т-клеточная дифференцировка',
      short: 'Баланс про- и противовоспалительных клеток',
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
      short: 'Формирование иммунной толерантности',
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

/* ── Flip mechanism (interactive card that flips to reveal details) ── */

function FlipHintIcon({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 9a8 8 0 0 1 13.7-3.3L20 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4v4h-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 15a8 8 0 0 1-13.7 3.3L4 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20v-4h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HandTapIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      {/* tap ripple arcs */}
      <path d="M11 13c1.4-2.2 3.8-3.6 6.5-3.9M14.5 8.8c.9-1.3 2.3-2.2 3.9-2.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* index finger */}
      <path d="M19.5 25.5V13.2a3.2 3.2 0 0 1 6.4 0v9.3" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* middle + ring */}
      <path d="M25.9 22.8v-1.6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* palm */}
      <path d="M31.9 23.4a3 3 0 0 1 6 0v6.4c0 5.6-4.1 9.7-9.7 9.7h-2.5c-2.8 0-4.7-1.1-6.5-3.7l-4.9-7a3 3 0 0 1 4.7-3.8l2.5 2.7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MechButton({ mechanism, onOpen, flipped }: { mechanism: Mechanism; onOpen: () => void; flipped: boolean }) {
  return (
    <div className="h-[312px] [perspective:1900px]">
      <div className={`flip-inner relative h-full w-full ${flipped ? 'is-flipped' : ''}`}>
        {/* Front — soft teal-gradient card with a glass highlight + medical icon */}
        <button
          type="button"
          onClick={onOpen}
          className="flip-face absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[24px] border border-white/50 bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] px-8 py-7 text-center shadow-[0_16px_38px_rgba(20,143,139,0.30)] transition duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          {/* glass highlight */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.34),rgba(255,255,255,0))]" />
          <span className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/12 blur-2xl" />
          <span className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white/95 text-[#0E8F8B] shadow-[0_8px_20px_rgba(0,0,0,0.14)]">
            <HandTapIcon className="h-[44px] w-[44px]" />
          </span>
          <h3 className="relative text-balance text-[25px] font-extrabold leading-[1.16] text-white">{mechanism.title}</h3>
          <p className="relative max-w-[300px] text-[15.5px] font-semibold leading-[1.28] text-white/90">{mechanism.short}</p>
          <span className="relative mt-0.5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold uppercase tracking-[0.04em] text-white/70">
            <FlipHintIcon className="h-[16px] w-[16px]" /> Нажмите, чтобы открыть
          </span>
        </button>

        {/* Back — flips away while its own modal is open */}
        <div className="flip-face flip-face--back absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[24px] border-2 border-[#21A7A2] bg-white px-8 py-7 text-center shadow-[0_16px_38px_rgba(20,143,139,0.24)]">
          <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2] [&>svg]:h-[40px] [&>svg]:w-[40px]">
            {mechanism.icon}
          </span>
          <h3 className="text-balance text-[24px] font-extrabold leading-[1.16] text-[#18324A]">{mechanism.title}</h3>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF8F7] px-4 py-1.5 text-[14px] font-bold text-[#21A7A2]">
            Открыто
          </span>
        </div>
      </div>
    </div>
  )
}

type Expanded = { kind: 'mech'; mechanism: Mechanism } | { kind: 'summary' }

/* ── View renderer ─────────────────────────────────────── */

function ViewContent({ view, swapped }: { view: ImmunityView; swapped: boolean }) {
  const [expanded, setExpanded] = useState<Expanded | null>(null)
  const [activeThesis, setActiveThesis] = useState<number | null>(0)
  return (
    <>
      {/* Benefit-cards card — right on innate, left on adaptive */}
      <div className={`absolute top-[120px] flex h-[1002px] w-[418px] flex-col rounded-[24px] bg-white px-7 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)] ${swapped ? 'left-[45px]' : 'right-[45px]'}`}>
        <div className="flex items-center gap-3">
          <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
            <ShieldIcon />
          </span>
          <h2 className="text-[25px] font-bold leading-tight text-[#18324A]">{view.leftTitle}</h2>
        </div>

        {/* Illustration — blends into the card, main visual (larger on the adaptive tab) */}
        <div className={`relative mx-auto w-full ${swapped ? 'mt-3 h-[292px]' : 'mt-5 h-[300px]'}`}>
          <img
            src={view.gif}
            alt="Иллюстрация — иммунитет ребёнка"
            className={`h-full w-full object-contain transition-transform duration-300 ${activeThesis !== null ? 'scale-[1.04]' : ''}`}
            draggable={false}
          />
        </div>
        <p className="mx-auto mt-2 max-w-[360px] text-center text-[15px] font-semibold leading-[1.32] text-[#5A6672]">
          {view.illustrationCaption}
        </p>

        {/* Interactive benefit-cards */}
        <div className={`flex min-h-0 flex-1 flex-col gap-2.5 ${swapped ? 'mt-3' : 'mt-4'}`}>
          {view.theses.map((t, i) => {
            const open = activeThesis === i
            const head = t.title.split(' — ')[0]
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveThesis(open ? null : i)}
                className={`group flex flex-col rounded-[22px] border px-5 py-[18px] text-left transition duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21A7A2] ${
                  open
                    ? 'border-[#21A7A2] bg-[#EAF8F7] shadow-[0_16px_34px_rgba(33,167,162,0.20)]'
                    : 'border-[#D6EEEC] bg-white shadow-[0_9px_22px_rgba(24,50,74,0.07)] hover:shadow-[0_16px_32px_rgba(24,50,74,0.14)]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border transition-colors duration-200 [&>svg]:h-7 [&>svg]:w-7 ${
                      open ? 'border-[#21A7A2] bg-white text-[#21A7A2]' : 'border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]'
                    }`}
                  >
                    {t.icon}
                  </span>
                  <p className="flex-1 text-[22px] font-extrabold leading-[1.2] text-[#18324A]">{head}</p>
                  <span className="text-[#21A7A2]"><ChevronDown open={open} /></span>
                </div>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="pl-[74px] pr-1 pt-3">
                      <p className="text-[18px] font-bold leading-[1.36] text-[#2C3A47]">{t.detail}</p>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <p className="mt-3 flex items-center gap-1.5 text-[11.5px] font-medium leading-none text-[#9AA5AF]">
          <span className="text-[#21A7A2]"><DocIcon /></span>
          Источник: <span className="text-[#21A7A2]">{view.source}</span>
        </p>
      </div>

      {/* Mechanisms card — left on innate, right on adaptive */}
      <div className={`absolute top-[120px] flex h-[1002px] w-[472px] flex-col rounded-[24px] bg-white px-7 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)] ${swapped ? 'right-[45px]' : 'left-[45px]'}`}>
        <div className="flex items-center gap-3">
          <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
            <ShieldIcon check />
          </span>
          <div>
            <h2 className="text-[25px] font-bold leading-tight text-[#18324A]">{view.rightTitle}</h2>
            <p className="text-[17px] font-bold leading-tight text-[#21A7A2]">{view.rightSub}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col justify-center gap-5">
          {view.mechanisms.map((m, i) => (
            <MechButton
              key={i}
              mechanism={m}
              onOpen={() => setExpanded({ kind: 'mech', mechanism: m })}
              flipped={expanded?.kind === 'mech' && expanded.mechanism === m}
            />
          ))}
        </div>

        {/* Итог — light glass plate (not a third button) */}
        <button
          type="button"
          onClick={() => setExpanded({ kind: 'summary' })}
          className="group mt-4 flex items-center gap-4 rounded-[20px] border border-[#D2EBE9] bg-[linear-gradient(160deg,#FFFFFF,#ECF8F7)] px-6 py-4 text-left shadow-[0_10px_24px_rgba(24,50,74,0.08)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(24,50,74,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21A7A2]"
        >
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]">
            <ShieldIcon check className="h-7 w-7" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[22px] font-extrabold leading-tight text-[#0E8F8B]">Итог</p>
            <p className="text-[15px] font-semibold leading-tight text-[#4A5763]">Нажмите, чтобы показать вывод</p>
          </div>
          <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2]">
            <FlipHintIcon />
          </span>
        </button>
      </div>

      {/* Fullscreen flip-expand overlay */}
      {expanded && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-10" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-[#0E2A3B]/45 backdrop-blur-[3px]" onClick={() => setExpanded(null)} />

          <div className="vf-flip-in relative w-[880px] max-w-full overflow-hidden rounded-[30px] bg-white shadow-[0_44px_96px_rgba(14,42,59,0.42)] ring-1 ring-[#CBEBE8]">
            <div className="h-[10px] w-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)]" />

            <button
              type="button"
              onClick={() => setExpanded(null)}
              aria-label="Закрыть"
              className="absolute right-6 top-[32px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E8F8B] shadow-[0_6px_16px_rgba(14,42,59,0.16)] transition hover:bg-[#EAF8F7]"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </button>

            {expanded.kind === 'mech' ? (
              <div className="relative px-14 pb-14 pt-10">
                <div className="flex items-center gap-6">
                  <span className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-[26px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_14px_30px_rgba(14,42,59,0.22)]">
                    {bigIcon(expanded.mechanism.icon)}
                  </span>
                  <div className="min-w-0 pr-14">
                    <p className="text-[18px] font-extrabold uppercase tracking-[0.08em] text-[#21A7A2]">
                      Механизм действия
                    </p>
                    <h3 className="mt-2 text-[42px] font-extrabold leading-[1.05] text-[#18324A]">
                      {expanded.mechanism.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-7 h-px w-full bg-[#CBEBE8]" />
                <p className="mt-7 text-[29px] font-medium leading-[1.48] text-[#33475A]">
                  {expanded.mechanism.text}
                </p>
                <StepScheme steps={expanded.mechanism.steps} big />
              </div>
            ) : (
              <div className="relative flex flex-col items-center gap-7 px-14 pb-16 pt-12 text-center">
                <span className="flex h-[110px] w-[110px] items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_14px_30px_rgba(14,42,59,0.22)]">
                  <ShieldIcon check className="h-16 w-16" />
                </span>
                <p className="text-[20px] font-extrabold uppercase tracking-[0.08em] text-[#21A7A2]">Итог</p>
                <p className="max-w-[720px] text-[33px] font-medium leading-[1.42] text-[#18324A]">
                  {view.summary}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
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

      <ViewContent key={tab} view={view} swapped={tab === 'adaptive'} />

      {/* Tabs */}
      <div className="absolute bottom-[16px] left-[45px] flex h-12 items-center gap-3">
        <button
          type="button"
          className={`flex h-12 cursor-pointer items-center rounded-[13px] px-6 text-[15px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 ${tab === 'innate' ? 'border border-transparent bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_10px_24px_rgba(20,143,139,0.30)]' : 'border border-[#DCE3E8] bg-white text-[#54636F] shadow-[0_4px_12px_rgba(24,50,74,0.05)]'}`}
          onClick={() => setTab('innate')}
        >
          🛡️ Врождённый иммунитет
        </button>
        <button
          type="button"
          className={`flex h-12 cursor-pointer items-center rounded-[13px] px-6 text-[15px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 ${tab === 'adaptive' ? 'border border-transparent bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_10px_24px_rgba(20,143,139,0.30)]' : 'border border-[#DCE3E8] bg-white text-[#54636F] shadow-[0_4px_12px_rgba(24,50,74,0.05)]'}`}
          onClick={() => setTab('adaptive')}
        >
          ⚖️ Адаптивный иммунитет
        </button>
      </div>

    </section>
  )
}
