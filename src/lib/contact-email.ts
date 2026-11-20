export type EmailLocale = "en" | "pt" | "es" | "fr" | "de";

interface LocalizedEmailCopy {
  lang: string;
  subject: string;
  preheader: string;
  badge: string;
  greeting: (firstName: string) => string;
  headline: string;
  body: string;
  summaryLabel: string;
  responseNote: string;
  ctaLabel: string;
  signoffIntro: string;
  signoffTeam: string;
  footerNote: string;
  path: string;
}

const EMAIL_COPY: Record<EmailLocale, LocalizedEmailCopy> = {
  en: {
    lang: "en",
    subject: "We received your message — Luma",
    preheader:
      "Thanks for reaching out to Luma. Our team will reply within 24 hours.",
    badge: "MESSAGE RECEIVED",
    greeting: (firstName) => `Hi ${firstName},`,
    headline: "Thanks for reaching out — we’ve got your message.",
    body: "We’ve received your question and a real person from the Luma team will review it and get back to you soon.",
    summaryLabel: "Your message",
    responseNote: "Typical response time: within 24 hours (Mon–Fri).",
    ctaLabel: "Back to Luma",
    signoffIntro: "Warm regards,",
    signoffTeam: "The Luma Team",
    footerNote:
      "You received this confirmation because you submitted the contact form on Luma.",
    path: "/",
  },
  pt: {
    lang: "pt-BR",
    subject: "Recebemos sua mensagem — Luma",
    preheader:
      "Obrigado pelo contato com a Luma. Nossa equipe responderá em até 24 horas.",
    badge: "MENSAGEM RECEBIDA",
    greeting: (firstName) => `Olá, ${firstName}!`,
    headline: "Obrigado pelo contato — recebemos sua mensagem.",
    body: "Sua mensagem chegou direitinho por aqui. Alguém da equipe da Luma vai ler com atenção e responder para você em breve.",
    summaryLabel: "Sua mensagem",
    responseNote: "Tempo médio de resposta: em até 24 horas (seg–sex).",
    ctaLabel: "Voltar para a Luma",
    signoffIntro: "Um abraço,",
    signoffTeam: "Equipe Luma",
    footerNote:
      "Você recebeu esta confirmação porque enviou uma mensagem pelo formulário de contato da Luma.",
    path: "/pt",
  },
  es: {
    lang: "es",
    subject: "Recibimos tu mensaje — Luma",
    preheader:
      "Gracias por escribirnos en Luma. Nuestro equipo responderá en menos de 24 horas.",
    badge: "MENSAJE RECIBIDO",
    greeting: (firstName) => `¡Hola, ${firstName}!`,
    headline: "Gracias por escribirnos — recibimos tu mensaje.",
    body: "Hemos recibido tu consulta y una persona real del equipo de Luma la revisará para responderte muy pronto.",
    summaryLabel: "Tu mensaje",
    responseNote: "Tiempo habitual de respuesta: en menos de 24 horas (lun–vie).",
    ctaLabel: "Volver a Luma",
    signoffIntro: "Un saludo,",
    signoffTeam: "El equipo de Luma",
    footerNote:
      "Recibiste esta confirmación porque enviaste el formulario de contacto en Luma.",
    path: "/es",
  },
  fr: {
    lang: "fr",
    subject: "Nous avons bien reçu votre message — Luma",
    preheader:
      "Merci d’avoir contacté Luma. Notre équipe vous répondra sous 24 heures.",
    badge: "MESSAGE REÇU",
    greeting: (firstName) => `Bonjour ${firstName},`,
    headline: "Merci pour votre message — nous l’avons bien reçu.",
    body: "Votre demande a bien été transmise à notre équipe. Un membre de Luma la lira avec attention et vous répondra très prochainement.",
    summaryLabel: "Votre message",
    responseNote: "Délai moyen de réponse : sous 24 heures (lun–ven).",
    ctaLabel: "Retourner sur Luma",
    signoffIntro: "Bien cordialement,",
    signoffTeam: "L’équipe Luma",
    footerNote:
      "Vous recevez cet e-mail de confirmation suite à l’envoi du formulaire de contact sur Luma.",
    path: "/fr",
  },
  de: {
    lang: "de",
    subject: "Wir haben deine Nachricht erhalten — Luma",
    preheader:
      "Danke für deine Nachricht an Luma. Unser Team antwortet innerhalb von 24 Stunden.",
    badge: "NACHRICHT ERHALTEN",
    greeting: (firstName) => `Hallo ${firstName},`,
    headline: "Danke für deine Nachricht — sie ist bei uns eingegangen.",
    body: "Deine Frage ist sicher bei uns angekommen. Jemand aus dem Luma-Team liest sie in Ruhe durch und meldet sich bald bei dir.",
    summaryLabel: "Deine Nachricht",
    responseNote: "Übliche Antwortzeit: innerhalb von 24 Stunden (Mo–Fr).",
    ctaLabel: "Zurück zu Luma",
    signoffIntro: "Herzliche Grüße,",
    signoffTeam: "Dein Luma-Team",
    footerNote:
      "Du erhältst diese Bestätigung, weil du das Kontaktformular auf Luma ausgefüllt hast.",
    path: "/de",
  },
};

export function normalizeEmailLocale(value: unknown): EmailLocale {
  if (
    value === "en" ||
    value === "pt" ||
    value === "es" ||
    value === "fr" ||
    value === "de"
  ) {
    return value;
  }
  return "en";
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function extractFirstName(fullName: string): string {
  const cleaned = fullName.trim().replace(/\s+/g, " ");
  const first = cleaned.split(" ")[0];
  return first || cleaned;
}

export interface BuildConfirmationEmailInput {
  name: string;
  question: string;
  locale: EmailLocale;
  siteUrl?: string;
}

export interface RenderedEmail {
  subject: string;
  html: string;
  text: string;
}

export function buildContactConfirmationEmail({
  name,
  question,
  locale,
  siteUrl = "https://buzzvel-fe-test-2026.pages.dev",
}: BuildConfirmationEmailInput): RenderedEmail {
  const copy = EMAIL_COPY[locale];
  const firstName = extractFirstName(name);
  const safeGreeting = escapeHtml(copy.greeting(firstName));
  const safeHeadline = escapeHtml(copy.headline);
  const safeBody = escapeHtml(copy.body);
  const safeSummaryLabel = escapeHtml(copy.summaryLabel);
  const safeQuestionHtml = escapeHtml(question.trim()).replace(/\r?\n/g, "<br />");
  const safeResponseNote = escapeHtml(copy.responseNote);
  const safeCtaLabel = escapeHtml(copy.ctaLabel);
  const safeSignoffIntro = escapeHtml(copy.signoffIntro);
  const safeSignoffTeam = escapeHtml(copy.signoffTeam);
  const safeFooterNote = escapeHtml(copy.footerNote);
  const normalizedBase = siteUrl.replace(/\/+$/, "");
  const ctaHref = `${normalizedBase}${copy.path}`;

  const html = `<!doctype html>
<html lang="${copy.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(copy.subject)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#F9F8F3;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#171B2C;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(copy.preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F9F8F3;padding:36px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#FFFFFF;border:1px solid #DBDFEB;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 0 32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="font-size:24px;font-weight:800;letter-spacing:-0.04em;color:#171B2C;">
                      luma<span style="color:#3157F6;">.</span>
                    </td>
                    <td align="right">
                      <span style="display:inline-block;background-color:#E2E8FF;color:#3157F6;font-size:11px;font-weight:700;letter-spacing:0.1em;padding:5px 10px;border-radius:6px;">
                        ${escapeHtml(copy.badge)}
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 32px 32px;">
                <p style="margin:0 0 8px 0;font-size:15px;line-height:24px;color:#656770;">
                  ${safeGreeting}
                </p>
                <h1 style="margin:0 0 16px 0;font-size:24px;line-height:32px;font-weight:800;letter-spacing:-0.02em;color:#171B2C;">
                  ${safeHeadline}
                </h1>
                <p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#656770;">
                  ${safeBody}
                </p>
                <div style="background-color:#F9F8F3;border:1px solid #DBDFEB;border-radius:12px;padding:18px 20px;margin:0 0 22px 0;">
                  <p style="margin:0 0 8px 0;font-size:11px;line-height:16px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#3157F6;">
                    ${safeSummaryLabel}
                  </p>
                  <p style="margin:0;font-size:14px;line-height:22px;color:#171B2C;">
                    ${safeQuestionHtml}
                  </p>
                </div>
                <p style="margin:0 0 28px 0;font-size:13px;line-height:20px;color:#666C7C;">
                  ${safeResponseNote}
                </p>
                <a href="${ctaHref}" style="display:inline-block;background-color:#3157F6;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:700;line-height:20px;padding:13px 22px;border-radius:8px;">
                  ${safeCtaLabel}
                </a>
                <p style="margin:28px 0 0 0;font-size:14px;line-height:22px;color:#171B2C;">
                  ${safeSignoffIntro}<br />
                  <strong>${safeSignoffTeam}</strong>
                </p>
              </td>
            </tr>
          </table>
          <p style="max-width:560px;margin:18px 0 0 0;font-size:12px;line-height:18px;color:#666C7C;text-align:center;">
            ${safeFooterNote}
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    copy.greeting(firstName),
    "",
    copy.headline,
    "",
    copy.body,
    "",
    `${copy.summaryLabel}:`,
    question.trim(),
    "",
    copy.responseNote,
    "",
    `${copy.ctaLabel}: ${ctaHref}`,
    "",
    copy.signoffIntro,
    copy.signoffTeam,
    "",
    "---",
    copy.footerNote,
  ].join("\n");

  return {
    subject: copy.subject,
    html,
    text,
  };
}

export function buildTeamNotificationEmail({
  name,
  email,
  question,
  locale,
}: {
  name: string;
  email: string;
  question: string;
  locale: EmailLocale;
}): RenderedEmail {
  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeQuestion = escapeHtml(question.trim()).replace(/\r?\n/g, "<br />");

  return {
    subject: `[Luma Contact · ${locale.toUpperCase()}] New message from ${name.trim()}`,
    html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#171B2C;line-height:1.6;">
  <h2 style="margin:0 0 12px 0;">New Luma contact submission (${locale.toUpperCase()})</h2>
  <p style="margin:0 0 6px 0;"><strong>Name:</strong> ${safeName}</p>
  <p style="margin:0 0 6px 0;"><strong>Email:</strong> ${safeEmail}</p>
  <p style="margin:0 0 14px 0;"><strong>Language:</strong> ${locale.toUpperCase()}</p>
  <div style="background:#F9F8F3;border:1px solid #DBDFEB;border-radius:10px;padding:14px 16px;">
    ${safeQuestion}
  </div>
</div>`,
    text: [
      `New Luma contact submission (${locale.toUpperCase()})`,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Language: ${locale.toUpperCase()}`,
      "",
      question.trim(),
    ].join("\n"),
  };
}
