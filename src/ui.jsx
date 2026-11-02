import { motion } from 'framer-motion'
import { press } from './motion.js'

export function PillLink({ children, ...props }) {
  return (
    <motion.a
      {...press}
      {...props}
      className="inline-block px-6 py-3 rounded-full bg-accent-strong hover:bg-[#0077ed] transition-colors text-white text-base font-medium"
    >
      {children}
    </motion.a>
  )
}

// tone is the background the link sits on
export function MoreLink({ tone = 'dark', children, ...props }) {
  return (
    <motion.a
      {...press}
      {...props}
      className={`inline-block text-lg hover:underline underline-offset-4 ${tone === 'dark' ? 'text-accent' : 'text-accent-strong'}`}
    >
      {children} ›
    </motion.a>
  )
}
