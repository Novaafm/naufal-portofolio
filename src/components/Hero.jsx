import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'

const VIEWBOX = '0 0 220 120'
const NODE_R = 5
const LABEL_PROPS = { fill: '#8B92A3', fontSize: '9', fontFamily: 'JetBrains Mono', textAnchor: 'middle' }

function DiagramFrame({ label, children }) {
  return (
    <svg viewBox={VIEWBOX} className="w-full h-auto" aria-hidden="true">
      {children}
      <text x="14" y="16" {...LABEL_PROPS} textAnchor="start" fill="#4C8BF5" letterSpacing="1">
        {label}
      </text>
    </svg>
  )
}

function P2PDiagram() {
  const a = [20, 60], b = [200, 60]
  return (
    <DiagramFrame label="P2P">
      <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#2A4571" strokeWidth="1.5" />
      <motion.line
        x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]}
        stroke="#4C8BF5" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#9CC0FF" strokeWidth="2" className="dash-flow" />
      {[a, b].map(([x, y], i) => (
        <motion.circle
          key={i} cx={x} cy={y} r={NODE_R}
          fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.5, type: 'spring', stiffness: 300 }}
        />
      ))}
    </DiagramFrame>
  )
}

function RingDiagram() {
  const cx = 110, cy = 62, r = 42
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)]
  })
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ') + ' Z'
  return (
    <DiagramFrame label="RING">
      <path d={pathD} stroke="#2A4571" strokeWidth="1.5" fill="none" />
      <motion.path
        d={pathD} stroke="#4C8BF5" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      />
      <path d={pathD} stroke="#9CC0FF" strokeWidth="2" fill="none" className="dash-flow" />
      {points.map(([x, y], i) => (
        <motion.circle
          key={i} cx={x} cy={y} r="4"
          fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.08, type: 'spring', stiffness: 300 }}
        />
      ))}
    </DiagramFrame>
  )
}

function StarDiagram() {
  const hub = [110, 62]
  const r = 44
  const points = Array.from({ length: 5 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
    return [hub[0] + r * Math.cos(angle), hub[1] + r * Math.sin(angle)]
  })
  return (
    <DiagramFrame label="STAR">
      {points.map(([x, y], i) => (
        <line key={i} x1={hub[0]} y1={hub[1]} x2={x} y2={y} stroke="#2A4571" strokeWidth="1.5" />
      ))}
      {points.map(([x, y], i) => (
        <motion.line
          key={i} x1={hub[0]} y1={hub[1]} x2={x} y2={y}
          stroke="#4C8BF5" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeInOut' }}
        />
      ))}
      {points.map(([x, y], i) => (
        <line key={`d${i}`} x1={hub[0]} y1={hub[1]} x2={x} y2={y} stroke="#9CC0FF" strokeWidth="2" className="dash-flow" />
      ))}
      {points.map(([x, y], i) => (
        <motion.circle
          key={`n${i}`} cx={x} cy={y} r="4"
          fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.08 + 0.3, type: 'spring', stiffness: 300 }}
        />
      ))}
      <motion.circle
        cx={hub[0]} cy={hub[1]} r="6"
        fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
        className="pulse-dot"
      />
    </DiagramFrame>
  )
}

function TreeDiagram() {
  const root = [110, 12]
  const mid = [[55, 58], [165, 58]]
  const leaves = [[20, 108], [85, 108], [135, 108], [200, 108]]
  const edges = [
    [root, mid[0]], [root, mid[1]],
    [mid[0], leaves[0]], [mid[0], leaves[1]],
    [mid[1], leaves[2]], [mid[1], leaves[3]],
  ]
  return (
    <DiagramFrame label="TREE">
      {edges.map(([[x1, y1], [x2, y2]], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2A4571" strokeWidth="1.5" />
      ))}
      {edges.map(([[x1, y1], [x2, y2]], i) => (
        <motion.line
          key={`a${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#4C8BF5" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeInOut' }}
        />
      ))}

      {/* Perbaikan: Menghapus .slice(0, 2) agar dash-flow mencakup seluruh edges */}
      {edges.map(([[x1, y1], [x2, y2]], i) => (
        <line key={`d${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9CC0FF" strokeWidth="2" className="dash-flow" />
      ))}

      <motion.circle
        cx={root[0]} cy={root[1]} r="5"
        fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      {mid.map(([x, y], i) => (
        <motion.circle
          key={i} cx={x} cy={y} r="4"
          fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.15 + i * 0.05, type: 'spring', stiffness: 300 }}
        />
      ))}
      {leaves.map(([x, y], i) => (
        <motion.circle
          key={i} cx={x} cy={y} r="3.5"
          fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 300 }}
        />
      ))}
    </DiagramFrame>
  )
}

function HybridDiagram() {
  const hub = [55, 68]
  const starPoints = [[20, 38], [20, 98], [55, 28]]
  const cx = 150, cy = 68, r = 32
  const ringPoints = Array.from({ length: 5 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)]
  })
  const ringPathD = ringPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ') + ' Z'
  const bridge = [hub, ringPoints[3]]

  return (
    <DiagramFrame label="HYBRID">
      {starPoints.map(([x, y], i) => (
        <line key={i} x1={hub[0]} y1={hub[1]} x2={x} y2={y} stroke="#2A4571" strokeWidth="1.5" />
      ))}
      <line x1={bridge[0][0]} y1={bridge[0][1]} x2={bridge[1][0]} y2={bridge[1][1]} stroke="#2A4571" strokeWidth="1.5" />
      <path d={ringPathD} stroke="#2A4571" strokeWidth="1.5" fill="none" />

      {starPoints.map(([x, y], i) => (
        <motion.line
          key={`a${i}`} x1={hub[0]} y1={hub[1]} x2={x} y2={y}
          stroke="#4C8BF5" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        />
      ))}

      {/* Perbaikan: Menambahkan map untuk dash-flow pada sisi Star Topology */}
      {starPoints.map(([x, y], i) => (
        <motion.line
          key={`d${i}`} x1={hub[0]} y1={hub[1]} x2={x} y2={y}
          stroke="#9CC0FF" strokeWidth="2" className="dash-flow"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
      ))}

      <motion.line
        x1={bridge[0][0]} y1={bridge[0][1]} x2={bridge[1][0]} y2={bridge[1][1]}
        stroke="#4C8BF5" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.line
        x1={bridge[0][0]} y1={bridge[0][1]} x2={bridge[1][0]} y2={bridge[1][1]}
        stroke="#9CC0FF" strokeWidth="2" className="dash-flow"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      />
      <motion.path
        d={ringPathD} stroke="#4C8BF5" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
      />
      <motion.path
        d={ringPathD} stroke="#9CC0FF" strokeWidth="2" fill="none" className="dash-flow"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
      />

      <motion.circle
        cx={hub[0]} cy={hub[1]} r="5.5"
        fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="pulse-dot"
      />
      {starPoints.map(([x, y], i) => (
        <motion.circle
          key={`s${i}`} cx={x} cy={y} r="3.5"
          fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 300 }}
        />
      ))}
      {ringPoints.map(([x, y], i) => (
        <motion.circle
          key={`r${i}`} cx={x} cy={y} r="3.5"
          fill="#0B0E14" stroke="#4C8BF5" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.5 + i * 0.06, type: 'spring', stiffness: 300 }}
        />
      ))}
    </DiagramFrame>
  )
}

const TOPOLOGIES = [P2PDiagram, RingDiagram, StarDiagram, TreeDiagram, HybridDiagram]

function NetworkTrace() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!inView) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TOPOLOGIES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [inView])

  const Current = TOPOLOGIES[index]

  return (
    <div ref={ref}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Current />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function useTypewriter(text, start, speed = 28) {
  const [out, setOut] = useState('')
  useEffect(() => {
    if (!start) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [start, text, speed])
  return out
}

function TerminalBlock() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const line1 = useTypewriter('whoami', inView)
  const line2 = useTypewriter('network engineer + fullstack developer', inView && line1.length === 6, 18)
  const line3 = useTypewriter('status', inView && line2.length > 30)
  const showStatus = inView && line3.length === 6

  return (
    <div ref={ref} className="rounded-lg bg-card border border-line font-mono text-[13px] leading-relaxed overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F5605A]" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-terminal" />
        <span className="ml-3 text-muted text-xs">~/naufal</span>
      </div>
      <div className="p-4 space-y-1.5 min-h-[118px]">
        <p className="text-muted">
          <span className="text-terminal">$</span> {line1}
        </p>
        {line1.length === 6 && (
          <p className="text-[#E8EAED]">{line2}</p>
        )}
        {line2.length > 30 && (
          <p className="text-muted pt-2">
            <span className="text-terminal">$</span> {line3}
          </p>
        )}
        {showStatus && (
          <motion.p
            className="text-[#E8EAED]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-terminal pulse-dot">●</span> open to opportunities
          </motion.p>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center px-6 md:px-12 lg:px-20 trace-grid bg-ink overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink pointer-events-none" />
      <motion.div
        style={{ y, opacity }}
        className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center pt-24 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-signal text-sm tracking-wide mb-5">
            naufal_fawwaz_munarto.init()
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] mb-6">
            {profile.tagline.split(' — ')[0]} —
            <br />
            <span className="text-muted">{profile.tagline.split(' — ')[1]}</span>
          </h1>
          <p className="text-muted text-base max-w-md mb-8">
            Telecommunications Engineering student building real infrastructure
            on both layers: physical fiber networks and the software that runs on top.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-md bg-signal text-ink font-medium text-sm"
            >
              View projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, borderColor: '#4C8BF5' }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-md border border-line text-[#E8EAED] font-medium text-sm"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-lg bg-card border border-line p-5">
            <p className="font-mono text-xs text-muted mb-3 uppercase tracking-wider">Network Topologies</p>
            <NetworkTrace />
          </div>
          <TerminalBlock />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="font-mono text-[10px] text-muted uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-signal to-transparent"
        />
      </motion.div>
    </section>
  )
}