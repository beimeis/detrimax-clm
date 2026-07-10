import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAVY = '#18324A'
const DECREE_TITLE =
  'О медицинском наблюдении здоровых детей и подростков на уровне оказания первичной медико-санитарной помощи в Кыргызской Республике'

/* ───────── icons ───────── */
function DropIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7c8 10.2 15 18.7 15 27.2C43 42.3 36.3 49 28 49s-15-6.7-15-14.8C13 25.7 20 17.2 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M23 37c2.8 2.6 7.2 2.6 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}
function CloseIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>
}
function InfoIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="2" /><path d="M12 11v5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /><circle cx="12" cy="7.7" r="1.3" fill="currentColor" /></svg>
}
function ArrowLeft({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M15 6l-6 6 6 6M9 12h11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

/* ───────── detail-modal content ───────── */
const DETAILS: Array<{ label: string; text: string }> = [
  { label: 'Дата принятия', text: '23 апреля 2024 г.' },
  { label: 'Кого касается', text: 'Здоровых детей и подростков, наблюдаемых на уровне первичной медико-санитарной помощи.' },
  { label: 'Цель приказа', text: 'Организация и стандартизация медицинского наблюдения здоровых детей и подростков, включая профилактику дефицитных состояний.' },
  { label: 'Основная рекомендация', text: 'Назначение витамина D 400 МЕ ежедневно в течение минимум 12 месяцев для профилактики рахита.' },
]

export default function SlideOrder422() {
  const [isQrPopupOpen, setQrPopupOpen] = useState(false)
  const [isDetailModalOpen, setDetailModalOpen] = useState(false)

  const detailRef = useRef<HTMLDivElement>(null)
  const anyModal = isQrPopupOpen || isDetailModalOpen

  const closeTop = useCallback(() => {
    if (isQrPopupOpen) setQrPopupOpen(false)
    else if (isDetailModalOpen) setDetailModalOpen(false)
  }, [isQrPopupOpen, isDetailModalOpen])

  useEffect(() => {
    if (!anyModal) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.preventDefault(); closeTop() } }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [anyModal, closeTop])

  useEffect(() => { if (isDetailModalOpen) detailRef.current?.focus() }, [isDetailModalOpen])

  return (
    <section className="relative h-full overflow-hidden px-[42px]" style={{ color: NAVY }}>
      <header className="absolute left-[42px] right-[42px] top-0">
        <h1 className="mt-3 font-display text-[40px] font-extrabold leading-[1.08] text-[#D93632]">Приказ №422</h1>
        <p className="mt-2 text-[20px] font-medium leading-[1.28] text-[#66788F]">Министерства здравоохранения Кыргызской Республики от 23 апреля 2024 года</p>
      </header>

      <div className="absolute left-[42px] right-[42px] top-[150px] grid h-[915px] grid-cols-2 gap-4">
        {/* ══════════ LEFT CARD — фото · описание · QR ══════════ */}
        <article className="flex h-full flex-col rounded-[26px] bg-white p-6 shadow-[0_18px_45px_rgba(22,55,92,0.08)] ring-1 ring-[#EAF0F4]/80">
          <div className="h-[372px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#FFF4E8]">
            <img src="/assets/characters/baby-sleep.webp" alt="Младенец на светлом пледе" className="h-full w-full object-cover object-[50%_38%]" draggable={false} />
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-[18px] bg-[linear-gradient(135deg,#FFB23F,#FF9418)] px-6 py-5 shadow-[0_10px_24px_rgba(255,148,24,0.2)]">
            <span className="text-[46px] font-extrabold leading-[0.7] text-white/90">«</span>
            <p className="text-[16.5px] font-extrabold uppercase leading-[1.22] text-[#16324F]">{DECREE_TITLE}</p>
          </div>

          <div className="mt-auto flex items-center gap-5 rounded-[18px] border border-[#EEF1F4] bg-white p-4">
            <button
              type="button"
              onClick={() => setQrPopupOpen(true)}
              className="shrink-0 rounded-[12px] outline-none transition-transform duration-200 hover:scale-[1.06] focus-visible:ring-4 focus-visible:ring-[#0E8F8B]/40"
              aria-label="Открыть QR-код крупнее"
            >
              <img src="/assets/qr/order-422.png" alt="QR-код приказа №422" className="h-[132px] w-[132px] object-contain" draggable={false} />
            </button>
            <p className="text-[15px] font-bold leading-[1.34] text-[#16324F]">Отсканируйте QR-код, чтобы ознакомиться с полным текстом приказа.</p>
          </div>
        </article>

        {/* ══════════ RIGHT CARD — логотип · рекомендация · одна кнопка ══════════ */}
        <article className="flex h-full flex-col items-center rounded-[26px] bg-white px-9 py-9 text-center shadow-[0_18px_45px_rgba(22,55,92,0.08)] ring-1 ring-[#EAF0F4]/80">
          <img src="/brand/ministry-health-kg-emblem.png" alt="Министерство здравоохранения Кыргызской Республики" className="h-[140px] w-[140px] shrink-0 object-contain drop-shadow-[0_12px_28px_rgba(47,95,159,0.16)]" draggable={false} />
          <h2 className="mt-4 text-[23px] font-extrabold uppercase leading-[1.16] text-[#2F5F9F]">Министерство здравоохранения Кыргызской Республики</h2>
          <div className="mt-5 flex w-full items-center justify-center gap-3">
            <div className="h-[1.5px] w-[120px] bg-[#F6B24B]" />
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#F6B24B] bg-[#FFF9EF] text-[#FFA726]"><DropIcon className="h-7 w-7" /></div>
            <div className="h-[1.5px] w-[120px] bg-[#F6B24B]" />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center">
            <p className="text-[16px] font-bold uppercase tracking-[0.09em] text-[#0E8F8B]">Ключевая рекомендация приказа</p>
            <p className="mt-5 max-w-[440px] font-sans text-[30px] font-[850] leading-[1.3] text-[#14366F]">
              Детям рекомендуется назначение витамина D в дозировке <span className="text-[#0E8F8B]">400&nbsp;МЕ ежедневно</span> в течение минимум <span className="text-[#0E8F8B]">12&nbsp;месяцев</span> для профилактики рахита.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setDetailModalOpen(true)}
            className="mt-4 inline-flex min-h-[52px] items-center gap-2.5 rounded-[14px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] px-8 text-[17px] font-bold text-white shadow-[0_12px_26px_rgba(33,167,162,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_16px_32px_rgba(33,167,162,0.42)] active:translate-y-0 active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E8F8B]"
          >
            <InfoIcon /> Подробнее о приказе
          </button>
        </article>
      </div>

      {/* ══════════ QR POPUP ══════════ */}
      <AnimatePresence>
        {isQrPopupOpen && (
          <motion.div className="fixed inset-0 z-[110] flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-[#0A1E2E]/50 backdrop-blur-[3px]" onClick={() => setQrPopupOpen(false)} />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 16 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.94, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="relative w-full max-w-[420px] rounded-[20px] bg-white p-7 text-center shadow-[0_30px_80px_rgba(10,30,46,0.4)]">
              <button type="button" onClick={() => setQrPopupOpen(false)} aria-label="Закрыть" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F5F7] text-[#6D7A86] transition hover:bg-[#EAF8F7] hover:text-[#0E8F8B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]"><CloseIcon /></button>
              <img src="/assets/qr/order-422.png" alt="QR-код приказа №422" className="mx-auto h-[200px] w-[200px] object-contain" draggable={false} />
              <p className="mt-4 text-[16px] font-semibold leading-[1.4] text-[#16324F]">Отсканируйте QR-код для перехода к полному тексту приказа.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════ SINGLE DETAIL MODAL ══════════ */}
      <AnimatePresence>
        {isDetailModalOpen && (
          <motion.div className="fixed inset-0 z-[120] flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} role="dialog" aria-modal="true" aria-label="Подробно о приказе №422">
            <div className="absolute inset-0 bg-[#0A1E2E]/55 backdrop-blur-[3px]" onClick={() => setDetailModalOpen(false)} />
            <motion.div ref={detailRef} tabIndex={-1} initial={{ scale: 0.92, opacity: 0, y: 18 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.94, opacity: 0, y: 10 }} transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }} className="relative flex max-h-[92%] w-full max-w-[820px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_30px_80px_rgba(10,30,46,0.4)] outline-none">
              <div className="flex items-center border-b border-[#EEF1F4] px-8 py-5">
                <h3 className="text-[26px] font-extrabold text-[#D93632]">Приказ №422</h3>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-8 py-7">
                <div className="space-y-5">
                  {DETAILS.map((d) => (
                    <div key={d.label}>
                      <p className="text-[14px] font-bold uppercase tracking-wide text-[#0E8F8B]">{d.label}</p>
                      <p className="mt-1 text-[19px] font-semibold leading-[1.4] text-[#16324F]">{d.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-5 rounded-[18px] border border-[#CBEBE8] bg-[linear-gradient(135deg,#F1FBFA,#E3F5F1)] p-5">
                  <img src="/assets/qr/order-422.png" alt="QR-код приказа №422" className="h-[124px] w-[124px] shrink-0 object-contain" draggable={false} />
                  <div>
                    <p className="text-[14px] font-bold uppercase tracking-wide text-[#0E8F8B]">Полный текст документа</p>
                    <p className="mt-1 text-[17px] font-semibold leading-[1.4] text-[#16324F]">Отсканируйте QR-код, чтобы открыть официальный текст приказа.</p>
                  </div>
                </div>

                <button type="button" onClick={() => setDetailModalOpen(false)} className="mt-7 inline-flex min-h-[58px] items-center gap-2.5 rounded-[15px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] px-12 text-[20px] font-bold text-white shadow-[0_12px_26px_rgba(33,167,162,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(33,167,162,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E8F8B]"><ArrowLeft className="h-5 w-5" /> Назад</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
