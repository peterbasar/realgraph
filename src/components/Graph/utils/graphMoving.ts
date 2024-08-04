import { graphMovingI } from '../../types'
import { isValidRef } from '.'

const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function graphMoving({
  callablesRef,
  isGraphMovingLoopRef,
  isGraphMovingRef,
  graphMovingRateRef,
}: graphMovingI): Promise<Boolean> {
  /**
   * Moves graph to the left to match time on x axis at 'graphMovingRate' rate
   */

  if (
    isValidRef(isGraphMovingRef) &&
    isValidRef(graphMovingRateRef) &&
    isValidRef(isGraphMovingLoopRef) &&
    isValidRef(callablesRef)
  ) {
    try {
      /* Make sure we start only 1 animation loop */
      if (isGraphMovingLoopRef.current === false) {
        isGraphMovingLoopRef.current = true

        /* Main animation loop that should continue indefinitely */
        while (true) {
          if (isGraphMovingRef.current && graphMovingRateRef.current > 0) {
            await delay(Math.round(1000 / graphMovingRateRef.current))

            callablesRef.current.cleanup()
            callablesRef.current.render()
          }

          /* Pause while loop execution for 500ms if not active */
          if (!isGraphMovingRef.current) {
            await delay(500)
          }
        }
      }
    } catch {}
  }

  return new Promise((resolve) => resolve(false))
}
