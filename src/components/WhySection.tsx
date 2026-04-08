import { motion } from 'framer-motion'
import { Layers, Zap, Code2, Eye, Bot } from 'lucide-react'
import {
  fadeRiseChild,
  staggerContainer,
  staggerContainerSlow,
  viewport,
} from '../animations'

const qualities = [
  {
    icon: Code2,
    title: 'Clean code',
    description:
      'I write code that is readable, maintainable, and scalable. Structure and clarity are non-negotiable — a well-organized codebase is a product in itself.',
  },
  {
    icon: Layers,
    title: 'Systems thinking',
    description:
      'A Systems Engineering background means I approach problems from the architecture down — understanding the full picture before writing the first line.',
  },
  {
    icon: Zap,
    title: 'Fast & focused',
    description:
      'Clear communication, tight iteration cycles, and a bias for shipping. I move quickly without cutting corners on quality.',
  },
  {
    icon: Eye,
    title: 'Detail-oriented',
    description:
      'The gap between a good product and a great one lives in the details. Spacing, transitions, edge cases — none of it gets skipped.',
  },
  {
    icon: Bot,
    title: 'AI & Automatización',
    description:
      'Busco simplificar y automatizar todo lo que sea posible — aplicando agentes de IA y Skills para potenciar cada proyecto y liberar tiempo para lo que realmente importa.',
  },
]

export default function WhySection() {
  return (
    <section className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
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
          What I bring
        </motion.p>
        <motion.h2
          variants={fadeRiseChild}
          className="text-4xl sm:text-5xl font-normal leading-[0.95] max-w-2xl mx-auto"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.5px' }}
        >
          Engineering discipline meets design sensibility.
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {qualities.map((item) => (
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
