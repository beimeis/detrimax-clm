const NAVY = '#18324A'

function DropIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return <svg viewBox="0 0 56 56" className={className} fill="none" aria-hidden><path d="M28 7c8 10.2 15 18.7 15 27.2C43 42.3 36.3 49 28 49s-15-6.7-15-14.8C13 25.7 20 17.2 28 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M23 37c2.8 2.6 7.2 2.6 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
}

function OfficialEmblem() {
  return (
    <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full border-[8px] border-[#D7E8F7] bg-[radial-gradient(circle,#FFFFFF_0%,#EEF7FF_62%,#D7E8F7_100%)] shadow-[0_12px_28px_rgba(47,95,159,0.16)]">
      <div className="absolute inset-[13px] rounded-full border border-[#7EA8D0]" />
      <div className="absolute inset-[25px] rounded-full border border-[#A8C6E0]" />
      <div className="text-center text-[#2F5F9F]">
        <svg viewBox="0 0 72 72" className="mx-auto h-[64px] w-[64px]" fill="none" aria-hidden>
          <path d="M18 49h36M22 42h28M26 25c0-7 4.4-12 10-12s10 5 10 12v17H26V25Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 18v24M29 30h14" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 54h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <p className="mt-1 text-[9px] font-extrabold leading-[1.05] tracking-[0.08em]">MINISTRY<br />OF HEALTH</p>
      </div>
    </div>
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
    <section className="relative h-full overflow-hidden px-[45px]" style={{ color: NAVY }}>
      <header className="absolute left-[45px] top-[4px]">
        <h1 className="font-display text-[46px] font-extrabold leading-[1.1] tracking-normal text-[#D93632]">Приказ №422</h1>
        <p className="mt-3 text-[21px] font-medium leading-[1.35] text-[#6D7A86]">Министерства здравоохранения<br />Кыргызской Республики от 23 апреля 2024 г.</p>
      </header>

      <div className="absolute left-[45px] top-[176px] h-[900px] w-[455px] overflow-hidden rounded-[24px] bg-white p-[22px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <div className="overflow-hidden rounded-[14px] bg-white shadow-[inset_0_0_0_1px_rgba(228,232,235,0.8)]">
          <div className="h-[330px] w-full overflow-hidden rounded-t-[14px] bg-[#FFF4E8]">
            <img src="/assets/characters/baby-sleep.png" alt="Младенец на светлом пледе" className="h-full w-full object-cover object-[50%_42%]" draggable={false} />
          </div>

          <div className="relative h-[175px] rounded-tr-[90px] bg-[linear-gradient(135deg,#FFA726,#FF8F00)] px-7 py-[28px]">
            <div className="h-1 w-12 rounded bg-[#F28C00]" />
            <h2 className="mt-4 text-[28px] font-extrabold leading-none text-[#18324A]">ПРИКАЗ №422</h2>
            <p className="mt-3 text-[15px] font-extrabold uppercase leading-[1.25] text-white">МИНИСТЕРСТВА ЗДРАВООХРАНЕНИЯ<br />КЫРГЫЗСКОЙ РЕСПУБЛИКИ<br />ОТ 23 АПРЕЛЯ 2024 Г.</p>
          </div>

          <div className="flex h-[215px] items-start gap-5 bg-[linear-gradient(135deg,#FFB23F,#FFA726)] px-7 py-[28px]">
            <div className="text-[72px] font-extrabold leading-[0.8] text-white">«</div>
            <p className="text-[19px] font-extrabold uppercase leading-[1.13] text-[#18324A]">О МЕДИЦИНСКОМ<br />НАБЛЮДЕНИИ ЗДОРОВЫХ<br />ДЕТЕЙ И ПОДРОСТКОВ<br />НА УРОВНЕ ОКАЗАНИЯ<br />ПЕРВИЧНОЙ МЕДИКО-<br />САНИТАРНОЙ ПОМОЩИ<br />В КР</p>
          </div>

          <div className="flex h-[136px] items-center gap-5 bg-white px-7 py-3">
            <img src="/assets/qr/order-422.png" alt="QR-код приказа №422" className="h-[110px] w-[110px] shrink-0 object-contain" draggable={false} />
            <p className="text-[12.5px] font-bold leading-[1.35] text-[#18324A]">Пожалуйста, наведите камеру на QR-код,<br />чтобы ознакомиться с приказом.</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[45px] top-[176px] flex h-[900px] w-[455px] flex-col items-center rounded-[24px] bg-white px-12 py-[52px] text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
        <OfficialEmblem />
        <h2 className="mt-[22px] text-[31px] font-extrabold uppercase leading-[1.15] text-[#2F5F9F]">МИНИСТЕРСТВО<br />ЗДРАВООХРАНЕНИЯ<br />КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h2>
        <Divider />
        <p className="mt-7 text-[22px] font-medium leading-[1.35] text-[#18324A]">Приказ №422<br />от 23 апреля 2024г</p>
        <p className="mt-[34px] text-[32px] font-extrabold leading-[1.28] text-[#18324A]">Назначение Витамина Д<br /><span className="text-[#D93632]">400 МЕ</span> перорально<br />ежедневно в течение<br />как минимум 12 месяцев<br />для профилактики рахита</p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-white/38 backdrop-blur-[1px]" />
    </section>
  )
}
