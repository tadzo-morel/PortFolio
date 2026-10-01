import { profile } from '../config'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import morelPhoto from '../images/morel.png'

export default function About() {
  return (
    <section id="a-propos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="À propos" />

        <div className="grid gap-12 md:grid-cols-[260px_1fr]">
          <Reveal>
            <div className="flex aspect-square max-w-[260px] items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={morelPhoto}
                alt="Photo de profil de Morel Aimé Kenne Tadzo"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-2xl space-y-4 leading-[1.7] text-muted-foreground">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {profile.aboutFacts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <dt className="font-mono text-xs text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}