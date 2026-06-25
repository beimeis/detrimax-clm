import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import type { AnimatedSceneProps } from './types'
import { zoneActive } from './types'

const DATA = [
  { id: 'infant', label: '0–1 год', value: 72 },
  { id: 'school', label: 'Школа', value: 58 },
  { id: 'deficit', label: 'Дефицит', value: 85 },
]

export default function ProblemChartScene({ activeZone, revealed }: AnimatedSceneProps) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = d3.select(ref.current)
    svg.selectAll('*').remove()

    const width = 400
    const height = 280
    const margin = { top: 40, right: 24, bottom: 48, left: 48 }
    const innerW = width - margin.left - margin.right
    const innerH = height - margin.top - margin.bottom

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const x = d3.scaleBand()
      .domain(DATA.map(d => d.id))
      .range([0, innerW])
      .padding(0.35)

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([innerH, 0])

    g.append('g')
      .attr('transform', `translate(0,${innerH})`)
      .call(d3.axisBottom(x).tickFormat(id => DATA.find(d => d.id === id)?.label ?? id))
      .selectAll('text')
      .attr('class', 'anim-d3-axis')

    g.selectAll('.anim-d3-bar')
      .data(DATA)
      .join('rect')
      .attr('class', d => `anim-d3-bar ${zoneActive(activeZone, revealed, d.id) ? 'is-on' : ''}`)
      .attr('x', d => x(d.id)!)
      .attr('width', x.bandwidth())
      .attr('rx', 8)
      .attr('y', innerH)
      .attr('height', 0)
      .transition()
      .duration(800)
      .delay((_, i) => i * 120)
      .attr('y', d => y(d.value))
      .attr('height', d => innerH - y(d.value))

    g.append('text')
      .attr('x', innerW / 2)
      .attr('y', -12)
      .attr('text-anchor', 'middle')
      .attr('class', 'anim-d3-title')
      .text('Распространённость дефицита D3')
  }, [activeZone, revealed])

  return (
    <div className={`anim-scene anim-scene--chart ${activeZone ? 'is-lit' : ''}`} aria-hidden>
      <svg ref={ref} className="anim-scene-svg anim-d3-svg" />
    </div>
  )
}
