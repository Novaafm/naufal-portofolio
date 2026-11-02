import { profile } from '../data.js'
import { PillLink, MoreLink } from '../ui.jsx'

export default function Hero() {
  const [lead, rest] = profile.tagline.split(' — ')

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-black text-center">
      <div className="max-w-5xl">
        <p className="text-lg md:text-xl font-semibold text-snow mb-5">{profile.name}</p>
        <h1 className="type-display text-snow mb-10">
          {lead} <span className="text-graphite">{rest}</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <PillLink href="#projects">View projects</PillLink>
          <MoreLink href="#contact">Get in touch</MoreLink>
          <MoreLink href={profile.cv} download>Download CV</MoreLink>
        </div>
      </div>
    </section>
  )
}
