import { useEffect } from 'react'
import { widthRefI, svgRefI, pointsRefI, widthI, callablesRefI } from '../../types'
import { changeWidth, isValidRef } from '../utils'

export default function useHandleChangeWidth({
  callablesRef,
  pointsRef,
  svgRef,
  widthRef,
  width,
}: {
  callablesRef: callablesRefI
  widthRef: widthRefI
  svgRef: svgRefI
  pointsRef: pointsRefI
  width: widthI
}): void {
  /**
   * Handle dynamic width change
   */

  useEffect(() => {
    if (isValidRef(svgRef)) {
      changeWidth({ svgRef, width })
    }

    if (isValidRef(pointsRef)) {
      widthRef.current = width

      callablesRef.current.render()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])
}
