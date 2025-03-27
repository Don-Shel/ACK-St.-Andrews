"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          let startTime: number
          let animationFrameId: number

          const startAnimation = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime

            const percentage = Math.min(progress / duration, 1)
            const currentCount = Math.floor(percentage * end)

            setCount(currentCount)

            if (percentage < 1) {
              animationFrameId = requestAnimationFrame(startAnimation)
            }
          }

          animationFrameId = requestAnimationFrame(startAnimation)

          return () => cancelAnimationFrame(animationFrameId)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [end, duration, hasAnimated])

  return (
    <div ref={countRef} className={`font-bold text-4xl ${className}`}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

