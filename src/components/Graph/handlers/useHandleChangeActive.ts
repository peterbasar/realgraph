import { useEffect } from 'react'
import { activeI, activeRefI, callablesRefI } from '../../types'
import { isValidRef } from '../utils'

export default function useHandleChangeActive({
  callablesRef,
  active,
  activeRef,
}: {
  callablesRef: callablesRefI
  active: activeI
  activeRef: activeRefI
}): void {
  /**
   * Handle dynamic active change
   */

  useEffect(() => {
    if (isValidRef(activeRef)) {
      activeRef.current = active
      callablesRef.current.render()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])
}
