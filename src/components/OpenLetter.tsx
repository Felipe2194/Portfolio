import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  staggerContainerSlow,
  slideLeft,
  viewport,
} from '../animations'

const technologies = [
  {
    name: 'Vercel',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 4.51 20.368.718 15.929.186A13.898 13.898 0 0 0 11.572 0z" />
      </svg>
    ),
  },
  {
    name: 'React',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Nest.js',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M13.872 2.02a1.5 1.5 0 0 0-1.868.173L5.276 8.92A1.5 1.5 0 0 0 5.8 11.37l1.15.46-4.486 4.487A1.5 1.5 0 0 0 3.5 18.44l.92 1.84a1.5 1.5 0 0 0 1.342.83h12.476a1.5 1.5 0 0 0 1.342-.83l.92-1.84a1.5 1.5 0 0 0-.964-2.124l-4.486-4.487 1.15-.46a1.5 1.5 0 0 0 .524-2.45L9.996 2.193a1.5 1.5 0 0 0-1.868-.173z" opacity=".5" />
        <path d="M16 7c-1.5 0-2.5.8-3 2 .5-.5 1.1-.8 2-.8 1.7 0 2.5 1.3 2.5 2.8 0 2-1.3 3-3 3-2 0-3.5-1.4-3.5-4C11 7.4 12.8 6 16 6c.3 0 .7 0 1 .1V7h-1z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M3 12.5h4v1.25H5.5V18H4v-4.25H3V12.5z" fill="white" />
        <path d="M8 12.5h3.5v1.25H9.75v.5c1.1.15 2 .75 2 2C11.75 17.5 10.7 18.25 9.25 18.25c-.7 0-1.3-.15-1.75-.4l.35-1.1c.35.15.75.25 1.15.25.65 0 1-.25 1-.7 0-.5-.4-.75-1.25-.75H8.25V14.5H9c.65 0 .95-.25.95-.6 0-.35-.25-.55-.9-.55-.45 0-.85.1-1.15.25L7.6 12.3c.45-.2.95-.3 1.4-.3V12.5z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" fill="#F7DF1E" />
        <path d="M6 16.5c.35.6.8 1 1.6 1 .65 0 1.05-.3 1.05-.75 0-.55-.45-.75-1.2-1.05L7 15.4C5.85 15 5 14.35 5 13c0-1.25 1-2.2 2.5-2.2.75 0 1.6.2 2.1.85l-.85.8c-.25-.35-.7-.55-1.2-.55-.6 0-.95.3-.95.7 0 .5.35.7 1.1 1l.45.2c1.3.55 2.15 1.2 2.15 2.55C10.3 17.5 9.2 18.5 7.6 18.5c-1.5 0-2.55-.7-3-1.7l1.4-.8zm5.25-5.6h1.6V16.5c0 1.25-.6 1.85-1.65 1.85-.35 0-.65-.05-.9-.15l.2-1.2c.15.05.3.1.45.1.35 0 .5-.2.5-.65V10.9h-.2z" fill="#333" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
      </svg>
    ),
  },
  {
    name: 'Railway',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M3.557 23.24a.566.566 0 0 1-.54-.74l2.495-7.635H1.807a.566.566 0 0 1-.515-.8L10.103.788A.566.566 0 0 1 10.618.5h9.825a.566.566 0 0 1 .54.74l-2.495 7.635h3.705a.566.566 0 0 1 .515.8L13.897 23.21a.566.566 0 0 1-.515.33H3.557z" />
      </svg>
    ),
  },
  {
    name: 'NanoBananaPro',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <text x="4" y="16" fontSize="8" fontWeight="700" fill="currentColor" fontFamily="Inter, sans-serif">NB</text>
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
}

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
          I work at the intersection of engineering and design — where a
          well-structured codebase meets a product that genuinely serves people.
          Good software, to me, is invisible to the user but{' '}
          <em className="not-italic text-foreground">
            unforgettable in its effect.
          </em>
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

      {/* Tech stack animated grid */}
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

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default select-none"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              whileHover={{
                y: -4,
                background: 'rgba(255,255,255,0.07)',
                borderColor: 'rgba(255,255,255,0.14)',
                transition: { duration: 0.2 },
              }}
            >
              <div className="text-foreground/60 group-hover:text-foreground transition-colors duration-300">
                {tech.logo}
              </div>
              <span
                className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-center leading-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
