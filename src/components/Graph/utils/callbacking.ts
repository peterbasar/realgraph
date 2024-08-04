import { callbackingI, pointI } from '../../types'
import { isValidRef } from '.'

const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function callbacking({
  callablesRef,
  pointsRef,
  intervalRef,
  activeRef,
  getValueCallback,
  isAnimatingRef,
  isCallbackRef,
}: callbackingI): Promise<Boolean> {
  /**
   * Infinite callbacking loop, performing getValueCallback if isCallback is true,
   * adds that point to the graph and rerenders
   */

  if (
    isValidRef(intervalRef) &&
    isValidRef(pointsRef) &&
    isValidRef(activeRef) &&
    isValidRef(isAnimatingRef) &&
    isValidRef(isCallbackRef) &&
    isValidRef(callablesRef)
  ) {
    try {
      /* Make sure we start only 1 animation loop */
      if (isAnimatingRef.current === false) {
        isAnimatingRef.current = true

        /* Main animation loop that should continue indefinitely */
        while (true) {
          /* Callback if active */
          if (activeRef.current) {
            await delay(intervalRef.current)
            if (activeRef.current) {
              /**
               * Calculate new y value
               */
              let yNew: pointI['y'] = 0
              if (isCallbackRef.current === true) {
                /* Callback is on - request new value */
                yNew = Math.round(getValueCallback() * 1000) / 1000

                callablesRef.current.addPoint(yNew)
                callablesRef.current.cleanup()
                callablesRef.current.render()
              }
            }
          }

          /* Pause while loop execution for 500ms if not active */
          if (!activeRef.current) {
            await delay(500)
          }
        }
      }
    } catch {}
  }

  return new Promise((resolve) => resolve(false))
}
