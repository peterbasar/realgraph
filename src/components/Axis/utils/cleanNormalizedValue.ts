export default function cleanNormalizedValue(value: number): number {
  if (value <= 0) return 0
  if (value >= 1) return 1
  return value
}
