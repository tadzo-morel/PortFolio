# Design system — Portfolio Morel Aimé K.

## Palette (thème sombre recommandé)
- Fond principal #0D1117 · fond cartes #161B22 · bordures #21262D
- Texte #E6EDF3 · texte secondaire #8B949E
- Accent unique : #2F81F7 (bleu) ; vert #3FB950 réservé badge « Disponible » + niveaux ; #D29922 pour « en apprentissage »
- Thème clair alternatif : fond #FFFFFF/#F6F8FA, texte #1F2328/#656D76

## Typographie
- Titres : Space Grotesk 600–700 · Corps : Inter 400–500 · Code/badges : JetBrains Mono
- Échelle : Hero 48–64 · H2 32 · H3 18–20 · corps 16 (line-height 1.7) · badges 12–13

## Boutons
- Primaire : fond accent, rayon 8 px, hover éclaircissement + translateY(-1px)
- Secondaire : transparent, bordure 1 px #30363D
- Tertiaire : lien accent + flèche glissante

## Cartes
- Fond #161B22, bordure 1 px #21262D, rayon 12 px, padding 24 px
- Hover (projets) : bordure accent 40 % + translateY(-4px)

## Navbar
- 64 px, sticky, fond 85 % + blur léger, ligne d'accent sous le lien actif, bordure au scroll

## Hero
- Desktop 2 colonnes (55/45), badge dispo (point vert pulsation 2 s), H1 56 px, ligne terminal signature : ~/douala $ open_to_work --fullstack, rangée d'icônes sociales, grille de fond opacité 3 %

## Compétences
- 4–5 cartes catégorie, chips mono, pastilles de niveau, icônes Lucide cohérentes

## Services
- Grille 3 colonnes, icônes outline, numérotation 01–06 en mono, pastille « consolidation » sur Docker

## Projets
- 1 projet vedette horizontal + grille 2 colonnes, overlay hover Code/Démo, filtres pills, placeholder « Projet en cours » si vide

## Contact
- 2 colonnes (infos + formulaire), select Type de demande, labels flottants, confirmation d'envoi, alternative WhatsApp

## Footer
- 3 colonnes, mention mono « © 2026 — conçu et développé par Morel Aimé K. », retour-en-haut

## Animations (sobres)
- Révélation au scroll (opacity + translateY 16 px, 400 ms, une seule fois) · hover 150–200 ms · point vert 2 s · respect prefers-reduced-motion
- INTERDITS : parallaxe, particules, compteurs animés, glassmorphism généralisé, curseurs custom

## Responsive
- Desktop ≥1024 : conteneur 1100–1200 px, grilles 3–4 col, sections espacées 120 px
- Tablette 768–1023 : grilles 2–3 col, H1 40 px, burger si <900 px
- Mobile <768 : 1 colonne, padding 20 px, boutons pleine largeur, burger plein écran, champs 48 px

## Anti-patterns bannis
Dégradés violet-bleu startup · animations chaînées · mockups 3D flottants · ALL CAPS · >2 polices · curseur personnalisé
