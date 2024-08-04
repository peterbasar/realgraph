import { useEffect } from 'react'
import { maxI, maxRefI, callablesRefI } from '../../types'

export default function useHandleChangeMax({
  callablesRef,
  maxRef,
  max,
}: {
  callablesRef: callablesRefI
  maxRef: maxRefI
  max: maxI
}): void {
  /**
   * Handle dynamic max change
   */

  useEffect(() => {
    if (maxRef && maxRef.current != null) {
      maxRef.current = max
    }

    callablesRef.current.render()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max])
}
