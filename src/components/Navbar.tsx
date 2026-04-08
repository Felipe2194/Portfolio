import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ease } from '../animations'

interface NavbarProps {
  onStudio: () => void
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Studio', href: '#studio' },
  { label: 'Reach Us', href: '#reach' },
]

export default function Navbar({ onStudio }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.04)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
      }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 2.1 }}
    >
      <div className="flex flex-row items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl tracking-tight text-foreground select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Portfolio
        </a>

        {/* Nav links — desktop */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 2.1 + i * 0.05 }}
            >
              <a
                href={link.href}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                style={{ fontFamily: "'Inter', sans-serif" }}
                onClick={
                  link.href === '#studio'
                    ? (e) => {
                        e.preventDefault()
                        onStudio()
                      }
                    : undefined
                }
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/40 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#reach"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 2.4 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}
