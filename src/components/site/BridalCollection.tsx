const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export function BridalCollection() {
  return (
    <section id="bridal">
      {/* Section divider */}
      <div className="py-6" style={{ background: "var(--cream)" }}>
        <div className="section-divider">
          <span className="section-divider__motif">✻</span>
          <span className="section-divider__line" />
          <span className="section-divider__title">Bridal Collection</span>
          <span className="section-divider__line" />
          <span className="section-divider__motif">✻</span>
        </div>
      </div>

      {/* Full-width banner */}
      <div className="feature-banner" style={{ minHeight: "520px" }}>
        <img
          src={allImages[2] || ""}
          alt="Bridal Collection"
          className="feature-banner__bg"
          loading="lazy"
        />
        <div
          className="feature-banner__overlay"
          style={{
            background: "linear-gradient(to right, color-mix(in oklab, var(--chocolate) 70%, transparent) 0%, color-mix(in oklab, var(--chocolate) 30%, transparent) 50%, transparent 100%)",
          }}
        />
        <div className="feature-banner__content">
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--gold-light)" }}
          >
            For Your Special Day
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-5"
            style={{ color: "var(--cream)" }}
          >
            Jewellery For Your Special Day
          </h2>
          <p
            className="text-[14px] sm:text-[15px] leading-[1.8] max-w-md mb-8"
            style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}
          >
            From bridal sets and layered haarams to chokers, maang tikkas, vaddanams, and bridal bangles — discover jewellery designed to complete your wedding look.
          </p>
          <a href="#" className="cta-btn cta-btn--light">
            Shop Bridal Collection
          </a>
        </div>
      </div>
    </section>
  );
}
