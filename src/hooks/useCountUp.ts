import { useEffect, useState } from 'react'
import type { UseCountUpOptions } from '@/models/countUp'
import {
  formatCountUpRange,
  parseCountUpRange,
} from '@/utils/countUp'

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3
}

export function useCountUp(
  value: string,
  active: boolean,
  { duration = 1400 }: UseCountUpOptions = {},
) {
  const [display, setDisplay] = useState(() => {
    const range = parseCountUpRange(value)
    return range ? formatCountUpRange({ from: 0, to: 0 }) : value
  })

  useEffect(() => {
    const range = parseCountUpRange(value)

    if (!active || !range) {
      if (!range) setDisplay(value)
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }

    let frameId = 0
    const startTime = performance.now()

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = easeOutCubic(progress)

      setDisplay(
        formatCountUpRange({
          from: Math.round(range.from * eased),
          to: Math.round(range.to * eased),
        }),
      )

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [active, duration, value])

  return display
}
