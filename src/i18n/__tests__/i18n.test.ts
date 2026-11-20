import { describe, expect, it } from "vitest";
import {
  buildMetadata,
  DEFAULT_LOCALE,
  getDictionary,
  getLocalePath,
  isLocale,
  LOCALE_META,
  LOCALES,
} from "@/i18n";
import { validateContactForm } from "@/lib/validation";

describe("i18n", () => {
  it("validates supported locales and computes canonical paths", () => {
    expect(LOCALES).toEqual(["en", "pt", "es", "fr", "de"]);
    expect(DEFAULT_LOCALE).toBe("en");
    for (const locale of LOCALES) {
      expect(isLocale(locale)).toBe(true);
    }
    expect(isLocale("it")).toBe(false);
    expect(getLocalePath("en")).toBe("/");
    expect(getLocalePath("pt")).toBe("/pt");
    expect(getLocalePath("es")).toBe("/es");
    expect(getLocalePath("fr")).toBe("/fr");
    expect(getLocalePath("de")).toBe("/de");
  });

  it("returns complete, distinct dictionaries for all locales", () => {
    const headings = new Set<string>();

    for (const locale of LOCALES) {
      const dict = getDictionary(locale);
      headings.add(dict.hero.heading);
      expect(dict.categories.items).toHaveLength(4);
      expect(dict.howItWorks.steps).toHaveLength(3);
      expect(dict.people.mosaicColumns.flat()).toHaveLength(10);
      expect(dict.footer.columns).toHaveLength(3);
    }

    expect(headings.size).toBe(LOCALES.length);
    expect(getDictionary("de").hero.heading).toContain("Entwickle Fähigkeiten");
    expect(getDictionary("fr").hero.heading).toContain(
      "Développez des compétences",
    );
    expect(getDictionary("es").hero.heading).toContain("Desarrolla habilidades");
  });

  it("builds localized SEO metadata with hreflang alternates for all locales", () => {
    const deMeta = buildMetadata("de");
    expect(deMeta.title).toContain("Praktisches Lernen");
    expect(deMeta.alternates?.canonical).toBe("/de");
    expect(deMeta.alternates?.languages).toMatchObject({
      en: "/",
      pt: "/pt",
      es: "/es",
      fr: "/fr",
      de: "/de",
      "x-default": "/",
    });
    expect(deMeta.openGraph?.locale).toBe(LOCALE_META.de.ogLocale);
    expect(deMeta.openGraph?.alternateLocale).toEqual([
      "en_US",
      "pt_BR",
      "es_ES",
      "fr_FR",
    ]);
  });

  it("localizes contact form validation messages across all locales", () => {
    for (const locale of LOCALES) {
      const dict = getDictionary(locale);
      const errors = validateContactForm(
        { name: "", email: "invalid", question: "short" },
        dict.contact.validation,
      );
      expect(errors.name).toBe(dict.contact.validation.nameRequired);
      expect(errors.email).toBe(dict.contact.validation.emailInvalid);
      expect(errors.question).toBe(dict.contact.validation.questionMinLength);
    }
  });
});
