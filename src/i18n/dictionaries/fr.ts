import type { SiteDictionary } from "@/i18n/types";

export const frDictionary: SiteDictionary = {
  meta: {
    title: "Luma — L’apprentissage pratique pour les esprits curieux",
    description:
      "Des cours pratiques enseignés par celles et ceux qui exercent ce métier chaque jour. Apprenez le design, la technologie, le business et bien plus — une leçon ciblée à la fois.",
    ogTitle: "Luma — Développez des compétences qui vous font vraiment avancer",
    ogDescription:
      "Des cours courts et concrets conçus autour de compétences applicables immédiatement.",
    ogImageAlt:
      "Personne concentrée en train d’apprendre sur son ordinateur portable",
    skipToContent: "Aller au contenu principal",
  },
  intro: {
    ariaLabel: "Ouverture Luma",
    tagline: "L’apprentissage pratique pour les esprits curieux.",
    skipLabel: "Passer l’ouverture",
  },
  header: {
    homeAriaLabel: "Accueil Luma",
    primaryNavAriaLabel: "Navigation principale",
    mobileNavAriaLabel: "Navigation mobile",
    openMenuAriaLabel: "Ouvrir le menu de navigation",
    closeMenuAriaLabel: "Fermer le menu de navigation",
    languageSwitcherAriaLabel: "Choisir la langue",
    navLinks: [
      { label: "Cours", href: "#courses" },
      { label: "Équipes", href: "#featured-course" },
      { label: "Communauté", href: "#people" },
      { label: "À propos", href: "#how-it-works" },
    ],
    loginAction: { label: "Connexion", href: "#contact" },
    primaryAction: { label: "Commencer", href: "#courses" },
  },
  hero: {
    eyebrow: "Apprenez à votre rythme",
    heading: "Développez des compétences qui vous font vraiment avancer.",
    description:
      "Des cours pratiques enseignés par celles et ceux qui exercent ce métier chaque jour. Apprenez le design, la technologie, le business et bien plus — une leçon ciblée à la fois.",
    primaryCta: { label: "Explorer les cours", href: "#courses" },
    secondaryCta: { label: "Voir comment ça marche", href: "#how-it-works" },
    socialProofBold: "Plus de 24 000",
    socialProofRegular: "apprenants nous font confiance",
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Portrait d’un apprenant Luma" },
      { src: "/images/avatar-2.webp", alt: "Portrait d’un apprenant Luma" },
      { src: "/images/avatar-3.webp", alt: "Portrait d’un apprenant Luma" },
    ],
    heroImage: {
      src: "/images/hero-learner.webp",
      alt: "Personne concentrée en train d’apprendre sur son ordinateur portable",
    },
    coursesBadge: {
      count: "120+",
      label: "cours par des experts",
    },
    ratingBadge: {
      stars: 5,
      label: "4,9 note moyenne",
    },
  },
  categories: {
    eyebrow: "Trouvez votre prochaine compétence",
    heading: "Apprenez quelque chose qui en vaut la peine.",
    description:
      "Des cours courts et concrets conçus autour de compétences applicables immédiatement.",
    exploreLabel: "Explorer",
    items: [
      {
        number: "01",
        title: "Product Design",
        description:
          "Transformez des problèmes complexes en expériences claires et utiles.",
        href: "#featured-course",
      },
      {
        number: "02",
        title: "Technologie",
        description:
          "Maîtrisez davantage les outils qui façonnent les produits numériques.",
        href: "#featured-course",
      },
      {
        number: "03",
        title: "Business",
        description:
          "Acquérez des compétences concrètes pour de meilleures décisions et des équipes plus solides.",
        href: "#featured-course",
      },
      {
        number: "04",
        title: "Créativité",
        description:
          "Explorez de nouvelles façons de communiquer, créer et raconter des histoires.",
        href: "#featured-course",
      },
    ],
  },
  featuredCourse: {
    badge: "Cours à la une",
    eyebrow: "Le plus populaire ce mois-ci",
    heading: "Concevoir des produits que les gens comprennent.",
    description:
      "Apprenez à transformer des parcours complexes en expériences produit simples et intentionnelles grâce à la recherche, la structure et le design d’interaction.",
    instructor: "avec Maya Chen · Senior Product Designer",
    detailsAriaLabel: "Détails du cours",
    metadata: ["8 leçons", "2h 40min", "Intermédiaire"],
    primaryCta: { label: "Voir le cours", href: "#contact" },
    secondaryCta: { label: "Parcourir tous les cours", href: "#courses" },
    image: {
      src: "/images/featured-course.webp",
      alt: "Cours de product design — étudiante travaillant sur des interfaces",
    },
  },
  howItWorks: {
    eyebrow: "Comment fonctionne Luma",
    heading: "Moins de recherche. Plus d’apprentissage.",
    steps: [
      {
        id: "focus",
        step: "Étape 01",
        title: "Choisissez votre objectif",
        description:
          "Trouvez des cours selon la compétence que vous souhaitez développer, sans catégories interminables.",
      },
      {
        id: "experience",
        step: "Étape 02",
        title: "Apprenez de l’expérience",
        description:
          "Suivez des leçons concises créées par des professionnels qui utilisent ces compétences au quotidien.",
      },
      {
        id: "practice",
        step: "Étape 03",
        title: "Passez à la pratique",
        description:
          "Chaque cours inclut des exercices concrets pour transformer vos connaissances en action.",
      },
    ],
  },
  testimonial: {
    sectionAriaLabel: "Témoignage d’apprenant et chiffres clés",
    quote:
      "Les leçons sont assez courtes pour s’intégrer dans ma semaine, mais assez détaillées pour que je reparte toujours avec quelque chose d’applicable.",
    author: {
      name: "Alex Morgan",
      role: "Product Manager",
      avatarSrc: "/images/testimonial-alex.webp",
      avatarAlt: "Alex Morgan",
    },
    stats: [
      { value: "24K+", label: "apprenants actifs" },
      { value: "120+", label: "cours par des experts" },
      { value: "92%", label: "terminent leur premier cours" },
    ],
  },
  people: {
    eyebrow: "La communauté",
    heading: "Rencontrez des étudiants et formateurs internationaux",
    description:
      "Échangez avec des designers, ingénieurs et leaders créatifs du monde entier. Partagez vos projets, recevez des retours concrets et progressez aux côtés de passionnés d’apprentissage continu.",
    cta: { label: "Découvrir formateurs et étudiants", href: "#contact" },
    mosaicColumns: [
      [
        {
          src: "/images/people-01.webp",
          alt: "Étudiante souriante travaillant en extérieur sur son ordinateur portable",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
        {
          src: "/images/people-02.webp",
          alt: "Formateur collaborant avec des apprenants",
          desktopWidth: 138,
          desktopHeight: 207,
          mobileWidth: 94,
          mobileHeight: 129,
        },
      ],
      [
        {
          src: "/images/people-03.webp",
          alt: "Étudiant souriant dans un studio de création",
          desktopWidth: 103,
          desktopHeight: 170,
          mobileWidth: 72,
          mobileHeight: 106,
        },
        {
          src: "/images/people-04.webp",
          alt: "Formatrice présentant des concepts de design",
          desktopWidth: 103,
          desktopHeight: 173,
          mobileWidth: 72,
          mobileHeight: 108,
        },
        {
          src: "/images/people-05.webp",
          alt: "Apprenante étudiant dans un café",
          desktopWidth: 103,
          desktopHeight: 128,
          mobileWidth: 72,
          mobileHeight: 80,
        },
      ],
      [
        {
          src: "/images/people-06.webp",
          alt: "Portrait d’un mentor en design",
          desktopWidth: 103,
          desktopHeight: 137,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-07.webp",
          alt: "Étudiants internationaux discutant d’un projet",
          desktopWidth: 103,
          desktopHeight: 138,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-08.webp",
          alt: "Participante d’un cours créatif souriante",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
      ],
      [
        {
          src: "/images/people-09.webp",
          alt: "Formateur en technologie à son bureau",
          desktopWidth: 128,
          desktopHeight: 205,
          mobileWidth: 88,
          mobileHeight: 128,
        },
        {
          src: "/images/people-10.webp",
          alt: "Membre de la communauté prenant des notes",
          desktopWidth: 103,
          desktopHeight: 132,
          mobileWidth: 72,
          mobileHeight: 83,
        },
      ],
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Parlons-en",
    description:
      "Une question ? Nous sommes là pour vous aider. Que vous cherchiez le bon cours, formiez votre équipe ou souhaitiez enseigner sur Luma, nous serons ravis de vous lire.",
    emailLabel: "E-mail",
    emailAddress: "contact@luma.com",
    responseLabel: "Délai de réponse",
    responseDetail: "Sous 24 heures les jours ouvrés",
    formTitle: "Contactez-nous",
    formDescription: "Remplissez les champs et nous vous répondrons rapidement.",
    fields: {
      name: { label: "Nom complet", placeholder: "Votre nom" },
      email: { label: "E-mail", placeholder: "votre.email@exemple.fr" },
      question: {
        label: "Votre question",
        placeholder: "Dites-nous comment nous pouvons vous aider...",
      },
    },
    submitLabel: "Envoyer le message",
    submittingLabel: "Envoi en cours...",
    successMessage:
      "Merci pour votre message ! Nous l’avons bien reçu et vous répondrons sous 24 heures les jours ouvrés.",
    validation: {
      nameRequired: "Veuillez saisir votre nom complet.",
      nameMinLength: "Le nom doit contenir au moins 2 caractères.",
      emailRequired: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      questionRequired: "Veuillez nous indiquer comment nous pouvons vous aider.",
      questionMinLength:
        "Veuillez écrire au moins 10 caractères afin que nous puissions vous aider.",
    },
  },
  finalCta: {
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Portrait d’un apprenant Luma" },
      { src: "/images/avatar-2.webp", alt: "Portrait d’un apprenant Luma" },
      { src: "/images/avatar-3.webp", alt: "Portrait d’un apprenant Luma" },
      { src: "/images/avatar-4.webp", alt: "Portrait d’un apprenant Luma" },
    ],
    heading: "Qu’allez-vous apprendre ensuite ?",
    description: "Commencez par un cours. Continuez sur votre lancée.",
    primaryCta: { label: "Explorer tous les cours", href: "#courses" },
    secondaryCta: { label: "Rejoindre Luma", href: "#contact" },
  },
  footer: {
    homeAriaLabel: "Accueil Luma",
    tagline: "L’apprentissage pratique pour les esprits curieux.",
    columns: [
      {
        heading: "Explorer",
        links: [
          { label: "Cours", href: "#courses" },
          { label: "Catégories", href: "#courses" },
          { label: "Formateurs", href: "#people" },
          { label: "Pour les équipes", href: "#featured-course" },
        ],
      },
      {
        heading: "Entreprise",
        links: [
          { label: "À propos", href: "#how-it-works" },
          { label: "Carrières", href: "#people" },
          { label: "Journal", href: "#testimonial" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Centre d’aide", href: "#contact" },
          { label: "Contact", href: "#contact" },
          { label: "Conditions", href: "#footer" },
          { label: "Confidentialité", href: "#footer" },
        ],
      },
    ],
    copyright: "© 2026 Luma Learning",
  },
};
