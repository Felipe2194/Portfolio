import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  fadeRiseChild,
  staggerContainer,
  viewport,
  ease,
} from '../animations'

type ServiceId = 'design' | 'ux' | 'dev' | 'brand'

interface Service {
  id: ServiceId
  label: string
  headline: string
  description: string
  deliverables: string[]
  detail: string
}

const services: Service[] = [
  {
    id: 'design',
    label: 'Web Design',
    headline: 'High-impact digital presence.',
    description:
      'I design websites that communicate your brand at a glance. Landing pages, portfolios, corporate sites — every layout is crafted to guide attention and drive action.',
    deliverables: [
      'Responsive UI design (desktop + mobile)',
      'Component library in Figma',
      'Exported assets & style guide',
      'Handoff-ready files',
    ],
    detail: 'From 1-week sprints to full site redesigns.',
  },
  {
    id: 'ux',
    label: 'UI/UX',
    headline: 'Experiences users remember.',
    description:
      'Research-backed UX meets pixel-perfect UI. I map user flows, design systems, and interactive prototypes that reduce friction and increase confidence.',
    deliverables: [
      'User flow mapping',
      'Wireframes & interactive prototypes',
      'Design system (tokens, components)',
      'Usability documentation',
    ],
    detail: 'Ideal for SaaS products and internal tools.',
  },
  {
    id: 'dev',
    label: 'Development',
    headline: 'Design that ships.',
    description:
      'I turn Figma files into production-ready code. React, Next.js, Tailwind CSS, TypeScript — modern stack, clean architecture, and performance-first builds.',
    deliverables: [
      'React / Next.js codebase',
      'Tailwind CSS + TypeScript',
      'Vercel / Netlify deployment',
      'Source code + documentation',
    ],
    detail: 'Full-stack capable. Deployment included.',
  },
  {
    id: 'brand',
    label: 'Branding',
    headline: 'Identity that endures.',
    description:
      'From a blank slate to a fully formed visual identity. Logo, color system, typography, and a brand guide that keeps everything consistent as you grow.',
    deliverables: [
      'Logo (primary + variations)',
      'Color palette & type system',
      'Brand guidelines document',
      'Vector files (SVG, AI, PDF)',
    ],
    detail: 'Includes 2 concept directions.',
  },
]

export default function Services() {
  const [active, setActive] = useState<ServiceId>('design')
  const current = services.find((s) => s.id === active)!

  return (
    <section className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="mb-14"
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
          What I build
        </motion.p>
        <motion.h2
          variants={fadeRiseChild}
          className="text-4xl sm:text-6xl font-normal leading-[0.95]"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-1.5px',
          }}
        >
          Services
        </motion.h2>
      </motion.div>

      {/* Tab bar */}
      <motion.div
        className="flex gap-2 mb-10 flex-wrap"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease }}
      >
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className="relative px-5 py-2.5 rounded-full text-sm transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Active background */}
            {active === s.id && (
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                layoutId="service-tab-bg"
                transition={{ duration: 0.3, ease }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                active === s.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Tab content */}
      <div className="liquid-glass rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0"
          >
            {/* Left: info */}
            <div className="p-10 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-5">
                <h3
                  className="text-3xl sm:text-4xl font-normal text-foreground leading-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {current.headline}
                </h3>
                <p
                  className="text-base text-foreground/70 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {current.description}
                </p>
              </div>

              <p
                className="text-sm text-muted-foreground border-t border-white/10 pt-5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {current.detail}
              </p>
            </div>

            {/* Right: deliverables */}
            <div
              className="p-10 flex flex-col justify-center gap-4 border-t lg:border-t-0 lg:border-l border-white/10"
            >
              <p
                className="text-xs text-muted-foreground uppercase tracking-widest mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Deliverables
              </p>
              <ul className="flex flex-col gap-3">
                {current.deliverables.map((d, i) => (
                  <motion.li
                    key={d}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease, delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="text-foreground/30 mt-0.5 shrink-0">—</span>
                    {d}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
