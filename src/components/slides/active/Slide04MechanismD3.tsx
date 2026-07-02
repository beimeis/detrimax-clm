import { useState } from 'react'
import type { ReactNode } from 'react'

const NAVY = '#18324A'
type RoleTab = 'cognition' | 'moodSleep' | 'immunity'

function BrainIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M21 43c-5.8 0-10.5-4.5-10.5-10.1 0-3.4 1.7-6.3 4.2-8.2-.4-1.1-.7-2.3-.7-3.6 0-4.7 3.8-8.6 8.6-8.6 1.4-3.7 5-6.4 9.2-6.4 5.4 0 9.8 4.4 9.8 9.8v.9c3.9 1.4 6.7 5.1 6.7 9.5 0 5.6-4.5 10.1-10.1 10.1H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M28 14v34M19 28h9M28 34h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function TargetIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="28" r="19" stroke="currentColor" strokeWidth="3" /><circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="3" /><path d="M28 9v7M28 40v7M9 28h7M40 28h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><circle cx="28" cy="28" r="2.5" fill="currentColor" /></svg>
}
function BookIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 15c-4.6-3.3-10.6-4.7-17-4.7v30c6.4 0 12.4 1.4 17 4.7V15Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M28 15c4.6-3.3 10.6-4.7 17-4.7v30c-6.4 0-12.4 1.4-17 4.7V15Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M17 19c3.4.4 6.6 1.3 9 2.8M39 19c-3.4.4-6.6 1.3-9 2.8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function NeuronIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="28" r="6" stroke="currentColor" strokeWidth="3" /><circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth="3" /><circle cx="44" cy="13" r="4" stroke="currentColor" strokeWidth="3" /><circle cx="12" cy="43" r="4" stroke="currentColor" strokeWidth="3" /><circle cx="45" cy="42" r="4" stroke="currentColor" strokeWidth="3" /><path d="M23.5 24 15 17M32.5 24 41 16M23.5 32 15 40M32.5 32 42 39" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M28 8v12M28 36v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function MemoryIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><rect x="12" y="13" width="32" height="30" rx="6" stroke="currentColor" strokeWidth="3" /><path d="M20 8v8M28 8v8M36 8v8M20 40v8M28 40v8M36 40v8M8 21h8M8 29h8M8 37h8M40 21h8M40 29h8M40 37h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M22 29h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function SpeedIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M12 39a18 18 0 1 1 32 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M28 31 39 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M16 39h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function InfoIcon() { return <svg viewBox="0 0 56 56" className="h-7 w-7" fill="none" aria-hidden><path d="M28 25v14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><path d="M28 17h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg> }
function CapIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M6 22 28 11l22 11-22 11L6 22Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M16 28v9c5.9 4.2 18.1 4.2 24 0v-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M46 24v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function StarIcon() { return <svg viewBox="0 0 56 56" className="h-8 w-8" fill="none" aria-hidden><path d="m28 7 5.7 13.5 14.5 1.2-11 9.5 3.3 14.2L28 37.8 15.5 45.4l3.3-14.2-11-9.5 14.5-1.2L28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg> }

function SmileIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 48c11 0 20-9 20-20S39 8 28 8 8 17 8 28s9 20 20 20Z" stroke="currentColor" strokeWidth="3" /><path d="M20 24h.1M36 24h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /><path d="M19.5 34c5.5 5 11.5 5 17 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function ScaleIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 9v38M16 17h24M19 17l-8 16h16l-8-16ZM37 17l-8 16h16l-8-16Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 47h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function MoonIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M38.8 39c-11.6 0-21-9.4-21-21 0-2.4.4-4.6 1.1-6.7C12 14.6 7.4 21.4 7.4 29.4 7.4 40 16 48.6 26.6 48.6c8 0 14.9-4.7 18.1-11.5-1.8 1.2-3.8 1.9-5.9 1.9Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M40 8v8M36 12h8M47 20v6M44 23h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function BedIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M9 18v26M47 31v13M9 31h38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M14 26h12a5 5 0 0 0-5-5h-7v5ZM27 31h20v-4a7 7 0 0 0-7-7H27v11Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M16 47v-3M44 47v-3M37 10h8l-8 8h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function ShieldIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function VirusIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="3" /><path d="M28 8v8M28 40v8M8 28h8M40 28h8M13.8 13.8l5.7 5.7M36.5 36.5l5.7 5.7M42.2 13.8l-5.7 5.7M19.5 36.5l-5.7 5.7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><circle cx="24" cy="26" r="1.8" fill="currentColor" /><circle cx="32" cy="30" r="1.8" fill="currentColor" /></svg>
}
function AntibodyIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 49V30M28 30 14 16M28 30l14-14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M14 16 8 10M14 16l-6 6M42 16l6-6M42 16l6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M22 36h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function BarrierIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M10 17h36v25H10V17Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M10 25h36M10 33h36M22 17v8M34 17v8M16 25v8M28 25v8M40 25v8M22 33v9M34 33v9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M28 7 43 13v9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function IconCircle({ children }: { children: ReactNode }) {
  return <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#21A7A2] bg-[#EAF8F7] text-[#21A7A2]">{children}</div>
}
function SmallIconBox({ children }: { children: ReactNode }) {
  return <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#EAF8F7] text-[#21A7A2]">{children}</div>
}

function CognitionContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[90px] h-[990px] w-[455px] rounded-[22px] bg-white px-6 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="relative mx-auto h-[490px] w-[390px]">
          <svg className="pointer-events-none absolute left-[34px] top-[22px] h-[396px] w-[322px]" viewBox="0 0 322 396" fill="none" aria-hidden>
            <path d="M161 58C72 58 31 138 45 225c12 78 73 129 147 118 66-10 106-67 100-133" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M76 104C105 43 221 41 254 105" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
          </svg>
          <div className="absolute left-1/2 top-[124px] h-[340px] w-[300px] -translate-x-1/2 overflow-hidden rounded-[26px] bg-[#F7F3ED]">
            <img src="/assets/characters/active-audience-schoolboy.png" alt="Школьник за партой" className="h-full w-full object-cover object-[50%_32%]" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[105px] bg-gradient-to-t from-white/95 to-transparent" />
          </div>
          <div className="absolute left-1/2 top-0 flex w-[142px] -translate-x-1/2 flex-col items-center text-center"><IconCircle><TargetIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Внимание<br />и концентрация</p></div>
          <div className="absolute left-[-2px] top-[78px] flex w-[132px] flex-col items-center text-center"><IconCircle><BrainIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Память<br />и запоминание</p></div>
          <div className="absolute right-[-2px] top-[78px] flex w-[132px] flex-col items-center text-center"><IconCircle><BookIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Обучение<br />и успеваемость</p></div>
          <div className="absolute left-[2px] bottom-[0px] flex w-[150px] flex-col items-center text-center"><IconCircle><NeuronIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Нейроподдержка<br />и защита мозга</p></div>
        </div>

        <div className="mt-5">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-[54px] right-[54px] top-[19px] h-px bg-[#E4E8EB]" />
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative z-10 flex w-[118px] flex-col items-center text-center">
                <div className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[16px] font-bold ${n === 3 ? 'bg-[#21A7A2] text-white' : 'border border-[#D9DEE5] bg-[#F8F8F8] text-[#6D7A86]'}`}>{n}</div>
                <p className={`mt-2 text-[11px] font-bold leading-[1.15] ${n === 3 ? 'text-[#21A7A2]' : 'text-[#6D7A86]'}`}>
                  {n === 1 ? <>Активация VDR<br />в мозге</> : n === 2 ? <>Поддержка нейронных<br />процессов</> : <>Когнитивная адаптация<br />и обучение</>}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex gap-3">
          {[
            ['Рабочая память', <MemoryIcon />],
            ['Исполнительные функции', <BrainIcon />],
            ['Скорость обучения', <SpeedIcon />],
          ].map(([title, icon], index) => (
            <article key={String(title)} className={`relative flex h-[110px] w-[115px] flex-col items-center justify-center gap-2.5 rounded-[14px] border bg-white px-2 text-center ${index === 2 ? 'border-[#21A7A2] shadow-[0_8px_20px_rgba(33,167,162,0.14)]' : 'border-[#E4E8EB]'}`}>
              {index === 2 && <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#21A7A2] text-[12px] font-bold text-white">✓</span>}
              <span className="text-[#21A7A2]">{icon as ReactNode}</span>
              <span className="text-[12px] font-bold leading-[1.12] text-[#18324A]">{title}</span>
            </article>
          ))}
        </div>

        <div className="mt-6 flex gap-3 rounded-[16px] bg-[#EAF8F7] p-[18px]">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2]"><InfoIcon /></div>
          <p className="text-[13.5px] font-semibold leading-[1.32] text-[#18324A]">
            Когнитивные функции формируются и совершенствуются<br />при поддержке нейронных сетей, чувствительных<br />к витамину D3.
          </p>
        </div>
      </div>

      <div className="absolute left-[500px] top-[90px] h-[990px] w-[489px] rounded-[22px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <span className="inline-flex rounded-[20px] bg-[#EAF8F7] px-4 py-2 text-[14px] font-bold text-[#21A7A2]">Когнитивная поддержка</span>
        <h2 className="mt-3 text-[22px] font-bold leading-[1.22] text-[#18324A]">Нервная система и витамин D3:<br />основа внимания и обучения у школьников</h2>
        <div className="mt-3 space-y-2 text-[13.5px] font-medium leading-[1.34] text-[#6D7A86]">
          <p>VDR (рецепторы витамина D) широко представлены в мозге: в гиппокампе, префронтальной коре, мозжечке и других областях, отвечающих за память, мышление и обучение.</p>
          <p>Витамин D3 участвует в регуляции нейропластичности, нейромедиаторных систем и нейропротекции, обеспечивая адаптацию к учебной нагрузке.</p>
        </div>

        <div className="mt-4 space-y-2.5">
          {[
            ['Нейропластичность', 'D3 стимулирует рост связей между нейронами\nи синаптическую пластичность — основу обучения\nи формирования навыков.', <NeuronIcon />],
            ['Поддержка когнитивных функций', 'D3 способствует работе внимания, памяти, скорости\nобработки информации и навыкам решения задач.', <BrainIcon />],
            ['Адаптация к учебной нагрузке', 'Поддерживает устойчивость нервной системы\nк стрессу, помогает сохранять концентрацию\nи продуктивность в течение дня.', <CapIcon />],
          ].map(([title, text, icon]) => (
            <article key={String(title)} className="flex items-start gap-3 rounded-[14px] border border-[#E4E8EB] bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
              <SmallIconBox>{icon as ReactNode}</SmallIconBox>
              <div className="min-w-0"><h3 className="text-[15.5px] font-bold leading-tight text-[#18324A]">{title}</h3><p className="mt-1 whitespace-pre-line text-[12.5px] font-medium leading-[1.2] text-[#6D7A86]">{text}</p></div>
            </article>
          ))}
        </div>

        <h3 className="mt-4 text-[16px] font-bold leading-tight text-[#18324A]">Как работает витамин D3 для когнитивной адаптации</h3>
        <div className="mt-3 flex items-start justify-between">
          {[
            ['D3', 'Витамин D3'],
            ['VDR', 'VDR в мозге'],
            ['NP', 'Нейропластичность\nи защита'],
            ['EDU', 'Внимание\nи обучение'],
          ].map(([abbr, label], index) => (
            <div key={abbr} className="flex items-start">
              <div className="flex w-[76px] flex-col items-center text-center">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#EAF8F7] text-[13px] font-extrabold text-[#21A7A2]">{abbr}</div>
                <p className="mt-2 whitespace-pre-line text-[11px] font-bold leading-[1.15] text-[#18324A]">{label}</p>
              </div>
              {index < 3 && <div className="mt-[23px] h-px w-[22px] border-t-2 border-dashed border-[#21A7A2]" />}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3 rounded-[14px] bg-[#EAF8F7] px-4 py-3.5">
          <div className="shrink-0 text-[#21A7A2]"><StarIcon /></div>
          <p className="text-[13.5px] font-bold leading-[1.24] text-[#18324A]">Вывод: витамин D3 поддерживает когнитивную адаптацию<br />и успешное обучение школьника, обеспечивая работу мозга<br />на высоком уровне.</p>
        </div>
      </div>
    </>
  )
}

function MoodSleepContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[90px] h-[990px] w-[455px] rounded-[22px] bg-white px-6 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="relative mx-auto h-[490px] w-[390px]">
          <svg className="pointer-events-none absolute left-[34px] top-[22px] h-[396px] w-[322px]" viewBox="0 0 322 396" fill="none" aria-hidden>
            <path d="M161 58C72 58 31 138 45 225c12 78 73 129 147 118 66-10 106-67 100-133" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M76 104C105 43 221 41 254 105" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
          </svg>
          <div className="absolute left-1/2 top-[124px] h-[340px] w-[300px] -translate-x-1/2 overflow-hidden rounded-[26px] bg-[#F7F3ED]">
            <img src="/assets/characters/active-sleep-child.png" alt="Спящий школьник" className="h-full w-full object-cover object-[50%_34%]" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[105px] bg-gradient-to-t from-white/95 to-transparent" />
          </div>
          <div className="absolute left-1/2 top-0 flex w-[142px] -translate-x-1/2 flex-col items-center text-center"><IconCircle><SmileIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Серотонин<br />и хорошее<br />настроение</p></div>
          <div className="absolute left-[-2px] top-[104px] flex w-[132px] flex-col items-center text-center"><IconCircle><ScaleIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Эмоциональный<br />баланс</p></div>
          <div className="absolute right-[-2px] top-[104px] flex w-[132px] flex-col items-center text-center"><IconCircle><MoonIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Мелатонин<br />и здоровый сон</p></div>
          <div className="absolute left-1/2 bottom-[0px] flex w-[170px] -translate-x-1/2 flex-col items-center text-center"><IconCircle><BedIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Качественный<br />сон и восстановление</p></div>
        </div>

        <div className="mt-5">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-[54px] right-[54px] top-[19px] h-px bg-[#E4E8EB]" />
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative z-10 flex w-[118px] flex-col items-center text-center">
                <div className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[16px] font-bold ${n === 3 ? 'bg-[#21A7A2] text-white' : 'border border-[#D9DEE5] bg-[#F8F8F8] text-[#6D7A86]'}`}>{n}</div>
                <p className={`mt-2 text-[11px] font-bold leading-[1.15] ${n === 3 ? 'text-[#21A7A2]' : 'text-[#6D7A86]'}`}>
                  {n === 1 ? <>Поддержка синтеза<br />серотонина<br />и мелатонина</> : n === 2 ? <>Улучшение<br />настроения<br />и качества сна</> : <>Повышение адаптации<br />к школьным<br />нагрузкам</>}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex gap-3">
          {[
            ['Хорошее настроение', <SmileIcon />],
            ['Качественный сон', <MoonIcon />],
            ['Адаптация к нагрузке', <ShieldIcon />],
          ].map(([title, icon], index) => (
            <article key={String(title)} className={`relative flex h-[110px] w-[115px] flex-col items-center justify-center gap-2.5 rounded-[14px] border bg-white px-2 text-center ${index === 2 ? 'border-[#21A7A2] shadow-[0_8px_20px_rgba(33,167,162,0.14)]' : 'border-[#E4E8EB]'}`}>
              {index === 2 && <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#21A7A2] text-[12px] font-bold text-white">✓</span>}
              <span className="text-[#21A7A2]">{icon as ReactNode}</span>
              <span className="text-[12px] font-bold leading-[1.12] text-[#18324A]">{title}</span>
            </article>
          ))}
        </div>

        <div className="mt-6 flex gap-3 rounded-[16px] bg-[#EAF8F7] p-[18px]">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2]"><InfoIcon /></div>
          <p className="text-[13.5px] font-semibold leading-[1.26] text-[#18324A]">
            Витамин D3 участвует в регуляции серотонина<br />и мелатонина — гормонов настроения и сна,<br />что важно для психоэмоционального благополучия<br />школьников.
          </p>
        </div>
      </div>

      <div className="absolute left-[500px] top-[90px] h-[990px] w-[489px] rounded-[22px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <span className="inline-flex rounded-[20px] bg-[#EAF8F7] px-4 py-2 text-[14px] font-bold text-[#21A7A2]">Психоэмоциональная поддержка</span>
        <h2 className="mt-3 text-[22px] font-bold leading-[1.22] text-[#18324A]">Витамин D3, серотонин и мелатонин:<br />основа хорошего настроения и сна<br />у школьников</h2>
        <p className="mt-3 text-[13.5px] font-medium leading-[1.34] text-[#6D7A86]">
          Витамин D3 поддерживает синтез серотонина и мелатонина — ключевых регуляторов настроения и сна. Это способствует эмоциональной устойчивости, качественному отдыху и успешной адаптации к учебным нагрузкам.
        </p>

        <div className="mt-4 space-y-2.5">
          {[
            ['Серотонин и настроение', 'D3 участвует в синтезе серотонина —\nнейромедиатора, который отвечает за хорошее\nнастроение, спокойствие и эмоциональный баланс.', <BrainIcon />],
            ['Мелатонин и сон', 'D3 способствует выработке мелатонина —\nгормона сна, который помогает быстрее\nзасыпать и улучшает его качество.', <MoonIcon />],
            ['Адаптация к нагрузке', 'Сбалансированное настроение и полноценный сон\nповышают устойчивость к стрессу, улучшают\nконцентрацию и успеваемость.', <ShieldIcon />],
          ].map(([title, text, icon]) => (
            <article key={String(title)} className="flex items-start gap-3 rounded-[14px] border border-[#E4E8EB] bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
              <SmallIconBox>{icon as ReactNode}</SmallIconBox>
              <div className="min-w-0"><h3 className="text-[15.5px] font-bold leading-tight text-[#18324A]">{title}</h3><p className="mt-1 whitespace-pre-line text-[12.5px] font-medium leading-[1.2] text-[#6D7A86]">{text}</p></div>
            </article>
          ))}
        </div>

        <h3 className="mt-4 text-[16px] font-bold leading-tight text-[#18324A]">Как работает витамин D3 для настроения и сна</h3>
        <div className="mt-3 flex items-start justify-between">
          {[
            ['D3', 'Витамин D3'],
            ['5-HT', 'Синтез\nсеротонина\nи мелатонина'],
            ['SLEEP', 'Хорошее\nнастроение и\nкачественный сон'],
            ['OK', 'Адаптация\nк учебной\nнагрузке'],
          ].map(([abbr, label], index) => (
            <div key={abbr} className="flex items-start">
              <div className="flex w-[76px] flex-col items-center text-center">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#EAF8F7] text-[12px] font-extrabold text-[#21A7A2]">{abbr}</div>
                <p className="mt-2 whitespace-pre-line text-[10.5px] font-bold leading-[1.12] text-[#18324A]">{label}</p>
              </div>
              {index < 3 && <div className="mt-[23px] h-px w-[22px] border-t-2 border-dashed border-[#21A7A2]" />}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3 rounded-[14px] bg-[#EAF8F7] px-4 py-3.5">
          <div className="shrink-0 text-[#21A7A2]"><StarIcon /></div>
          <p className="text-[13.5px] font-bold leading-[1.24] text-[#18324A]">Вывод: витамин D3 способствует психоэмоциональной<br />стабильности и здоровому сну, помогая школьнику легче<br />справляться с учебными и повседневными задачами.</p>
        </div>
      </div>
    </>
  )
}

function ImmunityContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[90px] h-[990px] w-[455px] rounded-[22px] bg-white px-6 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="relative mx-auto h-[490px] w-[390px]">
          <svg className="pointer-events-none absolute left-[34px] top-[22px] h-[396px] w-[322px]" viewBox="0 0 322 396" fill="none" aria-hidden>
            <path d="M161 58C72 58 31 138 45 225c12 78 73 129 147 118 66-10 106-67 100-133" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M76 104C105 43 221 41 254 105" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
          </svg>
          <div className="absolute left-1/2 top-[124px] h-[340px] w-[300px] -translate-x-1/2 overflow-hidden rounded-[26px] bg-[#F7F3ED]">
            <img src="/assets/characters/active-immunity-child.png" alt="Школьник" className="h-full w-full object-cover object-[50%_32%]" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[105px] bg-gradient-to-t from-white/95 to-transparent" />
          </div>
          <div className="absolute left-1/2 top-0 flex w-[142px] -translate-x-1/2 flex-col items-center text-center"><IconCircle><ShieldIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Барьерная<br />защита</p></div>
          <div className="absolute left-[-2px] top-[104px] flex w-[132px] flex-col items-center text-center"><IconCircle><VirusIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Врожденный<br />иммунитет</p></div>
          <div className="absolute right-[-2px] top-[104px] flex w-[132px] flex-col items-center text-center"><IconCircle><AntibodyIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Адаптивный<br />иммунный ответ</p></div>
          <div className="absolute left-[8px] bottom-[0px] flex w-[150px] flex-col items-center text-center"><IconCircle><BarrierIcon /></IconCircle><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#0E8F8B]">Защита<br />от инфекций</p></div>
        </div>

        <div className="mt-5">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-[54px] right-[54px] top-[19px] h-px bg-[#E4E8EB]" />
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative z-10 flex w-[118px] flex-col items-center text-center">
                <div className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[16px] font-bold ${n === 3 ? 'bg-[#21A7A2] text-white' : 'border border-[#D9DEE5] bg-[#F8F8F8] text-[#6D7A86]'}`}>{n}</div>
                <p className={`mt-2 text-[11px] font-bold leading-[1.15] ${n === 3 ? 'text-[#21A7A2]' : 'text-[#6D7A86]'}`}>
                  {n === 1 ? <>Укрепление<br />барьерных<br />функций</> : n === 2 ? <>Поддержка<br />врожденного<br />иммунитета</> : <>Поддержка<br />адаптивного<br />иммунного ответа</>}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex gap-3">
          {[
            ['Барьерная функция', <BarrierIcon />],
            ['Врожденный ответ', <VirusIcon />],
            ['Адаптивный ответ', <AntibodyIcon />],
          ].map(([title, icon], index) => (
            <article key={String(title)} className={`relative flex h-[110px] w-[115px] flex-col items-center justify-center gap-2.5 rounded-[14px] border bg-white px-2 text-center ${index === 2 ? 'border-[#21A7A2] shadow-[0_8px_20px_rgba(33,167,162,0.14)]' : 'border-[#E4E8EB]'}`}>
              {index === 2 && <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#21A7A2] text-[12px] font-bold text-white">✓</span>}
              <span className="text-[#21A7A2]">{icon as ReactNode}</span>
              <span className="text-[12px] font-bold leading-[1.12] text-[#18324A]">{title}</span>
            </article>
          ))}
        </div>

        <div className="mt-6 flex gap-3 rounded-[16px] bg-[#EAF8F7] p-[18px]">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2]"><InfoIcon /></div>
          <p className="text-[13.5px] font-semibold leading-[1.32] text-[#18324A]">
            Витамин D3 поддерживает ключевые звенья иммунной<br />системы, обеспечивая комплексную защиту организма<br />школьника от инфекций.
          </p>
        </div>
      </div>

      <div className="absolute left-[500px] top-[90px] h-[990px] w-[489px] rounded-[22px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <span className="inline-flex rounded-[20px] bg-[#EAF8F7] px-4 py-2 text-[14px] font-bold text-[#21A7A2]">Иммунная защита</span>
        <h2 className="mt-3 text-[22px] font-bold leading-[1.22] text-[#18324A]">Витамин D3 поддерживает врожденный<br />и адаптивный иммунитет школьников</h2>
        <p className="mt-3 text-[13.5px] font-medium leading-[1.34] text-[#6D7A86]">
          Витамин D3 — важный регулятор иммунной системы. Он укрепляет барьерные функции, активирует врожденный иммунитет и способствует формированию эффективного адаптивного ответа.
        </p>

        <div className="mt-4 space-y-2.5">
          {[
            ['Барьерная защита', 'D3 укрепляет слизистые оболочки и кожный барьер,\nснижая проникновение вирусов и бактерий\nв организм.', <BarrierIcon />],
            ['Врожденный иммунитет', 'D3 усиливает активность макрофагов,\nдендритных клеток и антимикробных пептидов,\nобеспечивая быструю защиту.', <VirusIcon />],
            ['Адаптивный иммунный ответ', 'D3 способствует созреванию T- и B-клеток\nи выработке антител, формируя устойчивый\nспецифический иммунитет.', <AntibodyIcon />],
          ].map(([title, text, icon]) => (
            <article key={String(title)} className="flex items-start gap-3 rounded-[14px] border border-[#E4E8EB] bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
              <SmallIconBox>{icon as ReactNode}</SmallIconBox>
              <div className="min-w-0"><h3 className="text-[15.5px] font-bold leading-tight text-[#18324A]">{title}</h3><p className="mt-1 whitespace-pre-line text-[12.5px] font-medium leading-[1.2] text-[#6D7A86]">{text}</p></div>
            </article>
          ))}
        </div>

        <h3 className="mt-4 text-[16px] font-bold leading-tight text-[#18324A]">Как работает витамин D3 для иммунной защиты</h3>
        <div className="mt-3 flex items-start justify-between">
          {[
            ['D3', 'Витамин D3'],
            ['INN', 'Врожденный\nиммунный\nответ'],
            ['ADP', 'Адаптивный\nиммунный\nответ'],
            ['LOW', 'Снижение\nчастоты\nинфекций'],
          ].map(([abbr, label], index) => (
            <div key={abbr} className="flex items-start">
              <div className="flex w-[76px] flex-col items-center text-center">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#EAF8F7] text-[12px] font-extrabold text-[#21A7A2]">{abbr}</div>
                <p className="mt-2 whitespace-pre-line text-[10.5px] font-bold leading-[1.12] text-[#18324A]">{label}</p>
              </div>
              {index < 3 && <div className="mt-[23px] h-px w-[22px] border-t-2 border-dashed border-[#21A7A2]" />}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3 rounded-[14px] bg-[#EAF8F7] px-4 py-3.5">
          <div className="shrink-0 text-[#21A7A2]"><StarIcon /></div>
          <p className="text-[13.5px] font-bold leading-[1.24] text-[#18324A]">Вывод: витамин D3 укрепляет барьерную защиту,<br />активирует врожденный и адаптивный иммунитет,<br />снижая риск инфекций у школьников.</p>
        </div>
      </div>
    </>
  )
}

export default function Slide04MechanismD3() {
  const [activeRoleTab, setActiveRoleTab] = useState<RoleTab>('immunity')
  
  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[36px] font-bold leading-[1.08] tracking-normal text-[#18324A]">Роль D3</h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">Механизм действия витамина D3 у школьника</p>
      </header>

      {activeRoleTab === 'cognition' ? <CognitionContent /> : activeRoleTab === 'moodSleep' ? <MoodSleepContent /> : <ImmunityContent />}

      <div className="absolute left-[35px] top-[1110px] flex h-11 items-center gap-3">
        {[
          ['cognition', '🧠 Когниция'],
          ['moodSleep', '😴 Настроение и сон'],
          ['immunity', '🛡️ Иммунитет'],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`h-11 cursor-pointer rounded-[12px] px-5 text-[15px] font-bold transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(24,50,74,0.08)] ${activeRoleTab === id ? 'bg-[#21A7A2] text-white shadow-[0_8px_20px_rgba(33,167,162,0.22)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86]'}`}
            onClick={() => setActiveRoleTab(id as RoleTab)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/38 backdrop-blur-[1px]" />
    </section>
  )
}
