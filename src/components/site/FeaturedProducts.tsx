import { useState } from "react";
import { Heart } from "lucide-react";
import { SectionHeading, LineLink } from "./ui";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const bestSellers = [
  { name: "Nakshi Temple Necklace Set", price: "₹4,500", img: allImages[0] },
  { name: "Victorian Chandbali Earrings", price: "₹2,800", img: allImages[2] },
  { name: "Kundan Bridal Choker Set", price: "₹6,200", img: allImages[4] },
  { name: "Temple Pearl Layered Haaraam", price: "₹5,500", img: allImages[6] },
  { name: "Diamond Silver Stud Earrings", price: "₹1,800", img: allImages[8] },
  { name: "Victorian Kundan Bangle Set", price: "₹3,200", img: allImages[10] },
  { name: "Lakshmi Temple Pendant", price: "₹3,600", img: allImages[12] },
  { name: "Antique Silver Jhumkas", price: "₹2,400", img: allImages[14] },
];

const newArrivals = [
  { name: "Emerald Kundan Necklace Set", price: "₹5,800", img: allImages[1] },
  { name: "Temple Jhumka Earrings", price: "₹2,200", img: allImages[3] },
  { name: "Nakshi Bridal Long Haaraam", price: "₹7,500", img: allImages[5] },
  { name: "Victorian Pearl Choker", price: "₹3,800", img: allImages[7] },
  { name: "Silver Adjustable Statement Ring", price: "₹1,200", img: allImages[9] },
  { name: "Kundan Maang Tikka Set", price: "₹2,500", img: allImages[11] },
  { name: "Oxidised Silver Anklets", price: "₹1,650", img: allImages[13] },
  { name: "Kemp Stone Vanki", price: "₹4,100", img: allImages[15] },
];

export function FeaturedProducts() {
  const [tab, setTab] = useState<"best" | "new">("best");
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());

  const products = tab === "best" ? bestSellers : newArrivals;

  const toggleWishlist = (name: string) => {
    setWishlisted((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <section id="best-sellers" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="Customer Favourites"
          title="Best Sellers"
          subtitle="Our most-loved pieces across every collection"
        />

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 mb-10 sm:mb-14">
          <button
            type="button"
            className={`tab-btn ${tab === "best" ? "tab-btn--active" : "tab-btn--inactive"}`}
            onClick={() => setTab("best")}
          >
            Best Sellers
          </button>
          <button
            type="button"
            className={`tab-btn ${tab === "new" ? "tab-btn--active" : "tab-btn--inactive"}`}
            onClick={() => setTab("new")}
          >
            New Arrivals
          </button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product.name} className="product-card reveal" style={{ width: "100%" }}>
              <div className="product-card__img-wrap">
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-card__img"
                  loading="lazy"
                />
                <button
                  type="button"
                  className={`product-card__wishlist ${wishlisted.has(product.name) ? "active" : ""}`}
                  onClick={() => toggleWishlist(product.name)}
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className="w-4 h-4"
                    strokeWidth={1.5}
                    fill={wishlisted.has(product.name) ? "currentColor" : "none"}
                  />
                </button>
                <button type="button" className="product-card__cart-btn">
                  Add to cart
                </button>
              </div>
              <div className="product-card__info">
                <p className="product-card__name">{product.name}</p>
                <p className="product-card__price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <LineLink href="#">Shop all best sellers</LineLink>
        </div>
      </div>
    </section>
  );
}
