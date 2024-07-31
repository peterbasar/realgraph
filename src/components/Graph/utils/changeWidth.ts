import { svgRefI, widthI } from '../types'
import changeViewBoxWidth from './changeViewBoxWidth'
import isValidRef from './isValidRef'

export default function changeWidth({ svgRef, width }: { svgRef: svgRefI; width: widthI }): void {
  /**
   * Change svg graph height
   */

  if (isValidRef(svgRef)) {
    svgRef.current.setAttribute('width', `${width}`)
  }
  changeViewBoxWidth({ svgRef, width })
}
