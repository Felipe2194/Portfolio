import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  staggerContainer,
  staggerContainerSlow,
  slideLeft,
  viewport,
} from '../animations'

const pillars = [
  { emoji: '✦', label: 'Clean Code' },
  { emoji: '◈', label: 'Architecture' },
  { emoji: '◎', label: 'Performance' },
  { emoji: '⬡', label: 'Accessibility' },
  { emoji: '◇', label: 'UI/UX' },
  { emoji: '⊕', label: 'TypeScript' },
  { emoji: '◉', label: 'React' },
  { emoji: '✧', label: 'Craft' },
]

export default function OpenLetter() {
  return (
    <section className="relative z-10 px-8 py-32 max-w-5xl mx-auto">
      <motion.p
        className="text-xs text-muted-foreground uppercase tracking-widest mb-16 text-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6 }}
      >
        About this portfolio
      </motion.p>

      <motion.div
        className="flex flex-col gap-8"
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          variants={fadeRiseChild}
          className="text-4xl sm:text-5xl font-normal leading-[1.1]"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.5px' }}
        >
          Hi, I'm Felipe.
        </motion.h2>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          This is my portfolio — a collection of projects, experiments, and
          real work that reflects how I approach software development. I study
          Systems Engineering and build software the way I believe it should be
          built: clean, deliberate, and worth the user's attention.
        </motion.p>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I work at the intersection of engineering and design — where a
          well-structured codebase meets a product that genuinely serves people.
          Good software, to me, is invisible to the user but{' '}
          <em className="not-italic text-foreground">
            unforgettable in its effect.
          </em>
        </motion.p>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Whether you're here to explore my work, discuss a project, or simply
          connect — I'm glad you stopped by.
        </motion.p>

        <motion.p
          variants={fadeRiseChild}
          className="text-xl text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          — Felipe Giovanardi
        </motion.p>
      </motion.div>

      {/* Pillars */}
      <motion.div
        className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-20 pt-10 border-t border-white/10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {pillars.map((p) => (
          <motion.span
            key={p.label}
            variants={fadeRiseChild}
            className="flex items-center gap-2 text-sm text-muted-foreground select-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="text-foreground/40 text-base">{p.emoji}</span>
            {p.label}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
