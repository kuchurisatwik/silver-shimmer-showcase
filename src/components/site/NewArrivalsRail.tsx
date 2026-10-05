import { SectionHeading } from "./ui";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const products = [
  { name: "Emerald Kundan Necklace Set", price: "₹5,800", img: allImages[1] },
  { name: "Temple Jhumka Earrings", price: "₹2,200", img: allImages[3] },
  { name: "Nakshi Bridal Long Haaraam", price: "₹7,500", img: allImages[5] },
  { name: "Victorian Pearl Choker", price: "₹3,800", img: allImages[7] },
  { name: "Silver Adjustable Statement Ring", price: "₹1,200", img: allImages[9] },
  { name: "Kundan Maang Tikka Set", price: "₹2,500", img: allImages[11] },
  { name: "Antique Temple Kada", price: "₹3,920", img: allImages[13] },
  { name: "Chandbali Drop Earrings", price: "₹2,650", img: allImages[15] },
];

export function NewArrivalsRail() {
  // Duplicate the list so the marquee loops seamlessly (track translates -50%).
  const loop = [...products, ...products];

  return (
    <section
      id="new-arrivals"
      style={{
        background: "var(--cream)",
        paddingTop: "clamp(32px, 4.5vw, 56px)",
        paddingBottom: "clamp(36px, 5vw, 64px)",
      }}
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Just In"
          title="New Arrivals"
          subtitle="Fresh designs, added every week"
        />
      </div>

      <div className="aa-rail reveal" style={{ marginTop: "clamp(22px, 3vw, 36px)" }}>
        <div className="aa-rail__track">
          {loop.map((p, i) => (
            <a key={i} href="#" className="aa-prod" aria-label={p.name}>
              <div className="aa-prod__imgwrap">
                <img src={p.img} alt={p.name} className="aa-prod__img" loading="lazy" />
              </div>
              <p className="aa-prod__name">{p.name}</p>
              <p className="aa-prod__price">{p.price}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
