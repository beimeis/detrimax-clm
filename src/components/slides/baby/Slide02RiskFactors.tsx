import { useState } from 'react'
import type { ReactNode } from 'react'

const NAVY = '#18324A'
const PURPLE = '#6E5AEF'

type RiskTab = 'mama' | 'gv' | 'sun' | 'growth'

interface RiskBlock {
  title: ReactNode
  text: string
  icon: ReactNode
}

function PregnancyIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M29 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Z" stroke="currentColor" strokeWidth="3" />
      <path d="M20 19c-4 3.1-6 7.6-6 13.4V45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M27 20.5c6 2.4 10.2 8.2 10.2 15.1 0 6.7-4 10.9-9.4 10.9H17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 29c4.6 1.1 7.6 4 8.8 8.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18.2 50h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function FetusIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-9 w-9" fill="none" aria-hidden>
      <path d="M28 8c10.5 0 19 8.5 19 19s-8.5 19-19 19S9 37.5 9 27 17.5 8 28 8Z" stroke="currentColor" strokeWidth="3" />
      <path d="M32.5 19.5c-3.9-3.2-10.5-.8-11.1 4.5-.5 4.2 2.8 7.5 6.8 7.5h3.1c2.7 0 4.9 2.2 4.9 4.9 0 3-2.6 5.2-5.5 4.8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24.4 23.1h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function DropperIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-9 w-9" fill="none" aria-hidden>
      <path d="m34 8 14 14M38 12l-8 8M44 18l-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M31 20 13.5 37.5c-3.1 3.1-1 8.5 3.4 8.5h10.8c1.3 0 2.5-.5 3.4-1.4L48.5 27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 38h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon({ d3 = false }: { d3?: boolean }) {
  return (
    <svg viewBox="0 0 56 56" className="h-9 w-9" fill="none" aria-hidden>
      <path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {d3 ? (
        <path d="M19 30V20h5.2c3 0 5 2 5 5s-2 5-5 5H19Zm16-10v10M32 20h7l-4 4h1.6c2.1 0 3.4 1.2 3.4 3s-1.4 3-3.6 3H32" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-9 w-9" fill="none" aria-hidden>
      <path d="M14 16h28v29H14V16Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M20 10v10M36 10v10M15 25h26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m22 36 4 4 8-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TestTubeDownIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-9 w-9" fill="none" aria-hidden>
      <path d="M18 9h17M22 9v17.5L14.5 42c-1.5 3.2.8 6.9 4.4 6.9h15.2c3.6 0 5.9-3.7 4.4-6.9L31 26.5V9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 38h15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M43 12v18M37 24l6 6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BabyIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-9 w-9" fill="none" aria-hidden>
      <path d="M28 12c7.7 0 14 6.3 14 14v6c0 7.7-6.3 14-14 14s-14-6.3-14-14v-6c0-7.7 6.3-14 14-14Z" stroke="currentColor" strokeWidth="3" />
      <path d="M25 12c0-4 3.2-6 6.8-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 29h.1M34 29h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M23 37c3.4 2.2 6.7 2.2 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function StarShieldIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="m28 18 2.3 5 5.4.6-4 3.7 1 5.3-4.7-2.6-4.7 2.6 1-5.3-4-3.7 5.4-.6L28 18Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
    </svg>
  )
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-11 w-11" fill="none" aria-hidden>
      <path d="M28 7c-8 0-14.5 6.4-14.5 14.2 0 5.2 2.7 8.6 6.1 11.7 1.8 1.6 2.9 3.8 2.9 6.2h11c0-2.4 1.1-4.6 2.9-6.2 3.4-3.1 6.1-6.5 6.1-11.7C42.5 13.4 36 7 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M22.5 45h11M24.5 50h7M28 14v6M19 22h6M31 22h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function SunIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="3" /><path d="M28 6v8M28 42v8M6 28h8M42 28h8M12.4 12.4l5.7 5.7M37.9 37.9l5.7 5.7M43.6 12.4l-5.7 5.7M18.1 37.9l-5.7 5.7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function SmileIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 48c11 0 20-9 20-20S39 8 28 8 8 17 8 28s9 20 20 20Z" stroke="currentColor" strokeWidth="3" /><path d="M20 24h.1M36 24h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /><path d="M19.5 34c5.5 5 11.5 5 17 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function HeartIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 47S10 36.5 10 22.4C10 15.7 14.2 11 20.2 11c3.6 0 6.4 1.8 7.8 4.4C29.4 12.8 32.2 11 35.8 11 41.8 11 46 15.7 46 22.4 46 36.5 28 47 28 47Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg>
}
function HomeSunIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M10 29 28 14l18 15v18H15V29" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 47V34h10v13M38 9v6M35 12h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function ClothesIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M21 10h14l4 5 8 3-5 12-5-2v20H19V28l-5 2-5-12 8-3 4-5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M23 11c1.4 3 3 4.5 5 4.5s3.6-1.5 5-4.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function MotherBabyIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M25 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" stroke="currentColor" strokeWidth="3" /><path d="M18 19c-4.5 3-6.8 8.1-6.8 15.2V46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M25 21c5.6 3.1 8.6 8.3 8.6 15.2 0 6.4-4.1 10.3-9.8 10.3H15.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M39 28c4.7 0 8.5 3.8 8.5 8.5S43.7 45 39 45s-8.5-3.8-8.5-8.5S34.3 28 39 28Z" stroke="currentColor" strokeWidth="3" /><path d="M36 37h.1M42 37h.1M36.5 41c1.7 1.2 3.4 1.2 5 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
}

function D3DropIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7s14 15.3 14 26.2C42 41.1 35.7 48 28 48s-14-6.9-14-14.8C14 22.3 28 7 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M20.5 34V23h5.4c3.2 0 5.2 2.2 5.2 5.5S29.1 34 25.9 34h-5.4Zm15-11v11M33 23h7l-4 4h1.6c2 0 3.3 1.2 3.3 3s-1.4 4-3.6 4H33" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function BottleNoIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M24 8h8v7l-3 4v22c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6V19l-3-4V8h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 27h12M42 16l-24 24M35 18c5.7 2 9.8 7.4 9.8 13.7 0 8-6.5 14.5-14.5 14.5-4.7 0-8.9-2.2-11.5-5.7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function WarningBabyIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M25 12c6.9 0 12.5 5.6 12.5 12.5v5c0 6.9-5.6 12.5-12.5 12.5S12.5 36.4 12.5 29.5v-5C12.5 17.6 18.1 12 25 12Z" stroke="currentColor" strokeWidth="3" /><path d="M22 27h.1M28 27h.1M21 34c2.5 1.5 5.5 1.5 8 0" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /><path d="M42 24l9 16H33l9-16Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M42 31v4M42 39h.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function GrowthChartIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M10 44h36M14 42V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M18 37c5-8 9-11 14-13l5 4 8-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M39 16h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function RulerIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M13 42 42 13l8 8-29 29-8-8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M24 35l-4-4M30 29l-3-3M36 23l-4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function ScaleIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M13 25h30l-3 20H16l-3-20Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M18 25c0-7.2 4.5-13 10-13s10 5.8 10 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M28 25l5-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function BoneIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M17 20a7 7 0 1 1 9-9 7 7 0 0 1 9 9l-15 15a7 7 0 1 1-9-9l15-15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M30 36a7 7 0 1 0 9 9 7 7 0 1 0 9-9L33 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ActiveBabyIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" stroke="currentColor" strokeWidth="3" /><path d="M19 21c5 0 8.8 2.1 11.5 6.2l3.5 5.3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 30h14M24 29l-5 12M32 33l9 8M17 42h9M38 43h9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function BoneCaIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M15 21a6 6 0 1 1 8-8 6 6 0 0 1 8 8L20 32a6 6 0 1 1-8-8l11-11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M33 35c1.5-2.6 4.9-4.1 8.1-2.8 4 1.6 5.7 6 4.1 10-1.6 4-6 5.7-10 4.1-2.2-.9-3.7-2.6-4.4-4.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M39 39h4M41 37v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
}

function WarningTriangleIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 8 50 46H6L28 8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M28 21v12M28 40h.1" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
}

function AccentIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white text-[#6E5AEF] shadow-[0_10px_25px_rgba(24,50,74,0.12)]">
      <div className="text-[#FFA726] [--tw-text-opacity:1]" style={{ color: PURPLE }}>
        {children}
      </div>
    </div>
  )
}

function RiskIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white text-[#F28C00] shadow-[0_8px_18px_rgba(24,50,74,0.08)]">
      {children}
    </div>
  )
}

function SunAccentIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#F6B24B] bg-white text-[#F28C00] shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
      {children}
    </div>
  )
}

function GvAccentIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#E4E8EB] bg-white text-[#5B4BD6] shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
      <div className="relative">
        {children}
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#FFA726]" />
      </div>
    </div>
  )
}

function GvListIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full bg-white text-[#5B4BD6] shadow-[0_6px_14px_rgba(0,0,0,0.05)]">
      <div className="relative">
        {children}
        <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-[#FFA726]" />
      </div>
    </div>
  )
}

const riskBlocks: RiskBlock[] = [
  {
    title: <>Дефицит D у матери<br />во время беременности</>,
    text: 'Недостаточный уровень витамина D у матери — частая и значимая проблема.',
    icon: <PregnancyIcon />,
  },
  {
    title: <>Низкий уровень 25(OH)D у матери<br />снижает запас витамина D<br />у плода и новорожденного</>,
    text: 'Меньше витамина D поступает через плаценту и грудное молоко.',
    icon: <TestTubeDownIcon />,
  },
  {
    title: <>Младенец рождается<br />с ограниченным стартовым депо</>,
    text: 'Низкий стартовый запас повышает риск дефицита в первые месяцы жизни.',
    icon: <BabyIcon />,
  },
  {
    title: <>В первые месяцы жизни<br />особенно важна профилактика<br />витамина D3</>,
    text: 'Она помогает сформировать крепкий иммунитет, кости и здоровое развитие.',
    icon: <ShieldIcon d3 />,
  },
]

function MamaContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#FFF4E1] text-[#F28C00]">
            <PregnancyIcon className="h-9 w-9" />
          </div>
          <div>
            <h2 className="text-[22px] font-bold leading-tight text-[#18324A]">Пренатальный фактор</h2>
            <p className="mt-1 text-[15px] font-medium leading-tight text-[#6D7A86]">Роль материнского статуса</p>
          </div>
        </div>

        <div className="relative mt-5 h-[560px] w-full overflow-visible">
          <div className="absolute left-1/2 top-[6px] h-[520px] w-[350px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#FFF4E8] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]">
            <img
              src="/assets/characters/mother-infant-risk.png"
              alt="Мать с младенцем"
              className="h-full w-full object-cover object-center"
              draggable={false}
            />
            <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-t from-white via-white/82 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[32px] top-[32px] h-[430px] w-[330px]" viewBox="0 0 330 430" fill="none" aria-hidden>
            <path d="M66 84C22 142 16 263 78 338" stroke="#F6B24B" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M264 84c44 58 50 179-12 254" stroke="#6E5AEF" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="84" r="4" fill="#F6B24B" />
            <circle cx="264" cy="84" r="4" fill="#6E5AEF" />
            <circle cx="78" cy="338" r="4" fill="#F6B24B" />
            <circle cx="252" cy="338" r="4" fill="#6E5AEF" />
          </svg>

          <div className="absolute left-[-8px] top-[52px] flex w-[126px] flex-col items-center text-center">
            <AccentIcon><FetusIcon /></AccentIcon>
            <p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#18324A]">Запасы D3 у плода</p>
          </div>
          <div className="absolute right-[-8px] top-[52px] flex w-[126px] flex-col items-center text-center">
            <AccentIcon><DropperIcon /></AccentIcon>
            <p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#18324A]">25(OH)D матери</p>
          </div>
          <div className="absolute left-[-8px] bottom-[78px] flex w-[126px] flex-col items-center text-center">
            <AccentIcon><ShieldIcon /></AccentIcon>
            <p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#18324A]">Стартовый запас</p>
          </div>
          <div className="absolute right-[-8px] bottom-[78px] flex w-[126px] flex-col items-center text-center">
            <AccentIcon><CalendarIcon /></AccentIcon>
            <p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#18324A]">Профилактика с рождения</p>
          </div>
        </div>

        <div className="mt-2 flex h-[130px] items-start gap-4 rounded-[16px] border border-[#D9DEE5] bg-white p-[22px]">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#FFA726] text-[22px] font-bold leading-none text-white">
            1
          </div>
          <p className="text-[17px] font-bold leading-[1.26] text-[#18324A]">
            Статус витамина D<br />у матери определяет стартовый<br />запас младенца.
          </p>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#FFF4E1] text-[#F28C00]">
            <StarShieldIcon />
          </div>
          <h2 className="text-[22px] font-bold leading-tight text-[#18324A]">Почему это важно?</h2>
        </div>
        <div className="mt-5 h-px w-full bg-[#E4E8EB]" />

        <div className="mt-5 space-y-4">
          {riskBlocks.map((block, index) => (
            <article key={index} className="flex min-h-[118px] items-center gap-[18px] rounded-[16px] bg-[#F8F8F8] px-5 py-[18px]">
              <RiskIcon>{block.icon}</RiskIcon>
              <div className="min-w-0">
                <h3 className="text-[16px] font-bold leading-[1.18] text-[#18324A]">{block.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.28] text-[#6D7A86]">{block.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex gap-[18px] rounded-[16px] border-[1.5px] border-[#F6B24B] bg-[#FFF9EF] p-[22px]">
          <div className="shrink-0 text-[#F28C00]"><BulbIcon /></div>
          <div>
            <p className="text-[15px] font-bold leading-tight text-[#F28C00]">Главный вывод</p>
            <p className="mt-2 text-[18px] font-bold leading-[1.22] text-[#18324A]">
              Первые 1000 дней жизни начинаются<br />ещё до рождения.
            </p>
            <p className="mt-2 text-[15px] font-bold leading-[1.25] text-[#F28C00]">
              Достаточность витамина D у матери —<br />ключ к здоровью ребёнка сегодня<br />и в будущем.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}


function GvContent() {
  const gvBlocks: Array<{ icon: ReactNode; title: ReactNode; text: string }> = [
    {
      icon: <D3DropIcon />,
      title: <>Грудное молоко содержит мало<br />витамина D</>,
      text: 'Даже у здоровой матери его количества\nобычно недостаточно для покрытия\nпотребности младенца.',
    },
    {
      icon: <MotherBabyIcon />,
      title: <>Статус матери влияет на содержание<br />витамина D</>,
      text: 'При дефиците у матери уровень\nвитамина D в грудном молоке ещё ниже.',
    },
    {
      icon: <WarningBabyIcon />,
      title: <>Исключительно грудное<br />вскармливание повышает риск<br />недостатка</>,
      text: 'Без профилактики ребёнок быстро\nрасходует стартовые запасы витамина D.',
    },
    {
      icon: <ShieldIcon d3 />,
      title: <>Профилактика витамином D3<br />необходима с рождения</>,
      text: 'Регулярный приём помогает поддерживать\nнормальный уровень витамина D\nи развитие костной системы.',
    },
  ]

  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#F0EEFF] text-[#5B4BD6]">
            <MotherBabyIcon />
          </div>
          <div>
            <h2 className="text-[23px] font-bold leading-tight text-[#18324A]">Грудное вскармливание</h2>
            <p className="mt-1 text-[17px] font-medium leading-[1.35] text-[#6D7A86]">Низкое содержание витамина D<br />в грудном молоке</p>
          </div>
        </div>

        <div className="relative mt-4 h-[558px] w-full overflow-visible">
          <div className="absolute left-1/2 top-[4px] h-[520px] w-[350px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#FFF4E8] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72)]">
            <img src="/assets/characters/mother-infant-risk.png" alt="Мама и младенец" className="h-full w-full object-cover object-center" draggable={false} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(255,167,38,0.18),rgba(255,255,255,0)_42%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-t from-white via-white/82 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[32px] top-[34px] h-[430px] w-[330px]" viewBox="0 0 330 430" fill="none" aria-hidden>
            <path d="M66 84C22 142 16 263 78 338" stroke="#F6B24B" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M264 84c44 58 50 179-12 254" stroke="#5B4BD6" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="84" r="4" fill="#F6B24B" />
            <circle cx="264" cy="84" r="4" fill="#5B4BD6" />
            <circle cx="78" cy="338" r="4" fill="#F6B24B" />
            <circle cx="252" cy="338" r="4" fill="#5B4BD6" />
          </svg>

          <div className="absolute left-[-10px] top-[50px] flex w-[132px] flex-col items-center text-center"><GvAccentIcon><D3DropIcon /></GvAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Низкое содержание D3<br />в грудном молоке</p></div>
          <div className="absolute right-[-10px] top-[50px] flex w-[132px] flex-col items-center text-center"><GvAccentIcon><MotherBabyIcon /></GvAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Зависимость от<br />статуса матери</p></div>
          <div className="absolute left-[-10px] bottom-[76px] flex w-[132px] flex-col items-center text-center"><GvAccentIcon><BottleNoIcon /></GvAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Эксклюзивное ГВ<br />без добавок</p></div>
          <div className="absolute right-[-10px] bottom-[76px] flex w-[132px] flex-col items-center text-center"><GvAccentIcon><ShieldIcon /></GvAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Профилактика<br />с рождения</p></div>
        </div>

        <div className="mt-2 flex items-start gap-[18px] rounded-[16px] border border-[#D9DEE5] bg-white p-6">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-2 border-[#FFA726] text-[20px] font-bold leading-none text-[#FFA726]">i</div>
          <p className="text-[18px] font-bold leading-[1.38] text-[#18324A]">Даже при полноценном грудном<br />вскармливании младенцу требуется<br />дополнительный витамин D.</p>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#FFF4E1] text-[#F28C00]">
            <StarShieldIcon />
          </div>
          <h2 className="text-[24px] font-bold leading-tight text-[#18324A]">Почему это важно?</h2>
        </div>
        <div className="mb-[30px] mt-6 h-px w-full bg-[#E4E8EB]" />

        <div className="space-y-[18px]">
          {gvBlocks.map((block, index) => (
            <article key={index} className="flex min-h-[118px] items-start gap-5 rounded-[16px] border border-[#F0F0F0] bg-[#F8F8F8] px-5 py-[18px] shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
              <GvListIcon>{block.icon}</GvListIcon>
              <div className="min-w-0">
                <h3 className="text-[16px] font-bold leading-[1.18] text-[#18324A]">{block.title}</h3>
                <p className="mt-2 whitespace-pre-line text-[13px] font-medium leading-[1.26] text-[#6D7A86]">{block.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex gap-[18px] rounded-[16px] border-[1.5px] border-[#F6B24B] bg-[#FFF9EF] p-[22px]">
          <div className="shrink-0 text-[#FFA726]"><BulbIcon /></div>
          <div>
            <p className="text-[17px] font-bold leading-tight text-[#F28C00]">Главный вывод</p>
            <p className="mt-2 text-[17px] font-bold leading-[1.22] text-[#18324A]">Грудное вскармливание — лучший<br />вид питания, но по витамину D оно<br />не покрывает потребность младенца.</p>
            <p className="mt-2 text-[16px] font-bold leading-[1.25] text-[#F28C00]">Профилактика D3 нужна с первых<br />дней жизни.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function SunContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#FFF4E1] text-[#F28C00]"><SunIcon /></div>
          <div>
            <h2 className="text-[23px] font-bold leading-tight text-[#18324A]">Инсоляция</h2>
            <p className="mt-1 text-[15px] font-medium leading-tight text-[#6D7A86]">Роль солнечного света<br />в выработке витамина D</p>
          </div>
        </div>

        <div className="relative mt-5 h-[548px] w-full overflow-visible">
          <div className="absolute left-1/2 top-[6px] h-[500px] w-[350px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#FFF4E8] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]">
            <img src="/assets/characters/baby-audience.png" alt="Младенец на солнце" className="h-full w-full object-cover object-[50%_32%]" draggable={false} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_16%,rgba(255,212,92,0.32),rgba(255,255,255,0)_40%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-white via-white/82 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[32px] top-[32px] h-[418px] w-[330px]" viewBox="0 0 330 418" fill="none" aria-hidden>
            <path d="M66 84C22 142 16 256 78 326" stroke="#F6B24B" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M264 84c44 58 50 172-12 242" stroke="#FFA726" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="84" r="4" fill="#F6B24B" /><circle cx="264" cy="84" r="4" fill="#FFA726" /><circle cx="78" cy="326" r="4" fill="#F6B24B" /><circle cx="252" cy="326" r="4" fill="#FFA726" />
          </svg>

          <div className="absolute left-[-8px] top-[52px] flex w-[126px] flex-col items-center text-center"><SunAccentIcon><SunIcon /></SunAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Естественный<br />источник<br />витамина D</p></div>
          <div className="absolute right-[-8px] top-[52px] flex w-[126px] flex-col items-center text-center"><SunAccentIcon><ShieldIcon /></SunAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Поддержка<br />иммунитета</p></div>
          <div className="absolute left-[-8px] bottom-[70px] flex w-[126px] flex-col items-center text-center"><SunAccentIcon><SmileIcon /></SunAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Здоровое<br />развитие<br />костей</p></div>
          <div className="absolute right-[-8px] bottom-[70px] flex w-[126px] flex-col items-center text-center"><SunAccentIcon><HeartIcon /></SunAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Общее<br />благополучие<br />ребенка</p></div>
        </div>

        <div className="mt-4 flex items-start gap-[14px] rounded-[16px] border border-[#D9DEE5] bg-white p-[22px]">
          <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#FFA726] text-[20px] font-bold leading-none text-[#FFA726]">1</div>
          <p className="text-[16px] font-medium leading-[1.38] text-[#18324A]"><strong>Солнечный свет запускает синтез<br />витамина D3 в коже.</strong><br /><br />Но в реальной жизни этого чаще всего<br />недостаточно.</p>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4"><div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#FFF4E1] text-[#F28C00]"><StarShieldIcon /></div><h2 className="text-[22px] font-bold leading-tight text-[#18324A]">Почему это важно?</h2></div>
        <div className="mt-5 h-px w-full bg-[#E4E8EB]" />
        <div className="mt-5 space-y-4">
          {[
            [<HomeSunIcon />, 'Младенцы мало бывают на солнце', 'Большую часть дня проводят в помещении,\nна прогулках их защищают от солнца\nради безопасности.'],
            [<ClothesIcon />, <>Плотная одежда и сезонность<br />снижают синтез D3 в коже</>, 'Закрытая одежда, холодное время года\nи короткий световой день уменьшают\nвоздействие солнечных лучей.'],
            [<HomeSunIcon />, <>Закрытые помещения<br />и низкая инсоляция</>, 'В квартирах, офисах и детских учреждениях\nсолнечного света недостаточно для\nестественной выработки витамина D.'],
            [<ShieldIcon d3 />, <>Профилактика помогает<br />компенсировать недостаток<br />солнечного синтеза</>, 'Дополнительный приём витамина D\nобеспечивает организм ребенка\nнеобходимым уровнем.'],
          ].map(([icon, title, text], index) => (
            <article key={index} className="flex min-h-[112px] items-start gap-[18px] rounded-[16px] border border-[#F0F0F0] bg-[#F8F8F8] px-5 py-[18px] shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
              <RiskIcon>{icon as ReactNode}</RiskIcon>
              <div className="min-w-0"><h3 className="text-[16px] font-bold leading-[1.18] text-[#18324A]">{title}</h3><p className="mt-2 whitespace-pre-line text-[13px] font-medium leading-[1.26] text-[#6D7A86]">{text}</p></div>
            </article>
          ))}
        </div>
        <div className="mt-5 flex gap-[18px] rounded-[16px] border-[1.5px] border-[#F6B24B] bg-[#FFF9EF] p-[22px]"><div className="shrink-0 text-[#FFA726]"><BulbIcon /></div><div><p className="text-[15px] font-bold leading-tight text-[#F28C00]">Главный вывод</p><p className="mt-2 text-[18px] font-bold leading-[1.22] text-[#18324A]">Современный образ жизни ограничивает<br />доступ к солнцу.</p><p className="mt-2 text-[15px] font-bold leading-[1.25] text-[#F28C00]">Дополнительный приём витамина D —<br />важная часть заботы о здоровье ребёнка<br />с первых дней жизни.</p></div></div>
      </div>
    </>
  )
}


function GrowthContent() {
  const growthBlocks: Array<{ icon: ReactNode; title: ReactNode; text: string }> = [
    {
      icon: <GrowthChartIcon />,
      title: <>1. Первый год — время бурного роста</>,
      text: 'В первый год жизни масса тела\nи длина костей быстро увеличиваются\nв разы.',
    },
    {
      icon: <BoneCaIcon />,
      title: <>2. Растущий скелет требует ресурсов</>,
      text: 'Для построения костей необходимы\nкальций, фосфор и витамин D3,\nкоторый обеспечивает их усвоение.',
    },
    {
      icon: <WarningTriangleIcon />,
      title: <>3. Дефицит при высокой потребности<br />быстро приводит к недостаточности</>,
      text: 'При недостатке витамина D3 потребность\nорганизма не покрывается, что повышает\nриск дефицита и его последствий.',
    },
    {
      icon: <ShieldIcon d3 />,
      title: <>4. Профилактика — залог правильного<br />роста и развития</>,
      text: 'Регулярный приём витамина D3\nподдерживает гармоничный рост\nи правильную минерализацию костей.',
    },
  ]

  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#F0EEFF] text-[#5B4BD6]">
            <GrowthChartIcon />
          </div>
          <div>
            <h2 className="text-[23px] font-bold leading-tight text-[#18324A]">Физиологический фактор</h2>
            <p className="mt-1 text-[16px] font-medium leading-[1.35] text-[#6D7A86]">Высокая скорость роста</p>
          </div>
        </div>

        <div className="relative mt-5 h-[548px] w-full overflow-visible">
          <div className="absolute left-1/2 top-[4px] h-[510px] w-[350px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#FFF4E8] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72)]">
            <img src="/assets/characters/baby-audience.png" alt="Активный младенец" className="h-full w-full object-cover object-[50%_42%]" draggable={false} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,167,38,0.17),rgba(255,255,255,0)_42%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[155px] bg-gradient-to-t from-white via-white/82 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[32px] top-[32px] h-[420px] w-[330px]" viewBox="0 0 330 420" fill="none" aria-hidden>
            <path d="M66 84C22 142 16 258 78 330" stroke="#F6B24B" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M264 84c44 58 50 174-12 246" stroke="#5B4BD6" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="84" r="4" fill="#F6B24B" />
            <circle cx="264" cy="84" r="4" fill="#5B4BD6" />
            <circle cx="78" cy="330" r="4" fill="#F6B24B" />
            <circle cx="252" cy="330" r="4" fill="#5B4BD6" />
          </svg>

          <div className="absolute left-[-10px] top-[50px] flex w-[132px] flex-col items-center text-center"><GvAccentIcon><RulerIcon /></GvAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Быстрый<br />рост костей<br />и тканей</p></div>
          <div className="absolute right-[-10px] top-[50px] flex w-[132px] flex-col items-center text-center"><GvAccentIcon><ScaleIcon /></GvAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Увеличение<br />массы тела</p></div>
          <div className="absolute left-[-10px] bottom-[70px] flex w-[132px] flex-col items-center text-center"><GvAccentIcon><BoneIcon /></GvAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Формирование<br />костной ткани</p></div>
          <div className="absolute right-[-10px] bottom-[70px] flex w-[132px] flex-col items-center text-center"><GvAccentIcon><ActiveBabyIcon /></GvAccentIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Развитие<br />двигательной<br />активности</p></div>
        </div>

        <div className="mt-4 flex items-start gap-[18px] rounded-[16px] border border-[#D9DEE5] bg-white p-6">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-2 border-[#FFA726] text-[20px] font-bold leading-none text-[#FFA726]">i</div>
          <p className="text-[18px] font-bold leading-[1.45] text-[#18324A]">Темпы роста наиболее высоки<br />в первые 12 месяцев жизни ребёнка.</p>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#FFF4E1] text-[#F28C00]">
            <StarShieldIcon />
          </div>
          <h2 className="text-[24px] font-bold leading-tight text-[#18324A]">Почему это важно?</h2>
        </div>
        <div className="mb-[24px] mt-6 h-px w-full bg-[#E4E8EB]" />

        <div className="space-y-4">
          {growthBlocks.map((block, index) => (
            <article key={index} className="flex min-h-[116px] items-start gap-5 rounded-[16px] border border-[#F0F0F0] bg-[#F8F8F8] px-5 py-[18px] shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
              <GvListIcon>{block.icon}</GvListIcon>
              <div className="min-w-0">
                <h3 className="text-[16px] font-bold leading-[1.18] text-[#18324A]">{block.title}</h3>
                <p className="mt-2 whitespace-pre-line text-[13px] font-medium leading-[1.25] text-[#6D7A86]">{block.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex gap-[18px] rounded-[16px] border-[1.5px] border-[#F6B24B] bg-[#FFF9EF] p-[22px]">
          <div className="shrink-0 text-[#FFA726]"><BulbIcon /></div>
          <div>
            <p className="text-[17px] font-bold leading-tight text-[#F28C00]">Главный вывод</p>
            <p className="mt-2 text-[17px] font-bold leading-[1.22] text-[#18324A]">Высокая скорость роста в первый год<br />жизни делает профилактический приём<br />витамина D3 необходимым условием<br />для крепкого скелета и здоровья ребёнка<br />в будущем.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function PlaceholderContent({ label }: { label: string }) {
  return (
    <div className="absolute left-[35px] right-[35px] top-[96px] flex h-[930px] items-center justify-center rounded-[22px] bg-white p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
      <p className="text-[24px] font-bold leading-tight text-[#18324A]">{label}: контент будет добавлен следующим промтом</p>
    </div>
  )
}

const riskTabs: Array<{ id: RiskTab; label: string; placeholder: string }> = [
  { id: 'mama', label: '🤰 Мама', placeholder: 'mama' },
  { id: 'gv', label: '🍼 ГВ', placeholder: 'gv' },
  { id: 'sun', label: '☀️ Солнце', placeholder: 'sun' },
  { id: 'growth', label: '📈 Рост', placeholder: 'growth' },
]

export default function Slide02RiskFactors() {
  const [activeRiskTab, setActiveRiskTab] = useState<RiskTab>('growth')

  const placeholder = riskTabs.find((tab) => tab.id === activeRiskTab)?.placeholder ?? activeRiskTab

  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[36px] font-bold leading-[1.08] tracking-normal text-[#18324A]">
          Факторы риска дефицита
        </h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">
          Почему младенцы в группе риска
        </p>
      </header>

      {activeRiskTab === 'mama' ? <MamaContent /> : activeRiskTab === 'gv' ? <GvContent /> : activeRiskTab === 'sun' ? <SunContent /> : activeRiskTab === 'growth' ? <GrowthContent /> : <PlaceholderContent label={placeholder} />}

      <div className="absolute left-[35px] top-[1082px] flex h-11 items-center gap-3">
        {riskTabs.map((tab) => {
          const isActive = activeRiskTab === tab.id
          return (
            <button
              key={tab.id}
              className={`h-11 cursor-pointer rounded-[12px] px-[22px] text-[16px] font-bold transition duration-200 ease-in-out ${isActive ? 'bg-[#FFA726] text-white shadow-[0_8px_20px_rgba(255,167,38,0.25)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86] shadow-[0_6px_14px_rgba(0,0,0,0.05)] hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]'}`}
              type="button"
              onClick={() => setActiveRiskTab(tab.id)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/38 backdrop-blur-[1px]" />
    </section>
  )
}
