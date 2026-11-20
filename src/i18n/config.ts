export const LOCALES = ["en", "pt", "es", "fr", "de"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getLocalePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}

export const LOCALE_META: Record<
  Locale,
  {
    code: string;
    label: string;
    htmlLang: string;
    ogLocale: string;
  }
> = {
  en: {
    code: "EN",
    label: "English",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  pt: {
    code: "PT",
    label: "Português",
    htmlLang: "pt",
    ogLocale: "pt_BR",
  },
  es: {
    code: "ES",
    label: "Español",
    htmlLang: "es",
    ogLocale: "es_ES",
  },
  fr: {
    code: "FR",
    label: "Français",
    htmlLang: "fr",
    ogLocale: "fr_FR",
  },
  de: {
    code: "DE",
    label: "Deutsch",
    htmlLang: "de",
    ogLocale: "de_DE",
  },
};
