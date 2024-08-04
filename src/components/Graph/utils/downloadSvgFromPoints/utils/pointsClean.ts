import { pointI } from '../../../../types'

export default function pointsClean({ points }: { points: Array<pointI> }): Array<pointI> {
  /**
   * Clean parsed points. All points with negative 'x' value will be removed
   * (except first from the right)
   * */

  const pointsCleaned: Array<pointI> = []

  for (let i = 0; i < points.length; i++) {
    if (i < points.length - 1) {
      if (!(points[i].x < 0 && points[i + 1].x < 0)) {
        pointsCleaned.push(points[i])
      }
    } else {
      /* Push the last point */
      pointsCleaned.push(points[i])
    }
  }

  return pointsCleaned
}
