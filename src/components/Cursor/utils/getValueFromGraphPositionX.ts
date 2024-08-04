import { countRefI, widthRefI, intervalRefI } from '../../types'
import { isValidRef, getGraphTimeWidth } from '../../Graph/utils'

export default function getValueFromGraphPositionX({
  position,
  countRef,
  intervalRef,
  widthRef,
}: {
  position: number
  countRef: countRefI
  intervalRef: intervalRefI
  widthRef: widthRefI
}) {
  /**
   * Return x axis value at a particular position in the graph
   */

  if (isValidRef(countRef) && isValidRef(intervalRef) && isValidRef(widthRef)) {
    return -(
      ((position - widthRef.current) / widthRef.current) *
      getGraphTimeWidth({
        count: countRef.current,
        interval: intervalRef.current,
      })
    )
  }
  return 0
}
