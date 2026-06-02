type AppointmentPageProps = {
  searchParams?: {
    status?: string;
    code?: string;
  };
};

export default function AppointmentPage({ searchParams }: AppointmentPageProps) {
  const status = searchParams?.status;
  const code = searchParams?.code;

  const message =
    status === "success"
      ? code === "confirmation-failed"
        ? {
            title: "Request sent",
            body: "We received your request, but we couldn't send the confirmation email. Please double-check your email address.",
          }
        : {
            title: "Request sent",
            body: "Thanks — we received your appointment request and will contact you soon.",
          }
      : status === "error" && code === "missing-email-config"
        ? {
            title: "Email not configured",
            body: "Email sending isn't configured yet. Set RESEND_API_KEY, RESEND_FROM, and CLINIC_EMAIL on the server and try again.",
          }
        : status === "error" && code === "missing-fields"
          ? {
              title: "Missing information",
              body: "Please fill in all required fields (including email) and try again.",
            }
        : status === "error"
          ? {
              title: "Request failed",
              body: "We couldn't send your request right now. Please try again in a minute.",
            }
          : null;

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Appointment Form</h1>

      {message ? (
        <div className="mt-6 rounded-2xl border border-foreground/10 p-4">
          <p className="text-sm font-semibold">{message.title}</p>
          <p className="mt-1 text-sm text-foreground/80">{message.body}</p>
        </div>
      ) : null}

      <form
        className="mt-10 grid gap-6 rounded-2xl border border-foreground/10 p-6"
        method="POST"
        action="/api/appointment"
        encType="multipart/form-data"
      >
        <div className="grid gap-2">
          <label htmlFor="Animal" className="text-sm font-medium">
            Animal
          </label>
          <input
            id="Animal"
            name="Animal"
            required
            className="h-11 rounded-xl border border-foreground/15 bg-background px-4 text-sm outline-none focus:border-foreground/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ownerName" className="text-sm font-medium">
            Owner name
          </label>
          <input
            id="ownerName"
            name="ownerName"
            required
            className="h-11 rounded-xl border border-foreground/15 bg-background px-4 text-sm outline-none focus:border-foreground/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ownerEmail" className="text-sm font-medium">
            Email
          </label>
          <input
            id="ownerEmail"
            name="ownerEmail"
            type="email"
            autoComplete="email"
            required
            className="h-11 rounded-xl border border-foreground/15 bg-background px-4 text-sm outline-none focus:border-foreground/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className="h-11 rounded-xl border border-foreground/15 bg-background px-4 text-sm outline-none focus:border-foreground/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="dateRequested" className="text-sm font-medium">
            Date requested
          </label>
          <input
            id="dateRequested"
            name="dateRequested"
            type="date"
            required
            className="h-11 rounded-xl border border-foreground/15 bg-background px-4 text-sm outline-none focus:border-foreground/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="notes" className="text-sm font-medium">
            Signs
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={5}
            className="rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-foreground/30"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
