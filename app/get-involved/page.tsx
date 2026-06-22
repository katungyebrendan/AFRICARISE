import { involvementOptions } from "../site-content";

type GetInvolvedPageProps = {
  searchParams?: Promise<{
    status?: string;
    code?: string;
  }>;
};

export default async function GetInvolvedPage({ searchParams }: GetInvolvedPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const status = resolvedSearchParams?.status;
  const code = resolvedSearchParams?.code;

  const message =
    status === "success"
      ? code === "confirmation-failed"
        ? {
            title: "Application received",
            body: "We received your application, but we could not send the confirmation email. Please double-check your email address.",
          }
        : {
            title: "Application received",
            body: "Thank you. We received your request and our team will contact you soon.",
          }
      : status === "error" && code === "missing-email-config"
        ? {
            title: "Email not configured",
            body: "Email sending is not configured yet. Set RESEND_API_KEY, RESEND_FROM, and ORG_EMAIL on the server and try again.",
          }
        : status === "error" && code === "missing-fields"
          ? {
              title: "Missing information",
              body: "Please fill in all required fields and try again.",
            }
          : status === "error"
            ? {
                title: "Submission failed",
                body: "We could not submit your request right now. Please try again in a minute.",
              }
            : null;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-green md:text-5xl">Get Involved</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/80">
        Support the movement by volunteering, mentoring, sponsoring community initiatives, donating, or applying to join a program.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {involvementOptions.map((option) => (
          <article key={option.title} className="frost-card rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-brand-green">{option.title}</h2>
            <p className="mt-2 text-sm leading-6 text-foreground/80">{option.description}</p>
          </article>
        ))}
      </section>

      {message ? (
        <div className="mt-8 rounded-2xl border border-brand-green/20 bg-brand-green/5 p-4">
          <p className="text-sm font-semibold">{message.title}</p>
          <p className="mt-1 text-sm text-foreground/80">{message.body}</p>
        </div>
      ) : null}

      <form
        className="mt-8 grid gap-6 rounded-3xl p-6 md:p-8 frost-card"
        method="POST"
        action="/api/appointment"
        encType="multipart/form-data"
      >
        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <div className="grid gap-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              required
              className="h-11 rounded-xl border border-brand-green/20 bg-background/70 px-4 text-sm outline-none focus:border-brand-green/50"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              required
              className="h-11 rounded-xl border border-brand-green/20 bg-background/70 px-4 text-sm outline-none focus:border-brand-green/50"
            />
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="h-11 rounded-xl border border-brand-green/20 bg-background/70 px-4 text-sm outline-none focus:border-brand-green/50"
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
              className="h-11 rounded-xl border border-brand-green/20 bg-background/70 px-4 text-sm outline-none focus:border-brand-green/50"
            />
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <div className="grid gap-2">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <input
              id="location"
              name="location"
              required
              className="h-11 rounded-xl border border-brand-green/20 bg-background/70 px-4 text-sm outline-none focus:border-brand-green/50"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="focusArea" className="text-sm font-medium">
              Interested in
            </label>
            <select
              id="focusArea"
              name="focusArea"
              required
              className="h-11 rounded-xl border border-brand-green/20 bg-background/70 px-4 text-sm outline-none focus:border-brand-green/50"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="program-application">Apply for programs</option>
              <option value="volunteering">Volunteer</option>
              <option value="mentorship">Become a mentor</option>
              <option value="donation">Donate</option>
              <option value="project-sponsorship">Sponsor a project</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Tell us about your interest
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-xl border border-brand-green/20 bg-background/70 px-4 py-3 text-sm outline-none focus:border-brand-green/50"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-semibold text-white hover:opacity-90"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
 }
