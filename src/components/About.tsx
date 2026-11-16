import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { about, profile, stats } from '../data/portfolio'
import Counter from './Counter'
import SectionTitle from './SectionTitle'

const pad = (value: number) => String(value).padStart(2, '0')

/** A running 24 fps timecode, like the readout on a camera. */
function Timecode() {
  const reduce = useReducedMotion()
  const [text, setText] = useState('00:00:00:00')

  useEffect(() => {
    if (reduce) return
    const start = performance.now()
    const id = window.setInterval(() => {
      const elapsed = performance.now() - start
      const seconds = Math.floor(elapsed / 1000)
      const frames = Math.floor((elapsed % 1000) / (1000 / 24))
      setText(
        `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor(seconds / 60) % 60)}:${pad(seconds % 60)}:${pad(frames)}`,
      )
    }, 80)
    return () => window.clearInterval(id)
  }, [reduce])

  return <span className="tabular-nums">{text}</span>
}

const corners = [
  'left-3 top-3 border-l-2 border-t-2',
  'right-3 top-3 border-r-2 border-t-2',
  'bottom-3 left-3 border-b-2 border-l-2',
  'bottom-3 right-3 border-b-2 border-r-2',
]

export default function About() {
  return (
    <section id="about" className="px-6 pt-6 pb-14 md:pt-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="About me" className="mb-2 md:mb-4"/>

        <div className="grid items-start gap-14 md:grid-cols-5 md:gap-20">
          <div className="md:col-span-2">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden bg-deep">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-b from-teal/40 to-deep">
                  <span aria-hidden="true" className="font-display text-[10rem] italic text-paper/80">
                    {profile.name.charAt(0)}
                  </span>
                </div>
              )}

              {corners.map((position) => (
                <span
                  key={position}
                  aria-hidden="true"
                  className={`absolute h-6 w-6 border-paper/70 ${position}`}
                />
              ))}

              <div className="absolute left-5 top-5 flex items-center gap-2 text-xs text-paper">
                <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-rec" />
                REC
              </div>
              <div aria-hidden="true" className="absolute bottom-5 left-5 text-xs text-paper/80">
                <Timecode />
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="max-w-prose space-y-6 text-lg text-paper/90">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-teal/50 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-sm text-fog">{stat.label}</dt>
                  <dd className="font-display text-5xl text-paper md:text-6xl">
                    <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
