import {
  cursorLineVerticalRefI,
  cursorLineHorizontalRefI,
  cursorLineVerticalTextRefI,
  cursorLineHorizontalTextRefI,
  cursorCircleRefI,
} from '../../types'
import { isValidRef } from '../../Graph/utils'

export default function onMouseEnter({
  cursorLineVerticalRef,
  cursorLineHorizontalRef,
  cursorLineVerticalTextRef,
  cursorLineHorizontalTextRef,
  cursorCircleRef,
}: {
  cursorLineVerticalRef: cursorLineVerticalRefI
  cursorLineHorizontalRef: cursorLineHorizontalRefI
  cursorLineVerticalTextRef: cursorLineVerticalTextRefI
  cursorLineHorizontalTextRef: cursorLineHorizontalTextRefI
  cursorCircleRef: cursorCircleRefI
}) {
  /* Set cursor visibility */
  if (
    isValidRef(cursorLineVerticalRef) &&
    isValidRef(cursorLineHorizontalRef) &&
    isValidRef(cursorLineVerticalTextRef) &&
    isValidRef(cursorLineHorizontalTextRef) &&
    isValidRef(cursorCircleRef)
  ) {
    cursorLineVerticalRef.current.setAttribute('visibility', 'visible')
    cursorLineHorizontalRef.current.setAttribute('visibility', 'visible')
    cursorLineVerticalTextRef.current.setAttribute('visibility', 'visible')
    cursorLineHorizontalTextRef.current.setAttribute('visibility', 'visible')
    cursorCircleRef.current.setAttribute('visibility', 'visible')
  }
}
