import { svgRefI } from '../../../../types'

export default function svgGetString({ svgRef }: { svgRef: svgRefI }): string {
  /**
   * Process svg and prepare the export string
   */

  if (svgRef && svgRef.current) {
    const svg = svgRef.current

    const serializer = new XMLSerializer()
    let svgString: string = ''

    /* Use only svg container and #graphPath */
    const svgCopy = svg.cloneNode(true)
    const svgPath = (svgCopy as HTMLElement).querySelector('#graphPath')

    if (svgPath) {
      const svgContainer = svgCopy.cloneNode(false)
      svgContainer.appendChild(svgPath)
      svgString = serializer.serializeToString(svgContainer)
    } else {
      svgString = serializer.serializeToString(svg)
    }

    svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink=') // Fix root xlink without namespace
    svgString = svgString.replace(/ns\d+:href/g, 'xlink:href') // Safari NS namespace fix.

    if (!svgString.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
      svgString = svgString.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
    }

    if (!svgString.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
      svgString = svgString.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"')
    }

    return svgString
  }
  return ''
}
