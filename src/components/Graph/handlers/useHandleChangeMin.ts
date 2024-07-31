import { useEffect } from 'react'
import { callablesRefI, minRefI, minI } from '../types'

export default function useHandleChangeMin({
  callablesRef,
  minRef,
  min,
}: {
  callablesRef: callablesRefI
  minRef: minRefI
  min: minI
}): void {
  /**
   * Handle dynamic min change
   */

  useEffect(() => {
    if (minRef && minRef.current != null) {
      minRef.current = min
    }

    callablesRef.current.render()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min])
}
