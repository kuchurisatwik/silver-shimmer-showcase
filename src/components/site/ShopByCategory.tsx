const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const categories = [
  { name: "Necklaces", desc: "Nakshi, Victorian, Kundan, Temple, Bridal & Choker Sets.", img: allImages[1] },
  { name: "Bangles & Bracelets", desc: "Traditional bangles, kadas, and everyday bracelets.", img: allImages[4] },
  { name: "Earrings", desc: "Jhumkas, Chandbalis, Studs, Victorian & Temple Earrings.", img: allImages[7] },
  { name: "Rings", desc: "Adjustable rings, statement rings, Victorian & Kundan designs.", img: allImages[10] },
];

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="section-divider">
      <span className="section-divider__motif">✻</span>
      <span className="section-divider__line" />
      <span className="section-divider__title">{title}</span>
      <span className="section-divider__line" />
      <span className="section-divider__motif">✻</span>
    </div>
  );
}

export function ShopByCategory() {
  return (
    <section id="categories" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-wide">
        <SectionDivider title="Shop By Category" />
        <div className="text-center mt-6 mb-12">
          <h2 className="display-md" style={{ color: "var(--chocolate)" }}>
            Find Your Perfect Piece
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {categories.map((cat) => (
            <a key={cat.name} href="#" className="category-card group">
              <img
                src={cat.img}
                alt={cat.name}
                className="category-card__img"
                loading="lazy"
              />
              <p className="category-card__name">{cat.name}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="cta-btn cta-btn--primary">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
