export default function isValidRef<T>(
  t: T,
): t is { [P in keyof T]: P extends 'current' ? NonNullable<T[P]> : T[P] } {
  /**
   * Improves typescript ref object checking by using less code to do so.
   * We no longer need to use ref && ref.current
   */

  if (t && typeof t === 'object' && 'current' in t) {
    return t['current'] != null
  } else {
    console.debug(`isValidRef: Invalid ref value: ${t}, trace: ${Error().stack}`)
    return false
  }
}
