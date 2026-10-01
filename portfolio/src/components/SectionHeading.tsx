import Reveal from './Reveal'

/*
 * SectionHeading — en-tête standard de chaque section :
 * titre + ligne d'accent à gauche + description optionnelle.
 */
export default function SectionHeading({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <Reveal>
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary" aria-hidden="true" />
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>
        {description && (
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
    </Reveal>
  )
}
