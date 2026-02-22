export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 space-y-16">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">
          About
        </h1>
      </header>

      <section className="space-y-4 text-zinc-300 leading-relaxed">
        <p>
          I’m a software developer focused on building structured,
          well-reasoned systems. I document my work as a way to refine
          thinking and make iteration visible.
        </p>

        <p>
          My interests span frontend architecture, state modeling,
          distributed systems concepts, and broader scientific inquiry.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-4">
          Why I Write
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          Writing forces clarity. Each research entry or note reflects
          a real exploration — including false starts, constraints,
          and design trade-offs.
        </p>
      </section>
    </div>
  );
}