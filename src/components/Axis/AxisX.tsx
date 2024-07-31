import React, { useEffect, useState, useContext } from 'react'
import {
  axisHeightXI,
  axisSectionCountI,
  formatAxisXI,
  countI,
  intervalI,
  axisPositionXI,
  axisPositionYI,
  axisDominantBaselineX,
  axisTitleXI,
  axisEnableXI,
  widthI,
} from '../Graph/types'
import { generateSectionsX } from './utils'
import AxisXText from './AxisXText'
import AxisXLine from './AxisXLine'
import GraphStyleContext from '../GraphStyleContext'

export default function AxisX({
  axisEnableX,
  axisTitleX,
  axisHeightX,
  graphWidth,
  sectionCount,
  count,
  interval,
  formatAxisX,
  axisPositionX,
  axisPositionY,
}: {
  axisEnableX: axisEnableXI
  axisTitleX: axisTitleXI
  axisHeightX: axisHeightXI
  graphWidth: widthI
  sectionCount: axisSectionCountI
  count: countI
  interval: intervalI
  formatAxisX: formatAxisXI
  axisPositionX: axisPositionXI
  axisPositionY: axisPositionYI
}) {
  /**
   * Returns AxisX component
   */

  const graphStyleContext = useContext(GraphStyleContext)

  const dominantBaseline: axisDominantBaselineX = axisPositionX === 'BOTTOM' ? 'hanging' : 'auto'
  const wrapperFlexDirection: 'row' | 'row-reverse' =
    axisPositionY === 'RIGHT' ? 'row' : 'row-reverse'
  const titleXAlignItems: 'start' | 'end' = axisPositionX === 'BOTTOM' ? 'end' : 'start'

  const [sections, setSections] = useState(
    generateSectionsX({
      sectionCount,
      graphWidth,
      count,
      interval,
      formatAxisX,
    }),
  )

  useEffect(() => {
    setSections(
      generateSectionsX({
        sectionCount,
        graphWidth,
        count,
        interval,
        formatAxisX,
      }),
    )
  }, [sectionCount, graphWidth, count, interval, formatAxisX])

  if (axisEnableX) {
    return (
      <div
        id="axisXOuterContainer"
        style={{
          display: 'flex',
          flexDirection: wrapperFlexDirection,
          ...graphStyleContext.axisXOuterContainer,
        }}
      >
        <div
          id="axisXInnerContainer"
          style={{
            height: axisHeightX,
            width: graphWidth,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: titleXAlignItems,
            ...graphStyleContext.axisXInnerContainer,
          }}
        >
          <p
            id="axisXTitle"
            style={{
              textAlign: 'center',
              ...graphStyleContext.axisXTitle,
            }}
          >
            {axisTitleX}
          </p>
          <svg
            id="axisXSvg"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: graphWidth,
              height: axisHeightX,
              ...graphStyleContext.axisXSvg,
            }}
          >
            {/* Generate sections */}
            {sections.map((section) => {
              return (
                <React.Fragment key={section.key}>
                  <AxisXLine
                    dominantBaseline={dominantBaseline}
                    axisHeightX={axisHeightX}
                    distanceToGraphStart={10}
                    distanceToGraphEnd={20}
                    left={section.left}
                  />
                  <AxisXText
                    dominantBaseline={dominantBaseline}
                    axisHeightX={axisHeightX}
                    distanceToGraph={30}
                    left={section.left}
                    value={section.value}
                  />
                </React.Fragment>
              )
            })}
          </svg>
        </div>
      </div>
    )
  }
  return null
}
