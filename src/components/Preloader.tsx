import { motion, AnimatePresence } from 'framer-motion'
import { easeStrong, ease } from '../animations'

interface PreloaderProps {
  isVisible: boolean
}

export default function Preloader({ isVisible }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 select-none"
          style={{ backgroundColor: 'hsl(201, 100%, 13%)' }}
          // Curtain slides up — reveals the page underneath
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: easeStrong },
          }}
        >
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="text-5xl tracking-tight text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Velorah<sup className="text-sm">®</sup>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="text-sm tracking-widest uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.25em',
            }}
          >
            Portfolio
          </motion.p>

          {/* Progress line */}
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden"
            style={{ width: '160px', height: '1px', background: 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="h-full w-full origin-left"
              style={{ background: 'rgba(255,255,255,0.7)' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 1.4, ease, delay: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
