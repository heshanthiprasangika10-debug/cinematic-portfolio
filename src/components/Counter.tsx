import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  to: number
  suffix?: string
  decimals?: number
}

/** Counts up from zero the first time it scrolls into view. */
export default function Counter({ to, suffix = '', decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(latest),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
