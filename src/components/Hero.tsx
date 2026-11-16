import { motion, useReducedMotion } from 'framer-motion'
import { profile, resume } from '../data/portfolio'
import { EASE, introDelay } from '../lib/motion'

export default function Hero() {
  const reduce = useReducedMotion()
  const base = introDelay(reduce)

  return (
    <section id="home" className="relative min-h-screen">
      <div className="flex min-h-screen items-center overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <motion.div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.58fr)] md:gap-10">
            <div className="min-w-0">
              <motion.h1
                aria-label={profile.name}
                className="origin-left font-display text-[clamp(3.25rem,15vw,15rem)] font-medium leading-none tracking-tight text-paper md:text-[clamp(3.25rem,9vw,8rem)]"
              >
                {profile.name.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    aria-hidden="true"
                    className="inline-block"
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: EASE, delay: base + index * 0.07 }}
                  >
                    <motion.span
                      className="inline-block cursor-default"
                      whileHover={{ y: -14, color: '#ff9d4d', transition: { duration: 0.2 } }}
                    >
                      {letter}
                    </motion.span>
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: EASE, delay: base + 0.9 }}
              >
                <p className="mt-8 max-w-xl font-display text-2xl italic text-paper/90 md:text-3xl">
                  {profile.headline}
                </p>
                <p className="mt-4 max-w-lg text-fog">{profile.intro}</p>
                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                  <a href="#projects" className="btn-solid">
                    See projects
                  </a>
                  <a href="#contact" className="btn-text">
                    Get in touch
                  </a>
                  <a href={resume.cvPath} download className="btn-solid">
                    Download CV
                  </a>
                  <a href={resume.cvPath} target="_blank" rel="noreferrer" className="btn-text">
                    Open CV
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: 32 }}
              animate={
                reduce
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                      y: [0, -5, 0],
                    }
              }
              transition={{
                opacity: { duration: 0.9, ease: EASE, delay: base + 0.9 },
                x: { duration: 0.9, ease: EASE, delay: base + 0.9 },
                y: { duration: 6, ease: 'easeInOut', repeat: Infinity, delay: base + 1.8 },
              }}
              className="relative mx-auto mt-4 aspect-[832/1120] w-full max-w-[220px] overflow-hidden rounded-xl border border-teal/50 bg-deep shadow-[0_0_30px_rgba(31,90,96,0.3)] md:ml-auto md:mt-8 md:max-w-none"
            >
              <video
                autoPlay={!reduce}
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-poster.jpg"
                aria-label="Heshanthi Prasangika intro video"
                className="absolute inset-0 h-full w-full object-contain"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-[8vh] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-xs text-fog"
        >
          <span>Scroll</span>
          <span className="relative block h-10 w-px overflow-hidden bg-paper/20">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-tungsten"
              animate={reduce ? undefined : { y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  )
}
