import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  staggerContainer,
  staggerContainerSlow,
  slideLeft,
  viewport,
} from '../animations'

const pillars = [
  { emoji: '✦', label: 'Clarity' },
  { emoji: '◈', label: 'Craft' },
  { emoji: '◎', label: 'Speed' },
  { emoji: '⬡', label: 'Care' },
  { emoji: '◇', label: 'Vision' },
  { emoji: '⊕', label: 'Intent' },
  { emoji: '◉', label: 'Detail' },
  { emoji: '✧', label: 'Impact' },
]

export default function OpenLetter() {
  return (
    <section className="relative z-10 px-8 py-32 max-w-5xl mx-auto">
      {/* Label */}
      <motion.p
        className="text-xs text-muted-foreground uppercase tracking-widest mb-16 text-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6 }}
      >
        A word from the studio
      </motion.p>

      {/* Letter content */}
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
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-1.5px',
          }}
        >
          Hey, Founder.
        </motion.h2>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I've watched too many great ideas fail at the surface level. Not
          because the product was wrong — but because the digital presence
          didn't carry the weight of the vision behind it. A mediocre landing
          page tells your users you don't take your own work seriously.
        </motion.p>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I started Velorah<sup className="text-xs">®</sup> because I believe
          that design is not decoration — it's communication. Every color
          choice, every line of spacing, every micro-interaction is a message
          you send to the person on the other side of the screen.
        </motion.p>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I work with builders, founders, and creators who want a digital
          presence that doesn't just look good — but <em className="not-italic text-foreground">
          converts, communicates, and endures</em>. If that sounds like what
          you need, let's build it together.
        </motion.p>

        <motion.p
          variants={fadeRiseChild}
          className="text-xl text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          — Velorah<sup className="text-sm">®</sup>
        </motion.p>
      </motion.div>

      {/* Pillars ticker */}
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
