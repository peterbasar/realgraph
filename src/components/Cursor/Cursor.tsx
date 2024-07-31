import React, { useEffect, useRef, useContext } from 'react'
import {
  svgRefI,
  widthI,
  heightI,
  widthRefI,
  heightRefI,
  cursorCircleRefI,
  cursorLineVerticalRefI,
  cursorLineHorizontalRefI,
  cursorLineVerticalTextRefI,
  cursorLineHorizontalTextRefI,
  minRefI,
  maxRefI,
  countRefI,
  intervalRefI,
  formatCursorXRefI,
  formatCursorYRefI,
} from '../Graph/types'
import { isValidRef, getOr } from '../Graph/utils'
import { onMouseEnter, onMouseLeave, onMouseMove } from './events'
import GraphStyleContext from '../GraphStyleContext'

export default function Cursor({
  svgRef,
  width,
  height,
  widthRef,
  heightRef,
  minRef,
  maxRef,
  countRef,
  intervalRef,
  formatCursorXRef,
  formatCursorYRef,
}: {
  svgRef: svgRefI
  width: widthI
  height: heightI
  widthRef: widthRefI
  heightRef: heightRefI
  minRef: minRefI
  maxRef: maxRefI
  countRef: countRefI
  intervalRef: intervalRefI
  formatCursorXRef: formatCursorXRefI
  formatCursorYRef: formatCursorYRefI
}) {
  /**
   * Returns Cursor component visualizing x and y axis values at a particular mouse position
   * in the graph
   */

  const graphStyleContext = useContext(GraphStyleContext)

  const cursorCircleRef: cursorCircleRefI = useRef(null)
  const cursorLineHorizontalRef: cursorLineHorizontalRefI = useRef(null)
  const cursorLineVerticalRef: cursorLineVerticalRefI = useRef(null)
  const cursorLineHorizontalTextRef: cursorLineHorizontalTextRefI = useRef(null)
  const cursorLineVerticalTextRef: cursorLineVerticalTextRefI = useRef(null)

  useEffect(() => {
    function _onMouseEnter() {
      onMouseEnter({
        cursorLineVerticalRef,
        cursorLineHorizontalRef,
        cursorLineVerticalTextRef,
        cursorLineHorizontalTextRef,
        cursorCircleRef,
      })
    }

    function _onMouseLeave() {
      onMouseLeave({
        cursorLineVerticalRef,
        cursorLineHorizontalRef,
        cursorLineVerticalTextRef,
        cursorLineHorizontalTextRef,
        cursorCircleRef,
      })
    }

    function _onMouseMove(e: MouseEvent) {
      onMouseMove({
        e,
        svgRef,
        cursorLineVerticalRef,
        cursorLineHorizontalRef,
        cursorLineVerticalTextRef,
        cursorLineHorizontalTextRef,
        cursorCircleRef,
        minRef,
        maxRef,
        widthRef,
        heightRef,
        countRef,
        intervalRef,
        formatCursorXRef,
        formatCursorYRef,
      })
    }

    if (isValidRef(svgRef)) {
      const _svgRef = svgRef.current
      _svgRef.addEventListener('mouseenter', _onMouseEnter)
      _svgRef.addEventListener('mouseleave', _onMouseLeave)
      _svgRef.addEventListener('mousemove', _onMouseMove)

      return function cleanup() {
        if (_svgRef !== null) {
          _svgRef.removeEventListener('mouseenter', _onMouseEnter)
          _svgRef.removeEventListener('mouseleave', _onMouseLeave)
          _svgRef.removeEventListener('mousemove', _onMouseMove)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.Fragment>
      <circle
        id="cursorCircle"
        ref={cursorCircleRef}
        cx="0"
        cy="0"
        r={getOr(graphStyleContext, 'cursorCircle.r', '3')}
        visibility="hidden"
      />
      <line
        id="cursorLineVertical"
        ref={cursorLineVerticalRef}
        x1="0"
        y1="0"
        x2="0"
        y2={`${height}`}
        stroke={getOr(graphStyleContext, 'cursorLineVertical.stroke', 'black')}
        strokeDasharray={getOr(graphStyleContext, 'cursorLineVertical.strokeDasharray', '5,10')}
        strokeWidth={getOr(graphStyleContext, 'cursorLineVertical.strokeWidth', '1')}
        visibility="hidden"
      />
      <line
        id="cursorLineHorizontal"
        ref={cursorLineHorizontalRef}
        x1="0"
        y1="0"
        x2={`${width}`}
        y2="0"
        stroke={getOr(graphStyleContext, 'cursorLineHorizontal.stroke', 'black')}
        strokeDasharray={getOr(graphStyleContext, 'cursorLineHorizontal.strokeDasharray', '5,10')}
        strokeWidth={getOr(graphStyleContext, 'cursorLineHorizontal.strokeWidth', '1')}
        visibility="hidden"
      />
      <text
        id="cursorLineHorizontalText"
        ref={cursorLineHorizontalTextRef}
        x="50"
        y="50"
        visibility="hidden"
        textAnchor={getOr(graphStyleContext, 'cursorLineHorizontalText.textAnchor', undefined)}
        dominantBaseline={getOr(
          graphStyleContext,
          'cursorLineHorizontalText.dominantBaseline',
          'auto',
        )}
        dx={getOr(graphStyleContext, 'cursorLineHorizontalText.dx', undefined)}
        dy={getOr(graphStyleContext, 'cursorLineHorizontalText.dy', undefined)}
        rotate={getOr(graphStyleContext, 'cursorLineHorizontalText.rotate', undefined)}
      ></text>
      <text
        id="cursorLineVerticalText"
        ref={cursorLineVerticalTextRef}
        x="50"
        y="50"
        visibility="hidden"
        textAnchor={getOr(graphStyleContext, 'cursorLineHorizontalText.textAnchor', 'start')}
        dominantBaseline={getOr(
          graphStyleContext,
          'cursorLineHorizontalText.dominantBaseline',
          'auto',
        )}
        dx={getOr(graphStyleContext, 'cursorLineHorizontalText.dx', undefined)}
        dy={getOr(graphStyleContext, 'cursorLineHorizontalText.dy', undefined)}
        rotate={getOr(graphStyleContext, 'cursorLineHorizontalText.rotate', undefined)}
      ></text>
    </React.Fragment>
  )
}
