import { useEffect, useState } from 'react'

/*
 * useActiveSection — observe les sections passées en paramètre et
 * retourne l'id de celle actuellement visible.
 * Utilisée par la navbar pour souligner le lien actif.
 */
export default function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // La section est "active" quand elle occupe le tiers haut de l'écran
      { rootMargin: '-30% 0px -60% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
