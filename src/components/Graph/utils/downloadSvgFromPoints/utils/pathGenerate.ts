import { pointI } from '../../../../types'

export default function pathGenerate({ points }: { points: Array<pointI> }): string {
  /**
   * Generate svg path d attribute
   */

  let d = ``

  points.forEach((point, point_i) => {
    if (point_i === 0) {
      d += `M${point.x},${point.y} `
    } else {
      d += `L${point.x},${point.y} `
    }
  })

  d += ''

  return d
}
