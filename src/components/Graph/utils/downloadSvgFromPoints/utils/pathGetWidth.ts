export default function pathGetwidth({ svgString }: { svgString: string }): string {
  /**
   * Returns width="123" attribute from <svg height="123" width="123"><path /></svg>
   */

  const match: RegExpMatchArray | null = svgString.match(/(?<=(width="))[^"]*(?=")/)
  return match ? match[0] : ''
}
