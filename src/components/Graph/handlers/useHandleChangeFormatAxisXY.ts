import { useEffect } from 'react'
import { formatAxisXI, formatAxisXRefI, formatAxisYI, formatAxisYRefI } from '../types'

export default function useHandleChangeFormatAxisXY({
  formatAxisX,
  formatAxisXRef,
  formatAxisY,
  formatAxisYRef,
}: {
  formatAxisX: formatAxisXI
  formatAxisXRef: formatAxisXRefI
  formatAxisY: formatAxisYI
  formatAxisYRef: formatAxisYRefI
}): void {
  /**
   * Handle change of format functions
   */

  useEffect(() => {
    formatAxisXRef.current = formatAxisX
    formatAxisYRef.current = formatAxisY
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formatAxisX, formatAxisY])
}
