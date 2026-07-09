import { useState } from "react";
import type { ReactNode } from "react";

const NAVY = "#18324A";

function ChevronRight({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TapIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M9 11V6.5a1.6 1.6 0 0 1 3.2 0V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.2 11.5v-1a1.5 1.5 0 0 1 3 0v1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.2 11.7a1.5 1.5 0 0 1 3 0V15c0 2.8-2 4.8-4.8 4.8h-1.2c-1.4 0-2.4-.6-3.3-1.9l-2.4-3.5a1.5 1.5 0 0 1 2.4-1.9l1.2 1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseX({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function SchoolIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path
        d="M8 46V22l20-11 20 11v24"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 46h40"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <rect
        x="22"
        y="32"
        width="12"
        height="14"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M20 22h16M28 11v6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <rect
        x="16"
        y="7"
        width="24"
        height="42"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path
        d="M24 12h8M25 43h6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M28 22l4 4-4 4M22 26h9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GrowthIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path
        d="M11 46h34"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M17 46V32M27 46V24M37 46V16"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M15 30c9-1 18-8 27-21"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M35 9h9v9"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FishIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path
        d="M8 28c6-9 16-13 25-13 8 0 13 4 15 8-2 4-7 8-15 8-9 0-19-4-25-3Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M48 23c3 1 4 3 4 5s-1 4-4 5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 28c-2-2-3-5-2-9 3 1 5 3 6 6M8 28c-2 2-3 5-2 9 3-1 5-3 6-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="25" r="2" fill="currentColor" />
    </svg>
  );
}

function ClockIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="19" stroke="currentColor" strokeWidth="2.8" />
      <path
        d="M28 16v12l8 5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PulseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path
        d="M8 28h9l5-12 8 24 5-14 4 8h9"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function D3Shield({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 66" className={className} aria-hidden>
      <path
        d="M32 4 56 12.5V29c0 14.4-9 27.3-24 32C17 56.3 8 43.4 8 29V12.5L32 4Z"
        fill="#21A7A2"
      />
      <path
        d="M32 4 56 12.5V29c0 14.4-9 27.3-24 32C17 56.3 8 43.4 8 29V12.5L32 4Z"
        fill="none"
        stroke="#0E8F8B"
        strokeWidth="2"
      />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontSize="21"
        fontWeight="800"
        fill="#ffffff"
        fontFamily="Montserrat, Inter, sans-serif"
      >
        D3
      </text>
    </svg>
  );
}

function SunIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="9" stroke="currentColor" strokeWidth="3" />
      <path
        d="M28 7v7M28 42v7M7 28h7M42 28h7M13 13l5 5M38 38l5 5M43 13l-5 5M18 38l-5 5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface Factor {
  num: number;
  title: string;
  text: string;
  detail: string;
  tip: string;
  icon: ReactNode;
}

const lifestyle: Factor[] = [
  {
    num: 1,
    title: "Длительное пребывание в помещении",
    text: "Учебный день (6–8 часов) и выполнение домашних заданий проходят в закрытых классах, куда не проникают УФ-лучи нужного спектра.",
    detail:
      "Кожа синтезирует витамин D только под прямыми UVB-лучами солнца. За партой и дома этот путь фактически отключён 5–6 дней в неделю, поэтому у школьника почти не остаётся естественного источника D3 в течение учебного года.",
    tip: "Добавьте дневные прогулки на улице и профилактический приём D3 по рекомендации врача.",
    icon: <SchoolIcon />,
  },
  {
    num: 2,
    title: "Гаджет-зависимость",
    text: "Экранное время заменяет активные прогулки на свежем воздухе, особенно в светлое время суток.",
    detail:
      "Каждый час у экрана — это час без солнечного света. Досуг смещается в помещение и на тёмное время суток, сокращая и без того короткое «окно» естественной выработки витамина D.",
    tip: "Планируйте активные перерывы на улице именно в светлое время суток.",
    icon: <PhoneIcon />,
  },
];

const physiology: Factor[] = [
  {
    num: 3,
    title: "Скачки роста",
    text: "В периоды интенсивного роста (7–9 лет и подростковый возраст) потребность в D3 резко возрастает для построения костной ткани, что быстро истощает запасы.",
    detail:
      "Во время ростового скачка костная ткань строится ускоренно и активно «забирает» кальций, для усвоения которого необходим витамин D. Запасы расходуются быстрее, чем восполняются питанием и солнцем.",
    tip: "В периоды активного роста контролируйте уровень 25(OH)D и поддерживайте D3.",
    icon: <GrowthIcon />,
  },
  {
    num: 4,
    title: "Пищевые привычки",
    text: "Рацион современного школьника часто беден жирной морской рыбой, диким лососем и обогащёнными продуктами.",
    detail:
      "Основные пищевые источники D3 — жирная морская рыба, дикий лосось и обогащённые продукты — редко присутствуют в ежедневном меню школьника, поэтому питание почти не компенсирует дефицит витамина D.",
    tip: "Включайте источники D3 в рацион или добавку по рекомендации специалиста.",
    icon: <FishIcon />,
  },
];

function FactorRow({ f, onOpen }: { f: Factor; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex w-full items-center gap-4 rounded-[16px] border border-[#EAEEF1] bg-white px-5 py-3 text-left shadow-[0_6px_16px_rgba(24,50,74,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#CBEBE8] hover:shadow-[0_14px_30px_rgba(24,50,74,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21A7A2]"
    >
      <span className="absolute -left-2.5 -top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-[15px] font-bold text-white shadow-[0_6px_14px_rgba(33,167,162,0.3)]">
        {f.num}
      </span>
      <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]">
        {f.icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[19px] font-bold leading-tight text-[#18324A]">
          {f.title}
        </h3>
        <p className="mt-1.5 text-[15px] font-medium leading-[1.3] text-[#6D7A86]">
          {f.text}
        </p>
      </div>
      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#EAF8F7] text-[#21A7A2] transition group-hover:bg-[#21A7A2] group-hover:text-white">
        <ChevronRight className="h-[17px] w-[17px]" />
      </span>
    </button>
  );
}

function CategoryCard({
  icon,
  title,
  factors,
  onOpen,
}: {
  icon: ReactNode;
  title: string;
  factors: Factor[];
  onOpen: (f: Factor) => void;
}) {
  return (
    <div className="w-full rounded-[24px] bg-white px-7 py-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3">
        <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
          {icon}
        </span>
        <h2 className="text-[24px] font-bold text-[#18324A]">{title}</h2>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#EAF8F7] px-3.5 py-1.5 text-[13px] font-bold text-[#0E8F8B]">
          <TapIcon className="h-[16px] w-[16px]" /> Подробнее
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {factors.map((f) => (
          <FactorRow key={f.num} f={f} onOpen={() => onOpen(f)} />
        ))}
      </div>
    </div>
  );
}

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideRiskFactorsSchool() {
  const [active, setActive] = useState<Factor | null>(null);

  return (
    <section
      className="relative h-full overflow-hidden px-[45px]"
      style={{ color: NAVY }}
    >
      <header className="absolute left-[45px] top-[40px]">
        <h1 className="font-display text-[35px] font-extrabold leading-[1.05] tracking-tight text-[#18324A]">
          Факторы риска дефицита витамина D3 у школьников
        </h1>
        <p className="mt-1.5 text-[19px] font-medium leading-none text-[#6D7A86]">
          Образ жизни, рост и питание
        </p>
        <div className="mt-3 h-[3px] w-[150px] rounded-full bg-[#21A7A2]" />
      </header>

      {/* Left visual card */}
      <div className="absolute left-[45px] top-[190px] flex h-[828px] w-[406px] flex-col rounded-[24px] bg-white px-6 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="relative h-[560px] w-full overflow-hidden rounded-[18px] bg-[#EEF3F8]">
          <img
            src="/assets/characters/active-risk-schoolboy-indoor.webp"
            alt="Школьник за учёбой в помещении"
            className="h-full w-full object-cover object-[50%_20%]"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-white/85 to-transparent" />
        </div>
        <div className="mt-5 flex flex-1 items-center gap-4 rounded-[18px] bg-[#EAF8F7] px-6">
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white text-[#21A7A2] shadow-[0_4px_12px_rgba(33,167,162,0.16)]">
            <ClockIcon />
          </span>
          <p className="text-[18.5px] font-bold leading-[1.28] text-[#18324A]">
            Большую часть дня школьник проводит{" "}
            <span className="text-[#0E8F8B]">в помещении и за экраном</span> —
            синтез D3 в коже почти не работает.
          </p>
        </div>
      </div>

      {/* Right category cards */}
      <div className="absolute right-[45px] top-[190px] flex w-[500px] flex-col gap-4">
        <CategoryCard
          icon={<ClockIcon className="h-6 w-6" />}
          title="Образ жизни"
          factors={lifestyle}
          onOpen={setActive}
        />
        <CategoryCard
          icon={<PulseIcon className="h-6 w-6" />}
          title="Физиологические причины"
          factors={physiology}
          onOpen={setActive}
        />
      </div>

      {/* Summary */}
      <div className="absolute left-[45px] right-[45px] top-[1036px] flex items-center gap-4 rounded-[20px] bg-[linear-gradient(135deg,#EAF8F7,#DDF3F0)] px-7 py-4 shadow-[0_10px_25px_rgba(33,167,162,0.12)]">
        <D3Shield className="h-[58px] w-[58px] shrink-0" />
        <p className="text-[19px] font-medium leading-[1.28] text-[#18324A]">
          <span className="text-[22px] font-extrabold text-[#0E8F8B]">
            Итог:
          </span>{" "}
          риск дефицита D3 у школьника растёт, когда{" "}
          <span className="inline-flex items-center gap-1 font-bold text-[#0E8F8B]">
            <SunIcon className="h-4 w-4" />
            мало солнца
          </span>
          , много экранного времени, высокий темп роста и недостаточно пищевых
          источников витамина D.
        </p>
      </div>

      {/* Factor detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-10"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-[#0E2A3B]/45 backdrop-blur-[3px]"
            onClick={() => setActive(null)}
          />

          <div className="vf-flip-in relative w-[840px] max-w-full overflow-hidden rounded-[30px] bg-white shadow-[0_44px_96px_rgba(14,42,59,0.42)] ring-1 ring-[#CBEBE8]">
            <div className="h-[10px] w-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)]" />

            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Закрыть"
              className="absolute right-6 top-[32px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E8F8B] shadow-[0_6px_16px_rgba(14,42,59,0.16)] transition hover:bg-[#EAF8F7]"
            >
              <CloseX className="h-6 w-6" />
            </button>

            <div className="relative px-14 pb-14 pt-10">
              <div className="flex items-center gap-6">
                <span className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-[26px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_14px_30px_rgba(14,42,59,0.22)] [&>svg]:h-[52px] [&>svg]:w-[52px]">
                  {active.icon}
                </span>
                <div className="min-w-0 pr-14">
                  <p className="text-[17px] font-extrabold uppercase tracking-[0.08em] text-[#21A7A2]">
                    Фактор риска {active.num}
                  </p>
                  <h3 className="mt-2 text-[38px] font-extrabold leading-[1.06] text-[#18324A]">
                    {active.title}
                  </h3>
                </div>
              </div>

              <div className="mt-7 h-px w-full bg-[#CBEBE8]" />

              <p className="mt-7 text-[26px] font-medium leading-[1.5] text-[#33475A]">
                {active.detail}
              </p>

              <div className="mt-7 flex items-start gap-4 rounded-[22px] bg-[linear-gradient(135deg,#EAF8F7,#DDF3F0)] px-7 py-6">
                <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-white text-[#0E8F8B] shadow-[0_6px_16px_rgba(33,167,162,0.18)]">
                  <SunIcon className="h-7 w-7" />
                </span>
                <p className="text-[22px] font-semibold leading-[1.38] text-[#18324A]">
                  <span className="font-extrabold text-[#0E8F8B]">Что делать: </span>
                  {active.tip}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
