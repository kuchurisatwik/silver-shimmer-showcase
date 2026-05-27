const pillars = [
  {
    n: "I",
    title: "Sourcing",
    italic: "honest",
    body: "Hallmarked 925 silver, conflict-free emeralds, and ethically sourced stones — chosen one ingot, one carat at a time.",
  },
  {
    n: "II",
    title: "Hand-finishing",
    italic: "patient",
    body: "Each piece is hammered, lost-wax cast, soldered, and engraved by artisans who have known silver for decades.",
  },
  {
    n: "III",
    title: "Polishing",
    italic: "unhurried",
    body: "A slow rouge-and-cloth finish gives every surface the warm, living gleam that only patient hands can coax from silver.",
  },
];

export function Craft() {
  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{ background: "var(--ivory)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, color-mix(in oklab, var(--silver) 24%, transparent), transparent 55%), radial-gradient(ellipse at 10% 90%, color-mix(in oklab, var(--emerald) 8%, transparent), transparent 50%)",
        }}
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-12 gap-6 mb-14 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">N° 03 — Atelier</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display-lg" style={{ color: "var(--chocolate)" }}>
              The craft, <span className="italic font-display">held in three hands.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-2 md:pt-3">
            <div className="shimmer-divider mb-3" />
            <p
              className="text-[12px] leading-[1.85]"
              style={{ color: "var(--muted-foreground)" }}
            >
              From ingot to inheritance — every Vineeth piece passes through
              three quiet disciplines.
            </p>
          </div>
        </div>

        <div className="shimmer-divider mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="font-display italic text-3xl"
                  style={{ color: "var(--silver-warm)" }}
                >
                  {p.n}
                </span>
                <span
                  className="h-px flex-1"
                  style={{
                    background:
                      "linear-gradient(90deg, color-mix(in oklab, var(--silver) 60%, transparent), transparent)",
                  }}
                />
              </div>

              {/* Minimal line iconography */}
              <svg
                viewBox="0 0 64 64"
                className="w-12 h-12 mb-6 transition-transform duration-700 group-hover:rotate-[8deg]"
                style={{ color: "var(--chocolate)" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              >
                {i === 0 && (
                  <>
                    <circle cx="32" cy="32" r="22" />
                    <path d="M32 14 L36 30 L52 32 L36 34 L32 50 L28 34 L12 32 L28 30 Z" />
                  </>
                )}
                {i === 1 && (
                  <>
                    <path d="M10 50 L32 14 L54 50 Z" />
                    <path d="M22 50 L32 32 L42 50" />
                  </>
                )}
                {i === 2 && (
                  <>
                    <circle cx="32" cy="32" r="20" />
                    <circle cx="32" cy="32" r="10" />
                    <path d="M32 12 L32 22 M32 42 L32 52 M12 32 L22 32 M42 32 L52 32" />
                  </>
                )}
              </svg>

              <h3
                className="font-display text-3xl md:text-4xl mb-4 leading-none"
                style={{ color: "var(--chocolate)" }}
              >
                {p.title} <span className="italic block mt-1 text-2xl" style={{ color: "var(--taupe)" }}>{p.italic}</span>
              </h3>

              <p
                className="text-[14px] leading-[1.9] max-w-xs"
                style={{ color: "var(--muted-foreground)" }}
              >
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <div className="shimmer-divider mt-16" />
      </div>
    </section>
  );
}
