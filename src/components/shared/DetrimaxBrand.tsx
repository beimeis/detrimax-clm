interface DetrimaxBrandProps {
  className?: string
}

export default function DetrimaxBrand({ className = '' }: DetrimaxBrandProps) {
  return <span className={`text-detrimax ${className}`.trim()}>Детримакс®</span>
}
