import { useContext } from 'react'
import { axisYSectionI, axisWidthYI, axisTextAnchorY } from '../Graph/types'
import GraphStyleContext from '../GraphStyleContext'
import { getOr } from '../Graph/utils'

export default function AxisYText({
  textAnchor,
  axisWidthY,
  distanceToGraph,
  top,
  value,
}: {
  textAnchor: axisTextAnchorY
  axisWidthY: axisWidthYI
  distanceToGraph: number
  top: axisYSectionI['top']
  value: axisYSectionI['value']
}) {
  /**
   * Returns AxisYText component - Axis y text representing the value at that point
   */

  const graphStyleContext = useContext(GraphStyleContext)

  const x = textAnchor === 'start' ? distanceToGraph : axisWidthY - distanceToGraph

  return (
    <text
      id="axisYText"
      x={x}
      y={top}
      textAnchor={textAnchor}
      dx={getOr(graphStyleContext, 'axisYText.dx', undefined)}
      dy={getOr(graphStyleContext, 'axisYText.dy', undefined)}
      rotate={getOr(graphStyleContext, 'axisYText.rotate', undefined)}
      dominantBaseline={getOr(graphStyleContext, 'axisYText.dominantBaseline', 'middle')}
    >
      {value}
    </text>
  )
}
