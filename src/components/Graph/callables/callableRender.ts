import {
  activeRefI,
  callableRenderI,
  countRefI,
  heightRefI,
  intervalRefI,
  maxRefI,
  minRefI,
  pathRefI,
  pointsRefI,
  widthRefI,
} from '../../types'
import renderPath from '../utils/renderPath'

export default function callableRender({
  pathRef,
  pointsRef,
  countRef,
  intervalRef,
  widthRef,
  heightRef,
  minRef,
  maxRef,
  activeRef,
}: {
  pathRef: pathRefI
  pointsRef: pointsRefI
  countRef: countRefI
  intervalRef: intervalRefI
  widthRef: widthRefI
  heightRef: heightRefI
  minRef: minRefI
  maxRef: maxRefI
  activeRef: activeRefI
}): callableRenderI {
  /**
   * Create a callable no-parameter function for renderPath()
   */

  return () => {
    renderPath({
      pathRef,
      pointsRef,
      countRef,
      intervalRef,
      widthRef,
      heightRef,
      minRef,
      maxRef,
      activeRef,
    })
  }
}
