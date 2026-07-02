const NAVY = '#18324A'

function DropIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7c8 10.2 15 18.7 15 27.2C43 42.3 36.3 49 28 49s-15-6.7-15-14.8C13 25.7 20 17.2 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M23 37c2.8 2.6 7.2 2.6 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function OfficialEmblem() {
  return (
    <img
      src="/brand/ministry-health-kg.png"
      alt="Министерство здравоохранения Кыргызской Республики"
      className="h-[150px] w-[150px] object-contain drop-shadow-[0_12px_28px_rgba(47,95,159,0.16)]"
      draggable={false}
    />
  )
}

function Divider() {
  return (
    <div className="mt-8 flex w-full items-center justify-center gap-3">
      <div className="h-[1.5px] w-[135px] bg-[#F6B24B]" />
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#F6B24B] bg-[#FFF9EF] text-[#FFA726]"><DropIcon /></div>
      <div className="h-[1.5px] w-[135px] bg-[#F6B24B]" />
    </div>
  )
}

export default function Slide01Order422() {
  return (
    <section className="relative h-full overflow-hidden px-[42px]" style={{ color: NAVY }}>
      <header className="absolute left-[42px] right-[42px] top-[0px] flex items-start justify-between">
        <div>
          <h1 className="mt-3 font-display text-[40px] font-extrabold leading-[1.08] tracking-normal text-[#D93632]">Приказ №422</h1>
          <p className="mt-2 text-[18px] font-medium leading-[1.3] text-[#66788F]">Министерства здравоохранения<br />Кыргызской Республики от 23 апреля 2024 г.</p>
        </div>
      </header>

      <div className="absolute left-[42px] right-[42px] top-[150px] grid h-[915px] grid-cols-2 gap-7">
        <article className="overflow-hidden rounded-[26px] bg-white p-5 shadow-[0_18px_45px_rgba(22,55,92,0.08)] ring-1 ring-[#EAF0F4]/80">
          <div className="h-full overflow-hidden rounded-[20px] bg-white">
            <div className="h-[330px] w-full overflow-hidden rounded-t-[20px] bg-[#FFF4E8]">
              <img src="/assets/characters/baby-sleep.png" alt="Младенец на светлом пледе" className="h-full w-full object-cover object-[50%_42%]" draggable={false} />
            </div>

            <div className="relative h-[174px] rounded-tr-[96px] bg-[linear-gradient(135deg,#FFB23F,#FF9418)] px-7 py-[26px]">
              <div className="h-1 w-12 rounded-full bg-[#E98500]" />
              <h2 className="mt-4 text-[28px] font-extrabold leading-none text-[#16324F]">ПРИКАЗ №422</h2>
              <p className="mt-3 text-[14.5px] font-extrabold uppercase leading-[1.25] text-white">МИНИСТЕРСТВА ЗДРАВООХРАНЕНИЯ<br />КЫРГЫЗСКОЙ РЕСПУБЛИКИ<br />ОТ 23 АПРЕЛЯ 2024 Г.</p>
            </div>

            <div className="flex h-[230px] items-start gap-5 bg-[linear-gradient(135deg,#FFB23F,#FFA726)] px-7 py-[27px]">
              <div className="text-[78px] font-extrabold leading-[0.78] text-white">«</div>
              <p className="text-[18.5px] font-extrabold uppercase leading-[1.14] text-[#16324F]">О МЕДИЦИНСКОМ<br />НАБЛЮДЕНИИ ЗДОРОВЫХ<br />ДЕТЕЙ И ПОДРОСТКОВ<br />НА УРОВНЕ ОКАЗАНИЯ<br />ПЕРВИЧНОЙ МЕДИКО-<br />САНИТАРНОЙ ПОМОЩИ<br />В КР</p>
            </div>

            <div className="flex h-[141px] items-center gap-5 bg-white px-7 py-4">
              <img src="/assets/qr/order-422.png" alt="QR-код приказа №422" className="h-[108px] w-[108px] shrink-0 object-contain" draggable={false} />
              <p className="text-[12.5px] font-bold leading-[1.35] text-[#16324F]">Пожалуйста, наведите камеру на QR-код,<br />чтобы ознакомиться с приказом.</p>
            </div>
          </div>
        </article>

        <article className="flex h-full flex-col items-center rounded-[26px] bg-white px-10 py-[44px] text-center shadow-[0_18px_45px_rgba(22,55,92,0.08)] ring-1 ring-[#EAF0F4]/80">
          <OfficialEmblem />
          <h2 className="mt-[22px] text-[30px] font-extrabold uppercase leading-[1.14] text-[#2F5F9F]">МИНИСТЕРСТВО<br />ЗДРАВООХРАНЕНИЯ<br />КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h2>
          <Divider />
          <p className="mt-7 text-[21px] font-medium leading-[1.35] text-[#16324F]">Приказ №422<br />от 23 апреля 2024г</p>
          <p className="mx-auto mt-[34px] max-w-[420px] text-center font-sans text-[34px] font-[850] leading-[1.28] tracking-normal text-[#14366F]">Назначение Витамина Д<br />400 МЕ перорально<br />ежедневно в течение<br />как минимум 12 месяцев<br />для профилактики рахита</p>
        </article>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/48" />
    </section>
  )
}
