import { useRef, useState, useEffect } from 'react'

export default function StatCounter({ end, suffix = '', prefix = '', label, duration = 2000 }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()
    const numEnd = typeof end === 'number' ? end : parseInt(end, 10) || 0

    function animate(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numEnd))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numEnd)
      }
    }

    requestAnimationFrame(animate)
  }, [started, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-selva-deep">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      {label && (
        <p className="mt-2 text-text-secondary font-body text-sm md:text-base uppercase tracking-widest">
          {label}
        </p>
      )}
    </div>
  )
}
