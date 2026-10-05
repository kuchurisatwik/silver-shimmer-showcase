import { SectionHeading, LineLink } from "./ui";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const collections = [
  { name: "Temple", img: allImages[9] },
  { name: "Nakshi", img: allImages[0] },
  { name: "Victorian", img: allImages[3] },
  { name: "Kundan", img: allImages[6] },
  { name: "Bridal", img: allImages[2] },
  { name: "Diamond", img: allImages[12] },
];

export function ShopByCollection() {
  return (
    <section id="collections" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Collections"
          title="Shop by Collection"
          subtitle="For every tradition, style and occasion"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8 sm:mt-11">
          {collections.map((col) => (
            <a key={col.name} href="#" className="group reveal block">
              <div className="aa-arch" style={{ aspectRatio: "3 / 4.5" }}>
                <img src={col.img} alt={col.name} loading="lazy" />
              </div>
              <p
                className="text-center"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "19px",
                  letterSpacing: "0.05em",
                  color: "var(--chocolate)",
                  marginTop: "16px",
                }}
              >
                {col.name}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <LineLink href="#">View all collections</LineLink>
        </div>
      </div>
    </section>
  );
}
