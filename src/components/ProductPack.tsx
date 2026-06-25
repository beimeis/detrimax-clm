export const PRODUCT_IMAGES = {
  baby: '/products/detrimax-baby.png',
  active: '/products/detrimax-active.png',
} as const

export type ProductVariant = keyof typeof PRODUCT_IMAGES

interface Props {
  variant: ProductVariant
  glowing?: boolean
  enlarged?: boolean
  className?: string
  alt?: string
}

export default function ProductPack({
  variant,
  glowing = false,
  enlarged = false,
  className = '',
  alt,
}: Props) {
  const label = variant === 'baby' ? 'Детримакс® Бэби' : 'Детримакс® Актив'

  return (
    <div
      className={`product-pack ${variant} ${glowing ? 'glowing' : ''} ${enlarged ? 'enlarged' : ''} ${className}`}
    >
      <div className="product-pack-shadow" aria-hidden />
      <img
        src={PRODUCT_IMAGES[variant]}
        alt={alt ?? label}
        className="product-pack-img"
        draggable={false}
      />
    </div>
  )
}
