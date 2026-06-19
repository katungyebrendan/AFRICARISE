export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-green md:text-5xl">Programs</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/80">
        Our programs are designed to strengthen livelihoods, leadership, and dignity for youth and women.
      </p>

      <div className="mt-10 grid gap-6">
        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Youth Skills and Employability</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            Vocational and digital skills training, career coaching, and job-readiness support.
          </p>
        </section>

        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Women Entrepreneurship and Finance</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            Business incubation, market linkage, and financial literacy programs for women-led enterprises.
          </p>
        </section>

        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Mentorship and Leadership Circles</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            Structured mentorship and peer leadership networks that build confidence and civic participation.
          </p>
        </section>

        <section className="frost-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-green">Community Advocacy and Wellbeing</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            Community-driven campaigns that promote inclusion, rights awareness, and social wellbeing.
          </p>
        </section>
      </div>
    </div>
  );
}
