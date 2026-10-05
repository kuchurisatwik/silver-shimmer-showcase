const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const categories = [
  { name: "Necklaces", desc: "Haaraams · Chokers", img: allImages[1] },
  { name: "Earrings", desc: "Jhumkas · Chandbalis", img: allImages[7] },
  { name: "Bangles", desc: "Kadas · Bracelets", img: allImages[4] },
  { name: "Rings", desc: "Statement · Adjustable", img: allImages[10] },
  { name: "Temple", desc: "Nakshi · Antique", img: allImages[9] },
  { name: "Bridal", desc: "Sets · Vaddanams", img: allImages[2] },
];

export function ShopByCategory() {
  return (
    <div id="categories" className="aa-catbar-wrap">
      <div className="container-wide">
        <div className="aa-catbar reveal">
          <div className="text-center mb-2.5 sm:mb-3">
            <span className="aa-eyebrow">Shop by Category</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-5 sm:gap-5">
            {categories.map((cat) => (
              <a key={cat.name} href="#collections" className="aa-cat">
                <img src={cat.img} alt={cat.name} className="aa-cat__img" loading="lazy" />
                <span className="aa-cat__text">
                  <span className="aa-cat__label">{cat.name}</span>
                  <span className="aa-cat__desc">{cat.desc}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
