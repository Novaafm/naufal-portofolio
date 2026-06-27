import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-sm tracking-wide">
          NF<span className="text-signal">.</span>M
        </a>
        <ul className="hidden sm:flex items-center gap-8 font-mono text-xs text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#E8EAED] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[2px] bg-signal origin-left"
      />
    </header>
  )
}
