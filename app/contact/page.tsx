import { contactDetails } from "../site-content";

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${contactDetails.phoneE164.replace("+", "")}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-green md:text-5xl">Contact Us</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Headquarters</h2>
          <address className="mt-3 not-italic text-sm leading-7 text-foreground/80">
            <div>{contactDetails.organization}</div>
            {contactDetails.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
        </section>

        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Email</h2>
          <div className="mt-3 grid gap-3 text-sm leading-6 text-foreground/80">
            {contactDetails.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="font-medium text-brand-purple hover:underline">
                {email}
              </a>
            ))}
          </div>
        </section>

        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Phone</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/80">
            <a
              href={`tel:${contactDetails.phoneE164}`}
              className="font-medium text-brand-green hover:underline underline-offset-4"
            >
              {contactDetails.phoneDisplay}
            </a>
          </p>

          <div className="mt-6">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-5 text-sm font-semibold text-white hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>

      <section className="mt-10 rounded-3xl p-8 frost-card">
        <h2 className="font-heading text-3xl tracking-tight text-brand-green">Social Media</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contactDetails.socialLinks.map((item) => (
            <article key={item.label} className="rounded-2xl border border-brand-green/15 bg-background/50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">{item.label}</p>
              <p className="mt-2 text-sm font-semibold text-brand-green">{item.value}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
