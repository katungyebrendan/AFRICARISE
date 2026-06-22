import { programs } from "../site-content";

export default function ProgramsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-green md:text-5xl">Our Programs</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/80">
        Our work equips women and youth with the skills, support systems, and opportunities needed to build resilient livelihoods and shape inclusive growth across Africa.
      </p>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {programs.map((program) => (
          <section key={program.title} className="frost-card rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-green">{program.title}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/80">{program.description}</p>
            <ul className="mt-5 grid gap-3 text-sm text-foreground/85 sm:grid-cols-2">
              {program.items.map((item) => (
                <li key={item} className="rounded-2xl border border-brand-green/15 bg-background/50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
 }
