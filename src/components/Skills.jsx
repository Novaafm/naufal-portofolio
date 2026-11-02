import { motion } from 'framer-motion'
import { skills } from '../data.js'
import { reveal } from '../motion.js'

function SkillGroup({ title, items, accent }) {
  const accentClasses = {
    signal: 'border-signal-dim text-signal',
    terminal: 'border-terminal-dim text-terminal',
    muted: 'border-line text-muted',
  }
  return (
    <div>
      <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2.5">
        {items.map((s) => (
          <span
            key={s}
            className={`font-mono text-xs px-3 py-1.5 rounded-md border ${accentClasses[accent]}`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-20 py-24 bg-ink">
      <div className="max-w-6xl mx-auto">
        <motion.div {...reveal}>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
            05 — Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight font-medium mb-12 max-w-xl">
            The toolkit behind both layers.
          </h2>
        </motion.div>
        <motion.div {...reveal} className="grid sm:grid-cols-3 gap-10">
          <SkillGroup title="Network & Telecom" items={skills.network} accent="signal" />
          <SkillGroup title="Software Development" items={skills.software} accent="terminal" />
          <SkillGroup title="Tools" items={skills.tools} accent="muted" />
        </motion.div>
      </div>
    </section>
  )
}
