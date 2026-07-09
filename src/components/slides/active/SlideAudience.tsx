import { useState } from 'react'
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

function SleepZzzIcon({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M36.5 42.5C25.8 42.5 17 33.7 17 23c0-5.5 2.3-10.5 6-14A19.5 19.5 0 1 0 47 33c-3.5 5.8-6.6 9.5-10.5 9.5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M35 10h9l-9 9h9M25 16h6l-6 6h6M39 25h7l-7 7h7" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BoneIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M17.5 38.5 38 18M18.7 39.7a5 5 0 1 1-3.6-8.3 5 5 0 1 1 8.3-3.6M37 20.8a5 5 0 1 1 3.6 8.3 5 5 0 1 1-8.3 3.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GrowthArrowIcon({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M12 44h32" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" />
      <path d="M16 39c9.8-2.9 18.1-10.2 25-24" stroke="currentColor" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 15h10v10" stroke="currentColor" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 43V31M28 43V25M38 43V19" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" opacity="0.9" />
    </svg>
  )
}

function FeatureChip({ icon, label }: { icon: ReactNode; label: ReactNode }) {
  return (
    <div className="flex w-[92px] flex-col items-center gap-2.5 text-center">
      <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-white shadow-[0_10px_24px_rgba(33,167,162,0.24)]">
        {icon}
      </div>
      <p className="text-[13px] font-extrabold uppercase leading-[1.14] tracking-[0.03em] text-[#21A7A2]">{label}</p>
    </div>
  )
}

function Molecule() {
  return (
    <div className="relative h-[92px] w-[102px] shrink-0">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 102 92" fill="none" aria-hidden>
        <path d="M51 29 28 64M51 29l23 35" stroke="#9AC9E8" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <div className="absolute left-1/2 top-0 flex h-[42px] w-[42px] -translate-x-1/2 items-center justify-center rounded-full bg-[#21A7A2] text-[14px] font-bold text-white shadow-[0_8px_16px_rgba(33,167,162,0.22)]">D3</div>
      <div className="absolute bottom-0 left-0 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#5EA9DD] text-[12px] font-bold text-white">Ca</div>
      <div className="absolute bottom-0 right-0 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#4D8BCF] text-[12px] font-bold text-white">P</div>
    </div>
  )
}

interface WheelPart {
  key: string
  label: string
  icon: ReactNode
  cx: number
  cy: number
  detail: string
}

const wheelParts: WheelPart[] = [
  {
    key: 'immune',
    label: 'Иммунитет и защита',
    icon: <ShieldIcon className="h-[36px] w-[36px]" />,
    cx: 96,
    cy: 96,
    detail:
      'Витамин D3 активирует защитные клетки и способствует выработке собственных антимикробных пептидов, помогая снижать частоту простудных заболеваний у школьника.',
  },
  {
    key: 'bones',
    label: 'Кости и мышцы',
    icon: <BoneIcon className="h-[36px] w-[36px]" />,
    cx: 312,
    cy: 96,
    detail:
      'D3 обеспечивает усвоение кальция и фосфора — основу крепких костей и зубов, а также поддерживает мышечный тонус в период активного роста.',
  },
  {
    key: 'growth',
    label: 'Рост и развитие',
    icon: <GrowthArrowIcon className="h-[36px] w-[36px]" />,
    cx: 96,
    cy: 312,
    detail:
      'В период интенсивного роста потребность в витамине D возрастает: он участвует в формировании скелета и поддерживает гармоничное физическое развитие ребёнка.',
  },
  {
    key: 'mood',
    label: 'Настроение и сон',
    icon: <SleepZzzIcon className="h-[36px] w-[36px]" />,
    cx: 312,
    cy: 312,
    detail:
      'Витамин D связан с синтезом серотонина и регуляцией биоритмов — помогает поддерживать ровное настроение, концентрацию и качественный сон.',
  },
]

function CloseX({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function D3SupportWheel({ onSelect }: { onSelect: (part: WheelPart) => void }) {
  return (
    <div className="group relative mx-auto mt-14 h-[408px] w-[408px] drop-shadow-[0_22px_44px_rgba(33,137,137,0.22)]">
      {/* Rotating ring — pauses on hover so it's easy to click */}
      <div className="vf-wheel-spin absolute inset-0">
        <svg viewBox="0 0 408 408" className="h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="secGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A6CFCB" />
              <stop offset="55%" stopColor="#6FA6A1" />
              <stop offset="100%" stopColor="#4E8A85" />
            </radialGradient>
          </defs>

          <circle cx="204" cy="204" r="198" fill="url(#secGrad)" stroke="#ffffff" strokeWidth="6" />
          <line x1="204" y1="10" x2="204" y2="398" stroke="#ffffff" strokeWidth="3" />
          <line x1="10" y1="204" x2="398" y2="204" stroke="#ffffff" strokeWidth="3" />

          <path id="arcTL" d="M80.2 197.5 A124 124 0 0 1 197.5 80.2" fill="none" />
          <path id="arcTR" d="M210.5 80.2 A124 124 0 0 1 327.8 197.5" fill="none" />
          <path id="arcBL" d="M80.2 210.5 A124 124 0 0 0 197.5 327.8" fill="none" />
          <path id="arcBR" d="M210.5 327.8 A124 124 0 0 0 327.8 210.5" fill="none" />

          <g fill="#ffffff" fontSize="16.5" fontWeight={700} letterSpacing="0.2">
            <text textAnchor="middle" dominantBaseline="middle"><textPath href="#arcTL" startOffset="50%">Иммунитет и защита</textPath></text>
            <text textAnchor="middle" dominantBaseline="middle"><textPath href="#arcTR" startOffset="50%">Кости и мышцы</textPath></text>
            <text textAnchor="middle" dominantBaseline="middle"><textPath href="#arcBL" startOffset="50%">Рост и развитие</textPath></text>
            <text textAnchor="middle" dominantBaseline="middle"><textPath href="#arcBR" startOffset="50%">Настроение и сон</textPath></text>
          </g>
        </svg>

        {/* Clickable quadrants */}
        {wheelParts.map((p) => (
          <button
            key={p.key}
            type="button"
            aria-label={p.label}
            onClick={() => onSelect(p)}
            className="absolute flex h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white ring-white/0 transition duration-200 hover:bg-white/15 hover:ring-2 hover:ring-white/50 focus:outline-none focus-visible:bg-white/20"
            style={{ left: p.cx, top: p.cy }}
          >
            <span className="drop-shadow-[0_2px_3px_rgba(15,91,91,0.35)]">{p.icon}</span>
          </button>
        ))}
      </div>

      {/* Static centre cap (stays upright) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[188px] w-[188px] -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 188 188" className="h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="capGrad" cx="38%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#FBDD99" />
              <stop offset="45%" stopColor="#F3B44E" />
              <stop offset="100%" stopColor="#E28A28" />
            </radialGradient>
            <filter id="capGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>
          <circle cx="94" cy="94" r="84" fill="#F1B24C" opacity="0.5" filter="url(#capGlow)" />
          <circle cx="94" cy="94" r="80" fill="url(#capGrad)" stroke="#ffffff" strokeWidth="7" />
          <text x="94" y="99" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="50" fontWeight={800}>D3</text>
        </svg>
      </div>
    </div>
  )
}

export default function SlideAudience() {
  const [activePart, setActivePart] = useState<WheelPart | null>(null)

  return (
    <section
      className="relative h-full overflow-hidden px-[48px]"
      style={{ color: NAVY }}
    >
      <header className="absolute left-[48px] top-[4px]">
        <h1 className="font-display text-[36px] font-bold leading-[1.08] tracking-normal text-[#18324A]">
          Аудитория и потребность
        </h1>
        <p className="mt-2 text-[18px] font-medium leading-none text-[#6D7A86]">
          Пациент: ребёнок школьного возраста
        </p>
      </header>

      <div className="absolute left-[48px] top-[96px] flex h-[1060px] w-[448px] flex-col rounded-[22px] bg-white px-[28px] py-12 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="mt-8 text-center text-[28px] font-bold leading-[1.14] text-[#18324A]">
          Интеллектуальная нагрузка<br />
          <span className="text-[#21A7A2]">требует поддержки</span>
        </h2>
        <p className="mt-4 text-center text-[18.5px] font-medium leading-[1.32] text-[#6D7A86]">
          Витамин D3 важен для нормального<br />
          развития ребёнка и помогает<br />
          поддерживать общее самочувствие<br />
          в период учёбы.
        </p>

        <div className="relative mx-auto mt-8 h-[352px] w-[326px] overflow-hidden rounded-[20px] bg-[#F7F3ED]">
          <img
            src="/assets/characters/active-audience-schoolboy.webp"
            alt="Школьник за учебой"
            className="h-full w-full object-cover object-[50%_24%]"
            draggable={false}
          />
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <FeatureChip icon={<BrainIcon className="h-8 w-8" />} label={<>Внимание</>} />
          <FeatureChip icon={<BulbIcon className="h-8 w-8" />} label={<>Память<br />и обучение</>} />
          <FeatureChip icon={<SmileIcon className="h-8 w-8" />} label={<>Настроение</>} />
          <FeatureChip icon={<MoonIcon className="h-8 w-8" />} label={<>Качество<br />сна</>} />
        </div>

        <div className="mb-10 mt-auto flex h-[120px] items-center gap-4 rounded-[18px] bg-[#C8F1EF] px-7 py-6">
          <div className="shrink-0 text-[#0E8F8B]"><ShieldIcon className="h-12 w-12" /></div>
          <p className="text-[19px] font-bold leading-[1.28] text-[#0E6F73]">
            D3 — часть ежедневной поддержки роста,<br />развития и уверенности ребёнка.
          </p>
        </div>
      </div>

      <div className="absolute right-[48px] top-[96px] flex h-[1060px] w-[448px] flex-col rounded-[22px] bg-white px-[20px] py-12 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="mt-8 text-center text-[29px] font-bold leading-[1.14] text-[#18324A]">
          Витамин D3 — больше,<br />чем просто витамин
        </h2>
        <p className="mt-4 text-center text-[18.5px] font-medium leading-[1.32] text-[#6D7A86]">
          Комплексная поддержка здоровья<br />ребёнка каждый день
        </p>

        <D3SupportWheel onSelect={setActivePart} />

        <div className="relative mt-auto mb-10 rounded-[16px] border border-[#E4E8EB] bg-white px-6 py-7">
          <div className="pr-[104px]">
            <h3 className="text-[23px] font-bold leading-tight text-[#21A7A2]">Активная формула</h3>
            <ul className="mt-4 space-y-3 text-[17px] font-semibold leading-[1.28] text-[#18324A]">
              <li className="flex gap-2"><span className="mt-px shrink-0 text-[#21A7A2]">✓</span>Поддержка усвоения кальция и фосфора</li>
              <li className="flex gap-2"><span className="mt-px shrink-0 text-[#21A7A2]">✓</span>Участие в формировании костной системы</li>
              <li className="flex gap-2"><span className="mt-px shrink-0 text-[#21A7A2]">✓</span>Помощь в поддержании нормального уровня D3</li>
            </ul>
          </div>
          <div className="absolute right-5 top-6">
            <Molecule />
          </div>
        </div>
      </div>

      {/* Wheel part modal */}
      {activePart && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-10"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-[#0E2A3B]/45 backdrop-blur-[3px]"
            onClick={() => setActivePart(null)}
          />

          <div className="relative w-[720px] max-w-full overflow-hidden rounded-[30px] bg-[linear-gradient(160deg,#FFFFFF_0%,#F2FBFA_55%,#E7F6F4_100%)] shadow-[0_44px_96px_rgba(14,42,59,0.42)] ring-1 ring-[#CBEBE8]">
            <div className="h-[9px] w-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)]" />

            <div className="pointer-events-none absolute inset-x-4 bottom-4 top-6 rounded-[22px] border border-dashed border-[#B7E7E4]" />

            <button
              type="button"
              onClick={() => setActivePart(null)}
              aria-label="Закрыть"
              className="absolute right-6 top-[30px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E8F8B] shadow-[0_6px_16px_rgba(14,42,59,0.16)] transition hover:bg-[#EAF8F7]"
            >
              <CloseX className="h-6 w-6" />
            </button>

            <div className="relative px-12 pb-12 pt-9">
              <div className="flex items-center gap-5">
                <span className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_12px_26px_rgba(14,42,59,0.2)]">
                  {activePart.icon}
                </span>
                <div className="min-w-0 pr-14">
                  <p className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-[#21A7A2]">
                    Поддержка витамина D3
                  </p>
                  <h3 className="mt-1.5 text-[34px] font-extrabold leading-[1.06] text-[#18324A]">
                    {activePart.label}
                  </h3>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-[#CBEBE8]" />

              <p className="mt-6 text-[24px] font-medium leading-[1.5] text-[#3C4A57]">
                {activePart.detail}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
