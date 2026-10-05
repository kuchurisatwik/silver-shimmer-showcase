const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export function DailyWearCollection() {
  return (
    <section
      id="daily-wear"
      className="relative min-h-[320px] lg:min-h-[440px] overflow-hidden group"
    >
      <img
        src={allImages[14] || ""}
        alt="Daily wear silver jewellery"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, color-mix(in oklab, var(--chocolate) 78%, transparent), color-mix(in oklab, var(--chocolate) 20%, transparent) 70%, transparent)",
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 py-14 reveal">
        <span className="aa-eyebrow" style={{ color: "var(--gold-light)" }}>
          Everyday
        </span>
        <h3
          className="font-display"
          style={{
            color: "var(--cream)",
            fontWeight: 300,
            fontSize: "clamp(28px, 3.4vw, 40px)",
            marginTop: "12px",
          }}
        >
          Everyday Elegance
        </h3>
        <p
          className="font-display"
          style={{
            fontStyle: "italic",
            color: "color-mix(in oklab, var(--cream) 84%, transparent)",
            fontSize: "18px",
            marginTop: "8px",
          }}
        >
          Light, layer-ready silver for daily wear
        </p>
        <a href="#" className="aa-link" style={{ color: "var(--cream)", marginTop: "22px" }}>
          Shop Daily Wear
        </a>
      </div>
    </section>
  );
}
