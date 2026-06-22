import Link from "next/link";

import { projects } from "../site-content";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-heading text-4xl tracking-tight text-brand-green md:text-5xl">Projects</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/80">
            Our featured projects connect enterprise development, innovation, climate resilience, and digital inclusion to practical community outcomes.
          </p>
        </div>
        <Link
          href="/partners"
          className="inline-flex h-11 items-center justify-center rounded-full bg-brand-purple px-5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Partner on a Project
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="frost-card rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">Featured Project</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-green">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/80">{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
 }
