import { useState } from 'react'
import type { ReactNode } from 'react'

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
function ChevronRight({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function ArrowLeft({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M15 6l-6 6 6 6M9 12h11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

type Advantage = { icon: ReactNode; title: string; lead: string; points: string[] }
const ADVANTAGES: Advantage[] = [
  { icon: <TargetIcon />, title: 'Оптимальная доза', lead: '500 МЕ витамина D3 в одной капле.', points: ['Рекомендуемая профилактическая доза для детей с 3 лет', 'Одна капля в день — легко соблюдать курс', 'Точная дозировка без риска превышения'] },
  { icon: <ShieldIcon />, title: 'Поддержка роста и развития', lead: 'Основа крепкого скелета в период активного роста.', points: ['Улучшает усвоение кальция и фосфора', 'Способствует росту костей и здоровью зубов', 'Поддерживает гармоничное физическое развитие'] },
  { icon: <BrainIcon />, title: 'Поддержка мозга и нервной системы', lead: 'Витамин D3 участвует в работе нервной системы.', points: ['Поддерживает память и концентрацию', 'Способствует обучению и когнитивному развитию', 'Защищает нервные клетки'] },
  { icon: <SmileIcon />, title: 'Настроение и эмоциональный баланс', lead: 'Участвует в синтезе серотонина.', points: ['Помогает поддерживать ровное настроение', 'Повышает устойчивость к учебным нагрузкам', 'Поддерживает мотивацию и адаптацию'] },
  { icon: <ShieldIcon />, title: 'Иммунная защита', lead: 'Поддержка защитных сил организма.', points: ['Активирует защитные клетки иммунитета', 'Стимулирует синтез антимикробных пептидов', 'Помогает противостоять сезонным инфекциям'] },
  { icon: <DropIcon />, title: 'Масляная форма', lead: 'Форма, созданная для усвоения витамина D3.', points: ['Витамин D3 — жирорастворимый', 'Масляная основа улучшает всасывание', 'Усваивается лучше водных растворов'] },
]

type Benefit = { icon: ReactNode; label: string; sub: string; points: string[] }
const BENEFITS: Benefit[] = [
  { icon: <DropIcon className="h-10 w-10" />, label: 'Удобная форма в каплях', sub: 'Витамин D3 в удобных каплях', points: ['Легко дозировать — капля за каплей', 'Без таблеток и капсул', 'Удобно давать ребёнку'] },
  { icon: <ShieldIcon className="h-10 w-10" />, label: 'Сохранение активности витамина D3', sub: 'Стабильная масляная форма', points: ['Масляная основа сохраняет активность D3', 'Защищает витамин от разрушения', 'Стабильное качество в течение курса'] },
  { icon: <CalendarIcon className="h-10 w-10" />, label: 'Ежедневная профилактика', sub: 'Приём курсом каждый день', points: ['Подходит для ежедневного приёма', 'Формирует устойчивый уровень витамина D', 'Простая и понятная схема'] },
  { icon: <ChildIcon className="h-10 w-10" />, label: 'С 3 лет', sub: 'Для детей с 3 лет и взрослых', points: ['Рекомендуемая профилактическая доза для детей с 3 лет', 'Одна капля в день — легко соблюдать курс', 'Точная дозировка без риска превышения'] },
]
export default function SlideProduct() {
  const [openAdv, setOpenAdv] = useState<number | null>(null)
  const [advIdx, setAdvIdx] = useState(0)
  const advOpen = openAdv !== null
  const adv = ADVANTAGES[advIdx]
  const openAdvantage = (i: number) => { setAdvIdx(i); setOpenAdv(i) }
  const btnDelay = (i: number) => (advOpen ? i * 60 : 240 + i * 60)

  // Левая карточка: сетка 2×2 кнопок ⇄ инфо-блок выбранного преимущества
  const [openBenefit, setOpenBenefit] = useState<number | null>(null)
  const benefitOpen = openBenefit !== null
  const [benefitIdx, setBenefitIdx] = useState(0)
  const benefit = BENEFITS[benefitIdx]
  const openBenefitCard = (i: number) => { setBenefitIdx(i); setOpenBenefit(i) }

  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-normal"><span className="text-[#D93632]">Детримакс®</span> <span className="text-[#21A7A2]">Актив</span></h1>
      </header>

      <div className="absolute left-[35px] top-[88px] h-[982px] w-[470px] rounded-[18px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-center text-[26px] font-bold leading-[1.14] text-[#18324A]"><span className="text-[#21A7A2]">500 МЕ</span> в 1 капле —<br />суточная доза для школьника</h2>

        <div className="relative mx-auto mt-4 h-[430px] w-[414px]">
          <div className="absolute left-1/2 top-[18px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#EAF8F7_0%,#F7FFFF_58%,rgba(234,248,247,0)_74%)]" />
          <div className="absolute left-[22px] top-[286px] z-10 flex h-[96px] w-[86px] items-center justify-center rounded-[52%_48%_55%_45%/62%_58%_42%_38%] bg-[linear-gradient(145deg,#FFD45C,#FFA726)] text-center text-[18px] font-extrabold leading-tight text-[#0E6F73] shadow-[0_12px_24px_rgba(255,167,38,0.25)]">500<br />МЕ</div>
          <span className="absolute right-[52px] top-[30px] h-4 w-4 rounded-full bg-[#C8F1EF]" />
          <span className="absolute right-[20px] top-[138px] h-7 w-7 rounded-full bg-[#EAF8F7]" />
          <span className="absolute left-[64px] top-[54px] h-5 w-5 rounded-full bg-[#C8F1EF]" />
          <img src="/products/detrimax-active-pack.png" alt="Детримакс Актив" className="absolute left-1/2 top-[28px] h-[378px] w-auto -translate-x-1/2 object-contain drop-shadow-[0_18px_28px_rgba(24,50,74,0.18)]" draggable={false} />
        </div>

        {/* Главный акцент под изображением */}
        <p className="mt-3 text-center leading-[1.3] text-[#18324A]">
          <span className="block text-[21px] font-semibold">Одна капля содержит</span>
          <span className="mt-1 block text-[30px] font-extrabold leading-[1.18]"><span className="text-[#21A7A2]">500&nbsp;МЕ</span> витамина&nbsp;D3</span>
        </p>

        {/* Interactive zone: сетка 2×2 кнопок ⇄ инфо-блок */}
        <div className="absolute bottom-6 left-7 right-7 top-[632px]">
          {/* 2×2 сетка крупных кнопок */}
          <div className={`grid h-full grid-cols-2 grid-rows-2 gap-4 transition-all duration-[420ms] ease-out ${benefitOpen ? 'pointer-events-none scale-[0.97] opacity-0' : 'scale-100 opacity-100'}`}>
            {BENEFITS.map((b, i) => (
              <button
                key={b.label}
                type="button"
                onClick={() => openBenefitCard(i)}
                className="group flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[18px] border border-[#CBEBE8] bg-white px-4 py-4 text-center shadow-[0_8px_22px_rgba(24,50,74,0.06)] outline-none transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#21A7A2] hover:shadow-[0_16px_34px_rgba(33,167,162,0.2)] focus-visible:ring-2 focus-visible:ring-[#0E8F8B]"
              >
                <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2] transition-colors duration-200 group-hover:bg-[#D6F3F1] group-hover:text-[#0E8F8B]">{b.icon}</span>
                <span className="text-[16.5px] font-bold leading-[1.16] text-[#18324A]">{b.label}</span>
              </button>
            ))}
          </div>

          {/* Инфо-блок выбранной кнопки */}
          <div
            className={`absolute inset-0 flex flex-col rounded-[20px] border border-[#CBEBE8] bg-[linear-gradient(150deg,#F1FBFA,#E3F5F1)] p-6 shadow-[0_16px_36px_rgba(33,167,162,0.18)] transition-all duration-[420ms] ease-out ${benefitOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}
            aria-hidden={!benefitOpen}
          >
            <button
              type="button"
              onClick={() => setOpenBenefit(null)}
              className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white py-2.5 pl-3.5 pr-5 text-[16px] font-bold text-[#0E8F8B] shadow-[0_6px_16px_rgba(14,42,59,0.14)] transition hover:-translate-x-0.5 hover:bg-[#EAF8F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]"
            >
              <ArrowLeft className="h-5 w-5" /> Назад
            </button>

            <div className="mt-[46px] flex items-center gap-3.5">
              <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_10px_24px_rgba(14,42,59,0.2)] [&>svg]:h-8 [&>svg]:w-8">{benefit.icon}</span>
              <div className="min-w-0">
                <h3 className="text-[23px] font-extrabold leading-[1.12] text-[#14366F]">{benefit.label}</h3>
                <p className="mt-0.5 text-[17px] font-semibold leading-[1.22] text-[#0E8F8B]">{benefit.sub}</p>
              </div>
            </div>

            <ul className="mt-3.5 space-y-2">
              {benefit.points.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-[13px] bg-white/70 px-4 py-2 text-left text-[16px] font-bold leading-[1.3] text-[#18324A] shadow-[0_4px_12px_rgba(24,50,74,0.05)]">
                  <span className="mt-[6px] h-3 w-3 shrink-0 rounded-full bg-[#21A7A2]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute right-[35px] top-[88px] h-[982px] w-[455px] rounded-[18px] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-center text-[26px] font-bold leading-[1.14] text-[#18324A]">Почему Детримакс® Актив<br /><span className="text-[#21A7A2]">подходит для школьников</span></h2>

        {/* Interactive zone: список кнопок ⇄ инфо-карточка */}
        <div className="relative mt-4 h-[674px]">
          {/* Список кнопок — по очереди уезжают вправо и исчезают */}
          <div className="space-y-2.5">
            {ADVANTAGES.map((a, i) => (
              <button
                key={a.title}
                type="button"
                onClick={() => openAdvantage(i)}
                style={{ transitionDelay: `${btnDelay(i)}ms` }}
                className={`group flex h-[104px] w-full cursor-pointer items-center gap-4 rounded-[14px] border border-[#E4E8EB] bg-white px-4 py-3 text-left shadow-[0_8px_20px_rgba(0,0,0,0.045)] transition-all duration-[420ms] ease-out ${advOpen ? 'pointer-events-none translate-x-[130%] opacity-0' : 'translate-x-0 opacity-100 hover:-translate-y-0.5 hover:scale-[1.012] hover:border-[#21A7A2] hover:shadow-[0_16px_32px_rgba(33,167,162,0.18)]'}`}
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">{a.icon}</div>
                <h3 className="min-w-0 flex-1 text-[20px] font-bold leading-[1.2] text-[#18324A]">{a.title}</h3>
                <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2] transition-all duration-200 group-hover:translate-x-1 group-hover:bg-[#21A7A2] group-hover:text-white"><ChevronRight className="h-[16px] w-[16px]" /></span>
              </button>
            ))}
          </div>

          {/* Инфо-карточка выбранной кнопки — въезжает справа */}
          <div
            style={{ transitionDelay: advOpen ? '360ms' : '0ms' }}
            className={`absolute inset-0 flex flex-col rounded-[18px] border border-[#CBEBE8] bg-[linear-gradient(150deg,#F1FBFA,#E3F5F1)] p-7 shadow-[0_16px_36px_rgba(33,167,162,0.18)] transition-all duration-[420ms] ease-out ${advOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-10 opacity-0'}`}
            aria-hidden={!advOpen}
          >
            <button
              type="button"
              onClick={() => setOpenAdv(null)}
              className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white py-2 pl-3 pr-4 text-[15px] font-bold text-[#0E8F8B] shadow-[0_6px_16px_rgba(14,42,59,0.14)] transition hover:-translate-x-0.5 hover:bg-[#EAF8F7]"
            >
              <ArrowLeft /> Назад
            </button>

            <div className="flex flex-1 flex-col items-center justify-center px-2 text-center">
              <span className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_14px_30px_rgba(14,42,59,0.22)] [&>svg]:h-11 [&>svg]:w-11">{adv.icon}</span>
              <h3 className="mt-6 text-[27px] font-extrabold leading-[1.14] text-[#18324A]">{adv.title}</h3>
              <p className="mt-3 text-[18px] font-medium leading-[1.4] text-[#6D7A86]">{adv.lead}</p>
              <ul className="mt-6 w-full space-y-3 text-left">
                {adv.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-[12px] bg-white/70 px-4 py-3 text-[16px] font-semibold leading-[1.34] text-[#18324A] shadow-[0_4px_12px_rgba(24,50,74,0.05)]">
                    <span className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#21A7A2]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-3.5 rounded-[14px] bg-[#EAF8F7] px-4 py-4">
          <div className="shrink-0 text-[#21A7A2]"><BulbIcon /></div>
          <p className="text-[16.5px] font-bold leading-[1.26] text-[#18324A]">Регулярный приём Детримакс® Актив —<br />простой способ поддержать здоровье,<br />развитие и активность ребёнка каждый день.</p>
        </div>
      </div>


    </section>
  )
}
