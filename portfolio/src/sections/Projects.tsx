import { useState } from 'react'
import { Github, Users } from 'lucide-react'
import { projects, projectFilters, type Project } from '../config'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

type Filter = (typeof projectFilters)[number]

function ProjectCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  return (
    <article
      className={`group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:border-primary/40 ${
        featured ? 'md:flex-row md:gap-10' : ''
      }`}
    >
      <div className={featured ? 'md:w-1/2' : ''}>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="rounded-md border border-border px-2 py-0.5">{p.category}</span>
          {p.team && (
            <span className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-0.5">
              <Users size={12} aria-hidden="true" /> Équipe
            </span>
          )}
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>
        <p className="mt-1 text-sm text-primary">{p.tagline}</p>
      </div>
      <div className={`mt-4 flex flex-1 flex-col ${featured ? 'md:mt-0 md:w-1/2' : ''}`}>
        <p className="leading-[1.7] text-muted-foreground">{p.description}</p>
        <p className="mt-4 text-sm">
          <span className="text-muted-foreground">Mon rôle : </span>
          {p.role}
        </p>
        {p.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <li key={t} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        )}
        {!p.documented && (
          <p className="mt-4 font-mono text-xs text-muted-foreground">Documentation détaillée en cours</p>
        )}
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-primary hover:underline"
        >
          <Github size={16} aria-hidden="true" /> Voir le code
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('Tous')
  const documentedProjects = projects.filter((p) => p.documented)
  const list = filter === 'Tous' ? documentedProjects : documentedProjects.filter((p) => p.category === filter)
  const [featured, ...rest] = list

  return (
    <section id="projets" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title="Projets"
          description="Quelques projets documentés, avec les technologies et mon rôle précisés."
        />
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === f
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {list.length} {list.length > 1 ? 'projets affichés' : 'projet affiché'} — filtre {filter}
        </p>

        {featured ? (
          <div key={filter} className="project-results space-y-6">
            <ProjectCard p={featured} featured />
            {rest.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {rest.map((p) => (
                  <Reveal key={p.name}>
                    <ProjectCard p={p} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
            <p className="font-display text-lg text-foreground">Projet en cours</p>
            <p className="mt-2">Pas encore de fiche documentée dans cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  )
}
