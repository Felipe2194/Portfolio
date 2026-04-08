import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OpenLetter from './components/OpenLetter'
import WhySection from './components/WhySection'
import Studio from './components/Studio'
import ReachUs from './components/ReachUs'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import Preloader from './components/Preloader'
import { Project } from './types'

const projects: Project[] = [
  {
    id: 'artedietetica',
    title: 'Arte Dietética',
    description:
      'Website for a dietitian specialized in mindful eating. Design focused on calm and trust — clean UI, careful typography, smooth experience from mobile to desktop.',
    url: 'https://www.artedietetica.com.ar',
    type: 'live',
    tags: ['Web Design', 'UI/UX', 'Branding'],
    year: '2025',
  },
  {
    id: 'elcentinela',
    title: 'El Centinela',
    description:
      'Landing page for a private security company. Design that conveys trust, solidity and professionalism — communicating their services with clarity and strong visual presence.',
    url: 'https://elcentinela.online/',
    type: 'live',
    tags: ['Landing Page', 'Web Design', 'UI/UX'],
    year: '2025',
  },
]

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsPreloading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isPreloading ? 'hidden' : ''
  }, [isPreloading])

  function scrollToStudio() {
    document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Preloader ── */}
      <Preloader isVisible={isPreloading} />

      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* ── Navbar ── */}
        <Navbar onStudio={scrollToStudio} />

        {/* ── 1. Hero ── */}
        <Hero />

        {/* ── Below-fold content ── */}
        <div className="relative z-10 bg-background">

          {/* ── 2. Open Letter ── */}
          <div className="border-t border-white/5" />
          <OpenLetter />

          {/* ── 3. Why (4-col benefits) ── */}
          <div className="border-t border-white/5" />
          <WhySection />

          {/* ── 4. Studio (projects) ── */}
          <div className="border-t border-white/5" />
          <Studio projects={projects} onOpenProject={setSelectedProject} />

          {/* ── 5. Reach Us ── */}
          <div className="border-t border-white/5" />
          <ReachUs />

          {/* ── 10. Footer ── */}
          <Footer />
        </div>

        {/* ── Project Modal ── */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </>
  )
}
