import { callableAddPointI, pointsRefI } from '../../types'
import addPoint from '../utils/addPoint'

export default function callableAddPoint({
  pointsRef,
}: {
  pointsRef: pointsRefI
}): callableAddPointI {
  return (y) => {
    addPoint({
      pointsRef,
      y,
    })
  }
}
