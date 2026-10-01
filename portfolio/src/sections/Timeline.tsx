import { Briefcase, GitBranch, GraduationCap } from 'lucide-react'
import { timeline } from '../config'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons = { formation: GraduationCap, projet: GitBranch, opportunite: Briefcase }

export default function Timeline() {
  return (
    <section id="parcours" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Parcours" />
        <ol className="grid max-w-4xl gap-8 md:grid-cols-2">
          {timeline.map((t) => {
            const Icon = icons[t.type]
            return (
              <li key={t.title} className="relative border-t border-border pt-5">
                <Reveal>
                  <span className="mb-4 flex h-9 w-9 items-center justify-center border border-border bg-card text-primary">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <p className="font-mono text-xs text-muted-foreground">{t.period}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 leading-[1.7] text-muted-foreground">{t.detail}</p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
