import { countI, intervalI } from '../types'

export default function getGraphTimeWidth({
  count,
  interval,
}: {
  count: countI
  interval: intervalI
}) {
  /**
   * Return value that represents time width of the entire visible svg graph.
   * Interval represents time difference between points, if there are 3 points in the graph
   * there are 2 time differences and so graph time width is 2*interval
   */

  if (count === 1) return interval
  return (count - 1) * interval
}
