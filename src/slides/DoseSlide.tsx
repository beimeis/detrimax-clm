import type { RouteId } from '../types'
import SlideHeader from '../components/SlideHeader'
import { SourceFooter } from '../components/SlideShell'
import ConclusionBanner from '../components/ConclusionBanner'

interface Props { route: RouteId }

const STEPS = [
  { num: 1, title: 'Анализ', text: 'Определить исходный 25(OH)D в крови.' },
  { num: 2, title: 'Цель', text: 'Ориентир — 30–60 нг/мл по рекомендации врача.' },
  { num: 3, title: 'Доза', text: 'Подобрать суточную дозу по таблице.' },
  { num: 4, title: 'Контроль', text: 'Повторить анализ через 3–6 месяцев.' },
]

const LEVELS = [
  { label: 'Дефицит', range: '< 20', color: '#D32F2F' },
  { label: 'Недостаточность', range: '21–29', color: '#EF6C00' },
  { label: 'Адекватный', range: '30–70', color: '#00A896' },
  { label: 'Высокий', range: '71–90', color: '#FFB300' },
]

const TABLE_ROWS = [
  { initial: '10', to20: '1000', to30: '2200', to40: '3600' },
  { initial: '15', to20: '500', to30: '1700', to40: '3200' },
  { initial: '20', to20: '—', to30: '1200', to40: '2600' },
  { initial: '25', to20: '—', to30: '600', to40: '2000' },
]

export default function DoseSlide({ route }: Props) {
  return (
    <>
      <SlideHeader route={route} slideId="dose" />
      <div className="dose-clm dose-clm--simple">
        <div className="dose-simple-body">
          <aside className="dose-simple-aside">
            <p className="dose-simple-aside-label">Алгоритм</p>
            <ol className="dose-simple-steps">
              {STEPS.map(step => (
                <li key={step.num}>
                  <span className="dose-simple-step-num">{step.num}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="dose-simple-aside-label">Статус 25(OH)D</p>
            <ul className="dose-simple-levels">
              {LEVELS.map(level => (
                <li key={level.label}>
                  <span className="dose-simple-level-dot" style={{ background: level.color }} />
                  <span>{level.label}</span>
                  <small>{level.range} нг/мл</small>
                </li>
              ))}
            </ul>
          </aside>

          <div className="dose-table-panel dose-table-panel--open">
            <p className="dose-table-heading">Таблица дозировок</p>
            <p className="dose-table-caption">Суточная доза D3 (МЕ) для достижения целевого уровня</p>
            <table>
              <thead>
                <tr>
                  <th>Исходный уровень</th>
                  <th>→ 20 нг/мл</th>
                  <th>→ 30 нг/мл</th>
                  <th>→ 40 нг/мл</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(row => (
                  <tr key={row.initial}>
                    <td>{row.initial}</td>
                    <td>{row.to20}</td>
                    <td>{row.to30}</td>
                    <td>{row.to40}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="dose-table-note">МЕ/сут · по клиническим рекомендациям</p>
          </div>
        </div>

        <div className="dose-clm-footer">
          <ConclusionBanner visible>
            Целевой уровень 25(OH)D: 30–60 нг/мл · контроль через 3–6 месяцев
          </ConclusionBanner>
        </div>
      </div>
      <SourceFooter>Клинические рекомендации РАЭ · Минздрав РФ</SourceFooter>
    </>
  )
}
