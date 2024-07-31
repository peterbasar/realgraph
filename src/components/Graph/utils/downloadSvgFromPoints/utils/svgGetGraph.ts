import { pathGetD, pointsParse, pointsClean, pathGenerate } from '.'

export default function svgGetGraph({
  svgString,
  full = false,
}: {
  svgString: string
  full?: boolean
}): string {
  /**
   * Get whole <svg> string and process it for short graph - remove points that are behind the graph
   * boundaries
   */

  /* Get content of 'd' attribute */
  const pathData = pathGetD({ svgString })

  /* Parse all points Array<{x, y}> */
  const pointsParsed = pointsParse({ pathData })

  /* Remove points behind the graph */
  const pointsCleaned = full ? pointsParsed : pointsClean({ points: pointsParsed })

  /* Generate new 'd' path attribute */
  let dNew = pathGenerate({ points: pointsCleaned })

  /* Replace the current path d attribute  */
  svgString = svgString.replace(/(?<=\sd=")[^"]*(?=")/, dNew)

  /* Get viewBox value */
  let viewBox = (svgString.match(/(?<=viewBox=")[^"]*(?="{1})/g) || ['0 0 0 0'])[0]
  const viewBoxArray = viewBox.split(' ')

  /* Extend viewBox in x direction to the left if full graph requested */
  if (full && pointsCleaned[0].x < 0) {
    const viewBoxArrayOriginal = viewBoxArray.slice()

    /* New viewBox array */
    viewBoxArray[0] = `${pointsCleaned[0].x}`
    viewBoxArray[2] = `${Number(viewBoxArray[2]) + Math.abs(Number(viewBoxArray[0]))}`

    /* Increase width of the SVG by the scale of viewBox increase */
    const scale = Math.abs(Number(viewBoxArray[2])) / Math.abs(Number(viewBoxArrayOriginal[2]))
    const svgWidth = (svgString.match(/(?<=width=")[^"]*(?="{1})/g) || ['500'])[0]
    const newSvgWidth = Number(svgWidth) * scale
    svgString = svgString.replace(/(?<=width=")[^"]*(?="{1})/g, `${newSvgWidth}`)
  }

  viewBox = viewBoxArray.join(' ')

  /* Set viewBox value */
  svgString = svgString.replace(/(?<=viewBox=")[^"]*(?="{1})/g, viewBox)

  return svgString
}
