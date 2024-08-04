import { useContext } from 'react'
import { axisHeightXI, axisDominantBaselineX, axisXSectionI } from '../types'
import GraphStyleContext from '../GraphStyleContext'
import { getOr } from '../Graph/utils'

export default function AxisXLine({
  dominantBaseline,
  axisHeightX,
  distanceToGraphStart,
  distanceToGraphEnd,
  left,
}: {
  dominantBaseline: axisDominantBaselineX
  axisHeightX: axisHeightXI
  distanceToGraphStart: number
  distanceToGraphEnd: number
  left: axisXSectionI['left']
}) {
  /**
   * Returns AxisXLine - line between the graph and the value on X axis
   */

  const graphStyleContext = useContext(GraphStyleContext)

  const dTop =
    dominantBaseline === 'hanging' ? distanceToGraphStart : axisHeightX - distanceToGraphStart
  const dBot =
    dominantBaseline === 'hanging' ? distanceToGraphEnd : axisHeightX - distanceToGraphEnd

  return (
    <line
      id="axisXLine"
      x1={left}
      y1={dTop}
      x2={left}
      y2={dBot}
      stroke={getOr(graphStyleContext, 'axisXLine.stroke', 'black')}
      strokeDasharray={getOr(graphStyleContext, 'axisXLine.strokeDasharray', undefined)}
      strokeWidth={getOr(graphStyleContext, 'axisXLine.strokeWidth', undefined)}
    />
  )
}
