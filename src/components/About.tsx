import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  staggerContainer,
  staggerContainerSlow,
  slideLeft,
  viewport,
} from '../animations'

const stats = [
  { value: 'ISI',     label: 'Systems Engineering' },
  { value: '5+',      label: 'Projects shipped'    },
  { value: 'TS · React', label: 'Primary stack'    },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left: heading */}
        <motion.div
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
            About me
          </motion.p>
          <motion.h2
            variants={fadeRiseChild}
            className="text-4xl sm:text-6xl font-normal leading-[0.95]"
            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.5px' }}
          >
            Built on systems.
            <br />
            <em className="not-italic text-muted-foreground">
              Shaped by design.
            </em>
          </motion.h2>
        </motion.div>

        {/* Right: bio + stats */}
        <motion.div
          className="flex flex-col gap-6 pt-2"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            variants={slideLeft}
            className="text-base text-foreground/80 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I'm <strong className="font-normal text-foreground">Felipe Giovanardi</strong>,
            a Systems Engineering student with a strong focus on web development
            and software architecture. I build at the intersection of engineering
            discipline and product thinking — writing code that's as considered
            as the interfaces it powers.
          </motion.p>

          <motion.p
            variants={slideLeft}
            className="text-base text-muted-foreground leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            My approach is simple: understand the problem deeply before writing
            a single line. I care about clean architecture, readable code, and
            experiences that work the way people expect — without friction,
            without noise.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10"
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeRiseChild}>
                <p
                  className="text-2xl text-foreground mb-1 leading-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
