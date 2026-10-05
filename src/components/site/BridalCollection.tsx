const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export function BridalCollection() {
  return (
    <section id="bridal" className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
      {/* Image */}
      <div className="relative min-h-[340px] lg:min-h-[600px] overflow-hidden group">
        <img
          src={allImages[2] || ""}
          alt="Bridal silver jewellery"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Text panel */}
      <div
        className="flex items-center justify-center px-6 py-14 sm:px-10 sm:py-20 reveal"
        style={{ background: "var(--champagne)" }}
      >
        <div className="max-w-md text-center">
          <span className="aa-eyebrow">Bridal</span>
          <h2 className="aa-title" style={{ marginTop: "16px" }}>
            Jewellery for Your Special Day
          </h2>
          <p className="aa-sub" style={{ marginTop: "14px" }}>
            Sets, haaraams, chokers &amp; vaddanams — crafted to complete your wedding look.
          </p>
          <a href="#" className="aa-btn aa-btn--outline" style={{ marginTop: "32px" }}>
            Shop Bridal
          </a>
        </div>
      </div>
    </section>
  );
}
