import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import {
  fadeRiseChild,
  staggerContainer,
  staggerContainerSlow,
  viewport,
  ease,
} from '../animations'

interface PackageItem {
  name: string
  price: string
  priceNote: string
  tagline: string
  highlight: boolean
  features: string[]
  cta: string
}

const packages: PackageItem[] = [
  {
    name: 'Focus',
    price: 'From $800',
    priceNote: 'USD · one-time',
    tagline: 'One deliverable, done right.',
    highlight: false,
    features: [
      'Landing page or microsite',
      'UI design + full development',
      'Mobile-first & responsive',
      '1 revision round',
      'Delivery in 2 weeks',
      'Vercel deployment',
    ],
    cta: 'Start a project',
  },
  {
    name: 'Build',
    price: 'From $2,500',
    priceNote: 'USD · full engagement',
    tagline: 'Complete digital product.',
    highlight: true,
    features: [
      'Full product design + development',
      'Design system included',
      'Unlimited revision rounds',
      'SEO & performance optimization',
      '1 month post-launch support',
      'Source code + documentation',
    ],
    cta: 'Let\'s build',
  },
]

interface PackagesProps {
  onContact: () => void
}

export default function Packages({ onContact }: PackagesProps) {
  return (
    <section id="pricing" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="mb-16 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          variants={fadeRiseChild}
          className="text-4xl sm:text-6xl font-normal leading-[0.95] mb-4"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-1.5px',
          }}
        >
          Simple packages.
          <br />
          <em className="not-italic text-muted-foreground">No surprises.</em>
        </motion.h2>
        <motion.p
          variants={fadeRiseChild}
          className="text-muted-foreground text-base max-w-md mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Every engagement starts with a free discovery call to make sure we're
          the right fit.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            variants={fadeRiseChild}
            className="liquid-glass rounded-2xl p-10 flex flex-col gap-8"
            style={{
              background: pkg.highlight
                ? 'rgba(255,255,255,0.06)'
                : 'rgba(255,255,255,0.03)',
            }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            {/* Top */}
            <div className="flex flex-col gap-2">
              {pkg.highlight && (
                <span
                  className="text-xs uppercase tracking-widest text-foreground/50 border border-white/10 rounded-full px-3 py-1 w-fit mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Most popular
                </span>
              )}
              <h3
                className="text-2xl font-normal text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {pkg.name}
              </h3>
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {pkg.tagline}
              </p>
            </div>

            {/* Price */}
            <div className="border-t border-white/10 pt-6">
              <p
                className="text-4xl font-normal text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {pkg.price}
              </p>
              <p
                className="text-xs text-muted-foreground mt-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {pkg.priceNote}
              </p>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1">
              {pkg.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-foreground/75"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Check
                    size={14}
                    className="text-foreground/40 shrink-0 mt-0.5"
                  />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              onClick={onContact}
              className="liquid-glass rounded-full px-6 py-3.5 text-sm text-foreground cursor-pointer w-full"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease }}
            >
              {pkg.cta} →
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Custom note */}
      <motion.p
        className="text-center text-sm text-muted-foreground mt-8"
        style={{ fontFamily: "'Inter', sans-serif" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Need something custom?{' '}
        <button
          onClick={onContact}
          className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors cursor-pointer"
        >
          Let's talk.
        </button>
      </motion.p>
    </section>
  )
}
