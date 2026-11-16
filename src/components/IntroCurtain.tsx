import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { EASE, SHOW_INTRO, markIntroSeen } from '../lib/motion'

/** A short film-leader countdown, then the screen splits open onto the hero. Plays once per session. */
export default function IntroCurtain() {
  const reduce = useReducedMotion()
  const active = SHOW_INTRO && !reduce
  const [count, setCount] = useState(3)
  const [done, setDone] = useState(!active)

  useEffect(() => {
    if (!active) return
    document.body.style.overflow = 'hidden'
    const timers = [
      window.setTimeout(() => setCount(2), 550),
      window.setTimeout(() => setCount(1), 1100),
      window.setTimeout(() => {
        setDone(true)
        markIntroSeen()
      }, 1650),
    ]
    return () => {
      timers.forEach((id) => window.clearTimeout(id))
      document.body.style.overflow = ''
    }
  }, [active])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div key="intro" className="fixed inset-0 z-[100]" aria-hidden="true">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-night"
            exit={{ y: '-100%', transition: { duration: 0.9, ease: EASE } }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-night"
            exit={{ y: '100%', transition: { duration: 0.9, ease: EASE } }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-paper/30 sm:h-56 sm:w-56">
              <span className="absolute inset-x-[-3rem] top-1/2 h-px bg-paper/20" />
              <span className="absolute inset-y-[-3rem] left-1/2 w-px bg-paper/20" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={count}
                  className="relative font-display text-8xl text-paper sm:text-9xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
