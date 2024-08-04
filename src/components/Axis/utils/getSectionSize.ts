import { heightI, widthI, axisSectionCountI } from '../../types'

export default function getSectionSize({
  length,
  sectionCount,
}: {
  length: heightI | widthI
  sectionCount: axisSectionCountI
}): number {
  /**
   * Returns section size (distance between the points and the boundaries).
   * Where '*' is point, and '|' is the boundrary. input:1 -> |*|, input:2 -> |*|*|
   */
  return length / (sectionCount + 1)
}
