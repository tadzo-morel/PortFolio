import { useEffect, useRef, type ReactNode } from 'react'

/*
 * Reveal — affiche son contenu avec une légère remontée lorsque
 * l'élément entre dans le viewport (IntersectionObserver natif,
 * aucune bibliothèque d'animation).
 *
 * Délai optionnel (en ms) pour décaler les éléments d'une grille.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el) // une seule fois, comme prévu dans le design system
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
