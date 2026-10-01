import { skillCategories, skillLegend } from '../config'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section id="competences" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title="Compétences"
          description="Classées selon mon niveau réel : ce que je pratique en projet, et ce que je suis en train d'apprendre."
        />
        <Reveal>
          <ul className="mb-8 flex flex-wrap gap-3 text-sm" aria-label="Légende des niveaux">
            {Object.values(skillLegend).map((l) => (
              <li key={l.label} className={`rounded-full border px-3 py-1 font-mono text-xs ${l.classes}`}>
                {l.label}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      title={skillLegend[s.level].label}
                      className={`rounded-md border px-2.5 py-1 font-mono text-[13px] ${skillLegend[s.level].classes}`}
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
