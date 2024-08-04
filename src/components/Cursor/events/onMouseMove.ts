import {
  svgRefI,
  cursorLineVerticalRefI,
  cursorLineHorizontalRefI,
  cursorLineVerticalTextRefI,
  cursorLineHorizontalTextRefI,
  cursorCircleRefI,
  minRefI,
  maxRefI,
  widthRefI,
  heightRefI,
  countRefI,
  intervalRefI,
  formatCursorXRefI,
  formatCursorYRefI,
} from '../../types'
import { getValueFromGraphPositionX, getValueFromGraphPositionY } from '../utils'
import { isValidRef } from '../../Graph/utils'

export default function onMouseMove({
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
}: {
  e: MouseEvent
  svgRef: svgRefI
  cursorLineVerticalRef: cursorLineVerticalRefI
  cursorLineHorizontalRef: cursorLineHorizontalRefI
  cursorLineVerticalTextRef: cursorLineVerticalTextRefI
  cursorLineHorizontalTextRef: cursorLineHorizontalTextRefI
  cursorCircleRef: cursorCircleRefI
  minRef: minRefI
  maxRef: maxRefI
  widthRef: widthRefI
  heightRef: heightRefI
  countRef: countRefI
  intervalRef: intervalRefI
  formatCursorXRef: formatCursorXRefI
  formatCursorYRef: formatCursorYRefI
}) {
  if (
    isValidRef(svgRef) &&
    isValidRef(cursorCircleRef) &&
    isValidRef(cursorLineVerticalRef) &&
    isValidRef(cursorLineHorizontalRef) &&
    isValidRef(cursorLineHorizontalTextRef) &&
    isValidRef(cursorLineVerticalTextRef) &&
    isValidRef(formatCursorXRef) &&
    isValidRef(formatCursorYRef)
  ) {
    const bounds = svgRef.current.getBoundingClientRect()
    var x = e.clientX - bounds.left
    var y = e.clientY - bounds.top

    /* Set cursor visibility */
    cursorCircleRef.current.setAttribute('visibility', 'visible')
    cursorLineVerticalRef.current.setAttribute('visibility', 'visible')
    cursorLineHorizontalRef.current.setAttribute('visibility', 'visible')
    cursorLineHorizontalTextRef.current.setAttribute('visibility', 'visible')
    cursorLineVerticalTextRef.current.setAttribute('visibility', 'visible')

    /* Setup cursor circle and lines */
    cursorCircleRef.current.setAttribute('cx', `${x}`)
    cursorCircleRef.current.setAttribute('cy', `${y}`)

    cursorLineVerticalRef.current.setAttribute('x1', `${x}`)
    cursorLineVerticalRef.current.setAttribute('x2', `${x}`)

    cursorLineHorizontalRef.current.setAttribute('y1', `${y}`)
    cursorLineHorizontalRef.current.setAttribute('y2', `${y}`)

    /**
     * Handle vertical text
     * - Change horizontal anchor if the text is outside of the graph
     */
    const textVerticalBox = cursorLineVerticalTextRef.current.getBBox()
    if (textVerticalBox.width + x > bounds.width) {
      cursorLineVerticalTextRef.current.setAttribute('text-anchor', 'end')
    } else {
      cursorLineVerticalTextRef.current.setAttribute('text-anchor', 'start')
    }
    cursorLineVerticalTextRef.current.setAttribute('x', `${x}`)

    cursorLineVerticalTextRef.current.setAttribute('y', `${bounds.height}`)
    cursorLineVerticalTextRef.current.textContent = `${formatCursorXRef.current(
      getValueFromGraphPositionX({
        position: x,
        countRef,
        intervalRef,
        widthRef,
      }),
    )}`

    /**
     * Handle horizontal text
     * - Change vertical baseline position if the text is outside of the graph
     */
    const textFontSize = Number(
      window
        .getComputedStyle(cursorLineHorizontalTextRef.current, null)
        .getPropertyValue('font-size')
        .replace('px', ''),
    )

    if (y - textFontSize < 0) {
      cursorLineHorizontalTextRef.current.setAttribute('dominant-baseline', 'hanging')
    } else {
      cursorLineHorizontalTextRef.current.setAttribute('dominant-baseline', 'auto')
    }
    cursorLineHorizontalTextRef.current.setAttribute('y', `${y}`)

    cursorLineHorizontalTextRef.current.setAttribute('x', '0')
    cursorLineHorizontalTextRef.current.textContent = `${formatCursorYRef.current(
      getValueFromGraphPositionY({
        position: y,
        heightRef,
        minRef,
        maxRef,
      }),
    )}`
  }
}
