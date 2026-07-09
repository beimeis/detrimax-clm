import { useState } from "react";
import type { ReactNode } from "react";

const NAVY = "#18324A";

/* ── Icons ─────────────────────────────────────────────── */

function ChevronRight({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
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

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M5 12.5 10 17.5 19 6.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SchoolIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M8 46V22l20-11 20 11v24" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M8 46h40" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <rect x="22" y="32" width="12" height="14" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M20 22h16M28 11v6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <rect x="16" y="7" width="24" height="42" rx="5" stroke="currentColor" strokeWidth="2.8" />
      <path d="M24 12h8M25 43h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M28 22l4 4-4 4M22 26h9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GrowthIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M11 46h34" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M17 46V32M27 46V24M37 46V16" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M15 30c9-1 18-8 27-21" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M35 9h9v9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FishIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M8 28c6-9 16-13 25-13 8 0 13 4 15 8-2 4-7 8-15 8-9 0-19-4-25-3Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M48 23c3 1 4 3 4 5s-1 4-4 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 28c-2-2-3-5-2-9 3 1 5 3 6 6M8 28c-2 2-3 5-2 9 3-1 5-3 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="21" cy="25" r="2" fill="currentColor" />
    </svg>
  );
}

function ClockIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="19" stroke="currentColor" strokeWidth="2.8" />
      <path d="M28 16v12l8 5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PulseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M8 28h9l5-12 8 24 5-14 4 8h9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 15c-4.5-3.4-10-4.5-16-4.5v33c6 0 11.5 1.1 16 4.5 4.5-3.4 10-4.5 16-4.5v-33c-6 0-11.5 1.1-16 4.5Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M28 15v33" stroke="currentColor" strokeWidth="2.8" />
    </svg>
  );
}

function NoSunIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="9" stroke="currentColor" strokeWidth="2.8" />
      <path d="M28 9v5M28 42v5M9 28h5M42 28h5M15 15l3.5 3.5M37.5 37.5 41 41M41 15l-3.5 3.5M18.5 37.5 15 41" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M11 11 45 45" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

function DropletIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 8s14 16.5 14 26a14 14 0 0 1-28 0C14 24.5 28 8 28 8Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M22 34a6 6 0 0 0 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function WalkIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="31" cy="11" r="4.5" stroke="currentColor" strokeWidth="2.6" />
      <path d="M31 17l-5 13 7 6v11M26 30l-9 4M33 36l7 8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 9 51 47H5L28 9Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M28 24v10" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="28" cy="40.5" r="1.9" fill="currentColor" />
    </svg>
  );
}

function GaugeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M9 40a19 19 0 0 1 38 0" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M28 40l11-9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="28" cy="40" r="3" fill="currentColor" />
    </svg>
  );
}

function HourglassIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M16 8h24M16 48h24" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M18 8v5c0 6 10 9 10 15 0-6 10-9 10-15V8M18 48v-5c0-6 10-9 10-15 0 6 10 9 10 15v5" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  );
}

function PlateIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="25" cy="30" r="15" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="25" cy="30" r="7" stroke="currentColor" strokeWidth="2.4" />
      <path d="M47 11v34M47 11c-3 .5-4.5 3.5-4.5 7.5s1.5 6 4.5 6.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BulbIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <path d="M28 8a15 15 0 0 0-9 27c1.6 1.2 2.5 2.6 2.7 4.3l.3 2.7h12l.3-2.7c.2-1.7 1.1-3.1 2.7-4.3A15 15 0 0 0 28 8Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M23 48h10M25 42v6M31 42v6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="9" stroke="currentColor" strokeWidth="3" />
      <path d="M28 7v7M28 42v7M7 28h7M42 28h7M13 13l5 5M38 38l5 5M43 13l-5 5M18 38l-5 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function D3Shield({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 66" className={className} aria-hidden>
      <path d="M32 4 56 12.5V29c0 14.4-9 27.3-24 32C17 56.3 8 43.4 8 29V12.5L32 4Z" fill="#21A7A2" />
      <path d="M32 4 56 12.5V29c0 14.4-9 27.3-24 32C17 56.3 8 43.4 8 29V12.5L32 4Z" fill="none" stroke="#0E8F8B" strokeWidth="2" />
      <text x="32" y="40" textAnchor="middle" fontSize="21" fontWeight="800" fill="#ffffff" fontFamily="Montserrat, Inter, sans-serif">
        D3
      </text>
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────── */

interface ChainStep {
  icon: ReactNode;
  label: string;
}

interface Factor {
  num: number;
  category: string;
  title: string;
  short: string;
  detail: string;
  chain: ChainStep[];
  riskLabel: string;
  riskPct: number;
  helps: string[];
  fact: string;
  icon: ReactNode;
}

const factors: Factor[] = [
  {
    num: 1,
    category: "Образ жизни",
    title: "Длительное пребывание в помещении",
    short: "Учебный день 6–8 часов проходит в закрытых классах без нужных УФ-лучей.",
    detail:
      "Школьник проводит большую часть дня в помещении: в классе, дома за уроками, в закрытых пространствах. В результате кожа получает недостаточно солнечного света, необходимого для синтеза витамина D3.",
    chain: [
      { icon: <SchoolIcon />, label: "Школа" },
      { icon: <BookIcon />, label: "Домашние задания" },
      { icon: <NoSunIcon />, label: "Мало УФ-лучей" },
      { icon: <DropletIcon />, label: "Снижение синтеза D3" },
    ],
    riskLabel: "Высокий",
    riskPct: 100,
    helps: [
      "Ежедневные прогулки на солнце",
      "Активные перемены и прогулки после школы",
      "Каникулы и отдых на природе",
      "Больше времени на свежем воздухе",
    ],
    fact: "Даже 1 час прогулки на солнце в день может значительно повысить уровень витамина D3 у ребёнка.",
    icon: <SchoolIcon />,
  },
  {
    num: 2,
    category: "Образ жизни",
    title: "Гаджет-зависимость",
    short: "Экранное время заменяет активные прогулки в светлое время суток.",
    detail:
      "Чем больше времени школьник проводит за телефоном, планшетом или компьютером, тем меньше у него остаётся времени на прогулки, движение и пребывание на солнце. Это снижает естественный синтез витамина D3.",
    chain: [
      { icon: <PhoneIcon />, label: "Экранное время" },
      { icon: <WalkIcon />, label: "Меньше прогулок" },
      { icon: <SunIcon />, label: "Меньше солнца" },
      { icon: <AlertIcon />, label: "Рост риска дефицита D3" },
    ],
    riskLabel: "Средний / высокий",
    riskPct: 78,
    helps: [
      "Сокращение экранного времени",
      "Ежедневные прогулки в светлое время суток",
      "Активные игры на свежем воздухе",
      "Баланс учёбы, отдыха и движения",
    ],
    fact: "Снижение экранного времени даже на 1–2 часа в день помогает освободить время для прогулок и увеличить пребывание на свежем воздухе.",
    icon: <PhoneIcon />,
  },
  {
    num: 3,
    category: "Физиологические причины",
    title: "Скачки роста",
    short: "В периоды интенсивного роста потребность в D3 резко возрастает.",
    detail:
      "Во время активного роста организму требуется больше витамина D3 для формирования костей и поддержки обмена кальция. Если потребность растёт быстрее, чем поступление D3, повышается риск его дефицита.",
    chain: [
      { icon: <GrowthIcon />, label: "Быстрый рост" },
      { icon: <GaugeIcon />, label: "Рост потребности в D3" },
      { icon: <HourglassIcon />, label: "Быстрый расход запасов" },
      { icon: <AlertIcon />, label: "Повышение риска дефицита" },
    ],
    riskLabel: "Высокий",
    riskPct: 100,
    helps: [
      "Контроль уровня витамина D3",
      "Сбалансированный рацион",
      "Наблюдение в периоды активного роста",
      "Профилактика по рекомендации специалиста",
    ],
    fact: "Периоды быстрого роста особенно чувствительны к нехватке витамина D3, потому что организму нужно больше ресурсов для построения костной ткани.",
    icon: <GrowthIcon />,
  },
  {
    num: 4,
    category: "Физиологические причины",
    title: "Пищевые привычки",
    short: "Рацион школьника часто содержит мало пищевых источников витамина D.",
    detail:
      "Если в рационе ребёнка мало рыбы, яиц, молочных продуктов и других источников витамина D, организм получает его недостаточно с пищей. На этом фоне риск дефицита возрастает, особенно если одновременно мало солнца.",
    chain: [
      { icon: <FishIcon />, label: "Мало источников витамина D" },
      { icon: <PlateIcon />, label: "Недостаток поступления с пищей" },
      { icon: <GaugeIcon />, label: "Не покрывается потребность" },
      { icon: <AlertIcon />, label: "Рост риска дефицита D3" },
    ],
    riskLabel: "Средний / высокий",
    riskPct: 78,
    helps: [
      "Добавить в рацион источники витамина D",
      "Следить за регулярностью питания",
      "Использовать обогащённые продукты",
      "Профилактика по назначению специалиста",
    ],
    fact: "Недостаточное поступление витамина D с пищей особенно важно учитывать в сезоны, когда солнечного света становится меньше.",
    icon: <FishIcon />,
  },
];

interface Group {
  title: string;
  icon: ReactNode;
  more: string;
  indices: number[];
}

const groups: Group[] = [
  {
    title: "Образ жизни",
    icon: <ClockIcon className="h-6 w-6" />,
    more: "Главный риск — недостаток дневного света и снижение времени на прогулки на свежем воздухе.",
    indices: [0, 1],
  },
  {
    title: "Физиологические причины",
    icon: <PulseIcon className="h-6 w-6" />,
    more: "Главный риск — повышенная потребность организма в витамине D3 в периоды роста и при недостаточном поступлении с пищей.",
    indices: [2, 3],
  },
];

/* ── Sub-components ─────────────────────────────────────── */

function FactorMenuCard({
  f,
  active,
  onClick,
}: {
  f: Factor;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center gap-3.5 rounded-[20px] px-4 py-3.5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21A7A2] ${
        active
          ? "border-2 border-[#21A7A2] bg-[linear-gradient(135deg,#F1FBFA,#DAF1EE)] shadow-[0_18px_38px_rgba(33,167,162,0.26)]"
          : "border border-[#E1E8EA] bg-white shadow-[0_6px_16px_rgba(24,50,74,0.06)] hover:-translate-y-0.5 hover:border-[#CBEBE8] hover:shadow-[0_12px_26px_rgba(24,50,74,0.12)]"
      }`}
    >
      <span
        className={`absolute -left-2 -top-2 z-10 flex h-[28px] w-[28px] items-center justify-center rounded-full text-[14px] font-bold text-white transition ${
          active
            ? "bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] shadow-[0_6px_14px_rgba(33,167,162,0.45)]"
            : "bg-[#8DBDB8] shadow-[0_4px_10px_rgba(24,50,74,0.14)]"
        }`}
      >
        {f.num}
      </span>
      <span
        className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[16px] transition-all duration-300 [&>svg]:h-7 [&>svg]:w-7 ${
          active
            ? "bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_10px_22px_rgba(33,167,162,0.4)]"
            : "border border-[#CBEBE8] bg-[#EAF8F7] text-[#21A7A2]"
        }`}
      >
        {f.icon}
      </span>
      <span className={`min-w-0 flex-1 text-[17.5px] font-extrabold leading-[1.18] ${active ? "text-[#0E3B38]" : "text-[#14293C]"}`}>
        {f.title}
      </span>
      <span
        className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full transition ${
          active ? "bg-[#21A7A2] shadow-[0_0_12px_rgba(33,167,162,0.7)]" : "bg-[#E9F0EF] group-hover:bg-[#D4EAE7]"
        }`}
      >
        {active ? (
          <span className="h-[10px] w-[10px] rounded-full bg-white" />
        ) : (
          <ChevronRight className="h-4 w-4 text-[#7E959D]" />
        )}
      </span>
    </button>
  );
}

function GroupBlock({
  group,
  activeIndex,
  onSelect,
}: {
  group: Group;
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="rounded-[24px] bg-white p-5 shadow-[0_10px_28px_rgba(24,50,74,0.08)]">
      <div className="flex items-center gap-3">
        <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[15px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white [&>svg]:h-[25px] [&>svg]:w-[25px]">
          {group.icon}
        </span>
        <h3 className="text-[21px] font-extrabold leading-tight text-[#14293C]">{group.title}</h3>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {group.indices.map((i) => (
          <FactorMenuCard key={i} f={factors[i]} active={activeIndex === i} onClick={() => onSelect(i)} />
        ))}
      </div>
    </div>
  );
}

/* ── Slide ─────────────────────────────────────────────── */

export default function SlideRiskFactorsSchool() {
  const [active, setActive] = useState(0);
  const f = factors[active];

  return (
    <section className="relative h-full overflow-hidden px-[45px]" style={{ color: NAVY }}>
      <header className="absolute left-[45px] top-[38px]">
        <h1 className="font-display text-[33px] font-extrabold leading-[1.05] tracking-tight text-[#18324A]">
          Факторы риска дефицита витамина D3 у школьников
        </h1>
        <p className="mt-1.5 text-[16px] font-medium leading-none text-[#6D7A86]">
          Образ жизни, рост и питание
        </p>
      </header>

      {/* ── Left: big dynamic card ── */}
      <div className="absolute left-[45px] top-[150px] flex h-[1035px] w-[556px] flex-col rounded-[28px] bg-white p-7 shadow-[0_14px_38px_rgba(24,50,74,0.10)]">
        {/* animated figure — transparent, blends into the card */}
        <div className="relative h-[360px] w-full shrink-0">
          {/* soft mint glow so the figure sits on the card */}
          <div className="pointer-events-none absolute inset-x-8 bottom-6 top-6 rounded-full bg-[radial-gradient(circle,rgba(33,167,162,0.13),rgba(33,167,162,0)_70%)] blur-[4px]" />
          <img
            src="/assets/characters/reading-figure.gif"
            alt="Фигурка, читающая книгу"
            className="relative h-full w-full object-contain"
            draggable={false}
          />
        </div>

        {/* teal divider between figure and text */}
        <div className="mt-2 h-[3px] w-full shrink-0 rounded-full bg-[linear-gradient(90deg,rgba(33,167,162,0),#21A7A2_18%,#0E8F8B_82%,rgba(14,143,139,0))]" />

        {/* dynamic content */}
        <div key={active} className="vf-fade-up mt-7 flex min-h-0 flex-1 flex-col justify-center gap-9">
          <div>
            <h2 className="text-[31px] font-extrabold leading-[1.16] text-[#122536]">
              {f.num}. {f.title}
            </h2>
            <p className="mt-4 text-[20px] font-medium leading-[1.58] text-[#2A3B48]">{f.detail}</p>
          </div>

          {/* what helps */}
          <div>
          <p className="text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#0E8F8B]">
            Что помогает
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5">
            {f.helps.map((h) => (
              <div key={h} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#21A7A2] text-white shadow-[0_4px_10px_rgba(33,167,162,0.28)]">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="text-[18px] font-semibold leading-[1.34] text-[#22333F]">{h}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* ── Right: factor menu + итог ── */}
      <div className="absolute right-[45px] top-[150px] flex h-[1035px] w-[352px] flex-col gap-3.5">
        {groups.map((g) => (
          <GroupBlock key={g.title} group={g} activeIndex={active} onSelect={setActive} />
        ))}

        {/* Итог */}
        <div className="flex flex-1 flex-col justify-center rounded-[24px] border border-[#B7E0DB] bg-[linear-gradient(135deg,#E7F6F4,#D6EFEB)] p-7 shadow-[0_12px_30px_rgba(33,167,162,0.18)]">
          <div className="flex items-center gap-3.5">
            <D3Shield className="h-[68px] w-[68px] shrink-0" />
            <h3 className="text-[28px] font-extrabold text-[#122536]">Итог</h3>
          </div>
          <p className="mt-5 text-[21px] font-semibold leading-[1.5] text-[#1A3340]">
            Риск дефицита D3 у школьника растёт, когда{" "}
            <span className="font-extrabold text-[#0E8F8B]">мало солнца</span>,{" "}
            <span className="font-extrabold text-[#0E8F8B]">много экранного времени</span>,{" "}
            <span className="font-extrabold text-[#0E8F8B]">высокий темп роста</span> и недостаточно пищевых источников витамина D.
          </p>
        </div>
      </div>
    </section>
  );
}
