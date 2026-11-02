import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'
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
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

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
      <div className="nav-material absolute inset-0" />
      <nav className="relative max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
        <a href="#top" className="text-sm font-semibold text-snow">
          {profile.name}
        </a>
        <ul className="hidden md:flex items-center gap-7 text-xs text-[#d1d1d6]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
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
          className="md:hidden -mr-2.5 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-md active:opacity-60"
        >
          <motion.span
            animate={open ? { y: 4, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={snappy}
            className="block w-5 h-0.5 bg-snow"
          />
          <motion.span
            animate={open ? { y: -4, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={snappy}
            className="block w-5 h-0.5 bg-snow"
          />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={snappy}
            style={{ transformOrigin: 'top right' }}
            className="nav-panel md:hidden absolute top-full right-4 mt-2 w-56 rounded-2xl"
          >
            <ul ref={panelRef} className="text-base py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center min-h-[2.75rem] px-4 text-snow active:bg-white/10"
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
