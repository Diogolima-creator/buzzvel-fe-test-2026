import type { SiteDictionary } from "@/i18n/types";

export const deDictionary: SiteDictionary = {
  meta: {
    title: "Luma — Praktisches Lernen für neugierige Menschen",
    description:
      "Praxisnahe Kurse von Menschen, die diese Arbeit jeden Tag machen. Lerne Design, Technologie, Business und mehr — eine fokussierte Lektion nach der anderen.",
    ogTitle: "Luma — Entwickle Fähigkeiten, die dich wirklich weiterbringen",
    ogDescription:
      "Kurze, praxisnahe Kurse rund um Fähigkeiten, die du sofort im Alltag anwenden kannst.",
    ogImageAlt: "Person lernt konzentriert am Laptop",
    skipToContent: "Zum Hauptinhalt springen",
  },
  intro: {
    ariaLabel: "Luma-Begrüßung",
    tagline: "Praktisches Lernen für neugierige Menschen.",
    skipLabel: "Intro überspringen",
  },
  header: {
    homeAriaLabel: "Luma Startseite",
    primaryNavAriaLabel: "Hauptnavigation",
    mobileNavAriaLabel: "Mobile Navigation",
    openMenuAriaLabel: "Navigationsmenü öffnen",
    closeMenuAriaLabel: "Navigationsmenü schließen",
    languageSwitcherAriaLabel: "Sprache auswählen",
    navLinks: [
      { label: "Kurse", href: "#courses" },
      { label: "Für Teams", href: "#featured-course" },
      { label: "Community", href: "#people" },
      { label: "Über uns", href: "#how-it-works" },
    ],
    loginAction: { label: "Anmelden", href: "#contact" },
    primaryAction: { label: "Jetzt starten", href: "#courses" },
  },
  hero: {
    eyebrow: "Lerne in deinem eigenen Tempo",
    heading: "Entwickle Fähigkeiten, die dich wirklich weiterbringen.",
    description:
      "Praxisnahe Kurse von Menschen, die diese Arbeit jeden Tag machen. Lerne Design, Technologie, Business und mehr — eine fokussierte Lektion nach der anderen.",
    primaryCta: { label: "Kurse entdecken", href: "#courses" },
    secondaryCta: { label: "So funktioniert’s", href: "#how-it-works" },
    socialProofBold: "Über 24.000",
    socialProofRegular: "Lernende vertrauen uns",
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Porträt eines Luma-Lernenden" },
      { src: "/images/avatar-2.webp", alt: "Porträt eines Luma-Lernenden" },
      { src: "/images/avatar-3.webp", alt: "Porträt eines Luma-Lernenden" },
    ],
    heroImage: {
      src: "/images/hero-learner.webp",
      alt: "Person lernt konzentriert am Laptop",
    },
    coursesBadge: {
      count: "120+",
      label: "Experten-Kurse",
    },
    ratingBadge: {
      stars: 5,
      label: "4,9 Ø Bewertung",
    },
  },
  categories: {
    eyebrow: "Finde deine nächste Fähigkeit",
    heading: "Lerne etwas, das sich wirklich lohnt.",
    description:
      "Kurze, praxisnahe Kurse rund um Fähigkeiten, die du sofort anwenden kannst.",
    exploreLabel: "Entdecken",
    items: [
      {
        number: "01",
        title: "Product Design",
        description:
          "Verwandle komplexe Probleme in klare, nützliche Produkterlebnisse.",
        href: "#featured-course",
      },
      {
        number: "02",
        title: "Technologie",
        description:
          "Verstehe die Werkzeuge, die moderne digitale Produkte prägen.",
        href: "#featured-course",
      },
      {
        number: "03",
        title: "Business",
        description:
          "Entwickle praktische Kompetenzen für bessere Entscheidungen und stärkere Teams.",
        href: "#featured-course",
      },
      {
        number: "04",
        title: "Kreativität",
        description:
          "Entdecke neue Wege zu kommunizieren, zu gestalten und Geschichten zu erzählen.",
        href: "#featured-course",
      },
    ],
  },
  featuredCourse: {
    badge: "Empfohlener Kurs",
    eyebrow: "Am beliebtesten diesen Monat",
    heading: "Produkte gestalten, die Menschen verstehen.",
    description:
      "Lerne, wie du komplexe Abläufe durch Recherche, klare Struktur und durchdachtes Interaktionsdesign in einfache, bewusste Produkterlebnisse verwandelst.",
    instructor: "mit Maya Chen · Senior Product Designer",
    detailsAriaLabel: "Kursdetails",
    metadata: ["8 Lektionen", "2 Std. 40 Min.", "Fortgeschritten"],
    primaryCta: { label: "Kurs ansehen", href: "#contact" },
    secondaryCta: { label: "Alle Kurse ansehen", href: "#courses" },
    image: {
      src: "/images/featured-course.webp",
      alt: "Product-Design-Kurs — Teilnehmerin arbeitet an Benutzeroberflächen",
    },
  },
  howItWorks: {
    eyebrow: "So funktioniert Luma",
    heading: "Weniger suchen. Mehr lernen.",
    steps: [
      {
        id: "focus",
        step: "Schritt 01",
        title: "Wähle deinen Fokus",
        description:
          "Finde Kurse gezielt nach der Fähigkeit, die du aufbauen möchtest — statt endloser Kategorien.",
      },
      {
        id: "experience",
        step: "Schritt 02",
        title: "Lerne aus der Praxis",
        description:
          "Folge kompakten Lektionen von Profis, die diese Fähigkeiten täglich anwenden.",
      },
      {
        id: "practice",
        step: "Schritt 03",
        title: "Setze es direkt um",
        description:
          "Jeder Kurs enthält praktische Übungen, die Wissen unmittelbar in Handlung verwandeln.",
      },
    ],
  },
  testimonial: {
    sectionAriaLabel: "Erfahrungsbericht und Kennzahlen",
    quote:
      "Die Lektionen sind kurz genug, um in meine Woche zu passen, aber detailliert genug, dass ich jedes Mal etwas direkt Anwendbares mitnehme.",
    author: {
      name: "Alex Morgan",
      role: "Product Manager",
      avatarSrc: "/images/testimonial-alex.webp",
      avatarAlt: "Alex Morgan",
    },
    stats: [
      { value: "24K+", label: "aktive Lernende" },
      { value: "120+", label: "Experten-Kurse" },
      { value: "92%", label: "schließen ihren ersten Kurs ab" },
    ],
  },
  people: {
    eyebrow: "Die Community",
    heading: "Triff internationale Lernende & Lehrende",
    description:
      "Vernetze dich mit Designerinnen, Entwicklern und kreativen Köpfen aus aller Welt. Teile Projekte, erhalte praxisnahes Feedback und wachse gemeinsam mit Menschen, die kontinuierliches Lernen schätzen.",
    cta: { label: "Lehrende und Lernende entdecken", href: "#contact" },
    mosaicColumns: [
      [
        {
          src: "/images/people-01.webp",
          alt: "Lächelnde Studentin arbeitet im Freien am Laptop",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
        {
          src: "/images/people-02.webp",
          alt: "Dozent arbeitet mit Lernenden zusammen",
          desktopWidth: 138,
          desktopHeight: 207,
          mobileWidth: 94,
          mobileHeight: 129,
        },
      ],
      [
        {
          src: "/images/people-03.webp",
          alt: "Student lächelt in einem Studio-Arbeitsbereich",
          desktopWidth: 103,
          desktopHeight: 170,
          mobileWidth: 72,
          mobileHeight: 106,
        },
        {
          src: "/images/people-04.webp",
          alt: "Dozentin präsentiert Designkonzepte",
          desktopWidth: 103,
          desktopHeight: 173,
          mobileWidth: 72,
          mobileHeight: 108,
        },
        {
          src: "/images/people-05.webp",
          alt: "Lernende studiert in einem Café",
          desktopWidth: 103,
          desktopHeight: 128,
          mobileWidth: 72,
          mobileHeight: 80,
        },
      ],
      [
        {
          src: "/images/people-06.webp",
          alt: "Porträt eines Design-Mentors",
          desktopWidth: 103,
          desktopHeight: 137,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-07.webp",
          alt: "Internationale Studierende besprechen ein Projekt",
          desktopWidth: 103,
          desktopHeight: 138,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-08.webp",
          alt: "Teilnehmerin eines Kreativkurses lächelt",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
      ],
      [
        {
          src: "/images/people-09.webp",
          alt: "Technologie-Dozent am Schreibtisch",
          desktopWidth: 128,
          desktopHeight: 205,
          mobileWidth: 88,
          mobileHeight: 128,
        },
        {
          src: "/images/people-10.webp",
          alt: "Community-Mitglied macht sich Notizen",
          desktopWidth: 103,
          desktopHeight: 132,
          mobileWidth: 72,
          mobileHeight: 83,
        },
      ],
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Sprich mit uns",
    description:
      "Hast du eine Frage? Wir helfen dir gerne weiter. Ob du den passenden Kurs suchst, mit deinem Team lernen oder selbst bei Luma unterrichten möchtest — wir freuen uns auf deine Nachricht.",
    emailLabel: "E-Mail",
    emailAddress: "contact@luma.com",
    responseLabel: "Antwortzeit",
    responseDetail: "Innerhalb von 24 Stunden an Werktagen",
    formTitle: "Kontaktiere uns",
    formDescription: "Fülle die Felder aus und wir melden uns bei dir.",
    fields: {
      name: { label: "Vollständiger Name", placeholder: "Dein Name" },
      email: { label: "E-Mail", placeholder: "deine.email@beispiel.de" },
      question: {
        label: "Deine Frage",
        placeholder: "Erzähl uns, wie wir dir helfen können...",
      },
    },
    submitLabel: "Nachricht senden",
    submittingLabel: "Wird gesendet...",
    successMessage:
      "Vielen Dank für deine Nachricht! Wir haben sie erhalten und antworten innerhalb von 24 Stunden an Werktagen.",
    validation: {
      nameRequired: "Bitte gib deinen vollständigen Namen ein.",
      nameMinLength: "Der Name muss mindestens 2 Zeichen lang sein.",
      emailRequired: "Bitte gib deine E-Mail-Adresse ein.",
      emailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
      questionRequired: "Bitte teile uns mit, wie wir helfen können.",
      questionMinLength:
        "Bitte schreibe mindestens 10 Zeichen, damit wir dir helfen können.",
    },
  },
  finalCta: {
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Porträt eines Luma-Lernenden" },
      { src: "/images/avatar-2.webp", alt: "Porträt eines Luma-Lernenden" },
      { src: "/images/avatar-3.webp", alt: "Porträt eines Luma-Lernenden" },
      { src: "/images/avatar-4.webp", alt: "Porträt eines Luma-Lernenden" },
    ],
    heading: "Was lernst du als Nächstes?",
    description: "Beginne mit einem Kurs. Baue darauf auf.",
    primaryCta: { label: "Alle Kurse entdecken", href: "#courses" },
    secondaryCta: { label: "Luma beitreten", href: "#contact" },
  },
  footer: {
    homeAriaLabel: "Luma Startseite",
    tagline: "Praktisches Lernen für neugierige Menschen.",
    columns: [
      {
        heading: "Entdecken",
        links: [
          { label: "Kurse", href: "#courses" },
          { label: "Kategorien", href: "#courses" },
          { label: "Lehrende", href: "#people" },
          { label: "Für Teams", href: "#featured-course" },
        ],
      },
      {
        heading: "Unternehmen",
        links: [
          { label: "Über uns", href: "#how-it-works" },
          { label: "Karriere", href: "#people" },
          { label: "Journal", href: "#testimonial" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Hilfecenter", href: "#contact" },
          { label: "Kontakt", href: "#contact" },
          { label: "AGB", href: "#footer" },
          { label: "Datenschutz", href: "#footer" },
        ],
      },
    ],
    copyright: "© 2026 Luma Learning",
  },
};
