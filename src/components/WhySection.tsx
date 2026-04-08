import { motion } from 'framer-motion'
import { Layers, Zap, Heart, Eye } from 'lucide-react'
import {
  fadeRiseChild,
  staggerContainer,
  staggerContainerSlow,
  viewport,
} from '../animations'

const benefits = [
  {
    icon: Eye,
    title: 'Clarity first',
    description:
      'Every project starts with a deep-dive into your brand, audience, and goals. No guessing — only deliberate decisions.',
  },
  {
    icon: Layers,
    title: 'Built to last',
    description:
      'Clean code, scalable design systems, and documented deliverables. Work that outlives the trend cycle.',
  },
  {
    icon: Zap,
    title: 'Shipped fast',
    description:
      'Tight feedback loops and async-first collaboration mean we move quickly without losing quality.',
  },
  {
    icon: Heart,
    title: 'Treated like yours',
    description:
      'Your brand is treated with the same care as if it were mine. Because the best work comes from genuine investment.',
  },
]

export default function WhySection() {
  return (
    <section className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="mb-16 text-center"
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
          Why Velorah
        </motion.p>
        <motion.h2
          variants={fadeRiseChild}
          className="text-4xl sm:text-5xl font-normal leading-[0.95] max-w-2xl mx-auto"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-1.5px',
          }}
        >
          Design that works as hard as you do.
        </motion.h2>
      </motion.div>

      {/* 4-column grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {benefits.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeRiseChild}
            className="liquid-glass rounded-2xl p-7 flex flex-col gap-5 group"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <item.icon
                size={18}
                className="text-foreground/70 group-hover:text-foreground transition-colors duration-300"
              />
            </div>

            <h3
              className="text-lg font-normal text-foreground leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {item.title}
            </h3>

            <p
              className="text-sm text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
