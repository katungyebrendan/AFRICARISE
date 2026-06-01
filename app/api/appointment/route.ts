import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function getRequiredEnv(name: string): string | null {
  const value = process.env[name];
  if (!value) return null;
  return value;
}

function getField(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function buildClinicEmailText(params: {
  petName: string;
  ownerName: string;
  ownerEmail: string;
  phone: string;
  dateRequested: string;
  notes: string;
}): string {
  const { petName, ownerName, ownerEmail, phone, dateRequested, notes } = params;
  return [
    "New appointment request",
    "",
    `Pet: ${petName}`,
    `Owner: ${ownerName}`,
    `Email: ${ownerEmail}`,
    `Phone: ${phone}`,
    `Date requested: ${dateRequested}`,
    "",
    "Notes:",
    notes || "(none)",
  ].join("\n");
}

function buildCustomerEmailText(params: {
  petName: string;
  ownerName: string;
  dateRequested: string;
}): string {
  const { petName, ownerName, dateRequested } = params;
  return [
    `Hi ${ownerName},`,
    "",
    "We received your appointment request.",
    "",
    `Pet: ${petName}`,
    `Date requested: ${dateRequested}`,
    "",
    "We’ll contact you soon to confirm a time.",
    "",
    "— Vet Clinic",
  ].join("\n");
}

export async function POST(req: Request) {
  const resendApiKey = getRequiredEnv("RESEND_API_KEY");
  const resendFrom = getRequiredEnv("RESEND_FROM");
  const clinicEmail = getRequiredEnv("CLINIC_EMAIL");
  if (!resendApiKey || !resendFrom || !clinicEmail) {
    const redirectUrl = new URL("/appointment", req.url);
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("code", "missing-email-config");
    return NextResponse.redirect(redirectUrl, 303);
  }

  const formData = await req.formData();

  const petName = getField(formData, "petName");
  const ownerName = getField(formData, "ownerName");
  const ownerEmail = getField(formData, "ownerEmail");
  const phone = getField(formData, "phone");
  const dateRequested = getField(formData, "dateRequested");
  const notes = getField(formData, "notes");

  if (!petName || !ownerName || !ownerEmail || !phone || !dateRequested) {
    const redirectUrl = new URL("/appointment", req.url);
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("code", "missing-fields");
    return NextResponse.redirect(redirectUrl, 303);
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: resendFrom,
      to: clinicEmail,
      replyTo: ownerEmail,
      subject: `New appointment request — ${petName} — ${dateRequested}`,
      text: buildClinicEmailText({
        petName,
        ownerName,
        ownerEmail,
        phone,
        dateRequested,
        notes,
      }),
    });

    try {
      await resend.emails.send({
        from: resendFrom,
        to: ownerEmail,
        subject: "We received your appointment request",
        text: buildCustomerEmailText({ petName, ownerName, dateRequested }),
      });
    } catch {
      const redirectUrl = new URL("/appointment", req.url);
      redirectUrl.searchParams.set("status", "success");
      redirectUrl.searchParams.set("code", "confirmation-failed");
      return NextResponse.redirect(redirectUrl, 303);
    }
  } catch {
    const redirectUrl = new URL("/appointment", req.url);
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("code", "send-failed");
    return NextResponse.redirect(redirectUrl, 303);
  }

  const redirectUrl = new URL("/appointment", req.url);
  redirectUrl.searchParams.set("status", "success");
  return NextResponse.redirect(redirectUrl, 303);
}
