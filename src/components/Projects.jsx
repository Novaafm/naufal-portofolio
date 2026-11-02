import { motion } from 'framer-motion'
import { networkProjects, softwareProjects, adminProjects } from '../data.js'
import ProjectCarousel from './ProjectCarousel.jsx'
import { reveal, press } from '../motion.js'

function NetworkCard({ project }) {
  return (
    <motion.article
      {...reveal}
      className="rounded-lg bg-card border border-line p-6"
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
            className="font-mono text-[0.6875rem] px-2 py-1 rounded border border-signal-dim text-signal"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

function SoftwareCard({ project }) {
  return (
    <motion.article
      {...reveal}
      className="rounded-lg bg-card border border-line p-6"
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
            className="font-mono text-[0.6875rem] px-2 py-1 rounded border border-terminal-dim text-terminal"
          >
            {t}
          </span>
        ))}
      </div>
      {project.link && (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          {...press}
          className="inline-block mt-5 px-4 py-2 rounded-md border border-terminal-dim text-terminal font-mono text-xs"
        >
          Live demo ↗
        </motion.a>
      )}
    </motion.article>
  )
}

function AdminCard({ project }) {
  return (
    <motion.article
      {...reveal}
      className="rounded-lg bg-card border border-line p-6"
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
            className="font-mono text-[0.6875rem] px-2 py-1 rounded border border-amber/40 text-amber"
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
    <section id="projects" className="px-6 md:px-12 lg:px-20 py-24 bg-ink border-t border-line">
      <div className="max-w-6xl mx-auto">
        <motion.div {...reveal}>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
            03 — Projects
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight font-medium mb-14 max-w-xl">
            Three roles. One engineer.
          </h2>
        </motion.div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-signal" />
            <h3 className="font-mono text-sm text-[#E8EAED] uppercase tracking-wide">
              Network Infrastructure
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {networkProjects.map((p) => (
              <NetworkCard key={p.id} project={p} />
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
            {softwareProjects.map((p) => (
              <SoftwareCard key={p.id} project={p} />
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
            {adminProjects.map((p) => (
              <AdminCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}