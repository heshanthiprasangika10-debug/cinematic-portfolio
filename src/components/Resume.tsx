import { resume } from '../data/portfolio'
import SectionTitle from './SectionTitle'

export default function Resume() {
  return (
    <section id="resume" className="bg-deep px-6 pt-6 pb-14 md:pt-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Resume" deck="Experience, education and the skills I bring to my work." />

        <header className="grid gap-8 border-b border-teal/40 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="font-display text-4xl text-paper md:text-5xl">{resume.name}</h3>
            <p className="mt-3 text-xl text-tungsten">{resume.headline}</p>
            <p className="mt-1 text-fog">{resume.location}</p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper">
              <li>
                <a href={resume.links.linkedin} target="_blank" rel="noreferrer" className="btn-text">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={resume.links.github} target="_blank" rel="noreferrer" className="btn-text">
                  GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${resume.links.email}`} className="btn-text">
                  {resume.links.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href={resume.cvPath} download className="btn-solid">
              Download CV
            </a>
            <a href={resume.cvPath} target="_blank" rel="noreferrer" className="btn-text">
              View CV
            </a>
          </div>
        </header>

        <div className="grid gap-14 pt-10 md:grid-cols-2 md:gap-16">
          <section aria-labelledby="resume-summary">
            <h3 id="resume-summary" className="font-display text-3xl italic text-paper">
              Profile
            </h3>
            <p className="mt-4 max-w-prose text-lg text-fog">{resume.summary}</p>
          </section>

          <section aria-labelledby="resume-skills">
            <h3 id="resume-skills" className="font-display text-3xl italic text-paper">
              Skills
            </h3>
            <div className="mt-4 divide-y divide-teal/40">
              {resume.skillGroups.map((group) => (
                <div key={group.title} className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <h4 className="text-sm font-semibold text-tungsten">{group.title}</h4>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-paper">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-experience">
            <h3 id="resume-experience" className="font-display text-3xl italic text-paper">
              Experience
            </h3>
            <ol className="mt-6 space-y-8 border-l border-teal/60 pl-6">
              {resume.experience.map((item) => (
                <li key={`${item.title}-${item.organization}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.7rem] top-2 h-2.5 w-2.5 border border-tungsten bg-deep"
                  />
                  <p className="text-sm text-fog">{item.period}</p>
                  <h4 className="mt-1 font-display text-2xl text-paper">{item.title}</h4>
                  {item.organization && <p className="text-tungsten">{item.organization}</p>}
                  {item.details && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-fog marker:text-teal-soft">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="resume-education">
            <h3 id="resume-education" className="font-display text-3xl italic text-paper">
              Education
            </h3>
            <ol className="mt-6 space-y-8 border-l border-teal/60 pl-6">
              {resume.education.map((item) => (
                <li key={`${item.title}-${item.period}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.7rem] top-2 h-2.5 w-2.5 border border-tungsten bg-deep"
                  />
                  <p className="text-sm text-fog">{item.period}</p>
                  <h4 className="mt-1 font-display text-2xl text-paper">{item.title}</h4>
                  {item.organization && <p className="text-tungsten">{item.organization}</p>}
                  {item.details && (
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-fog">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="resume-certifications">
            <h3 id="resume-certifications" className="font-display text-3xl italic text-paper">
              Certifications
            </h3>
            <ul className="mt-4 space-y-2 text-fog">
              {resume.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="resume-languages">
            <h3 id="resume-languages" className="font-display text-3xl italic text-paper">
              Languages
            </h3>
            <ul className="mt-4 space-y-2 text-fog">
              {resume.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
