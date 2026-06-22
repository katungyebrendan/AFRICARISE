import Link from "next/link";

import {
  impactStats,
  missionFocus,
  programs,
  projects,
  siteSlogan,
  siteTagline,
} from "./site-content";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <section className="grid gap-6 rise-up rounded-3xl border border-brand-green/15 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12 sunrise-band shadow-[0_24px_80px_rgba(15,90,56,0.12)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-purple">
            {siteTagline}
          </p>
          <h1 className="font-heading mt-4 text-4xl leading-tight text-brand-green md:text-6xl">
            Empowering Women and Youth to Rise, Lead and Transform Africa
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-foreground/85 md:text-lg">
            MunghaRise Africa is a social enterprise and development organization
            dedicated to creating opportunities that empower women and young
            people through entrepreneurship, skills development, innovation,
            leadership, and economic inclusion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/get-involved"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Join Us
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-gold px-6 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Donate
            </Link>
            <Link
              href="/partners"
              className="inline-flex h-11 items-center justify-center rounded-full border border-brand-purple/35 px-6 text-sm font-semibold text-brand-purple transition hover:bg-brand-purple/10"
            >
              Partner With Us
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex h-11 items-center justify-center rounded-full border border-brand-green/30 px-6 text-sm font-semibold text-brand-green transition hover:bg-brand-green/10"
            >
              Apply for Programs
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {[
            "African women entrepreneurs",
            "Youth innovators and start-ups",
            "Skills training sessions",
            "Community empowerment activities",
            "Agriculture and technology projects",
          ].map((theme, index) => (
            <div
              key={theme}
              className="frost-card rounded-2xl p-4 rise-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">Focus Image</p>
              <p className="mt-2 text-sm font-semibold text-brand-green">{theme}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {impactStats.map((stat, index) => (
          <div key={stat.label} className="frost-card rise-up rounded-2xl p-6" style={{ animationDelay: `${80 + index * 50}ms` }}>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">Our Impact</p>
            <p className="mt-3 text-3xl font-bold text-brand-green">{stat.value}</p>
            <p className="mt-2 text-sm text-foreground/80">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl p-8 frost-card">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-purple">
            Mission Focus
          </p>
          <h2 className="font-heading mt-4 text-3xl tracking-tight text-brand-green">
            {siteSlogan}
          </h2>
          <p className="mt-4 text-sm leading-7 text-foreground/80 md:text-base">
            {missionFocus}
          </p>
        </div>

        <div>
        <h2 className="font-heading text-3xl tracking-tight text-brand-green">
          What we focus on
        </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {programs.map((program) => (
              <article key={program.title} className="frost-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-brand-green">{program.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/80">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/programs"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-brand-green/15 p-8 md:p-10 frost-card">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-brand-green">Featured projects</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/80 md:text-base">
              We turn mission into action through enterprise, innovation, climate resilience, and digital inclusion.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-purple px-6 text-sm font-semibold text-white transition hover:opacity-90"
          >
            View Projects
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article key={project.title} className="rounded-2xl border border-brand-green/15 bg-background/50 p-5">
              <h3 className="text-lg font-semibold text-brand-green">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/80">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
