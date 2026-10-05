const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const craftPoints = [
  { n: "01", label: "Lost-wax casting" },
  { n: "02", label: "Hand-set kemp stones" },
  { n: "03", label: "Goddess motifs" },
];

export function TempleCollection() {
  return (
    <section id="temple-collection" className="section-pad aa-dark" data-nav-dark>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Arched detail image */}
          <div className="group reveal w-full mx-auto order-1" style={{ maxWidth: "440px" }}>
            <div className="aa-arch" style={{ aspectRatio: "4 / 5" }}>
              <img src={allImages[9] || ""} alt="Temple jewellery detail" loading="lazy" />
            </div>
          </div>

          {/* Story */}
          <div className="reveal order-2">
            <span className="aa-eyebrow">Heritage · The Craft</span>
            <h2 className="aa-title" style={{ color: "var(--cream)", marginTop: "16px" }}>
              The Art of Temple Jewellery
            </h2>
            <p className="aa-sub" style={{ marginTop: "14px" }}>
              Lost-wax casting, hand-set kemp stones and Goddess Lakshmi motifs — the quiet devotion
              in every piece we make.
            </p>

            <div
              className="grid grid-cols-3 gap-5 sm:gap-6 mt-10 pt-8"
              style={{ borderTop: "1px solid color-mix(in oklab, var(--cream) 18%, transparent)" }}
            >
              {craftPoints.map((c) => (
                <div key={c.n}>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "28px",
                      fontWeight: 300,
                      color: "var(--gold-light)",
                      lineHeight: 1,
                    }}
                  >
                    {c.n}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      marginTop: "10px",
                      color: "color-mix(in oklab, var(--cream) 80%, transparent)",
                    }}
                  >
                    {c.label}
                  </p>
                </div>
              ))}
            </div>

            <a href="#" className="aa-btn aa-btn--gold" style={{ marginTop: "40px" }}>
              Discover the Craft
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
