import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data/portfolio'
import SectionTitle from './SectionTitle'

/** The timeline is a strip of film, and a playhead follows your scroll down it. */
export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.5'] })
  const playhead = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 })

  return (
    <section id="experience" className="px-6 pt-6 pb-14 md:pt-8 md:pb-16">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Experience" deck="Work, study and training, newest first." />

        <div ref={ref} className="relative">
          <div aria-hidden="true" className="film-rail absolute bottom-0 left-0 top-0 w-6">
            <motion.div
              style={{ scaleY: playhead }}
              className="absolute inset-y-0 left-[11px] w-0.5 origin-top bg-tungsten shadow-[0_0_12px_2px_rgba(255,157,77,0.6)]"
            />
          </div>

          <ol>
            {experience.map((item) => (
              <li key={`${item.role}-${item.org}`} className="relative pb-16 pl-14 last:pb-0 md:pl-24">
                <span
                  aria-hidden="true"
                  className="absolute left-[6px] top-2 h-3 w-3 border border-tungsten bg-night"
                />
                <p className="text-sm text-fog">{item.period}</p>
                <h3 className="mt-1 font-display text-3xl text-paper md:text-4xl">{item.role}</h3>
                <p className="mt-1 text-lg text-tungsten">{item.org}</p>
                <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 text-fog marker:text-teal-soft">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
