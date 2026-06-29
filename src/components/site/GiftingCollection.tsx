const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export function GiftingCollection() {
  return (
    <section id="gifting">
      {/* Full-width banner */}
      <div className="feature-banner" style={{ minHeight: "450px" }}>
        <img
          src={allImages[16] || ""}
          alt="Gifting Collection"
          className="feature-banner__bg"
          loading="lazy"
        />
        <div
          className="feature-banner__overlay"
          style={{
            background: "linear-gradient(to left, color-mix(in oklab, var(--chocolate) 70%, transparent) 0%, color-mix(in oklab, var(--chocolate) 30%, transparent) 50%, transparent 100%)",
          }}
        />
        <div className="feature-banner__content" style={{ marginLeft: "auto", textAlign: "right" }}>
          <div className="section-divider justify-end mb-6">
            <span className="section-divider__motif">✻</span>
            <span className="section-divider__line" />
            <span className="section-divider__title">Gifting</span>
            <span className="section-divider__line" />
            <span className="section-divider__motif" style={{ color: "var(--gold-light)" }}>✻</span>
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-5"
            style={{ color: "var(--cream)" }}
          >
            Gifts They'll Always Remember
          </h2>
          <p
            className="text-[14px] sm:text-[15px] leading-[1.8] ml-auto max-w-md mb-8"
            style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}
          >
            Celebrate birthdays, anniversaries, weddings, and life's special moments with jewellery that will always be cherished.
          </p>
          <a href="#" className="cta-btn cta-btn--light">
            Explore Gifts
          </a>
        </div>
      </div>
    </section>
  );
}
