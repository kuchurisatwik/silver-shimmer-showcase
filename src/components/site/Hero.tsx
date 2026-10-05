import heroVideo from "@/assets/hero.mp4";

function Spark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="-7 -7 14 14" fill="currentColor" aria-hidden="true">
      <path d="M0,-7 L1.6,-1.6 L7,0 L1.6,1.6 L0,7 L-1.6,1.6 L-7,0 L-1.6,-1.6 Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className="aa-hero" data-nav-dark>
      <video
        className="aa-hero__video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="aa-hero__scrim" />

      {/* subtle sparkle twinkle over the jewellery */}
      <span className="aa-spark" style={{ top: "30%", left: "61%" }}>
        <Spark size={16} />
      </span>
      <span className="aa-spark" style={{ top: "47%", left: "71%", animationDelay: "1.1s" }}>
        <Spark size={10} />
      </span>
      <span className="aa-spark" style={{ top: "57%", left: "53%", animationDelay: "2.2s" }}>
        <Spark size={8} />
      </span>

      <div className="aa-hero__content">
        <p className="aa-eyebrow animate-fade-up" style={{ color: "var(--gold-light)" }}>
          Handcrafted · Hallmarked 925 Silver
        </p>
        <h1
          className="font-display animate-fade-up"
          style={{
            color: "var(--cream)",
            fontSize: "clamp(44px, 8vw, 112px)",
            lineHeight: 1.02,
            letterSpacing: "-0.01em",
            margin: "18px 0 0",
            animationDelay: "0.1s",
          }}
        >
          Heirlooms of Devotion
        </h1>
        <p
          className="font-display animate-fade-up"
          style={{
            fontStyle: "italic",
            color: "color-mix(in oklab, var(--cream) 86%, transparent)",
            fontSize: "clamp(17px, 2.2vw, 24px)",
            maxWidth: "640px",
            margin: "20px auto 0",
            lineHeight: 1.5,
            animationDelay: "0.2s",
          }}
        >
          Temple, Nakshi, Victorian &amp; bridal silver — a thousand designs for every celebration.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-up"
          style={{ marginTop: "34px", animationDelay: "0.3s" }}
        >
          <a href="#collections" className="aa-btn aa-btn--gold">
            Explore Collections
          </a>
          <a href="#new-arrivals" className="aa-btn aa-btn--ghost-light">
            Shop New Arrivals
          </a>
        </div>

        <p
          className="animate-fade-up"
          style={{
            marginTop: "30px",
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "color-mix(in oklab, var(--cream) 70%, transparent)",
            animationDelay: "0.4s",
          }}
        >
          Free shipping · Easy returns · Pan-India delivery
        </p>
      </div>
    </section>
  );
}
