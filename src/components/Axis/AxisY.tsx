import React, { useEffect, useState, useContext } from 'react'
import {
  heightI,
  axisWidthYI,
  axisSectionCountI,
  minI,
  maxI,
  formatAxisYI,
  axisPositionYI,
  axisTextAnchorY,
  axisTitleYI,
  axisEnableYI,
} from '../types'
import { generateSectionsY } from './utils'
import AxisYText from './AxisYText'
import AxisYLine from './AxisYLine'
import GraphStyleContext from '../GraphStyleContext'

export default function AxisY({
  axisEnableY,
  axisTitleY,
  graphHeight,
  axisWidthY,
  sectionCount,
  min,
  max,
  formatAxisY,
  axisPositionY,
}: {
  axisEnableY: axisEnableYI
  axisTitleY: axisTitleYI
  graphHeight: heightI
  axisWidthY: axisWidthYI
  sectionCount: axisSectionCountI
  min: minI
  max: maxI
  formatAxisY: formatAxisYI
  axisPositionY: axisPositionYI
}) {
  /**
   * Returns AxisY component
   */

  const graphStyleContext = useContext(GraphStyleContext)
  let textAnchor: axisTextAnchorY = axisPositionY === 'LEFT' ? 'end' : 'start'
  const titleYJustifyContent: 'start' | 'end' = axisPositionY === 'LEFT' ? 'start' : 'end'

  const [sections, setSections] = useState(
    generateSectionsY({
      sectionCount,
      graphHeight,
      min,
      max,
      formatAxisY,
    }),
  )

  useEffect(() => {
    setSections(
      generateSectionsY({
        sectionCount,
        graphHeight,
        min,
        max,
        formatAxisY,
      }),
    )
  }, [sectionCount, graphHeight, min, max, formatAxisY])

  if (axisEnableY) {
    return (
      <div
        style={{
          height: graphHeight,
          width: axisWidthY,
          position: 'relative',
          display: 'flex',
          justifyContent: titleYJustifyContent,
          alignItems: 'center',
          ...graphStyleContext.axisYContainer,
        }}
        id="axisYContainer"
      >
        <p
          style={{
            textAlign: 'center',
            writingMode: 'vertical-rl',
            ...graphStyleContext.axisYTitle,
          }}
          id="axisYTitle"
        >
          {axisTitleY}
        </p>
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: axisWidthY,
            height: graphHeight,
            ...graphStyleContext.axisYSvg,
          }}
          id="axisYSvg"
        >
          {/* Generate sections */}
          {sections.map((section) => {
            return (
              <React.Fragment key={section.key}>
                <AxisYLine
                  textAnchor={textAnchor}
                  axisWidthY={axisWidthY}
                  distanceToGraphStart={10}
                  distanceToGraphEnd={20}
                  top={section.top}
                />
                <AxisYText
                  textAnchor={textAnchor}
                  axisWidthY={axisWidthY}
                  distanceToGraph={25}
                  top={section.top}
                  value={section.value}
                />
              </React.Fragment>
            )
          })}
        </svg>
      </div>
    )
  }
  return null
}
