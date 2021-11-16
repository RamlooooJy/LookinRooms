import {MutableRefObject, useLayoutEffect, useRef, useState} from "react";

export const useScreenType = (): {
  ref: MutableRefObject<HTMLDivElement | null>
  data: { height: number, width: number }
} => {
  const [data, setData] = useState({height: 0, width: 0})
  const ref = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setData({
          width: ref.current?.clientWidth,
          height: ref.current?.clientHeight,
        })
      }
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  })

  return {ref, data}
}
