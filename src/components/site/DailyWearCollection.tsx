const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export function DailyWearCollection() {
  return (
    <section id="daily-wear" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text — left */}
          <div className="py-4 order-2 lg:order-1">
            <div className="section-divider justify-start mb-6">
              <span className="section-divider__motif">✻</span>
              <span className="section-divider__line" />
              <span className="section-divider__title">Daily Wear</span>
              <span className="section-divider__line" />
              <span className="section-divider__motif">✻</span>
            </div>
            <h2 className="display-md mb-5" style={{ color: "var(--chocolate)" }}>
              Everyday Elegance
            </h2>
            <p className="text-[15px] leading-[1.85] mb-8 max-w-md" style={{ color: "var(--muted-foreground)" }}>
              Simple, stylish, and versatile jewellery designed to complement your everyday look. From minimalist studs to delicate chains, find pieces that elevate your daily style.
            </p>
            <a href="#" className="cta-btn cta-btn--primary">
              Shop Daily Wear
            </a>
          </div>

          {/* Image — right */}
          <div className="relative overflow-hidden rounded-md aspect-[4/5] order-1 lg:order-2" style={{ background: "var(--cream)" }}>
            <img
              src={allImages[14] || ""}
              alt="Daily Wear Collection"
              className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
