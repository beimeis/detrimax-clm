import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

function HomeIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 11.2 12 4l8 7.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9.2a.8.8 0 0 0 .8.8H17.2a.8.8 0 0 0 .8-.8V10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function DropIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M12 3c3.4 4.4 6.4 8 6.4 11.6A6.4 6.4 0 0 1 12 21a6.4 6.4 0 0 1-6.4-6.4C5.6 11 8.6 7.4 12 3Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" /><path d="M9.6 15.8c1.2 1.1 3 1.1 4.2 0" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" /></svg>
}
function CloseIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
}
function ChevronRight({ className = 'h-4 w-4', style }: { className?: string; style?: CSSProperties }) {
  return <svg viewBox="0 0 24 24" className={className} style={style} fill="none" aria-hidden><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
function ArrowLeft({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M15 6l-6 6 6 6M9 12h11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

const BRANCHES = [
  { branch: 'baby' as BranchId, config: babyBranch },
  { branch: 'active' as BranchId, config: activeBranch },
]

export default function SideMenu({
  currentBranch,
  currentSlide,
  onNavigate,
  onHome,
}: SideMenuProps) {
  const menuOpen = usePresentationStore((s) => s.menuOpen)
  const setMenuOpen = usePresentationStore((s) => s.setMenuOpen)
  const [openBranch, setOpenBranch] = useState<BranchId | null>(null)

  // всегда открываем меню на выборе препарата
  useEffect(() => {
    if (!menuOpen) setOpenBranch(null)
  }, [menuOpen])

  const active = BRANCHES.find((b) => b.branch === openBranch)

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-40 bg-[#0A1E2E]/45 backdrop-blur-[2px]"
            aria-label="Закрыть меню"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
          />
          <motion.aside
            className="fixed left-0 top-0 z-50 flex h-full w-[392px] flex-col bg-[#F7FAFB] shadow-[0_20px_60px_rgba(10,30,46,0.35)]"
            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-[#E6EDF1] bg-white px-6 py-5">
              <div className="min-w-0">
                <p className="font-display text-[22px] font-extrabold leading-none text-[#18324A]">Меню</p>
                <p className="mt-1.5 text-[13px] font-medium text-[#6D7A86]">
                  {active ? active.config.label : 'Выберите препарат'}
                </p>
              </div>
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2F5F7] text-[#54636F] transition hover:bg-[#E4EAEE] hover:text-[#18324A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]"
                aria-label="Закрыть"
                onClick={() => setMenuOpen(false)}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <AnimatePresence mode="wait" initial={false}>
                {!active ? (
                  /* ───── Уровень 1: выбор препарата ───── */
                  <motion.div key="pick" initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} transition={{ duration: 0.22 }}>
                    <button
                      type="button"
                      className="group mb-5 flex w-full items-center gap-3.5 rounded-[16px] border border-[#CBEBE8] bg-[linear-gradient(135deg,#EAF8F7,#DDF2EF)] px-4 py-3.5 text-left transition hover:shadow-[0_10px_24px_rgba(33,167,162,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]"
                      onClick={() => { onHome(); setMenuOpen(false) }}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white shadow-[0_8px_18px_rgba(20,143,139,0.32)]"><HomeIcon className="h-6 w-6" /></span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[16px] font-extrabold leading-tight text-[#14324A]">На главную</span>
                        <span className="block text-[13px] font-medium text-[#5B7079]">Стартовый экран</span>
                      </span>
                      <ChevronRight className="h-5 w-5 shrink-0 text-[#0E8F8B] transition group-hover:translate-x-0.5" />
                    </button>

                    <p className="mb-2.5 px-1 text-[13px] font-bold uppercase tracking-[0.06em] text-[#8494A0]">Препараты</p>
                    <div className="space-y-3">
                      {BRANCHES.map(({ branch, config }) => (
                        <button
                          key={branch}
                          type="button"
                          onClick={() => setOpenBranch(branch)}
                          className="group flex w-full items-center gap-4 rounded-[18px] border border-[#E6ECEF] bg-white px-4 py-4 text-left transition-all duration-150 hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(24,50,74,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]"
                          style={{ borderColor: currentBranch === branch ? config.color : undefined }}
                        >
                          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full text-white shadow-[0_8px_18px_rgba(24,50,74,0.18)]" style={{ backgroundColor: config.color }}><DropIcon className="h-7 w-7" /></span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[18px] font-extrabold leading-tight text-[#14324A]">{config.label}</span>
                            <span className="mt-0.5 block text-[13.5px] font-medium text-[#5B7079]">{config.slides.length} разделов</span>
                          </span>
                          <ChevronRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-0.5" style={{ color: config.color }} />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  /* ───── Уровень 2: разделы препарата ───── */
                  <motion.div key={openBranch ?? 'branch'} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 14 }} transition={{ duration: 0.22 }}>
                    <button
                      type="button"
                      onClick={() => setOpenBranch(null)}
                      className="mb-4 flex w-full items-center gap-2.5 rounded-[13px] border border-[#E6ECEF] bg-white px-3.5 py-3 text-left text-[15px] font-bold text-[#18324A] transition hover:bg-[#F1F5F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]"
                    >
                      <ArrowLeft className="h-5 w-5 text-[#0E8F8B]" /> Все препараты
                    </button>

                    <div className="mb-2.5 flex items-center gap-2 px-1">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: active.config.color }}><DropIcon className="h-4 w-4" /></span>
                      <p className="text-[14px] font-extrabold uppercase tracking-[0.05em]" style={{ color: active.config.color }}>{active.config.label}</p>
                    </div>

                    <ul className="space-y-1.5">
                      {active.config.slides.map((slide) => {
                        const isCurrent = currentBranch === active.branch && currentSlide === slide.id
                        return (
                          <li key={slide.id}>
                            <button
                              type="button"
                              className={`group flex w-full items-center gap-3 rounded-[13px] border px-3 py-3 text-left transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B] ${
                                isCurrent
                                  ? 'border-transparent text-white shadow-[0_10px_22px_rgba(24,50,74,0.18)]'
                                  : 'border-[#E6ECEF] bg-white text-[#18324A] hover:-translate-y-px hover:border-[#CBEBE8] hover:shadow-[0_8px_18px_rgba(24,50,74,0.08)]'
                              }`}
                              style={isCurrent ? { backgroundColor: active.config.color } : undefined}
                              onClick={() => { onNavigate(active.branch, slide.id); setMenuOpen(false) }}
                            >
                              <span
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[14px] font-extrabold ${isCurrent ? 'bg-white/25 text-white' : 'bg-[#EEF3F5]'}`}
                                style={isCurrent ? undefined : { color: active.config.color }}
                              >
                                {slide.id}
                              </span>
                              <span className="min-w-0 flex-1 text-[15.5px] font-bold leading-[1.2]">{slide.menuLabel}</span>
                              {isCurrent ? (
                                <span className="shrink-0 rounded-full bg-white/25 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide">Сейчас</span>
                              ) : (
                                <ChevronRight className="h-4 w-4 shrink-0 text-[#B3C0C7] transition group-hover:translate-x-0.5 group-hover:text-[#0E8F8B]" />
                              )}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
