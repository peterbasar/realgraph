import { minRefI, maxRefI, heightRefI } from '../../Graph/types'
import { isValidRef } from '../../Graph/utils'

export default function getValueFromGraphPositionY({
  position,
  heightRef,
  minRef,
  maxRef,
}: {
  position: number
  heightRef: heightRefI
  minRef: minRefI
  maxRef: maxRefI
}) {
  /**
   * Return y axis value at a particular position in the graph
   */

  if (isValidRef(heightRef) && isValidRef(minRef) && isValidRef(maxRef)) {
    return (
      ((heightRef.current - position) / heightRef.current - 1) * (maxRef.current - minRef.current) +
      maxRef.current
    )
  }
  return 0
}
