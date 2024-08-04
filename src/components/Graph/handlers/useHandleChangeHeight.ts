import { useEffect } from 'react'
import { heightRefI, svgRefI, heightI, callablesRefI } from '../../types'
import { changeHeight, isValidRef } from '../utils'

export default function useHandleChangeHeight({
  callablesRef,
  svgRef,
  heightRef,
  height,
}: {
  callablesRef: callablesRefI
  svgRef: svgRefI
  heightRef: heightRefI
  height: heightI
}): void {
  /**
   * Handle dynamic height change
   */

  useEffect(() => {
    if (isValidRef(svgRef)) {
      changeHeight({ svgRef, height: height })
    }
    heightRef.current = height

    callablesRef.current.render()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heightRef, svgRef, height])
}
