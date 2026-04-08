import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  staggerContainerSlow,
  slideLeft,
  viewport,
} from '../animations'

/* ── SVG logos ─────────────────────────────────────────────────────────── */
const VercelLogo = () => (
  <img src="/VercelIcon.png" alt="Vercel" className="w-10 h-10 object-contain" />
)

const ClaudeLogo = () => (
  <img src="/ClaudeIcon.png" alt="Claude" className="w-10 h-10 object-contain" />
)

const NextjsLogo = () => (
  <img src="/Next.JsIcon.svg" alt="Next.js" className="w-10 h-10 object-contain" />
)

const ReactLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.1">
    <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10.5" ry="4" />
    <ellipse cx="12" cy="12" rx="10.5" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10.5" ry="4" transform="rotate(120 12 12)" />
  </svg>
)

const NestjsLogo = () => (
  <img src="/Nest.jsIcon.png" alt="Nest.js" className="w-10 h-10 object-contain" />
)

const TypeScriptLogo = () => (
  <img src="/TypeScriptIcon.png" alt="TypeScript" className="w-10 h-10 object-contain" />
)

const JavaScriptLogo = () => (
  <img src="/javascriptIcon.svg" alt="JavaScript" className="w-10 h-10 object-contain" />
)

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#2496ED">
    <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.18.19v1.88c0 .1.08.19.18.19m-2.95-5.43h2.12a.19.19 0 0 0 .19-.19V3.57a.19.19 0 0 0-.19-.18h-2.12a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.19m0 2.71h2.12a.19.19 0 0 0 .19-.18V6.29a.19.19 0 0 0-.19-.18h-2.12a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.09.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.19v1.88c0 .1.08.19.18.19m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.19v1.88c0 .1.08.19.18.19m-2.96 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.18.19v1.88c0 .1.08.19.18.19M23.76 9.9c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09-.25-1.7-1.65-2.53-1.72-2.57l-.34-.2-.23.33c-.28.44-.49.92-.61 1.43-.23.97-.09 1.88.4 2.66-.6.33-1.55.41-1.74.42H.75a.75.75 0 0 0-.75.75 11.38 11.38 0 0 0 .69 4.06c.55 1.43 1.36 2.48 2.41 3.12 1.18.72 3.1 1.14 5.28 1.14.98 0 1.96-.09 2.93-.27a12.25 12.25 0 0 0 3.82-1.39c.98-.57 1.86-1.29 2.61-2.14 1.25-1.42 2-2.99 2.55-4.4h.22c1.37 0 2.22-.55 2.68-1.01.31-.29.55-.65.71-1.05l.1-.29-.24-.17z" />
  </svg>
)

const RailwayLogo = () => (
  <img src="/RailwayIcon.svg" alt="Railway" className="w-10 h-10 object-contain" />
)

const NanoBananaLogo = () => (
  <img src="/NanoBananaProIcon.png" alt="NanoBananaPro" className="w-10 h-10 object-contain" />
)

const technologies = [
  { name: 'Vercel',        Logo: VercelLogo },
  { name: 'Claude',        Logo: ClaudeLogo },
  { name: 'Next.js',       Logo: NextjsLogo },
  { name: 'React',         Logo: ReactLogo },
  { name: 'Nest.js',       Logo: NestjsLogo },
  { name: 'TypeScript',    Logo: TypeScriptLogo },
  { name: 'JavaScript',    Logo: JavaScriptLogo },
  { name: 'Docker',        Logo: DockerLogo },
  { name: 'Railway',       Logo: RailwayLogo },
  { name: 'NanoBananaPro', Logo: NanoBananaLogo },
]

/* ── Component ──────────────────────────────────────────────────────────── */
export default function OpenLetter() {
  return (
    <section className="relative z-10 px-8 py-32 max-w-5xl mx-auto">
      <motion.p
        className="text-xs text-muted-foreground uppercase tracking-widest mb-16 text-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6 }}
      >
        About this portfolio
      </motion.p>

      <motion.div
        className="flex flex-col gap-8"
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          variants={fadeRiseChild}
          className="text-4xl sm:text-5xl font-normal leading-[1.1]"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.5px' }}
        >
          Hi, I'm Felipe.
        </motion.h2>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          This is my portfolio — a collection of projects, experiments, and
          real work that reflects how I approach software development. I'm
          proudly from Argentina and study Systems Engineering at{' '}
          <em className="not-italic text-foreground">UTN</em>{' '}
          (National Technological University). I build software the way I believe
          it should be built: clean, deliberate, and worth the user's attention.
        </motion.p>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I keep up with AI and the development world by reading what I consider
          the best tech newspaper out there —{' '}
          <em className="not-italic text-foreground">Twitter, currently known as X.</em>
        </motion.p>

        <motion.p
          variants={slideLeft}
          className="text-lg text-foreground/75 leading-relaxed max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Whether you're here to explore my work, discuss a project, or simply
          connect — I'm glad you stopped by.
        </motion.p>

        <motion.p
          variants={fadeRiseChild}
          className="text-xl text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          — Felipe Giovanardi
        </motion.p>
      </motion.div>

      {/* ── Tech marquee ─────────────────────────────────────────────────── */}
      <div className="mt-20 pt-10 border-t border-white/10">
        <motion.p
          className="text-xs text-muted-foreground uppercase tracking-widest mb-8 text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
        >
          Tools & Technologies
        </motion.p>

        {/* Overflow mask */}
        <div
          className="overflow-hidden relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <motion.div
            className="flex gap-5"
            style={{ width: 'max-content' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {/* Duplicate for seamless loop */}
            {[...technologies, ...technologies].map((tech, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 px-6 py-5 rounded-2xl flex-shrink-0 cursor-default select-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  minWidth: '110px',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(255,255,255,0.08)'
                  el.style.borderColor = 'rgba(255,255,255,0.16)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(255,255,255,0.03)'
                  el.style.borderColor = 'rgba(255,255,255,0.07)'
                  el.style.transform = 'translateY(0px)'
                }}
              >
                <div className="text-foreground/60 group-hover:text-foreground transition-colors duration-300">
                  <tech.Logo />
                </div>
                <span
                  className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-center leading-tight whitespace-nowrap"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
