import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import IntroCurtain from './components/IntroCurtain'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'

export default function App() {
  return (
    // reducedMotion="user" switches off movement for visitors who ask their device for less motion.
    <MotionConfig reducedMotion="user">
      <IntroCurtain />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <div className="vignette" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </MotionConfig>
  )
}
