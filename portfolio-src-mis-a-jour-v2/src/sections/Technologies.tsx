import { technologies } from '../config'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Technologies" description="La pile que j'utilise au quotidien." />
        <Reveal>
          <ul className="flex flex-wrap gap-3">
            {technologies.map((t) => (
              <li key={t} className="rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
