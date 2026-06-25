import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import type { RouteId } from '../../types'

interface Props {
  selectedRoute: RouteId | null
  flying?: boolean
}

const ROUTES = [
  { id: 'baby' as RouteId, x: 160, y: 260, color: '#FF9100', label: 'Младенец' },
  { id: 'immunity' as RouteId, x: 450, y: 260, color: '#00A896', label: 'Иммунитет' },
  { id: 'school' as RouteId, x: 740, y: 260, color: '#028090', label: 'Школьник' },
]

export default function HomeAnimatedHero({ selectedRoute, flying }: Props) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = d3.select(ref.current)
    svg.selectAll('*').remove()

    const width = 900
    const height = 300
    const cx = width / 2
    const cy = 88

    svg.attr('viewBox', `0 0 ${width} ${height}`)

    const defs = svg.append('defs')
    const grad = defs.append('radialGradient').attr('id', 'home-drop-grad')
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#FFD54F')
    grad.append('stop').attr('offset', '70%').attr('stop-color', '#FFB300')
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#FF9100').attr('stop-opacity', 0)

    ROUTES.forEach(r => {
      const on = selectedRoute === r.id
      svg.append('path')
        .attr('d', `M${cx} ${cy + 24} Q${(cx + r.x) / 2} ${cy + 100} ${r.x} ${r.y - 36}`)
        .attr('class', `anim-home-branch ${on ? 'is-on' : ''}`)
        .attr('stroke', r.color)
    })

    svg.append('circle')
      .attr('cx', cx)
      .attr('cy', cy)
      .attr('r', 52)
      .attr('fill', 'url(#home-drop-grad)')
      .attr('class', 'anim-home-sun-halo anim-pulse-slow')

    const dropG = svg.append('g').attr('class', flying ? 'anim-home-drop-flying' : '')
    dropG.append('path')
      .attr('d', `M${cx} ${cy - 20} Q${cx + 8} ${cy + 4} ${cx} ${cy + 22} Q${cx - 8} ${cy + 4} ${cx} ${cy - 20}`)
      .attr('class', 'anim-home-drop-shape')

    dropG.append('text')
      .attr('x', cx)
      .attr('y', cy + 8)
      .attr('text-anchor', 'middle')
      .attr('class', 'anim-home-d3-label')
      .text('D3')

    if (flying && selectedRoute) {
      const target = ROUTES.find(r => r.id === selectedRoute)!
      dropG.attr('transform', `translate(${target.x - cx}, ${target.y - 36 - cy})`)
    }

    ROUTES.forEach(r => {
      const on = selectedRoute === r.id
      svg.append('rect')
        .attr('x', r.x - 72)
        .attr('y', r.y - 52)
        .attr('width', 144)
        .attr('height', 64)
        .attr('rx', 16)
        .attr('class', `anim-home-route-card ${on ? 'is-on' : ''}`)
        .attr('stroke', r.color)

      svg.append('text')
        .attr('x', r.x)
        .attr('y', r.y - 16)
        .attr('text-anchor', 'middle')
        .attr('class', 'anim-home-node-label')
        .attr('fill', r.color)
        .text(r.label)
    })
  }, [selectedRoute, flying])

  return (
    <div className={`anim-scene anim-scene--home ${flying ? 'is-flying' : ''}`}>
      <svg ref={ref} className="anim-home-svg" aria-hidden />
    </div>
  )
}
