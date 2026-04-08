import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import {
  fadeRise,
  fadeRiseChild,
  staggerContainer,
  staggerContainerSlow,
  viewport,
  ease,
} from '../animations'
import { Project } from '../types'

interface StudioProps {
  projects: Project[]
  onOpenProject: (project: Project) => void
}

export default function Studio({ projects, onOpenProject }: StudioProps) {
  return (
    <section id="studio" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p
          variants={fadeRiseChild}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Selected Work
        </motion.p>
        <motion.h2
          variants={fadeRiseChild}
          className="text-4xl sm:text-6xl font-normal leading-[0.95]"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-1.5px',
          }}
        >
          Studio
        </motion.h2>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {projects.map((project) => (
          <motion.button
            key={project.id}
            onClick={() => onOpenProject(project)}
            variants={fadeRise}
            className="liquid-glass rounded-2xl p-8 text-left cursor-pointer group"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.3, ease }}
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-muted-foreground border border-white/10 rounded-full px-3 py-1">
                {project.year}
              </span>
              <div className="flex items-center gap-3">
                {project.type === 'live' && (
                  <span className="text-xs text-emerald-400 border border-emerald-400/30 rounded-full px-3 py-1">
                    Live
                  </span>
                )}
                {project.type === 'repo' ? (
                  <Github
                    size={14}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                ) : (
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                )}
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-2xl sm:text-3xl font-normal text-foreground mb-3 leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground border border-white/10 rounded-full px-3 py-1 transition-colors duration-200 group-hover:border-white/20"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </motion.div>
    </section>
  )
}
