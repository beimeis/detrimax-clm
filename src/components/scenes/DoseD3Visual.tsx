import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface Props {
  activeStep: number
  activeLevel: string | null
}

const LEVELS = [
  { id: 'deficit', label: 'Дефицит', min: 0, max: 20, color: '#D32F2F' },
  { id: 'insufficient', label: 'Недостат.', min: 21, max: 29, color: '#EF6C00' },
  { id: 'adequate', label: 'Адекват.', min: 30, max: 70, color: '#00A896' },
  { id: 'high', label: 'Высокий', min: 71, max: 90, color: '#FFB300' },
]

const STEPS = ['Анализ', 'Статус', 'Доза', 'Контроль']

export default function DoseD3Visual({ activeStep, activeLevel }: Props) {
  const ref = useRef<SVGSVGElement>(null)
  const [marker, setMarker] = useState(25)

  useEffect(() => {
    if (activeLevel === 'deficit') setMarker(12)
    else if (activeLevel === 'insufficient') setMarker(25)
    else if (activeLevel === 'adequate') setMarker(45)
    else if (activeLevel === 'high') setMarker(78)
  }, [activeLevel])

  useEffect(() => {
    const svg = d3.select(ref.current)
    svg.selectAll('*').remove()

    const width = 720
    const height = 220
    const margin = { top: 28, right: 24, bottom: 36, left: 40 }
    const innerW = width - margin.left - margin.right

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const x = d3.scaleLinear().domain([0, 90]).range([0, innerW])

    LEVELS.forEach(l => {
      const on = activeLevel === l.id
      g.append('rect')
        .attr('x', x(l.min))
        .attr('y', on ? 32 : 40)
        .attr('width', x(l.max) - x(l.min))
        .attr('height', on ? 44 : 36)
        .attr('rx', 6)
        .attr('fill', l.color)
        .attr('opacity', on ? 0.95 : 0.35)
        .attr('class', `anim-dose-band ${on ? 'is-active' : ''}`)
        .style('transition', 'y 0.4s ease, height 0.4s ease, opacity 0.4s ease')

      g.append('text')
        .attr('x', (x(l.min) + x(l.max)) / 2)
        .attr('y', 64)
        .attr('text-anchor', 'middle')
        .attr('class', 'anim-dose-band-label')
        .text(l.label)
    })

    g.append('line')
      .attr('x1', x(30))
      .attr('x2', x(30))
      .attr('y1', 30)
      .attr('y2', 90)
      .attr('class', 'anim-dose-target-line')

    g.append('text')
      .attr('x', x(30))
      .attr('y', 22)
      .attr('text-anchor', 'middle')
      .attr('class', 'anim-dose-target-text')
      .text('Цель 30')

    const markerG = g.append('g').attr('class', 'anim-dose-marker')

    markerG.append('polygon')
      .attr('points', '0,-8 8,0 0,8 -8,0')
      .attr('fill', '#028090')

    markerG.append('text')
      .attr('y', 28)
      .attr('text-anchor', 'middle')
      .attr('class', 'anim-dose-marker-text')
      .text(`${marker}`)

    markerG
      .transition()
      .duration(600)
      .attr('transform', `translate(${x(marker)}, 100)`)

    g.append('g')
      .attr('transform', 'translate(0, 120)')
      .selectAll('g')
      .data(STEPS)
      .join('g')
      .attr('transform', (_, i) => `translate(${i * (innerW / 3)}, 0)`)
      .each(function (_, i) {
        const step = d3.select(this)
        step.append('circle')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', i + 1 === activeStep ? 16 : 12)
          .attr('class', `anim-dose-step ${i + 1 === activeStep ? 'is-active' : ''}`)
        step.append('text')
          .attr('y', 32)
          .attr('text-anchor', 'middle')
          .attr('class', 'anim-dose-step-label')
          .text(STEPS[i])
        if (i < STEPS.length - 1) {
          step.append('line')
            .attr('x1', 16)
            .attr('x2', innerW / 3 - 16)
            .attr('y1', 0)
            .attr('y2', 0)
            .attr('class', 'anim-dose-step-line')
        }
      })
  }, [activeStep, activeLevel, marker])

  return (
    <div className="anim-scene anim-scene--dose-d3">
      <svg ref={ref} className="anim-d3-svg anim-dose-svg" />
    </div>
  )
}
