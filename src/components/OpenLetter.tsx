import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  staggerContainerSlow,
  slideLeft,
  viewport,
} from '../animations'

/* ── SVG logos ─────────────────────────────────────────────────────────── */
const VercelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
)

const ClaudeLogo = () => (
  <svg viewBox="0 0 46 46" className="w-10 h-10" fill="currentColor">
    <path d="M22.93 4.53c-.41 0-.76.28-.87.68L15.2 29.5l-6.84-8.06a.9.9 0 0 0-.69-.32H3.6a.9.9 0 0 0-.69 1.52l10.35 12.2a.9.9 0 0 0 .69.32h2.48c.38 0 .72-.24.85-.6l8.44-28.03c.17-.56-.25-1.1-.83-1.1h-1.96zm.14 0h1.96c.58 0 1 .54.83 1.1L17.42 33.56a.9.9 0 0 1-.85.6h-2.48a.9.9 0 0 1-.69-.32L2.91 21.64a.9.9 0 0 1 .69-1.52h4.07c.27 0 .52.12.69.32l6.84 8.06L21.2 5.21a.9.9 0 0 1 .87-.68h.96zm.14 0h1.81c.39 0 .73.27.86.65l8.55 28.1a.9.9 0 0 1-.86 1.16h-2.48a.9.9 0 0 1-.85-.6l-1.8-5.97H18.8l-1.44-4.77h8.08l-3.06-10.16-1.52 5.03-1.44-4.77 2.11-6.99a.9.9 0 0 1 .86-.68h.62z" />
  </svg>
)

const NextjsLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 4.51 20.368.718 15.929.186A13.898 13.898 0 0 0 11.572 0z" />
  </svg>
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
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <path fill="#E0234E" d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.085.025.13a1.74 1.74 0 0 1-.006.562c-.05.274-.156.53-.302.763l-.005.007-.012.018-.015.023-.034.05a4.476 4.476 0 0 1-.136.175l-.019.02-.017.02-.085.09c-.004.006-.011.01-.016.016l-.022.02-.039.034-.041.035-.044.034-.025.018-.071.05-.097.063-.109.062a4.24 4.24 0 0 1-.178.088c-.06.026-.12.05-.183.07-.063.02-.128.04-.197.056-.063.016-.127.03-.195.04-.063.01-.13.02-.196.025-.065.006-.133.01-.201.01-.068 0-.137-.004-.205-.01a3.84 3.84 0 0 1-.404-.064 4.108 4.108 0 0 1-.383-.11 4.224 4.224 0 0 1-.36-.156 4.47 4.47 0 0 1-.337-.2 4.705 4.705 0 0 1-.315-.247 4.959 4.959 0 0 1-.293-.294 5.13 5.13 0 0 1-.27-.344 5.31 5.31 0 0 1-.248-.394c-.038-.075-.073-.15-.107-.227-.034-.076-.065-.153-.094-.232l-.04-.115c-.026-.08-.05-.16-.07-.242a5.51 5.51 0 0 1-.048-.25c-.013-.085-.023-.17-.03-.256a5.75 5.75 0 0 1-.01-.264c0-.09.004-.177.01-.265.007-.088.016-.174.028-.26a5.55 5.55 0 0 1 .047-.255c.019-.082.04-.163.065-.244.025-.08.052-.16.082-.24.03-.079.063-.157.097-.234.034-.077.072-.153.11-.229.038-.075.078-.15.12-.224.042-.073.086-.145.13-.217.043-.072.09-.143.137-.213.046-.07.094-.14.144-.208.05-.068.1-.136.153-.203.052-.067.106-.133.16-.198a6.136 6.136 0 0 1 .175-.2c.062-.067.125-.133.188-.198.065-.065.13-.13.196-.194.067-.065.136-.128.205-.19.07-.063.14-.125.213-.186.072-.06.145-.12.22-.18.074-.058.15-.116.228-.173.078-.056.157-.112.238-.166.08-.054.163-.107.247-.158.084-.052.17-.102.256-.15.087-.049.176-.096.266-.142.09-.046.18-.09.273-.134.093-.043.187-.085.282-.125.095-.04.192-.079.29-.116.097-.037.196-.073.296-.107.1-.034.2-.067.3-.098.1-.031.202-.06.304-.088.102-.027.204-.053.308-.077.103-.024.208-.046.312-.066.105-.02.21-.04.315-.057.106-.017.213-.032.32-.045.108-.013.216-.024.325-.033.11-.009.219-.016.329-.02.11-.005.22-.007.33-.007z" />
    <path fill="#E0234E" d="M9.869.047c.173 0 .334.037.483.087-.316.21-.49.49-.576.806a1.74 1.74 0 0 0-.006.562c.05.274.156.53.302.763l.005.007.012.018.015.023.034.05c.04.058.086.118.136.175l.019.02.017.02.085.09c.004.006.011.01.016.016l.022.02.039.034.041.035.044.034.025.018.071.05.097.063.109.062c.057.031.117.06.178.088.06.026.12.05.183.07.063.02.128.04.197.056.063.016.127.03.195.04.063.01.13.02.196.025.065.006.133.01.201.01.068 0 .137-.004.205-.01a3.84 3.84 0 0 0 .404-.064 4.108 4.108 0 0 0 .383-.11 4.224 4.224 0 0 0 .36-.156 4.47 4.47 0 0 0 .337-.2 4.705 4.705 0 0 0 .315-.247 4.959 4.959 0 0 0 .293-.294c.093-.11.183-.225.27-.344.086-.118.168-.24.248-.394.038-.075.073-.15.107-.227.034-.076.065-.153.094-.232l.04-.115c.026-.08.05-.16.07-.242a5.51 5.51 0 0 0 .048-.25c.013-.085.023-.17.03-.256a5.75 5.75 0 0 0 .01-.264c0-.09-.004-.177-.01-.265a5.55 5.55 0 0 0-.028-.26 5.55 5.55 0 0 0-.047-.255c-.019-.082-.04-.163-.065-.244-.025-.08-.052-.16-.082-.24-.03-.079-.063-.157-.097-.234-.034-.077-.072-.153-.11-.229-.038-.075-.078-.15-.12-.224-.042-.073-.086-.145-.13-.217-.043-.072-.09-.143-.137-.213-.046-.07-.094-.14-.144-.208-.05-.068-.1-.136-.153-.203-.052-.067-.106-.133-.16-.198a6.136 6.136 0 0 0-.175-.2c-.062-.067-.125-.133-.188-.198-.065-.065-.13-.13-.196-.194-.067-.065-.136-.128-.205-.19-.07-.063-.14-.125-.213-.186-.072-.06-.145-.12-.22-.18-.074-.058-.15-.116-.228-.173-.078-.056-.157-.112-.238-.166-.08-.054-.163-.107-.247-.158-.084-.052-.17-.102-.256-.15-.087-.049-.176-.096-.266-.142-.09-.046-.18-.09-.273-.134-.093-.043-.187-.085-.282-.125-.095-.04-.192-.079-.29-.116-.097-.037-.196-.073-.296-.107-.1-.034-.2-.067-.3-.098-.1-.031-.202-.06-.304-.088-.102-.027-.204-.053-.308-.077-.103-.024-.208-.046-.312-.066-.105-.02-.21-.04-.315-.057-.106-.017-.213-.032-.32-.045-.108-.013-.216-.024-.325-.033-.11-.009-.219-.016-.329-.02-.11-.005-.22-.007-.33-.007z" />
    <path fill="white" d="M12 7.5l-5.5 9.5h11z" opacity=".85" />
  </svg>
)

const TypeScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path
      d="M3.5 13H7v1.5H5.75V19H4.25v-4.5H3V13zm5 0h4v1.5h-1.5v.4c1.3.2 2.25.9 2.25 2.1C13.25 18.2 12.1 19 10.5 19c-.75 0-1.35-.15-1.85-.45l.4-1.15c.35.15.8.25 1.3.25.65 0 1.05-.28 1.05-.72 0-.5-.45-.78-1.3-.78h-.5v-1.2h.4c.75 0 1.15-.25 1.15-.65 0-.38-.3-.6-.95-.6-.45 0-.9.1-1.25.3l-.35-1.15c.5-.22 1.05-.32 1.6-.32V13z"
      fill="white"
    />
  </svg>
)

const JavaScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10">
    <rect width="24" height="24" fill="#F7DF1E" />
    <path
      d="M6.5 17c.3.5.7.85 1.4.85.65 0 1.05-.3 1.05-.75 0-.55-.42-.75-1.15-1.07L7.35 16c-1.15-.48-1.9-1.1-1.9-2.38 0-1.2.92-2.12 2.35-2.12.65 0 1.45.2 1.95.8l-.8.85c-.25-.35-.6-.52-1.15-.52-.55 0-.88.3-.88.68 0 .48.32.67 1.05.98l.45.2c1.35.57 2.1 1.18 2.1 2.5C10.52 18.2 9.5 19 7.9 19c-1.48 0-2.48-.68-2.95-1.65L6.5 17zm5.5-5.4h1.55V17c0 1.2-.57 1.75-1.62 1.75-.3 0-.6-.05-.85-.14l.2-1.18c.14.05.28.1.42.1.33 0 .48-.2.48-.65V11.6h-.18z"
      fill="#333"
    />
  </svg>
)

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#2496ED">
    <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.18.19v1.88c0 .1.08.19.18.19m-2.95-5.43h2.12a.19.19 0 0 0 .19-.19V3.57a.19.19 0 0 0-.19-.18h-2.12a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.19m0 2.71h2.12a.19.19 0 0 0 .19-.18V6.29a.19.19 0 0 0-.19-.18h-2.12a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.09.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.19v1.88c0 .1.08.19.18.19m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.19v1.88c0 .1.08.19.18.19m-2.96 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.18.19v1.88c0 .1.08.19.18.19M23.76 9.9c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09-.25-1.7-1.65-2.53-1.72-2.57l-.34-.2-.23.33c-.28.44-.49.92-.61 1.43-.23.97-.09 1.88.4 2.66-.6.33-1.55.41-1.74.42H.75a.75.75 0 0 0-.75.75 11.38 11.38 0 0 0 .69 4.06c.55 1.43 1.36 2.48 2.41 3.12 1.18.72 3.1 1.14 5.28 1.14.98 0 1.96-.09 2.93-.27a12.25 12.25 0 0 0 3.82-1.39c.98-.57 1.86-1.29 2.61-2.14 1.25-1.42 2-2.99 2.55-4.4h.22c1.37 0 2.22-.55 2.68-1.01.31-.29.55-.65.71-1.05l.1-.29-.24-.17z" />
  </svg>
)

const RailwayLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M3.557 23.24a.566.566 0 0 1-.54-.74l2.495-7.635H1.807a.566.566 0 0 1-.515-.8L10.103.788A.566.566 0 0 1 10.618.5h9.825a.566.566 0 0 1 .54.74l-2.495 7.635h3.705a.566.566 0 0 1 .515.8L13.897 23.21a.566.566 0 0 1-.515.33H3.557z" />
  </svg>
)

const NanoBananaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
    <rect width="24" height="24" rx="5" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.4" />
    <text x="3.5" y="16" fontSize="8.5" fontWeight="800" fill="currentColor" fontFamily="Inter, sans-serif">NB</text>
    <circle cx="19" cy="5" r="2" fill="currentColor" opacity="0.5" />
  </svg>
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
          (Universidad Tecnológica Nacional). I build software the way I believe
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
