import { useState } from 'react'
import { services, type Service } from '../config'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export default function Services() {
  const [current, setCurrent] = useState<{ s: Service; n: number } | null>(null)

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title="Services"
          description="Trois façons de contribuer à votre application web."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 60}>
              <button
                type="button"
                onClick={() => setCurrent({ s, n: i + 1 })}
                className="flex h-full w-full flex-col rounded-xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/40"
              >
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-[1.7] text-muted-foreground">{s.description}</p>
                {s.consolidating && (
                  <span className="mt-4 w-fit rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                    en consolidation
                  </span>
                )}
                <span className="mt-4 text-sm font-medium text-primary">Voir le détail</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={current !== null} onOpenChange={(o) => !o && setCurrent(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          {current && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display">
                  {String(current.n).padStart(2, '0')} · {current.s.title}
                </DialogTitle>
                <DialogDescription>{current.s.problem}</DialogDescription>
              </DialogHeader>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs text-muted-foreground">Exemple</dt>
                  <dd className="mt-1">{current.s.example}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-muted-foreground">Pour qui</dt>
                  <dd className="mt-1">{current.s.target}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-muted-foreground">Technologies</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {current.s.tech.map((t) => (
                      <span key={t} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              {current.s.consolidating && (
                <p className="text-sm text-muted-foreground">Proposé pour des besoins simples uniquement.</p>
              )}
              <a
                href="#contact"
                onClick={() => setCurrent(null)}
                className="rounded-lg bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
              >
                {current.s.cta}
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
