# Luma — Buzzvel Front-End Engineer Coding Challenge (Nov 2026)

Responsive, internationalized (`EN` / `PT`) single-page landing site for **Luma** built from the supplied Figma design using **Next.js App Router**, **TypeScript**, and **Tailwind CSS v4**, statically exported and deployed on **Cloudflare Pages**.

- **Live Preview (EN)**: [https://buzzvel-fe-test-2026.pages.dev](https://buzzvel-fe-test-2026.pages.dev)
- **Live Preview (PT)**: [https://buzzvel-fe-test-2026.pages.dev/pt](https://buzzvel-fe-test-2026.pages.dev/pt)

## Getting Started

### Prerequisites

- Node.js 20+ (developed with Node 26)
- `pnpm` 10+ (or `npm` / `yarn`)

### Install, Run, Build & Test

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Lint
pnpm lint

# Run unit & component tests (Vitest + Testing Library)
pnpm test

# Create static production export in ./out (ready for Cloudflare Pages)
pnpm build
```

### Deploying to Cloudflare Pages

```bash
pnpm build
npx wrangler pages deploy out --project-name=buzzvel-fe-test-2026
```

## Architecture & Implementation Highlights

- **Static-first i18n (`EN` / `PT`) with zero client hydration flicker**:
  - Uses Next.js App Router route groups (`src/app/(default)` for `/` in English, and `src/app/[locale]` with `generateStaticParams` for `/en` and `/pt`) sharing a single `DocumentShell` and `LandingPage`.
  - Typed dictionaries in `src/i18n/dictionaries/en.ts` and `src/i18n/dictionaries/pt.ts` cover every heading, body copy, CTA, image `alt` attribute, ARIA label, SEO/OpenGraph tag, and contact form validation error.
  - Emits accurate `<html lang="en">` / `<html lang="pt">`, localized `<title>` and OpenGraph `locale`, and `hreflang` alternates (`en`, `pt`, `x-default`).
  - `LanguageSwitcher` renders standard `<Link>` elements (`/` and `/pt`) with `aria-current="page"` and `hrefLang`, working even with JavaScript disabled.
- **Server Components by default**: Only `MobileMenu` and `ContactForm` use `"use client"`, keeping the client JavaScript footprint minimal.
- **Design tokens in CSS (`src/app/globals.css`)**: Colors, typography font families (`Plus Jakarta Sans` and `Inter` via `next/font/google` with `display: swap`), and shadow tokens are extracted directly from the Figma file and mapped via Tailwind CSS v4 `@theme inline`.
- **Reusable UI primitives**:
  - `src/components/ui/` provides reusable `Button` (polymorphic link/button with variants), `Container`, `Eyebrow`, `SectionHeading`, `AvatarStack`, and inline SVG `Icons`.
  - `src/components/layout/` contains `DocumentShell`, the sticky `Header` (with `LanguageSwitcher` and `MobileMenu`), and `Footer`.
  - `src/components/sections/` implements all 8 sections (`Hero`, `Categories`, `FeaturedCourse`, `HowItWorks`, `Testimonial`, `People`, `Contact` + `ContactForm`, and `FinalCTA`).
- **Static export & image optimization**: Configured with `output: "export"` for Cloudflare Pages. All photographs in `public/images/` were pre-optimized and right-sized to crisp 2x–3x Retina WebP assets (~307 KB total vs. ~1.7 MB original JPEGs, an 82% reduction), keeping `hero-learner.jpg` for OpenGraph crawler compatibility.
- **Accessibility & reduced motion**:
  - Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`, `<footer>`), localized skip-to-content link, single `<h1>`, descriptive `alt` text (and `aria-hidden` on decorative shapes/icons).
  - Keyboard-friendly focus rings (`focus-visible:ring-2`) across all interactive controls.
  - Global `@media (prefers-reduced-motion: reduce)` rule disables smooth scrolling and transitions.

## Key Design Decisions & Clarifications

Because the Figma file does not define prototype links, tablet artboards, or an open mobile menu state, the following intentional choices were made:

1. **Inferred interactions**:
   - **Navigation & CTAs**: Header links, footer links, and section CTAs smoothly scroll to their corresponding page sections (`#courses`, `#featured-course`, `#how-it-works`, `#testimonial`, `#people`, `#contact`).
   - **Mobile menu**: Designed to match the header surface (`#F9F8F3` with `#DBDFEB` borders). Includes `aria-expanded` / `aria-controls`, body scroll locking, automatic close on `Escape`, backdrop click, link navigation, or resizing to desktop, plus focus management (moves focus to the first link on open and returns focus to the trigger on `Escape`).
   - **Contact form**: Client-side validation (`src/lib/validation.ts`) supporting localized validation messages for full name (2+ chars), valid email format, and question (10+ chars). Errors are announced via `role="alert"` and linked with `aria-invalid` / `aria-describedby`. Valid submission simulates an async request, renders a `role="status"` confirmation banner, and resets the form.
   - **Hover & focus states**: Added subtle elevation/border hover feedback and arrow slide transitions on category cards and links.
2. **Tablet layout (`768px–1023px`)**:
   - Header switches to the full horizontal nav bar at `md` (`768px`) with non-wrapping links, language toggle, and CTAs.
   - Hero keeps the visual above the copy until `lg` (`1024px`) so both columns have comfortable breathing room.
   - Category cards use a 2-column grid at `sm`/`md` and 4 columns at `lg`.
   - How It Works steps and Testimonial stats switch to 3 columns at `md` and above.
3. **Design inconsistencies resolved**:
   - **Step numbering**: The desktop Figma frame labels all three steps as `"Step 01"`, while the mobile frame labels them `"Step 01"`, `"Step 02"`, `"Step 03"`. Numbered sequentially (`01`, `02`, `03`) across all viewports and locales.
   - **Contact form email field**: The mobile Figma frame uses Portuguese placeholder text (`"E-mail"` / `"seuemail@exemplo.com"`) while the desktop frame uses English (`"Email"` / `"youremail@example.com"`). Standardized to English on `/` and Portuguese on `/pt`.
   - **Contrast adjustments**: Slightly darkened secondary muted text on cream (`#6D7384` → `#666C7C`) and used `#FFFFFF` for subtle text on the primary blue background (`#3157F6`) to exceed the 4.5:1 WCAG AA contrast threshold without altering the visual feel.
   - **People section copy**: Kept the Figma copy verbatim on the English route (`/`) for strict design fidelity, and provided natural Portuguese community copy on `/pt`.
   - **FinalCTA decorations**: Positioned from Figma desktop coordinates inside an `overflow-hidden` container and hidden on smaller screens to match the mobile frame.

## Verification & Quality Checks

| Check | Result |
| --- | --- |
| `pnpm lint` | Passed (0 warnings, 0 errors) |
| `pnpm test` | 4 suites / 12 tests passed (`validation`, `i18n`, `ContactForm` EN+PT, `MobileMenu`) |
| `pnpm build` | Passed cleanly (`out/` static export with `/`, `/en`, `/pt`, `404.html`) |
| Responsive overflow (`360px`–`1440px`) | 0 horizontal overflow on both `/` and `/pt` across 360, 402, 768, 1024, 1280, 1440px |
| `axe-core` (WCAG 2.1 AA + best practices) | 0 violations (desktop, mobile, open mobile menu, form validation state) |
| Lighthouse (Desktop) | Performance **100** · Accessibility **100** · Best Practices **100** · SEO **100** (LCP 0.6s, CLS 0) |
| Lighthouse (Mobile) | Performance **99** · Accessibility **100** · Best Practices **100** · SEO **100** (LCP 2.1s, CLS 0) |
| Live Cloudflare Pages smoke test | HTTP 200 on `/` and `/pt`, 20/20 images loaded, 0 failed requests, 0 overflow |

## Known Gaps

- Navigation links (`Log in`, `View course`, `Terms`, `Privacy`, etc.) are mapped to on-page section anchors since this challenge covers a single landing page with no backend or multi-page routing.
- Contact form submission is mocked client-side; no email API or persistence layer is connected.

## Approximate Time Spent

~3 hours total (design inspection & asset extraction, project setup, responsive section implementation, static-first EN/PT i18n, WebP optimization & Cloudflare Pages deployment, accessibility & visual verification, automated tests, and documentation).

## AI Tools Used & Verification

AI coding assistants (Claude and Antigravity/Gemini inside T3 Code) were used to inspect the Figma node tree, extract exact design tokens and SVGs, scaffold components and i18n dictionaries, and write automated verification scripts.

All generated output was verified against the design and quality bar through Playwright viewport and screenshot checks (both EN and PT), `axe-core` WCAG 2.1 AA scans, local production Lighthouse runs, keyboard navigation tests, Vitest + Testing Library unit/component tests, ESLint, a clean Next.js static export build, and live smoke testing on Cloudflare Pages.
