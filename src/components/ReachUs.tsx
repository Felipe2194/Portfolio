import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  fadeRiseChild,
  fadeIn,
  scaleIn,
  staggerContainer,
  staggerContainerSlow,
  viewport,
  ease,
} from '../animations'

const fields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
] as const

export default function ReachUs() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section id="reach" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
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
            Contact
          </motion.p>
          <motion.h2
            variants={fadeRiseChild}
            className="text-4xl sm:text-6xl font-normal leading-[0.95] mb-6"
            style={{
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: '-1.5px',
            }}
          >
            Let's build
            <br />
            <em className="not-italic text-muted-foreground">
              something quiet.
            </em>
          </motion.h2>
          <motion.p
            variants={fadeRiseChild}
            className="text-base text-muted-foreground leading-relaxed max-w-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Open to collaborations, commissions, and conversations with people
            building things that matter.
          </motion.p>
        </motion.div>

        {/* Right: form */}
        <motion.div
          className="liquid-glass rounded-2xl p-8"
          style={{ background: 'rgba(255,255,255,0.03)' }}
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {status === 'sent' ? (
            <motion.div
              className="flex flex-col items-center justify-center py-12 text-center gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeRiseChild}
                className="text-3xl text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Message received.
              </motion.p>
              <motion.p
                variants={fadeRiseChild}
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I'll be in touch soon.
              </motion.p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              variants={staggerContainerSlow}
              initial="hidden"
              animate="visible"
            >
              {fields.map((field) => (
                <motion.div
                  key={field.id}
                  variants={fadeIn}
                  className="flex flex-col gap-2"
                >
                  <label
                    htmlFor={field.id}
                    className="text-xs text-muted-foreground uppercase tracking-widest"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-white/20 outline-none focus:border-white/30 transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </motion.div>
              ))}

              <motion.div variants={fadeIn} className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs text-muted-foreground uppercase tracking-widest"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-white/20 outline-none focus:border-white/30 transition-colors duration-200 resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </motion.div>

              <motion.button
                type="submit"
                variants={fadeRiseChild}
                className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground mt-2 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease }}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
