import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <section className="rounded-2xl border border-foreground/10 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-sky-500/10 p-8 md:p-12">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Easy and convinient response for all your animals.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/80 md:text-lg">
          From routine checkups to urgent needs, our clinic provides
          compassionate veterinary care with clear communication at every step.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          Services summary
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 p-6">
            <h3 className="text-lg font-semibold">Vaccination</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/75">
              Core and lifestyle vaccines to help protect dogs and cats.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-6">
            <h3 className="text-lg font-semibold">Surgery</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/75">
              Safe procedures with careful monitoring and recovery guidance.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-6">
            <h3 className="text-lg font-semibold">Checkups</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/75">
              Wellness exams to catch issues early and keep pets thriving.
            </p>
          </div>
          <div className="rounded-2xl border border-foreground/10 p-6">
            <h3 className="text-lg font-semibold">Emergency care</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/75">
              Rapid triage and support when urgent symptoms arise.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:opacity-90"
          >
            View all services
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-foreground/10 p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Call-to-action</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/75">
          Ready to book a visit or have questions? Reach out and we’ll help you
          choose the right next step for your pet.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
