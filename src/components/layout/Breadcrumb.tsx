import DetrimaxBrand from '../shared/DetrimaxBrand'

interface BreadcrumbProps {
  branchLabel: string
  branchColor: string
}

export default function Breadcrumb({ branchLabel, branchColor }: BreadcrumbProps) {
  return (
    <nav className="relative z-10 flex items-center gap-2 px-8 py-3 text-[14px] font-medium" aria-label="Навигация">
      <DetrimaxBrand />
      <span className="text-brand-muted">/</span>
      <span style={{ color: branchColor }}>{branchLabel}</span>
    </nav>
  )
}
