import { useState } from 'react'
import type { ReactNode } from 'react'

const NAVY = '#18324A'

/* ── Icons ─────────────────────────────────────────────── */

function BrainIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M21 43c-5.8 0-10.5-4.5-10.5-10.1 0-3.4 1.7-6.3 4.2-8.2-.4-1.1-.7-2.3-.7-3.6 0-4.7 3.8-8.6 8.6-8.6 1.4-3.7 5-6.4 9.2-6.4 5.4 0 9.8 4.4 9.8 9.8v.9c3.9 1.4 6.7 5.1 6.7 9.5 0 5.6-4.5 10.1-10.1 10.1H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 14v29M19 28h9M28 34h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BookIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 15c-4.5-3.4-10-4.5-16-4.5v33c6 0 11.5 1.1 16 4.5 4.5-3.4 10-4.5 16-4.5v-33c-6 0-11.5 1.1-16 4.5Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M28 15v33" stroke="currentColor" strokeWidth="2.8" />
    </svg>
  )
}

function ShieldBrainIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 6.5 44 13v11c0 10-6.4 19-16 22.5C18.4 43 12 34 12 24V13l16-6.5Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M24 20.5c-2 0-3.6 1.5-3.6 3.4 0 .8.3 1.5.7 2.1-.9.6-1.5 1.6-1.5 2.8 0 1.9 1.6 3.4 3.6 3.4M32 20.5c2 0 3.6 1.5 3.6 3.4 0 .8-.3 1.5-.7 2.1.9.6 1.5 1.6 1.5 2.8 0 1.9-1.6 3.4-3.6 3.4M28 18v18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NeuronIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="25" cy="28" r="7" stroke="currentColor" strokeWidth="2.8" />
      <path d="M25 21v-8M25 35v9M18 28H9M32 28h8M20 23l-6-6M30 23l6-6M20 33l-6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="42" cy="16" r="2.4" fill="currentColor" />
      <circle cx="42" cy="40" r="2.4" fill="currentColor" />
    </svg>
  )
}

function NeuralNetIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M14 16l14 8 14-8M14 40l14-8 14 8M28 24v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="42" cy="16" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="28" cy="28" r="4.5" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="14" cy="40" r="4" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="42" cy="40" r="4" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  )
}

function ChildBookIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="13" r="5" stroke="currentColor" strokeWidth="2.8" />
      <path d="M18 44V32c0-4 4.5-7 10-7s10 3 10 7v12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 36c4-2 8-2 13 0 5-2 9-2 13 0v10c-4-2-8-2-13 0-5-2-9-2-13 0V36Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  )
}

function HeadIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M34 47v-8c5.2-2.4 8.8-7.6 8.8-13.6C42.8 17.6 36 11 27.6 11 19.6 11 13 17.4 13 25.4c0 4.6 2.2 8.8 5.6 11.4V47" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6 36.6h-3.2c-1.4 0-2.2-1.6-1.4-2.7l2.4-3.3" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="25" r="4.5" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  )
}

function BalanceFigureIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="12" r="4.5" stroke="currentColor" strokeWidth="2.8" />
      <path d="M28 17v15M13 24h30M22 46l6-14 6 14" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SparkBrainIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M22 40c-5 0-9-3.9-9-8.7 0-2.9 1.4-5.4 3.6-7-.3-.9-.5-1.9-.5-3 0-4 3.2-7.3 7.3-7.3 1.2-3.1 4.2-5.4 7.8-5.4 4.6 0 8.3 3.7 8.3 8.3" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 15v25M17 27h7M24 33h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M42 26l1.4 3.4 3.4 1.4-3.4 1.4L42 37l-1.4-3.4-3.4-1.4 3.4-1.4L42 26Z" fill="currentColor" />
      <circle cx="47" cy="20" r="1.8" fill="currentColor" />
    </svg>
  )
}

function HeadHeartIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M34 47v-8c5.2-2.4 8.8-7.6 8.8-13.6C42.8 17.6 36 11 27.6 11 19.6 11 13 17.4 13 25.4c0 4.6 2.2 8.8 5.6 11.4V47" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.5 22.5c-1.3-1.6-4-1.3-4.4.9-.4-2.2-3.1-2.5-4.4-.9-1.4 1.7-.3 4.1 4.4 6.8 4.7-2.7 5.8-5.1 4.4-6.8Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
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

function SmileIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="2.8" />
      <path d="M20 24h.1M36 24h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M19.5 34c5.5 5 11.5 5 17 0" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon({ className = 'h-6 w-6', check = false }: { className?: string; check?: boolean }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {check && <path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  )
}

function TargetIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="17" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="28" cy="28" r="9" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="28" cy="28" r="2.4" fill="currentColor" />
      <path d="M28 6v8M28 42v8M6 28h8M42 28h8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
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

function MoonIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M38.8 39c-11.6 0-21-9.4-21-21 0-2.4.4-4.6 1.1-6.7C12 14.6 7.4 21.4 7.4 29.4 7.4 40 16 48.6 26.6 48.6c8 0 14.9-4.7 18.1-11.5-1.8 1.2-3.8 1.9-5.9 1.9Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M34 9h8l-8 8h8M28 13h5l-5 5h5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="29" r="18" stroke="currentColor" strokeWidth="2.8" />
      <path d="M28 19v10l7 5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 8l-6 5M36 8l6 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function BedIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M9 20v24M9 42h38v-6a7 7 0 0 0-7-7H21" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 30h6a5 5 0 0 1 5 5v0" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M40 15c-3 1-5 4-5 7.5 0 4.4 3.6 8 8 8 1.6 0 3-.5 4.3-1.3A8 8 0 0 1 40 15Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  )
}

function SunIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="2.8" />
      <path d="M28 6v7M28 43v7M6 28h7M43 28h7M12 12l5 5M39 39l5 5M44 12l-5 5M17 39l-5 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

/* ── Building blocks ───────────────────────────────────── */

interface Step {
  icon: ReactNode
  label: string
  accent?: boolean
}

function StepScheme({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-2 flex items-start justify-between">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-start">
          {i > 0 && (
            <span
              className="vf-fade-up mt-[28px] text-[30px] leading-none text-[#B7CBD0]"
              style={{ animationDelay: `${i * 130 + 70}ms` }}
            >
              ›
            </span>
          )}
          <div
            className="vf-fade-up flex w-[112px] flex-col items-center text-center"
            style={{ animationDelay: `${i * 130}ms` }}
          >
            <span
              className={`flex h-[74px] w-[74px] items-center justify-center rounded-full border [&>svg]:h-[38px] [&>svg]:w-[38px] ${
                s.accent
                  ? 'border-[#FFC15A] bg-[#FFF6E6] text-[#E79A19] shadow-[0_8px_18px_rgba(231,154,25,0.18)]'
                  : 'border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2] shadow-[0_8px_18px_rgba(33,167,162,0.16)]'
              }`}
            >
              {s.icon}
            </span>
            <p className="mt-2.5 text-[15.5px] font-bold leading-[1.16] text-[#18324A]">{s.label}</p>
          </div>
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

interface CogView {
  subtitle: string
  leftTitle: string
  leftIcon: ReactNode
  photo: string
  photoAlt: string
  glowGrad: string
  glowStroke: string
  theses: { icon: ReactNode; title: string }[]
  rightTitle: string
  rightSub: string
  mechanisms: Mechanism[]
  summary: string
  source: string
}

const cognitive: CogView = {
  subtitle: 'Нейростероидный эффект',
  leftTitle: 'Развитие мозга',
  leftIcon: <BrainIcon />,
  photo: '/assets/characters/student-brain-3d.webp',
  photoAlt: 'Ребёнок размышляет — активная работа мозга',
  glowGrad: 'radial-gradient(ellipse at 50% 30%, rgba(255,214,110,0.55) 0%, rgba(255,214,110,0.16) 44%, rgba(255,255,255,0) 68%)',
  glowStroke: '#FFD36E',
  theses: [
    { icon: <BrainIcon />, title: 'Гиппокамп, мозжечок и кора' },
    { icon: <BookIcon />, title: 'Обучение и адаптация' },
    { icon: <ShieldBrainIcon />, title: 'Защита клеток мозга' },
  ],
  rightTitle: 'Влияние D3 на нервную систему',
  rightSub: '(Нейростероидный эффект)',
  mechanisms: [
    {
      title: '1. Рецепторы VDR в мозге',
      text: 'Рецепторы к витамину D распределены в ключевых зонах мозга: гиппокампе (память), мозжечке и коре. Это делает D3 полноценным участником развития нервных связей.',
      icon: <BrainIcon className="h-7 w-7" />,
      steps: [
        { icon: <HeadIcon />, label: 'Память (гиппокамп)' },
        { icon: <BalanceFigureIcon />, label: 'Координация (мозжечок)' },
        { icon: <BrainIcon />, label: 'Мышление (кора)' },
      ],
    },
    {
      title: '2. Нейропластичность',
      text: 'Витамин D стимулирует синтез факторов роста нервов (NGF). Это обеспечивает «гибкость» мозга — способность ребёнка быстро учиться и адаптироваться к новым задачам.',
      icon: <NeuronIcon className="h-7 w-7" />,
      steps: [
        { icon: <NeuronIcon />, label: 'Стимуляция NGF' },
        { icon: <NeuralNetIcon />, label: 'Рост нейронных связей' },
        { icon: <ChildBookIcon />, label: 'Быстрое обучение' },
      ],
    },
    {
      title: '3. Нейропротекция',
      text: 'Оптимальный уровень D3 защищает клетки мозга от повреждений и окислительного стресса, возникающего при высоких учебных нагрузках.',
      icon: <ShieldBrainIcon className="h-7 w-7" />,
      steps: [
        { icon: <SparkBrainIcon />, label: 'Окислительный стресс' },
        { icon: <ShieldBrainIcon />, label: 'Защита клеток мозга' },
        { icon: <HeadHeartIcon />, label: 'Сохранение когниции', accent: true },
      ],
    },
  ],
  summary: 'Итог: витамин D3 поддерживает память, обучение, адаптацию и защиту нервной системы ребёнка.',
  source: 'https://pubmed.ncbi.nlm.nih.gov/15589699/',
}

const mood: CogView = {
  subtitle: 'Серотонин, поведение и качество сна',
  leftTitle: 'Настроение и сон',
  leftIcon: <SmileIcon />,
  photo: '/assets/characters/active-brain-learning.webp',
  photoAlt: 'Радостный ребёнок — хорошее настроение и энергия',
  glowGrad: 'radial-gradient(ellipse at 50% 32%, rgba(255,199,90,0.55) 0%, rgba(255,199,90,0.16) 44%, rgba(255,255,255,0) 68%)',
  glowStroke: '#FFC15A',
  theses: [
    { icon: <BrainIcon />, title: 'Серотонин и дофамин' },
    { icon: <ShieldIcon check />, title: 'Контроль импульсивности' },
    { icon: <MoonIcon />, title: 'Сон и дневная бодрость' },
  ],
  rightTitle: 'Настроение и поведение',
  rightSub: '(Серотонин, поведение и сон)',
  mechanisms: [
    {
      title: '1. Синтез серотонина и дофамина',
      text: 'Витамин D регулирует превращение триптофана в серотонин. Это снижает риск детской тревожности, агрессивности и сезонных депрессий.',
      icon: <MoleculeIcon className="h-7 w-7" />,
      steps: [
        { icon: <MoleculeIcon />, label: 'Триптофан' },
        { icon: <BrainIcon />, label: 'Серотонин / дофамин' },
        { icon: <SmileIcon />, label: 'Хорошее настроение' },
      ],
    },
    {
      title: '2. СДВГ',
      text: 'Оптимальный уровень D3 помогает контролировать импульсивность и гиперактивность, облегчая социализацию в коллективе.',
      icon: <TargetIcon className="h-7 w-7" />,
      steps: [
        { icon: <ShieldIcon check />, label: 'Самоконтроль' },
        { icon: <TargetIcon />, label: 'Внимание' },
        { icon: <PeopleIcon />, label: 'Социализация', accent: true },
      ],
    },
    {
      title: '3. Качество сна',
      text: 'Регуляция циркадных ритмов (биологические часы) через D3 обеспечивает глубокое восстановление нервной системы ночью, что влияет на бодрость и настроение днём.',
      icon: <MoonIcon className="h-7 w-7" />,
      steps: [
        { icon: <ClockIcon />, label: 'Циркадные ритмы' },
        { icon: <BedIcon />, label: 'Ночное восстановление' },
        { icon: <SunIcon />, label: 'Бодрость днём' },
      ],
    },
  ],
  summary: 'Итог: витамин D3 поддерживает настроение, поведение, социализацию и восстановительный сон ребёнка.',
  source: 'https://pubmed.ncbi.nlm.nih.gov/24558199/',
}

/* ── View renderer ─────────────────────────────────────── */

function CloseX({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

/* Interactive "neuron network" board: bubble buttons → neuron → info panel */
function ViewContent() {
  const [active, setActive] = useState<number | null>(0)
  // 0-2 = когнитивное развитие (сверху), 3-5 = настроение (снизу)
  const mechs = [...cognitive.mechanisms, ...mood.mechanisms]
  const m = active !== null ? mechs[active] : null
  const sumView = active !== null && active >= 3 ? mood : cognitive

  // brain centred; cognitive buttons above it, mood buttons below — all clickable
  const btnGeom = [
    { left: 8, top: 14, w: 132, h: 128 },
    { left: 149, top: 14, w: 132, h: 128 },
    { left: 290, top: 14, w: 132, h: 128 },
    { left: 8, top: 596, w: 132, h: 132 },
    { left: 149, top: 596, w: 132, h: 132 },
    { left: 290, top: 596, w: 132, h: 132 },
  ]
  const dots = [
    { x: 74, y: 142 },
    { x: 215, y: 142 },
    { x: 356, y: 142 },
    { x: 74, y: 596 },
    { x: 215, y: 596 },
    { x: 356, y: 596 },
  ]
  const paths = [
    'M215 254 Q 120 200 74 142',
    'M215 254 L 215 142',
    'M215 254 Q 310 200 356 142',
    'M215 478 Q 120 540 74 596',
    'M215 478 L 215 596',
    'M215 478 Q 310 540 356 596',
  ]
  const brain = { cx: 215, cy: 366, r: 112 }
  // small nodes sitting on each connection line (glow when active)
  const mids = [
    { x: 132, y: 197 },
    { x: 215, y: 197 },
    { x: 298, y: 197 },
    { x: 132, y: 539 },
    { x: 215, y: 539 },
    { x: 298, y: 539 },
  ]

  return (
    <div className="absolute left-[45px] right-[45px] top-[112px] flex h-[974px] flex-col rounded-[28px] bg-white px-[36px] py-[28px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
      {/* Interactive board (fixed 862×770 coordinate space) */}
      <div className="relative w-full" style={{ height: 748 }}>
        {/* Decorative "living nervous system" backdrop (sits behind everything) */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 862 748" fill="none" aria-hidden>
          <defs>
            <radialGradient id="cog-brain-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#21A7A2" stopOpacity="0.13" />
              <stop offset="55%" stopColor="#21A7A2" stopOpacity="0.045" />
              <stop offset="100%" stopColor="#21A7A2" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* soft radial glow anchoring the brain */}
          <ellipse cx="215" cy="366" rx="230" ry="232" fill="url(#cog-brain-glow)" />
          {/* faint neuron branches in the side gaps */}
          <g stroke="#CFE9E6" strokeWidth="1.4" fill="none" opacity="0.75">
            <path d="M104 320 C 58 300 38 258 32 202" />
            <path d="M32 202 C 30 176 16 162 2 158" />
            <path d="M96 412 C 50 432 34 476 30 528" />
            <path d="M326 320 C 372 300 394 258 402 202" />
            <path d="M402 202 C 406 176 420 162 432 158" />
            <path d="M334 412 C 380 432 402 476 408 528" />
          </g>
          {/* synapse nodes on the branch tips */}
          <g fill="#B7E0DC" opacity="0.8">
            <circle cx="2" cy="158" r="3.2" />
            <circle cx="32" cy="202" r="2.6" />
            <circle cx="30" cy="528" r="3" />
            <circle cx="432" cy="158" r="3.2" />
            <circle cx="402" cy="202" r="2.6" />
            <circle cx="408" cy="528" r="3" />
          </g>
          {/* scattered translucent synapse dots */}
          <g fill="#8FD0CB" opacity="0.4">
            <circle cx="70" cy="250" r="2.4" />
            <circle cx="360" cy="250" r="2.2" />
            <circle cx="60" cy="470" r="2.4" />
            <circle cx="372" cy="470" r="2" />
            <circle cx="120" cy="360" r="1.8" />
            <circle cx="312" cy="360" r="1.8" />
            <circle cx="215" cy="366" r="2" opacity="0.6" />
          </g>
        </svg>

        {/* Thin mint links: brain (centre) to each button, with junction nodes */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 862 748" fill="none" aria-hidden>
          {paths.map((d, i) => {
            const on = active === i
            return (
              <path
                key={i}
                d={d}
                stroke={on ? '#21A7A2' : '#CBE4E1'}
                strokeWidth={on ? 3 : 1.6}
                opacity={on ? 1 : 0.8}
                className={on ? 'vf-flow' : ''}
                style={on ? { filter: 'drop-shadow(0 0 4px rgba(33,167,162,0.5))' } : undefined}
              />
            )
          })}
          {/* junction nodes riding on each line */}
          {mids.map((d, i) => {
            const on = active === i
            return (
              <circle
                key={`mid-${i}`}
                cx={d.x}
                cy={d.y}
                r={on ? 4.5 : 2.6}
                fill={on ? '#21A7A2' : '#BFE3E0'}
                opacity={on ? 1 : 0.85}
                style={on ? { filter: 'drop-shadow(0 0 6px rgba(33,167,162,0.85))' } : undefined}
              />
            )
          })}
          {dots.map((d, i) => {
            const on = active === i
            return (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r={on ? 6.5 : 3.5}
                fill={on ? '#21A7A2' : '#8FD0CB'}
                style={on ? { filter: 'drop-shadow(0 0 7px rgba(33,167,162,0.9))' } : undefined}
              />
            )
          })}
        </svg>

        {/* Central animated brain medallion (GIF, dark/light bg removed → floats on mint) */}
        <div
          className="absolute"
          style={{ left: brain.cx - brain.r, top: brain.cy - brain.r, width: brain.r * 2, height: brain.r * 2 }}
        >
          <div
            className="vf-neuron-pulse absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(33,167,162,0.32),rgba(33,167,162,0)_70%)] blur-[6px]"
            style={{ transformBox: 'border-box', transformOrigin: 'center' }}
          />
          {/* static double ring hugging the medallion */}
          <div className="absolute -inset-[5px] rounded-full border-[1.5px] border-[#CFEDEA]" />
          <div className="absolute -inset-[15px] rounded-full border border-[#E3F3F1]" />
          <svg
            className="vf-wheel-spin absolute -inset-8"
            style={{ width: 'calc(100% + 64px)', height: 'calc(100% + 64px)' }}
            viewBox="0 0 300 300"
            fill="none"
            aria-hidden
          >
            <ellipse cx="150" cy="150" rx="143" ry="128" stroke="#BFE6E3" strokeWidth="1.5" strokeDasharray="3 9" opacity="0.85" />
            <ellipse cx="150" cy="150" rx="128" ry="143" stroke="#D6EFEC" strokeWidth="1.2" strokeDasharray="2 10" opacity="0.7" />
            <circle cx="150" cy="7" r="4" fill="#8FD0CB" />
            <circle cx="293" cy="150" r="3" fill="#8FD0CB" />
            <circle cx="150" cy="293" r="3.5" fill="#8FD0CB" />
            <circle cx="7" cy="150" r="3" fill="#8FD0CB" />
          </svg>
          <div className="relative h-full w-full overflow-hidden rounded-full bg-[#EAF8F7] shadow-[0_16px_40px_rgba(24,50,74,0.14),inset_0_2px_6px_rgba(255,255,255,0.9)] ring-2 ring-white">
            <img
              src="/assets/characters/brain.gif"
              alt="Анимированный мозг"
              className="absolute left-1/2 top-1/2 w-[90%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_60%,rgba(234,248,247,0.85)_95%)]" />
          </div>
        </div>

        {/* Six interactive cards: three above the brain, three below — all clickable */}
        {mechs.map((mm, i) => {
          const on = active === i
          const g = btnGeom[i]
          const isTop = i < 3
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`group absolute flex flex-col items-center justify-center gap-2 rounded-[30px] px-3 text-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21A7A2] ${
                on
                  ? 'z-10 scale-[1.04] border-2 border-[#21A7A2] bg-[linear-gradient(135deg,#F1FBFA,#DAF1EE)] shadow-[0_22px_46px_rgba(33,167,162,0.30),inset_0_1px_0_rgba(255,255,255,0.95)]'
                  : 'border border-[#DCEBEA] bg-white shadow-[0_8px_22px_rgba(24,50,74,0.08)] hover:-translate-y-0.5 hover:border-[#BFE3E0] hover:shadow-[0_16px_36px_rgba(33,167,162,0.20)]'
              }`}
              style={{ left: g.left, top: g.top, width: g.w, height: g.h }}
            >
              {/* inner gradient / active under-glow */}
              <span
                className={`pointer-events-none absolute inset-0 rounded-[30px] ${
                  on
                    ? 'bg-[radial-gradient(130%_75%_at_50%_118%,rgba(33,167,162,0.24),transparent_62%)]'
                    : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(233,247,246,0.55))]'
                }`}
              />
              {/* connector on the edge facing the brain */}
              <span
                className={`absolute ${isTop ? '-bottom-[8px]' : '-top-[8px]'} left-1/2 z-10 h-[14px] w-[14px] -translate-x-1/2 rounded-full border-2 border-white transition-all duration-300 ${
                  on ? 'bg-[#21A7A2] shadow-[0_0_10px_rgba(33,167,162,0.85)]' : 'bg-[#CBE4E1]'
                }`}
              />
              <span
                className={`relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full transition-all duration-300 [&>svg]:h-[23px] [&>svg]:w-[23px] ${
                  on
                    ? 'bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_10px_22px_rgba(33,167,162,0.45),0_0_0_5px_rgba(33,167,162,0.12)]'
                    : 'border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2] shadow-[0_4px_12px_rgba(33,167,162,0.14)]'
                }`}
              >
                {mm.icon}
              </span>
              <span className="relative z-10 min-w-0 text-[13.5px] font-extrabold leading-[1.15] text-[#18324A] [overflow-wrap:anywhere]">{mm.title}</span>
            </button>
          )
        })}

        {/* Info panel */}
        <div
          className="absolute overflow-hidden rounded-[28px] border border-[#E9F2F1] bg-white/88 shadow-[0_14px_38px_rgba(24,50,74,0.10)] ring-1 ring-white/60"
          style={{ left: 452, top: 8, width: 410, height: 732 }}
        >
          <div className="h-[6px] w-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] opacity-90" />
          {m ? (
            <div key={active} className="vf-fade-up flex h-[calc(100%-6px)] flex-col px-9 py-8">
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Закрыть"
                className="absolute right-6 top-[28px] flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0E8F8B] shadow-[0_5px_14px_rgba(14,42,59,0.14)] transition hover:bg-[#EAF8F7]"
              >
                <CloseX />
              </button>

              <span className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_12px_28px_rgba(14,42,59,0.22)] [&>svg]:h-11 [&>svg]:w-11">
                {m.icon}
              </span>
              <h3 className="mt-6 pr-10 text-[31px] font-extrabold leading-[1.14] text-[#122536]">{m.title}</h3>
              <p className="mt-5 text-[20.5px] font-semibold leading-[1.52] text-[#28353F]">{m.text}</p>

              <div className="mt-auto">
                <StepScheme steps={m.steps} />
              </div>
            </div>
          ) : (
            <div className="flex h-[calc(100%-6px)] flex-col items-center justify-center px-12 text-center">
              <span className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2] [&>svg]:h-11 [&>svg]:w-11">
                <NeuronIcon />
              </span>
              <p className="mt-5 text-[21px] font-semibold leading-[1.42] text-[#5A6874]">
                Выберите любой пункт вокруг мозга, чтобы увидеть подробности
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Summary — pushed to the bottom, compact */}
      <div className="mt-auto flex items-center gap-4 rounded-[20px] border border-[#CFEDEA] bg-[linear-gradient(135deg,#F1FBFA,#DEF3F0)] px-7 py-[22px] shadow-[0_12px_30px_rgba(33,167,162,0.16)] ring-1 ring-white/60">
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[17px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_10px_24px_rgba(14,42,59,0.20)] [&>svg]:h-[34px] [&>svg]:w-[34px]">
          <ShieldIcon check />
        </span>
        <p className="text-[18.5px] font-semibold leading-[1.36] text-[#14324A]">
          <span className="text-[22px] font-extrabold uppercase tracking-[0.02em] text-[#0E8F8B]">Итог:</span>
          {' '}{sumView.summary.replace('Итог: ', '')}
        </p>
      </div>
    </div>
  )
}

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideCognitive() {
  return (
    <section className="relative h-full overflow-hidden px-[45px]" style={{ color: NAVY }}>
      <header className="absolute left-[45px] top-[40px]">
        <h1 className="font-display text-[34px] font-extrabold leading-[1.05] tracking-tight text-[#18324A]">
          Витамин D3 и когнитивное развитие
        </h1>
      </header>

      <ViewContent />
    </section>
  )
}
