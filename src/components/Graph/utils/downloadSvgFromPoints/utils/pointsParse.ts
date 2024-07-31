import { pointI } from '../../../types'

export default function pointsParse({ pathData }: { pathData: string }): Array<pointI> {
  /**
   * Parses d attribute of path. Expected format pathData="M150,5 L7,5 L225,200".
   */

  const pointsRaw = pathData.trim().split(' ')
  const pointsParsed: Array<pointI> = []

  pointsRaw.forEach((point) => {
    pointsParsed.push({
      x: Number(point.slice(1).split(',')[0]),
      y: Number(point.slice(1).split(',')[1]),
    })
  })

  return pointsParsed
}
