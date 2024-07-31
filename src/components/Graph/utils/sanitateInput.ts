import {
  widthI,
  heightI,
  intervalI,
  countI,
  memoryI,
  minI,
  maxI,
  axisSectionCountI,
  activeI,
  axisEnableXI,
  axisEnableYI,
  axisPositionXI,
  axisPositionYI,
  axisTitleXI,
  axisTitleYI,
  axisHeightXI,
  axisWidthYI,
  isCallbackI,
  GraphI,
  isGraphMovingI,
  graphMovingRateI,
} from '../types'

export interface sanitateInputI {
  isGraphMoving: isGraphMovingI
  graphMovingRate: graphMovingRateI
  points: GraphI['points']
  width: widthI
  height: heightI
  interval: intervalI
  count: countI
  memory: memoryI
  active: activeI
  min: minI
  max: maxI
  axisEnableX: axisEnableXI
  axisEnableY: axisEnableYI
  axisHeightX: axisHeightXI
  axisWidthY: axisWidthYI
  axisTitleX: axisTitleXI
  axisTitleY: axisTitleYI
  axisXSectionCount: axisSectionCountI
  axisYSectionCount: axisSectionCountI
  axisPositionX: axisPositionXI
  axisPositionY: axisPositionYI
  isCallback: isCallbackI
}

export interface sanitateInputOI {
  _isGraphMoving: isGraphMovingI
  _graphMovingRate: graphMovingRateI
  _points: GraphI['points']
  _width: widthI
  _height: heightI
  _interval: intervalI
  _count: countI
  _memory: memoryI
  _active: activeI
  _min: minI
  _max: maxI
  _axisEnableX: axisEnableXI
  _axisEnableY: axisEnableYI
  _axisHeightX: axisHeightXI
  _axisWidthY: axisWidthYI
  _axisTitleX: axisTitleXI
  _axisTitleY: axisTitleYI
  _axisXSectionCount: axisSectionCountI
  _axisYSectionCount: axisSectionCountI
  _axisPositionX: axisPositionXI
  _axisPositionY: axisPositionYI
  _isCallback: isCallbackI
}

export default function sanitateInput({
  isGraphMoving,
  graphMovingRate,
  points,
  width,
  height,
  interval,
  count,
  memory,
  active,
  min,
  max,
  axisEnableX,
  axisEnableY,
  axisHeightX,
  axisWidthY,
  axisTitleX,
  axisTitleY,
  axisXSectionCount,
  axisYSectionCount,
  axisPositionX,
  axisPositionY,
  isCallback,
}: sanitateInputI): sanitateInputOI {
  /**
   * Cleans inputs provided by the developer
   */

  return {
    _isGraphMoving: Boolean(isGraphMoving),
    _graphMovingRate: Math.abs(graphMovingRate) >= 1 ? Math.abs(graphMovingRate) : 1,
    _points: points,
    _width: Math.abs(width),
    _height: Math.abs(height),
    _interval: Math.abs(interval) > 0 ? Math.abs(interval) : 1,
    _count: count <= 1 ? 1 : count,
    _memory: memory <= count ? count : memory,
    _active: Boolean(active),
    _min: min,
    _max: max < min ? min : max,
    _axisEnableX: Boolean(axisEnableX),
    _axisEnableY: Boolean(axisEnableY),
    _axisHeightX: Number(axisEnableX) > 0 ? axisHeightX : 0,
    _axisWidthY: Number(axisEnableY) > 0 ? axisWidthY : 0,
    _axisTitleX: String(axisTitleX),
    _axisTitleY: String(axisTitleY),
    _axisXSectionCount: axisXSectionCount === 0 ? 1 : Math.abs(axisXSectionCount),
    _axisYSectionCount: axisYSectionCount === 0 ? 1 : Math.abs(axisYSectionCount),
    _axisPositionX: axisPositionX === 'TOP' ? 'TOP' : 'BOTTOM',
    _axisPositionY: axisPositionY === 'LEFT' ? 'LEFT' : 'RIGHT',
    _isCallback: Boolean(isCallback),
  }
}
