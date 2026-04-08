import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  staggerContainer,
  staggerContainerSlow,
  slideLeft,
  viewport,
} from '../animations'

const stats = [
  { value: '3+', label: 'Years of craft' },
  { value: '12+', label: 'Projects shipped' },
  { value: '∞', label: 'Ideas in queue' },
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
            About
          </motion.p>
          <motion.h2
            variants={fadeRiseChild}
            className="text-4xl sm:text-6xl font-normal leading-[0.95]"
            style={{
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: '-1.5px',
            }}
          >
            Craft over noise.
            <br />
            <em className="not-italic text-muted-foreground">
              Depth over speed.
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
            I'm a designer and developer building at the intersection of visual
            art and engineering. My work lives in the space between a precise
            system and a felt emotion — where every pixel serves a purpose and
            every interaction carries intent.
          </motion.p>
          <motion.p
            variants={slideLeft}
            className="text-base text-muted-foreground leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Velorah<sup className="text-xs">®</sup> is my creative umbrella — a
            studio of one, building digital products for clients who believe
            that how something feels is just as important as how it works.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10"
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeRiseChild}>
                <p
                  className="text-3xl text-foreground mb-1"
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
