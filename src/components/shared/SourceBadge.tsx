interface SourceBadgeProps {
  source: string
}

export default function SourceBadge({ source }: SourceBadgeProps) {
  return (
    <p className="text-[11px] font-light leading-snug text-brand-source">
      {source}
    </p>
  )
}
