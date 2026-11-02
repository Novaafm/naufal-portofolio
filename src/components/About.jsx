import { motion } from 'framer-motion'
import { profile, aboutFacts } from '../data.js'

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-24 bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[320px_1fr] gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[280px] md:max-w-none mx-auto md:mx-0"
        >
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full aspect-[4/5] object-cover object-top rounded-lg border border-line"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-muted uppercase tracking-wider mb-3"
          >
            01 — About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-medium mb-6"
          >
            {profile.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#B8BECC] leading-relaxed mb-8 max-w-2xl"
          >
            {profile.summary}
          </motion.p>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {aboutFacts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="border-l-2 border-signal-dim pl-4"
              >
                <dt className="font-mono text-[11px] text-muted uppercase tracking-wider mb-1">{f.label}</dt>
                <dd className="text-sm text-[#E8EAED]">{f.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
