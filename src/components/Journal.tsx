import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  slideLeft,
  staggerContainer,
  staggerContainerSlow,
  viewport,
} from '../animations'

const posts = [
  {
    id: 1,
    date: 'Mar 2026',
    title: 'On building in silence',
    excerpt:
      "The most deliberate work happens away from the feed. Some thoughts on deep work, creative solitude, and why I ship less but care more.",
    readTime: '4 min',
  },
  {
    id: 2,
    date: 'Feb 2026',
    title: 'Liquid Glass and the physics of UI',
    excerpt:
      "Apple's spatial design language pushed me to rethink surfaces. Here's how I approached the glassmorphism aesthetic without the cliches.",
    readTime: '6 min',
  },
  {
    id: 3,
    date: 'Jan 2026',
    title: 'Typography as architecture',
    excerpt:
      "Type is infrastructure. Choosing between a serif and a sans is not an aesthetic choice \u2014 it's a structural one. A deep dive into how I approach type systems.",
    readTime: '8 min',
  },
]

export default function Journal() {
  return (
    <section id="journal" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p
          variants={fadeRiseChild}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Thoughts
        </motion.p>
        <motion.h2
          variants={fadeRiseChild}
          className="text-4xl sm:text-6xl font-normal leading-[0.95]"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-1.5px',
          }}
        >
          Journal
        </motion.h2>
      </motion.div>

      {/* Posts list */}
      <motion.div
        className="flex flex-col divide-y divide-white/10"
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {posts.map((post) => (
          <motion.article
            key={post.id}
            variants={slideLeft}
            className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-8 cursor-pointer"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
          >
            <span
              className="text-xs text-muted-foreground shrink-0 pt-1 w-20"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {post.date}
            </span>

            <div className="flex-1">
              <h3
                className="text-xl sm:text-2xl font-normal text-foreground mb-2 group-hover:text-muted-foreground transition-colors duration-300"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {post.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {post.excerpt}
              </p>
            </div>

            <span
              className="text-xs text-muted-foreground shrink-0 pt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {post.readTime}
            </span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
