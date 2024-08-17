import GraphDefaultStyle from './GraphDefaultStyle'
import { formatGraphValueX, formatGraphValueY } from '../Cursor/utils'
import { formatAxisX, formatAxisY } from '../Axis/utils'
import { GraphI } from '../types'

const GraphDefaultProps: GraphI = {
  isGraphMoving: true,
  graphMovingRate: 90,
  points: undefined,
  width: 300,
  height: 300,
  interval: 200,
  count: 10,
  memory: 40,
  min: 0,
  max: 100,
  isCallback: true,
  getValueCallback: () => 100 * Math.random(),
  active: true,
  style: GraphDefaultStyle,
  formatCursorY: (y: number) => formatGraphValueY(y),
  formatCursorX: (x: number) => formatGraphValueX(x),
  axisEnableX: true,
  axisEnableY: true,
  axisHeightX: 90,
  axisWidthY: 110,
  axisTitleX: 'Time [ms]',
  axisTitleY: 'Value',
  axisXSectionCount: 2,
  axisYSectionCount: 4,
  formatAxisX: formatAxisX,
  formatAxisY: formatAxisY,
  axisPositionX: 'BOTTOM',
  axisPositionY: 'RIGHT',
}

export default GraphDefaultProps
