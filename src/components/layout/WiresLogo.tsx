const LOGO_SRC = '/brand/wires-logo.png'

export default function WiresLogo() {
  return (
    <div
      className="pointer-events-none absolute right-6 top-4 z-20"
      aria-hidden
    >
      <img
        src={LOGO_SRC}
        alt=""
        className="block h-[52px] w-auto"
        draggable={false}
      />
    </div>
  )
}
