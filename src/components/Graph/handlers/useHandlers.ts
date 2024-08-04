import {
  useHandleChangePoints,
  useHandleChangeCount,
  useHandleChangeInterval,
  useHandleChangeHeight,
  useHandleChangeMax,
  useHandleChangeMemory,
  useHandleChangeMin,
  useHandleChangeWidth,
  useHandleChangeActive,
  useHandleChangeFormatCursorXY,
  useHandleChangeFormatAxisXY,
  useHandleChangeIsCallback,
  useHandleChangeMoving,
} from '.'

import {
  pointsRefI,
  countRefI,
  countI,
  widthI,
  intervalRefI,
  intervalI,
  heightRefI,
  svgRefI,
  heightI,
  maxRefI,
  maxI,
  minRefI,
  minI,
  memoryI,
  memoryRefI,
  pathRefI,
  widthRefI,
  activeI,
  activeRefI,
  formatCursorXI,
  formatCursorXRefI,
  formatCursorYI,
  formatCursorYRefI,
  formatAxisXI,
  formatAxisXRefI,
  formatAxisYI,
  formatAxisYRefI,
  isCallbackI,
  isCallbackRefI,
  GraphI,
  isGraphMovingI,
  isGraphMovingRefI,
  graphMovingRateI,
  graphMovingRateRefI,
  callablesRefI,
} from '../../types'

export default function useHandlers({
  callablesRef,
  points,
  pointsRef,
  countRef,
  count,
  width,
  intervalRef,
  interval,
  heightRef,
  svgRef,
  height,
  maxRef,
  max,
  minRef,
  min,
  active,
  activeRef,
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
  isCallback,
  isCallbackRef,
  isGraphMoving,
  isGraphMovingRef,
  graphMovingRate,
  graphMovingRateRef,
}: {
  callablesRef: callablesRefI
  points: GraphI['points']
  pointsRef: pointsRefI
  countRef: countRefI
  count: countI
  width: widthI
  intervalRef: intervalRefI
  interval: intervalI
  heightRef: heightRefI
  svgRef: svgRefI
  height: heightI
  maxRef: maxRefI
  max: maxI
  minRef: minRefI
  min: minI
  active: activeI
  activeRef: activeRefI
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
  isCallback: isCallbackI
  isCallbackRef: isCallbackRefI
  isGraphMoving: isGraphMovingI
  isGraphMovingRef: isGraphMovingRefI
  graphMovingRate: graphMovingRateI
  graphMovingRateRef: graphMovingRateRefI
}) {
  useHandleChangePoints({
    callablesRef,
    pointsRef,
    points,
    pathRef,
  })

  useHandleChangeCount({
    callablesRef,
    countRef,
    count,
  })

  useHandleChangeInterval({
    intervalRef,
    interval,
  })

  useHandleChangeHeight({
    callablesRef,
    height,
    heightRef,
    svgRef,
  })

  useHandleChangeMax({
    callablesRef,
    maxRef,
    max,
  })

  useHandleChangeMemory({
    memory,
    memoryRef,
  })

  useHandleChangeMin({
    callablesRef,
    minRef,
    min,
  })

  useHandleChangeWidth({
    callablesRef,
    pointsRef,
    svgRef,
    widthRef,
    width,
  })

  useHandleChangeActive({
    callablesRef,
    active,
    activeRef,
  })

  useHandleChangeFormatCursorXY({
    formatCursorX,
    formatCursorXRef,
    formatCursorY,
    formatCursorYRef,
  })

  useHandleChangeFormatAxisXY({
    formatAxisX,
    formatAxisXRef,
    formatAxisY,
    formatAxisYRef,
  })

  useHandleChangeIsCallback({
    isCallback,
    isCallbackRef,
  })

  useHandleChangeMoving({
    isGraphMoving,
    isGraphMovingRef,
    graphMovingRate,
    graphMovingRateRef,
  })
}
