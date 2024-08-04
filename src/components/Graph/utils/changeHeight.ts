import { heightI, svgRefI } from '../../types'
import changeViewBoxHeight from './changeViewBoxHeight'
import isValidRef from './isValidRef'

export default function changeHeight({
  svgRef,
  height,
}: {
  svgRef: svgRefI
  height: heightI
}): void {
  /**
   * Change svg graph height
   */

  if (isValidRef(svgRef)) {
    svgRef.current.setAttribute('height', `${height}`)
  }
  changeViewBoxHeight({ svgRef, height })
}
