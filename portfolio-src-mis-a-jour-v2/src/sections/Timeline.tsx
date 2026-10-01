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
        <ol className="max-w-2xl border-l border-border">
          {timeline.map((t) => {
            const Icon = icons[t.type]
            return (
              <li key={t.title} className="relative pb-10 pl-8 last:pb-0">
                <Reveal>
                  <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-primary">
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
