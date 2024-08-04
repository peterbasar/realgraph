import { minI, maxI, formatAxisYI } from '../../types'
import { cleanNormalizedValue } from '.'

export default function getAxisY({
  normalizedValue,
  min,
  max,
  formatAxisY,
}: {
  normalizedValue: number
  min: minI
  max: maxI
  formatAxisY: formatAxisYI
}): number | string {
  /**
   * Returns formatted value of a Y axis section
   */

  const _normalizedValue = cleanNormalizedValue(normalizedValue)

  return formatAxisY(_normalizedValue * (max - min) + min)
}
