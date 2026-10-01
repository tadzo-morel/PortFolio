import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../config'
import useActiveSection from '../hooks/useActiveSection'

/*
 * Navbar — fixe en haut, floutée, avec lien actif suivi au scroll.
 * Sur mobile : menu burger plein écran.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)))

  // Bordure inférieure qui apparaît après 40 px de scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile à chaque navigation interne
  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-colors ${
        scrolled ? 'border-border' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#accueil"
          className="font-display text-lg font-semibold tracking-tight"
          onClick={close}
        >
          <span className="font-mono text-primary">~/</span>
          morel
        </a>

        {/* Liens desktop */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm transition-colors hover:text-foreground ${
                  active === link.href.slice(1) ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {link.label}
                {/* Ligne d'accent sous le lien actif */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    active === link.href.slice(1) ? 'w-full' : 'w-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px lg:inline-block"
        >
          Me contacter
        </a>

        {/* Burger mobile */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile plein écran */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className={`block rounded-lg px-3 py-3 text-lg transition-colors ${
                    active === link.href.slice(1)
                      ? 'bg-card text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={close}
                className="block rounded-lg bg-primary px-3 py-3 text-center font-semibold text-primary-foreground"
              >
                Me contacter
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
