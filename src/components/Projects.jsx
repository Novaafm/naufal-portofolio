import { motion } from 'framer-motion'
import { networkProjects, softwareProjects, adminProjects } from '../data.js'
import ProjectCarousel from './ProjectCarousel.jsx'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
}

function NetworkCard({ project, i }) {
  return (
    <motion.article
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      className="rounded-lg bg-card border border-line p-6 transition-colors hover:border-signal-dim"
    >
      <div className="mb-5">
        <ProjectCarousel images={project.images} alt={project.title} kind="network" />
      </div>
      <div className="flex items-center justify-between mb-1.5">
        <p className="font-mono text-xs text-signal">{project.org}</p>
        <p className="font-mono text-xs text-muted">{project.period}</p>
      </div>
      <h3 className="font-display text-lg font-medium mb-2.5">{project.title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-1 rounded border border-signal-dim text-signal"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

function SoftwareCard({ project, i }) {
  return (
    <motion.article
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      className="rounded-lg bg-card border border-line p-6 transition-colors hover:border-terminal-dim"
    >
      <div className="mb-5">
        <ProjectCarousel images={project.images} alt={project.title} kind="software" />
      </div>
      <div className="flex items-center justify-between mb-1.5">
        <p className="font-mono text-xs text-terminal">{project.org}</p>
        <p className="font-mono text-xs text-muted">{project.period}</p>
      </div>
      <h3 className="font-display text-lg font-medium mb-2.5">{project.title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-1 rounded border border-terminal-dim text-terminal"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

function AdminCard({ project, i }) {
  return (
    <motion.article
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      className="rounded-lg bg-card border border-line p-6 transition-colors hover:border-amber/40"
    >
      <div className="mb-5">
        <ProjectCarousel images={project.images} alt={project.title} kind="admin" />
      </div>
      <div className="flex items-center justify-between mb-1.5">
        <p className="font-mono text-xs text-amber">{project.org}</p>
        <p className="font-mono text-xs text-muted">{project.period}</p>
      </div>
      <h3 className="font-display text-lg font-medium mb-2.5">{project.title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-1 rounded border border-amber/40 text-amber"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-20 py-24 bg-ink">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-muted uppercase tracking-wider mb-3"
        >
          02 — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl font-medium mb-14 max-w-xl"
        >
          Three roles. One engineer.
        </motion.h2>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-signal" />
            <h3 className="font-mono text-sm text-[#E8EAED] uppercase tracking-wide">
              Network Infrastructure
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {networkProjects.map((p, i) => (
              <NetworkCard key={p.id} project={p} i={i} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-terminal" />
            <h3 className="font-mono text-sm text-[#E8EAED] uppercase tracking-wide">
              Software Development
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {softwareProjects.map((p, i) => (
              <SoftwareCard key={p.id} project={p} i={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber" />
            <h3 className="font-mono text-sm text-[#E8EAED] uppercase tracking-wide">
              Operations & Administration
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {adminProjects.map((p, i) => (
              <AdminCard key={p.id} project={p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}