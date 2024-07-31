import {
  heightI,
  axisSectionCountI,
  minI,
  maxI,
  axisYSectionI,
  formatAxisYI,
} from '../../Graph/types'
import { getSectionSize, getAxisY } from '.'

export default function generateSectionsY({
  sectionCount,
  graphHeight,
  min,
  max,
  formatAxisY,
}: {
  sectionCount: axisSectionCountI
  graphHeight: heightI
  min: minI
  max: maxI
  formatAxisY: formatAxisYI
}): Array<axisYSectionI> {
  /**
   * Generate Y axis value sections
   */

  const sectionHeight = getSectionSize({
    length: graphHeight,
    sectionCount,
  })

  const sections: Array<axisYSectionI> = []

  for (let i = 0; i < sectionCount; i++) {
    /* Svg y coordinates are increasing top to bottom  */
    const inverse_i = sectionCount - 1 - i

    sections.push({
      key: i,
      top: sectionHeight * (i + 1),
      value: getAxisY({
        normalizedValue: (inverse_i + 1) / (sectionCount + 1),
        min,
        max,
        formatAxisY,
      }),
    })
  }

  return sections
}
