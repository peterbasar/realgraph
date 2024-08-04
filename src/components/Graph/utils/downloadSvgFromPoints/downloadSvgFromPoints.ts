import { filenameI, svgRefI, pointsRefI } from '../../../types'
import { svgGetString, downloadSvgFromString, svgGetGraph } from './utils'

export default function downloadSvgFromPoints({
  filename,
  svgRef,
  pointsRef,
  full = false,
}: {
  filename?: filenameI
  svgRef: svgRefI
  pointsRef: pointsRefI
  full?: boolean
}): void {
  /**
   * Download svg file with 'filename' filename from svgRef.
   * */

  if (svgRef && svgRef.current && pointsRef && pointsRef.current) {
    /* Ready to export svg */
    let svgString = svgGetGraph({
      svgString: svgGetString({ svgRef }),
      full,
    })

    downloadSvgFromString({ svgString, filename })
  }
}
