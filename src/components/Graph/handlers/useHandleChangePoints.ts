import { useEffect } from 'react'
import { pointsRefI, GraphI, pathRefI, callablesRefI } from '../../types'
import { isValidRef } from '../utils'

export default function useHandleChangePoints({
  callablesRef,
  pathRef,
  pointsRef,
  points,
}: {
  callablesRef: callablesRefI
  pointsRef: pointsRefI
  pathRef: pathRefI
  points: GraphI['points']
}): void {
  /**
   * Handle dynamic points change
   */

  useEffect(() => {
    if (isValidRef(pathRef) && isValidRef(pointsRef) && points) {
      if (JSON.stringify(points) !== JSON.stringify(pointsRef.current)) {
        pointsRef.current = points

        callablesRef.current.cleanup()
        callablesRef.current.render()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points])
}
