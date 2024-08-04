import {
  widthI,
  axisSectionCountI,
  axisXSectionI,
  formatAxisXI,
  countI,
  intervalI,
} from '../../types'
import { getSectionSize, getAxisX } from '.'

export default function generateSectionsX({
  sectionCount,
  graphWidth,
  count,
  interval,
  formatAxisX,
}: {
  sectionCount: axisSectionCountI
  graphWidth: widthI
  count: countI
  interval: intervalI
  formatAxisX: formatAxisXI
}): Array<axisXSectionI> {
  /**
   * Generate X axis time sections
   */

  const sectionWidth = getSectionSize({
    length: graphWidth,
    sectionCount,
  })

  const sections: Array<axisXSectionI> = []

  for (let i = 0; i < sectionCount; i++) {
    /* Svg y coordinates are increasing top to bottom  */
    const inverse_i = sectionCount - 1 - i

    sections.push({
      key: i,
      left: sectionWidth * (i + 1),
      value: getAxisX({
        normalizedValue: (inverse_i + 1) / (sectionCount + 1),
        formatAxisX,
        count,
        interval,
      }),
    })
  }

  return sections
}
