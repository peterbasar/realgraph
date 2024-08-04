import { pointI, memoryRefI, countRefI, pointsRefI } from '../../types'
import { isValidRef } from '.'

export default function cleanup({
  pointsRef,
  memoryRef,
  countRef,
}: {
  pointsRef: pointsRefI
  memoryRef: memoryRefI
  countRef: countRefI
}): void {
  /**
   * Call cleanup function at the end of the animation, remove the points that are outside of the
   * SVG border and out of memory boundary
   */

  if (isValidRef(pointsRef) && isValidRef(memoryRef) && isValidRef(countRef)) {
    pointsRef.current = pointsRef.current.filter((point: pointI, point_i: number) => {
      if (isValidRef(pointsRef) && isValidRef(memoryRef) && isValidRef(countRef)) {
        /**
         * Consider deleting current point only if we have more points than set by 'count'
         * AND
         * we are out of requested memory
         * */
        if (
          pointsRef.current.length - 1 - point_i >=
          Math.max(memoryRef.current, countRef.current) + 1
        ) {
          return false
        }
        return true
      }
    })
  }
}
