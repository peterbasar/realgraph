export default function downloadSvgFromString({
  svgString,
  filename,
}: {
  svgString: string
  filename?: string
}): void {
  /**
   * Execute download for SVG specified svgString with filename 'filename'
   */

  /* Prepare link */
  const preface = '<?xml version="1.0" standalone="no"?>\r\n'
  const svgBlob = new Blob([preface, svgString], {
    type: 'image/svg+xml;charset=utf-8',
  })
  const svgUrl = URL.createObjectURL(svgBlob)

  /* Create download link */
  const downloadLink = document.createElement('a')
  downloadLink.href = svgUrl
  downloadLink.download = filename ?? `realgraph-${new Date().toISOString()}.svg`

  /* Append, execute, remove from document */
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}
