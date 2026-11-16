import { profile, resume } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-teal/40 px-6 pb-14 pt-20 text-center">
      <p className="font-display text-3xl italic text-paper">{profile.name}</p>
      <p className="mx-auto mt-3 max-w-md text-fog">
        Designed and built by me with React, TypeScript, Tailwind CSS, Framer Motion and Vite.
      </p>
      <p className="mt-2 text-sm text-fog/80">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
        <a href={resume.cvPath} download className="btn-solid">
          Download CV
        </a>
        <a href={resume.cvPath} target="_blank" rel="noreferrer" className="btn-text">
          Open CV
        </a>
      </div>
      <a href="#home" className="btn-text mt-8">
        Back to top
      </a>
    </footer>
  )
}
