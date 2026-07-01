const NAVY = '#18324A'

function TargetIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14" fill="none" aria-hidden>
      <circle cx="28" cy="28" r="19" stroke="currentColor" strokeWidth="3" />
      <circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="3" />
      <path d="M28 9v7M28 40v7M9 28h7M40 28h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="28" r="2.5" fill="currentColor" />
    </svg>
  )
}

const statusRows = [
  ['ДЕФИЦИТ', '< 20 нг / мл', '#D90000', '#FFFFFF'],
  ['НЕДОСТАТОЧНОСТЬ', '21–29 нг / мл', '#FFC300', '#FFFFFF'],
  ['АДЕКВАТНЫЙ', '30–70 нг / мл', '#8ACB45', '#18324A'],
  ['ВЫСОКИЙ, в пределах норма', '71–90 нг / мл', '#CDEFA7', '#18324A'],
  ['НЕЖЕЛАТЕЛЬНЫЙ', '< 91 нг / мл', '#E5F6CC', '#18324A'],
]

const doseRows: Array<[string, string[]]> = [
  ['10', ['1000', '2200', '3600', '5300', '7400']],
  ['15', ['500', '1700', '3200', '4900', '7000']],
  ['20', ['', '1200', '2600', '4300', '6400']],
  ['25', ['', '600', '2000', '3700', '5800']],
  ['30', ['', '', '1400', '3100', '5200']],
  ['35', ['', '', '800', '2500', '4800']],
  ['40', ['', '', '', '1700', '3800']],
]

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="mb-6 flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#21A7A2,#0E8F8B)] text-[18px] font-bold text-white">
        {n}
      </span>
      <p className="text-[19px] font-semibold leading-[1.25] text-[#18324A]">{children}</p>
    </li>
  )
}

export default function Slide06Dosing() {
  return (
    <section className="relative h-full overflow-hidden px-[45px]" style={{ color: NAVY }}>
      <header className="absolute left-[45px] right-[45px] top-[4px]">
        <h1 className="mt-[76px] max-w-[930px] font-display text-[46px] font-extrabold uppercase leading-[1.15] tracking-[0.5px] text-[#18324A]">
          Как подобрать оптимальную дозу витамина D3?
        </h1>
        <div className="mt-7 h-[3px] w-[930px] bg-[#F8B534]" />
      </header>

      <div className="absolute left-[45px] top-[220px] h-[890px] w-[390px] rounded-[24px] bg-white px-[34px] py-11 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[26px] font-bold leading-[1.35] text-[#18324A]">
          Уровень содержания витамина<br />D3 в крови и оценка статуса
        </h2>

        <div className="mt-[55px] overflow-hidden rounded-lg">
          <table className="w-full border-separate border-spacing-0 text-[18px] font-bold leading-[1.2]">
            <tbody>
              {statusRows.map(([label, value, bg, color]) => (
                <tr key={label} className="h-[66px]" style={{ backgroundColor: bg, color }}>
                  <td className="w-[58%] border-b-2 border-r-2 border-white px-4 align-middle">{label}</td>
                  <td className="border-b-2 border-white px-4 text-center align-middle">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-[78px] text-[21px] font-medium leading-[1.45] text-[#18324A]">
          Рекомендуемые целевые значения<br />25(OH)D при коррекции дефицита<br />витамина D - 30–60 нг/мл<br />(Уровень доказательности A I)
        </p>

        <div className="absolute bottom-11 left-[34px] right-[34px] text-[10.5px] font-semibold uppercase leading-[1.35] text-[#18324A] opacity-90">
          <p>КЛИНИЧЕСКИЕ РЕКОМЕНДАЦИИ ДЕФИЦИТ ВИТАМИНА D У ВЗРОСЛЫХ: ДИАГНОСТИКА, ЛЕЧЕНИЕ И ПРОФИЛАКТИКА. РОССИЙСКАЯ АССОЦИАЦИЯ ЭНДОКРИНОЛОГОВ. 2019</p>
          <p className="mt-2 lowercase">https://rman.ru/documents/poriadok-okazaniya-meditsinskoy-pomoshchi/D%2019042014.pdf</p>
        </div>
      </div>

      <div className="absolute right-[45px] top-[220px] h-[890px] w-[540px] rounded-[24px] bg-white px-9 py-11 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <h2 className="text-[26px] font-bold leading-[1.3] text-[#18324A]">Алгоритм подбора оптимальной дозы:</h2>
        <ol className="mt-7">
          <Step n={1}>Сдать анализ на определение уровня 25(OH)D3</Step>
          <Step n={2}>Определить рекомендованную дозу</Step>
          <Step n={3}>Исследовать кровь повторно через 3–6 месяцев</Step>
        </ol>

        <div className="mt-6 space-y-4 text-[18px] font-semibold leading-[1.45] text-[#18324A]">
          <p>Среднее изменения уровня 25(OH)D3 в зависимости<br />от ежедневного потребления витамина</p>
          <p>Средняя доза витамина D3 (МЕ) для повышения<br />показателей для м/ж с весом в пределах для своей<br />возрастной группы</p>
        </div>

        <div className="mt-6 overflow-hidden rounded-[10px] border border-[#8E8E8E]">
          <table className="w-full border-separate border-spacing-0 text-center text-[16px] font-semibold leading-[1.15]">
            <thead>
              <tr className="h-[52px]">
                <th className="w-[104px] border-b border-r border-[#8E8E8E] bg-white px-2 text-[15px] font-bold text-[#0E8F8B]">Ожидаемый<br />уровень<br />(нг/мл)</th>
                {[
                  ['20', '#E00000'], ['30', '#FF6A00'], ['40', '#FFC400'], ['50', '#9FD23B'], ['60', '#7BC943'],
                ].map(([v, bg]) => <th key={v} className="border-b border-r border-[#8E8E8E] px-2 text-[18px] font-bold text-white last:border-r-0" style={{ backgroundColor: bg }}>{v}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-[#8E8E8E] px-2 align-middle text-[14px] font-bold leading-[1.2] text-[#0E8F8B]" rowSpan={8}>
                  Имеющийся<br />уровень на<br />момент начала<br />терапии<br />(нг/мл)
                </td>
              </tr>
              {doseRows.map(([level, values]) => (
                <tr key={level} className="h-[42px]">
                  <td className="w-[42px] border-b border-r border-[#8E8E8E] px-1 font-bold text-[#18324A]">{level}</td>
                  {(values as string[]).map((value, i) => <td key={i} className="border-b border-r border-[#8E8E8E] px-1 text-[#18324A] last:border-r-0">{value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="absolute left-[45px] right-[45px] top-[1145px] flex h-[90px] items-center gap-6 rounded-[18px] bg-[linear-gradient(135deg,#21A7A2,#009688)] px-[38px] text-white shadow-[0_10px_25px_rgba(33,167,162,0.18)]">
        <TargetIcon />
        <p className="text-[23px] font-bold leading-[1.25] text-white">Рекомендуемые целевые значения 25(OH)D: 30–60 нг/мл • контроль через 3–6 месяцев</p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/38 backdrop-blur-[1px]" />
    </section>
  )
}
