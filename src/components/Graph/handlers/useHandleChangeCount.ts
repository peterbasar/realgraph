import { useEffect } from 'react'
import { countRefI, countI, callablesRefI } from '../types'

export default function useHandleChangeCount({
  callablesRef,
  countRef,
  count,
}: {
  callablesRef: callablesRefI
  countRef: countRefI
  count: countI
}): void {
  /**
   * Handle dynamic count change
   */

  useEffect(() => {
    countRef.current = count

    callablesRef.current.render()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])
}
