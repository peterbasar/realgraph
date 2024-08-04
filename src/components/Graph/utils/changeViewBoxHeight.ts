import { heightI, svgRefI } from '../../types'
import isValidRef from './isValidRef'

export default function changeViewBoxHeight({
  svgRef,
  height,
}: {
  svgRef: svgRefI
  height: heightI
}): void {
  /**
   * Set viewBox height value
   */

  if (isValidRef(svgRef)) {
    if (svgRef.current.hasAttribute('viewBox')) {
      const viewBoxString = svgRef.current.getAttribute('viewBox') ?? ''
      if (viewBoxString) {
        const viewBoxArray = viewBoxString.split(' ')
        viewBoxArray[3] = height.toString()
        svgRef.current.setAttribute('viewBox', viewBoxArray.join(' '))
        return
      }
    }
    svgRef.current.setAttribute('viewBox', `0 0 0 ${height}`)
    return
  }
}
