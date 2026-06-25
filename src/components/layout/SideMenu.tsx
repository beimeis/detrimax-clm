import { babyBranch } from '../../data/baby'
import { activeBranch } from '../../data/active'
import { usePresentationStore } from '../../store/usePresentationStore'
import type { BranchId } from '../../data/types'

interface SideMenuProps {
  currentBranch: BranchId
  currentSlide: number
  onNavigate: (branch: BranchId, slide: number) => void
  onFinale: () => void
  onHome: () => void
}

export default function SideMenu({
  currentBranch,
  currentSlide,
  onNavigate,
  onFinale,
  onHome,
}: SideMenuProps) {
  const menuOpen = usePresentationStore((s) => s.menuOpen)
  const setMenuOpen = usePresentationStore((s) => s.setMenuOpen)

  if (!menuOpen) return null

  const sections = [
    { branch: 'baby' as BranchId, config: babyBranch },
    { branch: 'active' as BranchId, config: activeBranch },
  ]

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-40 bg-black/30"
        aria-label="Закрыть меню"
        onClick={() => setMenuOpen(false)}
      />
      <aside className="fixed left-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <p className="font-display text-lg font-bold text-brand-heading">Разделы</p>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-lg text-brand-muted hover:bg-gray-100"
            aria-label="Закрыть"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <button
            type="button"
            className="mb-6 w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-brand-heading hover:bg-gray-50"
            onClick={() => {
              onHome()
              setMenuOpen(false)
            }}
          >
            На первый экран
          </button>

          {sections.map(({ branch, config }) => (
            <div key={branch} className="mb-6">
              <p
                className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide"
                style={{ color: config.color }}
              >
                {config.label}
              </p>
              <ul className="space-y-1">
                {config.slides.map((slide) => {
                  const isActive = currentBranch === branch && currentSlide === slide.id
                  return (
                    <li key={slide.id}>
                      <button
                        type="button"
                        className={`w-full rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                          isActive
                            ? 'font-semibold text-white'
                            : 'text-brand-heading hover:bg-gray-50'
                        }`}
                        style={isActive ? { backgroundColor: config.color } : undefined}
                        onClick={() => {
                          onNavigate(branch, slide.id)
                          setMenuOpen(false)
                        }}
                      >
                        {slide.menuLabel}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          <button
            type="button"
            className="mt-2 w-full rounded-xl px-3 py-2.5 text-left text-sm text-brand-muted hover:bg-gray-50"
            onClick={() => {
              onFinale()
              setMenuOpen(false)
            }}
          >
            Финал · CTA
          </button>
        </nav>
      </aside>
    </>
  )
}
