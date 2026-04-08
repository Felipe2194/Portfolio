import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { fadeIn, staggerContainer, viewport } from '../animations'

const menuLinks = [
  { label: 'Home',     href: '#home'   },
  { label: 'Projects', href: '#studio' },
  { label: 'Reach Us', href: '#reach'  },
]

const social = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/Felipe2194'                      },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/felipe-giovanardi/'     },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom"
          style={{ transform: 'translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-12 pb-16">

          {/* Col 1: Brand */}
          <motion.div variants={fadeIn} className="flex flex-col gap-5">
            <a
              href="#home"
              className="text-3xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Portfolio
            </a>
            <p
              className="text-sm text-white/60 leading-relaxed max-w-[240px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Portfolio of Felipe Giovanardi — Systems Engineer building
              software and interfaces with precision and craft.
            </p>
          </motion.div>

          {/* Col 2: Menu */}
          <motion.div variants={fadeIn} className="flex flex-col gap-5">
            <p
              className="text-xs text-white/40 uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Menu
            </p>
            <ul className="flex flex-col gap-3">
              {menuLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Social */}
          <motion.div variants={fadeIn} className="flex flex-col gap-5">
            <p
              className="text-xs text-white/40 uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Connect
            </p>
            <div className="flex items-center gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-200"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://github.com/Felipe2194"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                github.com/Felipe2194
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-giovanardi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                linkedin.com/in/felipe-giovanardi
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10"
        >
          <p
            className="text-xs text-white/35"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 Felipe Giovanardi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/35 hover:text-white/70 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/35 hover:text-white/70 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Terms of Service
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
