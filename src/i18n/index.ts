import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  getLocalePath,
  LOCALE_META,
  LOCALES,
  type Locale,
} from "@/i18n/config";
import { deDictionary } from "@/i18n/dictionaries/de";
import { enDictionary } from "@/i18n/dictionaries/en";
import { esDictionary } from "@/i18n/dictionaries/es";
import { frDictionary } from "@/i18n/dictionaries/fr";
import { ptDictionary } from "@/i18n/dictionaries/pt";
import type { SiteDictionary } from "@/i18n/types";

const DICTIONARIES: Record<Locale, SiteDictionary> = {
  en: enDictionary,
  pt: ptDictionary,
  es: esDictionary,
  fr: frDictionary,
  de: deDictionary,
};

export function getDictionary(locale: Locale = DEFAULT_LOCALE): SiteDictionary {
  return DICTIONARIES[locale] ?? enDictionary;
}

export function buildMetadata(locale: Locale = DEFAULT_LOCALE): Metadata {
  const dictionary = getDictionary(locale);
  const meta = LOCALE_META[locale];
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://buzzvel-fe-test-2026.pages.dev";

  const languages = Object.fromEntries([
    ...LOCALES.map((item) => [item, getLocalePath(item)]),
    ["x-default", getLocalePath(DEFAULT_LOCALE)],
  ]);

  const alternateLocale = LOCALES.filter((item) => item !== locale).map(
    (item) => LOCALE_META[item].ogLocale,
  );

  return {
    metadataBase: new URL(siteUrl),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: getLocalePath(locale),
      languages,
    },
    openGraph: {
      title: dictionary.meta.ogTitle,
      description: dictionary.meta.ogDescription,
      type: "website",
      locale: meta.ogLocale,
      alternateLocale,
      siteName: "Luma Learning",
      url: getLocalePath(locale),
      images: [
        {
          url: "/images/hero-learner.jpg",
          width: 900,
          height: 1100,
          alt: dictionary.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.ogDescription,
      images: ["/images/hero-learner.jpg"],
    },
  };
}

export {
  DEFAULT_LOCALE,
  getLocalePath,
  isLocale,
  LOCALE_META,
  LOCALES,
  type Locale,
} from "@/i18n/config";
export type * from "@/i18n/types";
