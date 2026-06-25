export default function DetrimaxLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`detrimax-logo-text ${className}`.trim()} aria-label="Детримакс®">
      ДЕТРИМАКС<sup>®</sup>
    </span>
  )
}
