import GraphDefaultStyle from './GraphDefaultStyle'
import { formatGraphValueX, formatGraphValueY } from '../Cursor/utils'
import { formatAxisX, formatAxisY } from '../Axis/utils'
import { GraphI } from './types'

const GraphDefaultProps: GraphI = {
  isGraphMoving: true,
  graphMovingRate: 60,
  points: undefined,
  width: 500,
  height: 500,
  interval: 200,
  count: 10,
  memory: 20,
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
  axisHeightX: 70,
  axisWidthY: 110,
  axisTitleX: '',
  axisTitleY: '',
  axisXSectionCount: 2,
  axisYSectionCount: 2,
  formatAxisX: formatAxisX,
  formatAxisY: formatAxisY,
  axisPositionX: 'BOTTOM',
  axisPositionY: 'RIGHT',
}

export default GraphDefaultProps
