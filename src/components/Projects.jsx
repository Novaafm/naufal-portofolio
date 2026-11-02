import { motion } from 'framer-motion'
import { networkProjects, softwareProjects, adminProjects } from '../data.js'
import ProjectCarousel from './ProjectCarousel.jsx'
import { reveal } from '../motion.js'
import { MoreLink } from '../ui.jsx'

const projects = [
  ...networkProjects.map((p) => ({ ...p, area: 'Network Infrastructure', kind: 'network' })),
  ...softwareProjects.map((p) => ({ ...p, area: 'Software Development', kind: 'software' })),
  ...adminProjects.map((p) => ({ ...p, area: 'Operations & Administration', kind: 'admin' })),
]

function ProjectFeature({ project, flipped }) {
  const labels = project.tags || project.stack
  return (
    <motion.article
      {...reveal}
      className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-center"
    >
      <div className={flipped ? 'lg:order-2' : ''}>
        <ProjectCarousel images={project.images} alt={project.title} kind={project.kind} />
      </div>
      <div className={flipped ? 'lg:order-1' : ''}>
        <p className="text-base font-semibold text-accent-strong mb-3">{project.area}</p>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">{project.title}</h3>
        <p className="text-sm text-subtle mb-5">{project.org} · {project.period}</p>
        <p className="text-lg leading-snug text-subtle mb-5">{project.summary}</p>
        <p className="text-sm text-subtle">{labels.join(' · ')}</p>
        {project.link && (
          <div className="mt-6">
            <MoreLink tone="light" href={project.link} target="_blank" rel="noopener noreferrer">
              Live demo
            </MoreLink>
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:py-40 bg-snow text-ink">
      <div className="max-w-6xl mx-auto">
        <motion.div {...reveal} className="text-center mb-20 md:mb-28">
          <h2 className="type-headline">Three roles. One engineer.</h2>
        </motion.div>
        <div className="space-y-24 md:space-y-36">
          {projects.map((p, i) => (
            <ProjectFeature key={p.id} project={p} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
