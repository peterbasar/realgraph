import { useEffect } from 'react'
import { intervalRefI, intervalI } from '../../types'

export default function useHandleChangeInterval({
  intervalRef,
  interval,
}: {
  intervalRef: intervalRefI
  interval: intervalI
}): void {
  /**
   * Handle dynamic interval change
   */

  useEffect(() => {
    intervalRef.current = Math.abs(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval])
}
