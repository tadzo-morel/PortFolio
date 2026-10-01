/*
 * config.ts — TOUT le contenu du portfolio est centralisé ici.
 *
 * Pour modifier ton portfolio (textes, compétences, projets, liens),
 * tu modifies uniquement ce fichier — jamais les composants.
 *
 * Règle d'honnêteté : rien dans ce fichier ne doit prétendre
 * une compétence ou une fonctionnalité que tu ne maîtrises pas.
 */

/* ---------- Types ---------- */

export type SkillLevel = 'intermediaire' | 'apprentissage'

export interface SkillCategory {
  title: string
  skills: { name: string; level: SkillLevel }[]
}

export type ProjectCategory = 'Web' | 'Mobile' | 'API' | 'Data'

export interface Project {
  name: string
  /** Phrase d'accroche orientée valeur */
  tagline: string
  /** Ce que le projet fait — uniquement des faits confirmés */
  description: string
  category: ProjectCategory
  /** Technologies réellement utilisées (on n'invente rien) */
  tech: string[]
  /** Ton rôle exact, surtout pour les projets d'équipe */
  role: string
  github: string
  /** false = dépôt listé mais contenu à documenter avec Morel */
  documented: boolean
  /** true = projet d'équipe */
  team?: boolean
}

export interface Service {
  title: string
  description: string
  /** Le problème client résolu, en une phrase */
  problem: string
  tech: string[]
  example: string
  target: string
  cta: string
  /** Technologies en consolidation — affiché avec honnêteté */
  consolidating?: boolean
}

/* ---------- Profil ---------- */

export const profile = {
  name: 'Morel Aimé Kenne Tadzo',
  shortName: 'Morel Aimé K.',
  title: 'Développeur d\u2019applications Full-Stack (Web & Mobile)',
  status: '\u00c9tudiant en Master 1 — Développement d\u2019applications',
  location: 'Douala, Cameroun',
  email: 'moreltadzo@gmail.com',
  github: 'https://github.com/tadzo-morel',
  linkedin: 'https://www.linkedin.com/in/morel-aime-kenne-tadzo-9472012ab',
  whatsapp: 'https://wa.me/237683082189',
  whatsappDisplay: '+237 683082189',
  availability: 'Disponible pour stages & missions freelance',
  heroTitle: 'Je transforme vos id\u00e9es en applications web et mobiles fonctionnelles.',
  heroSubtitle:
    'Développeur basé à Douala, en Master 1. Je conçois des applications web et mobiles avec Java, Python et leurs frameworks — du back-end Spring Boot aux interfaces React et Angular.',
  terminalLine: '~/douala $ open_to_work --fullstack',
  about: [
    'Actuellement en Master 1 en développement d\u2019applications, je me forme au métier de développeur full-stack avec une double orientation web et mobile Android.',
    'Je travaille principalement avec Java et Spring Boot côté back-end, et React / Angular côté front-end, en complément avec Python et Flask. Je structure mes projets avec Git et GitHub/GitLab.',
    'Dans les projets d\u2019équipe, je participe principalement comme développeur back-end.',
  ],
  aboutFacts: [
    { label: 'Formation', value: 'Master 1 — Dev. d\u2019applications' },
    { label: 'Localisation', value: 'Douala, Cameroun' },
    { label: 'Rôle en équipe', value: 'Développeur back-end' },
  ],
}

/* ---------- Navigation ---------- */

export const navLinks = [
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Services', href: '#services' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
]

/* ---------- Compétences (niveaux honnêtes) ---------- */

export const skillLegend = {
  intermediaire: {
    label: 'Intermédiaire',
    // ambre — pratiqué en projets réels
    classes: 'bg-amber-400/10 text-amber-400 border-amber-400/30',
  },
  apprentissage: {
    label: 'En apprentissage',
    // bleu — en consolidation
    classes: 'bg-primary/10 text-primary border-primary/30',
  },
} as const

export const skillCategories: SkillCategory[] = [
  {
    title: 'Langages',
    skills: [
      { name: 'Java', level: 'intermediaire' },
      { name: 'Python', level: 'intermediaire' },
      { name: 'C', level: 'intermediaire' },
    ],
  },
  {
    title: 'Front-end',
    skills: [
      { name: 'React', level: 'intermediaire' },
      { name: 'Angular', level: 'intermediaire' },
    ],
  },
  {
    title: 'Back-end',
    skills: [
      { name: 'Spring Boot', level: 'intermediaire' },
      { name: 'Flask', level: 'intermediaire' },
    ],
  },
  {
    title: 'Bases de données',
    skills: [
      { name: 'MySQL', level: 'intermediaire' },
      { name: 'PostgreSQL', level: 'intermediaire' },
    ],
  },
  {
    title: 'Mobile',
    skills: [{ name: 'Android', level: 'apprentissage' }],
  },
  {
    title: 'Outils & pratiques',
    skills: [
      { name: 'Git', level: 'intermediaire' },
      { name: 'GitHub / GitLab', level: 'intermediaire' },
      { name: 'Figma', level: 'intermediaire' },
      { name: 'Docker', level: 'apprentissage' },
      { name: 'VS Code', level: 'intermediaire' },
      { name: 'IntelliJ IDEA', level: 'intermediaire' },
    ],
  },
]

/* ---------- Projets (les 6 retenus — sélection validée avec Morel) ---------- */

export const projects: Project[] = [
  {
    name: 'Moteur de rapports',
    tagline: 'Des rapports exploitables à partir des données d\u2019un logiciel métier',
    description:
      "Module de génération de rapports intégré à un ERP. Projet d'équipe dans lequel j'assure le développement back-end.",
    category: 'API',
    tech: [],
    role: 'Développeur back-end (équipe)',
    github: 'https://github.com/RodrigueYanick/moteur-rapports',
    documented: false,
    team: true,
  },
  {
    name: 'Transport urbain en micro-services',
    tagline: 'Un réseau de transport découpé en services indépendants',
    description:
      "Système de gestion d'un réseau de transport urbain basé sur une architecture en micro-services. Participation en tant que développeur back-end.",
    category: 'API',
    tech: [],
    role: 'Développeur back-end (équipe)',
    github: 'https://github.com/Mori-yim/app-urban-transport-management-avec-micro-service',
    documented: false,
    team: true,
  },
  {
    name: 'Outil d\u2019aide à la présélection de CV',
    tagline: 'Trier des dizaines de CV en quelques minutes',
    description:
      "Application qui assiste le tri initial de CV selon des critères définis, pour accélérer la première sélection des candidatures.",
    category: 'Web',
    tech: ['Python'],
    role: 'Développement complet',
    github: 'https://github.com/tadzo-morel/app_choix_cv_IA',
    documented: false,
  },
  {
    name: 'Scoring de risque crédit',
    tagline: 'Une première évaluation objective de solvabilité',
    description:
      'Modèle qui attribue un score de risque à un demandeur de crédit à partir de ses caractéristiques — une approche data appliquée à la micro-finance.',
    category: 'Data',
    tech: ['Python'],
    role: 'Développement complet',
    github: 'https://github.com/tadzo-morel/scoring_risque_credit',
    documented: false,
  },
  {
    name: 'Gestion de CV',
    tagline: 'Centraliser et gérer des CV de candidats',
    description:
      'Application de gestion de CV — les fonctionnalités détaillées sont en cours de documentation.',
    category: 'Web',
    tech: [],
    role: 'Développement complet',
    github: 'https://github.com/tadzo-morel/gestion_cv',
    documented: false,
  },
  {
    name: 'Boutique en ligne de vêtements',
    tagline: 'Une boutique accessible 24 h/24 pour un vendeur de vêtements',
    description:
      'Application web e-commerce de vente de vêtements, qui ouvre la vente au-delà du passage physique.',
    category: 'Web',
    tech: [],
    role: 'Développement complet',
    github: 'https://github.com/tadzo-morel/applicationWebDeVenteDeVetement',
    documented: false,
  },
]

export const projectFilters: ('Tous' | ProjectCategory)[] = [
  'Tous',
  'Web',
  'Mobile',
  'API',
  'Data',
]

/* ---------- Services (du plus pertinent au moins pertinent) ---------- */

export const services: Service[] = [
  {
    title: 'Développement d\u2019applications web full-stack',
    description:
      'Applications web complètes, de l\u2019interface utilisateur au serveur et à la base de données.',
    problem: 'Vos processus manuels (fichiers Excel, cahiers) font perdre du temps ? Je les transforme en application accessible partout.',
    tech: ['Java', 'Spring Boot', 'React', 'Angular', 'MySQL', 'PostgreSQL'],
    example: 'Application de gestion des stocks avec tableau de bord et comptes utilisateurs.',
    target: 'PME, commerçants, startups de Douala et d\u2019Afrique francophone',
    cta: 'Décrivez votre besoin en 5 lignes — proposition technique sous 24 h.',
  },
  {
    title: 'Conception d\u2019APIs REST & bases de données',
    description: 'APIs REST et bases de données relationnelles propres et documentées.',
    problem: 'Votre site ou application a besoin d\u2019un cerveau : stocker, organiser et servir vos données de manière fiable.',
    tech: ['Spring Boot', 'Flask', 'MySQL', 'PostgreSQL'],
    example: 'API de gestion des commandes et clients pour une entreprise de livraison.',
    target: 'Startups, développeurs solo, entreprises en digitalisation',
    cta: 'Vous avez déjà une maquette ou un front-end ? Je construis l\u2019API qui la fera vivre.',
  },
  {
    title: 'Applications mobiles Android',
    description: 'Applications Android connectées à une base de données et à des APIs.',
    problem: 'Vos clients sont sur mobile : une application vous donne une présence directe dans leur poche.',
    tech: ['Java', 'Android', 'Spring Boot', 'Flask'],
    example: 'App de suivi des paiements et notifications pour une TPE.',
    target: 'TPE/PMI, associations, services de proximité',
    cta: 'Une idée d\u2019app mobile ? J\u2019aide à la cadrer, puis je la développe. Premier échange gratuit.',
  },
  {
    title: 'Maquettage UI/UX & prototypage Figma',
    description: 'Maquettes et prototypes interactifs de votre application avant tout développement.',
    problem: 'Visualisez et validez votre produit avant d\u2019investir dans le développement.',
    tech: ['Figma'],
    example: 'Prototype cliquable d\u2019une app de réservation, testé avec de vrais utilisateurs.',
    target: 'Porteurs de projet, startups en phase d\u2019idéation',
    cta: 'Obtenez un prototype cliquable en quelques jours — contactez-moi pour cadrer le projet.',
  },
  {
    title: 'Intégration & développement front-end',
    description: 'Transformation de maquettes en pages web responsives et interactives.',
    problem: 'Vous avez un design mais personne pour le coder proprement : je le convertis en interface fonctionnelle.',
    tech: ['React', 'Angular', 'HTML/CSS/JavaScript'],
    example: 'Site vitrine dynamique avec formulaire relié à une base de données.',
    target: 'Designers, agences, indépendants',
    cta: 'Envoyez-moi votre maquette — devis et délai sous 24 h.',
  },
  {
    title: 'Préparation au déploiement & Docker',
    description: 'Mise en conteneurs d\u2019applications pour des environnements de test et de démonstration reproductibles.',
    problem: '\u00ab \u00c7a marchait sur ma machine \u00bb : Docker garantit un environnement identique partout.',
    tech: ['Docker', 'GitLab CI (bases)', 'Linux'],
    example: 'Application Spring Boot packagée, déployable en un clic pour une démo client.',
    target: 'Projets en phase de démonstration, livraisons propres',
    cta: 'Votre application est prête ? Je la prépare pour une démonstration fiable.',
    consolidating: true, // compétence en consolidation — affiché honnêtement
  },
]

/* ---------- Technologies (logos/noms, pile réelle) ---------- */

export const technologies = [
  'Java',
  'Python',
  'C',
  'Spring Boot',
  'React',
  'Angular',
  'Flask',
  'MySQL',
  'PostgreSQL',
  'Git',
  'GitHub',
  'GitLab',
  'Docker',
  'Figma',
  'Android',
  'VS Code',
  'IntelliJ IDEA',
]

/* ---------- Parcours (aucune date inventée) ---------- */

export const timeline = [
  {
    period: 'En cours',
    title: 'Master 1 — Développement d\u2019applications',
    detail: 'Formation full-stack : Java/Spring Boot, React/Angular, bases de données, projets d\u2019équipe.',
    type: 'formation' as const,
  },
  {
    period: 'En cours',
    title: 'Projets académiques & personnels',
    detail:
      "Développement d'une cinquantaine de projets sur GitHub — en équipe (rôle : développeur back-end) et en solo.",
    type: 'projet' as const,
  },
  {
    period: 'À venir',
    title: 'Stage & missions freelance',
    detail: "Ouvert aux opportunités : stages, missions freelance et collaborations sur des projets concrets.",
    type: 'opportunite' as const,
  },
]

/* ---------- Contact ---------- */

export const contact = {
  intro:
    'Un projet d\u2019application web ou mobile ? Un stage ou une collaboration ? Décrivez votre besoin — je réponds sous 24 h.',
  email: profile.email,
  whatsapp: profile.whatsapp,
  whatsappDisplay: profile.whatsappDisplay,
  linkedin: profile.linkedin,
  location: profile.location,
  responseTime: 'Réponse sous 24 h',
}

/* ---------- CV (le lien n'apparaît que lorsque le PDF existe) ---------- */

// file : lien du CV (Google Drive ici). Pour un PDF hébergé avec le site, mets '/cv-morel-tadzo.pdf'
// dans public/. updated : date de dernière mise à jour (ex. 'octobre 2026') — vide = non affichée.
export const cv: { file: string; updated: string } = {
  file: 'https://drive.google.com/file/d/1_JyXDVDzmdkumr6qf2jUlufJMSNDE6kW/view?usp=drive_link',
  updated: '',
}
