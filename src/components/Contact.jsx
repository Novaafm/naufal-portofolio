import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-28 bg-surface border-t border-line overflow-hidden"
    >
      <motion.div style={{ y }} className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-muted uppercase tracking-wider mb-3"
        >
          05 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 max-w-2xl mx-auto"
        >
          Let&#x2019;s connect the dots.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted max-w-md mx-auto mb-10"
        >
          Open to internship and entry-level opportunities in network engineering,
          telecommunications, or web development.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-md bg-signal text-ink font-medium text-sm"
          >
            {profile.email}
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, borderColor: '#4C8BF5' }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-md border border-line text-[#E8EAED] font-medium text-sm"
          >
            LinkedIn ↗
          </motion.a>
        </motion.div>
        <p className="font-mono text-xs text-muted mt-10">{profile.phone} · {profile.location}</p>
      </motion.div>
    </section>
  )
}
