import { motion } from 'framer-motion'
import { profile } from '../data.js'
import { reveal, press } from '../motion.js'

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-28 bg-surface border-t border-line overflow-hidden"
    >
      <motion.div {...reveal} className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
          06 — Contact
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight font-medium mb-6 max-w-2xl mx-auto">
          Let&#x2019;s connect the dots.
        </h2>
        <p className="text-muted max-w-md mx-auto mb-10">
          Open to internship and entry-level opportunities in engineering,
          telecommunications, and technology.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href={`mailto:${profile.email}`}
            {...press}
            className="px-6 py-3 rounded-md bg-signal text-ink font-medium text-sm"
          >
            {profile.email}
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            {...press}
            className="px-6 py-3 rounded-md border border-line hover:border-signal transition-colors text-[#E8EAED] font-medium text-sm"
          >
            LinkedIn ↗
          </motion.a>
          <motion.a
            href={profile.cv}
            download
            {...press}
            className="px-6 py-3 rounded-md border border-line hover:border-signal transition-colors text-[#E8EAED] font-medium text-sm"
          >
            Download CV
          </motion.a>
        </div>
        <p className="font-mono text-xs text-muted mt-10">{profile.phone} · {profile.location}</p>
      </motion.div>
    </section>
  )
}
