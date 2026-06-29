import { Check } from "lucide-react";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const usps = [
  "Hallmarked Silver",
  "Premium Craftsmanship",
  "Exclusive Designs",
  "Bridal Specialists",
  "Wide Variety Of Collections",
  "Trusted By Customers",
];

export function WhyVSJ() {
  return (
    <section id="why-vsj" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <div className="section-divider mb-6">
          <span className="section-divider__motif">✻</span>
          <span className="section-divider__line" />
          <span className="section-divider__title">Why Vineeth Silver Jewellery</span>
          <span className="section-divider__line" />
          <span className="section-divider__motif">✻</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-10">
          {/* Image */}
          <div className="relative overflow-hidden rounded-md aspect-[4/5]" style={{ background: "var(--beige)" }}>
            <img
              src={allImages[18] || ""}
              alt="Vineeth Silver Jewellery craftsmanship"
              className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              loading="lazy"
            />
            {/* Trust badge overlay */}
            <div
              className="absolute bottom-6 left-6 right-6 p-5 rounded-lg"
              style={{
                background: "color-mix(in oklab, white 92%, transparent)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <p className="font-display italic text-2xl leading-none" style={{ color: "var(--chocolate)" }}>
                Crafted with love
              </p>
              <p className="text-[12px] tracking-[0.2em] uppercase mt-2" style={{ color: "var(--taupe)" }}>
                Since Hyderabad, India
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="display-md mb-4" style={{ color: "var(--chocolate)" }}>
              Crafted With Care.
              <br />
              <span className="font-display italic" style={{ color: "var(--gold-accent)" }}>
                Designed To Be Treasured.
              </span>
            </h2>
            <p className="text-[15px] leading-[1.85] mb-4 max-w-lg" style={{ color: "var(--muted-foreground)" }}>
              At Vineeth Silver Jewellery, we offer beautifully crafted jewellery for weddings, celebrations, gifting, and everyday wear.
            </p>
            <p className="text-[15px] leading-[1.85] mb-8 max-w-lg" style={{ color: "var(--muted-foreground)" }}>
              From traditional designs to modern styles, our collections are thoughtfully curated to help you find the perfect piece for every occasion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usps.map((usp) => (
                <div key={usp} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "color-mix(in oklab, var(--gold-accent) 15%, transparent)" }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: "var(--gold-accent)" }} strokeWidth={2.5} />
                  </div>
                  <span className="text-[14px] font-medium" style={{ color: "var(--chocolate)" }}>
                    {usp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
