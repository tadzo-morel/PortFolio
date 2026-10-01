import { navLinks, profile } from '../config'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{profile.shortName}</p>
          <p className="mt-2 text-sm text-muted-foreground">{profile.title}</p>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a></li>
          <li><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a></li>
          <li><a href={`mailto:${profile.email}`} className="hover:text-foreground">{profile.email}</a></li>
          <li><a href="#accueil" className="hover:text-foreground">Retour en haut</a></li>
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 font-mono text-xs text-muted-foreground">
        © 2026 — conçu et développé par {profile.shortName}
      </p>
    </footer>
  )
}
