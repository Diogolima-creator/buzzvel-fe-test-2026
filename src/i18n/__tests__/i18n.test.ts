import { describe, expect, it } from "vitest";
import {
  buildMetadata,
  DEFAULT_LOCALE,
  getDictionary,
  getLocalePath,
  isLocale,
  LOCALES,
} from "@/i18n";
import { validateContactForm } from "@/lib/validation";

describe("i18n", () => {
  it("validates supported locales and computes canonical paths", () => {
    expect(LOCALES).toEqual(["en", "pt"]);
    expect(DEFAULT_LOCALE).toBe("en");
    expect(isLocale("en")).toBe(true);
    expect(isLocale("pt")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(getLocalePath("en")).toBe("/");
    expect(getLocalePath("pt")).toBe("/pt");
  });

  it("returns complete, distinct dictionaries for EN and PT", () => {
    const en = getDictionary("en");
    const pt = getDictionary("pt");

    expect(en.hero.heading).toContain("Build skills");
    expect(pt.hero.heading).toContain("Desenvolva habilidades");
    expect(en.categories.items).toHaveLength(4);
    expect(pt.categories.items).toHaveLength(4);
    expect(en.howItWorks.steps).toHaveLength(3);
    expect(pt.howItWorks.steps).toHaveLength(3);
    expect(en.people.mosaicColumns.flat()).toHaveLength(10);
    expect(pt.people.mosaicColumns.flat()).toHaveLength(10);
  });

  it("builds localized SEO metadata with hreflang alternates", () => {
    const ptMeta = buildMetadata("pt");
    expect(ptMeta.title).toContain("Aprendizado prático");
    expect(ptMeta.alternates?.canonical).toBe("/pt");
    expect(ptMeta.alternates?.languages).toMatchObject({
      en: "/",
      pt: "/pt",
      "x-default": "/",
    });
  });

  it("localizes contact form validation messages", () => {
    const pt = getDictionary("pt");
    const errors = validateContactForm(
      { name: "", email: "invalido", question: "curto" },
      pt.contact.validation,
    );
    expect(errors.name).toBe(pt.contact.validation.nameRequired);
    expect(errors.email).toBe(pt.contact.validation.emailInvalid);
    expect(errors.question).toBe(pt.contact.validation.questionMinLength);
  });
});
