const contactInfo = {
  addressLines: ["Kampala, Uganda"],
  phoneDisplay: "+256 706 043268",
  phoneE164: "+256706043268",
  email: "hello@munghariseafrica.org",
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${contactInfo.phoneE164.replace("+", "")}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-green md:text-5xl">Contact MunghaRise Africa</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Address</h2>
          <address className="mt-3 not-italic text-sm leading-7 text-foreground/80">
            {contactInfo.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
          <p className="mt-5 text-sm text-foreground/80">
            Email: <a href={`mailto:${contactInfo.email}`} className="font-medium text-brand-purple hover:underline">{contactInfo.email}</a>
          </p>
        </section>

        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Phone and WhatsApp</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/80">
            <a
              href={`tel:${contactInfo.phoneE164}`}
              className="font-medium text-brand-green hover:underline underline-offset-4"
            >
              {contactInfo.phoneDisplay}
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
    </div>
  );
}
