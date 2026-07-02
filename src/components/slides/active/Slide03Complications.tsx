import { useState } from 'react'
import type { ReactNode } from 'react'

const NAVY = '#18324A'

type StageTab = 'early' | 'late'

function BatteryIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <rect x="8" y="18" width="36" height="22" rx="5" stroke="currentColor" strokeWidth="3" />
      <path d="M46 25h4v8h-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 29h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BrainIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M21 43c-5.8 0-10.5-4.5-10.5-10.1 0-3.4 1.7-6.3 4.2-8.2-.4-1.1-.7-2.3-.7-3.6 0-4.7 3.8-8.6 8.6-8.6 1.4-3.7 5-6.4 9.2-6.4 5.4 0 9.8 4.4 9.8 9.8v.9c3.9 1.4 6.7 5.1 6.7 9.5 0 5.6-4.5 10.1-10.1 10.1H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 14v34M19 28h9M28 34h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon({ className = 'h-8 w-8', check = false }: { className?: string; check?: boolean }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {check && <path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-7 w-7" fill="none" aria-hidden>
      <path d="M28 25v14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M28 17h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function ChildActivityIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M30 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z" stroke="currentColor" strokeWidth="3" />
      <path d="m23 19 8 8 9-3M23 20l-6 8M30 28l-4 10-10 7M32 29l6 8 7 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChartIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M10 45h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 38V27M28 38V18M40 38V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 13h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 29c7-.6 14.5-4.4 24-16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function WarningIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 8 50 46H6L28 8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M28 22v11" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M28 40h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function BoneIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M18.5 20.5 35.5 37.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16.5 24c-3.2 1-6.6-.9-7.5-4.1-.8-3 .8-6.2 3.6-7.4-.2-3.1 1.9-5.9 5-6.8 3.3-1 6.7.9 7.7 4.2.5 1.8.1 3.6-.8 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39.5 32c3.2-1 6.6.9 7.5 4.1.8 3-.8 6.2-3.6 7.4.2 3.1-1.9 5.9-5 6.8-3.3 1-6.7-.9-7.7-4.2-.5-1.8-.1-3.6.8-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ToothIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M19.2 8.8c3.6 0 5.5 2 8.8 2s5.2-2 8.8-2c6 0 9.4 4.7 8.5 11.5-.8 6.3-4 10.4-5.1 17.4-.8 5.4-2.8 10.5-6.3 10.5-3 0-3.2-4.8-4-8.3-.5-2.1-1.1-3.3-2-3.3s-1.5 1.2-2 3.3c-.8 3.5-1 8.3-4 8.3-3.5 0-5.5-5.1-6.3-10.5-1.1-7-4.3-11.1-5.1-17.4-.9-6.8 2.5-11.5 8.5-11.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M23 17c3.3 1.6 6.7 1.6 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function LegsIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M21 9c-2.5 9.5-2.2 18.4 1 26.8l-7.5 8.7c-1.5 1.7-.3 4.5 2 4.5h7.8c1.5 0 2.8-.8 3.5-2.1l3.1-6.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 9c2.5 9.5 2.2 18.4-1 26.8l7.5 8.7c1.5 1.7.3 4.5-2 4.5h-7.8c-1.5 0-2.8-.8-3.5-2.1l-3.1-6.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RibsIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 9v38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 16c-8 0-14 4.3-16.5 11M28 16c8 0 14 4.3 16.5 11M28 25c-7 0-12.4 3.7-14.6 9.2M28 25c7 0 12.4 3.7 14.6 9.2M28 34c-5.7 0-10.1 2.9-12 7M28 34c5.7 0 10.1 2.9 12 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 12h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function HeadGrowthIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M30 8c-8.4 0-15.2 6.3-15.2 14.2 0 4.5 2.2 8.5 5.6 11.1V45h16v-8.2c5.1-2.2 8.7-7.2 8.7-13 0-8.7-6.8-15.8-15.1-15.8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M24 24h13M31 17v14M38 14h7v7M30 30c4.6-3.8 9.4-8.8 15-16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function D3Icon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="18" stroke="currentColor" strokeWidth="3" />
      <path d="M17 32V22h5.4c3.1 0 5.1 2 5.1 5s-2 5-5.1 5H17Zm18-10v10M32 22h8l-4.5 4h1.8c2.3 0 3.8 1.2 3.8 3s-1.5 3-3.9 3H32" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCircle({ children, orange = false }: { children: ReactNode; orange?: boolean }) {
  return (
    <div className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full border ${orange ? 'border-[#FFA726] bg-[#FFF4E0] text-[#FFA726]' : 'border-[#21A7A2] bg-[#EAF8F7] text-[#21A7A2]'}`}>
      {children}
    </div>
  )
}

const symptoms = [
  { title: 'Усталость и слабость', icon: <BatteryIcon /> },
  { title: 'Снижение концентрации', icon: <BrainIcon /> },
  { title: 'Частые ОРВИ', icon: <ShieldIcon /> },
]

const lateCategories = [
  { title: 'Рахит', icon: <RibsIcon /> },
  { title: 'Деформация ног', icon: <LegsIcon /> },
  { title: 'Задержка развития', icon: <HeadGrowthIcon /> },
]

function EarlyContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[90px] h-[990px] w-[390px] rounded-[22px] bg-white px-6 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[23px] font-bold leading-tight text-[#18324A]">Как проявляется дефицит?</h2>

        <div className="relative mx-auto mt-6 h-[330px] w-[320px]">
          <svg className="pointer-events-none absolute left-[24px] top-[18px] h-[250px] w-[270px]" viewBox="0 0 270 250" fill="none" aria-hidden>
            <path d="M50 82C58 24 210 23 221 86" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 9" strokeLinecap="round" />
            <path d="M50 82c-42 69 23 143 85 143s129-75 86-139" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 9" strokeLinecap="round" />
          </svg>
          <div className="absolute left-1/2 top-[58px] h-[250px] w-[250px] -translate-x-1/2 overflow-hidden rounded-full bg-[#F7F3ED] shadow-[0_10px_24px_rgba(24,50,74,0.08)]">
            <img src="/assets/characters/active-audience-schoolboy.png" alt="Школьник за партой" className="h-full w-full object-cover object-[50%_34%]" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[72px] bg-gradient-to-t from-white/95 to-transparent" />
          </div>
          <div className="absolute left-[2px] top-[54px]"><IconCircle><BatteryIcon /></IconCircle></div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2"><IconCircle><BrainIcon /></IconCircle></div>
          <div className="absolute right-[2px] top-[54px]"><IconCircle><ShieldIcon /></IconCircle></div>
        </div>

        <p className="mt-2 text-center text-[14px] font-medium leading-[1.35] text-[#6D7A86]">
          Дефицит витамина D3 может проявляться<br />поэтапно — от лёгких симптомов к осложнениям.
        </p>

        <div className="mt-7">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-[48px] right-[48px] top-[19px] h-px bg-[#E4E8EB]" />
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative z-10 flex w-[104px] flex-col items-center text-center">
                <div className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[16px] font-bold ${n === 1 ? 'bg-[#21A7A2] text-white' : 'border border-[#D9DEE5] bg-white text-[#6D7A86]'}`}>{n}</div>
                <p className={`mt-2 text-[11px] font-bold leading-[1.15] ${n === 1 ? 'text-[#21A7A2]' : 'text-[#6D7A86]'}`}>
                  {n === 1 ? 'Ранние признаки' : n === 2 ? 'Функциональные нарушения' : 'Осложнения'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[15px] font-bold leading-tight text-[#18324A]">Выберите этап, чтобы узнать больше 👆</p>
        <div className="mt-3 flex gap-3">
          {symptoms.map((item, index) => (
            <button key={item.title} type="button" className={`flex h-[100px] w-[100px] flex-col items-center justify-center rounded-[14px] border bg-white px-2 text-center transition ${index === 0 ? 'border-[#21A7A2] shadow-[0_8px_20px_rgba(33,167,162,0.16)]' : 'border-[#E4E8EB]'}`}>
              <span className="text-[#21A7A2]">{item.icon}</span>
              <span className="mt-1 text-[11px] font-bold leading-[1.12] text-[#18324A]">{item.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-5 flex gap-[14px] rounded-[16px] bg-[#EAF8F7] p-[18px]">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2]"><InfoIcon /></div>
          <p className="text-[14px] font-semibold leading-[1.3] text-[#18324A]">
            На раннем этапе симптомы могут<br />быть неспецифичными и часто<br />остаются без внимания.
          </p>
        </div>

        <div className="absolute bottom-[34px] left-7 right-7">
          <div className="mb-2 flex justify-between text-[11px] font-semibold text-[#6D7A86]"><span>Ранние признаки</span><span>Осложнения</span></div>
          <div className="h-2 overflow-hidden rounded-full bg-[#E4E8EB]"><div className="h-full w-[34%] rounded-full bg-[#21A7A2]" /></div>
        </div>
      </div>

      <div className="absolute right-[35px] top-[90px] h-[990px] w-[500px] rounded-[22px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <span className="inline-flex rounded-[20px] bg-[#EAF8F7] px-4 py-2 text-[14px] font-bold text-[#21A7A2]">Начальная стадия</span>
        <h2 className="mt-3 text-[22px] font-bold leading-[1.22] text-[#18324A]">
          Дефицит D3 может начинаться<br />с легких и неспецифичных симптомов.
        </h2>

        <div className="mt-4 space-y-2.5">
          {[
            ['Усталость и слабость', 'Ребёнок быстрее утомляется,\nснижается общий тонус и энергия.', <BatteryIcon />],
            ['Снижение концентрации', 'Труднее сосредоточиться на учёбе,\nснижается внимание и память.', <BrainIcon />],
            ['Частые простуды / ОРВИ', 'Иммунитет ослабевает, ребёнок\nчаще болеет простудными заболеваниями.', <ShieldIcon />],
          ].map(([title, text, icon]) => (
            <article key={String(title)} className="flex items-center gap-3 rounded-[14px] border border-[#E4E8EB] bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
              <IconCircle>{icon as ReactNode}</IconCircle>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15.5px] font-bold leading-tight text-[#18324A]">{title}</h3>
                <p className="mt-1 whitespace-pre-line text-[12.5px] font-medium leading-[1.2] text-[#6D7A86]">{text}</p>
              </div>
              <span className="text-[34px] leading-none text-[#21A7A2]">›</span>
            </article>
          ))}
        </div>

        <h3 className="mt-4 text-[17px] font-bold leading-[1.2] text-[#18324A]">
          Что может происходить дальше,<br />если дефицит сохраняется?
        </h3>
        <div className="mt-3 flex items-start justify-between">
          <div className="flex w-[118px] flex-col items-center text-center"><IconCircle><ChildActivityIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.2] text-[#18324A]">Снижение активности</p></div>
          <div className="mt-7 h-px w-[34px] border-t-2 border-dashed border-[#21A7A2]" />
          <div className="flex w-[132px] flex-col items-center text-center"><IconCircle><ChartIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.2] text-[#18324A]">Нарушение адаптации к нагрузке</p></div>
          <div className="mt-7 h-px w-[34px] border-t-2 border-dashed border-[#FFA726]" />
          <div className="flex w-[122px] flex-col items-center text-center"><IconCircle orange><WarningIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.2] text-[#18324A]">Риск дальнейших осложнений</p></div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-[14px] border-[1.5px] border-[#21A7A2] bg-[#EAF8F7] px-4 py-3.5">
          <div className="shrink-0 text-[#21A7A2]"><ShieldIcon className="h-10 w-10" check /></div>
          <p className="text-[14px] font-bold leading-[1.22] text-[#18324A]">
            Итог: раннее выявление дефицита D3<br />помогает предотвратить дальнейшее<br />прогрессирование симптомов.
          </p>
        </div>
      </div>
    </>
  )
}

function LateContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[90px] h-[990px] w-[390px] rounded-[22px] bg-white px-6 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[23px] font-bold leading-tight text-[#18324A]">К чему может привести дефицит?</h2>

        <div className="relative mx-auto mt-6 h-[318px] w-[320px]">
          <svg className="pointer-events-none absolute left-[24px] top-[18px] h-[246px] w-[270px]" viewBox="0 0 270 246" fill="none" aria-hidden>
            <path d="M50 82C58 24 210 23 221 86" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 9" strokeLinecap="round" />
            <path d="M50 82c-42 69 23 143 85 143s129-75 86-139" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 9" strokeLinecap="round" />
          </svg>
          <div className="absolute left-1/2 top-[58px] h-[250px] w-[250px] -translate-x-1/2 overflow-hidden rounded-full bg-[#F7F3ED] shadow-[0_10px_24px_rgba(24,50,74,0.08)]">
            <img src="/assets/characters/active-audience-schoolboy.png" alt="Школьник за столом" className="h-full w-full object-cover object-[50%_34%]" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[72px] bg-gradient-to-t from-white/95 to-transparent" />
          </div>
          <div className="absolute left-[2px] top-[58px]"><IconCircle><ToothIcon /></IconCircle></div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2"><IconCircle><BoneIcon /></IconCircle></div>
          <div className="absolute right-[2px] top-[58px]"><IconCircle><ChartIcon /></IconCircle></div>
        </div>

        <div className="mt-7">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-[48px] right-[48px] top-[19px] h-px bg-[#E4E8EB]" />
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative z-10 flex w-[104px] flex-col items-center text-center">
                <div className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[16px] font-bold ${n === 3 ? 'bg-[#21A7A2] text-white' : 'border border-[#D9DEE5] bg-white text-[#6D7A86]'}`}>{n}</div>
                <p className={`mt-2 text-[11px] font-bold leading-[1.15] ${n === 3 ? 'text-[#21A7A2]' : 'text-[#6D7A86]'}`}>
                  {n === 1 ? 'Ранние признаки' : n === 2 ? 'Функциональные нарушения' : 'Осложнения'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[15px] font-bold leading-tight text-[#18324A]">Выберите категорию поздних осложнений</p>
        <div className="mt-3 flex gap-3">
          {lateCategories.map((item, index) => (
            <button key={item.title} type="button" className={`flex h-[110px] w-[100px] cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[14px] border bg-white px-2.5 py-3.5 text-center shadow-[0_8px_18px_rgba(0,0,0,0.04)] transition duration-200 ease-in-out ${index === 0 ? 'border-[#21A7A2] shadow-[0_8px_20px_rgba(33,167,162,0.14)]' : 'border-[#E4E8EB]'}`}>
              <span className="text-[#21A7A2]">{item.icon}</span>
              <span className="text-[11px] font-bold leading-[1.12] text-[#18324A]">{item.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-5 flex gap-3 rounded-[16px] bg-[#EAF8F7] p-[18px]">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2]"><InfoIcon /></div>
          <p className="text-[13.5px] font-semibold leading-[1.28] text-[#18324A]">
            При длительном дефиците симптомы<br />могут прогрессировать и приводить<br />к осложнениям костной системы<br />и развития.
          </p>
        </div>

        <div className="absolute bottom-[34px] left-7 right-7">
          <div className="mb-2 flex justify-between text-[11px] font-semibold text-[#6D7A86]"><span>Ранние признаки</span><span>Осложнения</span></div>
          <div className="relative h-2 overflow-hidden rounded-full bg-[#E4E8EB]"><div className="h-full w-[88%] rounded-full bg-[#21A7A2]" /><span className="absolute left-[85%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-[#21A7A2] shadow-[0_2px_6px_rgba(33,167,162,0.35)]" /></div>
        </div>
      </div>

      <div className="absolute right-[35px] top-[90px] h-[990px] w-[500px] rounded-[22px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <span className="inline-flex rounded-[20px] bg-[#EAF8F7] px-4 py-2 text-[14px] font-bold text-[#21A7A2]">Поздние осложнения</span>
        <h2 className="mt-3 text-[22px] font-bold leading-[1.22] text-[#18324A]">
          Длительный дефицит D3 может приводить<br />к выраженным нарушениям роста и<br />костного развития.
        </h2>

        <div className="mt-4 space-y-2.5">
          {[
            ['Рахит', 'Классическое осложнение дефицита\nвитамина D у детей раннего возраста,\nсвязанное с нарушением минерализации\nкостей.', <RibsIcon />],
            ['Размягчение костей и деформации', 'Могут формироваться изменения\nкостей черепа, грудной клетки\nи нижних конечностей.', <LegsIcon />],
            ['Задержка прорезывания зубов\nи развития', 'Дефицит может сопровождаться\nзадержкой роста, прорезывания зубов\nи общего физического развития.', <ToothIcon />],
          ].map(([title, text, icon]) => (
            <article key={String(title)} className="flex items-start gap-3 rounded-[14px] border border-[#E4E8EB] bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
              <IconCircle>{icon as ReactNode}</IconCircle>
              <div className="min-w-0 flex-1">
                <h3 className="whitespace-pre-line text-[15.5px] font-bold leading-[1.14] text-[#18324A]">{title}</h3>
                <p className="mt-1 whitespace-pre-line text-[12.5px] font-medium leading-[1.2] text-[#6D7A86]">{text}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-4 text-[17px] font-bold leading-tight text-[#18324A]">Что особенно важно заметить вовремя?</h3>
        <div className="mt-3 flex items-start justify-between">
          <div className="flex w-[112px] flex-col items-center text-center"><IconCircle><D3Icon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.2] text-[#18324A]">Дефицит D3</p></div>
          <div className="mt-7 h-px w-[38px] border-t-2 border-dashed border-[#21A7A2]" />
          <div className="flex w-[132px] flex-col items-center text-center"><IconCircle><BoneIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.2] text-[#18324A]">Нарушение минерализации</p></div>
          <div className="mt-7 h-px w-[38px] border-t-2 border-dashed border-[#FFA726]" />
          <div className="flex w-[112px] flex-col items-center text-center"><IconCircle orange><WarningIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.2] text-[#18324A]">Осложнения</p></div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-[14px] border-[1.5px] border-[#21A7A2] bg-[#EAF8F7] px-4 py-3.5">
          <div className="shrink-0 text-[#21A7A2]"><ShieldIcon className="h-10 w-10" check /></div>
          <p className="text-[14px] font-bold leading-[1.22] text-[#18324A]">
            Итог: своевременная профилактика<br />и коррекция дефицита D3 помогают<br />снизить риск поздних осложнений.
          </p>
        </div>
      </div>
    </>
  )
}

export default function Slide03Complications() {
  const [activeStageTab, setActiveStageTab] = useState<StageTab>('late')

  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[36px] font-bold leading-[1.08] tracking-normal text-[#18324A]">Последствия дефицита</h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">От ранних признаков к осложнениям</p>
      </header>

      {activeStageTab === 'early' ? <EarlyContent /> : <LateContent />}

      <div className="absolute left-[35px] top-[1110px] flex h-11 items-center gap-3">
        <button
          type="button"
          className={`h-11 cursor-pointer rounded-[12px] px-5 text-[15px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 ${activeStageTab === 'early' ? 'bg-[#21A7A2] text-white shadow-[0_8px_18px_rgba(33,167,162,0.22)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86]'}`}
          onClick={() => setActiveStageTab('early')}
        >
          ⚠️ Ранние признаки
        </button>
        <button
          type="button"
          className={`h-11 cursor-pointer rounded-[12px] px-5 text-[15px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 ${activeStageTab === 'late' ? 'bg-[#21A7A2] text-white shadow-[0_8px_18px_rgba(33,167,162,0.22)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86]'}`}
          onClick={() => setActiveStageTab('late')}
        >
          ⚡ Поздние осложнения
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/38 backdrop-blur-[1px]" />
    </section>
  )
}
