import Link from "next/link";

import { partnerOpportunities, partnerTypes } from "../site-content";

export default function PartnersPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-gold md:text-5xl">Partners</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/80">
        MunghaRise Africa welcomes partnerships that expand opportunity, deepen innovation, and strengthen the systems women and youth need to thrive.
        Mungha TV.
        Nexora technologies.
      </p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="frost-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-gold">Become a Partner</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {partnerTypes.map((partner) => (
              <div key={partner} className="rounded-2xl border border-brand-green/15 bg-background/50 px-4 py-3 text-sm text-foreground/85">
                {partner}
              </div>
            ))}
          </div>
        </div>

        <div className="frost-card rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-gold">Partnership Opportunities</h2>
          <div className="mt-5 grid gap-3">
            {partnerOpportunities.map((opportunity) => (
              <div key={opportunity} className="rounded-2xl border border-brand-green/15 bg-background/50 px-4 py-3 text-sm text-foreground/85">
                {opportunity}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl p-8 frost-card">
        <h2 className="font-heading text-3xl tracking-tight text-brand-gold">Build with us</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/80 md:text-base">
          We collaborate through co-designed programs, research, technical support, and catalytic funding that aligns with local priorities and measurable outcomes.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-brand-purple px-5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Start a Partnership Conversation
        </Link>
      </section>
    </div>
  );
 }
