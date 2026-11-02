import { motion } from 'framer-motion'
import { experience, education } from '../data.js'
import { reveal } from '../motion.js'

function Row({ period, title, children }) {
  return (
    <li className="grid sm:grid-cols-[1fr_2fr] gap-x-8 gap-y-1 py-6 border-t border-black/10">
      <p className="text-base text-subtle">{period}</p>
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        {children}
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:py-40 bg-white text-ink">
      <div className="max-w-5xl mx-auto">
        <motion.div {...reveal} className="mb-24">
          <h2 className="type-headline mb-14">Where the work happened.</h2>
          <ol>
            {experience.map((e, i) => (
              <Row key={i} period={e.period} title={e.title}>
                <p className="text-base text-subtle mt-1">{e.org}</p>
              </Row>
            ))}
          </ol>
        </motion.div>

        <motion.div {...reveal}>
          <h2 className="type-headline mb-14">Education.</h2>
          <ul>
            <Row period={education.period} title={education.school}>
              <p className="text-base text-subtle mt-1 mb-4">{education.degree}</p>
              <ul className="space-y-2">
                {education.notes.map((n) => (
                  <li key={n} className="text-base">{n}</li>
                ))}
              </ul>
            </Row>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
