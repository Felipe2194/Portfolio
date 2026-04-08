import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ease } from '../animations'

const VIDEO_SRC      = '/hero-video.mp4'
const PLAYBACK_RATE  = 0.5   // 0.5 = video de 8s dura 16s reales; valor que los navegadores optimizan
const PRELOAD_AHEAD  = 5     // media-segundos antes del final para hacer seek en el inactivo
const FADE_AHEAD     = 3.5   // media-segundos antes del final para arrancar el crossfade
const FADE_MS        = 3000  // duración del crossfade en ms de reloj real

interface HeroProps {
  onBeginJourney: () => void
}

// Estilos GPU para los videos — declarados fuera del componente para no recrearlos
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

    // ── Estado del ciclo ──────────────────────────────────────────────────
    type State = 'playing' | 'preloading' | 'fading'
    let state: State = 'playing'
    let activeEl: HTMLVideoElement   = a
    let inactiveEl: HTMLVideoElement = b
    let inactiveReady = false
    let fadeStartMs   = 0
    let rafId: number

    // Limpia el listener anterior si se vuelve a llamar preloadInactive
    let seekedCleanup: (() => void) | null = null

    // ── Prepara el video inactivo: seek a 0 y espera que el frame esté listo
    const preloadInactive = () => {
      state = 'preloading'
      inactiveReady = false

      // Limpia listener previo si hubiera
      if (seekedCleanup) { seekedCleanup(); seekedCleanup = null }

      const onSeeked = () => {
        inactiveReady = true
        seekedCleanup = null
      }
      inactiveEl.addEventListener('seeked', onSeeked, { once: true })
      seekedCleanup = () => inactiveEl.removeEventListener('seeked', onSeeked)

      inactiveEl.playbackRate = PLAYBACK_RATE
      // Seek a 0.05s en lugar de 0 para garantizar que siempre se dispare 'seeked'
      inactiveEl.currentTime = 0.05
    }

    // ── Loop principal a 60 fps ───────────────────────────────────────────
    const tick = (now: number) => {
      const dur = activeEl.duration

      if (isFinite(dur) && dur > 0) {
        const remaining = dur - activeEl.currentTime

        // 1. Iniciar precarga del video inactivo
        if (state === 'playing' && remaining < PRELOAD_AHEAD) {
          preloadInactive()
        }

        // 2. Arrancar crossfade cuando el inactivo ya tiene frame listo
        if (state === 'preloading' && remaining < FADE_AHEAD) {
          if (inactiveReady) {
            // Inactivo listo → fade normal
            state = 'fading'
            fadeStartMs = now
            inactiveEl.play().catch(() => {})
          } else if (remaining < 0.4) {
            // Fallback de emergencia: fade de todas formas para evitar freeze negro
            state = 'fading'
            fadeStartMs = now
            inactiveEl.play().catch(() => {})
          }
        }
      }

      // 3. Animar opacidades durante el fade
      if (state === 'fading') {
        const p = Math.min((now - fadeStartMs) / FADE_MS, 1)
        // from + to siempre suman 1 → nunca hay hueco transparente
        activeEl.style.opacity   = String(1 - p)
        inactiveEl.style.opacity = String(p)

        if (p >= 1) {
          // Completado: el inactivo toma el control
          activeEl.style.opacity   = '0'
          inactiveEl.style.opacity = '1'
          activeEl.pause()
          activeEl.currentTime = 0  // resetear para el próximo ciclo (sin seek visible)

          // Swap referencias
          const tmp = activeEl
          activeEl   = inactiveEl
          inactiveEl = tmp

          state = 'playing'
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    // ── Arranque ──────────────────────────────────────────────────────────
    a.playbackRate = PLAYBACK_RATE
    // Video B empieza cargado pero no reproduciéndose, opacidad 0
    b.style.opacity = '0'

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      if (seekedCleanup) seekedCleanup()
    }
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
          style={{ ...videoStyle, opacity: 1 }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <video
          ref={videoBRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          style={{ ...videoStyle, opacity: 0 }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Scrim */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 pt-24 pb-20"
        style={{ y: textY, opacity: contentOpacity }}
      >
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-7xl"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-2.46px' }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 1.9 }}
        >
          Where{' '}
          <em className="not-italic text-muted-foreground">dreams</em>{' '}
          rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
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
