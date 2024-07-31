import React, { RefObject, MutableRefObject, CSSProperties } from 'react'

export type widthI = number

export type heightI = number

export type countI = number

export type intervalI = number

export type filenameI = string

export type minI = number

export type maxI = number

export type activeI = boolean

export type memoryI = number

export type downloadCsvI = ({ filename }: { filename?: string }) => void

export type downloadSvgI = ({ filename }: { filename?: filenameI }) => void

export type downloadSvgFullI = ({ filename }: { filename?: filenameI }) => void

export type configI = {
  pointsRef: pointsRefI
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
  callablesRef: callablesRefI
}

export type getConfigI = () => configI

export type graphExportRefI = {
  downloadCsv: downloadCsvI
  downloadSvg: downloadSvgI
  downloadSvgFull: downloadSvgFullI
  addPoint: callableAddPointI
  render: callableRenderI
  cleanup: callableCleanupI
  getConfig: getConfigI
}

export type svgRefI = RefObject<SVGSVGElement>

export type pathRefI = RefObject<SVGPathElement>

export type intervalRefI = MutableRefObject<intervalI>

export type widthRefI = MutableRefObject<widthI>

export type heightRefI = MutableRefObject<heightI>

export type countRefI = MutableRefObject<countI>

export type memoryRefI = MutableRefObject<memoryI>

export type activeRefI = MutableRefObject<activeI>

export type minRefI = MutableRefObject<minI>

export type maxRefI = MutableRefObject<maxI>

export type pointsRefI = MutableRefObject<pointsI>

export type pointsI = Array<pointI>

export type pointI = {
  x: number
  y: number
}

export type getValueCallbackI = () => number

export type isCallbackI = boolean

export type isCallbackRefI = MutableRefObject<isCallbackI>

export type isGraphMovingI = boolean

export type isGraphMovingRefI = MutableRefObject<isGraphMovingI>

export type isGraphMovingLoopI = boolean

export type isGraphMovingLoopRefI = MutableRefObject<isGraphMovingLoopI>

export type graphMovingRateI = number

export type graphMovingRateRefI = MutableRefObject<graphMovingRateI>

export type addValueFunctionI = (y: pointI['y']) => void

export type addValueI = undefined | addValueFunctionI

export type formatCursorXI = (value: number) => string | number

export type formatCursorXRefI = MutableRefObject<formatCursorXI>

export type formatCursorYI = (value: number) => string | number

export type formatCursorYRefI = MutableRefObject<formatCursorYI>

export interface callbackingI {
  callablesRef: callablesRefI
  pointsRef: pointsRefI
  intervalRef: intervalRefI
  activeRef: activeRefI
  getValueCallback: getValueCallbackI
  isAnimatingRef: isAnimatingRefI
  isCallbackRef: isCallbackRefI
}

export interface graphMovingI {
  callablesRef: callablesRefI
  isGraphMovingLoopRef: isGraphMovingLoopRefI
  isGraphMovingRef: isGraphMovingRefI
  graphMovingRateRef: graphMovingRateRefI
}

/* Cursor */

export type cursorCircleRefI = RefObject<SVGCircleElement>

export type cursorLineVerticalRefI = RefObject<SVGLineElement>

export type cursorLineHorizontalRefI = RefObject<SVGLineElement>

export type cursorLineVerticalTextRefI = RefObject<SVGTextElement>

export type cursorLineHorizontalTextRefI = RefObject<SVGTextElement>

export interface GraphI {
  points?: pointsI
  width?: widthI
  height?: heightI
  interval?: intervalI
  count?: countI
  memory?: memoryI
  min?: minI
  max?: maxI
  style?: GraphStyleI
  isCallback?: isCallbackI
  getValueCallback?: getValueCallbackI
  active?: boolean
  formatCursorY?: formatCursorYI
  formatCursorX?: formatCursorXI
  axisEnableX?: boolean
  axisEnableY?: boolean
  axisHeightX?: number
  axisWidthY?: number
  axisTitleX?: axisTitleXI
  axisTitleY?: axisTitleYI
  axisXSectionCount?: axisSectionCountI
  axisYSectionCount?: axisSectionCountI
  formatAxisX?: formatAxisXI
  formatAxisY?: formatAxisYI
  axisPositionX?: axisPositionXI
  axisPositionY?: axisPositionYI
  isGraphMoving?: isGraphMovingI
  graphMovingRate?: graphMovingRateI
}

/* Axis */

export type axisSectionCountI = number

export type axisHeightXI = number

export type axisWidthYI = number

export interface axisYSectionI {
  key: number | string
  top: number
  value: string | number
}

export interface axisXSectionI {
  key: number | string
  left: number
  value: string | number
}

export type formatAxisYI = (value: number) => number | string

export type formatAxisXI = (value: number) => number | string

export type formatAxisYRefI = MutableRefObject<formatAxisYI>

export type formatAxisXRefI = MutableRefObject<formatAxisXI>

export type axisPositionYI = 'LEFT' | 'RIGHT'

export type axisTextAnchorY = 'start' | 'end'

export type axisPositionXI = 'TOP' | 'BOTTOM'

export type axisDominantBaselineX = 'auto' | 'hanging'

export type axisTitleXI = string

export type axisEnableXI = boolean

export type axisEnableYI = boolean

export type axisTitleYI = string

export type isAnimatingI = boolean

export type isAnimatingRefI = MutableRefObject<isAnimatingI>

export type callableAddPointI = (y: pointI['y']) => void

export type callableRenderI = () => void

export type callableCleanupI = () => void

export type callablesI = {
  addPoint: callableAddPointI
  render: callableRenderI
  cleanup: callableCleanupI
}

export type callablesRefI = MutableRefObject<callablesI>

/* Graph styling */
export interface GraphStyleI {
  graphOuterContainer?: CSSProperties
  graphInnerContainer?: CSSProperties
  graphSvg?: CSSProperties
  cursorLineHorizontal?: {
    stroke?: React.SVGLineElementAttributes<SVGLineElement>['stroke']
    strokeDasharray?: React.SVGLineElementAttributes<SVGLineElement>['strokeDasharray']
    strokeWidth?: React.SVGLineElementAttributes<SVGLineElement>['strokeWidth']
  }
  cursorLineVertical?: {
    stroke?: React.SVGLineElementAttributes<SVGLineElement>['stroke']
    strokeDasharray?: React.SVGLineElementAttributes<SVGLineElement>['strokeDasharray']
    strokeWidth?: React.SVGLineElementAttributes<SVGLineElement>['strokeWidth']
  }
  cursorCircle?: {
    r?: React.SVGProps<SVGCircleElement>['r']
  }
  cursorLineHorizontalText?: {
    textAnchor?: React.SVGTextElementAttributes<SVGTextElement>['textAnchor']
    dominantBaseline?: React.SVGTextElementAttributes<SVGTextElement>['dominantBaseline']
    dx?: React.SVGTextElementAttributes<SVGTextElement>['dx']
    dy?: React.SVGTextElementAttributes<SVGTextElement>['dy']
    rotate?: React.SVGTextElementAttributes<SVGTextElement>['rotate']
  }
  cursorLineVerticalText?: {
    textAnchor?: React.SVGTextElementAttributes<SVGTextElement>['textAnchor']
    dominantBaseline?: React.SVGTextElementAttributes<SVGTextElement>['dominantBaseline']
    dx?: React.SVGTextElementAttributes<SVGTextElement>['dx']
    dy?: React.SVGTextElementAttributes<SVGTextElement>['dy']
    rotate?: React.SVGTextElementAttributes<SVGTextElement>['rotate']
  }
  graphPath?: CSSProperties | undefined
  axisYContainer?: CSSProperties | undefined
  axisYTitle?: CSSProperties | undefined
  axisYSvg?: CSSProperties | undefined
  axisYLine?: {
    stroke?: React.SVGLineElementAttributes<SVGLineElement>['stroke']
    strokeDasharray?: React.SVGLineElementAttributes<SVGLineElement>['strokeDasharray']
    strokeWidth?: React.SVGLineElementAttributes<SVGLineElement>['strokeWidth']
  }
  axisYText?: {
    dx?: React.SVGTextElementAttributes<SVGTextElement>['dx']
    dy?: React.SVGTextElementAttributes<SVGTextElement>['dy']
    rotate?: React.SVGTextElementAttributes<SVGTextElement>['rotate']
    dominantBaseline?: React.SVGTextElementAttributes<SVGTextElement>['dominantBaseline']
  }
  axisXOuterContainer?: CSSProperties | undefined
  axisXInnerContainer?: CSSProperties | undefined
  axisXTitle?: CSSProperties | undefined
  axisXSvg?: CSSProperties | undefined
  axisXLine?: {
    stroke?: React.SVGLineElementAttributes<SVGLineElement>['stroke']
    strokeDasharray?: React.SVGLineElementAttributes<SVGLineElement>['strokeDasharray']
    strokeWidth?: React.SVGLineElementAttributes<SVGLineElement>['strokeWidth']
  }
  axisXText?: {
    dx?: React.SVGTextElementAttributes<SVGTextElement>['dx']
    dy?: React.SVGTextElementAttributes<SVGTextElement>['dy']
    rotate?: React.SVGTextElementAttributes<SVGTextElement>['rotate']
    textAnchor?: React.SVGTextElementAttributes<SVGTextElement>['textAnchor']
  }
}
