import { svgRefI, widthI } from '../../types'
import isValidRef from './isValidRef'

export default function changeViewBoxWidth({
  svgRef,
  width,
}: {
  svgRef: svgRefI
  width: widthI
}): void {
  /**
   * Set viewBox width value
   */

  if (isValidRef(svgRef)) {
    if (svgRef.current.hasAttribute('viewBox')) {
      const viewBoxString = svgRef.current.getAttribute('viewBox') ?? ''
      if (viewBoxString) {
        const viewBoxArray = viewBoxString.split(' ')
        viewBoxArray[2] = width.toString()
        svgRef.current.setAttribute('viewBox', viewBoxArray.join(' '))
        return
      }
    }
    svgRef.current.setAttribute('viewBox', `0 0 ${width} 0`)
    return
  }
}
