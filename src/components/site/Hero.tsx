export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video with slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic gradient overlays */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 h-full container-luxe flex items-center">
        <div className="max-w-2xl">
          <p
            className="eyebrow animate-fade-in"
            style={{ animationDelay: "0.2s", color: "var(--silver)" }}
          >
            Vineeth · Silver Jewellery
          </p>
          <div className="hairline mt-6 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }} />
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-cream"
            style={{ color: "var(--cream)" }}
          >
            <span className="block animate-letter-reveal" style={{ animationDelay: "0.5s" }}>
              Timeless Silver
            </span>
            <span
              className="block italic font-light text-[var(--taupe)] animate-letter-reveal"
              style={{ animationDelay: "0.85s", color: "var(--taupe)" }}
            >
              Rooted in Elegance
            </span>
          </h1>

          <p
            className="mt-8 max-w-md text-base md:text-lg leading-relaxed animate-fade-up"
            style={{
              animationDelay: "1.3s",
              color: "color-mix(in oklab, var(--cream) 80%, transparent)",
            }}
          >
            Heirloom craftsmanship reimagined for the modern muse — each piece a
            quiet conversation between heritage and form.
          </p>

          <div className="mt-10 flex items-center gap-6 animate-fade-up" style={{ animationDelay: "1.6s" }}>
            <a
              href="#collections"
              className="group inline-flex items-center gap-3 px-8 py-4 text-[12px] tracking-[0.32em] uppercase bg-cream text-chocolate hover:bg-[var(--silver)] transition-colors duration-500"
              style={{ background: "var(--cream)", color: "var(--chocolate)" }}
            >
              Explore Collection
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="text-[12px] tracking-[0.28em] uppercase text-cream/80 hover:text-cream transition-colors"
              style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <span
          className="text-[10px] tracking-[0.4em] uppercase"
          style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}
        >
          Scroll
        </span>
        <span className="block w-px h-12 bg-gradient-to-b from-[var(--silver)] to-transparent" />
      </div>
    </section>
  );
}
