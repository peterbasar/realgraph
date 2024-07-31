'use client'
import { useEffect, useRef, memo, forwardRef, ForwardedRef } from 'react'
import {
  svgRefI,
  pathRefI,
  intervalRefI,
  widthRefI,
  heightRefI,
  countRefI,
  memoryRefI,
  activeRefI,
  minRefI,
  maxRefI,
  pointsRefI,
  graphExportRefI,
  GraphI,
  formatCursorXRefI,
  formatCursorYRefI,
  formatAxisXRefI,
  formatAxisYRefI,
  isAnimatingI,
  isGraphMovingI,
  graphMovingRateI,
  isGraphMovingLoopI,
  callablesRefI,
  callablesI,
} from './types'
import {
  changeWidth,
  changeHeight,
  callbacking,
  sanitateInput,
  useExportRef,
  isValidRef,
} from './utils'
import useHandlers from './handlers/useHandlers'
import Cursor from '../Cursor/Cursor'
import GraphDefaultProps from './GraphDefaultProps'
import AxisX from '../Axis/AxisX'
import AxisY from '../Axis/AxisY'
import GraphStyleContext from '../GraphStyleContext'
import graphMoving from './utils/graphMoving'
import { getCallables } from './callables'

function Graph(
  {
    isGraphMoving = GraphDefaultProps.isGraphMoving as NonNullable<GraphI['isGraphMoving']>,
    graphMovingRate = GraphDefaultProps.graphMovingRate as NonNullable<GraphI['graphMovingRate']>,
    points = GraphDefaultProps.points as NonNullable<GraphI['points']>,
    width = GraphDefaultProps.width as NonNullable<GraphI['width']>,
    height = GraphDefaultProps.height as NonNullable<GraphI['height']>,
    interval = GraphDefaultProps.interval as NonNullable<GraphI['interval']>,
    count = GraphDefaultProps.count as NonNullable<GraphI['count']>,
    memory = GraphDefaultProps.memory as NonNullable<GraphI['memory']>,
    min = GraphDefaultProps.min as NonNullable<GraphI['min']>,
    max = GraphDefaultProps.max as NonNullable<GraphI['max']>,
    isCallback = GraphDefaultProps.isCallback as NonNullable<GraphI['isCallback']>,
    getValueCallback = GraphDefaultProps.getValueCallback as NonNullable<
      GraphI['getValueCallback']
    >,
    active = GraphDefaultProps.active as NonNullable<GraphI['active']>,
    style = GraphDefaultProps.style as NonNullable<GraphI['style']>,
    formatCursorX = GraphDefaultProps.formatCursorX as NonNullable<GraphI['formatCursorX']>,
    formatCursorY = GraphDefaultProps.formatCursorY as NonNullable<GraphI['formatCursorY']>,
    axisEnableX = GraphDefaultProps.axisEnableX as NonNullable<GraphI['axisEnableX']>,
    axisEnableY = GraphDefaultProps.axisEnableY as NonNullable<GraphI['axisEnableY']>,
    axisWidthY = GraphDefaultProps.axisWidthY as NonNullable<GraphI['axisWidthY']>,
    axisHeightX = GraphDefaultProps.axisHeightX as NonNullable<GraphI['axisHeightX']>,
    axisTitleX = GraphDefaultProps.axisTitleX as NonNullable<GraphI['axisTitleX']>,
    axisTitleY = GraphDefaultProps.axisTitleY as NonNullable<GraphI['axisTitleY']>,
    axisXSectionCount = GraphDefaultProps.axisXSectionCount as NonNullable<
      GraphI['axisXSectionCount']
    >,
    axisYSectionCount = GraphDefaultProps.axisYSectionCount as NonNullable<
      GraphI['axisYSectionCount']
    >,
    formatAxisX = GraphDefaultProps.formatAxisX as NonNullable<GraphI['formatAxisX']>,
    formatAxisY = GraphDefaultProps.formatAxisY as NonNullable<GraphI['formatAxisY']>,
    axisPositionY = GraphDefaultProps.axisPositionY as NonNullable<GraphI['axisPositionY']>,
    axisPositionX = GraphDefaultProps.axisPositionX as NonNullable<GraphI['axisPositionX']>,
  }: GraphI,
  ref: ForwardedRef<graphExportRefI>,
) {
  /* Sanitate input */
  const {
    _isGraphMoving,
    _graphMovingRate,
    _points,
    _width,
    _height,
    _interval,
    _count,
    _memory,
    _active,
    _min,
    _max,
    _axisEnableX,
    _axisEnableY,
    _axisHeightX,
    _axisWidthY,
    _axisTitleX,
    _axisTitleY,
    _axisXSectionCount,
    _axisYSectionCount,
    _axisPositionX,
    _axisPositionY,
    _isCallback,
  } = sanitateInput({
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
  })

  /* Runtime variables */
  const svgRef: svgRefI = useRef(null)
  const pathRef: pathRefI = useRef(null)
  const intervalRef: intervalRefI = useRef(Math.abs(_interval))
  const widthRef: widthRefI = useRef(_width)
  const heightRef: heightRefI = useRef(_height)
  const countRef: countRefI = useRef(_count)
  const memoryRef: memoryRefI = useRef(_memory)
  const activeRef: activeRefI = useRef(_active)
  const minRef: minRefI = useRef(_min)
  const maxRef: maxRefI = useRef(_max)
  let pointsRef: pointsRefI = useRef(Array.isArray(_points) && _points.length ? _points : [])
  const formatCursorXRef: formatCursorXRefI = useRef(formatCursorX)
  const formatCursorYRef: formatCursorYRefI = useRef(formatCursorY)
  const formatAxisXRef: formatAxisXRefI = useRef(formatAxisX)
  const formatAxisYRef: formatAxisYRefI = useRef(formatAxisY)
  const isAnimatingRef = useRef<isAnimatingI>(false)
  const isCallbackRef = useRef<isAnimatingI>(_isCallback)
  const isGraphMovingLoopRef = useRef<isGraphMovingLoopI>(false)
  const isGraphMovingRef = useRef<isGraphMovingI>(_isGraphMoving)
  const graphMovingRateRef = useRef<graphMovingRateI>(_graphMovingRate)
  const callablesRef: callablesRefI = useRef<callablesI>(
    getCallables({
      pathRef,
      pointsRef,
      countRef,
      intervalRef,
      widthRef,
      heightRef,
      minRef,
      maxRef,
      activeRef,
      memoryRef,
    }),
  )

  /* Make variables accessible */
  useExportRef({
    ref,
    pointsRef,
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
    _points,
    points,
    callablesRef,
  })

  /* Handle changes to component props */
  useHandlers({
    callablesRef,
    points: _points,
    pointsRef,
    countRef,
    count: _count,
    width: _width,
    intervalRef,
    interval: _interval,
    heightRef,
    svgRef,
    height,
    maxRef,
    max: _max,
    minRef,
    min: _min,
    active: _active,
    activeRef,
    memory: _memory,
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
    isCallback: _isCallback,
    isCallbackRef,
    isGraphMoving: _isGraphMoving,
    isGraphMovingRef,
    graphMovingRate: _graphMovingRate,
    graphMovingRateRef,
  })

  /* Start rendering */
  useEffect(() => {
    if (
      isValidRef(svgRef) &&
      isValidRef(pathRef) &&
      isValidRef(pointsRef) &&
      isValidRef(intervalRef)
    ) {
      /* SVG and path setup */
      changeWidth({ svgRef, width: _width })
      changeHeight({ svgRef, height: _height })

      callablesRef.current.cleanup()
      callablesRef.current.render()

      graphMoving({
        callablesRef,
        isGraphMovingLoopRef,
        isGraphMovingRef,
        graphMovingRateRef,
      })

      callbacking({
        callablesRef,
        pointsRef,
        intervalRef,
        activeRef,
        getValueCallback,
        isAnimatingRef,
        isCallbackRef,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <GraphStyleContext.Provider value={style}>
      <div
        style={{
          width: 'fit-content',
          height: 'fit-content',
          display: 'flex',
          flexDirection: axisPositionX === 'TOP' ? 'column-reverse' : 'column',
          ...style['graphOuterContainer'],
        }}
        id="graphOuterContainer"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: axisPositionY === 'LEFT' ? 'row-reverse' : 'row',
            flexWrap: 'nowrap',
            ...style['graphInnerContainer'],
          }}
          id="graphInnerContainer"
        >
          <div>
            <svg ref={svgRef} id="graphSvg" style={{ ...style['graphSvg'] }}>
              {/* Value cursor */}
              <Cursor
                svgRef={svgRef}
                width={_width}
                height={_height}
                widthRef={widthRef}
                heightRef={heightRef}
                minRef={minRef}
                maxRef={maxRef}
                countRef={countRef}
                intervalRef={intervalRef}
                formatCursorXRef={formatCursorXRef}
                formatCursorYRef={formatCursorYRef}
              />

              {/* Graph path */}
              <path
                ref={pathRef}
                style={{
                  fill: 'none',
                  stroke: 'black',
                  strokeWidth: 4,
                  ...style['graphPath'],
                }}
                id="graphPath"
              />
            </svg>
          </div>

          {/* Axis */}
          <AxisY
            axisEnableY={_axisEnableY}
            axisTitleY={_axisTitleY}
            graphHeight={_height}
            axisWidthY={_axisWidthY}
            sectionCount={_axisYSectionCount}
            min={_min}
            max={_max}
            formatAxisY={formatAxisY}
            axisPositionY={axisPositionY}
          />
        </div>

        <AxisX
          axisEnableX={_axisEnableX}
          axisTitleX={_axisTitleX}
          axisHeightX={_axisHeightX}
          graphWidth={_width}
          sectionCount={_axisXSectionCount}
          count={_count}
          interval={_interval}
          formatAxisX={formatAxisX}
          axisPositionX={_axisPositionX}
          axisPositionY={_axisPositionY}
        />
      </div>
    </GraphStyleContext.Provider>
  )
}

export default memo(forwardRef<graphExportRefI, GraphI>(Graph))
