import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../data/portfolio'
import { Github, Linkedin, Mail } from './Icons'
import SectionTitle from './SectionTitle'

const field =
  'w-full rounded-[2px] border border-teal/60 bg-deep px-4 py-3 text-paper placeholder:text-fog/60 focus:border-tungsten focus:outline-none focus:ring-1 focus:ring-tungsten'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // There is no server behind this form: it opens the visitor's email app with the message filled in.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Message from ${name} via your portfolio`)
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="px-6 pt-6 pb-14 md:pt-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Let's work together"
          deck="Looking for a developer, an intern or a collaborator? Send a message and I'll reply by email."
        />

        <div className="grid gap-16 md:grid-cols-5 md:gap-20">
          <ul className="space-y-5 text-lg md:col-span-2">
            <li>
              <a href={`mailto:${profile.email}`} className="link-quiet max-w-full">
                <Mail /> <span className="min-w-0 break-all">{profile.email}</span>
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="link-quiet">
                <Github /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-quiet">
                <Linkedin /> LinkedIn
              </a>
            </li>
          </ul>

          <form onSubmit={onSubmit} className="space-y-5 md:col-span-3">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-fog">
                Your name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-fog">
                Your email
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={field} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-fog">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required className={field} />
            </div>
            <button type="submit" className="btn-solid">
              Send message
            </button>
            {sent && (
              <p role="status" className="text-sm text-fog">
                Your email app should open with the message ready to send. If it doesn't, write to{' '}
                {profile.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
