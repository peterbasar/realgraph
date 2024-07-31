import { filenameI, pointsRefI } from '../types'
import { mkConfig, generateCsv, download } from 'export-to-csv'
import { isValidRef } from '.'

export default function downloadCsvFromPoints({
  filename,
  pointsRef,
}: {
  filename?: filenameI
  pointsRef: pointsRefI
}): void {
  /**
   * Download csv file with 'filename' filename from current points in the graph
   * within memory boundaries
   */

  const csvConfig = mkConfig({
    useKeysAsHeaders: true,
    filename: filename ?? `realgraph-${new Date().toISOString()}.csv`,
  })

  if (isValidRef(pointsRef) && pointsRef.current.length) {
    const csv = generateCsv(csvConfig)(pointsRef.current)
    download(csvConfig)(csv)
  }
}
