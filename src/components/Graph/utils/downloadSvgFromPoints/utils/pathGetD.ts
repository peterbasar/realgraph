export default function pathGetD({ svgString }: { svgString: string }): string {
  /**
   * Returns d="xyz" attribute from <svg><path d="xyz" /></svg>
   * */

  const match: RegExpMatchArray | null = svgString.match(/(?<=\sd=")[^"]*(?=")/)
  return match ? match[0] : ''
}
