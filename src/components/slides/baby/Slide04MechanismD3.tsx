import { useState } from 'react'
import type { ReactNode } from 'react'

const NAVY = '#18324A'

type RoleBabyTab = 'bones' | 'sleep' | 'immunity' | 'muscles'

function BoneIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M18 21 35 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M16 24c-3.2 1-6.5-.9-7.4-4-.8-3 .8-6.1 3.6-7.3-.2-3 1.9-5.8 5-6.7 3.2-1 6.6.9 7.6 4.1.5 1.8.1 3.6-.8 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M40 32c3.2-1 6.5.9 7.4 4 .8 3-.8 6.1-3.6 7.3.2 3-1.9 5.8-5 6.7-3.2 1-6.6-.9-7.6-4.1-.5-1.8-.1-3.6.8-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function CaPIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="3" /><circle cx="37" cy="36" r="10" stroke="#FFA726" strokeWidth="3" /><path d="M17 22c0-3.1 2-5.2 5-5.2 1.7 0 3 .6 4 1.8M26 25.4c-1 1.2-2.3 1.8-4 1.8-3 0-5-2.1-5-5.2M34 40V31h4.2c2.4 0 4 1.5 4 3.7s-1.6 3.7-4 3.7H34" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function GrowthIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M10 44h36M14 42V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M18 37c5-8 9-11 14-13l5 4 8-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M39 16h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ShieldIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function HeartIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 47S10 36.5 10 22.4C10 15.7 14.2 11 20.2 11c3.6 0 6.4 1.8 7.8 4.4C29.4 12.8 32.2 11 35.8 11 41.8 11 46 15.7 46 22.4 46 36.5 28 47 28 47Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg>
}

function CheckIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M17 29.5 25 37 40 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ClockIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="28" r="19" stroke="currentColor" strokeWidth="3" /><path d="M28 16v13l8 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 10 9 15M42 10l5 5" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" /></svg>
}

function MoonStarsIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M36.5 42.5C25.8 42.5 17 33.7 17 23c0-5.5 2.3-10.5 6-14A19.5 19.5 0 1 0 47 33c-3.5 5.8-6.6 9.5-10.5 9.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M40 10l1.4 3.8L45 15l-3.6 1.2L40 20l-1.4-3.8L35 15l3.6-1.2L40 10ZM29 7l.9 2.2L32 10l-2.1.8L29 13l-.9-2.2L26 10l2.1-.8L29 7Z" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SleepCloudIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M19 39h21c4.4 0 8-3.2 8-7.2 0-3.7-3.1-6.8-7.1-7.2C39.5 18.5 34.3 14 28 14c-6.8 0-12.4 5.2-13 11.8C10.9 27 8 30.1 8 34c0 4.1 3.5 5 11 5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M31 22h8l-8 8h8M17 12h7l-7 7h7" stroke="#FFA726" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function CareHeartIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 33s-9-5.3-9-12.3c0-3.6 2.3-6 5.2-6 1.8 0 3.1.9 3.8 2.2.7-1.3 2-2.2 3.8-2.2 2.9 0 5.2 2.4 5.2 6C37 27.7 28 33 28 33Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M12 36c5.5 0 10 2 13.5 6H31c4.8 0 9.5-1.7 13-4.8l3-2.7M10 44h11M44 34c-4.4 0-7.5 1.4-10 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function BrainMoonIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M21 43c-5.8 0-10.5-4.5-10.5-10.1 0-3.4 1.7-6.3 4.2-8.2-.4-1.1-.7-2.3-.7-3.6 0-4.7 3.8-8.6 8.6-8.6 1.4-3.7 5-6.4 9.2-6.4 5.4 0 9.8 4.4 9.8 9.8v.9c3.9 1.4 6.7 5.1 6.7 9.5 0 5.6-4.5 10.1-10.1 10.1H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M28 14v34M19 28h9M28 34h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M39 14c-2.2 3.2-.1 7.5 3.8 7.5 1.3 0 2.6-.5 3.5-1.4" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" /></svg>
}

function StarIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="m28 8 5.5 11.4 12.5 1.8-9 8.8 2.1 12.4L28 36.5 16.9 42.4 19 30l-9-8.8 12.5-1.8L28 8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg>
}

function ImmuneCellIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="3" /><path d="M28 7v8M28 41v8M7 28h8M41 28h8M13 13l6 6M37 37l6 6M43 13l-6 6M19 37l-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M25 28h6M28 25v6" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" /></svg>
}

function AntibodyIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 48V28M28 28 14 14M28 28l14-14M28 35 16 47M28 35l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 11l6 6M39 11l6 6M13 49l6-6M37 43l6 6" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" /></svg>
}

function MedicalShieldIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M28 19v16M20 27h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M39 18h.1M17 39h.1" stroke="#FFA726" strokeWidth="5" strokeLinecap="round" /></svg>
}

function MuscleIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M17 34c7.5 0 13-4.8 15-12l1.3-4.8c.6-2.3 2.9-3.7 5.2-3.1 2.4.6 3.8 3 3.1 5.4l-1.8 6.7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 29c-3.4 2.6-5.2 6.9-3.7 10.8 1.9 5 8.2 7.2 14.1 4.9L39 39c4.2-1.6 7.4-4.8 8.7-8.9l1.1-3.3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 27c2.6 3.2 6 4.9 10.2 5" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" /></svg>
}

function CoordinationIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="13" r="6" stroke="currentColor" strokeWidth="3" /><path d="M28 20v14M14 27l14-5 14 5M20 47l8-13 8 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 17c3-4 7-6 12-6M44 17c-3-4-7-6-12-6" stroke="#FFA726" strokeWidth="2.6" strokeLinecap="round" /></svg>
}

function CrawlingBabyIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="38" cy="18" r="6" stroke="currentColor" strokeWidth="3" /><path d="M14 35c5-7 12-10 21-8M24 29l-8 12M31 28l8 12M14 42h8M35 42h9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 25c2-4 5.4-6.5 10-7.2" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" /></svg>
}

function ActivityIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="30" cy="11" r="5" stroke="currentColor" strokeWidth="3" /><path d="M24 22h10l-3 10 8 11M28 32l-8 11M24 22l-8 7M34 22l8 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 45h34" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" /></svg>
}

function CircleIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#21A7A2] bg-[#EAF8F7] text-[#21A7A2] shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
      {children}
    </div>
  )
}

function InfoCard({ icon, title, text, accent = 'teal' }: { icon: ReactNode; title: string; text: string; accent?: 'teal' | 'orange' }) {
  const isOrange = accent === 'orange'
  return (
    <article className="flex min-h-[112px] items-start gap-4 rounded-[16px] border border-[#E4E8EB] bg-white px-5 py-4 shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
      <div className={`flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full ${isOrange ? 'bg-[#FFF9EF] text-[#FFA726]' : 'bg-[#EAF8F7] text-[#21A7A2]'}`}>{icon}</div>
      <div className="min-w-0">
        <h3 className={`text-[16.5px] font-bold leading-tight ${isOrange ? 'text-[#FFA726]' : 'text-[#21A7A2]'}`}>{title}</h3>
        <p className="mt-2 whitespace-pre-line text-[13px] font-medium leading-[1.3] text-[#6D7A86]">{text}</p>
      </div>
    </article>
  )
}

function BonesContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[1010px] w-[400px] rounded-[22px] bg-white px-6 py-[30px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="relative h-[792px] w-full overflow-visible">
          <div className="absolute left-1/2 top-0 h-[640px] w-[330px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#FFF4E8]">
            <img src="/assets/characters/baby-growth.png" alt="Фото младенца" className="h-full w-full object-cover object-center" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[175px] bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[26px] top-[54px] h-[470px] w-[300px]" viewBox="0 0 300 470" fill="none" aria-hidden>
            <path d="M66 82C22 145 18 274 72 360" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M234 82c44 63 48 192-6 278" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="82" r="4" fill="#21A7A2" />
            <circle cx="234" cy="82" r="4" fill="#21A7A2" />
            <circle cx="72" cy="360" r="4" fill="#21A7A2" />
            <circle cx="228" cy="360" r="4" fill="#21A7A2" />
          </svg>

          <div className="absolute left-[-12px] top-[58px] flex w-[126px] flex-col items-center text-center"><CircleIcon><BoneIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Крепкие<br />кости</p></div>
          <div className="absolute right-[-12px] top-[58px] flex w-[126px] flex-col items-center text-center"><CircleIcon><CaPIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Усвоение<br />кальция<br />и фосфора</p></div>
          <div className="absolute left-[-12px] bottom-[246px] flex w-[126px] flex-col items-center text-center"><CircleIcon><GrowthIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Поддержка<br />роста скелета</p></div>
          <div className="absolute right-[-12px] bottom-[246px] flex w-[126px] flex-col items-center text-center"><CircleIcon><ShieldIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Защита от<br />дефицита</p></div>
        </div>

        <div className="mt-2 flex gap-[14px] rounded-[16px] border border-[#E4E8EB] bg-white px-5 py-4 shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
          <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2]"><HeartIcon /></div>
          <div>
            <h3 className="text-[16px] font-bold leading-tight text-[#18324A]">Основа прочного будущего</h3>
            <p className="mt-2 text-[13px] font-medium leading-[1.35] text-[#6D7A86]">Витамин D3 помогает формированию<br />здорового скелета и правильному развитию<br />ребёнка с первых дней жизни.</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[1010px] w-[555px] rounded-[22px] bg-white px-9 py-10 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[26px] font-bold leading-[1.22] text-[#21A7A2]">Роль витамина D3<br />в формировании скелета у младенца</h2>
        <p className="mt-4 text-[14.5px] font-medium leading-[1.42] text-[#6D7A86]">Витамин D3 играет ключевую роль в развитии<br />костной системы и обеспечивает прочную основу<br />для активного роста и движения.</p>

        <div className="mt-5 space-y-3">
          <InfoCard icon={<BoneIcon />} title="Минерализация костей" text={'Витамин D3 способствует отложению кальция\nи фосфора в костной ткани, делая её более\nплотной и прочной.'} />
          <InfoCard icon={<CaPIcon />} title="Усвоение кальция и фосфора" text={'Усиливает всасывание кальция и фосфора\nв кишечнике и их поступление в кровь —\nнеобходимых минералов для костей.'} accent="orange" />
          <InfoCard icon={<GrowthIcon />} title="Рост скелета" text={'Необходим для нормального роста костей\nи формирования их правильной формы\nв период активного роста ребёнка.'} />
          <InfoCard icon={<ShieldIcon />} title="Профилактика дефицита" text={'Достаточный уровень витамина D3 снижает\nриск рахита и других нарушений минерализации\nкостей.'} accent="orange" />
        </div>

        <div className="mt-4 flex gap-4 rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-5 py-4">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-white"><CheckIcon /></div>
          <div>
            <h3 className="text-[17px] font-bold leading-tight text-[#21A7A2]">Итог</h3>
            <p className="mt-2 text-[13.5px] font-medium leading-[1.32] text-[#18324A]">Витамин D3 — незаменимый элемент для крепких<br />костей и здорового развития вашего малыша<br />с первых дней жизни.</p>
          </div>
        </div>
      </div>
    </>
  )
}


function SleepContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[1010px] w-[400px] rounded-[22px] bg-white px-6 py-[30px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[26px] font-bold leading-[1.25] text-[#21A7A2]">Здоровый сон<br />для гармоничного развития</h2>
        <p className="mt-3 text-[15.5px] font-medium leading-[1.45] text-[#6D7A86]">Витамин D3 помогает малышу<br />спокойно засыпать и полноценно отдыхать</p>

        <div className="relative mt-5 h-[650px] w-full overflow-visible">
          <div className="absolute left-1/2 top-0 h-[560px] w-[330px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#FFF4E8]">
            <img src="/assets/characters/baby-sleep.png" alt="Фото спящего младенца" className="h-full w-full object-cover object-center" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[155px] bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[26px] top-[36px] h-[430px] w-[300px]" viewBox="0 0 300 430" fill="none" aria-hidden>
            <path d="M66 82C22 142 18 252 72 332" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M234 82c44 60 48 170-6 250" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="82" r="4" fill="#21A7A2" />
            <circle cx="234" cy="82" r="4" fill="#21A7A2" />
            <circle cx="72" cy="332" r="4" fill="#21A7A2" />
            <circle cx="228" cy="332" r="4" fill="#21A7A2" />
          </svg>

          <div className="absolute left-[-12px] top-[40px] flex w-[126px] flex-col items-center text-center"><CircleIcon><ClockIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Поддержка<br />циркадных<br />ритмов</p></div>
          <div className="absolute right-[-12px] top-[40px] flex w-[126px] flex-col items-center text-center"><CircleIcon><MoonStarsIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Участие<br />в регуляции<br />мелатонина</p></div>
          <div className="absolute left-[-12px] bottom-[42px] flex w-[126px] flex-col items-center text-center"><CircleIcon><SleepCloudIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Более спокойное<br />засыпание<br />и крепкий сон</p></div>
          <div className="absolute right-[-12px] bottom-[42px] flex w-[126px] flex-col items-center text-center"><CircleIcon><CareHeartIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Комфорт<br />и восстановление<br />каждый день</p></div>
        </div>

        <div className="mt-4 flex gap-[14px] rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-5 py-4">
          <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-white"><ShieldIcon className="h-8 w-8" /></div>
          <div>
            <h3 className="text-[16px] font-bold leading-tight text-[#21A7A2]">Поддержка сна — поддержка развития</h3>
            <p className="mt-2 text-[13px] font-medium leading-[1.35] text-[#18324A]">Качественный сон важен для роста, когнитивных<br />функций и эмоционального благополучия<br />малыша.</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[1010px] w-[555px] rounded-[22px] bg-white px-9 py-10 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[26px] font-bold leading-[1.22] text-[#21A7A2]">Как витамин D3 влияет на сон<br />и суточные ритмы малыша</h2>
        <p className="mt-[18px] text-[14.5px] font-medium leading-[1.42] text-[#6D7A86]">Витамин D3 участвует в сложных биологических<br />процессах, которые помогают малышу адаптироваться<br />к окружающему миру, засыпать спокойнее и спать крепче.</p>

        <div className="mt-5 space-y-3">
          <InfoCard icon={<ClockIcon />} title="Циркадные ритмы" text={'D3 способствует формированию\nи стабильности суточных ритмов,\nпомогая малышу различать день\nи ночь.'} />
          <InfoCard icon={<BrainMoonIcon />} title="Мелатонин" text={'Витамин D3 участвует в регуляции\nсинтеза мелатонина — гормона сна,\nчто облегчает засыпание\nи продлевает глубокие фазы сна.'} />
          <InfoCard icon={<SleepCloudIcon />} title="Качество сна" text={'Адекватный уровень D3 связан\nс более продолжительным сном\nи меньшим количеством ночных\nпробуждений.'} />
          <InfoCard icon={<CareHeartIcon />} title={'Спокойствие\nи восстановление'} text={'D3 помогает снизить возбудимость\nнервной системы и способствует\nэмоциональному комфорту\nв течение дня.'} />
        </div>

        <div className="mt-4 flex gap-4 rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-5 py-4">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-white"><StarIcon /></div>
          <div>
            <h3 className="text-[17px] font-bold leading-tight text-[#21A7A2]">Здоровый сон сегодня — уверенное развитие завтра</h3>
            <p className="mt-2 text-[13.5px] font-medium leading-[1.32] text-[#18324A]">Достаточный уровень витамина D3 закладывает<br />основу для гармоничного роста, обучения<br />и эмоционального благополучия ребёнка.</p>
          </div>
        </div>
      </div>
    </>
  )
}


function ImmunityContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[1010px] w-[400px] rounded-[22px] bg-white px-6 py-[30px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="relative h-[792px] w-full overflow-visible">
          <div className="absolute left-1/2 top-0 h-[620px] w-[330px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#FFF4E8]">
            <img src="/assets/characters/baby-immunity.png" alt="Фото младенца" className="h-full w-full object-cover object-center" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[170px] bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[26px] top-[54px] h-[455px] w-[300px]" viewBox="0 0 300 455" fill="none" aria-hidden>
            <path d="M66 82C22 145 18 265 72 350" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M234 82c44 63 48 183-6 268" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="82" r="4" fill="#21A7A2" />
            <circle cx="234" cy="82" r="4" fill="#21A7A2" />
            <circle cx="72" cy="350" r="4" fill="#21A7A2" />
            <circle cx="228" cy="350" r="4" fill="#21A7A2" />
          </svg>

          <div className="absolute left-[-12px] top-[58px] flex w-[126px] flex-col items-center text-center"><CircleIcon><ShieldIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Барьерная<br />защита</p></div>
          <div className="absolute right-[-12px] top-[58px] flex w-[126px] flex-col items-center text-center"><CircleIcon><ImmuneCellIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Врожденный<br />иммунитет</p></div>
          <div className="absolute left-[-12px] bottom-[238px] flex w-[126px] flex-col items-center text-center"><CircleIcon><AntibodyIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Адаптивный<br />иммунный ответ</p></div>
          <div className="absolute right-[-12px] bottom-[238px] flex w-[126px] flex-col items-center text-center"><CircleIcon><ShieldIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Защита<br />от инфекций</p></div>
        </div>

        <div className="mt-2 flex gap-[14px] rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-5 py-4">
          <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-white"><MedicalShieldIcon className="h-8 w-8" /></div>
          <div>
            <h3 className="text-[16px] font-bold leading-tight text-[#21A7A2]">Поддержка каждый день</h3>
            <p className="mt-2 text-[13px] font-medium leading-[1.35] text-[#18324A]">Витамин D3 помогает формировать<br />сильную и сбалансированную<br />иммунную систему с первых месяцев<br />жизни.</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[1010px] w-[555px] rounded-[22px] bg-white px-9 py-10 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[26px] font-bold leading-[1.22] text-[#21A7A2]">Иммунная роль витамина D3<br />у младенца</h2>
        <div className="mt-[14px] h-[3px] w-12 rounded-full bg-[#21A7A2]" />
        <p className="mt-5 text-[14.5px] font-medium leading-[1.42] text-[#6D7A86]">Витамин D3 участвует в ключевых звеньях иммунной<br />системы, помогая организму ребёнка эффективно<br />защищаться и сохранять баланс.</p>

        <div className="mt-5 space-y-3">
          <InfoCard icon={<ShieldIcon />} title="Барьерная защита" text={'D3 поддерживает целостность кожи и слизистых\nоболочек, укрепляя естественный барьер\nпротив бактерий, вирусов и аллергенов.'} />
          <InfoCard icon={<ImmuneCellIcon />} title="Врожденный иммунитет" text={'Активирует клетки врожденного иммунитета\nи усиливает выработку антимикробных пептидов.'} />
          <InfoCard icon={<AntibodyIcon />} title="Адаптивный ответ" text={'Способствует созреванию T- и B-клеток,\nподдерживает выработку антител и формирование\nэффективного иммунного ответа.'} />
          <InfoCard icon={<ShieldIcon />} title="Профилактика инфекций" text={'Снижает частоту и тяжесть респираторных\nинфекций, поддерживая сбалансированную\nиммунную реактивность.'} accent="orange" />
        </div>

        <div className="mt-4 flex gap-4 rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-5 py-4">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-white"><StarIcon /></div>
          <div>
            <h3 className="text-[17px] font-bold leading-tight text-[#21A7A2]">Главное</h3>
            <p className="mt-2 text-[13.5px] font-medium leading-[1.32] text-[#18324A]">Витамин D3 помогает иммунной системе работать<br />гармонично — защищать, адаптироваться и сохранять<br />здоровье ребёнка каждый день.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function MusclesContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[1010px] w-[400px] rounded-[22px] bg-white px-6 py-[30px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="relative h-[792px] w-full overflow-visible">
          <div className="absolute left-1/2 top-0 h-[620px] w-[330px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#FFF4E8]">
            <img src="/assets/characters/baby-growth.png" alt="Фото активного младенца" className="h-full w-full object-cover object-center" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[170px] bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[26px] top-[54px] h-[455px] w-[300px]" viewBox="0 0 300 455" fill="none" aria-hidden>
            <path d="M66 82C22 145 18 265 72 350" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M234 82c44 63 48 183-6 268" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="82" r="4" fill="#21A7A2" />
            <circle cx="234" cy="82" r="4" fill="#21A7A2" />
            <circle cx="72" cy="350" r="4" fill="#21A7A2" />
            <circle cx="228" cy="350" r="4" fill="#21A7A2" />
          </svg>

          <div className="absolute left-[-12px] top-[58px] flex w-[126px] flex-col items-center text-center"><CircleIcon><MuscleIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Мышечный<br />тонус</p></div>
          <div className="absolute right-[-12px] top-[58px] flex w-[126px] flex-col items-center text-center"><CircleIcon><CoordinationIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Координация<br />движений</p></div>
          <div className="absolute left-[-12px] bottom-[238px] flex w-[126px] flex-col items-center text-center"><CircleIcon><CrawlingBabyIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Моторное<br />развитие</p></div>
          <div className="absolute right-[-12px] bottom-[238px] flex w-[126px] flex-col items-center text-center"><CircleIcon><ActivityIcon /></CircleIcon><p className="mt-2 text-[12px] font-semibold leading-[1.15] text-[#18324A]">Физическая<br />активность</p></div>
        </div>

        <div className="mt-2 flex gap-[14px] rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-5 py-4">
          <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-white"><ShieldIcon className="h-8 w-8" /></div>
          <div>
            <h3 className="text-[16px] font-bold leading-tight text-[#21A7A2]">Поддержка движения<br />с первых месяцев жизни</h3>
            <p className="mt-2 text-[13px] font-medium leading-[1.35] text-[#18324A]">Витамин D3 способствует укреплению<br />мышц и формированию двигательных<br />навыков, помогая малышу активно<br />познавать мир.</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[1010px] w-[555px] rounded-[22px] bg-white px-9 py-10 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[26px] font-bold leading-[1.22] text-[#21A7A2]">Мышечная и двигательная роль<br />витамина D3 у младенца</h2>
        <div className="mt-[14px] h-[3px] w-12 rounded-full bg-[#21A7A2]" />
        <p className="mt-5 text-[14.5px] font-medium leading-[1.42] text-[#6D7A86]">Витамин D3 действует не только на кости, но и на мышцы.<br />Он играет ключевую роль в формировании силы,<br />координации и двигательной активности ребёнка.</p>

        <div className="mt-5 space-y-3">
          <InfoCard icon={<MuscleIcon />} title="Мышечный тонус" text={'D3 способствует поддержанию оптимального\nтонуса скелетных мышц, предотвращая\nмышечную слабость и гипотонию.'} />
          <InfoCard icon={<CoordinationIcon />} title="Координация движений" text={'Витамин D3 участвует в передаче нервных\nимпульсов и работе мышц, улучшая\nкоординацию и точность движений.'} />
          <InfoCard icon={<CrawlingBabyIcon />} title="Моторное развитие" text={'D3 поддерживает своевременное освоение\nдвигательных навыков: перевороты, ползание,\nсидение, ходьба.'} />
          <InfoCard icon={<ActivityIcon />} title="Физическая активность" text={'Достаточный уровень D3 помогает малышу\nбыть активным, выносливым и меньше\nуставать в течение дня.'} />
        </div>

        <div className="mt-4 flex gap-4 rounded-[16px] border border-[#F6B24B] bg-[#FFF9EF] px-5 py-4">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#FFA726] text-white"><StarIcon /></div>
          <div>
            <h3 className="text-[17px] font-bold leading-tight text-[#FFA726]">Активное движение — здоровое будущее</h3>
            <p className="mt-2 text-[13.5px] font-medium leading-[1.32] text-[#18324A]">Поддерживая мышцы и двигательную систему,<br />витамин D3 создаёт фундамент для гармоничного<br />физического развития и уверенных шагов в жизни.</p>
          </div>
        </div>
      </div>
    </>
  )
}


function PlaceholderContent({ label }: { label: string }) {
  return (
    <div className="absolute left-[35px] right-[35px] top-[96px] flex h-[1010px] items-center justify-center rounded-[22px] bg-white text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
      <p className="text-[24px] font-bold leading-tight text-[#18324A]">{label}: контент будет добавлен следующим промтом.</p>
    </div>
  )
}

const roleTabs: Array<{ id: RoleBabyTab; label: string; placeholder: string }> = [
  { id: 'bones', label: '🦴 Кости', placeholder: 'Кости' },
  { id: 'sleep', label: '😴 Сон', placeholder: 'Сон' },
  { id: 'immunity', label: '🛡️ Иммунитет', placeholder: 'Иммунитет' },
  { id: 'muscles', label: '💪 Мышцы', placeholder: 'Мышцы' },
]

export default function Slide04MechanismD3() {
  const [activeRoleBabyTab, setActiveRoleBabyTab] = useState<RoleBabyTab>('muscles')
  const placeholder = roleTabs.find((tab) => tab.id === activeRoleBabyTab)?.placeholder ?? activeRoleBabyTab

  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[36px] font-bold leading-[1.15] tracking-normal text-[#18324A]">Роль D3</h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">Механизм действия витамина D3 у младенца</p>
      </header>

      {activeRoleBabyTab === 'bones' ? <BonesContent /> : activeRoleBabyTab === 'sleep' ? <SleepContent /> : activeRoleBabyTab === 'immunity' ? <ImmunityContent /> : activeRoleBabyTab === 'muscles' ? <MusclesContent /> : <PlaceholderContent label={placeholder} />}

      <div className="absolute left-[35px] top-[1130px] flex h-11 items-center gap-3">
        {roleTabs.map((tab) => {
          const isActive = activeRoleBabyTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              className={`h-11 cursor-pointer rounded-[12px] px-5 text-[16px] font-bold transition duration-200 ease-in-out ${isActive ? 'bg-[#FFA726] text-white shadow-[0_8px_20px_rgba(255,167,38,0.25)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86] shadow-[0_6px_14px_rgba(0,0,0,0.05)] hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]'}`}
              onClick={() => setActiveRoleBabyTab(tab.id)}
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
