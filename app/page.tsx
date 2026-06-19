import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <section className="rise-up rounded-3xl border border-brand-green/15 p-8 md:p-12 sunrise-band shadow-[0_24px_80px_rgba(15,90,56,0.12)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-purple">
          MunghaRise Africa
        </p>
        <h1 className="font-heading mt-4 text-4xl leading-tight text-brand-green md:text-6xl">
          Empowering youth. Empowering women. Transforming Africa.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-foreground/85 md:text-lg">
          We help communities build sustainable futures through practical skills,
          entrepreneurship support, mentorship, and leadership development.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/appointment"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Join a Program
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-brand-purple/35 px-6 text-sm font-semibold text-brand-purple transition hover:bg-brand-purple/10"
          >
            Partner with Us
          </Link>
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="frost-card rise-up rounded-2xl p-6" style={{ animationDelay: "80ms" }}>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange">Impact</p>
          <p className="mt-3 text-3xl font-bold text-brand-green">1,800+</p>
          <p className="mt-2 text-sm text-foreground/80">Youth trained in livelihood skills.</p>
        </div>
        <div className="frost-card rise-up rounded-2xl p-6" style={{ animationDelay: "140ms" }}>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-purple">Inclusion</p>
          <p className="mt-3 text-3xl font-bold text-brand-green">900+</p>
          <p className="mt-2 text-sm text-foreground/80">Women supported through enterprise circles.</p>
        </div>
        <div className="frost-card rise-up rounded-2xl p-6" style={{ animationDelay: "200ms" }}>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Reach</p>
          <p className="mt-3 text-3xl font-bold text-brand-green">12</p>
          <p className="mt-2 text-sm text-foreground/80">Communities engaged in Uganda and beyond.</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-tight text-brand-green">
          What we focus on
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="frost-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-brand-green">Youth Skilling Labs</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/80">
              Hands-on training in digital, technical, and business skills that open pathways to jobs.
            </p>
          </article>
          <article className="frost-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-brand-green">Women Enterprise Hubs</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/80">
              Access to mentorship, savings circles, market readiness, and small business acceleration.
            </p>
          </article>
          <article className="frost-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-brand-green">Community Leadership</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/80">
              Local leadership programs that strengthen civic voice and long-term social transformation.
            </p>
          </article>
        </div>
        <div className="mt-6">
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Explore All Programs
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-brand-green/15 p-8 md:p-10 frost-card">
        <h2 className="font-heading text-3xl tracking-tight text-brand-green">Be part of the rise</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/80 md:text-base">
          Whether you are a young person looking for opportunity, a woman building a business,
          or a partner organization ready to collaborate, MunghaRise Africa welcomes you.
        </p>
        <div className="mt-6">
          <Link
            href="/appointment"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-purple px-6 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Apply to Join
          </Link>
        </div>
      </section>
    </div>
  );
}
