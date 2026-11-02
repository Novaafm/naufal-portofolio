import { motion } from 'framer-motion'
import { profile, aboutFacts } from '../data.js'
import { reveal } from '../motion.js'

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-24 bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[320px_1fr] gap-10 md:gap-16 items-start">
        <motion.div
          {...reveal}
          className="w-full max-w-[280px] md:max-w-none mx-auto md:mx-0"
        >
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full aspect-[4/5] object-cover object-top rounded-lg border border-line"
          />
        </motion.div>

        <motion.div {...reveal}>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
            01 — About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight font-medium mb-6">
            {profile.name}
          </h2>
          <p className="text-[#B8BECC] leading-relaxed mb-8 max-w-2xl">
            {profile.summary}
          </p>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {aboutFacts.map((f) => (
              <div key={f.label} className="border-l-2 border-signal-dim pl-4">
                <dt className="font-mono text-[0.6875rem] text-muted uppercase tracking-wider mb-1">{f.label}</dt>
                <dd className="text-sm text-[#E8EAED]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
