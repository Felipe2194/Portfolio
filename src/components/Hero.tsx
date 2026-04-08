import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ease } from '../animations'

const VIDEO_SRC = '/ascii-art.mp4'
const PLAYBACK_RATE = 0.72
const CROSSFADE_BEFORE_END = 2.8 // s antes del final para iniciar crossfade
const CROSSFADE_DURATION = 2600  // ms que dura la transición

interface HeroProps {
  onBeginJourney: () => void
}

export default function Hero({ onBeginJourney }: HeroProps) {
  const ref = useRef<HTMLElement>(null)
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-28%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    // Forzar decodificación en GPU
    a.playbackRate = PLAYBACK_RATE
    b.playbackRate = PLAYBACK_RATE

    // Pre-buffering: cargar el video inactivo desde el primer frame
    b.load()

    let active: HTMLVideoElement = a
    let inactive: HTMLVideoElement = b
    let isFading = false
    let prebuffered = false
    let rafId: number

    const setOpacity = (el: HTMLVideoElement, val: number) => {
      el.style.opacity = String(val)
    }

    const tick = (now: number) => {
      const dur = active.duration

      if (!isFading && dur && isFinite(dur)) {
        const remaining = dur - active.currentTime

        // Pre-buffering: seek el inactivo a 0 con tiempo de sobra
        if (!prebuffered && remaining < CROSSFADE_BEFORE_END + 1) {
          inactive.currentTime = 0
          prebuffered = true
        }

        // Arrancar crossfade
        if (remaining < CROSSFADE_BEFORE_END) {
          isFading = true
          prebuffered = false

          inactive.play().catch(() => {})

          const fadeStart = now
          const from = active
          const to = inactive

          // Swap referencias para el próximo ciclo
          active = to
          inactive = from

          const fadeTick = (t: number) => {
            const progress = Math.min((t - fadeStart) / CROSSFADE_DURATION, 1)
            setOpacity(from, 1 - progress)
            setOpacity(to, progress)

            if (progress < 1) {
              rafId = requestAnimationFrame(fadeTick)
            } else {
              setOpacity(from, 0)
              setOpacity(to, 1)
              from.pause()
              isFading = false
              rafId = requestAnimationFrame(tick)
            }
          }

          rafId = requestAnimationFrame(fadeTick)
          return
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
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
        <video
          ref={videoARef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            opacity: 1,
            willChange: 'opacity',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <video
          ref={videoBRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          style={{
            opacity: 0,
            willChange: 'opacity',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Scrim leve para no apagar el brillo del video */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 pt-24 pb-20"
        style={{ y: textY, opacity: contentOpacity }}
      >
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-7xl"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-2.46px',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 1.9 }}
        >
          Where{' '}
          <em className="not-italic text-muted-foreground">dreams</em>{' '}
          rise{' '}
          <em className="not-italic text-muted-foreground">
            through the silence.
          </em>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 2.05 }}
        >
          We're designing tools for deep thinkers, bold creators, and quiet
          rebels. Amid the chaos, we build digital spaces for sharp focus and
          inspired work.
        </motion.p>

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
          Begin Journey
        </motion.button>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 2.6 }}
        >
          <motion.div
            className="w-px bg-white/30 origin-top"
            style={{ height: '40px' }}
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
