import type { ReactNode } from 'react'

const NAVY = '#18324A'
const BABY_ORANGE = '#FFA726'
const DIVIDER = '#F0E7D8'

interface FeatureItem {
  title: string
  text: string
  icon: ReactNode
}

interface SupportItem {
  label: string
  icon: ReactNode
}

function BoneIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden>
      <path d="M15.5 17.5 30.5 32.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M13.6 20.5c-2.7.8-5.5-.8-6.3-3.5-.7-2.5.6-5.1 3-6.1-.2-2.6 1.5-5 4.1-5.7 2.8-.8 5.6.8 6.4 3.5.4 1.5.1 3-.6 4.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34.4 27.5c2.7-.8 5.5.8 6.3 3.5.7 2.5-.6 5.1-3 6.1.2 2.6-1.5 5-4.1 5.7-2.8.8-5.6-.8-6.4-3.5-.4-1.5-.1-3 .6-4.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ToothIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden>
      <path d="M24 7c-4.4 0-6.6-2-10.5-.5C9.8 8 8.5 12.5 9.4 18.4c.9 6 1.9 9.3 3.1 15 .9 4.2 4 5 5.2.9l2.2-8.3c.5-1.9 3.1-1.9 3.6 0l2.2 8.3c1.2 4.1 4.3 3.3 5.2-.9 1.2-5.7 2.2-9 3.1-15 .9-5.9-.4-10.4-4.1-11.9C26 5 28.4 7 24 7Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  )
}

function MuscleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden>
      <path d="M15 24h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M11 17v14M15 13.5v21M33 13.5v21M37 17v14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden>
      <path d="M33.5 33.6c-10.2 0-18.4-8.2-18.4-18.4 0-2.1.4-4.1 1-5.9C10.1 12.2 6 18.2 6 25.2 6 34.5 13.5 42 22.8 42c7 0 13-4.2 15.8-10.2-1.6 1.1-3.3 1.8-5.1 1.8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M34 8v8M30 12h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden>
      <path d="M24 5.5 38 11v10.5c0 9.1-5.6 17.2-14 20.8-8.4-3.6-14-11.7-14-20.8V11l14-5.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M18 24.2 22.1 28 31 18.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M9 39h31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 34V24M20 34V17M28 34V21M36 34V13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M18 39c-5 0-9-4-9-9 0-3 1.5-5.8 3.8-7.4-.4-1-.6-2-.6-3.1 0-4.1 3.3-7.5 7.5-7.5 1.2-3.2 4.3-5.5 7.9-5.5 4.6 0 8.4 3.8 8.4 8.4v.8c3.4 1.2 5.8 4.4 5.8 8.2 0 4.8-3.9 8.7-8.7 8.7H31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 13v29M17 24h7M24 29h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function IconCircle({ children, size = 56 }: { children: ReactNode; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border-2 bg-[#FFFBF3] text-[#FFA726]"
      style={{ width: size, height: size, borderColor: BABY_ORANGE }}
    >
      {children}
    </div>
  )
}

const growthSection: FeatureItem[] = [
  {
    title: 'Профилактика рахита',
    text: 'Витамин D — ключевой фактор минерализации костей, правильного формирования скелета и своевременного закрытия родничка.',
    icon: <GrowthIcon />,
  },
  {
    title: 'Развитие зубов',
    text: 'Участвует в закладке и прорезывании крепкой, здоровой эмали.',
    icon: <ToothIcon />,
  },
  {
    title: 'Развитие мышц',
    text: 'Необходим для нормального мышечного тонуса — помогает малышу увереннее садиться, ползать и ходить.',
    icon: <MuscleIcon />,
  },
]

const nervousSection: FeatureItem[] = [
  {
    title: 'Крепкий сон',
    text: 'D3 участвует в синтезе мелатонина и серотонина, помогает наладить режим сна и бодрствования и снижает «беспричинную» капризность.',
    icon: <MoonIcon />,
  },
  {
    title: 'Защита от аллергии',
    text: 'Адекватный уровень витамина D снижает риск развития аллергии и пищевых аллергий в будущем.',
    icon: <ShieldIcon />,
  },
]

const supportItems: SupportItem[] = [
  { label: 'Кости и скелет', icon: <BoneIcon /> },
  { label: 'Первые зубы', icon: <ToothIcon /> },
  { label: 'Мышечный тонус', icon: <MuscleIcon /> },
  { label: 'Крепкий сон', icon: <MoonIcon /> },
  { label: 'Иммунитет и защита', icon: <ShieldIcon /> },
]

function FeatureRow({ item }: { item: FeatureItem }) {
  return (
    <article className="flex items-start gap-4">
      <IconCircle>{item.icon}</IconCircle>
      <div className="min-w-0 pt-0.5">
        <h4 className="text-[20px] font-bold leading-tight text-[#18324A]">
          {item.title}
          <span className="text-[#FFA726]">:</span>
        </h4>
        <p className="mt-1.5 text-[16.5px] font-medium leading-[1.34] text-[#6D7A86]">
          {item.text}
        </p>
      </div>
    </article>
  )
}

function SectionHeading({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFA726] text-white">
        {icon}
      </span>
      <h3 className="text-[24px] font-bold leading-tight text-[#FFA726]">{children}</h3>
    </div>
  )
}

export default function SlideAudience() {
  return (
    <section className="relative flex h-full flex-col overflow-hidden px-[40px] pt-0" style={{ color: NAVY }}>
      <header className="relative z-10 mt-[4px]">
        <h1 className="font-display text-[30px] font-bold leading-[1.08] tracking-normal text-[#18324A]">
          Аудитория и потребность
        </h1>
      </header>

      <div className="relative z-10 mt-4 text-center">
        <h2 className="font-display text-[34px] font-extrabold uppercase leading-[1.06] tracking-tight text-[#18324A]">
          Витамин D3 и младенчество (0–12 месяцев)
        </h2>
        <p className="mt-2 text-[18px] font-bold uppercase tracking-tight text-[#FFA726]">
          Фундамент здоровья и крепкого иммунитета
        </p>
      </div>

      <div className="relative z-10 mb-5 mt-5 grid w-full flex-1 grid-cols-[minmax(0,390px)_minmax(0,1fr)] justify-center gap-6 self-center overflow-hidden">
        {/* Left column */}
        <div className="flex h-full min-h-0 flex-col rounded-[20px] bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
          <div className="h-[264px] w-full overflow-hidden rounded-[14px] bg-[#F7F3ED]">
            <img
              src="/assets/characters/baby-audience.webp"
              alt="Младенец"
              className="h-full w-full object-cover object-[50%_30%]"
              draggable={false}
            />
          </div>

          <div className="mt-5 flex min-h-0 flex-1 flex-col rounded-[16px] bg-[#FFF9EF] p-5">
            <h3 className="text-center text-[22px] font-bold leading-tight text-[#FFA726]">
              Ключевая поддержка
              <br />в первый год жизни
            </h3>
            <ul className="mt-4 flex flex-1 flex-col justify-between gap-3">
              {supportItems.map((item) => (
                <li key={item.label} className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#FFA726] shadow-[0_3px_10px_rgba(255,167,38,0.22)]">
                    {item.icon}
                  </span>
                  <span className="text-[19.5px] font-bold leading-tight text-[#18324A]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="flex h-full min-h-0 flex-col rounded-[20px] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
          <div className="flex flex-1 flex-col">
            <SectionHeading icon={<GrowthIcon />}>Активный рост и развитие</SectionHeading>
            <div className="mt-4 flex flex-col gap-4">
              {growthSection.map((item) => (
                <FeatureRow key={item.title} item={item} />
              ))}
            </div>

            <div className="my-5 h-px w-full" style={{ backgroundColor: DIVIDER }} />

            <SectionHeading icon={<BrainIcon />}>Нервная система и иммунитет</SectionHeading>
            <div className="mt-4 flex flex-col gap-4">
              {nervousSection.map((item) => (
                <FeatureRow key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="relative z-10 mb-3 px-1 text-[11px] font-medium leading-[1.35] text-[#9AA5AF]">
        Национальная программа «Недостаточность витамина D у детей и подростков Российской Федерации: современные подходы к коррекции», 2021.
      </p>

    </section>
  )
}
