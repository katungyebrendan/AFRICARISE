import Link from "next/link";

import { impactStats } from "../site-content";

export default function ImpactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-green md:text-5xl">Impact</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/80">
        We measure impact through people reached, enterprises strengthened, livelihoods expanded, and partnerships that create durable pathways for growth.
      </p>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {impactStats.map((stat) => (
          <article key={stat.label} className="frost-card rounded-3xl p-6">
            <p className="text-xs tracking-[0.2em] text-brand-purple">{stat.label}</p>
            <p className="mt-3 text-4xl font-bold text-brand-gold">{stat.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl p-8 frost-card">
        <h2 className="font-heading text-3xl tracking-tight text-brand-gold">What these numbers mean</h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-foreground/80 md:text-base">
          Behind every number is a woman launching a business, a young person gaining future-ready skills, a household accessing new income, and a community building more resilient systems for food security and inclusion.
        </p>
        <Link
          href="/get-involved"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-brand-purple px-5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Help Expand Our Impact
        </Link>
      </section>
    </div>
  );
 }
