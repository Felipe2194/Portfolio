import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { fadeIn, staggerContainer, viewport } from '../animations'

const links = {
  work: [
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#pricing' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Journal', href: '#journal' },
    { label: 'Reach Us', href: '#reach' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

const social = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-background">
      <motion.div
        className="px-8 py-16 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <motion.div variants={fadeIn} className="flex flex-col gap-4 md:col-span-1">
            <a
              href="#home"
              className="text-2xl tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Velorah<sup className="text-xs">®</sup>
            </a>
            <p
              className="text-sm text-muted-foreground leading-relaxed max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A design & development studio building digital products with
              intention.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Work links */}
          <motion.div variants={fadeIn} className="flex flex-col gap-4">
            <p
              className="text-xs text-muted-foreground uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Work
            </p>
            <ul className="flex flex-col gap-3">
              {links.work.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company links */}
          <motion.div variants={fadeIn} className="flex flex-col gap-4">
            <p
              className="text-xs text-muted-foreground uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Studio
            </p>
            <ul className="flex flex-col gap-3">
              {links.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal links */}
          <motion.div variants={fadeIn} className="flex flex-col gap-4">
            <p
              className="text-xs text-muted-foreground uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {links.legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-white/8"
        >
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 Velorah<sup className="text-xs">®</sup>. All rights reserved.
          </p>
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built with intention.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
