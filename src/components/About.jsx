import { motion } from 'framer-motion'
import { profile, aboutFacts } from '../data.js'
import { reveal } from '../motion.js'

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-40 bg-white text-ink">
      <div className="max-w-5xl mx-auto">
        <motion.div {...reveal} className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center mb-20 md:mb-28">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full max-w-sm md:max-w-none mx-auto aspect-[4/5] object-cover object-top rounded-3xl"
          />
          <div>
            <h2 className="type-headline mb-8">{profile.name}</h2>
            <p className="text-xl md:text-2xl leading-snug text-subtle">
              {profile.summary}
            </p>
          </div>
        </motion.div>

        <motion.dl {...reveal} className="grid sm:grid-cols-2 gap-x-16">
          {aboutFacts.map((f) => (
            <div key={f.label} className="py-6 border-t border-black/10">
              <dt className="text-sm text-subtle mb-1">{f.label}</dt>
              <dd className="text-lg font-medium">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
