import { callableCleanup, callableRender, callableAddPoint } from '.'
import {
  activeRefI,
  callablesI,
  countRefI,
  heightRefI,
  intervalRefI,
  maxRefI,
  memoryRefI,
  minRefI,
  pathRefI,
  pointsRefI,
  widthRefI,
} from '../types'

export default function buildFunctions({
  pathRef,
  pointsRef,
  countRef,
  intervalRef,
  widthRef,
  heightRef,
  minRef,
  maxRef,
  activeRef,
  memoryRef,
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
  memoryRef: memoryRefI
}): callablesI {
  /**
   * Create and return all callables in one object
   */

  return {
    render: callableRender({
      pathRef,
      pointsRef,
      countRef,
      intervalRef,
      widthRef,
      heightRef,
      minRef,
      maxRef,
      activeRef,
    }),
    cleanup: callableCleanup({
      pointsRef,
      memoryRef,
      countRef,
    }),
    addPoint: callableAddPoint({
      pointsRef,
    }),
  }
}
