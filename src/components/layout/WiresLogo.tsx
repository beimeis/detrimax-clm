const LOGO_SRC = '/brand/wires-logo-transparent.png'

export default function WiresLogo() {
  return (
    <div
      className="pointer-events-none absolute right-[35px] top-[24px] z-20"
      aria-hidden
    >
      <img
        src={LOGO_SRC}
        alt=""
        className="block h-[58px] w-auto object-contain"
        draggable={false}
      />
    </div>
  )
}
