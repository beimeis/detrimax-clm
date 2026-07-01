import { useState } from 'react'
import type { ReactNode } from 'react'

type RiskTab = 'sun' | 'gadgets' | 'growth' | 'season'

const NAVY = '#18324A'

function SunIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="3" /><path d="M28 6v8M28 42v8M6 28h8M42 28h8M12.4 12.4l5.7 5.7M37.9 37.9l5.7 5.7M43.6 12.4l-5.7 5.7M18.1 37.9l-5.7 5.7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function PhoneIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><rect x="17" y="7" width="22" height="42" rx="6" stroke="currentColor" strokeWidth="3" /><path d="M24 13h8M26 43h4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M14 18 42 42" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" /></svg>
}

function GrowthIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M10 44h36M14 42V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M18 37c5-8 9-11 14-13l5 4 8-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M39 16h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SnowIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7v42M12 16l32 24M44 16 12 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M21 10 28 17l7-7M21 46l7-7 7 7M10 24l10-3 3-10M46 32l-10 3-3 10M46 24l-10-3-3-10M10 32l10 3 3 10" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ShieldIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 6.5 44 13v12c0 10.2-6.4 19.4-16 23.5C18.4 44.4 12 35.2 12 25V13l16-6.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22 28.5 26.2 33 35 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function BoneIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M18 21 35 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M16 24c-3.2 1-6.5-.9-7.4-4-.8-3 .8-6.1 3.6-7.3-.2-3 1.9-5.8 5-6.7 3.2-1 6.6.9 7.6 4.1.5 1.8.1 3.6-.8 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M40 32c3.2-1 6.5.9 7.4 4 .8 3-.8 6.1-3.6 7.3.2 3-1.9 5.8-5 6.7-3.2 1-6.6-.9-7.6-4.1-.5-1.8-.1-3.6.8-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function BrainIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M21 43c-5.8 0-10.5-4.5-10.5-10.1 0-3.4 1.7-6.3 4.2-8.2-.4-1.1-.7-2.3-.7-3.6 0-4.7 3.8-8.6 8.6-8.6 1.4-3.7 5-6.4 9.2-6.4 5.4 0 9.8 4.4 9.8 9.8v.9c3.9 1.4 6.7 5.1 6.7 9.5 0 5.6-4.5 10.1-10.1 10.1H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M28 14v34M19 28h9M28 34h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function BulbIcon({ className = 'h-10 w-10' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7c-8 0-14.5 6.4-14.5 14.2 0 5.2 2.7 8.6 6.1 11.7 1.8 1.6 2.9 3.8 2.9 6.2h11c0-2.4 1.1-4.6 2.9-6.2 3.4-3.1 6.1-6.5 6.1-11.7C42.5 13.4 36 7 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22.5 45h11M24.5 50h7M28 14v6M19 22h6M31 22h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

interface RiskContent {
  id: RiskTab
  label: string
  heroIcon: ReactNode
  title: string
  subtitle: string
  image: string
  imageAlt: string
  chips: Array<{ icon: ReactNode; label: ReactNode }>
  leftNote: ReactNode
  badge: string
  rightTitle: string
  rightText: string
  points: Array<{ icon: ReactNode; title: ReactNode; text: string }>
  conclusion: ReactNode
}

const riskContent: Record<RiskTab, RiskContent> = {
  sun: {
    id: 'sun',
    label: '☀️ Солнце',
    heroIcon: <SunIcon />,
    title: 'Недостаток инсоляции',
    subtitle: 'Школьники большую часть дня проводят в помещении',
    image: '/assets/characters/active-risk-schoolboy-indoor.png',
    imageAlt: 'Школьник в помещении',
    chips: [
      { icon: <SunIcon />, label: <>Мало<br />солнечного света</> },
      { icon: <ShieldIcon />, label: <>Снижение<br />естественного D3</> },
      { icon: <BoneIcon />, label: <>Риск для<br />костей</> },
      { icon: <BrainIcon />, label: <>Усталость<br />и обучение</> },
    ],
    leftNote: <>Недостаток прогулок и солнечного света снижает естественный синтез витамина D3 в коже.</>,
    badge: 'Фактор среды',
    rightTitle: 'Почему недостаток солнца повышает риск дефицита D3?',
    rightText: 'В школьном возрасте ребёнок проводит много времени в классе, дома и за занятиями, поэтому естественный синтез D3 часто недостаточен.',
    points: [
      { icon: <SunIcon />, title: 'Мало времени на улице', text: 'Учёба, кружки и домашние задания сокращают ежедневную инсоляцию.' },
      { icon: <ShieldIcon />, title: 'Снижается кожный синтез D3', text: 'Без достаточного УФ-воздействия организм вырабатывает меньше витамина D.' },
      { icon: <BoneIcon />, title: 'Растёт нагрузка на костную систему', text: 'D3 нужен для усвоения кальция и правильной минерализации костей.' },
      { icon: <BrainIcon />, title: 'Возможны усталость и снижение внимания', text: 'Дефицит D3 может отражаться на тонусе, иммунитете и учебной адаптации.' },
    ],
    conclusion: <>Регулярная профилактика помогает компенсировать недостаток солнца и поддерживать здоровье школьника каждый день.</>,
  },
  gadgets: {
    id: 'gadgets',
    label: '📱 Гаджеты',
    heroIcon: <PhoneIcon />,
    title: 'Экранное время',
    subtitle: 'Гаджеты замещают прогулки и активность на улице',
    image: '/assets/characters/active-risk-schoolboy-indoor.png',
    imageAlt: 'Школьник с гаджетами',
    chips: [
      { icon: <PhoneIcon />, label: <>Больше<br />экранов</> },
      { icon: <SunIcon />, label: <>Меньше<br />прогулок</> },
      { icon: <BrainIcon />, label: <>Нагрузка<br />на внимание</> },
      { icon: <ShieldIcon />, label: <>Снижение<br />активности</> },
    ],
    leftNote: <>Чем больше времени ребёнок проводит за экраном, тем меньше остаётся времени на прогулки и естественную инсоляцию.</>,
    badge: 'Поведенческий фактор',
    rightTitle: 'Почему гаджеты связаны с риском дефицита?',
    rightText: 'Экранное время само по себе не вызывает дефицит, но часто замещает прогулки, движение и пребывание на дневном свету.',
    points: [
      { icon: <PhoneIcon />, title: 'Длительное экранное время', text: 'Игры, видео и социальные сети увеличивают сидячее поведение.' },
      { icon: <SunIcon />, title: 'Меньше дневного света', text: 'Ребёнок реже бывает на улице в часы естественной инсоляции.' },
      { icon: <BrainIcon />, title: 'Утомляемость и перегрузка', text: 'Длительная работа с экранами повышает нагрузку на нервную систему.' },
      { icon: <ShieldIcon />, title: 'Нужна ежедневная профилактика', text: 'D3 помогает поддерживать иммунитет, тонус и адаптацию к нагрузкам.' },
    ],
    conclusion: <>Сокращение экранного времени и профилактика D3 помогают поддержать баланс активности, сна и обучения.</>,
  },
  growth: {
    id: 'growth',
    label: '📈 Рост',
    heroIcon: <GrowthIcon />,
    title: 'Интенсивный рост',
    subtitle: 'Период школьного возраста требует ресурсов для костей и мышц',
    image: '/assets/characters/active-audience-schoolboy.png',
    imageAlt: 'Школьник',
    chips: [
      { icon: <GrowthIcon />, label: <>Рост<br />скелета</> },
      { icon: <BoneIcon />, label: <>Кальций<br />и фосфор</> },
      { icon: <ShieldIcon />, label: <>Профилактика<br />дефицита</> },
      { icon: <BrainIcon />, label: <>Адаптация<br />к нагрузке</> },
    ],
    leftNote: <>В период роста потребность в витамине D3 повышается, потому что он участвует в усвоении кальция и фосфора.</>,
    badge: 'Физиологический фактор',
    rightTitle: 'Почему рост повышает потребность в D3?',
    rightText: 'Когда активно растут кости и мышцы, организму нужна стабильная поддержка обмена кальция и фосфора.',
    points: [
      { icon: <GrowthIcon />, title: 'Рост костей и мышц', text: 'Школьный возраст связан с постепенным увеличением длины костей и массы тела.' },
      { icon: <BoneIcon />, title: 'Минерализация скелета', text: 'D3 помогает усваивать кальций и фосфор, необходимые для костной ткани.' },
      { icon: <ShieldIcon />, title: 'Профилактика недостаточности', text: 'При высокой потребности даже умеренный дефицит может проявляться быстрее.' },
      { icon: <BrainIcon />, title: 'Поддержка учебной нагрузки', text: 'Достаточный D3 важен для тонуса, концентрации и общего самочувствия.' },
    ],
    conclusion: <>В период активного роста профилактический приём D3 помогает поддерживать кости, мышцы и ежедневную активность.</>,
  },
  season: {
    id: 'season',
    label: '❄️ Сезон',
    heroIcon: <SnowIcon />,
    title: 'Сезонность',
    subtitle: 'Осень и зима уменьшают возможности для синтеза D3',
    image: '/assets/characters/active-risk-schoolboy-indoor.png',
    imageAlt: 'Школьник в холодный сезон',
    chips: [
      { icon: <SnowIcon />, label: <>Короткий<br />день</> },
      { icon: <SunIcon />, label: <>Низкая<br />инсоляция</> },
      { icon: <ShieldIcon />, label: <>Частые<br />ОРВИ</> },
      { icon: <BoneIcon />, label: <>Поддержка<br />костей</> },
    ],
    leftNote: <>В холодный сезон дети меньше бывают на солнце, а закрытая одежда дополнительно снижает кожный синтез D3.</>,
    badge: 'Сезонный фактор',
    rightTitle: 'Почему осень и зима усиливают риск дефицита?',
    rightText: 'Короткий световой день, холодная погода и закрытая одежда ограничивают естественную выработку витамина D.',
    points: [
      { icon: <SnowIcon />, title: 'Короткий световой день', text: 'В осенне-зимний период ребёнок получает меньше дневного света.' },
      { icon: <SunIcon />, title: 'Низкая инсоляция', text: 'Угол солнца и длительность прогулок снижают синтез D3 в коже.' },
      { icon: <ShieldIcon />, title: 'Рост инфекционной нагрузки', text: 'В сезон ОРВИ особенно важна поддержка иммунной защиты.' },
      { icon: <BoneIcon />, title: 'Нужна стабильная профилактика', text: 'Ежедневный D3 помогает поддерживать кости и общее развитие круглый год.' },
    ],
    conclusion: <>Сезонная профилактика D3 особенно важна осенью и зимой, когда естественная инсоляция минимальна.</>,
  },
}

function CircleIcon({ children }: { children: ReactNode }) {
  return <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#21A7A2] bg-[#EAF8F7] text-[#21A7A2] shadow-[0_8px_18px_rgba(0,0,0,0.06)]">{children}</div>
}

function InfoRow({ icon, title, text }: { icon: ReactNode; title: ReactNode; text: string }) {
  return (
    <article className="flex min-h-[118px] items-start gap-[18px] rounded-[16px] border border-[#E4E8EB] bg-white px-5 py-[18px] shadow-[0_6px_16px_rgba(0,0,0,0.04)]">
      <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2]">{icon}</div>
      <div className="min-w-0">
        <h3 className="text-[17px] font-bold leading-tight text-[#18324A]">{title}</h3>
        <p className="mt-2 text-[13.5px] font-medium leading-[1.35] text-[#6D7A86]">{text}</p>
      </div>
    </article>
  )
}

export default function Slide02RiskFactors() {
  const [activeRiskTab, setActiveRiskTab] = useState<RiskTab>('sun')
  const active = riskContent[activeRiskTab]
  const tabs = Object.values(riskContent)

  return (
    <section className="relative h-full overflow-hidden px-[35px]" style={{ color: NAVY }}>
      <header className="absolute left-[35px] top-[4px]">
        <h1 className="font-display text-[36px] font-bold leading-[1.08] tracking-normal text-[#18324A]">Факторы риска дефицита</h1>
        <p className="mt-2 text-[16px] font-medium leading-none text-[#6D7A86]">Почему школьники в группе риска</p>
      </header>

      <div className="absolute left-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2]">{active.heroIcon}</div>
          <div>
            <h2 className="text-[23px] font-bold leading-tight text-[#18324A]">{active.title}</h2>
            <p className="mt-1 text-[15px] font-medium leading-[1.32] text-[#6D7A86]">{active.subtitle}</p>
          </div>
        </div>

        <div className="relative mt-5 h-[560px] w-full overflow-visible">
          <div className="absolute left-1/2 top-[6px] h-[505px] w-[350px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-[#F4FBFB] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72)]">
            <img src={active.image} alt={active.imageAlt} className="h-full w-full object-cover object-[50%_34%]" draggable={false} />
            <div className="absolute inset-x-0 bottom-0 h-[155px] bg-gradient-to-t from-white via-white/82 to-transparent" />
          </div>

          <svg className="pointer-events-none absolute left-[32px] top-[36px] h-[430px] w-[330px]" viewBox="0 0 330 430" fill="none" aria-hidden>
            <path d="M66 84C22 142 16 263 78 338" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <path d="M264 84c44 58 50 179-12 254" stroke="#21A7A2" strokeWidth="2" strokeDasharray="7 10" strokeLinecap="round" />
            <circle cx="66" cy="84" r="4" fill="#21A7A2" /><circle cx="264" cy="84" r="4" fill="#21A7A2" /><circle cx="78" cy="338" r="4" fill="#21A7A2" /><circle cx="252" cy="338" r="4" fill="#21A7A2" />
          </svg>

          <div className="absolute left-[-8px] top-[52px] flex w-[126px] flex-col items-center text-center"><CircleIcon>{active.chips[0].icon}</CircleIcon><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#18324A]">{active.chips[0].label}</p></div>
          <div className="absolute right-[-8px] top-[52px] flex w-[126px] flex-col items-center text-center"><CircleIcon>{active.chips[1].icon}</CircleIcon><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#18324A]">{active.chips[1].label}</p></div>
          <div className="absolute left-[-8px] bottom-[78px] flex w-[126px] flex-col items-center text-center"><CircleIcon>{active.chips[2].icon}</CircleIcon><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#18324A]">{active.chips[2].label}</p></div>
          <div className="absolute right-[-8px] bottom-[78px] flex w-[126px] flex-col items-center text-center"><CircleIcon>{active.chips[3].icon}</CircleIcon><p className="mt-2 text-[12px] font-bold leading-[1.15] text-[#18324A]">{active.chips[3].label}</p></div>
        </div>

        <div className="mt-3 flex gap-[14px] rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-5 py-[18px]">
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-[20px] font-bold text-white">i</div>
          <p className="text-[15.5px] font-bold leading-[1.38] text-[#18324A]">{active.leftNote}</p>
        </div>
      </div>

      <div className="absolute right-[35px] top-[96px] h-[930px] w-[455px] rounded-[22px] bg-white p-8 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="inline-flex rounded-full bg-[#EAF8F7] px-4 py-2 text-[14px] font-bold text-[#21A7A2]">{active.badge}</div>
        <h2 className="mt-5 text-[24px] font-bold leading-[1.28] text-[#18324A]">{active.rightTitle}</h2>
        <p className="mt-4 text-[14.5px] font-medium leading-[1.45] text-[#6D7A86]">{active.rightText}</p>

        <div className="mt-6 space-y-4">
          {active.points.map((point, index) => <InfoRow key={index} icon={point.icon} title={point.title} text={point.text} />)}
        </div>

        <div className="mt-6 flex gap-4 rounded-[16px] border border-[#B7E7E4] bg-[#EAF8F7] px-5 py-[18px]">
          <div className="shrink-0 text-[#21A7A2]"><BulbIcon /></div>
          <div>
            <p className="text-[16px] font-bold leading-tight text-[#21A7A2]">Главный вывод</p>
            <p className="mt-2 text-[15.5px] font-bold leading-[1.35] text-[#18324A]">{active.conclusion}</p>
          </div>
        </div>
      </div>

      <div className="absolute left-[35px] top-[1082px] flex h-11 items-center gap-3">
        {tabs.map((tab) => {
          const isActive = activeRiskTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              className={`h-11 cursor-pointer rounded-[12px] px-[20px] text-[16px] font-bold transition duration-200 ease-in-out ${isActive ? 'bg-[#21A7A2] text-white shadow-[0_8px_20px_rgba(33,167,162,0.22)]' : 'border border-[#E4E8EB] bg-white text-[#6D7A86] shadow-[0_6px_14px_rgba(0,0,0,0.05)] hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]'}`}
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
