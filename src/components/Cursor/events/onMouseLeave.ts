import {
  cursorLineVerticalRefI,
  cursorLineHorizontalRefI,
  cursorLineVerticalTextRefI,
  cursorLineHorizontalTextRefI,
  cursorCircleRefI,
} from '../../Graph/types'

export default function onMouseLeave({
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
  /* Set cursor line positions */
  cursorLineVerticalRef.current?.setAttribute('visibility', 'hidden')
  cursorLineHorizontalRef.current?.setAttribute('visibility', 'hidden')
  cursorLineVerticalTextRef.current?.setAttribute('visibility', 'hidden')
  cursorLineHorizontalTextRef.current?.setAttribute('visibility', 'hidden')
  cursorCircleRef.current?.setAttribute('visibility', 'hidden')
}
