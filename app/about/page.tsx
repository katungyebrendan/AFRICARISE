const leadershipProfiles = [
  {
    name: "Brenda Katungye",
    title: "Founder and Executive Director",
    bio: "Leads strategy and partnerships focused on youth opportunities and women-led growth.",
  },
  {
    name: "Community Programs Team",
    title: "Program Leads",
    bio: "Designs practical initiatives that connect training, mentorship, and local enterprise support.",
  },
  {
    name: "Youth and Women Champions",
    title: "Regional Coordinators",
    bio: "Coordinate field implementation and ensure each program reflects local realities.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-heading text-4xl tracking-tight text-brand-green md:text-5xl">About MunghaRise Africa</h1>

      <section className="mt-10 rounded-3xl p-8 frost-card">
        <h2 className="font-heading text-2xl tracking-tight text-brand-green">Our story</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/80">
          MunghaRise Africa was founded to unlock human potential where it matters most: in
          communities with talented young people and resilient women who need access, support,
          and opportunity.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/80">
          We co-create practical solutions with local leaders so that skills training,
          entrepreneurship, and social impact are rooted in dignity, ownership, and long-term change.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="frost-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand-green">Vision</h3>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            An Africa where every youth and woman can thrive, lead, and shape sustainable prosperity.
          </p>
        </article>
        <article className="frost-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand-green">Mission</h3>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            Empower youth and women through skills, enterprise support, mentorship, and community action.
          </p>
        </article>
        <article className="frost-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand-green">Values</h3>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            Integrity, inclusion, collaboration, innovation, and measurable social transformation.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-3xl tracking-tight text-brand-green">Leadership and team</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {leadershipProfiles.map((profile) => (
            <div
              key={profile.name}
              className="frost-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-brand-green">{profile.name}</h3>
              <p className="mt-1 text-sm text-brand-purple">{profile.title}</p>
              <p className="mt-3 text-sm leading-6 text-foreground/80">
                {profile.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
