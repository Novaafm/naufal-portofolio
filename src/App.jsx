import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import FinalProject from './components/FinalProject.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { spring } from './motion.js'

export default function App() {
  return (
    <MotionConfig reducedMotion="user" transition={spring}>
      <div id="top" className="bg-black text-snow min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <FinalProject />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <footer className="px-6 py-8 text-center text-xs text-graphite border-t border-white/10">
          Built by Naufal Fawwaz Munarto · {new Date().getFullYear()}
        </footer>
      </div>
    </MotionConfig>
  )
}
