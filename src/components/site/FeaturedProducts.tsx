import { useState, useRef } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const bestSellers = [
  { name: "Nakshi Temple Necklace Set", price: "₹4,500", img: allImages[0] },
  { name: "Victorian Gold Plated Chandbali Earrings", price: "₹2,800", img: allImages[2] },
  { name: "Kundan Bridal Choker Set", price: "₹6,200", img: allImages[4] },
  { name: "Temple Pearl Layered Haaraam", price: "₹5,500", img: allImages[6] },
  { name: "Diamond Silver Stud Earrings", price: "₹1,800", img: allImages[8] },
  { name: "Victorian Kundan Bangle Set", price: "₹3,200", img: allImages[10] },
];

const newArrivals = [
  { name: "Emerald Kundan Necklace Set", price: "₹5,800", img: allImages[1] },
  { name: "Temple Jhumka Earrings — Gold Plated", price: "₹2,200", img: allImages[3] },
  { name: "Nakshi Bridal Long Haaraam", price: "₹7,500", img: allImages[5] },
  { name: "Victorian Pearl Choker", price: "₹3,800", img: allImages[7] },
  { name: "Silver Adjustable Statement Ring", price: "₹1,200", img: allImages[9] },
  { name: "Kundan Maang Tikka Set", price: "₹2,500", img: allImages[11] },
];

export function FeaturedProducts() {
  const [tab, setTab] = useState<"best" | "new">("best");
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = tab === "best" ? bestSellers : newArrivals;

  const toggleWishlist = (name: string) => {
    setWishlisted((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="featured" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        {/* Section title */}
        <div className="section-divider mb-6">
          <span className="section-divider__motif">✻</span>
          <span className="section-divider__line" />
          <span className="section-divider__title">Customer Favourites</span>
          <span className="section-divider__line" />
          <span className="section-divider__motif">✻</span>
        </div>

        <p className="text-center text-[14px] max-w-xl mx-auto mb-8" style={{ color: "var(--muted-foreground)" }}>
          Explore some of our most-loved jewellery pieces across bridal, temple, Victorian, and everyday wear collections.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
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

        {/* Product carousel */}
        <div className="relative">
          <button
            type="button"
            className="carousel-arrow carousel-arrow--left hidden md:flex"
            onClick={() => scroll("left")}
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div key={product.name} className="product-card" style={{ width: "clamp(220px, 22vw, 270px)" }}>
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

          <button
            type="button"
            className="carousel-arrow carousel-arrow--right hidden md:flex"
            onClick={() => scroll("right")}
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-8">
          <a href="#" className="cta-btn cta-btn--primary">
            Shop Best Sellers
          </a>
        </div>
      </div>
    </section>
  );
}
