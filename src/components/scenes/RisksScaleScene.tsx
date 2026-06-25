import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

const ITEMS = [
  { id: '0', label: 'Кости', value: 25 },
  { id: '1', label: 'Инфекции', value: 55 },
  { id: '2', label: 'Образ жизни', value: 40 },
  { id: '3', label: 'Рост', value: 70 },
]

export default function RisksScaleScene({ activeZone, revealed }: AnimatedSceneProps) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = d3.select(ref.current)
    svg.selectAll('*').remove()

    const width = 400
    const height = 280
    const margin = { top: 36, right: 32, bottom: 40, left: 32 }
    const innerH = height - margin.top - margin.bottom

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const y = d3.scaleLinear().domain([0, 100]).range([innerH, 0])

    const gradientId = 'risk-gradient'
    const defs = svg.append('defs')
    const grad = defs.append('linearGradient').attr('id', gradientId).attr('x1', '0').attr('y1', '1').attr('x2', '0').attr('y2', '0')
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#00A896')
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#D32F2F')

    g.append('rect')
      .attr('x', 20)
      .attr('y', 0)
      .attr('width', 24)
      .attr('height', innerH)
      .attr('rx', 12)
      .attr('fill', `url(#${gradientId})`)
      .attr('class', 'anim-risk-scale-bar')

    ITEMS.forEach(item => {
      const on = zoneActive(activeZone, revealed, item.id)
      const cy = y(item.value)
      g.append('line')
        .attr('x1', 56)
        .attr('x2', width - margin.left - margin.right)
        .attr('y1', cy)
        .attr('y2', cy)
        .attr('class', `anim-risk-line ${on ? 'is-on' : ''}`)

      g.append('circle')
        .attr('cx', 32)
        .attr('cy', cy)
        .attr('r', on ? 10 : 6)
        .attr('class', `anim-risk-marker ${on ? 'is-on' : ''}`)

      g.append('text')
        .attr('x', 56)
        .attr('y', cy - 8)
        .attr('class', `anim-risk-label ${on ? 'is-on' : ''}`)
        .text(item.label)
    })
  }, [activeZone, revealed])

  return (
    <div className={`anim-scene anim-scene--risks ${activeZone ? 'is-lit' : ''}`} aria-hidden>
      <svg ref={ref} className="anim-scene-svg anim-d3-svg" />
    </div>
  )
}
