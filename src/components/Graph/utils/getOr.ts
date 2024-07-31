export default function getOr(object: any, path: string, defaultValue: any): any {
  /**
   * See lodash package getOr functionality
   */

  const dot = path.indexOf('.')

  if (object === undefined) {
    return defaultValue || undefined
  }

  if (dot === -1) {
    if (path.length && path in object) {
      return object[path]
    }
    return defaultValue || undefined
  }

  return getOr(object[path.substring(0, dot)], path.substring(dot + 1), defaultValue)
}
