import { RefObject } from 'react'
import {
  pointsRefI,
  heightRefI,
  minRefI,
  maxRefI,
  pointI,
  widthI,
  countI,
  intervalI,
  countRefI,
  intervalRefI,
  widthRefI,
  activeRefI,
  activeI,
} from '../../types'
import { isValidRef, convertTimeToWidth } from '.'

function calculateX({
  x,
  width,
  count,
  interval,
  active,
  lastPointTime,
}: {
  x: pointI['x']
  width: widthI
  count: countI
  interval: intervalI
  active: activeI
  lastPointTime: pointI['x']
}): pointI['x'] {
  /**
   * Calculate pixel x position in the graph
   */

  const startOffset = active ? Date.now() : lastPointTime

  return (
    convertTimeToWidth({
      x: x - startOffset,
      width,
      count,
      interval,
    }) + width
  )
}

function calculateY({
  heightRef,
  minRef,
  maxRef,
  y,
}: {
  heightRef: RefObject<number>
  minRef: RefObject<number>
  maxRef: RefObject<number>
  y: pointI['y']
}): pointI['y'] {
  /**
   * Calculate pixel y position in the graph
   */

  if (isValidRef(heightRef) && isValidRef(minRef) && isValidRef(maxRef)) {
    const distanceToBotom = y - minRef.current
    const pixelMultiplier = heightRef.current / (maxRef.current - minRef.current)

    /* Svg y direction is inverted (reason for the substraction) */
    return heightRef.current - distanceToBotom * pixelMultiplier
  } else {
    return 0
  }
}

export default function getPathFromPoints({
  pointsRef,
  countRef,
  intervalRef,
  widthRef,
  heightRef,
  minRef,
  maxRef,
  activeRef,
}: {
  pointsRef: pointsRefI
  countRef: countRefI
  intervalRef: intervalRefI
  widthRef: widthRefI
  heightRef: heightRefI
  minRef: minRefI
  maxRef: maxRefI
  activeRef: activeRefI
}): string {
  /**
   * Genearate SVG path string from points, maps value and time points to svg graph x and y
   * pixel positions
   */

  if (
    isValidRef(widthRef) &&
    isValidRef(countRef) &&
    isValidRef(intervalRef) &&
    isValidRef(pointsRef) &&
    isValidRef(activeRef)
  ) {
    let d = ''
    pointsRef.current.forEach((point, point_i) => {
      const x = calculateX({
        width: widthRef.current,
        count: countRef.current,
        interval: intervalRef.current,
        x: point.x,
        active: activeRef.current,
        lastPointTime: pointsRef.current[pointsRef.current.length - 1].x,
      })

      const y = calculateY({
        heightRef,
        minRef,
        maxRef,
        y: point.y,
      })

      d += `${point_i === 0 ? 'M' : 'L'}${x},${y} `
    })
    return d
  }
  return ''
}
