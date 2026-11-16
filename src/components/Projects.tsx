import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import SectionTitle from './SectionTitle'

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const tiltX = useSpring(rotateX, { stiffness: 180, damping: 18 })
  const tiltY = useSpring(rotateY, { stiffness: 180, damping: 18 })

  const onMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || reduce) return
    const box = event.currentTarget.getBoundingClientRect()
    rotateY.set(((event.clientX - box.left) / box.width - 0.5) * 5)
    rotateX.set(-((event.clientY - box.top) / box.height - 0.5) * 5)
  }
  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.article
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileHover={reduce ? undefined : { y: -5 }}
      style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[2px] border border-teal/40 bg-night shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
    >
      <div className="relative aspect-video overflow-hidden bg-deep">
        <img
          src={project.image}
          alt={`Placeholder image for ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-4 left-4 rounded-sm border border-tungsten/50 bg-night/85 px-3 py-1 text-xs font-semibold text-tungsten backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-medium leading-tight text-paper">
          {project.title}
        </h3>
        <p className="mt-4 line-clamp-4 text-paper/75">{project.description}</p>

        {project.tech.length > 0 && (
          <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <li
                key={technology}
                className="rounded-sm border border-teal/50 px-2.5 py-1 text-xs text-fog"
              >
                {technology}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-6 text-sm font-semibold">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-paper underline decoration-tungsten decoration-2 underline-offset-8 transition-colors hover:text-tungsten"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-paper underline decoration-tungsten decoration-2 underline-offset-8 transition-colors hover:text-tungsten"
            >
              Live
            </a>
          )}
          {project.watchUrl && (
            <a
              href={project.watchUrl}
              target="_blank"
              rel="noreferrer"
              className="text-paper underline decoration-tungsten decoration-2 underline-offset-8 transition-colors hover:text-tungsten"
            >
              Watch
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const INITIAL_COUNT = 3

export default function Projects() {
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const categories = ['All', ...Array.from(new Set(projects.map((project) => project.filterCategory)))]
  const visible = projects.filter(
    (project) => filter === 'All' || project.filterCategory === filter,
  )
  const shown = showAll ? visible : visible.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="bg-deep px-6 pt-6 pb-14 md:pt-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Projects" deck="A selection of my web, AI and creative work." />

        <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFilter(category)
                setShowAll(false)
              }}
              aria-pressed={filter === category}
              className={`relative rounded-full px-5 py-2 text-sm transition-colors duration-300 ${
                filter === category ? 'text-night' : 'text-paper hover:text-tungsten'
              }`}
            >
              {filter === category && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-tungsten"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                exit={reduce ? undefined : { opacity: 0, y: 12 }}
                transition={{ duration: 0.45, delay: reduce ? 0 : (index % 3) * 0.06 }}
                className="min-w-0"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visible.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              aria-expanded={showAll}
              className="btn-solid gap-3"
              onClick={() => {
                if (showAll) {
                  setShowAll(false)
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  setShowAll(true)
                }
              }}
            >
              {showAll ? 'See less' : `See more (${visible.length - INITIAL_COUNT} more)`}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
