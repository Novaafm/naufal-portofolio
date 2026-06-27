import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { experience, education } from '../data.js'

function TimelineItem({ e, i, total }) {
  const ref = useRef(null)
  return (
    <motion.li
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.18) }}
    >
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        transition={{ type: 'spring', stiffness: 300, delay: Math.min(i * 0.06, 0.18) + 0.08 }}
        className={`absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 border-ink ${
          e.type === 'network' ? 'bg-signal' : 'bg-terminal'
        }`}
      />
      <p className="font-mono text-xs text-muted mb-1">{e.period}</p>
      <h3 className="font-display text-base font-medium text-[#E8EAED]">{e.title}</h3>
      <p className="text-sm text-muted">{e.org}</p>
    </motion.li>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-20 py-24 bg-surface border-y border-line"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-muted uppercase tracking-wider mb-3"
          >
            03 — Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-medium mb-10"
          >
            Where the work happened.
          </motion.h2>

          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-line" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-px bg-signal"
            />
            <ol className="space-y-8">
              {experience.map((e, i) => (
                <TimelineItem key={i} e={e} i={i} total={experience.length} />
              ))}
            </ol>
          </div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-muted uppercase tracking-wider mb-3"
          >
            Education
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-card border border-line p-6 mt-7"
          >
            <h3 className="font-display text-lg font-medium mb-1">{education.school}</h3>
            <p className="text-sm text-muted mb-1">{education.degree}</p>
            <p className="font-mono text-xs text-muted mb-5">{education.period}</p>
            <ul className="space-y-2">
              {education.notes.map((n, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="text-sm text-[#E8EAED] flex gap-2.5"
                >
                  <span className="text-signal mt-1.5 shrink-0">›</span>
                  <span>{n}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
