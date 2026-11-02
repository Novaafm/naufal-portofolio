import { motion } from 'framer-motion'
import { skills } from '../data.js'
import { reveal } from '../motion.js'

function SkillGroup({ title, items }) {
  return (
    <div>
      <h3 className="text-sm text-subtle pb-4 border-b border-black/10 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((s) => (
          <li key={s} className="text-lg font-medium leading-snug">{s}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:py-40 bg-snow text-ink">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...reveal} className="type-headline mb-16 max-w-3xl">
          The toolkit behind both layers.
        </motion.h2>
        <motion.div {...reveal} className="grid sm:grid-cols-3 gap-12">
          <SkillGroup title="Network & Telecom" items={skills.network} />
          <SkillGroup title="Software Development" items={skills.software} />
          <SkillGroup title="Tools" items={skills.tools} />
        </motion.div>
      </div>
    </section>
  )
}
