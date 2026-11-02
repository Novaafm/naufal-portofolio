import { motion } from 'framer-motion'
import { finalProject } from '../data.js'
import ProjectCarousel from './ProjectCarousel.jsx'
import { reveal } from '../motion.js'
import { PillLink } from '../ui.jsx'

export default function FinalProject() {
  const p = finalProject

  return (
    <section id="final-project" className="px-6 py-28 md:py-40 bg-black text-snow">
      <div className="max-w-5xl mx-auto">
        <motion.div {...reveal} className="text-center mb-16">
          <p className="text-lg font-semibold text-accent mb-3">{p.org}</p>
          <h2 className="type-headline mb-5">From sensor to dashboard.</h2>
          <p className="text-xl md:text-2xl text-graphite max-w-3xl mx-auto">{p.title}</p>
        </motion.div>

        <motion.div {...reveal} className="mb-20">
          <ProjectCarousel images={p.images} alt={p.title} kind="network" fit="contain" />
        </motion.div>

        <motion.div {...reveal} className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {p.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-5xl md:text-6xl font-semibold tracking-tight mb-3">{m.value}</p>
              <p className="text-sm text-graphite leading-snug">{m.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div {...reveal} className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-sm text-graphite mb-4">{p.period} · {p.role}</p>
            <p className="text-xl leading-snug mb-8">{p.summary}</p>
            <p className="text-sm text-graphite mb-8">{p.tags.join(' · ')}</p>
            {p.links.map((l) => (
              <PillLink key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </PillLink>
            ))}
          </div>

          <div>
            <h3 className="text-sm text-graphite mb-4">Backend highlights</h3>
            <ul>
              {p.highlights.map((h) => (
                <li key={h} className="py-4 border-t border-white/10 text-base leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
