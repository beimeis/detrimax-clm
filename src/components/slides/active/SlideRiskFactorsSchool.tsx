import type { ReactNode } from "react";

const NAVY = "#18324A";

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
  icon: ReactNode;
}

const lifestyle: Factor[] = [
  {
    num: 1,
    title: "Длительное пребывание в помещении",
    text: "Учебный день (6–8 часов) и выполнение домашних заданий проходят в закрытых классах, куда не проникают УФ-лучи нужного спектра.",
    icon: <SchoolIcon />,
  },
  {
    num: 2,
    title: "Гаджет-зависимость",
    text: "Экранное время заменяет активные прогулки на свежем воздухе, особенно в светлое время суток.",
    icon: <PhoneIcon />,
  },
];

const physiology: Factor[] = [
  {
    num: 3,
    title: "Скачки роста",
    text: "В периоды интенсивного роста (7–9 лет и подростковый возраст) потребность в D3 резко возрастает для построения костной ткани, что быстро истощает запасы.",
    icon: <GrowthIcon />,
  },
  {
    num: 4,
    title: "Пищевые привычки",
    text: "Рацион современного школьника часто беден жирной морской рыбой, диким лососем и обогащёнными продуктами.",
    icon: <FishIcon />,
  },
];

function FactorRow({ f }: { f: Factor }) {
  return (
    <article className="relative flex gap-4 rounded-[16px] border border-[#EAEEF1] bg-white px-5 py-3 shadow-[0_6px_16px_rgba(24,50,74,0.05)]">
      <span className="absolute -left-2.5 -top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-[15px] font-bold text-white shadow-[0_6px_14px_rgba(33,167,162,0.3)]">
        {f.num}
      </span>
      <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]">
        {f.icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-[19px] font-bold leading-tight text-[#18324A]">
          {f.title}
        </h3>
        <p className="mt-1.5 text-[15px] font-medium leading-[1.3] text-[#6D7A86]">
          {f.text}
        </p>
      </div>
    </article>
  );
}

function CategoryCard({
  icon,
  title,
  factors,
}: {
  icon: ReactNode;
  title: string;
  factors: Factor[];
}) {
  return (
    <div className="w-full rounded-[24px] bg-white px-7 py-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3">
        <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white">
          {icon}
        </span>
        <h2 className="text-[24px] font-bold text-[#18324A]">{title}</h2>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {factors.map((f) => (
          <FactorRow key={f.num} f={f} />
        ))}
      </div>
    </div>
  );
}

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideRiskFactorsSchool() {
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
        />
        <CategoryCard
          icon={<PulseIcon className="h-6 w-6" />}
          title="Физиологические причины"
          factors={physiology}
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

    </section>
  );
}
