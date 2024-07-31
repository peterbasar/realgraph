import { useEffect } from 'react'
import { isCallbackI, isCallbackRefI } from '../types'
import { isValidRef } from '../utils'

export default function useHandleChangeIsCallback({
  isCallback,
  isCallbackRef,
}: {
  isCallback: isCallbackI
  isCallbackRef: isCallbackRefI
}): void {
  /**
   * Handle dynamic isCallback change
   */

  useEffect(() => {
    if (isValidRef(isCallbackRef)) {
      isCallbackRef.current = isCallback
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCallback])
}
