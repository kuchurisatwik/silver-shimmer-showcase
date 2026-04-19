export function Offer() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--gradient-offer)" }}
    >
      {/* Faint silver shimmer */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, var(--silver) 0%, transparent 35%), radial-gradient(circle at 75% 80%, var(--silver) 0%, transparent 40%)",
        }}
      />

      <div className="container-luxe relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p
            className="eyebrow"
            style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}
          >
            Spring · 2026
          </p>
          <div
            className="hairline mx-auto mt-5 mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--cream) 80%, transparent), transparent)",
            }}
          />
          <h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            style={{ color: "var(--cream)" }}
          >
            Limited <span className="italic">Silver Edit</span>
          </h2>
          <p
            className="mt-7 text-base md:text-lg leading-relaxed mx-auto max-w-xl"
            style={{ color: "color-mix(in oklab, var(--cream) 78%, transparent)" }}
          >
            Twenty-four numbered pieces. Hand-finished in our atelier and
            released in a single drop — never reproduced.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-9 py-4 text-[12px] tracking-[0.32em] uppercase border transition-all duration-500"
              style={{
                color: "var(--cream)",
                borderColor: "color-mix(in oklab, var(--cream) 50%, transparent)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--cream)";
                e.currentTarget.style.color = "var(--chocolate)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--cream)";
              }}
            >
              Discover
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
