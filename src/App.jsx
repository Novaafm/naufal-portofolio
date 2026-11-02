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
      <div id="top" className="bg-ink text-[#E8EAED] min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <FinalProject />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <footer className="px-6 py-8 text-center font-mono text-[0.6875rem] text-muted border-t border-line">
          Built by Naufal Fawwaz Munarto · {new Date().getFullYear()}
        </footer>
      </div>
    </MotionConfig>
  )
}
