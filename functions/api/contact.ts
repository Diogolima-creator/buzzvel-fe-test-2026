import {
  buildContactConfirmationEmail,
  buildTeamNotificationEmail,
  normalizeEmailLocale,
} from "../../src/lib/contact-email";

interface ContactEnv {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  RESEND_REPLY_TO?: string;
  CONTACT_NOTIFY_EMAIL?: string;
  SITE_URL?: string;
}

interface PagesFunctionContext<Env = ContactEnv> {
  request: Request;
  env: Env;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DEFAULT_FROM_EMAIL = "Luma <contato@diogolimadev.com.br>";

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

async function sendResendEmail(
  apiKey: string,
  payload: {
    from: string;
    to: string[];
    reply_to?: string;
    subject: string;
    html: string;
    text: string;
  },
): Promise<{ ok: boolean; status: number; id?: string; message?: string }> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as {
    id?: string;
    message?: string;
    name?: string;
  };

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      message: data.message || data.name || "Resend request failed",
    };
  }

  return { ok: true, status: response.status, id: data.id };
}

export async function onRequestPost(
  context: PagesFunctionContext,
): Promise<Response> {
  const { request, env } = context;

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "invalid_json" }, 400);
  }

  if (!payload || typeof payload !== "object") {
    return jsonResponse({ ok: false, error: "invalid_payload" }, 400);
  }

  const record = payload as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const question =
    typeof record.question === "string" ? record.question.trim() : "";
  const locale = normalizeEmailLocale(record.locale);

  if (name.length < 2 || name.length > 120) {
    return jsonResponse({ ok: false, error: "invalid_name" }, 400);
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return jsonResponse({ ok: false, error: "invalid_email" }, 400);
  }
  if (question.length < 10 || question.length > 3000) {
    return jsonResponse({ ok: false, error: "invalid_question" }, 400);
  }

  const apiKey = env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return jsonResponse(
      { ok: false, error: "email_not_configured" },
      503,
    );
  }

  const from = env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;
  const replyTo = env.RESEND_REPLY_TO?.trim() || undefined;
  const origin = new URL(request.url).origin;
  const siteUrl = env.SITE_URL?.trim() || origin;

  const confirmation = buildContactConfirmationEmail({
    name,
    question,
    locale,
    siteUrl,
  });

  const userSend = await sendResendEmail(apiKey, {
    from,
    to: [email],
    ...(replyTo ? { reply_to: replyTo } : {}),
    subject: confirmation.subject,
    html: confirmation.html,
    text: confirmation.text,
  });

  if (!userSend.ok) {
    return jsonResponse(
      {
        ok: false,
        error: "email_send_failed",
        message: userSend.message,
      },
      userSend.status >= 400 && userSend.status < 500 ? 422 : 502,
    );
  }

  const notifyEmail = env.CONTACT_NOTIFY_EMAIL?.trim();
  if (notifyEmail) {
    const internal = buildTeamNotificationEmail({
      name,
      email,
      question,
      locale,
    });
    await sendResendEmail(apiKey, {
      from,
      to: [notifyEmail],
      reply_to: email,
      subject: internal.subject,
      html: internal.html,
      text: internal.text,
    }).catch(() => undefined);
  }

  return jsonResponse({
    ok: true,
    id: userSend.id ?? null,
    locale,
  });
}
