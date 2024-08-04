import {
  activeRefI,
  countRefI,
  heightRefI,
  intervalRefI,
  maxRefI,
  minRefI,
  pathRefI,
  pointsRefI,
  widthRefI,
} from '../../types'
import getPathFromPoints from './getPathFromPoints'
import isValidRef from './isValidRef'

export default function renderPath({
  pathRef,
  pointsRef,
  countRef,
  intervalRef,
  widthRef,
  heightRef,
  minRef,
  maxRef,
  activeRef,
}: {
  pathRef: pathRefI
  pointsRef: pointsRefI
  countRef: countRefI
  intervalRef: intervalRefI
  widthRef: widthRefI
  heightRef: heightRefI
  minRef: minRefI
  maxRef: maxRefI
  activeRef: activeRefI
}): void {
  /**
   * Re-renders path in the graph - updates position based on time changes or
   * graph distortions such as change in min, max, width, interval, ...
   */

  if (isValidRef(pathRef)) {
    pathRef.current.setAttribute(
      'd',
      getPathFromPoints({
        pointsRef,
        countRef,
        intervalRef,
        widthRef,
        heightRef,
        minRef,
        maxRef,
        activeRef,
      }),
    )
  }
}
