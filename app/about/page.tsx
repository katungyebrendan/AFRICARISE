import { coreValues } from "../site-content";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-gold md:text-5xl">About Us</h1>

      <section className="mt-10 rounded-3xl p-8 frost-card">
        <h2 className="font-heading text-2xl tracking-tight text-brand-gold">Who We Are</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/80">
          MunghaRise Africa is an African-led organization committed to empowering women and youth
          through sustainable economic opportunities, education, entrepreneurship, innovation, and
          community development initiatives.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/80">
          We believe that empowering women and young people is essential to unlocking Africa&apos;s
          immense potential and achieving inclusive and sustainable development.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="frost-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand-gold">Vision Statement</h3>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            To become Africa&apos;s leading catalyst for empowering women and youth to create prosperous,
            inclusive, and sustainable communities.
          </p>
        </article>
        <article className="frost-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand-gold">Mission Statement</h3>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            To empower women and youth through entrepreneurship, skills development, leadership,
            innovation, financial inclusion, and strategic partnerships that promote economic
            transformation and social change across Africa.
          </p>
        </article>
        <article className="frost-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand-gold">Approach</h3>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            We work through practical programs, trusted partnerships, and community-rooted delivery
            to turn opportunity into measurable impact.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-3xl tracking-tight text-brand-gold">Core Values</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreValues.map((value) => (
            <article key={value.title} className="frost-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-brand-gold">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/80">{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
