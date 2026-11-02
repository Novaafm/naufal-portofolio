import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { snappy } from '../motion.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#final-project', label: 'Final Project' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    const onPointerDown = (e) => {
      if (panelRef.current?.contains(e.target) || toggleRef.current?.contains(e.target)) return
      setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* A sibling of the panel, so the panel's own blur can still see the page */}
      <div
        className={`nav-material absolute inset-0 transition-opacity duration-200 ${
          scrolled || open ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <nav className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-sm tracking-wide">
          NF<span className="text-signal">.</span>M
        </a>
        <ul className="hidden sm:flex items-center gap-8 font-mono text-xs text-[#B8BECC]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#E8EAED] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="sm:hidden -mr-2.5 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-md active:opacity-60"
        >
          <motion.span
            animate={open ? { y: 4, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={snappy}
            className="block w-5 h-0.5 bg-[#E8EAED]"
          />
          <motion.span
            animate={open ? { y: -4, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={snappy}
            className="block w-5 h-0.5 bg-[#E8EAED]"
          />
        </button>
      </nav>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="relative h-[2px] bg-signal origin-left"
      />
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={snappy}
            style={{ transformOrigin: 'top right' }}
            className="nav-panel sm:hidden absolute top-full right-4 mt-2 w-56 rounded-xl"
          >
            <ul ref={panelRef} className="font-mono text-sm py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center min-h-[2.75rem] px-4 text-[#E8EAED] active:bg-line"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
