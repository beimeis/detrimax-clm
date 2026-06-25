import { useEffect, useState } from 'react'

const LOGO_SRC = '/brand/wires-logo.png'

export default function WiresLogo({ className = '' }: { className?: string }) {
  const [processedSrc, setProcessedSrc] = useState(LOGO_SRC)

  useEffect(() => {
    let active = true
    const image = new Image()
    image.crossOrigin = 'anonymous'

    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight

      const context = canvas.getContext('2d', { willReadFrequently: true })
      if (!context) return

      context.drawImage(image, 0, 0)
      const frame = context.getImageData(0, 0, canvas.width, canvas.height)
      const { data } = frame

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const max = Math.max(r, g, b)
        const min = Math.min(r, g, b)
        const saturation = max - min
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

        if (max < 18 && saturation < 18) {
          data[i + 3] = 0
          continue
        }

        if (luminance < 52 && saturation < 32) {
          data[i + 3] = Math.round(((luminance - 18) / (52 - 18)) * 255)
        }
      }

      context.putImageData(frame, 0, 0)
      if (active) setProcessedSrc(canvas.toDataURL('image/png'))
    }

    image.src = LOGO_SRC

    return () => {
      active = false
    }
  }, [])

  return (
    <img
      src={processedSrc}
      alt="Wires — выбор в пользу качества"
      className={`wires-logo ${className}`}
      draggable={false}
    />
  )
}
