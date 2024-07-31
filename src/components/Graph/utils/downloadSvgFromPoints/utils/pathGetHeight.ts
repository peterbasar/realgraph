export default function pathGetHeight({ svgString }: { svgString: string }): string {
  /**
   * Returns height="123" attribute from <svg height="123" height="123"><path /></svg>
   */

  const match: RegExpMatchArray | null = svgString.match(/(?<=(height="))[^"]*(?=")/)
  return match ? match[0] : ''
}
