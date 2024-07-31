import { countI, intervalI, pointI, widthI } from '../types'
import { getGraphTimeWidth } from '.'

export default function convertTimeToWidth({
  x,
  width,
  count,
  interval,
}: {
  x: pointI['x']
  width: widthI
  count: countI
  interval: intervalI
}): pointI['x'] {
  /**
   * Converts x [ms] (time difference) to distance [px] (difference in distance).
   * Usually used when knowing time difference between 2 points but not their distance.
   */

  const graphTimeWidth = getGraphTimeWidth({
    count,
    interval,
  })

  const graphWidthOverTime = width / graphTimeWidth

  return x * graphWidthOverTime
}
