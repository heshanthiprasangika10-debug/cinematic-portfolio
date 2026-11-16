import { skillGroups } from '../data/portfolio'
import SectionTitle from './SectionTitle'

/** Laid out like end credits: the role on the left, the names on the right. */
export default function Skills() {
  return (
    <section id="skills" className="bg-deep px-6 pt-6 pb-14 md:pt-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Skills"
          deck="The languages, frameworks and tools I build with, grouped by what they do."
        />

        <div className="divide-y divide-teal/40">
          {skillGroups.map((group) => (
            <div key={group.title} className="grid gap-6 py-10 md:grid-cols-[1fr_2fr] md:gap-16">
              <div>
                <h3 className="font-display text-3xl italic text-paper">{group.title}</h3>
                <p className="mt-2 max-w-xs text-fog">{group.blurb}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-x-8 gap-y-3 text-xl text-paper">
                {group.skills.map((name) => (
                  <li key={name} className="transition-colors duration-300 hover:text-tungsten">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
