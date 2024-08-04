import { memoryRefI, countRefI, pointsRefI, callableCleanupI } from '../../types'
import { cleanup } from '../utils'

export default function callableCleanup({
  pointsRef,
  memoryRef,
  countRef,
}: {
  pointsRef: pointsRefI
  memoryRef: memoryRefI
  countRef: countRefI
}): callableCleanupI {
  /**
   * Create a callable no-parameter function for cleanup()
   */

  return () => {
    cleanup({
      pointsRef,
      memoryRef,
      countRef,
    })
  }
}
