import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { experience, education } from '../data.js'
import { reveal } from '../motion.js'

function TimelineItem({ e }) {
  return (
    <li className="relative">
      <span
        className={`absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 border-ink ${e.type === 'network' ? 'bg-signal' : e.type === 'admin' ? 'bg-amber' : 'bg-terminal'
          }`}
      />
      <p className="font-mono text-xs text-muted mb-1">{e.period}</p>
      <h3 className="font-display text-base font-medium text-[#E8EAED]">{e.title}</h3>
      <p className="text-sm text-muted">{e.org}</p>
    </li>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.4'],
  })

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-20 py-24 bg-surface border-y border-line"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-16">
        <motion.div {...reveal}>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
            04 — Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight font-medium mb-10">
            Where the work happened.
          </h2>

          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-line" />
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-0 top-0 bottom-0 w-px bg-signal origin-top"
            />
            <ol className="space-y-8">
              {experience.map((e, i) => (
                <TimelineItem key={i} e={e} />
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div {...reveal}>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
            Education
          </p>
          <div className="rounded-lg bg-card border border-line p-6 mt-7">
            <h3 className="font-display text-lg font-medium mb-1">{education.school}</h3>
            <p className="text-sm text-muted mb-1">{education.degree}</p>
            <p className="font-mono text-xs text-muted mb-5">{education.period}</p>
            <ul className="space-y-2">
              {education.notes.map((n, i) => (
                <li key={i} className="text-sm text-[#E8EAED] flex gap-2.5">
                  <span className="text-signal mt-1.5 shrink-0">›</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
