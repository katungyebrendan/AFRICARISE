const vetProfiles = [
  {
    name: "Dr. Riley Parker",
    title: "Veterinarian",
    bio: "Focuses on preventive care and clear, practical treatment plans.",
  },
  {
    name: "Dr. Sam Lee",
    title: "Veterinarian",
    bio: "Enjoys surgery and helping anxious pets feel safe and calm.",
  },
  {
    name: "Jordan Kim",
    title: "Veterinary Technician",
    bio: "Supports exams, patient monitoring, and recovery education for families.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>

      <section className="mt-10 rounded-2xl border border-foreground/10 p-6">
        <h2 className="text-2xl font-semibold tracking-tight">Clinic story</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/75">
          Our clinic was built around a simple idea: pets deserve thoughtful,
          evidence-based care delivered with patience and kindness. We take time
          to listen, explain options, and help you make confident decisions.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/75">
          Whether you’re here for a routine visit or an urgent concern, our goal
          is the same—support your pet’s health and keep you informed at every
          step.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Vet profiles</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {vetProfiles.map((vet) => (
            <div
              key={vet.name}
              className="rounded-2xl border border-foreground/10 p-6"
            >
              <h3 className="text-lg font-semibold">{vet.name}</h3>
              <p className="mt-1 text-sm text-foreground/70">{vet.title}</p>
              <p className="mt-3 text-sm leading-6 text-foreground/75">
                {vet.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
