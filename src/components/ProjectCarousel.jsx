import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCarousel({ images, alt, kind }) {
  const [index, setIndex] = useState(0)

  const accentClass =
    kind === 'network' ? 'bg-signal-dim/10' :
      kind === 'admin' ? 'bg-amber/10' :
        'bg-terminal-dim/10'

  const placeholderText =
    kind === 'network' ? 'Add a site / rack photo here' :
      kind === 'admin' ? 'Add a documentation photo here' :
        'Add a screenshot here'

  if (!images || images.length === 0) {
    return (
      <div
        className={`aspect-[16/10] rounded-md border border-dashed border-line flex flex-col items-center justify-center gap-2 ${accentClass}`}
      >
        <span className="font-mono text-[11px] text-muted text-center px-4">
          {placeholderText}
        </span>
        <span className="font-mono text-[10px] text-muted/60">/public/images/...</span>
      </div>
    )
  }

  const hasMultiple = images.length > 1
  const next = (e) => {
    e.stopPropagation()
    setIndex((i) => (i + 1) % images.length)
  }
  const prev = (e) => {
    e.stopPropagation()
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  return (
    <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-card group">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${alt} — photo ${index + 1} of ${images.length}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-ink/60 text-[#E8EAED] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm hover:bg-ink/80"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-ink/60 text-[#E8EAED] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm hover:bg-ink/80"
          >
            ›
          </button>

          <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex(i)
                }}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-4 bg-[#E8EAED]' : 'w-1.5 bg-[#E8EAED]/40'
                  }`}
              />
            ))}
          </div>

          <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-[#E8EAED] bg-ink/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  )
}