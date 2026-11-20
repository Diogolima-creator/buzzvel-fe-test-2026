import { describe, expect, it } from "vitest";
import {
  buildContactConfirmationEmail,
  buildTeamNotificationEmail,
  normalizeEmailLocale,
} from "@/lib/contact-email";
import { LOCALES } from "@/i18n";

describe("contact-email", () => {
  it("normalizes supported locales and falls back to en", () => {
    for (const locale of LOCALES) {
      expect(normalizeEmailLocale(locale)).toBe(locale);
    }
    expect(normalizeEmailLocale("it")).toBe("en");
    expect(normalizeEmailLocale(undefined)).toBe("en");
  });

  it("builds distinct localized confirmation emails for all 5 languages", () => {
    const subjects = new Set<string>();

    for (const locale of LOCALES) {
      const email = buildContactConfirmationEmail({
        name: "Diogo Lima",
        question: "Gostaria de saber mais sobre os cursos de Product Design.",
        locale,
      });
      subjects.add(email.subject);
      expect(email.html).toContain("Diogo");
      expect(email.html).toContain("Product Design");
      expect(email.text).toContain("Diogo");
      expect(email.text).toContain("Product Design");
    }

    expect(subjects.size).toBe(LOCALES.length);

    const ptEmail = buildContactConfirmationEmail({
      name: "Diogo Lima",
      question: "Teste em português",
      locale: "pt",
    });
    expect(ptEmail.subject).toContain("Recebemos sua mensagem");
    expect(ptEmail.html).toContain("Olá, Diogo!");

    const frEmail = buildContactConfirmationEmail({
      name: "Diogo Lima",
      question: "Test en français",
      locale: "fr",
    });
    expect(frEmail.subject).toContain("Nous avons bien reçu votre message");
    expect(frEmail.html).toContain("Bonjour Diogo,");

    const deEmail = buildContactConfirmationEmail({
      name: "Diogo Lima",
      question: "Test auf Deutsch",
      locale: "de",
    });
    expect(deEmail.subject).toContain("Wir haben deine Nachricht erhalten");
    expect(deEmail.html).toContain("Hallo Diogo,");
  });

  it("escapes HTML entities in user input and builds team notifications", () => {
    const email = buildContactConfirmationEmail({
      name: "<script>alert(1)</script>",
      question: "Hello & welcome <img src=x onerror=alert(1)>",
      locale: "en",
    });
    expect(email.html).not.toContain("<script>");
    expect(email.html).toContain("&lt;script&gt;");
    expect(email.html).toContain("Hello &amp; welcome");

    const team = buildTeamNotificationEmail({
      name: "Diogo Lima",
      email: "diogo@example.com",
      question: "Can we collaborate?",
      locale: "es",
    });
    expect(team.subject).toContain("[Luma Contact · ES]");
    expect(team.html).toContain("diogo@example.com");
  });
});
