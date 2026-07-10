import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAVY = '#18324A'

/* ───────────────────────── icons ───────────────────────── */
function TargetIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden>
      <circle cx="28" cy="28" r="19" stroke="currentColor" strokeWidth="3" />
      <circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="3" />
      <path d="M28 9v7M28 40v7M9 28h7M40 28h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="28" r="2.5" fill="currentColor" />
    </svg>
  )
}
function InfoIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="2" /><path d="M12 11v5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /><circle cx="12" cy="7.7" r="1.3" fill="currentColor" /></svg>
}
function ZoomIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2.2" /><path d="M15.5 15.5 21 21M10.5 7.5v6M7.5 10.5h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
}
function CloseIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>
}
function ArrowLeft({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden><path d="M15 6l-6 6 6 6M9 12h11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

/* ───────────────────────── data ───────────────────────── */
type Category = {
  key: string; label: string; short: string; range: string
  bg: string; color: string; explain: string; reco: string; recheck: string
}
const CATEGORIES: Category[] = [
  { key: 'deficit', label: 'Дефицит витамина D', short: 'ДЕФИЦИТ', range: '< 20 нг/мл', bg: '#D90000', color: '#FFFFFF',
    explain: 'Уровень 25(OH)D ниже 20 нг/мл соответствует дефициту витамина D. Для определения подходящей схемы коррекции необходимо учитывать текущую дозу, возраст и рекомендации специалиста.',
    reco: 'Требуется коррекция дозы витамина D под контролем специалиста.',
    recheck: 'Повторно проверьте уровень витамина D через 3–6 месяцев после изменения дозировки.' },
  { key: 'insufficient', label: 'Недостаточность', short: 'НЕДОСТАТОЧНОСТЬ', range: '21–29 нг/мл', bg: '#FFC300', color: '#FFFFFF',
    explain: 'Уровень 21–29 нг/мл говорит о недостаточности витамина D — запас ниже оптимального.',
    reco: 'Как правило, рекомендуется коррекция дозы для достижения целевых значений 30–60 нг/мл.',
    recheck: 'Контроль уровня витамина D — через 3–6 месяцев.' },
  { key: 'adequate', label: 'Адекватный уровень', short: 'АДЕКВАТНЫЙ', range: '30–70 нг/мл', bg: '#8ACB45', color: '#18324A',
    explain: 'Показатель от 30 до 70 нг/мл находится в рекомендуемом диапазоне.',
    reco: 'Обычно требуется поддерживающая дозировка и периодический контроль уровня витамина D.',
    recheck: 'Периодический контроль уровня витамина D.' },
  { key: 'high', label: 'Высокий уровень, в пределах нормы', short: 'ВЫСОКИЙ, В ПРЕДЕЛАХ НОРМЫ', range: '71–90 нг/мл', bg: '#CDEFA7', color: '#18324A',
    explain: 'Уровень 71–90 нг/мл — высокий, но остаётся в пределах нормы.',
    reco: 'Специальная коррекция обычно не требуется; достаточно поддерживающей дозы.',
    recheck: 'Периодический контроль уровня в динамике.' },
  { key: 'undesirable', label: 'Нежелательный уровень', short: 'НЕЖЕЛАТЕЛЬНЫЙ', range: '> 90 нг/мл', bg: '#E5F6CC', color: '#18324A',
    explain: 'Уровень выше 90 нг/мл считается нежелательным.',
    reco: 'Рекомендуется пересмотреть дозировку витамина D совместно со специалистом.',
    recheck: 'Контроль уровня витамина D в динамике.' },
]
function categoryForLevel(v: number): Category {
  if (v < 20) return CATEGORIES[0]
  if (v < 30) return CATEGORIES[1]
  if (v <= 70) return CATEGORIES[2]
  if (v <= 90) return CATEGORIES[3]
  return CATEGORIES[4]
}

const STEPS: Array<{ title: string; detail: string }> = [
  { title: 'Сдать анализ на определение уровня 25(OH)D3', detail: 'Определяется исходный уровень витамина D в крови. Результат анализа используется для выбора подходящего диапазона дозировки.' },
  { title: 'Определить рекомендованную дозу', detail: 'Рекомендованная доза определяется по исходному уровню витамина D и текущему количеству витамина D, которое принимает пользователь.' },
  { title: 'Исследовать кровь повторно через 3–6 месяцев', detail: 'Повторный анализ позволяет проверить эффективность выбранной дозировки и при необходимости скорректировать её.' },
]

const COL_LEVELS = [20, 30, 40, 50, 60]
const COL_COLORS = ['#E00000', '#FF6A00', '#FFC400', '#9FD23B', '#7BC943']
const COL_TEXT = ['#fff', '#fff', '#5a3d00', '#25420a', '#25420a']
const doseRows: Array<[string, string[]]> = [
  ['10', ['1000', '2200', '3600', '5300', '7400']],
  ['15', ['500', '1700', '3200', '4900', '7000']],
  ['20', ['', '1200', '2600', '4300', '6400']],
  ['25', ['', '600', '2000', '3700', '5800']],
  ['30', ['', '', '1400', '3100', '5200']],
  ['35', ['', '', '800', '2500', '4800']],
  ['40', ['', '', '', '1700', '3800']],
]
function nearestColIdx(v: number): number {
  let best = 0, bd = Infinity
  COL_LEVELS.forEach((c, i) => { const d = Math.abs(c - v); if (d < bd) { bd = d; best = i } })
  return best
}

/* animated collapse helper */
function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ───────────────────────── component ───────────────────────── */
export default function SlideDosing() {
  const [selectedVitaminLevel, setSelectedVitaminLevel] = useState(27)
  const [levelChosen, setLevelChosen] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isTableModalOpen, setIsTableModalOpen] = useState(false)
  const [selectedColumn, setSelectedColumn] = useState<number | null>(null)
  const [selectedRowIdx, setSelectedRowIdx] = useState<number | null>(null)
  const [selectedRecommendedDose, setSelectedRecommendedDose] = useState<string | null>(null)
  const [isResultSaved, setIsResultSaved] = useState(false)

  const sliderCat = categoryForLevel(selectedVitaminLevel)

  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = useCallback(() => setIsTableModalOpen(false), [])

  const openTableModal = useCallback((preselectColumnFromLevel: boolean) => {
    if (preselectColumnFromLevel) setSelectedColumn(nearestColIdx(selectedVitaminLevel))
    setIsTableModalOpen(true)
  }, [selectedVitaminLevel])

  // recompute recommended dose whenever row/column change
  useEffect(() => {
    if (selectedColumn !== null && selectedRowIdx !== null) {
      const v = doseRows[selectedRowIdx][1][selectedColumn]
      setSelectedRecommendedDose(v || null)
    } else {
      setSelectedRecommendedDose(null)
    }
  }, [selectedColumn, selectedRowIdx])

  // modal: scroll lock + Escape + focus trap
  useEffect(() => {
    if (!isTableModalOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const el = modalRef.current
    el?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); closeModal(); return }
      if (e.key === 'Tab' && el) {
        const f = Array.from(el.querySelectorAll<HTMLElement>('button,[href],input,[tabindex]:not([tabindex="-1"])')).filter((n) => !n.hasAttribute('disabled'))
        if (!f.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [isTableModalOpen, closeModal])

  const saveChoice = () => { setIsResultSaved(true); closeModal() }
  const changeChoice = () => { setSelectedRowIdx(selectedRowIdx); setIsTableModalOpen(true) }

  const sliderPct = selectedVitaminLevel // 0..100 → percentage directly
  const sliderTrack = `linear-gradient(to right, ${sliderCat.bg} 0%, ${sliderCat.bg} ${sliderPct}%, #E5EAEE ${sliderPct}%, #E5EAEE 100%)`

  return (
    <section className="relative h-full overflow-hidden px-[45px] pb-[112px]" style={{ color: NAVY }}>
      <header className="absolute left-[45px] right-[45px] top-[4px]">
        <h1 className="mt-4 max-w-[930px] font-display text-[41px] font-extrabold uppercase leading-[1.1] tracking-[0.3px] text-[#18324A]">
          Как подобрать оптимальную дозу витамина D3?
        </h1>
        <div className="mt-4 h-[3px] w-[930px] rounded-full bg-[#F8B534]" />
      </header>

      {/* ══════════ LEFT CARD (≈40%) ══════════ */}
      <div className="absolute left-[45px] top-[186px] flex h-[936px] w-[388px] flex-col rounded-[24px] border border-[#EEF1F4] bg-white px-6 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[21px] font-bold leading-[1.2] text-[#18324A]">Уровень содержания витамина D3 в крови и оценка статуса</h2>

        {/* static colour scale — highlights the category matching the slider */}
        <div className="mt-4 flex flex-col gap-[7px]">
          {CATEGORIES.map((c) => {
            const isSliderCat = levelChosen && sliderCat.key === c.key
            return (
              <div
                key={c.key}
                style={{ backgroundColor: c.bg, color: c.color }}
                className={`flex min-h-[50px] items-center gap-2 rounded-[11px] px-4 transition-all duration-300 ${isSliderCat ? 'scale-[1.02] shadow-[0_10px_24px_rgba(0,0,0,0.2)] ring-[3px] ring-[#0E8F8B] ring-offset-1' : ''}`}
              >
                <span className="flex-1 text-[15px] font-extrabold leading-[1.1]">{c.short}</span>
                <span className="text-[15px] font-extrabold">{c.range}</span>
              </div>
            )
          })}
        </div>

        {/* slider — lowered for more breathing room */}
        <div className="mt-6 rounded-[16px] bg-[#F3F7F9] p-4">
          <p className="text-[16px] font-bold text-[#18324A]">Укажите ваш уровень 25(OH)D</p>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-[14px] font-semibold text-[#6D7A86]">Ваш уровень:</span>
            <span className="text-[22px] font-extrabold" style={{ color: sliderCat.bg === '#E5F6CC' || sliderCat.bg === '#CDEFA7' ? '#18324A' : sliderCat.bg }}>{selectedVitaminLevel} нг/мл</span>
          </div>
          <input
            type="range" min={0} max={100} value={selectedVitaminLevel}
            onChange={(e) => { setSelectedVitaminLevel(Number(e.target.value)); setLevelChosen(true) }}
            className="d3-range mt-2.5" style={{ background: sliderTrack }}
            aria-label="Уровень 25(OH)D, нг/мл"
          />
          <div className="mt-1.5 flex justify-between text-[12px] font-semibold text-[#9AA6AE]"><span>0</span><span>50</span><span>100</span></div>

          {/* enlarged description of the selected level */}
          <div className="mt-4 rounded-[14px] border border-[#E1E9ED] bg-white p-4">
            <div className="flex items-center gap-3">
              <span className="h-[18px] w-[18px] shrink-0 rounded-full" style={{ backgroundColor: sliderCat.bg }} />
              <span className="text-[21px] font-extrabold leading-[1.12] text-[#18324A]">{sliderCat.label}</span>
            </div>
            <p className="mt-3 text-[16px] font-semibold leading-[1.48] text-[#3B4854]">{sliderCat.explain}</p>
          </div>
        </div>

      </div>

      {/* ══════════ RIGHT CARD (≈60%) ══════════ */}
      <div className="absolute right-[45px] top-[186px] flex h-[936px] w-[534px] flex-col rounded-[24px] border border-[#EEF1F4] bg-white px-7 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[28px] font-extrabold leading-[1.16] text-[#18324A]">Алгоритм подбора оптимальной дозы</h2>

        {/* interactive steps — larger & well-separated */}
        <div className="mt-6 flex flex-col gap-4">
          {STEPS.map((s, i) => {
            const open = activeStep === i
            const dimmed = activeStep !== null && !open
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setActiveStep(open ? null : i)}
                  aria-expanded={open}
                  className={`group flex w-full items-center gap-4 rounded-[15px] px-4 py-3 text-left transition-all duration-200 ease-out outline-none min-h-[60px]
                    ${open ? 'bg-[#EAF8F7]' : 'hover:translate-x-1 hover:bg-[#EAF8F7]'}
                    ${dimmed ? 'opacity-55' : 'opacity-100'}
                    focus-visible:ring-2 focus-visible:ring-[#0E8F8B]`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-[22px] font-extrabold text-white">{i + 1}</span>
                  <span className="flex-1 text-[21px] font-extrabold leading-[1.24] text-[#14324F]">{s.title}</span>
                  <span className={`shrink-0 transition-opacity duration-200 ${open ? 'text-[#0E8F8B] opacity-100' : 'text-[#9AA6AE] opacity-0 group-hover:opacity-100'}`}><InfoIcon className="h-5 w-5" /></span>
                </button>
                <Collapse open={open}>
                  <p className="ml-[64px] mr-2 mt-2 rounded-[11px] bg-[#F7FBFC] px-4 py-3 text-[17px] font-semibold leading-[1.45] text-[#1B3A56]">{s.detail}</p>
                </Collapse>
              </div>
            )
          })}
        </div>

        <div className="mt-7 space-y-4 text-[20px] font-semibold leading-[1.42] text-[#18324A]">
          <p>Среднее изменение уровня 25(OH)D3 в зависимости от ежедневного потребления витамина</p>
          <p>Средняя доза витамина D3 для повышения показателей на необходимое количество нг/мл с учётом возрастной группы</p>
        </div>

        {/* saved result + open-table button pinned to the bottom */}
        <div className="mt-auto">
          <AnimatePresence>
            {isResultSaved && selectedRecommendedDose && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} exit={{ opacity: 0, y: 6, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mb-4 overflow-hidden"
              >
                <div className="flex items-center gap-3 rounded-[14px] border border-[#CBEBE8] bg-[linear-gradient(135deg,#F1FBFA,#E3F5F1)] px-4 py-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-white"><TargetIcon className="h-6 w-6" /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12.5px] font-bold uppercase tracking-wide text-[#0E8F8B]">Выбранная рекомендуемая дозировка</p>
                    <p className="text-[19px] font-extrabold leading-tight text-[#18324A]">{selectedRecommendedDose} МЕ/сутки</p>
                  </div>
                  <button type="button" onClick={changeChoice} className="shrink-0 rounded-[10px] border border-[#0E8F8B] bg-white px-3 py-2 text-[13px] font-bold text-[#0E8F8B] transition hover:bg-[#EAF8F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]">Изменить выбор</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => openTableModal(levelChosen)}
            className="flex min-h-[62px] w-full items-center justify-center gap-3 rounded-[16px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-[20px] font-bold text-white shadow-[0_14px_30px_rgba(33,167,162,0.34)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_18px_38px_rgba(33,167,162,0.46)] active:translate-y-0 active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E8F8B]"
          >
            <ZoomIcon className="h-6 w-6" /> Открыть таблицу дозировок
          </button>
        </div>
      </div>

      {/* ══════════ FULLSCREEN TABLE MODAL ══════════ */}
      <AnimatePresence>
        {isTableModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            role="dialog" aria-modal="true" aria-label="Подбор рекомендуемой дозы витамина D3"
          >
            <div className="absolute inset-0 bg-[#0A1E2E]/55 backdrop-blur-[3px]" onClick={closeModal} />
            <motion.div
              ref={modalRef} tabIndex={-1}
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.93, opacity: 0, y: 10 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[92%] w-full max-w-[900px] flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_30px_80px_rgba(10,30,46,0.4)] outline-none"
            >
              {/* modal header */}
              <div className="flex items-center justify-between gap-4 border-b border-[#EEF1F4] px-6 py-4">
                <button type="button" onClick={closeModal} className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF8F7] py-2 pl-3 pr-4 text-[14px] font-bold text-[#0E8F8B] transition hover:bg-[#d8f1ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]"><ArrowLeft /> Назад</button>
                <h3 className="flex-1 text-center text-[20px] font-extrabold text-[#18324A]">Подбор рекомендуемой дозы витамина D3</h3>
                <button type="button" onClick={closeModal} aria-label="Закрыть" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F5F7] text-[#6D7A86] transition hover:bg-[#E4EAEE] hover:text-[#18324A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0E8F8B]"><CloseIcon /></button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
                {/* step 1 */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#21A7A2] text-[14px] font-bold text-white">1</span>
                  <p className="text-[17px] font-bold text-[#18324A]">Выберите исходный уровень витамина D</p>
                  {selectedColumn !== null && <span className="rounded-full bg-[#EAF8F7] px-3 py-1 text-[13px] font-bold text-[#0E8F8B]">Выбрано: {COL_LEVELS[selectedColumn]} нг/мл</span>}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {COL_LEVELS.map((v, i) => (
                    <button key={v} type="button" onClick={() => setSelectedColumn(i)}
                      className={`min-h-[44px] min-w-[68px] rounded-[12px] px-4 text-[17px] font-extrabold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E8F8B] ${selectedColumn === i ? 'scale-105 ring-[3px] ring-[#0E8F8B] ring-offset-2' : selectedColumn === null ? 'hover:scale-105' : 'opacity-45 hover:opacity-90'}`}
                      style={{ backgroundColor: COL_COLORS[i], color: COL_TEXT[i] }}>{v}</button>
                  ))}
                </div>

                {/* step 2 */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-[14px] font-bold text-white ${selectedColumn !== null ? 'bg-[#21A7A2]' : 'bg-[#B7C2C9]'}`}>2</span>
                  <p className={`text-[17px] font-bold ${selectedColumn !== null ? 'text-[#18324A]' : 'text-[#9AA6AE]'}`}>Выберите текущую дозировку витамина D</p>
                  {selectedRowIdx !== null && <span className="rounded-full bg-[#EAF8F7] px-3 py-1 text-[13px] font-bold text-[#0E8F8B]">Выбрано: {doseRows[selectedRowIdx][0]} нг/мл</span>}
                </div>

                {/* big interactive table */}
                <div className="mt-3 overflow-x-auto rounded-[14px] border border-[#C9D2D7]">
                  <table className="w-full min-w-[560px] border-separate border-spacing-0 text-center text-[15px] font-semibold">
                    <thead>
                      <tr className="h-[54px]">
                        <th className="sticky left-0 z-10 w-[130px] border-b border-r border-[#C9D2D7] bg-[#F7FBFC] px-2 text-[12px] font-bold leading-[1.1] text-[#0E8F8B]">Ожидаемый уровень (нг/мл)</th>
                        {COL_LEVELS.map((v, i) => (
                          <th key={v} className="border-b border-r border-[#C9D2D7] p-0 last:border-r-0">
                            <button type="button" onClick={() => setSelectedColumn(i)}
                              className={`flex h-[54px] w-full items-center justify-center text-[18px] font-extrabold transition-all duration-200 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#0E8F8B] ${selectedColumn === i ? 'ring-[3px] ring-inset ring-[#0E8F8B]' : selectedColumn !== null ? 'opacity-45 hover:opacity-90' : 'hover:brightness-105'}`}
                              style={{ backgroundColor: COL_COLORS[i], color: COL_TEXT[i] }}>{v}</button>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {doseRows.map(([level, values], r) => {
                        const rowActive = selectedRowIdx === r
                        return (
                          <tr key={level} className={`h-[46px] transition-colors ${rowActive ? 'bg-[#EAF8F7]' : ''}`}>
                            <th scope="row" className="sticky left-0 z-10 border-b border-r border-[#C9D2D7] bg-inherit p-0">
                              <button type="button" disabled={selectedColumn === null} onClick={() => setSelectedRowIdx(r)}
                                className={`flex h-[46px] w-full items-center justify-center text-[16px] font-bold transition-all duration-200 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#0E8F8B] ${selectedColumn === null ? 'cursor-not-allowed text-[#B7C2C9]' : rowActive ? 'bg-[#D8F1EF] text-[#0E8F8B]' : 'text-[#18324A] hover:bg-[#EAF8F7]'}`}>{level}</button>
                            </th>
                            {values.map((value, i) => {
                              const isCross = rowActive && selectedColumn === i
                              const colActive = selectedColumn === i
                              return (
                                <td key={i} className={`relative border-b border-r border-[#C9D2D7] px-1 align-middle transition-all duration-300 last:border-r-0 ${colActive ? 'bg-[#F1FBFA]' : selectedColumn !== null ? 'opacity-45' : ''}`}>
                                  <motion.span
                                    animate={isCross ? { scale: 1.18 } : { scale: 1 }} transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                                    className={`inline-flex min-h-[34px] min-w-[46px] items-center justify-center rounded-[8px] px-1 font-bold ${isCross ? 'bg-white text-[#0E8F8B] shadow-[0_0_0_3px_#21A7A2,0_8px_18px_rgba(33,167,162,0.35)]' : 'text-[#18324A]'}`}
                                  >{value || '—'}</motion.span>
                                </td>
                              )
                            })}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* result */}
                <AnimatePresence initial={false}>
                  {selectedColumn !== null && selectedRowIdx !== null && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }} className="overflow-hidden">
                      <div className="mt-4 rounded-[16px] border border-[#CBEBE8] bg-[linear-gradient(135deg,#F1FBFA,#E3F5F1)] p-5">
                        {selectedRecommendedDose ? (
                          <>
                            <p className="text-[15px] font-bold uppercase tracking-wide text-[#0E8F8B]">Рекомендуемая дозировка</p>
                            <p className="text-[30px] font-extrabold leading-tight text-[#18324A]">{selectedRecommendedDose} МЕ <span className="text-[18px] font-bold text-[#42505B]">в сутки</span></p>
                            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-[14px] font-medium text-[#42505B]">
                              <p>Исходный уровень: <strong className="font-bold text-[#18324A]">{COL_LEVELS[selectedColumn]} нг/мл</strong></p>
                              <p>Текущая дозировка: <strong className="font-bold text-[#18324A]">{doseRows[selectedRowIdx][0]} нг/мл</strong></p>
                            </div>
                            <p className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-[#6D7A86]"><InfoIcon className="h-4 w-4 text-[#21A7A2]" /> Повторный анализ уровня 25(OH)D — через 3–6 месяцев.</p>
                            <button type="button" onClick={saveChoice} className="mt-4 min-h-[46px] rounded-[13px] bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] px-6 text-[16px] font-bold text-white shadow-[0_10px_22px_rgba(33,167,162,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(33,167,162,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E8F8B]">Сохранить выбор</button>
                          </>
                        ) : (
                          <p className="text-[15px] font-semibold text-[#42505B]">Для выбранной комбинации значений в таблице нет рекомендованной дозы. Выберите другой исходный уровень или дозировку.</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
