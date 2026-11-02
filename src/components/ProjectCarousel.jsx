import { motion, animate, useMotionValue, useReducedMotion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'
import { spring, flick } from '../motion.js'

// Where a flick would come to rest, using the same decay as scroll momentum.
function project(velocity, decelerationRate = 0.99) {
  return (velocity / 1000) * decelerationRate / (1 - decelerationRate)
}

const CONTROL_CLASS =
  'material-chip absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-[#E8EAED] flex items-center justify-center transition-opacity before:absolute before:-inset-1.5 [@media(hover:hover)]:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 disabled:!opacity-0 disabled:pointer-events-none active:scale-95'

export default function ProjectCarousel({ images, alt, kind, fit = 'cover' }) {
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const containerRef = useRef(null)
  const indexRef = useRef(0)
  const x = useMotionValue(0)
  const reduced = useReducedMotion()

  const count = images ? images.length : 0

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => {
      const w = el.offsetWidth
      setWidth(w)
      x.set(-indexRef.current * w)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [x])

  const accentClass =
    kind === 'network' ? 'bg-signal-dim/10' :
      kind === 'admin' ? 'bg-amber/10' :
        'bg-terminal-dim/10'

  const placeholderText =
    kind === 'network' ? 'Add a site / rack photo here' :
      kind === 'admin' ? 'Add a documentation photo here' :
        'Add a screenshot here'

  if (count === 0) {
    return (
      <div
        className={`aspect-[16/10] rounded-md border border-dashed border-line flex flex-col items-center justify-center gap-2 ${accentClass}`}
      >
        <span className="font-mono text-[0.6875rem] text-muted text-center px-4">
          {placeholderText}
        </span>
        <span className="font-mono text-[0.625rem] text-muted/60">/public/images/...</span>
      </div>
    )
  }

  const hasMultiple = count > 1
  const canDrag = hasMultiple && !reduced

  // Always springs from the live position, so a moving track can be redirected.
  const goTo = (i, transition = spring) => {
    indexRef.current = i
    setIndex(i)
    if (reduced) x.set(-i * width)
    else animate(x, -i * width, transition)
  }

  const onDragEnd = (_, info) => {
    const velocity = info.velocity.x
    const nearest = Math.round(-(x.get() + project(velocity)) / width)
    // One photo per gesture, however hard the flick
    const target = Math.max(index - 1, Math.min(index + 1, nearest))
    goTo(Math.max(0, Math.min(count - 1, target)), { ...flick, velocity })
  }

  return (
    <div
      ref={containerRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
      className="relative aspect-[16/10] rounded-md overflow-hidden bg-card group"
    >
      <motion.div
        drag={canDrag ? 'x' : false}
        dragConstraints={{ left: -(count - 1) * width, right: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
        onDragEnd={onDragEnd}
        style={{ x }}
        className={`absolute inset-y-0 left-0 flex w-full ${canDrag ? 'cursor-grab active:cursor-grabbing' : ''}`}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} — photo ${i + 1} of ${count}`}
            aria-hidden={i !== index}
            draggable={false}
            loading="lazy"
            decoding="async"
            className={`w-full h-full shrink-0 select-none ${fit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
          />
        ))}
      </motion.div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous photo"
            className={`${CONTROL_CLASS} left-2`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === count - 1}
            aria-label="Next photo"
            className={`${CONTROL_CLASS} right-2`}
          >
            ›
          </button>

          <div className="absolute bottom-0 inset-x-0 flex items-center justify-center">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className="px-[3px] py-2.5"
              >
                <span
                  className={`block h-1.5 rounded-full transition-[width,background-color] ${i === index ? 'w-4 bg-[#E8EAED]' : 'w-1.5 bg-[#E8EAED]/40'}`}
                />
              </button>
            ))}
          </div>

          <span className="material-chip absolute top-2.5 right-2.5 font-mono text-[0.625rem] text-[#E8EAED] px-1.5 py-0.5 rounded pointer-events-none">
            {index + 1}/{count}
          </span>
        </>
      )}
    </div>
  )
}
