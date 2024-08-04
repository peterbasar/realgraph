import { useEffect } from 'react'
import {
  isGraphMovingI,
  isGraphMovingRefI,
  graphMovingRateI,
  graphMovingRateRefI,
} from '../../types'

export default function useHandleChangeMoving({
  isGraphMoving,
  isGraphMovingRef,
  graphMovingRate,
  graphMovingRateRef,
}: {
  isGraphMoving: isGraphMovingI
  isGraphMovingRef: isGraphMovingRefI
  graphMovingRate: graphMovingRateI
  graphMovingRateRef: graphMovingRateRefI
}): void {
  /**
   * Handle dynamic graph moving variables change
   */

  useEffect(() => {
    isGraphMovingRef.current = isGraphMoving
    graphMovingRateRef.current = graphMovingRate
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGraphMoving, graphMovingRate])
}
