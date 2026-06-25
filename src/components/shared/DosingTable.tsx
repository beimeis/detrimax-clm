import { DOSING_BANNER, DOSING_LEVELS, DOSING_ROWS, DOSING_SOURCE, DOSING_STEPS } from '../../data/baby'
import SourceBadge from './SourceBadge'

interface DosingTableProps {
  branchColor: string
}

export default function DosingTable({ branchColor }: DosingTableProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-hidden px-8 pb-4 pt-2">
      <header>
        <h1 className="slide-title">Подбор дозы</h1>
        <p className="slide-category mt-1">Алгоритм назначения витамина D3</p>
      </header>

      <div className="flex min-h-0 flex-1 gap-5">
        <aside className="card-panel flex w-[32%] flex-col gap-5 overflow-y-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Алгоритм</p>
            <ol className="mt-3 space-y-3">
              {DOSING_STEPS.map((step) => (
                <li key={step.num} className="flex gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: branchColor }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-heading">{step.title}</p>
                    <p className="text-xs leading-snug text-brand-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Статус 25(OH)D</p>
            <ul className="mt-3 space-y-2">
              {DOSING_LEVELS.map((level) => (
                <li key={level.label} className="flex items-center gap-2 text-sm">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: level.color }}
                  />
                  <span className="font-medium text-brand-heading">{level.label}</span>
                  <span className="text-brand-muted">{level.range} нг/мл</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="card-panel flex w-[68%] flex-col">
          <p className="text-sm font-semibold text-brand-heading">Таблица дозировок</p>
          <p className="text-xs text-brand-muted">Суточная доза D3 (МЕ) для достижения целевого уровня</p>
          <div className="mt-4 overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-brand-muted">
                  <th className="pb-2 pr-4 font-medium">Исходный уровень</th>
                  <th className="pb-2 pr-4 font-medium">→ 20 нг/мл</th>
                  <th className="pb-2 pr-4 font-medium">→ 30 нг/мл</th>
                  <th className="pb-2 font-medium">→ 40 нг/мл</th>
                </tr>
              </thead>
              <tbody>
                {DOSING_ROWS.map((row) => (
                  <tr key={row.initial} className="border-b border-gray-100">
                    <td className="py-2.5 pr-4 font-semibold">{row.initial} нг/мл</td>
                    <td className="py-2.5 pr-4">{row.to20}</td>
                    <td className="py-2.5 pr-4">{row.to30}</td>
                    <td className="py-2.5">{row.to40}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="rounded-xl px-5 py-3 text-center text-sm font-semibold text-white"
        style={{ backgroundColor: branchColor }}
      >
        {DOSING_BANNER}
      </div>

      <SourceBadge source={DOSING_SOURCE} />
    </div>
  )
}
