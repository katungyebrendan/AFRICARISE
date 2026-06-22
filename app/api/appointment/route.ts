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

function buildOrgEmailText(params: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  focusArea: string;
  message: string;
}): string {
  const { firstName, lastName, email, phone, location, focusArea, message } = params;
  return [
    "New MunghaRise Africa application",
    "",
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Location: ${location}`,
    `Interested in: ${focusArea}`,
    "",
    "Applicant message:",
    message || "(none)",
  ].join("\n");
}

function buildCustomerEmailText(params: {
  firstName: string;
  focusArea: string;
}): string {
  const { firstName, focusArea } = params;
  return [
    `Hi ${firstName},`,
    "",
    "Thank you for reaching out to MunghaRise Africa.",
    "",
    `Interest area: ${focusArea}`,
    "",
    "Our team will contact you soon with next steps.",
    "",
    "Rise. Empower. Transform.",
    "",
    "- MunghaRise Africa",
  ].join("\n");
}

export async function POST(req: Request) {
  const resendApiKey = getRequiredEnv("RESEND_API_KEY");
  const resendFrom = process.env.RESEND_FROM || "MunghaRise Africa <info@mugharise.com>";
  const orgEmail = process.env.ORG_EMAIL || "info@mugharise.com";
  if (!resendApiKey) {
    const redirectUrl = new URL("/get-involved", req.url);
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("code", "missing-email-config");
    return NextResponse.redirect(redirectUrl, 303);
  }

  const formData = await req.formData();

  const firstName = getField(formData, "firstName");
  const lastName = getField(formData, "lastName");
  const email = getField(formData, "email");
  const phone = getField(formData, "phone");
  const location = getField(formData, "location");
  const focusArea = getField(formData, "focusArea");
  const message = getField(formData, "message");

  if (!firstName || !lastName || !email || !phone || !location || !focusArea) {
    const redirectUrl = new URL("/get-involved", req.url);
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("code", "missing-fields");
    return NextResponse.redirect(redirectUrl, 303);
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: resendFrom,
      to: orgEmail,
      replyTo: email,
      subject: `New application - ${firstName} ${lastName} - ${focusArea}`,
      text: buildOrgEmailText({
        firstName,
        lastName,
        email,
        phone,
        location,
        focusArea,
        message,
      }),
    });

    try {
      await resend.emails.send({
        from: resendFrom,
        to: email,
        subject: "We received your MunghaRise Africa application",
        text: buildCustomerEmailText({ firstName, focusArea }),
      });
    } catch {
      const redirectUrl = new URL("/get-involved", req.url);
      redirectUrl.searchParams.set("status", "success");
      redirectUrl.searchParams.set("code", "confirmation-failed");
      return NextResponse.redirect(redirectUrl, 303);
    }
  } catch {
    const redirectUrl = new URL("/get-involved", req.url);
    redirectUrl.searchParams.set("status", "error");
    redirectUrl.searchParams.set("code", "send-failed");
    return NextResponse.redirect(redirectUrl, 303);
  }

  const redirectUrl = new URL("/get-involved", req.url);
  redirectUrl.searchParams.set("status", "success");
  return NextResponse.redirect(redirectUrl, 303);
}
