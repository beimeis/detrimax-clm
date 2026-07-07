import { useState } from 'react'
import type { ReactNode } from 'react'

type ProductTab = 'dose' | 'age' | 'course' | 'dispenser'
const NAVY = '#18324A'

function DropIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7c8 10.2 15 18.7 15 27.2C43 42.3 36.3 49 28 49s-15-6.7-15-14.8C13 25.7 20 17.2 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M23 37c2.8 2.6 7.2 2.6 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function ShieldIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function CalendarIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M12 16h32v30H12V16Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M19 10v10M37 10v10M13 26h30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="m21 37 4 4 9-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function ChildIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="18" r="9" stroke="currentColor" strokeWidth="3" /><path d="M13 48c2.2-9.4 8.1-14 15-14s12.8 4.6 15 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M23 18h.1M33 18h.1M24 24c2.7 1.8 5.3 1.8 8 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function TargetIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="28" r="19" stroke="currentColor" strokeWidth="3" /><circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="3" /><circle cx="28" cy="28" r="2.5" fill="currentColor" /></svg>
}
function BrainIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M21 43c-5.8 0-10.5-4.5-10.5-10.1 0-3.4 1.7-6.3 4.2-8.2-.4-1.1-.7-2.3-.7-3.6 0-4.7 3.8-8.6 8.6-8.6 1.4-3.7 5-6.4 9.2-6.4 5.4 0 9.8 4.4 9.8 9.8v.9c3.9 1.4 6.7 5.1 6.7 9.5 0 5.6-4.5 10.1-10.1 10.1H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M28 14v34M19 28h9M28 34h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function SmileIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 48c11 0 20-9 20-20S39 8 28 8 8 17 8 28s9 20 20 20Z" stroke="currentColor" strokeWidth="3" /><path d="M20 24h.1M36 24h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /><path d="M19.5 34c5.5 5 11.5 5 17 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function BulbIcon() { return <svg viewBox="0 0 56 56" className="h-10 w-10" fill="none" aria-hidden><path d="M28 7c-8 0-14.5 6.4-14.5 14.2 0 5.2 2.7 8.6 6.1 11.7 1.8 1.6 2.9 3.8 2.9 6.2h11c0-2.4 1.1-4.6 2.9-6.2 3.4-3.1 6.1-6.5 6.1-11.7C42.5 13.4 36 7 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22.5 45h11M24.5 50h7M28 14v6M19 22h6M31 22h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg> }

function MiniBenefit({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return <div className="flex h-[104px] min-w-0 flex-col items-center justify-center gap-2 rounded-[14px] border border-[#E4E8EB] bg-white px-2 text-center text-[#21A7A2] shadow-[0_8px_18px_rgba(0,0,0,0.035)]"><div>{icon}</div><p className="text-[11.5px] font-bold leading-[1.12] text-[#18324A]">{children}</p></div>
}
function Advantage({ icon, title, text }: { icon: ReactNode; title: string; text: ReactNode }) {
  return <article className="flex h-[98px] items-center gap-3.5 rounded-[14px] border border-[#E4E8EB] bg-white px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.045)]"><div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">{icon}</div><div className="min-w-0"><h3 className="text-[15.5px] font-bold leading-tight text-[#18324A]">{title}</h3><p className="mt-1 text-[12.5px] font-medium leading-[1.18] text-[#6D7A86]">{text}</p></div></article>
}

export default function SlideProduct() {
  const [activeProductTab, setActiveProductTab] = useState<ProductTab>('dose')
  const productTabs: Array<[ProductTab, string]> = [['dose', 'Доза'], ['age', 'Возраст'], ['course', 'Курс'], ['dispenser', 'Дозатор']]

  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-normal"><span className="text-[#D93632]">Детримакс®</span> <span className="text-[#21A7A2]">Актив</span></h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">Витамин D3 в каплях • с 3 лет</p>
      </header>

      <div className="absolute left-[35px] top-[88px] h-[982px] w-[470px] rounded-[18px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        {activeProductTab === 'dose' ? (
          <>
            <h2 className="text-center text-[23px] font-bold leading-[1.16] text-[#18324A]"><span className="text-[#21A7A2]">500 МЕ</span> в 1 капле —<br />суточная доза для школьника</h2>

            <div className="relative mx-auto mt-4 h-[430px] w-[414px]">
              <div className="absolute left-1/2 top-[18px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#EAF8F7_0%,#F7FFFF_58%,rgba(234,248,247,0)_74%)]" />
              <div className="absolute left-[22px] top-[286px] flex h-[96px] w-[86px] items-center justify-center rounded-[52%_48%_55%_45%/62%_58%_42%_38%] bg-[linear-gradient(145deg,#FFD45C,#FFA726)] text-center text-[18px] font-extrabold leading-tight text-[#0E6F73] shadow-[0_12px_24px_rgba(255,167,38,0.25)]">500<br />МЕ</div>
              <span className="absolute right-[52px] top-[30px] h-4 w-4 rounded-full bg-[#C8F1EF]" />
              <span className="absolute right-[20px] top-[138px] h-7 w-7 rounded-full bg-[#EAF8F7]" />
              <span className="absolute left-[64px] top-[54px] h-5 w-5 rounded-full bg-[#C8F1EF]" />
              <img src="/products/detrimax-active-pack.png" alt="Детримакс Актив" className="absolute left-1/2 top-[28px] h-[378px] w-auto -translate-x-1/2 object-contain drop-shadow-[0_18px_28px_rgba(24,50,74,0.18)]" draggable={false} />
            </div>

            <p className="mt-2 text-center text-[16px] font-medium leading-[1.38] text-[#18324A]">Одна капля содержит <strong>500 МЕ витамина D3</strong> —<br />рекомендуемая профилактическая доза<br />для детей <span className="font-bold text-[#21A7A2]">с 3 лет</span>.</p>

            <div className="mt-4 grid grid-cols-4 gap-3">
              <MiniBenefit icon={<DropIcon />} >Удобная<br />форма<br />в каплях</MiniBenefit>
              <MiniBenefit icon={<ShieldIcon />} >Сохранение<br />активности<br />витамина D3</MiniBenefit>
              <MiniBenefit icon={<CalendarIcon />} >Ежедневная<br />профилактика</MiniBenefit>
              <MiniBenefit icon={<ChildIcon />} >С 3 лет</MiniBenefit>
            </div>
          </>
        ) : (
          <div className="flex h-[790px] items-center justify-center text-center text-[22px] font-bold leading-tight text-[#18324A]">
            {activeProductTab}: контент будет добавлен следующим промтом
          </div>
        )}

        <div className="absolute bottom-[28px] left-7 right-7 grid grid-cols-4 gap-3">
          {productTabs.map(([id, label]) => <button key={id} type="button" className={`h-11 cursor-pointer rounded-[12px] px-3 text-[14px] font-bold transition duration-200 ease-in-out ${activeProductTab === id ? 'bg-[#21A7A2] text-white' : 'border border-[#E4E8EB] bg-white text-[#6D7A86]'}`} onClick={() => setActiveProductTab(id)}>{label}</button>)}
        </div>
      </div>

      <div className="absolute right-[35px] top-[88px] h-[982px] w-[455px] rounded-[18px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-center text-[23px] font-bold leading-[1.16] text-[#18324A]">Почему Детримакс® Актив<br /><span className="text-[#21A7A2]">подходит для школьников</span></h2>
        <div className="mt-4 space-y-2.5">
          <Advantage icon={<TargetIcon />} title="Оптимальная доза" text={<>500 МЕ в 1 капле — суточная доза<br />для школьника</>} />
          <Advantage icon={<ShieldIcon />} title="Поддержка роста и развития" text={<>Способствует усвоению кальция<br />и фосфора, укреплению костей<br />и зубов</>} />
          <Advantage icon={<BrainIcon />} title="Поддержка мозга и нервной системы" text={<>Участвует в работе нейронов,<br />концентрации, обучении и памяти</>} />
          <Advantage icon={<SmileIcon />} title="Настроение и эмоциональный баланс" text={<>Витамин D3 связан с регуляцией<br />настроения и снижением усталости</>} />
          <Advantage icon={<ShieldIcon />} title="Иммунная защита" text={<>Способствует поддержке врожденного<br />иммунитета и снижению частоты ОРВИ</>} />
          <Advantage icon={<DropIcon />} title="Масляная форма" text={<>Лучшее усвоение и стабильность<br />витамина D3</>} />
        </div>
        <div className="mt-4 flex gap-3.5 rounded-[14px] bg-[#EAF8F7] px-4 py-4">
          <div className="shrink-0 text-[#21A7A2]"><BulbIcon /></div>
          <p className="text-[14.5px] font-bold leading-[1.28] text-[#18324A]">Регулярный приём Детримакс® Актив —<br />простой способ поддержать здоровье,<br />развитие и активность ребёнка каждый день.</p>
        </div>
      </div>


    </section>
  )
}
