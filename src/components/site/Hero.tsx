export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[var(--chocolate)]">
      {/* Background video */}
      <div className="absolute inset-0 animate-slow-zoom">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-editorial.mp4" type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--chocolate) 35%, transparent) 0%, transparent 35%, transparent 60%, color-mix(in oklab, var(--chocolate) 70%, transparent) 100%)",
        }}
      />
      {/* Grain */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Top meta row */}
      <div className="absolute top-24 left-0 right-0 z-10">
        <div className="container-wide flex items-center justify-between text-[10px] tracking-[0.4em] uppercase animate-fade-in" style={{ animationDelay: "0.3s", color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
          <span>Vol. 04 — Spring Edit</span>
          <span className="hidden sm:block">Hyderabad · Est. 1978</span>
        </div>
      </div>

      {/* Oversized cropped headline — off-center */}
      <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-28 md:pb-36">
        <div className="max-w-[1100px]">
          <p
            className="eyebrow animate-fade-in mb-6"
            style={{ animationDelay: "0.4s", color: "var(--silver)" }}
          >
            Maison Vineeth — Silver Couture
          </p>

          <h1 className="display-xl animate-letter-reveal" style={{ color: "var(--cream)", animationDelay: "0.5s" }}>
            Timeless
          </h1>
          <h1
            className="display-xl italic font-light animate-letter-reveal -mt-2 md:-mt-4 pl-[6vw] md:pl-[14vw]"
            style={{
              color: "color-mix(in oklab, var(--cream) 92%, var(--taupe))",
              animationDelay: "0.85s",
            }}
          >
            Silver.
          </h1>

          <div className="mt-8 md:mt-12 grid grid-cols-12 gap-6 items-end">
            <p
              className="col-span-12 md:col-span-5 md:col-start-2 text-sm md:text-[15px] leading-[1.85] animate-fade-up"
              style={{
                animationDelay: "1.3s",
                color: "color-mix(in oklab, var(--cream) 78%, transparent)",
              }}
            >
              An intimate maison of hand-finished silver and quiet adornment —
              created for those who value restraint, weight and the unhurried
              gleam of heirloom metalwork.
            </p>

            <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-center gap-8 animate-fade-up" style={{ animationDelay: "1.55s" }}>
              <a
                href="#collections"
                className="group inline-flex items-center gap-3 px-7 py-3.5 text-[11px] tracking-[0.32em] uppercase border transition-all duration-500 rounded-full"
                style={{
                  color: "var(--cream)",
                  borderColor: "color-mix(in oklab, var(--cream) 50%, transparent)",
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
                Explore Catalogue
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#about"
                className="text-[11px] tracking-[0.32em] uppercase italic"
                style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)", fontFamily: "var(--font-display)" }}
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <span
          className="text-[9px] tracking-[0.5em] uppercase"
          style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}
        >
          01 / 04
        </span>
        <span className="block w-px h-10 bg-gradient-to-b from-[var(--silver)] to-transparent" />
      </div>
    </section>
  );
}
