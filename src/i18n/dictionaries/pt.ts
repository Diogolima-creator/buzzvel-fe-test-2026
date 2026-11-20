import type { SiteDictionary } from "@/i18n/types";

export const ptDictionary: SiteDictionary = {
  meta: {
    title: "Luma — Aprendizado prático para pessoas curiosas",
    description:
      "Cursos práticos ensinados por quem faz esse trabalho todos os dias. Aprenda design, tecnologia, negócios e muito mais — uma aula focada por vez.",
    ogTitle: "Luma — Desenvolva habilidades que fazem você avançar",
    ogDescription:
      "Cursos curtos e práticos criados em torno de habilidades que você pode aplicar imediatamente.",
    ogImageAlt: "Pessoa focada estudando no laptop",
    skipToContent: "Ir para o conteúdo principal",
  },
  intro: {
    ariaLabel: "Abertura da Luma",
    tagline: "Aprendizado prático para pessoas curiosas.",
    skipLabel: "Pular abertura",
  },
  header: {
    homeAriaLabel: "Início da Luma",
    primaryNavAriaLabel: "Navegação principal",
    mobileNavAriaLabel: "Navegação móvel",
    openMenuAriaLabel: "Abrir menu de navegação",
    closeMenuAriaLabel: "Fechar menu de navegação",
    languageSwitcherAriaLabel: "Selecionar idioma",
    navLinks: [
      { label: "Cursos", href: "#courses" },
      { label: "Equipes", href: "#featured-course" },
      { label: "Comunidade", href: "#people" },
      { label: "Sobre", href: "#how-it-works" },
    ],
    loginAction: { label: "Entrar", href: "#contact" },
    primaryAction: { label: "Começar agora", href: "#courses" },
  },
  hero: {
    eyebrow: "Aprenda no seu ritmo",
    heading: "Desenvolva habilidades que fazem você avançar.",
    description:
      "Cursos práticos ensinados por quem faz esse trabalho todos os dias. Aprenda design, tecnologia, negócios e muito mais — uma aula focada por vez.",
    primaryCta: { label: "Explorar cursos", href: "#courses" },
    secondaryCta: { label: "Ver como funciona", href: "#how-it-works" },
    socialProofBold: "Mais de 24.000",
    socialProofRegular: "alunos confiam",
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Retrato de aluno da Luma" },
      { src: "/images/avatar-2.webp", alt: "Retrato de aluno da Luma" },
      { src: "/images/avatar-3.webp", alt: "Retrato de aluno da Luma" },
    ],
    heroImage: {
      src: "/images/hero-learner.webp",
      alt: "Pessoa focada estudando no laptop",
    },
    coursesBadge: {
      count: "120+",
      label: "cursos com especialistas",
    },
    ratingBadge: {
      stars: 5,
      label: "4.9 avaliação média",
    },
  },
  categories: {
    eyebrow: "Encontre sua próxima habilidade",
    heading: "Aprenda algo que vale a pena saber.",
    description:
      "Cursos curtos e práticos criados em torno de habilidades que você pode aplicar imediatamente.",
    exploreLabel: "Explorar",
    items: [
      {
        number: "01",
        title: "Product Design",
        description:
          "Transforme problemas complexos em experiências claras e úteis.",
        href: "#featured-course",
      },
      {
        number: "02",
        title: "Tecnologia",
        description:
          "Construa uma base mais sólida nas ferramentas que moldam produtos digitais.",
        href: "#featured-course",
      },
      {
        number: "03",
        title: "Negócios",
        description:
          "Desenvolva habilidades práticas para decisões melhores e equipes mais fortes.",
        href: "#featured-course",
      },
      {
        number: "04",
        title: "Criatividade",
        description:
          "Explore novas formas de comunicar, criar e contar histórias.",
        href: "#featured-course",
      },
    ],
  },
  featuredCourse: {
    badge: "Curso em destaque",
    eyebrow: "Mais popular este mês",
    heading: "Projetando produtos que as pessoas entendem.",
    description:
      "Aprenda a transformar fluxos complexos em experiências de produto simples e intencionais por meio de pesquisa, estrutura e design de interação.",
    instructor: "com Maya Chen · Senior Product Designer",
    detailsAriaLabel: "Detalhes do curso",
    metadata: ["8 aulas", "2h 40min", "Intermediário"],
    primaryCta: { label: "Ver curso", href: "#contact" },
    secondaryCta: { label: "Ver todos os cursos", href: "#courses" },
    image: {
      src: "/images/featured-course.webp",
      alt: "Curso de product design — aluna trabalhando em interfaces",
    },
  },
  howItWorks: {
    eyebrow: "Como a Luma funciona",
    heading: "Menos busca. Mais aprendizado.",
    steps: [
      {
        id: "focus",
        step: "Passo 01",
        title: "Escolha seu foco",
        description:
          "Encontre cursos com base na habilidade que deseja desenvolver, sem categorias infinitas.",
      },
      {
        id: "experience",
        step: "Passo 02",
        title: "Aprenda com quem faz",
        description:
          "Acompanhe aulas objetivas criadas por profissionais que aplicam essas habilidades.",
      },
      {
        id: "practice",
        step: "Passo 03",
        title: "Coloque em prática",
        description:
          "Cada curso inclui exercícios práticos feitos para transformar conhecimento em ação.",
      },
    ],
  },
  testimonial: {
    sectionAriaLabel: "Depoimento de aluno e métricas de impacto",
    quote:
      "As aulas são curtas o suficiente para caber na minha semana, mas detalhadas a ponto de eu sempre sair com algo que posso aplicar.",
    author: {
      name: "Alex Morgan",
      role: "Product Manager",
      avatarSrc: "/images/testimonial-alex.webp",
      avatarAlt: "Alex Morgan",
    },
    stats: [
      { value: "24K+", label: "alunos ativos" },
      { value: "120+", label: "cursos com especialistas" },
      { value: "92%", label: "concluem o primeiro curso" },
    ],
  },
  people: {
    eyebrow: "Nossa comunidade",
    heading: "Conheça alunos e professores internacionais",
    description:
      "Conecte-se com designers, engenheiros e líderes criativos de todo o mundo. Compartilhe projetos, troque feedbacks práticos e evolua lado a lado com pessoas que valorizam o aprendizado contínuo.",
    cta: { label: "Conhecer professores e alunos", href: "#contact" },
    mosaicColumns: [
      [
        {
          src: "/images/people-01.webp",
          alt: "Aluna sorrindo trabalhando ao ar livre no laptop",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
        {
          src: "/images/people-02.webp",
          alt: "Instrutor colaborando com alunos",
          desktopWidth: 138,
          desktopHeight: 207,
          mobileWidth: 94,
          mobileHeight: 129,
        },
      ],
      [
        {
          src: "/images/people-03.webp",
          alt: "Aluno sorrindo em estúdio de trabalho",
          desktopWidth: 103,
          desktopHeight: 170,
          mobileWidth: 72,
          mobileHeight: 106,
        },
        {
          src: "/images/people-04.webp",
          alt: "Professora apresentando conceitos de design",
          desktopWidth: 103,
          desktopHeight: 173,
          mobileWidth: 72,
          mobileHeight: 108,
        },
        {
          src: "/images/people-05.webp",
          alt: "Aluna estudando em um café",
          desktopWidth: 103,
          desktopHeight: 128,
          mobileWidth: 72,
          mobileHeight: 80,
        },
      ],
      [
        {
          src: "/images/people-06.webp",
          alt: "Retrato de mentor de design",
          desktopWidth: 103,
          desktopHeight: 137,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-07.webp",
          alt: "Alunos internacionais discutindo um projeto",
          desktopWidth: 103,
          desktopHeight: 138,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-08.webp",
          alt: "Participante de curso criativo sorrindo",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
      ],
      [
        {
          src: "/images/people-09.webp",
          alt: "Instrutor de tecnologia em sua mesa",
          desktopWidth: 128,
          desktopHeight: 205,
          mobileWidth: 88,
          mobileHeight: 128,
        },
        {
          src: "/images/people-10.webp",
          alt: "Aluna da comunidade fazendo anotações",
          desktopWidth: 103,
          desktopHeight: 132,
          mobileWidth: 72,
          mobileHeight: 83,
        },
      ],
    ],
  },
  contact: {
    eyebrow: "Contato",
    heading: "Fale conosco",
    description:
      "Tem alguma dúvida? Estamos aqui para ajudar. Seja buscando o curso ideal, aprendendo com sua equipe ou interessado em ensinar na Luma, vamos adorar ouvir você.",
    emailLabel: "E-mail",
    emailAddress: "contact@luma.com",
    responseLabel: "Tempo de resposta",
    responseDetail: "Até 24 horas em dias úteis",
    formTitle: "Entre em contato",
    formDescription: "Preencha os campos e entraremos em contato.",
    fields: {
      name: { label: "Nome completo", placeholder: "Seu nome" },
      email: { label: "E-mail", placeholder: "seuemail@exemplo.com" },
      question: {
        label: "Sua pergunta",
        placeholder: "Conte como podemos ajudar...",
      },
    },
    submitLabel: "Enviar mensagem",
    submittingLabel: "Enviando...",
    successMessage:
      "Obrigado pelo contato! Recebemos sua mensagem e responderemos em até 24 horas em dias úteis.",
    errorMessage:
      "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes.",
    validation: {
      nameRequired: "Por favor, informe seu nome completo.",
      nameMinLength: "O nome deve ter pelo menos 2 caracteres.",
      emailRequired: "Por favor, informe seu endereço de e-mail.",
      emailInvalid: "Por favor, informe um endereço de e-mail válido.",
      questionRequired: "Por favor, conte como podemos ajudar.",
      questionMinLength:
        "Escreva pelo menos 10 caracteres para podermos ajudar você.",
    },
  },
  finalCta: {
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Retrato de aluno da Luma" },
      { src: "/images/avatar-2.webp", alt: "Retrato de aluno da Luma" },
      { src: "/images/avatar-3.webp", alt: "Retrato de aluno da Luma" },
      { src: "/images/avatar-4.webp", alt: "Retrato de aluno da Luma" },
    ],
    heading: "O que você vai aprender agora?",
    description: "Comece por um curso. Evolua a partir daí.",
    primaryCta: { label: "Explorar todos os cursos", href: "#courses" },
    secondaryCta: { label: "Entrar na Luma", href: "#contact" },
  },
  footer: {
    homeAriaLabel: "Início da Luma",
    tagline: "Aprendizado prático para pessoas curiosas.",
    columns: [
      {
        heading: "Explorar",
        links: [
          { label: "Cursos", href: "#courses" },
          { label: "Categorias", href: "#courses" },
          { label: "Instrutores", href: "#people" },
          { label: "Para Equipes", href: "#featured-course" },
        ],
      },
      {
        heading: "Empresa",
        links: [
          { label: "Sobre", href: "#how-it-works" },
          { label: "Carreiras", href: "#people" },
          { label: "Diário", href: "#testimonial" },
        ],
      },
      {
        heading: "Suporte",
        links: [
          { label: "Central de Ajuda", href: "#contact" },
          { label: "Contato", href: "#contact" },
          { label: "Termos", href: "#footer" },
          { label: "Privacidade", href: "#footer" },
        ],
      },
    ],
    copyright: "© 2026 Luma Learning",
  },
};
