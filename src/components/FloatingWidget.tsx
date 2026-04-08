import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { ease } from '../animations'

export default function FloatingWidget() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStep('sent')
    setTimeout(() => {
      setStep('idle')
      setOpen(false)
    }, 2500)
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease }}
            className="liquid-glass rounded-2xl w-80 overflow-hidden"
            style={{ background: 'rgba(10, 26, 40, 0.92)' }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex flex-col">
                <span
                  className="text-sm text-foreground"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Quick message
                </span>
                <span
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  I'll reply within 24h
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X size={15} />
              </button>
            </div>

            {/* Panel body */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                {step === 'sent' ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-6 gap-3 text-center"
                  >
                    <p
                      className="text-xl text-foreground"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      Message sent.
                    </p>
                    <p
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Talk soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-3"
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-transparent border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-white/20 outline-none focus:border-white/25 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                    <textarea
                      rows={3}
                      placeholder="What are you building?"
                      required
                      className="bg-transparent border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-white/20 outline-none focus:border-white/25 transition-colors resize-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                    <motion.button
                      type="submit"
                      className="liquid-glass flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm text-foreground cursor-pointer w-full"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Send size={13} />
                      Send
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => { setOpen((v) => !v); setStep('idle') }}
        className="liquid-glass w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
        style={{ background: 'rgba(255,255,255,0.06)' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.2, ease }}
        animate={{ rotate: open ? 90 : 0 }}
        aria-label="Toggle contact widget"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={18} className="text-foreground" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={18} className="text-foreground" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
