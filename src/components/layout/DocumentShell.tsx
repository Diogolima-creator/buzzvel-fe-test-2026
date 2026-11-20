import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { getDictionary, LOCALE_META, type Locale } from "@/i18n";
import {
  INTRO_OPENING_EVENT,
  INTRO_SKIP_STORAGE_KEY,
} from "@/components/layout/BrandIntro";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: false,
});

export const sharedViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9F8F3",
};

const INTRO_BOOTSTRAP_SCRIPT = `try{var s=false;try{s=sessionStorage.getItem(${JSON.stringify(
  INTRO_SKIP_STORAGE_KEY,
)})==="1"}catch(e){}if(!s&&!location.hash&&!matchMedia("(prefers-reduced-motion: reduce)").matches){var r=document.documentElement;r.dataset.intro="active";var o=function(){if(r.dataset.intro!=="active")return;r.dataset.intro="opening";window.dispatchEvent(new CustomEvent(${JSON.stringify(
  INTRO_OPENING_EVENT,
)}));setTimeout(function(){if(r.dataset.intro==="opening")r.dataset.intro="done"},480)};window.__lumaOpenIntro=o;setTimeout(o,matchMedia("(max-width: 767px)").matches?180:420)}}catch(e){}`;

interface DocumentShellProps {
  locale: Locale;
  children: ReactNode;
}

export function DocumentShell({ locale, children }: DocumentShellProps) {
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={LOCALE_META[locale].htmlLang}
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink font-sans">
        <link
          rel="preload"
          as="image"
          href="/images/hero-learner-sm.webp"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-learner.webp"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
        <script
          dangerouslySetInnerHTML={{ __html: INTRO_BOOTSTRAP_SCRIPT }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg focus:outline-none"
        >
          {dictionary.meta.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
