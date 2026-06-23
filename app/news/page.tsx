import Link from "next/link";

import { newsItems } from "../site-content";

export default function NewsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-gold md:text-5xl">News</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/80">
        Follow updates on programs, opportunities, grants, events, and impact stories from across the MunghaRise Africa network.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {newsItems.map((item) => (
          <article key={item.title} className="frost-card rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">Latest</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-gold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/80">{item.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-10 rounded-3xl p-8 frost-card">
        <h2 className="font-heading text-3xl tracking-tight text-brand-gold">Stay informed</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/80 md:text-base">
          Subscribe through our contact channels to receive upcoming cohort announcements, community stories, and partnership news.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-brand-purple px-5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Contact Our Team
        </Link>
      </section>
    </div>
  );
 }
