import { useEffect } from 'react'
import { memoryI, memoryRefI } from '../types'

export default function useHandleChangeMemory({
  memory,
  memoryRef,
}: {
  memory: memoryI
  memoryRef: memoryRefI
}): void {
  /**
   * Handle dynamic memory change
   */

  useEffect(() => {
    memoryRef.current = memory

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memory])
}
