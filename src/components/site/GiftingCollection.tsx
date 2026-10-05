const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export function GiftingCollection() {
  return (
    <section id="gifting" className="relative min-h-[320px] lg:min-h-[440px] overflow-hidden group">
      <img
        src={allImages[16] || ""}
        alt="Gifting silver jewellery"
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
          Gifting
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
          Gifts to Cherish
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
          For birthdays, anniversaries &amp; milestones
        </p>
        <a href="#" className="aa-link" style={{ color: "var(--cream)", marginTop: "22px" }}>
          Explore Gifts
        </a>
      </div>
    </section>
  );
}
