import type { SiteDictionary } from "@/i18n/types";

export const esDictionary: SiteDictionary = {
  meta: {
    title: "Luma — Aprendizaje práctico para personas curiosas",
    description:
      "Cursos prácticos impartidos por quienes hacen este trabajo cada día. Aprende diseño, tecnología, negocios y más — una lección enfocada a la vez.",
    ogTitle: "Luma — Desarrolla habilidades que realmente te impulsan",
    ogDescription:
      "Cursos breves y prácticos diseñados en torno a habilidades que puedes aplicar de inmediato.",
    ogImageAlt: "Persona concentrada aprendiendo en su portátil",
    skipToContent: "Ir al contenido principal",
  },
  intro: {
    ariaLabel: "Bienvenida de Luma",
    tagline: "Aprendizaje práctico para personas curiosas.",
    skipLabel: "Saltar apertura",
  },
  header: {
    homeAriaLabel: "Inicio de Luma",
    primaryNavAriaLabel: "Navegación principal",
    mobileNavAriaLabel: "Navegación móvil",
    openMenuAriaLabel: "Abrir menú de navegación",
    closeMenuAriaLabel: "Cerrar menú de navegación",
    languageSwitcherAriaLabel: "Seleccionar idioma",
    navLinks: [
      { label: "Cursos", href: "#courses" },
      { label: "Equipos", href: "#featured-course" },
      { label: "Comunidad", href: "#people" },
      { label: "Acerca de", href: "#how-it-works" },
    ],
    loginAction: { label: "Entrar", href: "#contact" },
    primaryAction: { label: "Empezar ahora", href: "#courses" },
  },
  hero: {
    eyebrow: "Aprende a tu propio ritmo",
    heading: "Desarrolla habilidades que realmente te impulsan.",
    description:
      "Cursos prácticos impartidos por quienes hacen este trabajo cada día. Aprende diseño, tecnología, negocios y más — una lección enfocada a la vez.",
    primaryCta: { label: "Explorar cursos", href: "#courses" },
    secondaryCta: { label: "Ver cómo funciona", href: "#how-it-works" },
    socialProofBold: "Más de 24.000",
    socialProofRegular: "estudiantes confían",
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Retrato de estudiante de Luma" },
      { src: "/images/avatar-2.webp", alt: "Retrato de estudiante de Luma" },
      { src: "/images/avatar-3.webp", alt: "Retrato de estudiante de Luma" },
    ],
    heroImage: {
      src: "/images/hero-learner.webp",
      alt: "Persona concentrada aprendiendo en su portátil",
    },
    coursesBadge: {
      count: "120+",
      label: "cursos con expertos",
    },
    ratingBadge: {
      stars: 5,
      label: "4,9 valoración media",
    },
  },
  categories: {
    eyebrow: "Encuentra tu próxima habilidad",
    heading: "Aprende algo que valga la pena saber.",
    description:
      "Cursos breves y prácticos diseñados en torno a habilidades que puedes aplicar de inmediato.",
    exploreLabel: "Explorar",
    items: [
      {
        number: "01",
        title: "Product Design",
        description:
          "Convierte problemas complejos en experiencias claras y útiles.",
        href: "#featured-course",
      },
      {
        number: "02",
        title: "Tecnología",
        description:
          "Construye una base más sólida en las herramientas que dan forma a los productos digitales.",
        href: "#featured-course",
      },
      {
        number: "03",
        title: "Negocios",
        description:
          "Desarrolla habilidades prácticas para mejores decisiones y equipos más fuertes.",
        href: "#featured-course",
      },
      {
        number: "04",
        title: "Creatividad",
        description:
          "Explora nuevas formas de comunicar, crear y contar historias.",
        href: "#featured-course",
      },
    ],
  },
  featuredCourse: {
    badge: "Curso destacado",
    eyebrow: "El más popular este mes",
    heading: "Diseñando productos que las personas entienden.",
    description:
      "Aprende a transformar flujos complejos en experiencias de producto simples e intencionales mediante investigación, estructura y diseño de interacción.",
    instructor: "con Maya Chen · Senior Product Designer",
    detailsAriaLabel: "Detalles del curso",
    metadata: ["8 lecciones", "2h 40min", "Intermedio"],
    primaryCta: { label: "Ver curso", href: "#contact" },
    secondaryCta: { label: "Ver todos los cursos", href: "#courses" },
    image: {
      src: "/images/featured-course.webp",
      alt: "Curso de product design — estudiante trabajando en interfaces",
    },
  },
  howItWorks: {
    eyebrow: "Cómo funciona Luma",
    heading: "Menos búsqueda. Más aprendizaje.",
    steps: [
      {
        id: "focus",
        step: "Paso 01",
        title: "Elige tu enfoque",
        description:
          "Encuentra cursos según la habilidad que quieres desarrollar, sin categorías interminables.",
      },
      {
        id: "experience",
        step: "Paso 02",
        title: "Aprende de la experiencia",
        description:
          "Sigue lecciones concisas creadas por profesionales que aplican estas habilidades cada día.",
      },
      {
        id: "practice",
        step: "Paso 03",
        title: "Ponlo en práctica",
        description:
          "Cada curso incluye ejercicios prácticos diseñados para convertir el conocimiento en acción.",
      },
    ],
  },
  testimonial: {
    sectionAriaLabel: "Testimonio de estudiante y métricas de impacto",
    quote:
      "Las lecciones son lo bastante cortas para encajar en mi semana, pero tan detalladas que siempre salgo con algo que puedo aplicar.",
    author: {
      name: "Alex Morgan",
      role: "Product Manager",
      avatarSrc: "/images/testimonial-alex.webp",
      avatarAlt: "Alex Morgan",
    },
    stats: [
      { value: "24K+", label: "estudiantes activos" },
      { value: "120+", label: "cursos con expertos" },
      { value: "92%", label: "completan su primer curso" },
    ],
  },
  people: {
    eyebrow: "Nuestra comunidad",
    heading: "Conoce a estudiantes y profesores internacionales",
    description:
      "Conecta con diseñadores, ingenieros y líderes creativos de todo el mundo. Comparte proyectos, intercambia feedback práctico y crece junto a personas que valoran el aprendizaje continuo.",
    cta: { label: "Explorar profesores y estudiantes", href: "#contact" },
    mosaicColumns: [
      [
        {
          src: "/images/people-01.webp",
          alt: "Estudiante sonriente trabajando al aire libre con su portátil",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
        {
          src: "/images/people-02.webp",
          alt: "Instructor colaborando con estudiantes",
          desktopWidth: 138,
          desktopHeight: 207,
          mobileWidth: 94,
          mobileHeight: 129,
        },
      ],
      [
        {
          src: "/images/people-03.webp",
          alt: "Estudiante sonriendo en un estudio de trabajo",
          desktopWidth: 103,
          desktopHeight: 170,
          mobileWidth: 72,
          mobileHeight: 106,
        },
        {
          src: "/images/people-04.webp",
          alt: "Profesora presentando conceptos de diseño",
          desktopWidth: 103,
          desktopHeight: 173,
          mobileWidth: 72,
          mobileHeight: 108,
        },
        {
          src: "/images/people-05.webp",
          alt: "Estudiante aprendiendo en una cafetería",
          desktopWidth: 103,
          desktopHeight: 128,
          mobileWidth: 72,
          mobileHeight: 80,
        },
      ],
      [
        {
          src: "/images/people-06.webp",
          alt: "Retrato de mentor de diseño",
          desktopWidth: 103,
          desktopHeight: 137,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-07.webp",
          alt: "Estudiantes internacionales debatiendo un proyecto",
          desktopWidth: 103,
          desktopHeight: 138,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-08.webp",
          alt: "Participante de curso creativo sonriendo",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
      ],
      [
        {
          src: "/images/people-09.webp",
          alt: "Instructor de tecnología en su escritorio",
          desktopWidth: 128,
          desktopHeight: 205,
          mobileWidth: 88,
          mobileHeight: 128,
        },
        {
          src: "/images/people-10.webp",
          alt: "Miembro de la comunidad tomando notas",
          desktopWidth: 103,
          desktopHeight: 132,
          mobileWidth: 72,
          mobileHeight: 83,
        },
      ],
    ],
  },
  contact: {
    eyebrow: "Contacto",
    heading: "Ponte en contacto",
    description:
      "¿Tienes alguna pregunta? Estamos aquí para ayudarte. Tanto si buscas el curso adecuado, aprendes con tu equipo o quieres enseñar en Luma, nos encantará escucharte.",
    emailLabel: "Correo electrónico",
    emailAddress: "contact@luma.com",
    responseLabel: "Tiempo de respuesta",
    responseDetail: "Hasta 24 horas en días laborables",
    formTitle: "Contáctanos",
    formDescription: "Completa los campos y nos pondremos en contacto contigo.",
    fields: {
      name: { label: "Nombre completo", placeholder: "Tu nombre" },
      email: {
        label: "Correo electrónico",
        placeholder: "tucorreo@ejemplo.com",
      },
      question: {
        label: "Tu pregunta",
        placeholder: "Cuéntanos cómo podemos ayudarte...",
      },
    },
    submitLabel: "Enviar mensaje",
    submittingLabel: "Enviando...",
    successMessage:
      "¡Gracias por escribirnos! Hemos recibido tu mensaje y responderemos en un plazo de 24 horas en días laborables.",
    errorMessage:
      "No pudimos enviar tu mensaje en este momento. Inténtalo de nuevo en un instante.",
    validation: {
      nameRequired: "Por favor, introduce tu nombre completo.",
      nameMinLength: "El nombre debe tener al menos 2 caracteres.",
      emailRequired: "Por favor, introduce tu correo electrónico.",
      emailInvalid: "Por favor, introduce una dirección de correo válida.",
      questionRequired: "Por favor, cuéntanos cómo podemos ayudarte.",
      questionMinLength:
        "Escribe al menos 10 caracteres para que podamos ayudarte.",
    },
  },
  finalCta: {
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Retrato de estudiante de Luma" },
      { src: "/images/avatar-2.webp", alt: "Retrato de estudiante de Luma" },
      { src: "/images/avatar-3.webp", alt: "Retrato de estudiante de Luma" },
      { src: "/images/avatar-4.webp", alt: "Retrato de estudiante de Luma" },
    ],
    heading: "¿Qué aprenderás después?",
    description: "Empieza con un curso. Construye a partir de ahí.",
    primaryCta: { label: "Explorar todos los cursos", href: "#courses" },
    secondaryCta: { label: "Únete a Luma", href: "#contact" },
  },
  footer: {
    homeAriaLabel: "Inicio de Luma",
    tagline: "Aprendizaje práctico para personas curiosas.",
    columns: [
      {
        heading: "Explorar",
        links: [
          { label: "Cursos", href: "#courses" },
          { label: "Categorías", href: "#courses" },
          { label: "Instructores", href: "#people" },
          { label: "Para equipos", href: "#featured-course" },
        ],
      },
      {
        heading: "Empresa",
        links: [
          { label: "Acerca de", href: "#how-it-works" },
          { label: "Carreras", href: "#people" },
          { label: "Diario", href: "#testimonial" },
        ],
      },
      {
        heading: "Soporte",
        links: [
          { label: "Centro de ayuda", href: "#contact" },
          { label: "Contacto", href: "#contact" },
          { label: "Términos", href: "#footer" },
          { label: "Privacidad", href: "#footer" },
        ],
      },
    ],
    copyright: "© 2026 Luma Learning",
  },
};
