import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div id="top" className="bg-ink text-[#E8EAED] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <footer className="px-6 py-8 text-center font-mono text-[11px] text-muted border-t border-line">
        Built by Naufal Fawwaz Munarto · {new Date().getFullYear()}
      </footer>
    </div>
  )
}
