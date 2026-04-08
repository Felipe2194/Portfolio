import { Variants } from 'framer-motion'

// ─── Easing curves ───────────────────────────────────────
// easeOutQuint — fast start, silky finish (used for reveals)
export const ease = [0.22, 1, 0.36, 1] as const
// easeInOutQuart — strong in/out (used for page-level transitions)
export const easeStrong = [0.76, 0, 0.24, 1] as const

// ─── Shared variants ─────────────────────────────────────
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

export const fadeRiseChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
}

// ─── Container for stagger ───────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

// ─── Common viewport config ───────────────────────────────
export const viewport = { once: true, margin: '-80px' } as const
