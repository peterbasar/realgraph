import { useContext } from 'react'
import { axisXSectionI, axisHeightXI, axisDominantBaselineX } from '../types'
import GraphStyleContext from '../GraphStyleContext'
import { getOr } from '../Graph/utils'

export default function AxisXText({
  dominantBaseline,
  axisHeightX,
  distanceToGraph,
  left,
  value,
}: {
  dominantBaseline: axisDominantBaselineX
  axisHeightX: axisHeightXI
  distanceToGraph: number
  left: axisXSectionI['left']
  value: axisXSectionI['value']
}) {
  /**
   * Returns AxisXText component - Axis x text representing the value at that point
   */

  const graphStyleContext = useContext(GraphStyleContext)

  const y = dominantBaseline === 'hanging' ? distanceToGraph : axisHeightX - distanceToGraph

  return (
    <text
      id="axisXText"
      x={left}
      y={y}
      dominantBaseline={dominantBaseline}
      dx={getOr(graphStyleContext, 'axisXText.dx', undefined)}
      dy={getOr(graphStyleContext, 'axisXText.dy', undefined)}
      rotate={getOr(graphStyleContext, 'axisXText.rotate', undefined)}
      textAnchor={getOr(graphStyleContext, 'axisXText.textAnchor', 'middle')}
    >
      {value}
    </text>
  )
}
