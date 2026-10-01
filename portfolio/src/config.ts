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
  shortName: 'Morel Aimé KT.',
  title: 'Développeur d\u2019applications Full-Stack Web',
  status: '\u00c9tudiant en Master 1 - Développement d\u2019applications',
  location: 'Douala, Cameroun',
  email: 'moreltadzo@gmail.com',
  github: 'https://github.com/tadzo-morel',
  linkedin: 'https://www.linkedin.com/in/morel-aime-kenne-tadzo-9472012ab',
  whatsapp: 'https://wa.me/237683082189',
  whatsappDisplay: '+237 683082189',
  availability: 'Disponible pour stages & missions freelance',
  heroTitle: 'Je construis des applications web, de l\u2019API à l\u2019interface.',
  heroSubtitle:
    'Étudiant en Master 1 à Douala, je développe des applications avec Flask, React et Java/Spring Boot, avec un intérêt particulier pour le back-end.',
  terminalLine: '~/douala $ build_web_apps',
  about: [
    'Actuellement en Master 1 en développement d\u2019applications, je me forme au métier de développeur full-stack web.',
    'Je travaille principalement avec Java et Spring Boot côté back-end, et React / Angular côté front-end, en complément avec Python et Flask. Je structure mes projets avec Git et GitHub/GitLab.',
    'Dans les projets d\u2019équipe, je participe principalement comme développeur back-end.',
  ],
  aboutFacts: [
    { label: 'Formation', value: 'Master 1 - Dev. d\u2019applications' },
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
    title: 'Back-end & langages',
    skills: [
      { name: 'Java', level: 'intermediaire' },
      { name: 'Python', level: 'intermediaire' },
      { name: 'C', level: 'intermediaire' },
      { name: 'Spring Boot', level: 'intermediaire' },
      { name: 'Flask', level: 'intermediaire' },
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
    title: 'Données',
    skills: [
      { name: 'MySQL', level: 'intermediaire' },
      { name: 'PostgreSQL', level: 'intermediaire' },
    ],
  },
  {
    title: 'Outils & en apprentissage',
    skills: [
      { name: 'Git', level: 'intermediaire' },
      { name: 'GitHub / GitLab', level: 'intermediaire' },
      { name: 'Figma', level: 'intermediaire' },
      { name: 'Docker', level: 'apprentissage' },
      { name: 'Android', level: 'apprentissage' },
    ],
  },
]

/* ---------- Projets candidats (seules les fiches documentées sont publiées) ---------- */

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
    name: 'Analyse et comparaison de CV',
    tagline: 'Classer des candidatures et les comparer à une offre',
    description:
      'Prototype web avec interface React et API Flask. Un modèle Random Forest et TF-IDF propose une catégorie de métier; les scores de comparaison sont indicatifs et ne remplacent pas l\u2019examen humain.',
    category: 'Web',
    tech: ['Python', 'Flask', 'React', 'scikit-learn'],
    role: 'Développement du prototype full-stack',
    github: 'https://github.com/tadzo-morel/gestion_cv',
    documented: true,
  },
  {
    name: 'Analyse exploratoire du risque de crédit',
    tagline: 'Explorer un jeu de données de prêts',
    description:
      'Notebook Python consacré aux données de prêts : exploration des variables et distributions, détection et traitement des valeurs atypiques.',
    category: 'Data',
    tech: ['Python', 'Jupyter', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    role: 'Analyse de données (notebook)',
    github: 'https://github.com/tadzo-morel/scoring_risque_credit',
    documented: true,
  },
  {
    name: 'Gestion de CV',
    tagline: 'Centraliser et gérer des CV de candidats',
    description:
      'Application de gestion de CV - les fonctionnalités détaillées sont en cours de documentation.',
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
    cta: 'Décrivez votre besoin en 5 lignes - proposition technique sous 24 h.',
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
    title: 'Intégration & développement front-end',
    description: 'Transformation de maquettes en pages web responsives et interactives.',
    problem: 'Vous avez un design mais personne pour le coder proprement : je le convertis en interface fonctionnelle.',
    tech: ['React', 'Angular', 'HTML/CSS/JavaScript'],
    example: 'Site vitrine dynamique avec formulaire relié à une base de données.',
    target: 'Designers, agences, indépendants',
    cta: 'Envoyez-moi votre maquette - devis et délai sous 24 h.',
  },
]

export const technologies = [
  ...new Set(skillCategories.flatMap((category) => category.skills.map((skill) => skill.name))),
]

/* ---------- Parcours (aucune date inventée) ---------- */

export const timeline = [
  {
    period: 'En cours',
    title: 'Master 1 - Développement d\u2019applications',
    detail: 'Formation en développement d\u2019applications et approfondissement du back-end web.',
    type: 'formation' as const,
  },
  {
    period: 'En cours',
    title: 'Projets académiques & personnels',
    detail:
      'Projets académiques et personnels, en équipe comme en autonomie. En équipe, rôle confirmé : développeur back-end.',
    type: 'projet' as const,
  },
]

/* ---------- Contact ---------- */

export const contact = {
  intro:
    'Un projet d\u2019application web ? Un stage ou une collaboration ? Décrivez votre besoin — je réponds sous 24 h.',
  email: profile.email,
  whatsapp: profile.whatsapp,
  whatsappDisplay: profile.whatsappDisplay,
  linkedin: profile.linkedin,
  location: profile.location,
  responseTime: 'Réponse sous 24 h',
}

/* ---------- CV (le lien n'apparaît que lorsque le PDF existe) ---------- */

// file : lien du CV (Google Drive ici). Pour un PDF hébergé avec le site, mets '/cv-morel-tadzo.pdf'
// dans public/. updated : date de dernière mise à jour (ex. 'octobre 2026') - vide = non affichée.
export const cv: { file: string; updated: string } = {
  file: '',
  updated: '',
}
