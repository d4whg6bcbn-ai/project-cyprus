import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { META_PIXEL_ID } from "@/lib/meta";

type ContactPayload = {
  language?: unknown;
  purchasePurpose?: unknown;
  budget?: unknown;
  visitCyprus?: unknown;
  marketType?: unknown;
  fullName?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  company?: unknown;
  eventId?: unknown;
  eventSourceUrl?: unknown;
};

const requiredFields = [
  "fullName",
  "email",
  "phone",
  "purchasePurpose",
  "budget",
  "visitCyprus",
  "marketType",
] as const;

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizePayload(payload: ContactPayload) {
  return {
    language: getString(payload.language) || "unknown",
    fullName: getString(payload.fullName) || getString(payload.name),
    email: getString(payload.email),
    phone: getString(payload.phone),
    purchasePurpose: getString(payload.purchasePurpose),
    budget: getString(payload.budget),
    visitCyprus: getString(payload.visitCyprus),
    marketType: getString(payload.marketType),
    message: getString(payload.message),
    company: getString(payload.company),
    eventId: getString(payload.eventId),
    eventSourceUrl: getString(payload.eventSourceUrl),
    submittedAt: new Date().toISOString(),
  };
}

function hash(value: string) {
  return createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

function readCookie(request: Request, name: string) {
  const header = request.headers.get("cookie");
  if (!header) return "";
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : "";
}

// Server-side Conversions API event. Deduplicated against the browser pixel
// via the shared eventId. Failures are logged but never block the response.
async function sendMetaConversion(
  request: Request,
  data: ReturnType<typeof normalizePayload>,
) {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!accessToken) {
    // CAPI not configured yet — browser pixel still fires, so just skip.
    return;
  }

  const [firstName, ...rest] = data.fullName.trim().split(/\s+/);
  const lastName = rest.join(" ");
  const phoneDigits = data.phone.replace(/[^0-9]/g, "");

  const userData: Record<string, string | string[]> = {
    em: [hash(data.email)],
    client_user_agent: request.headers.get("user-agent") ?? "",
  };
  if (phoneDigits) userData.ph = [hash(phoneDigits)];
  if (firstName) userData.fn = [hash(firstName)];
  if (lastName) userData.ln = [hash(lastName)];

  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "";
  if (clientIp) userData.client_ip_address = clientIp;

  const fbp = readCookie(request, "_fbp");
  const fbc = readCookie(request, "_fbc");
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const eventTime = Math.floor(Date.now() / 1000);
  const baseEvent = {
    event_time: eventTime,
    event_id: data.eventId || undefined,
    action_source: "website",
    event_source_url: data.eventSourceUrl || undefined,
    user_data: userData,
  };

  const body = {
    data: [
      { ...baseEvent, event_name: "Lead" },
      { ...baseEvent, event_name: "CompleteRegistration" },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    console.error("Meta Conversions API request failed.", response.status, detail);
  }
}

function createTextEmail(data: ReturnType<typeof normalizePayload>) {
  return [
    "New Project Cyprus consultation request",
    "",
    `Language selected on website: ${data.language}`,
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Purchase purpose: ${data.purchasePurpose}`,
    `Budget: ${data.budget}`,
    `Wants to visit Cyprus: ${data.visitCyprus}`,
    `Market type: ${data.marketType}`,
    `Message: ${data.message || "-"}`,
    `Submitted at: ${data.submittedAt}`,
    "Source: Project Cyprus website",
  ].join("\n");
}

function createHtmlEmail(data: ReturnType<typeof normalizePayload>) {
  const rows = [
    ["Language selected on website", data.language],
    ["Name", data.fullName],
    ["Email", `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`],
    ["Phone", `<a href="tel:${escapeHtml(data.phone.replace(/\s+/g, ""))}">${escapeHtml(data.phone)}</a>`],
    ["Purchase purpose", data.purchasePurpose],
    ["Budget", data.budget],
    ["Wants to visit Cyprus", data.visitCyprus],
    ["Market type", data.marketType],
    ["Message", data.message || "-"],
    ["Submitted at", data.submittedAt],
    ["Source", "Project Cyprus website"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #1f1a12; line-height: 1.5;">
      <h1 style="margin: 0 0 18px; color: #1f1a12;">Project Cyprus</h1>
      <p style="margin: 0 0 20px;">New consultation request from the website.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="border: 1px solid #eadfbf; background: #f8f1df; padding: 10px 12px; text-align: left; vertical-align: top; width: 220px;">
                    ${escapeHtml(label)}
                  </th>
                  <td style="border: 1px solid #eadfbf; padding: 10px 12px; vertical-align: top;">
                    ${label === "Email" || label === "Phone" ? value : escapeHtml(value)}
                  </td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "JSON body must be an object." }, { status: 400 });
  }

  const data = normalizePayload(payload as ContactPayload);

  if (data.company) {
    return NextResponse.json({ success: true });
  }

  const missingFields = requiredFields.filter((field) => !data[field]);

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: "Missing required fields.", fields: missingFields },
      { status: 400 },
    );
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json({ error: "Invalid email address.", fields: ["email"] }, { status: 400 });
  }

  if (!data.phone) {
    return NextResponse.json({ error: "Phone is required.", fields: ["phone"] }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form email environment variables are missing.");
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New Project Cyprus consultation request — ${data.fullName}`,
      text: createTextEmail(data),
      html: createHtmlEmail(data),
    });

    try {
      await sendMetaConversion(request, data);
    } catch (error) {
      // Never fail the submission because of a tracking error.
      console.error("Meta Conversions API send failed.", error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed to send.", error);
    return NextResponse.json({ error: "Email could not be sent." }, { status: 500 });
  }
}
