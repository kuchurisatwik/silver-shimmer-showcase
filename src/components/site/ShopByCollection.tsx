import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const collections = [
  { name: "Nakshi", desc: "Traditional artistry inspired by timeless South Indian craftsmanship.", img: allImages[0] },
  { name: "Victorian", desc: "Elegant designs that blend vintage charm with modern beauty.", img: allImages[3] },
  { name: "Kundan", desc: "Statement pieces designed to make every occasion special.", img: allImages[6] },
  { name: "Temple", desc: "Inspired by heritage, devotion, and intricate craftsmanship.", img: allImages[9] },
  { name: "Diamond", desc: "Classic designs with timeless sparkle and elegance.", img: allImages[12] },
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

export function ShopByCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="collections" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide mb-10">
        <SectionDivider title="Shop By Collection" />
        <div className="text-center mt-6">
          <h2 className="display-md" style={{ color: "var(--chocolate)" }}>
            Explore Our Collections
          </h2>
          <p className="text-[14px] mt-3 max-w-lg mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Discover jewellery crafted to suit every style, tradition, and occasion.
          </p>
        </div>
      </div>

      <div className="relative container-wide">
        <button
          type="button"
          className="carousel-arrow carousel-arrow--left hidden md:flex"
          onClick={() => scroll("left")}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {collections.map((col, i) => (
            <div
              key={col.name}
              className="collection-card snap-center"
              style={{
                width: "clamp(240px, 30vw, 320px)",
                height: "clamp(340px, 45vw, 480px)",
                transform: i === Math.floor(collections.length / 2) ? "scale(1)" : "scale(0.95)",
                transition: "transform 0.5s ease",
              }}
            >
              <img
                src={col.img}
                alt={col.name}
                className="collection-card__img"
                loading="lazy"
              />
              <div className="collection-card__overlay" />
              <div className="collection-card__label">{col.name}</div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow--right hidden md:flex"
          onClick={() => scroll("right")}
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center mt-8">
        <a href="#" className="cta-btn cta-btn--primary">
          View All Collections
        </a>
      </div>
    </section>
  );
}
