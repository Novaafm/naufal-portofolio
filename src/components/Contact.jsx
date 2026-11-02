import { motion } from 'framer-motion'
import { profile } from '../data.js'
import { reveal } from '../motion.js'
import { PillLink, MoreLink } from '../ui.jsx'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 md:py-48 bg-black text-snow">
      <motion.div {...reveal} className="max-w-4xl mx-auto text-center">
        <h2 className="type-display mb-6">
          Let&#x2019;s connect the dots.
        </h2>
        <p className="text-xl md:text-2xl text-graphite max-w-2xl mx-auto mb-10">
          Open to internship and entry-level opportunities in engineering,
          telecommunications, and technology.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <PillLink href={`mailto:${profile.email}`}>{profile.email}</PillLink>
          <MoreLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</MoreLink>
          <MoreLink href={profile.cv} download>Download CV</MoreLink>
        </div>
        <p className="text-sm text-graphite mt-12">{profile.phone} · {profile.location}</p>
      </motion.div>
    </section>
  )
}
