import { useState } from 'react'
import type { ReactNode } from 'react'

type BabyProductTab = 'dose' | 'age' | 'course' | 'dispenser'

const NAVY = '#18324A'

function DropIcon({ className = 'h-10 w-10' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7c8 10.2 15 18.7 15 27.2C43 42.3 36.3 49 28 49s-15-6.7-15-14.8C13 25.7 20 17.2 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M23 37c2.8 2.6 7.2 2.6 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function PipetteIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M36 8 48 20M42 14 24 32c-3.7 3.7-8.3 6.2-13.4 7.4L8 40l.6-2.6C9.8 32.3 12.3 27.7 16 24L34 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 29 27 37M12 44h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M43 7 49 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function ShieldIcon({ className = 'h-10 w-10' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function BulbIcon({ className = 'h-10 w-10' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7c-8 0-14.5 6.4-14.5 14.2 0 5.2 2.7 8.6 6.1 11.7 1.8 1.6 2.9 3.8 2.9 6.2h11c0-2.4 1.1-4.6 2.9-6.2 3.4-3.1 6.1-6.5 6.1-11.7C42.5 13.4 36 7 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22.5 45h11M24.5 50h7M28 14v6M19 22h6M31 22h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="m5 12.5 4.2 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SoftInfoBlock({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex gap-[18px] rounded-[16px] border border-[#F6E2BD] bg-[#FFF9EF] p-[22px]">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center text-[#FFA726]">{icon}</div>
      <p className="text-[16px] font-bold leading-[1.42] text-[#18324A]">{children}</p>
    </div>
  )
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full items-center justify-center text-center">
      <p className="text-[22px] font-bold leading-tight text-[#18324A]">{label}: контент будет добавлен следующим промтом.</p>
    </div>
  )
}

function ProductVisual() {
  return (
    <div className="relative mx-auto h-[430px] w-[372px]">
      <div className="absolute left-1/2 top-[18px] h-[345px] w-[345px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#FFF4D8_0%,#FFF9EF_54%,rgba(255,249,239,0)_76%)]" />
      <span className="absolute left-[24px] top-[56px] h-5 w-5 rounded-full bg-[#FFE3AA]" />
      <span className="absolute right-[34px] top-[92px] h-8 w-8 rounded-full bg-[#FFF4D8]" />
      <span className="absolute right-[70px] bottom-[70px] h-4 w-4 rounded-full bg-[#FDE7BC]" />
      <div className="absolute left-[18px] top-[278px] flex h-[96px] w-[78px] items-center justify-center rounded-[52%_48%_55%_45%/62%_58%_42%_38%] bg-[linear-gradient(145deg,#FFD45C,#FFA726)] text-center text-[18px] font-extrabold leading-tight text-[#8A5600] shadow-[0_12px_24px_rgba(255,167,38,0.24)]">200<br />МЕ</div>
      <img src="/products/detrimax-baby-pack.png" alt="Изображение Детримакс® Бэби" className="absolute left-1/2 top-[50px] h-[310px] w-auto -translate-x-1/2 object-contain drop-shadow-[0_18px_28px_rgba(24,50,74,0.18)]" draggable={false} />
    </div>
  )
}

function DoseRightContent() {
  const items = [
    'профилактики дефицита витамина D3',
    'поддержки иммунитета',
    'нормального роста и развития',
    'укрепления костей и зубов',
  ]

  return (
    <>
      <p className="text-[15px] font-medium leading-none text-[#6D7A86]">Дозировка</p>
      <h2 className="mt-4 text-[30px] font-bold leading-[1.25] text-[#18324A]"><span className="text-[#FFA726]">200 МЕ</span> в 1 капле —<br />точная суточная доза</h2>

      <div className="my-9 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-[#F6B24B]" />
        <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border-2 border-[#F6B24B] bg-[#FFF9EF] text-[#FFA726]"><DropIcon className="h-9 w-9" /></div>
        <div className="h-px flex-1 bg-[#F6B24B]" />
      </div>

      <p className="text-[16px] font-medium leading-[1.5] text-[#6D7A86]">Одна капля содержит <span className="font-bold text-[#18324A]">200 МЕ витамина D3</span> —<br />рекомендуемая профилактическая доза<br />для младенцев <span className="font-bold text-[#FFA726]">с рождения</span>.</p>

      <div className="mt-[50px] rounded-[16px] border border-[#F6E2BD] bg-[#FFF9EF] px-7 py-[26px]">
        <h3 className="text-[16px] font-bold leading-tight text-[#FFA726]">Рекомендуется для:</h3>
        <div className="mt-5 space-y-[14px]">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 text-[15.5px] font-semibold leading-[1.25] text-[#18324A]">
              <span className="mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FFA726] text-white"><CheckIcon /></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex gap-4 rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-[22px] py-5">
        <div className="shrink-0 text-[#FFA726]"><BulbIcon /></div>
        <p className="text-[16px] font-bold leading-[1.35] text-[#18324A]">Педиатры рекомендуют витамин D3<br />для всех детей с рождения,<br />независимо от времени года и режима питания.</p>
      </div>
    </>
  )
}

const productTabs: Array<{ id: BabyProductTab; label: string }> = [
  { id: 'dose', label: 'Доза' },
  { id: 'age', label: 'Возраст' },
  { id: 'course', label: 'Курс' },
  { id: 'dispenser', label: 'Дозатор' },
]

const tabLabels: Record<BabyProductTab, string> = {
  dose: 'Доза',
  age: 'Возраст',
  course: 'Курс',
  dispenser: 'Дозатор',
}

export default function Slide05Product() {
  const [activeBabyProductTab, setActiveBabyProductTab] = useState<BabyProductTab>('dose')

  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-normal"><span className="text-[#D93632]">Детримакс®</span> <span className="text-[#FFA726]">Беби</span></h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">Витамин D3 в каплях • с рождения</p>
      </header>

      <div className="absolute left-[35px] top-[91px] h-[970px] w-[435px] rounded-[22px] bg-white px-[30px] py-9 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <ProductVisual />

        <div className="mt-2 flex justify-between gap-2">
          {productTabs.map((tab) => {
            const isActive = activeBabyProductTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                className={`h-[42px] cursor-pointer rounded-[10px] px-5 text-[14px] font-bold transition duration-200 ease-in-out ${isActive ? 'bg-[#FFA726] text-white shadow-[0_8px_20px_rgba(255,167,38,0.25)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86] hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]'}`}
                onClick={() => setActiveBabyProductTab(tab.id)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="mt-8 space-y-5">
          {activeBabyProductTab === 'dose' ? (
            <>
              <SoftInfoBlock icon={<PipetteIcon />}>Удобный дозатор-помпа<br />обеспечивает точное дозирование<br />и легкое применение с первых дней жизни.</SoftInfoBlock>
              <SoftInfoBlock icon={<ShieldIcon className="h-11 w-11" />}>Без красителей и ароматизаторов.<br />Подходит для ежедневного применения<br />с рождения.</SoftInfoBlock>
            </>
          ) : (
            <div className="flex h-[250px] items-center justify-center rounded-[16px] border border-[#F6E2BD] bg-[#FFF9EF] px-8 text-center">
              <p className="text-[20px] font-bold leading-tight text-[#18324A]">{tabLabels[activeBabyProductTab]}: контент будет добавлен следующим промтом.</p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute right-[35px] top-[91px] h-[970px] w-[500px] rounded-[22px] bg-white px-[42px] py-[46px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        {activeBabyProductTab === 'dose' ? <DoseRightContent /> : <Placeholder label={tabLabels[activeBabyProductTab]} />}
      </div>

      <div className="absolute left-[35px] right-[35px] top-[1138px] grid h-[46px] grid-cols-2 gap-4">
        <button type="button" className="h-[46px] cursor-pointer rounded-[10px] border-[1.5px] border-[#18324A] bg-white text-[16px] font-bold text-[#18324A] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(24,50,74,0.08)]">Когда рекомендовать</button>
        <button type="button" className="h-[46px] cursor-pointer rounded-[10px] bg-[#FFA726] text-[16px] font-bold text-white transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(255,167,38,0.22)]">Как принимать</button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/38 backdrop-blur-[1px]" />
    </section>
  )
}
