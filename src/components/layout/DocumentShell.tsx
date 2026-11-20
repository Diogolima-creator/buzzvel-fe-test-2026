import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { getDictionary, LOCALE_META, type Locale } from "@/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const sharedViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9F8F3",
};

interface DocumentShellProps {
  locale: Locale;
  children: ReactNode;
}

export function DocumentShell({ locale, children }: DocumentShellProps) {
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={LOCALE_META[locale].htmlLang}
      className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink font-sans">
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
