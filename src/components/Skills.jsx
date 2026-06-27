import { motion } from 'framer-motion'
import { skills } from '../data.js'

function SkillGroup({ title, items, accent, groupIndex }) {
  const accentClasses = {
    signal: 'border-signal-dim text-signal',
    terminal: 'border-terminal-dim text-terminal',
    muted: 'border-line text-muted',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
    >
      <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2.5">
        {items.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.3, delay: groupIndex * 0.1 + i * 0.05 }}
            whileHover={{ y: -2 }}
            className={`font-mono text-[12px] px-3 py-1.5 rounded-md border ${accentClasses[accent]}`}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-20 py-24 bg-ink">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-muted uppercase tracking-wider mb-3"
        >
          04 — Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl font-medium mb-12 max-w-xl"
        >
          The toolkit behind both layers.
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-10">
          <SkillGroup title="Network & Telecom" items={skills.network} accent="signal" groupIndex={0} />
          <SkillGroup title="Software Development" items={skills.software} accent="terminal" groupIndex={1} />
          <SkillGroup title="Tools" items={skills.tools} accent="muted" groupIndex={2} />
        </div>
      </div>
    </section>
  )
}
