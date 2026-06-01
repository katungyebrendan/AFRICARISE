export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/80">
        Care options designed for routine needs and urgent situations.
      </p>

      <div className="mt-10 grid gap-6">
        <section className="rounded-2xl border border-foreground/10 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Vaccination</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/75">
            Vaccine plans tailored to age, lifestyle, and local risk factors.
          </p>
        </section>

        <section className="rounded-2xl border border-foreground/10 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Surgery</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/75">
            Thorough pre-op evaluation, careful anesthesia monitoring, and
            clear post-op instructions.
          </p>
        </section>

        <section className="rounded-2xl border border-foreground/10 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Checkups</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/75">
            Wellness exams to track weight, dental health, mobility, and overall
            wellbeing.
          </p>
        </section>

        <section className="rounded-2xl border border-foreground/10 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Emergency care</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/75">
            Fast assessment for urgent symptoms, with stabilization and next-step
            guidance.
          </p>
        </section>
      </div>
    </div>
  );
}
