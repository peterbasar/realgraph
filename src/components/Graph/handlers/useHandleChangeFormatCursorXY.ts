import { useEffect } from 'react'
import { formatCursorXI, formatCursorXRefI, formatCursorYI, formatCursorYRefI } from '../../types'

export default function useHandleChangeFormatCursorXY({
  formatCursorX,
  formatCursorXRef,
  formatCursorY,
  formatCursorYRef,
}: {
  formatCursorX: formatCursorXI
  formatCursorXRef: formatCursorXRefI
  formatCursorY: formatCursorYI
  formatCursorYRef: formatCursorYRefI
}): void {
  /**
   * Handle change of format functions
   */

  useEffect(() => {
    formatCursorXRef.current = formatCursorX
    formatCursorYRef.current = formatCursorY
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formatCursorX, formatCursorY])
}
