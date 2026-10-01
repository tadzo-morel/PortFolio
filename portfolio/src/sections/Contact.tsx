import { useState, type FormEvent } from 'react'
import { CheckCircle2, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react'
import { contact } from '../config'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const requestTypes = ['Projet web', 'Stage', 'Mission freelance', 'Collaboration', 'Autre']
const field =
  'h-12 w-full rounded-lg border border-input bg-background px-4 text-foreground outline-none transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-ring/40'

export default function Contact() {
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const type = String(data.get('type') ?? requestTypes[0])
    const message = String(data.get('message') ?? '').trim()

    if (!name) return setError('Indiquez votre nom.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Indiquez une adresse email valide.')
    if (message.length < 10) return setError('Décrivez votre besoin en quelques mots (10 caractères minimum).')

    setError('')
    const subject = encodeURIComponent(`[Portfolio] ${type} — ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Contact" description={contact.intro} />
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-primary" aria-hidden="true" />
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  WhatsApp : {contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={18} className="text-primary" aria-hidden="true" />
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" aria-hidden="true" />
                {contact.location}
              </li>
            </ul>
            <p className="mt-6 font-mono text-sm text-muted-foreground">{contact.responseTime}</p>
          </Reveal>

          <Reveal delay={100}>
            {sent ? (
              <div role="status" className="rounded-xl border border-border bg-card p-6">
                <p className="flex items-center gap-2 font-display text-lg font-semibold">
                  <CheckCircle2 size={20} className="text-green-500" aria-hidden="true" /> Votre message est prêt
                </p>
                <p className="mt-3 leading-[1.7] text-muted-foreground">
                  Votre application mail s'est ouverte avec le message pré-rempli : il ne reste qu'à l'envoyer.
                  Si rien ne s'ouvre, écrivez-moi à {contact.email} ou sur WhatsApp au {contact.whatsappDisplay}.
                </p>
                <button type="button" onClick={() => setSent(false)} className="mt-4 text-sm font-medium text-primary hover:underline">
                  Écrire un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted-foreground">Nom</label>
                  <input id="name" name="name" autoComplete="name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted-foreground">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" className={field} />
                </div>
                <div>
                  <label htmlFor="type" className="mb-1.5 block text-sm text-muted-foreground">Type de demande</label>
                  <select id="type" name="type" className={field}>
                    {requestTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-muted-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-input bg-background p-4 text-foreground outline-none transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-ring/40"
                  />
                </div>
                {error && (
                  <p role="alert" className="text-sm text-red-400">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-px sm:w-auto"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
