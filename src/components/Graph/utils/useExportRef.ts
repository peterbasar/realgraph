import { useImperativeHandle, ForwardedRef } from 'react'
import {
  graphExportRefI,
  filenameI,
  svgRefI,
  pathRefI,
  intervalRefI,
  widthRefI,
  heightRefI,
  countRefI,
  memoryRefI,
  minRefI,
  maxRefI,
  pointsRefI,
  formatCursorXRefI,
  formatCursorYRefI,
  formatAxisXRefI,
  formatAxisYRefI,
  countI,
  widthI,
  intervalI,
  heightI,
  maxI,
  minI,
  activeI,
  activeRefI,
  memoryI,
  formatCursorXI,
  formatCursorYI,
  formatAxisXI,
  formatAxisYI,
  axisEnableXI,
  axisEnableYI,
  axisHeightXI,
  axisWidthYI,
  axisTitleXI,
  axisTitleYI,
  axisSectionCountI,
  axisPositionXI,
  axisPositionYI,
  isAnimatingRefI,
  isCallbackI,
  isCallbackRefI,
  isGraphMovingI,
  graphMovingRateI,
  isGraphMovingRefI,
  graphMovingRateRefI,
  pointsI,
  GraphI,
  callablesRefI,
} from '../../types'
import { downloadCsvFromPoints, downloadSvgFromPoints, isValidRef } from '.'

export default function useExportRef({
  ref,
  countRef,
  _count,
  count,
  _width,
  width,
  intervalRef,
  _interval,
  interval,
  heightRef,
  svgRef,
  height,
  maxRef,
  _max,
  max,
  minRef,
  _min,
  min,
  _active,
  active,
  activeRef,
  _memory,
  memory,
  memoryRef,
  pathRef,
  widthRef,
  formatCursorX,
  formatCursorXRef,
  formatCursorY,
  formatCursorYRef,
  formatAxisX,
  formatAxisXRef,
  formatAxisY,
  formatAxisYRef,
  axisEnableX,
  _axisEnableX,
  axisEnableY,
  _axisEnableY,
  axisHeightX,
  _axisHeightX,
  axisWidthY,
  _axisWidthY,
  axisTitleX,
  _axisTitleX,
  axisTitleY,
  _axisTitleY,
  axisXSectionCount,
  _axisXSectionCount,
  axisYSectionCount,
  _axisYSectionCount,
  axisPositionX,
  _axisPositionX,
  axisPositionY,
  _axisPositionY,
  isAnimatingRef,
  _isCallback,
  isCallback,
  isCallbackRef,
  _isGraphMoving,
  _graphMovingRate,
  isGraphMoving,
  graphMovingRate,
  isGraphMovingRef,
  graphMovingRateRef,
  points,
  _points,
  pointsRef,
  callablesRef,
}: {
  ref: ForwardedRef<graphExportRefI>
  countRef: countRefI
  _count: countI
  count: countI
  _width: widthI
  width: widthI
  intervalRef: intervalRefI
  _interval: intervalI
  interval: intervalI
  heightRef: heightRefI
  svgRef: svgRefI
  height: heightI
  maxRef: maxRefI
  _max: maxI
  max: maxI
  minRef: minRefI
  _min: minI
  min: minI
  _active: activeI
  active: activeI
  activeRef: activeRefI
  _memory: memoryI
  memory: memoryI
  memoryRef: memoryRefI
  pathRef: pathRefI
  widthRef: widthRefI
  formatCursorX: formatCursorXI
  formatCursorXRef: formatCursorXRefI
  formatCursorY: formatCursorYI
  formatCursorYRef: formatCursorYRefI
  formatAxisX: formatAxisXI
  formatAxisXRef: formatAxisXRefI
  formatAxisY: formatAxisYI
  formatAxisYRef: formatAxisYRefI
  axisEnableX: axisEnableXI
  _axisEnableX: axisEnableXI
  axisEnableY: axisEnableYI
  _axisEnableY: axisEnableYI
  axisHeightX: axisHeightXI
  _axisHeightX: axisHeightXI
  axisWidthY: axisWidthYI
  _axisWidthY: axisWidthYI
  axisTitleX: axisTitleXI
  _axisTitleX: axisTitleXI
  axisTitleY: axisTitleYI
  _axisTitleY: axisTitleYI
  axisXSectionCount: axisSectionCountI
  _axisXSectionCount: axisSectionCountI
  axisYSectionCount: axisSectionCountI
  _axisYSectionCount: axisSectionCountI
  axisPositionX: axisPositionXI
  _axisPositionX: axisPositionXI
  axisPositionY: axisPositionYI
  _axisPositionY: axisPositionYI
  isAnimatingRef: isAnimatingRefI
  _isCallback: isCallbackI
  isCallback: isCallbackI
  isCallbackRef: isCallbackRefI
  _isGraphMoving: isGraphMovingI
  _graphMovingRate: graphMovingRateI
  isGraphMoving: isGraphMovingI
  graphMovingRate: graphMovingRateI
  isGraphMovingRef: isGraphMovingRefI
  graphMovingRateRef: graphMovingRateRefI
  points: pointsI
  _points: GraphI['points']
  pointsRef: pointsRefI
  callablesRef: callablesRefI
}): void {
  /**
   * Attaches functions to developer-provided ref object
   */

  useImperativeHandle(ref, () => {
    const graphExport: graphExportRefI = {
      downloadCsv: (filename?: filenameI) => {
        downloadCsvFromPoints({
          filename,
          pointsRef,
        })
      },
      downloadSvg: (filename?: filenameI) => {
        downloadSvgFromPoints({
          filename,
          svgRef,
          pointsRef,
          full: false,
        })
      },
      downloadSvgFull: (filename?: filenameI) => {
        downloadSvgFromPoints({
          filename,
          svgRef,
          pointsRef,
          full: true,
        })
      },
      addPoint: callablesRef.current.addPoint,
      getPoints: () => {
        if (isValidRef(pointsRef)) {
          return pointsRef.current
        }
        return []
      },
      render: callablesRef.current.render,
      cleanup: callablesRef.current.cleanup,
      getConfig: () => ({
        ref,
        countRef,
        _count,
        count,
        _width,
        width,
        intervalRef,
        _interval,
        interval,
        heightRef,
        svgRef,
        height,
        maxRef,
        _max,
        max,
        minRef,
        _min,
        min,
        _active,
        active,
        activeRef,
        _memory,
        memory,
        memoryRef,
        pathRef,
        widthRef,
        formatCursorX,
        formatCursorXRef,
        formatCursorY,
        formatCursorYRef,
        formatAxisX,
        formatAxisXRef,
        formatAxisY,
        formatAxisYRef,
        axisEnableX,
        _axisEnableX,
        axisEnableY,
        _axisEnableY,
        axisHeightX,
        _axisHeightX,
        axisWidthY,
        _axisWidthY,
        axisTitleX,
        _axisTitleX,
        axisTitleY,
        _axisTitleY,
        axisXSectionCount,
        _axisXSectionCount,
        axisYSectionCount,
        _axisYSectionCount,
        axisPositionX,
        _axisPositionX,
        axisPositionY,
        _axisPositionY,
        isAnimatingRef,
        _isCallback,
        isCallback,
        isCallbackRef,
        _isGraphMoving,
        _graphMovingRate,
        isGraphMoving,
        graphMovingRate,
        isGraphMovingRef,
        graphMovingRateRef,
        points,
        _points,
        pointsRef,
        callablesRef,
      }),
    }
    return graphExport
  }, [
    ref,
    countRef,
    _count,
    count,
    _width,
    width,
    intervalRef,
    _interval,
    interval,
    heightRef,
    svgRef,
    height,
    maxRef,
    _max,
    max,
    minRef,
    _min,
    min,
    _active,
    active,
    activeRef,
    _memory,
    memory,
    memoryRef,
    pathRef,
    widthRef,
    formatCursorX,
    formatCursorXRef,
    formatCursorY,
    formatCursorYRef,
    formatAxisX,
    formatAxisXRef,
    formatAxisY,
    formatAxisYRef,
    axisEnableX,
    _axisEnableX,
    axisEnableY,
    _axisEnableY,
    axisHeightX,
    _axisHeightX,
    axisWidthY,
    _axisWidthY,
    axisTitleX,
    _axisTitleX,
    axisTitleY,
    _axisTitleY,
    axisXSectionCount,
    _axisXSectionCount,
    axisYSectionCount,
    _axisYSectionCount,
    axisPositionX,
    _axisPositionX,
    axisPositionY,
    _axisPositionY,
    isAnimatingRef,
    _isCallback,
    isCallback,
    isCallbackRef,
    _isGraphMoving,
    _graphMovingRate,
    isGraphMoving,
    graphMovingRate,
    isGraphMovingRef,
    graphMovingRateRef,
    points,
    _points,
    pointsRef,
    callablesRef,
  ])
}
