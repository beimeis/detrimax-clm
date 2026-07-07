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

function StepScheme({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-3 flex items-start justify-between">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-start">
          {i > 0 && <span className="mt-[16px] text-[24px] leading-none text-[#B7CBD0]">›</span>}
          <div className="flex w-[104px] flex-col items-center text-center">
            <span
              className={`flex h-[46px] w-[46px] items-center justify-center rounded-full border ${
                s.accent ? 'border-[#FFC15A] bg-[#FFF6E6] text-[#E79A19]' : 'border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]'
              }`}
            >
              {s.icon}
            </span>
            <p className="mt-1.5 text-[11px] font-bold leading-[1.14] text-[#18324A]">{s.label}</p>
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

function ViewContent({ view }: { view: CogView }) {
  return (
    <>
      {/* Left card */}
      <div className="absolute left-[45px] top-[128px] flex h-[986px] w-[418px] flex-col rounded-[24px] bg-white px-7 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3">
          <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2]">
            {view.leftIcon}
          </span>
          <h2 className="text-[23px] font-bold leading-tight text-[#21A7A2]">{view.leftTitle}</h2>
        </div>

        {/* Photo + glow */}
        <div className="relative mx-auto mt-3 h-[352px] w-[300px]">
          <div className="absolute inset-0 rounded-[30px] blur-[6px]" style={{ background: view.glowGrad }} />
          <div className="absolute inset-x-[16px] inset-y-[6px] overflow-hidden rounded-[26px] bg-[#EEF3F8] shadow-[0_12px_30px_rgba(24,50,74,0.14)]">
            <img src={view.photo} alt={view.photoAlt} className="h-full w-full object-cover object-[50%_12%]" draggable={false} />
          </div>
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 300 352" fill="none" aria-hidden>
            <g stroke={view.glowStroke} strokeWidth="1.8" opacity="0.75">
              <path d="M150 40 106 66M150 40l44 26M150 40v-22M106 66l-30-6M194 66l30-6" strokeLinecap="round" />
              <circle cx="150" cy="40" r="4" fill={view.glowStroke} stroke="none" />
              <circle cx="106" cy="66" r="3" fill={view.glowStroke} stroke="none" />
              <circle cx="194" cy="66" r="3" fill={view.glowStroke} stroke="none" />
              <circle cx="76" cy="60" r="2.5" fill={view.glowStroke} stroke="none" />
              <circle cx="224" cy="60" r="2.5" fill={view.glowStroke} stroke="none" />
              <circle cx="150" cy="18" r="2.5" fill={view.glowStroke} stroke="none" />
            </g>
            <g fill={view.glowStroke} opacity="0.85">
              <path d="M60 150l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6L60 150Z" />
              <path d="M244 176l1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4L244 176Z" />
            </g>
          </svg>
        </div>

        {/* Theses */}
        <div className="mt-4 flex flex-1 flex-col justify-center gap-2.5 rounded-[18px] bg-[#EAF8F7] p-5">
          {view.theses.map((t, i) => (
            <div key={i} className="flex items-center gap-3.5">
              <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2] shadow-[0_4px_12px_rgba(33,167,162,0.16)]">
                {t.icon}
              </span>
              <p className="text-[15px] font-bold leading-[1.2] text-[#18324A]">{t.title}</p>
            </div>
          ))}
        </div>

        <p className="mt-3 flex items-center gap-1.5 text-[11.5px] font-medium leading-none text-[#9AA5AF]">
          <span className="text-[#21A7A2]"><DocIcon /></span>
          Источник: <span className="text-[#21A7A2]">{view.source}</span>
        </p>
      </div>

      {/* Right card */}
      <div className="absolute right-[45px] top-[128px] flex h-[986px] w-[472px] flex-col rounded-[24px] bg-white px-7 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3">
          <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
            <BrainIcon />
          </span>
          <div>
            <h2 className="text-[21px] font-bold leading-tight text-[#18324A]">{view.rightTitle}</h2>
            <p className="text-[15px] font-bold leading-tight text-[#21A7A2]">{view.rightSub}</p>
          </div>
        </div>

        {view.mechanisms.map((m, i) => (
          <div key={i} className={`${i === 0 ? 'mt-3.5' : 'mt-3'} rounded-[16px] border border-[#EAEEF1] bg-white p-4 shadow-[0_6px_16px_rgba(24,50,74,0.05)]`}>
            <div className="flex items-center gap-3">
              <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]">
                {m.icon}
              </span>
              <h3 className="text-[17px] font-bold leading-tight text-[#18324A]">{m.title}</h3>
            </div>
            <p className="mt-2 text-[12.5px] font-medium leading-[1.34] text-[#6D7A86]">{m.text}</p>
            <StepScheme steps={m.steps} />
          </div>
        ))}

        <div className="mt-auto flex items-center gap-4 rounded-[16px] bg-[#EAF8F7] px-5 py-3.5">
          <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
            <ShieldIcon check className="h-6 w-6" />
          </span>
          <p className="text-[14px] font-medium leading-[1.3] text-[#18324A]">
            <span className="font-extrabold text-[#0E8F8B]">Итог:</span>
            {' '}{view.summary.replace('Итог: ', '')}
          </p>
        </div>
      </div>
    </>
  )
}

/* ── Slide ─────────────────────────────────────────────── */

type Part = 'cognitive' | 'mood'

export default function SlideCognitive() {
  const [part, setPart] = useState<Part>('cognitive')
  const view = part === 'cognitive' ? cognitive : mood

  return (
    <section className="relative h-full overflow-hidden px-[45px]" style={{ color: NAVY }}>
      <header className="absolute left-[45px] top-[40px]">
        <h1 className="font-display text-[34px] font-extrabold leading-[1.05] tracking-tight text-[#18324A]">
          {part === 'cognitive'
            ? 'Витамин D3 и когнитивное развитие'
            : 'Витамин D3: настроение и социальная адаптация'}
        </h1>
        <p className="mt-1.5 text-[16px] font-medium leading-none text-[#6D7A86]">{view.subtitle}</p>
      </header>

      <ViewContent view={view} />

      {/* Part switcher */}
      <div className="absolute bottom-[30px] left-[45px] flex h-11 items-center gap-3">
        <div className="mr-1 flex items-center gap-1.5">
          <span className={`h-[9px] w-[9px] rounded-full ${part === 'cognitive' ? 'bg-[#21A7A2]' : 'bg-[#D1D5DB]'}`} />
          <span className={`h-[9px] w-[9px] rounded-full ${part === 'mood' ? 'bg-[#21A7A2]' : 'bg-[#D1D5DB]'}`} />
        </div>
        <button
          type="button"
          className={`h-11 cursor-pointer rounded-[12px] px-5 text-[14.5px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 ${part === 'cognitive' ? 'bg-[#21A7A2] text-white shadow-[0_8px_18px_rgba(33,167,162,0.22)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86]'}`}
          onClick={() => setPart('cognitive')}
        >
          🧠 1 · Когнитивное развитие
        </button>
        <button
          type="button"
          className={`h-11 cursor-pointer rounded-[12px] px-5 text-[14.5px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 ${part === 'mood' ? 'bg-[#21A7A2] text-white shadow-[0_8px_18px_rgba(33,167,162,0.22)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86]'}`}
          onClick={() => setPart('mood')}
        >
          🌙 2 · Настроение и адаптация →
        </button>
      </div>

    </section>
  )
}
