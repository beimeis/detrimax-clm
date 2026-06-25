import type { SVGProps } from 'react'

export type ChipIcon =
  | 'sun'
  | 'gadgets'
  | 'growth'
  | 'season'
  | 'sleep'
  | 'bones'
  | 'shield'
  | 'muscles'
  | 'teeth'
  | 'brain'
  | 'vdr'
  | 'cell'
  | 'virus'
  | 'barrier'
  | 'drop'
  | 'mother'
  | 'bottle'
  | 'mood'
  | 'behavior'
  | 'baby'
  | 'school'
  | 'chart'
  | 'dose'
  | 'pump'
  | 'calendar'
  | 'course'
  | 'active'
  | 'infection'
  | 'lifestyle'

type IconProps = SVGProps<SVGSVGElement>

function SunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="4.5" fill="currentColor" opacity="0.9" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
        <line
          key={deg}
          x1="12"
          y1="12"
          x2={12 + 9 * Math.cos((deg * Math.PI) / 180)}
          y2={12 + 9 * Math.sin((deg * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

function GadgetsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  )
}

function GrowthIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 19V6M12 6L8 10M12 6L16 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 19H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SeasonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 3V21M12 3L9 6M12 3L15 6M8 10H16M7 15H17M8 20H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function SleepIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M18 14.5A7 7 0 1 1 9.5 6.2 5.5 5.5 0 0 0 18 14.5Z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

function BonesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 3L19 6.5V12C19 16.5 16 19.5 12 21C8 19.5 5 16.5 5 12V6.5L12 3Z" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.12" />
    </svg>
  )
}

function MusclesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M8 16C8 12 10 9 13 8C16 7 18 9 18 12C18 15 16 17 13 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 16V19H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function TeethIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="6" y="8" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="8" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="8" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function BrainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M9 5C6.5 5.5 5 7.5 5 10C5 12 6 13.5 7.5 14C6 14.5 5 16 5 18C5 20 7 21.5 10 21.5C11 21.5 12 21 12 20.5V5C11 4.5 10 4.5 9 5Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M15 5C17.5 5.5 19 7.5 19 10C19 12 18 13.5 16.5 14C18 14.5 19 16 19 18C19 20 17 21.5 14 21.5C13 21.5 12 21 12 20.5V5C13 4.5 14 4.5 15 5Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function VdrIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CellIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="7" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10" r="1.2" fill="currentColor" />
      <circle cx="14" cy="13" r="1" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

function VirusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.75" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
        <line
          key={deg}
          x1="12"
          y1="12"
          x2={12 + 8 * Math.cos((deg * Math.PI) / 180)}
          y2={12 + 8 * Math.sin((deg * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

function BarrierIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 3L18 6V12C18 15.5 15.5 18 12 19C8.5 18 6 15.5 6 12V6L12 3Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 11H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function DropIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 4C12 4 7 11 7 14.5C7 17.5 9.2 19.5 12 19.5C14.8 19.5 17 17.5 17 14.5C17 11 12 4 12 4Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function MotherIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 20C6.5 16 8.8 14 12 14C15.2 14 17.5 16 18 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function BottleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M10 4H14V7L16 10V18C16 19 15 20 13.5 20H10.5C9 20 8 19 8 18V10L10 7V4Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function MoodIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 10H9.01M15 10H15.01M9 15C10 16.5 14 16.5 15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function BehaviorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M7 18L10 8L14 14L17 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BabyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 20C7 16 9 14 12 14C15 14 17 16 18 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function SchoolIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M3 10L12 5L21 10L12 15L3 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 12V17C7 17 9.5 19 12 19C14.5 19 17 17 17 17V12" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M5 19V5M5 19H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 15V11M13 15V8M17 15V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function DoseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 4V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 7C9 5.5 10.2 4 12 4C13.8 4 15 5.5 15 7" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="12" cy="16" rx="4" ry="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function PumpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="8" y="4" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 16V20M9 20H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 4V8M16 4V8M4 10H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CourseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M5 12C5 12 8 7 12 7C16 7 19 12 19 12C19 12 16 17 12 17C8 17 5 12 5 12Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}

function ActiveIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M13 5L19 12L13 19M11 19L5 12L11 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InfectionIcon(props: IconProps) {
  return <VirusIcon {...props} />
}

function LifestyleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      {[0, 90, 180, 270].map(deg => (
        <line
          key={deg}
          x1="8"
          y1="10"
          x2={8 + 5 * Math.cos((deg * Math.PI) / 180)}
          y2={10 + 5 * Math.sin((deg * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ))}
      <rect x="14" y="6" width="6" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

const ICON_MAP: Record<ChipIcon, (props: IconProps) => JSX.Element> = {
  sun: SunIcon,
  gadgets: GadgetsIcon,
  growth: GrowthIcon,
  season: SeasonIcon,
  sleep: SleepIcon,
  bones: BonesIcon,
  shield: ShieldIcon,
  muscles: MusclesIcon,
  teeth: TeethIcon,
  brain: BrainIcon,
  vdr: VdrIcon,
  cell: CellIcon,
  virus: VirusIcon,
  barrier: BarrierIcon,
  drop: DropIcon,
  mother: MotherIcon,
  bottle: BottleIcon,
  mood: MoodIcon,
  behavior: BehaviorIcon,
  baby: BabyIcon,
  school: SchoolIcon,
  chart: ChartIcon,
  dose: DoseIcon,
  pump: PumpIcon,
  calendar: CalendarIcon,
  course: CourseIcon,
  active: ActiveIcon,
  infection: InfectionIcon,
  lifestyle: LifestyleIcon,
}

export function ChipIconSvg({ icon, className }: { icon: ChipIcon; className?: string }) {
  const Icon = ICON_MAP[icon]
  return <Icon className={className} width={22} height={22} />
}

const ZONE_ICON_BY_ID: Record<string, ChipIcon> = {
  sun: 'sun',
  gadgets: 'gadgets',
  growth: 'growth',
  seasonal: 'season',
  sleep: 'sleep',
  'sleep-early': 'sleep',
  'sleep-quality': 'sleep',
  bones: 'bones',
  immunity: 'shield',
  muscles: 'muscles',
  teeth: 'teeth',
  vdr: 'vdr',
  plasticity: 'brain',
  neuroprotect: 'shield',
  peptides: 'barrier',
  phagocytosis: 'cell',
  cold: 'virus',
  tcells: 'cell',
  treg: 'shield',
  sweat: 'drop',
  rachit: 'bones',
  mother: 'mother',
  milk: 'bottle',
  skin: 'sun',
  serotonin: 'mood',
  adhd: 'behavior',
  infant: 'baby',
  school: 'school',
  deficit: 'chart',
  '0': 'bones',
  '1': 'infection',
  '2': 'lifestyle',
  '3': 'growth',
  'baby-dose': 'dose',
  'baby-utp': 'pump',
  'active-dose': 'dose',
  'active-utp': 'course',
  dose: 'dose',
  pump: 'pump',
  age: 'baby',
  active: 'active',
  regular: 'calendar',
}

export function resolveZoneIcon(id: string, explicit?: ChipIcon): ChipIcon {
  if (explicit) return explicit
  return ZONE_ICON_BY_ID[id] ?? 'shield'
}
