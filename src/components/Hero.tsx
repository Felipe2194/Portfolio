import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ease } from '../animations'

const VIDEO_SRC      = '/hero-video.mp4'
const PLAYBACK_RATE  = 0.5
const PRELOAD_AHEAD  = 5
const FADE_AHEAD     = 3.5
const FADE_MS        = 3000

interface HeroProps {
  onBeginJourney: () => void
}

const videoStyle: React.CSSProperties = {
  willChange: 'opacity',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
}

export default function Hero({ onBeginJourney }: HeroProps) {
  const ref       = useRef<HTMLElement>(null)
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const textY          = useTransform(scrollYProgress, [0, 1], ['0%', '-28%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    type State = 'playing' | 'preloading' | 'fading'
    let state: State = 'playing'
    let activeEl: HTMLVideoElement   = a
    let inactiveEl: HTMLVideoElement = b
    let inactiveReady = false
    let fadeStartMs   = 0
    let rafId: number
    let seekedCleanup: (() => void) | null = null

    const preloadInactive = () => {
      state = 'preloading'
      inactiveReady = false
      if (seekedCleanup) { seekedCleanup(); seekedCleanup = null }
      const onSeeked = () => { inactiveReady = true; seekedCleanup = null }
      inactiveEl.addEventListener('seeked', onSeeked, { once: true })
      seekedCleanup = () => inactiveEl.removeEventListener('seeked', onSeeked)
      inactiveEl.playbackRate = PLAYBACK_RATE
      inactiveEl.currentTime = 0.05
    }

    const tick = (now: number) => {
      const dur = activeEl.duration
      if (isFinite(dur) && dur > 0) {
        const remaining = dur - activeEl.currentTime
        if (state === 'playing' && remaining < PRELOAD_AHEAD) preloadInactive()
        if (state === 'preloading' && remaining < FADE_AHEAD) {
          if (inactiveReady || remaining < 0.4) {
            state = 'fading'
            fadeStartMs = now
            inactiveEl.play().catch(() => {})
          }
        }
      }
      if (state === 'fading') {
        const p = Math.min((now - fadeStartMs) / FADE_MS, 1)
        activeEl.style.opacity   = String(1 - p)
        inactiveEl.style.opacity = String(p)
        if (p >= 1) {
          activeEl.style.opacity   = '0'
          inactiveEl.style.opacity = '1'
          activeEl.pause()
          activeEl.currentTime = 0
          const tmp = activeEl; activeEl = inactiveEl; inactiveEl = tmp
          state = 'playing'
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    a.playbackRate = PLAYBACK_RATE
    b.style.opacity = '0'
    rafId = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(rafId); if (seekedCleanup) seekedCleanup() }
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video ref={videoARef} className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted playsInline preload="auto" style={{ ...videoStyle, opacity: 1 }}>
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <video ref={videoBRef} className="absolute inset-0 w-full h-full object-cover"
          muted playsInline preload="auto" style={{ ...videoStyle, opacity: 0 }}>
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 pt-24 pb-20"
        style={{ y: textY, opacity: contentOpacity }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 1.5 }}
        >
          <img
            src="/Caricatura%20simple..png"
            alt="Felipe Giovanardi"
            className="w-24 h-24 rounded-full object-cover object-top"
            style={{
              border: '2px solid rgba(255,255,255,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          />
        </motion.div>

        <motion.p
          className="text-xs text-white/80 uppercase tracking-[0.25em] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 1.7 }}
        >
          Portfolio · Felipe Giovanardi
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-5xl"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-2.46px' }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 1.9 }}
        >
          Ingeniero Argentino
          <br />
          <em className="not-italic text-white/80">en proceso.</em>
        </motion.h1>

        <motion.button
          onClick={onBeginJourney}
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 2.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          View My Work
        </motion.button>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 2.6 }}
        >
          <motion.div
            className="w-px bg-white/30 origin-top mx-auto"
            style={{ height: '40px' }}
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
