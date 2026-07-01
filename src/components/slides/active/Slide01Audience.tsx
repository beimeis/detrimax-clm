import type { ReactNode } from 'react'

const NAVY = '#18324A'

function BrainIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M21 43c-5.8 0-10.5-4.5-10.5-10.1 0-3.4 1.7-6.3 4.2-8.2-.4-1.1-.7-2.3-.7-3.6 0-4.7 3.8-8.6 8.6-8.6 1.4-3.7 5-6.4 9.2-6.4 5.4 0 9.8 4.4 9.8 9.8v.9c3.9 1.4 6.7 5.1 6.7 9.5 0 5.6-4.5 10.1-10.1 10.1H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 14v34M19 28h9M28 34h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BulbIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 7c-8 0-14.5 6.4-14.5 14.2 0 5.2 2.7 8.6 6.1 11.7 1.8 1.6 2.9 3.8 2.9 6.2h11c0-2.4 1.1-4.6 2.9-6.2 3.4-3.1 6.1-6.5 6.1-11.7C42.5 13.4 36 7 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M22.5 45h11M24.5 50h7M28 14v6M19 22h6M31 22h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function SmileIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 48c11 0 20-9 20-20S39 8 28 8 8 17 8 28s9 20 20 20Z" stroke="currentColor" strokeWidth="3" />
      <path d="M20 24h.1M36 24h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M19.5 34c5.5 5 11.5 5 17 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M38.8 39c-11.6 0-21-9.4-21-21 0-2.4.4-4.6 1.1-6.7C12 14.6 7.4 21.4 7.4 29.4 7.4 40 16 48.6 26.6 48.6c8 0 14.9-4.7 18.1-11.5-1.8 1.2-3.8 1.9-5.9 1.9Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M40 8v8M36 12h8M47 20v6M44 23h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GrowthIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M10 45h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 39V27M28 39V18M41 39V11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 12h7v7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 29c7.6-.6 15.7-4.7 25-17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function IconBubble({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#21A7A2] bg-[#EAF8F7] text-[#21A7A2] shadow-[0_8px_20px_rgba(33,167,162,0.12)]">
      {children}
    </div>
  )
}

function Molecule() {
  return (
    <div className="relative h-[118px] w-[128px] shrink-0">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 128 118" fill="none" aria-hidden>
        <path d="M64 38 36 82M64 38l28 44" stroke="#9AC9E8" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="absolute left-1/2 top-0 flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full bg-[#21A7A2] text-[18px] font-bold text-white shadow-[0_8px_18px_rgba(33,167,162,0.25)]">D3</div>
      <div className="absolute bottom-0 left-0 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#5EA9DD] text-[16px] font-bold text-white">Ca</div>
      <div className="absolute bottom-0 right-0 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#4D8BCF] text-[16px] font-bold text-white">P</div>
    </div>
  )
}

function Sector({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={`absolute flex h-[183px] w-[183px] items-center justify-center bg-[radial-gradient(circle_at_center,#42BDB7_0%,#21A7A2_72%,#0E8F8B_100%)] text-white ${className}`}>
      {children}
    </div>
  )
}

function SectorContent({ icon, label }: { icon: ReactNode; label: ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center">
      {icon}
      <p className="mt-2 text-[14px] font-bold leading-[1.15] text-white">{label}</p>
    </div>
  )
}

export default function Slide01Audience() {
  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[36px] font-bold leading-[1.08] tracking-normal text-[#18324A]">
          Аудитория и потребность
        </h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">
          Пациент: ребенок школьного возраста
        </p>
      </header>

      <div className="absolute left-[35px] top-[96px] h-[1060px] w-[455px] rounded-[22px] bg-white px-[38px] py-12 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-center text-[26px] font-bold leading-[1.16] text-[#18324A]">
          Интеллектуальный потенциал<br />
          <span className="text-[#21A7A2]">нуждается в поддержке</span>
        </h2>
        <p className="mt-4 text-center text-[16px] font-medium leading-[1.35] text-[#6D7A86]">
          Витамин D3 участвует в развитии мозга<br />
          и помогает ребёнку легче справляться<br />
          с учебными задачами.
        </p>

        <div className="relative mt-7 h-[560px] w-full">
          <svg className="pointer-events-none absolute left-[32px] top-[54px] h-[390px] w-[306px]" viewBox="0 0 306 390" fill="none" aria-hidden>
            <path d="M54 71C15 122 12 247 69 322" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M252 71c39 51 42 176-15 251" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="54" cy="71" r="4" fill="#21A7A2" />
            <circle cx="252" cy="71" r="4" fill="#21A7A2" />
            <circle cx="69" cy="322" r="4" fill="#21A7A2" />
            <circle cx="237" cy="322" r="4" fill="#21A7A2" />
          </svg>

          <div className="absolute left-1/2 top-[138px] h-[366px] w-[300px] -translate-x-1/2 overflow-hidden rounded-[22px] bg-[#F7F3ED]">
            <img
              src="/assets/characters/active-audience-schoolboy.png"
              alt="Школьник за учебой"
              className="h-full w-full object-cover object-[50%_32%]"
              draggable={false}
            />
            <div className="absolute inset-x-0 bottom-0 h-[110px] bg-gradient-to-t from-white via-white/70 to-transparent" />
          </div>

          <div className="absolute left-[-10px] top-[10px] flex w-[128px] flex-col items-center text-center">
            <IconBubble><BrainIcon /></IconBubble>
            <p className="mt-2 text-[11px] font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-[#21A7A2]">КОНЦЕНТРАЦИЯ<br />И ПАМЯТЬ</p>
          </div>
          <div className="absolute right-[-10px] top-[10px] flex w-[128px] flex-col items-center text-center">
            <IconBubble><BulbIcon /></IconBubble>
            <p className="mt-2 text-[11px] font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-[#21A7A2]">ОБУЧЕНИЕ<br />И ПОНЯТИЕ</p>
          </div>
          <div className="absolute left-[-10px] bottom-[20px] flex w-[128px] flex-col items-center text-center">
            <IconBubble><SmileIcon /></IconBubble>
            <p className="mt-2 text-[11px] font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-[#21A7A2]">НАСТРОЕНИЕ<br />И МОТИВАЦИЯ</p>
          </div>
          <div className="absolute right-[-10px] bottom-[20px] flex w-[128px] flex-col items-center text-center">
            <IconBubble><MoonIcon /></IconBubble>
            <p className="mt-2 text-[11px] font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-[#21A7A2]">КАЧЕСТВО<br />СНА</p>
          </div>
        </div>

        <div className="mt-6 flex h-[120px] items-center gap-5 rounded-[18px] bg-[#C8F1EF] px-7 py-6">
          <div className="shrink-0 text-[#0E8F8B]"><ShieldIcon className="h-12 w-12" /></div>
          <p className="text-[17px] font-bold leading-[1.25] text-[#0E6F73]">
            D3 — основа для полноценного<br />развития и уверенности в себе
          </p>
        </div>

        <div className="absolute bottom-[24px] left-1/2 flex -translate-x-1/2 gap-2">
          <span className="h-[10px] w-[10px] rounded-full bg-[#21A7A2]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#D1D5DB]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#D1D5DB]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#D1D5DB]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#D1D5DB]" />
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[1060px] w-[455px] rounded-[22px] bg-white px-[38px] py-12 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-center text-[26px] font-bold leading-[1.16] text-[#18324A]">
          Витамин D3 — больше,<br />чем просто витамин
        </h2>
        <p className="mt-4 text-center text-[16px] font-medium leading-[1.35] text-[#6D7A86]">
          Комплексная поддержка здоровья и развития<br />ребёнка каждый день
        </p>

        <div className="relative mx-auto mt-10 h-[380px] w-[380px] overflow-hidden rounded-full bg-white shadow-[0_14px_32px_rgba(33,167,162,0.18)]">
          <Sector className="left-0 top-0 rounded-tl-full border-r-[7px] border-b-[7px] border-white pl-7 pt-7">
            <SectorContent icon={<BrainIcon className="h-10 w-10" />} label={<>Концентрация<br />и обучение</>} />
          </Sector>
          <Sector className="right-0 top-0 rounded-tr-full border-b-[7px] border-l-[7px] border-white pr-7 pt-7">
            <SectorContent icon={<ShieldIcon className="h-10 w-10" />} label={<>Иммунитет<br />и защита</>} />
          </Sector>
          <Sector className="bottom-0 left-0 rounded-bl-full border-t-[7px] border-r-[7px] border-white pb-7 pl-7">
            <SectorContent icon={<MoonIcon className="h-10 w-10" />} label={<>Настроение<br />и сон</>} />
          </Sector>
          <Sector className="bottom-0 right-0 rounded-br-full border-t-[7px] border-l-[7px] border-white pb-7 pr-7">
            <SectorContent icon={<GrowthIcon className="h-10 w-10" />} label={<>Рост<br />и развитие</>} />
          </Sector>
          <div className="absolute left-1/2 top-1/2 flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle,#FFD45C_0%,#F8B534_70%)] text-[34px] font-bold text-white shadow-[0_0_35px_rgba(248,181,52,0.65)]">
            D3
          </div>
        </div>

        <div className="mt-12 flex h-[170px] items-center justify-between rounded-[16px] border border-[#E4E8EB] bg-white p-6">
          <div>
            <h3 className="text-[20px] font-bold leading-tight text-[#21A7A2]">Активная формула</h3>
            <ul className="mt-4 space-y-2 text-[14px] font-semibold leading-tight text-[#18324A]">
              <li><span className="mr-2 text-[#21A7A2]">✓</span>Усвоение кальция и фосфора</li>
              <li><span className="mr-2 text-[#21A7A2]">✓</span>Поддержка костной системы</li>
              <li><span className="mr-2 text-[#21A7A2]">✓</span>Снижение риска дефицита</li>
            </ul>
          </div>
          <Molecule />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/38 backdrop-blur-[1px]" />
    </section>
  )
}
