export interface NavLink {
  label: string;
  href: string;
}

export interface CategoryItem {
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface StepItem {
  id: "focus" | "experience" | "practice";
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AvatarItem {
  src: string;
  alt: string;
}

export interface MosaicPhoto {
  src: string;
  alt: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface ContactValidationMessages {
  nameRequired: string;
  nameMinLength: string;
  emailRequired: string;
  emailInvalid: string;
  questionRequired: string;
  questionMinLength: string;
}

export interface ContactSectionContent {
  eyebrow: string;
  heading: string;
  description: string;
  emailLabel: string;
  emailAddress: string;
  responseLabel: string;
  responseDetail: string;
  formTitle: string;
  formDescription: string;
  fields: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    question: { label: string; placeholder: string };
  };
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  validation: ContactValidationMessages;
}

export interface SiteDictionary {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    skipToContent: string;
  };
  header: {
    homeAriaLabel: string;
    primaryNavAriaLabel: string;
    mobileNavAriaLabel: string;
    openMenuAriaLabel: string;
    closeMenuAriaLabel: string;
    languageSwitcherAriaLabel: string;
    navLinks: readonly NavLink[];
    loginAction: NavLink;
    primaryAction: NavLink;
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
    socialProofBold: string;
    socialProofRegular: string;
    avatars: readonly AvatarItem[];
    heroImage: { src: string; alt: string };
    coursesBadge: { count: string; label: string };
    ratingBadge: { stars: number; label: string };
  };
  categories: {
    eyebrow: string;
    heading: string;
    description: string;
    exploreLabel: string;
    items: readonly CategoryItem[];
  };
  featuredCourse: {
    badge: string;
    eyebrow: string;
    heading: string;
    description: string;
    instructor: string;
    detailsAriaLabel: string;
    metadata: readonly string[];
    primaryCta: NavLink;
    secondaryCta: NavLink;
    image: { src: string; alt: string };
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: readonly StepItem[];
  };
  testimonial: {
    sectionAriaLabel: string;
    quote: string;
    author: {
      name: string;
      role: string;
      avatarSrc: string;
      avatarAlt: string;
    };
    stats: readonly StatItem[];
  };
  people: {
    eyebrow: string;
    heading: string;
    description: string;
    cta: NavLink;
    mosaicColumns: readonly (readonly MosaicPhoto[])[];
  };
  contact: ContactSectionContent;
  finalCta: {
    avatars: readonly AvatarItem[];
    heading: string;
    description: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
  };
  footer: {
    homeAriaLabel: string;
    tagline: string;
    columns: readonly FooterColumn[];
    copyright: string;
  };
}
