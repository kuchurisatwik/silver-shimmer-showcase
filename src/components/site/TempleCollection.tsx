const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export function TempleCollection() {
  return (
    <section id="temple-collection" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-md aspect-[4/5]" style={{ background: "var(--beige)" }}>
            <img
              src={allImages[9] || ""}
              alt="Temple Collection"
              className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <div className="section-divider justify-start mb-6">
              <span className="section-divider__motif">✻</span>
              <span className="section-divider__line" />
              <span className="section-divider__title">Temple Collection</span>
              <span className="section-divider__line" />
              <span className="section-divider__motif">✻</span>
            </div>
            <h2 className="display-md mb-5" style={{ color: "var(--chocolate)" }}>
              Inspired By Tradition
            </h2>
            <p className="text-[15px] leading-[1.85] mb-4 max-w-md" style={{ color: "var(--muted-foreground)" }}>
              Celebrate timeless craftsmanship with jewellery rooted in culture, heritage, and tradition.
            </p>
            <p className="text-[15px] leading-[1.85] mb-8 max-w-md" style={{ color: "var(--muted-foreground)" }}>
              Perfect for weddings, festivals, and special occasions.
            </p>
            <a href="#" className="cta-btn cta-btn--primary">
              Explore Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
