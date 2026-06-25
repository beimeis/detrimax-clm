import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

export default function SchoolRisksScene({ activeZone, revealed }: AnimatedSceneProps) {
  const sunOn = zoneActive(activeZone, revealed, 'sun')
  const gadgetsOn = zoneActive(activeZone, revealed, 'gadgets')
  const growthOn = zoneActive(activeZone, revealed, 'growth')
  const seasonOn = zoneActive(activeZone, revealed, 'seasonal')

  return (
    <div className={`anim-scene anim-scene--school ${activeZone ? 'is-lit' : ''}`} aria-hidden>
      <svg viewBox="0 0 400 320" className="anim-scene-svg">
        <rect x="40" y="60" width="320" height="220" rx="12" className="anim-room-wall" />

        <rect x="60" y="80" width="100" height="80" rx="6" className={`anim-window ${sunOn ? 'is-on' : ''}`} />
        {sunOn && (
          <g className="anim-sun-rays" transform="translate(110, 120)">
            {[0, 45, 90, 135].map(a => (
              <line key={a} x1="0" y1="0" x2={40 * Math.cos(a * Math.PI / 180)} y2={40 * Math.sin(a * Math.PI / 180)} />
            ))}
          </g>
        )}

        <g transform="translate(175, 88)" className={`anim-calendar ${seasonOn ? 'is-on' : ''}`}>
          <rect x="-28" y="-18" width="56" height="52" rx="6" className="anim-calendar-body" />
          <rect x="-28" y="-18" width="56" height="14" rx="6" className="anim-calendar-header" />
          <text y="14" textAnchor="middle" className="anim-calendar-month">{seasonOn ? 'Дек' : 'Сен'}</text>
        </g>

        <rect x="220" y="180" width="100" height="12" rx="4" className="anim-desk" />
        <rect x="255" y="148" width="38" height="48" rx="4" className={`anim-gadget anim-gadget--laptop ${gadgetsOn ? 'is-on' : ''}`} />
        <rect x="268" y="156" width="12" height="8" rx="1" className={`anim-gadget-screen ${gadgetsOn ? 'is-on' : ''}`} />

        <g transform="translate(300, 175)" className={`anim-growth-meter ${growthOn ? 'is-on' : ''}`}>
          <rect x="-8" y="-70" width="16" height="80" rx="8" className="anim-growth-ruler" />
          {[0, 20, 40, 60].map(y => (
            <line key={y} x1="-12" x2="12" y1={y - 60} y2={y - 60} className="anim-growth-tick" />
          ))}
          <circle cy={growthOn ? -20 : -45} r="6" className="anim-growth-marker" />
        </g>

        <g className={`anim-snow ${seasonOn ? 'is-on' : ''}`}>
          {[[70, 95], [85, 110], [95, 100], [75, 125]].map(([x, y], i) => (
            <text key={i} x={x} y={y} className="anim-snowflake">❄</text>
          ))}
        </g>

        <g transform="translate(200, 210)">
          <circle cy="-30" r="16" className="anim-body-fill" />
          <rect x="-14" y="-14" width="28" height="36" rx="8" className="anim-body-fill" />
        </g>
      </svg>
    </div>
  )
}
