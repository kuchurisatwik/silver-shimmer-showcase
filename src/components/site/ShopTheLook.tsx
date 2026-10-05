import { SectionHeading } from "./ui";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const looks = [
  { img: allImages[17], hot: { top: "32%", left: "60%" } },
  { img: allImages[19], hot: { top: "44%", left: "48%" } },
  { img: allImages[21], hot: { top: "30%", left: "55%" } },
  { img: allImages[23], hot: { top: "40%", left: "58%" } },
];

export function ShopTheLook() {
  return (
    <section id="shop-the-look" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="Lookbook"
          title="Shop the Look"
          subtitle="Styled on — tap a piece to shop it"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-11">
          {looks.map((look, i) => (
            <div key={i} className="aa-look reveal" style={{ aspectRatio: "3 / 4.3" }}>
              <img
                src={look.img}
                alt={`Styled look ${i + 1}`}
                className="aa-look__img"
                loading="lazy"
              />
              <button
                type="button"
                className="aa-hotspot"
                style={{ top: look.hot.top, left: look.hot.left }}
                aria-label="Shop this piece"
              >
                +
              </button>
              <span className="aa-chip">Shop the look</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
