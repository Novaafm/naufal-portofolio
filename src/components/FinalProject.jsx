import { motion } from 'framer-motion'
import { finalProject } from '../data.js'
import ProjectCarousel from './ProjectCarousel.jsx'
import { reveal, press } from '../motion.js'

export default function FinalProject() {
  const p = finalProject

  return (
    <section id="final-project" className="px-6 md:px-12 lg:px-20 py-24 bg-ink border-t border-line">
      <div className="max-w-6xl mx-auto">
        <motion.div {...reveal}>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
            02 — Final Project
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight font-medium mb-12 max-w-xl">
            From sensor to dashboard.
          </h2>
        </motion.div>

        <motion.article
          {...reveal}
          className="rounded-lg bg-card border border-line p-6 md:p-8 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-start"
        >
          <ProjectCarousel images={p.images} alt={p.title} kind="network" fit="contain" />

          <div>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-2">
              <p className="font-mono text-xs text-signal">{p.org}</p>
              <p className="font-mono text-xs text-muted">{p.period} · {p.role}</p>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-medium mb-3">{p.title}</h3>
            <p className="text-sm text-[#B8BECC] leading-relaxed mb-6">{p.summary}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {p.metrics.map((m) => (
                <div key={m.label} className="rounded-md border border-line bg-surface px-4 py-3">
                  <p className="font-display text-2xl font-medium text-signal">{m.value}</p>
                  <p className="font-mono text-[0.6875rem] text-muted leading-snug mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Backend highlights</h4>
            <ul className="space-y-2.5 mb-6">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-[#B8BECC] leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.6875rem] px-2 py-1 rounded border border-signal-dim text-signal"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {p.links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...press}
                  className="px-5 py-2.5 rounded-md bg-signal text-ink font-medium text-sm"
                >
                  {l.label} ↗
                </motion.a>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
