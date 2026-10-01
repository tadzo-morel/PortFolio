import {
  ArrowDown,
  FileSearch,
  GitCompareArrows,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ScanText,
} from 'lucide-react'
import { profile } from '../config'
import Reveal from '../components/Reveal'

/*
 * Hero — première section : badge de disponibilité, titre d'accroche,
 * ligne de terminal signature, boutons d'action, liens sociaux.
 */
export default function Hero() {
  return (
    <section
      id="accueil"
      className="bg-grid flex min-h-screen items-center"
      aria-label="Introduction"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
        <Reveal>
          {/* Badge de disponibilité — point vert pulsant (animation 2 s du design system) */}
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-green-500" aria-hidden="true" />
            {profile.availability}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {profile.heroTitle}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {profile.heroSubtitle}
          </p>
        </Reveal>

        <Reveal delay={300}>
          {/* Ligne de terminal signature */}
          <p className="mt-6 hidden font-mono text-sm text-muted-foreground sm:block" aria-hidden="true">
            <span className="text-primary">$</span> {profile.terminalLine}
            <span className="ml-1 inline-block h-4 w-2 animate-caret-blink bg-primary align-middle" />
          </p>
        </Reveal>

        <Reveal delay={400}>
          {/* Boutons — pleine largeur sur mobile */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projets"
              className="rounded-lg bg-primary px-7 py-3.5 text-center font-semibold text-primary-foreground transition-transform hover:-translate-y-px"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-7 py-3.5 text-center font-semibold text-foreground transition-colors hover:bg-card"
            >
              Me contacter
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          {/* Liens sociaux */}
          <div className="mt-10 hidden items-center gap-5 text-muted-foreground sm:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir mon GitHub"
              className="transition-colors hover:text-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir mon LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="M'écrire sur WhatsApp"
              className="transition-colors hover:text-foreground"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="M'envoyer un email"
              className="transition-colors hover:text-foreground"
            >
              <Mail size={20} />
            </a>
            <span className="font-mono text-sm">· {profile.location}</span>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <a
            href="#a-propos"
            aria-label="Faire défiler vers le bas"
            className="mt-16 hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
            Découvrir mon profil
          </a>
        </Reveal>
        </div>

        <Reveal delay={300}>
          <aside
            aria-label="Projet sélectionné : analyse et comparaison de CV"
            className="relative mx-auto w-full max-w-xl border border-border bg-card"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3 font-mono text-[11px] text-muted-foreground">
              <span>PROJET / WEB</span>
              <span>PYTHON + REACT</span>
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs text-primary">OUTIL DE PRÉSÉLECTION</p>
              <h2 className="mt-3 max-w-sm font-display text-2xl font-semibold leading-tight">
                Analyse et comparaison de CV
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Prototype full-stack : interface React, API Flask et classement indicatif par métier.
              </p>

              <ol className="mt-7 divide-y divide-border border-y border-border">
                <li className="flex items-center gap-4 py-4">
                  <FileSearch size={19} className="shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm">Importer un CV ou coller son texte</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">01</span>
                </li>
                <li className="flex items-center gap-4 py-4">
                  <ScanText size={19} className="shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm">Obtenir une catégorie proposée</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">02</span>
                </li>
                <li className="flex items-center gap-4 py-4">
                  <GitCompareArrows size={19} className="shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm">Comparer les profils à une offre</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">03</span>
                </li>
              </ol>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-muted-foreground">Prototype étudiant · score indicatif</span>
                <a href="#projets" className="text-sm font-medium text-primary hover:underline">
                  Voir le projet
                </a>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
