import { useState } from 'react'
import type { ReactNode } from 'react'

const NAVY = '#18324A'

type DeficiencyStage = 'early' | 'late'

function SweatIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M20 9s-8 9-8 15a8 8 0 0 0 16 0c0-6-8-15-8-15Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M38 16s-6 7-6 11.5a6 6 0 0 0 12 0C44 23 38 16 38 16Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M29 36s-5 5.8-5 9.5a5 5 0 0 0 10 0C34 41.8 29 36 29 36Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg>
}

function MoonIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M36.5 42.5C25.8 42.5 17 33.7 17 23c0-5.5 2.3-10.5 6-14A19.5 19.5 0 1 0 47 33c-3.5 5.8-6.6 9.5-10.5 9.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M40 10l1.4 3.8L45 15l-3.6 1.2L40 20l-1.4-3.8L35 15l3.6-1.2L40 10ZM29 7l.9 2.2L32 10l-2.1.8L29 13l-.9-2.2L26 10l2.1-.8L29 7Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function HeartIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 47S10 36.5 10 22.4C10 15.7 14.2 11 20.2 11c3.6 0 6.4 1.8 7.8 4.4C29.4 12.8 32.2 11 35.8 11 41.8 11 46 15.7 46 22.4 46 36.5 28 47 28 47Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg>
}

function LightningIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M32 6 14 31h13l-3 19 18-26H29L32 6Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ShieldCheckIcon({ className = 'h-10 w-10' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function InfoIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 25v15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><path d="M28 17h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>
}

function BoneIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M18 21 35 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M16 24c-3.2 1-6.5-.9-7.4-4-.8-3 .8-6.1 3.6-7.3-.2-3 1.9-5.8 5-6.7 3.2-1 6.6.9 7.6 4.1.5 1.8.1 3.6-.8 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M40 32c3.2-1 6.5.9 7.4 4 .8 3-.8 6.1-3.6 7.3.2 3-1.9 5.8-5 6.7-3.2 1-6.6-.9-7.6-4.1-.5-1.8-.1-3.6.8-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SkeletonIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 8v40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M18 16c4-2.5 16-2.5 20 0M14 22c7 3.6 21 3.6 28 0M17 31h22M21 40l7-9 7 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function DevelopmentIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M30 8c-8.2 0-14.8 6.2-14.8 14 0 4.4 2.1 8.2 5.4 10.8V45h15.8v-8c5-2.1 8.4-7 8.4-12.8C44.8 15.3 38.2 8 30 8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M24 25h12M30 19v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M9 45h10M13 37v8M41 45h7M44.5 38v7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function ImmuneIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7 44 13.5v11.2c0 10.2-6.3 19.3-16 23.5-9.7-4.2-16-13.3-16-23.5V13.5L28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M28 20v15M20.5 27.5h15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M46 16h.1M49 28h.1M40 43h.1M10 20h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>
}

function RibsIcon({ className = 'h-12 w-12' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 9v38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M28 16c-8 0-14 4.3-16.5 11M28 16c8 0 14 4.3 16.5 11M28 25c-7 0-12.4 3.7-14.6 9.2M28 25c7 0 12.4 3.7 14.6 9.2M28 34c-5.7 0-10.1 2.9-12 7M28 34c5.7 0 10.1 2.9 12 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M22 12h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function LateIconBox({ children }: { children: ReactNode }) {
  return <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#FFF4D8] text-[#FFA726]">{children}</div>
}

function LateIllustration({ children }: { children: ReactNode }) {
  return <div className="flex h-[110px] w-[120px] shrink-0 items-center justify-center rounded-[14px] bg-[#FFF9EF] text-[#F28C00]">{children}</div>
}

function StageDot({ active, index }: { active: boolean; index: number }) {
  return (
    <div className={`relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[15px] font-bold ${active ? 'bg-[#FFA726] text-white shadow-[0_8px_16px_rgba(255,167,38,0.25)]' : 'border border-[#D8DEE5] bg-white text-[#8A96A3]'}`}>
      {index}
    </div>
  )
}

function SignCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="flex min-h-[122px] items-start gap-[18px] rounded-[16px] border border-[#E4E8EB] bg-white px-5 py-[18px] shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
      <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full bg-[#F8F8F8] text-[#21A7A2]">
        <div className="relative">
          {icon}
          <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-[#FFA726]" />
        </div>
      </div>
      <div className="min-w-0">
        <h3 className="text-[17px] font-bold leading-tight text-[#18324A]">{title}</h3>
        <p className="mt-2 whitespace-pre-line text-[13.5px] font-medium leading-[1.35] text-[#6D7A86]">{text}</p>
      </div>
    </article>
  )
}

function RiskRow({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="flex items-center gap-3 rounded-[12px] border border-[#E4E8EB] bg-white px-[14px] py-3 shadow-[0_5px_14px_rgba(0,0,0,0.04)]">
      <LateIconBox>{icon}</LateIconBox>
      <div className="min-w-0 flex-1">
        <h3 className="text-[14px] font-bold leading-tight text-[#18324A]">{title}</h3>
        <p className="mt-1 text-[11.5px] font-medium leading-[1.2] text-[#6D7A86]">{text}</p>
      </div>
      <span className="shrink-0 text-[26px] font-light leading-none text-[#FFA726]">›</span>
    </article>
  )
}

function ComplicationCard({ icon, title, text, note }: { icon: ReactNode; title: string; text: string; note: string }) {
  return (
    <article className="flex min-h-[154px] gap-[18px] rounded-[16px] border border-[#E4E8EB] bg-white px-5 py-[18px] shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
      <LateIllustration>{icon}</LateIllustration>
      <div className="min-w-0 flex-1">
        <h3 className="text-[18px] font-bold leading-tight text-[#F28C00]">{title}</h3>
        <p className="mt-2 whitespace-pre-line text-[13px] font-medium leading-[1.34] text-[#18324A]">{text}</p>
        <div className="mt-2 flex gap-2 rounded-[10px] bg-[#EAF8F7] px-3 py-2">
          <div className="mt-[1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2]"><InfoIcon className="h-3.5 w-3.5" /></div>
          <p className="whitespace-pre-line text-[11px] font-medium leading-[1.2] text-[#6D7A86]">{note}</p>
        </div>
      </div>
    </article>
  )
}

const stages = [
  'Ранние признаки',
  'Нарушение минерализации костей',
  'Деформации грудной клетки и конечностей',
  'Задержка моторного развития',
  'Поздние осложнения',
]

function EarlyContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[1010px] w-[430px] rounded-[22px] bg-white px-7 py-[34px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div>
          <p className="text-[14px] font-semibold leading-tight text-[#FFA726]">Вы находитесь на этапе</p>
          <h2 className="mt-1 text-[26px] font-bold leading-tight text-[#FFA726]">Ранние признаки</h2>
          <p className="mt-3 text-[15.5px] font-medium leading-[1.45] text-[#6D7A86]">Лёгкие проявления дефицита<br />витамина D3 у малыша, которые<br />важно заметить вовремя.</p>
        </div>

        <div className="relative mt-6 h-[665px]">
          <div className="absolute left-0 top-8 w-[142px]">
            <div className="absolute left-[16px] top-[20px] h-[446px] border-l-2 border-dashed border-[#D8DEE5]" />
            <div className="space-y-[23px]">
              {stages.map((stage, index) => {
                const active = index === 0
                return (
                  <div key={stage} className="relative flex items-center gap-2.5">
                    <StageDot active={active} index={index + 1} />
                    <p className={`w-[95px] text-[11px] font-bold leading-[1.15] ${active ? 'text-[#FFA726]' : 'text-[#8A96A3]'}`}>{stage}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="absolute right-0 top-0 h-[590px] w-[282px] overflow-hidden rounded-[24px] bg-[#FFF4E6]">
            <img src="/assets/characters/baby-restless.png" alt="Фото младенца" className="h-full w-full object-cover object-center" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[170px] bg-gradient-to-t from-white via-white/82 to-transparent" />
          </div>
        </div>

        <div className="absolute bottom-[34px] left-7 right-7">
          <div className="mb-2 flex justify-between text-[12px] font-bold text-[#8A96A3]"><span className="text-[#FFA726]">Ранние признаки</span><span>Осложнения</span></div>
          <div className="relative h-[8px] rounded-full bg-[#E4E8EB]">
            <div className="h-full w-[13%] rounded-full bg-[#FFA726]" />
            <div className="absolute left-[12%] top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full border-[4px] border-white bg-[#FFA726] shadow-[0_6px_14px_rgba(255,167,38,0.35)]" />
          </div>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[1010px] w-[500px] rounded-[22px] bg-white px-[34px] py-9 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[24px] font-bold leading-[1.3] text-[#18324A]">Как проявляется дефицит<br />витамина D3 на раннем этапе</h2>
        <p className="mt-3 text-[15px] font-medium leading-tight text-[#6D7A86]">Обратите внимание на следующие признаки.</p>

        <div className="mt-6 space-y-4">
          <SignCard icon={<SweatIcon />} title="Потливость" text={'Ребёнок потеет во время сна или при\nнезначительной активности, особенно\nв области затылка и шеи.'} />
          <SignCard icon={<MoonIcon />} title="Нарушение сна" text={'Трудности с засыпанием, частые\nпробуждения, беспокойный и\nнепродолжительный сон.'} />
          <SignCard icon={<HeartIcon />} title="Беспокойство" text={'Повышенная капризность, плач без\nвидимых причин, трудности с\nуспокоением.'} />
          <SignCard icon={<LightningIcon />} title="Повышенная возбудимость" text={'Ребёнок легко возбуждается, остро\nреагирует на раздражители, быстро\nутомляется.'} />
        </div>

        <div className="mt-5 flex gap-[18px] rounded-[16px] border-[1.5px] border-[#F6B24B] bg-[#FFF9EF] px-[22px] py-5">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-white text-[#FFA726] shadow-[0_6px_14px_rgba(0,0,0,0.05)]"><ShieldCheckIcon /></div>
          <div>
            <h3 className="text-[17px] font-bold leading-tight text-[#18324A]">Ранняя профилактика — залог здоровья</h3>
            <p className="mt-2 text-[14px] font-medium leading-[1.35] text-[#6D7A86]">Своевременное восполнение уровня<br />витамина D3 помогает предотвратить<br />развитие осложнений и поддерживает<br />гармоничное развитие малыша.</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-[12px] bg-[#EAF8F7] px-[18px] py-3.5">
          <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2]"><InfoIcon /></div>
          <p className="text-[13.5px] font-semibold leading-[1.3] text-[#18324A]">При наличии признаков проконсультируйтесь с<br />педиатром и проверьте уровень витамина D.</p>
        </div>
      </div>
    </>
  )
}

function LateContent() {
  return (
    <>
      <div className="absolute left-[35px] top-[96px] h-[1010px] w-[380px] rounded-[22px] bg-white px-7 py-[34px] text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#FFA726] text-[22px] font-bold leading-none text-white">2</div>
        <h2 className="mt-3 text-[16px] font-bold leading-tight text-[#FFA726]">Поздние осложнения</h2>
        <p className="mt-3 text-[15px] font-medium leading-[1.45] text-[#6D7A86]">При длительном дефиците витамина D<br />могут развиваться серьёзные последствия,<br />влияющие на здоровье ребёнка<br />в будущем.</p>

        <div className="relative mx-auto mt-5 h-[330px] w-[300px] overflow-hidden rounded-[24px] bg-[#FFF4E6]">
          <img src="/assets/characters/baby-audience.png" alt="Фото младенца" className="h-full w-full object-cover object-center" draggable={false} />
          <div className="absolute inset-x-0 bottom-0 h-[110px] bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="mt-5 text-left">
          <div className="mb-2 flex justify-between text-[12px] font-bold text-[#8A96A3]"><span>Ранние признаки</span><span className="text-[#FFA726]">Осложнения</span></div>
          <div className="relative h-[8px] rounded-full bg-[#E4E8EB]">
            <div className="h-full w-[88%] rounded-full bg-[#FFA726]" />
            <div className="absolute left-[86%] top-1/2 h-[22px] w-[22px] -translate-y-1/2 rounded-full border-[5px] border-white bg-[#FFA726] shadow-[0_6px_14px_rgba(255,167,38,0.35)]" />
          </div>
        </div>

        <h3 className="mt-6 text-left text-[18px] font-bold leading-tight text-[#18324A]">Ключевые зоны риска</h3>
        <div className="mt-4 space-y-2.5 text-left">
          <RiskRow icon={<RibsIcon className="h-7 w-7" />} title="Рахит" text="Нарушение минерализации костей" />
          <RiskRow icon={<SkeletonIcon className="h-7 w-7" />} title="Деформации скелета" text="Искривление костей, деформация грудной клетки и конечностей" />
          <RiskRow icon={<DevelopmentIcon className="h-7 w-7" />} title="Задержка развития" text="Нарушение моторного и когнитивного развития" />
          <RiskRow icon={<ImmuneIcon className="h-7 w-7" />} title="Ослабление иммунитета" text="Повышенная восприимчивость к инфекциям" />
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[1010px] w-[560px] rounded-[22px] bg-white px-8 py-[34px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[22px] font-bold leading-[1.3] text-[#18324A]">Что может произойти при длительном<br />дефиците витамина D у младенца</h2>

        <div className="mt-5 space-y-4">
          <ComplicationCard
            icon={<BoneIcon className="h-14 w-14" />}
            title="Рахит"
            text={'Недостаток витамина D нарушает всасывание\nкальция и фосфора, что приводит к размягчению\nкостей, их истончению и повышенному риску\nпереломов.'}
            note={'Особенно уязвимы кости черепа, рёбра,\nзапястья, ноги.'}
          />
          <ComplicationCard
            icon={<SkeletonIcon className="h-14 w-14" />}
            title="Деформации скелета"
            text={'Длительный дефицит может вызвать искривление\nног, деформацию грудной клетки и другие изменения\nкостной системы.'}
            note={'Изменения могут сохраняться и в старшем\nвозрасте.'}
          />
          <ComplicationCard
            icon={<DevelopmentIcon className="h-14 w-14" />}
            title="Задержка развития"
            text={'Витамин D участвует в работе мозга и мышц.\nЕго дефицит связан с задержкой моторного\nразвития, речи и когнитивных функций.'}
            note={'Ребёнок может позже начать сидеть, ходить,\nговорить.'}
          />
          <ComplicationCard
            icon={<ImmuneIcon className="h-14 w-14" />}
            title="Ослабление иммунитета"
            text={'Дефицит витамина D снижает защитные силы\nорганизма, повышая частоту респираторных\nинфекций и других заболеваний.'}
            note={'Иммунная система ребёнка становится\nболее уязвимой.'}
          />
        </div>

        <div className="mt-5 flex gap-4 rounded-[16px] border border-[#F6B24B] bg-[#FFF9EF] px-5 py-[18px]">
          <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-white text-[#FFA726] shadow-[0_6px_14px_rgba(0,0,0,0.05)]"><ShieldCheckIcon /></div>
          <div>
            <h3 className="text-[16px] font-bold leading-tight text-[#18324A]">Профилактика дефицита — лучшая защита от осложнений</h3>
            <p className="mt-2 text-[13px] font-medium leading-[1.35] text-[#6D7A86]">Своевременный приём витамина D помогает укреплять кости,<br />поддерживать нормальное развитие и защищать здоровье ребёнка<br />с первых дней жизни.</p>
          </div>
        </div>
      </div>
    </>
  )
}

const stageTabs: Array<{ id: DeficiencyStage; label: string }> = [
  { id: 'early', label: '⚠️ Ранние признаки' },
  { id: 'late', label: '🦴 Поздние осложнения' },
]

export default function Slide03Complications() {
  const [activeDeficiencyStage, setActiveDeficiencyStage] = useState<DeficiencyStage>('late')

  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[36px] font-bold leading-[1.15] tracking-normal text-[#18324A]">Последствия дефицита</h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">От ранних признаков к осложнениям</p>
      </header>

      {activeDeficiencyStage === 'early' ? <EarlyContent /> : <LateContent />}

      <div className="absolute left-[35px] top-[1130px] flex h-11 items-center gap-3">
        {stageTabs.map((tab) => {
          const isActive = activeDeficiencyStage === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              className={`h-11 cursor-pointer rounded-[12px] px-[22px] text-[16px] font-bold transition duration-200 ease-in-out ${isActive ? 'bg-[#FFA726] text-white shadow-[0_8px_20px_rgba(255,167,38,0.25)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86] shadow-[0_6px_14px_rgba(0,0,0,0.05)] hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]'}`}
              onClick={() => setActiveDeficiencyStage(tab.id)}
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
