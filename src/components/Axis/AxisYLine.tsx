import { useContext } from 'react'
import { axisYSectionI, axisWidthYI, axisTextAnchorY } from '../types'
import GraphStyleContext from '../GraphStyleContext'
import { getOr } from '../Graph/utils'

export default function AxisYLine({
  textAnchor,
  axisWidthY,
  distanceToGraphStart,
  distanceToGraphEnd,
  top,
}: {
  textAnchor: axisTextAnchorY
  axisWidthY: axisWidthYI
  distanceToGraphStart: number
  distanceToGraphEnd: number
  top: axisYSectionI['top']
}) {
  /**
   * Returns AxisYLine - line between the graph and the value on Y axis
   */

  const graphStyleContext = useContext(GraphStyleContext)

  const dStart = textAnchor === 'start' ? distanceToGraphStart : axisWidthY - distanceToGraphStart
  const dEnd = textAnchor === 'start' ? distanceToGraphEnd : axisWidthY - distanceToGraphEnd

  return (
    <line
      id="axisYLine"
      x1={dStart}
      y1={top}
      x2={dEnd}
      y2={top}
      stroke={getOr(graphStyleContext, 'axisYLine.stroke', 'black')}
      strokeDasharray={getOr(graphStyleContext, 'axisYLine.strokeDasharray', undefined)}
      strokeWidth={getOr(graphStyleContext, 'axisYLine.strokeWidth', undefined)}
    />
  )
}
