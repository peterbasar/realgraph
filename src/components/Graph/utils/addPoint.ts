import { pointI, pointsRefI } from '../../types'

export default function addPoint({ pointsRef, y }: { pointsRef: pointsRefI; y: pointI['y'] }) {
  pointsRef.current.push({
    x: Date.now(),
    y,
  })
}
