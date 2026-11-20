import type { SiteDictionary } from "@/i18n/types";

export const enDictionary: SiteDictionary = {
  meta: {
    title: "Luma — Practical learning for curious people",
    description:
      "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
    ogTitle: "Luma — Build skills that actually move you forward",
    ogDescription:
      "Short, practical courses designed around skills you can put to work immediately.",
    ogImageAlt: "Person focused on learning at their laptop",
    skipToContent: "Skip to main content",
  },
  intro: {
    ariaLabel: "Luma welcome screen",
    tagline: "Practical learning for curious people.",
    skipLabel: "Skip intro",
  },
  header: {
    homeAriaLabel: "Luma home",
    primaryNavAriaLabel: "Primary",
    mobileNavAriaLabel: "Mobile navigation",
    openMenuAriaLabel: "Open navigation menu",
    closeMenuAriaLabel: "Close navigation menu",
    languageSwitcherAriaLabel: "Language selector",
    navLinks: [
      { label: "Courses", href: "#courses" },
      { label: "For Teams", href: "#featured-course" },
      { label: "Community", href: "#people" },
      { label: "About", href: "#how-it-works" },
    ],
    loginAction: { label: "Log in", href: "#contact" },
    primaryAction: { label: "Start learning", href: "#courses" },
  },
  hero: {
    eyebrow: "Learn at your own pace",
    heading: "Build skills that actually move you forward.",
    description:
      "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
    primaryCta: { label: "Explore courses", href: "#courses" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    socialProofBold: "Trusted by 24,000+",
    socialProofRegular: "learners",
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Luma learner portrait" },
      { src: "/images/avatar-2.webp", alt: "Luma learner portrait" },
      { src: "/images/avatar-3.webp", alt: "Luma learner portrait" },
    ],
    heroImage: {
      src: "/images/hero-learner.webp",
      alt: "Person focused on learning at their laptop",
    },
    coursesBadge: {
      count: "120+",
      label: "expert-led courses",
    },
    ratingBadge: {
      stars: 5,
      label: "4.9 avg rating",
    },
  },
  categories: {
    eyebrow: "Find your next skill",
    heading: "Learn something worth knowing.",
    description:
      "Short, practical courses designed around skills you can put to work immediately.",
    exploreLabel: "Explore",
    items: [
      {
        number: "01",
        title: "Product Design",
        description: "Turn complex problems into clear, useful experiences.",
        href: "#featured-course",
      },
      {
        number: "02",
        title: "Technology",
        description:
          "Build a stronger understanding of the tools shaping digital products.",
        href: "#featured-course",
      },
      {
        number: "03",
        title: "Business",
        description:
          "Develop practical skills for better decisions and stronger teams.",
        href: "#featured-course",
      },
      {
        number: "04",
        title: "Creative",
        description:
          "Explore new ways to communicate, create and tell stories.",
        href: "#featured-course",
      },
    ],
  },
  featuredCourse: {
    badge: "Featured Course",
    eyebrow: "Most popular this month",
    heading: "Designing products people understand.",
    description:
      "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
    instructor: "with Maya Chen · Senior Product Designer",
    detailsAriaLabel: "Course details",
    metadata: ["8 lessons", "2h 40min", "Intermediate"],
    primaryCta: { label: "View course", href: "#contact" },
    secondaryCta: { label: "Browse all courses", href: "#courses" },
    image: {
      src: "/images/featured-course.webp",
      alt: "Product design course — student working on interface designs",
    },
  },
  howItWorks: {
    eyebrow: "How Luma works",
    heading: "Less browsing. More learning.",
    steps: [
      {
        id: "focus",
        step: "Step 01",
        title: "Choose your focus",
        description:
          "Find courses based on the skill you want to build, not endless content categories.",
      },
      {
        id: "experience",
        step: "Step 02",
        title: "Learn from experience",
        description:
          "Follow concise lessons created by professionals who use these skills.",
      },
      {
        id: "practice",
        step: "Step 03",
        title: "Put it into practice",
        description:
          "Every course includes practical exercises designed to turn knowledge into action.",
      },
    ],
  },
  testimonial: {
    sectionAriaLabel: "Learner testimonial and impact metrics",
    quote:
      "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
    author: {
      name: "Alex Morgan",
      role: "Product Manager",
      avatarSrc: "/images/testimonial-alex.webp",
      avatarAlt: "Alex Morgan",
    },
    stats: [
      { value: "24K+", label: "active learners" },
      { value: "120+", label: "expert-led courses" },
      { value: "92%", label: "complete their first course" },
    ],
  },
  people: {
    eyebrow: "The people",
    heading: "Meet international students & teachers",
    description:
      "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
    cta: { label: "Explore teachers and students", href: "#contact" },
    mosaicColumns: [
      [
        {
          src: "/images/people-01.webp",
          alt: "Smiling student working outdoors with laptop",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
        {
          src: "/images/people-02.webp",
          alt: "Instructor collaborating with learners",
          desktopWidth: 138,
          desktopHeight: 207,
          mobileWidth: 94,
          mobileHeight: 129,
        },
      ],
      [
        {
          src: "/images/people-03.webp",
          alt: "Student smiling in a studio workspace",
          desktopWidth: 103,
          desktopHeight: 170,
          mobileWidth: 72,
          mobileHeight: 106,
        },
        {
          src: "/images/people-04.webp",
          alt: "Teacher presenting design concepts",
          desktopWidth: 103,
          desktopHeight: 173,
          mobileWidth: 72,
          mobileHeight: 108,
        },
        {
          src: "/images/people-05.webp",
          alt: "Learner studying at a cafe",
          desktopWidth: 103,
          desktopHeight: 128,
          mobileWidth: 72,
          mobileHeight: 80,
        },
      ],
      [
        {
          src: "/images/people-06.webp",
          alt: "Design mentor portrait",
          desktopWidth: 103,
          desktopHeight: 137,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-07.webp",
          alt: "International students discussing a project",
          desktopWidth: 103,
          desktopHeight: 138,
          mobileWidth: 72,
          mobileHeight: 86,
        },
        {
          src: "/images/people-08.webp",
          alt: "Creative course participant smiling",
          desktopWidth: 103,
          desktopHeight: 154,
          mobileWidth: 72,
          mobileHeight: 96,
        },
      ],
      [
        {
          src: "/images/people-09.webp",
          alt: "Technology instructor at desk",
          desktopWidth: 128,
          desktopHeight: 205,
          mobileWidth: 88,
          mobileHeight: 128,
        },
        {
          src: "/images/people-10.webp",
          alt: "Community learner taking notes",
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
    heading: "Get in touch",
    description:
      "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
    emailLabel: "Email",
    emailAddress: "contact@luma.com",
    responseLabel: "Response Time",
    responseDetail: "Up to 24 hours on business days",
    formTitle: "Contact us",
    formDescription: "Fill out the fields and we will get in touch.",
    fields: {
      name: { label: "Full name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "youremail@example.com" },
      question: {
        label: "Your question",
        placeholder: "Tell us how we can help...",
      },
    },
    submitLabel: "Send message",
    submittingLabel: "Sending...",
    successMessage:
      "Thanks for reaching out! We’ve received your message and will reply within 24 hours on business days.",
    validation: {
      nameRequired: "Please enter your full name.",
      nameMinLength: "Name must be at least 2 characters.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      questionRequired: "Please tell us how we can help.",
      questionMinLength:
        "Please write at least 10 characters so we can assist you.",
    },
  },
  finalCta: {
    avatars: [
      { src: "/images/avatar-1.webp", alt: "Luma learner portrait" },
      { src: "/images/avatar-2.webp", alt: "Luma learner portrait" },
      { src: "/images/avatar-3.webp", alt: "Luma learner portrait" },
      { src: "/images/avatar-4.webp", alt: "Luma learner portrait" },
    ],
    heading: "What will you learn next?",
    description: "Start with one course. Build from there.",
    primaryCta: { label: "Explore all courses", href: "#courses" },
    secondaryCta: { label: "Join Luma", href: "#contact" },
  },
  footer: {
    homeAriaLabel: "Luma home",
    tagline: "Practical learning for curious people.",
    columns: [
      {
        heading: "Explore",
        links: [
          { label: "Courses", href: "#courses" },
          { label: "Categories", href: "#courses" },
          { label: "Instructors", href: "#people" },
          { label: "For Teams", href: "#featured-course" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "#how-it-works" },
          { label: "Careers", href: "#people" },
          { label: "Journal", href: "#testimonial" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Help Center", href: "#contact" },
          { label: "Contact", href: "#contact" },
          { label: "Terms", href: "#footer" },
          { label: "Privacy", href: "#footer" },
        ],
      },
    ],
    copyright: "© 2026 Luma Learning",
  },
};
