import { ExternalLink } from 'lucide-react'
import { cv, profile } from '../config'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Resume() {
  return (
    <section id="cv" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="CV" />
        <Reveal>
          {cv.file ? (
            <div>
              <a
                href={cv.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-px"
              >
                <ExternalLink size={18} aria-hidden="true" /> Consulter mon CV (PDF)
              </a>
              {cv.updated && <p className="mt-3 font-mono text-xs text-muted-foreground">Mis à jour : {cv.updated}</p>}
            </div>
          ) : (
            <p className="max-w-xl rounded-xl border border-dashed border-border p-6 text-muted-foreground">
              Mon CV est disponible sur demande.{' '}
              <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
                Me contacter
              </a>
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
