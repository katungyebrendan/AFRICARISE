const contactInfo = {
  addressLines: ["Kampala"],
  phoneDisplay: "+256 706 043268",
  phoneE164: "+256706043268",
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${contactInfo.phoneE164.replace("+", "")}`;

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-foreground/10 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Address</h2>
          <address className="mt-3 not-italic text-sm leading-6 text-foreground/75">
            {contactInfo.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
        </section>

        <section className="rounded-2xl border border-foreground/10 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Phone</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/75">
            <a
              href={`tel:${contactInfo.phoneE164}`}
              className="font-medium text-foreground hover:underline underline-offset-4"
            >
              {contactInfo.phoneDisplay}
            </a>
          </p>

          <div className="mt-6">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
