import { countI, formatAxisXI, intervalI } from '../../Graph/types'
import { cleanNormalizedValue } from '.'

export default function getAxisX({
  normalizedValue,
  formatAxisX,
  count,
  interval,
}: {
  normalizedValue: number
  formatAxisX: formatAxisXI
  count: countI
  interval: intervalI
}): number | string {
  /**
   * Returns formatted value of a X axis section
   */

  const _normalizedValue = cleanNormalizedValue(normalizedValue)

  const widthTimeLength = () => {
    if (count === 1) return interval
    return (count - 1) * interval
  }

  return formatAxisX(_normalizedValue * widthTimeLength())
}
