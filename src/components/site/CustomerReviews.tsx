import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    text: "Beautiful collection and excellent service. The necklace set I ordered was exactly as shown and the quality is outstanding. Will definitely order again!",
    author: "Priya Sharma",
    location: "Hyderabad",
    rating: 5,
  },
  {
    text: "Loved the quality and finishing of the jewellery. Bought a temple set for my daughter's wedding and everyone complimented it. Vineeth Silver is now my go-to!",
    author: "Lakshmi Reddy",
    location: "Bangalore",
    rating: 5,
  },
  {
    text: "Perfect jewellery for weddings and special occasions. The Kundan set was breathtaking. Packaging was also premium. Highly recommended!",
    author: "Ananya Iyer",
    location: "Chennai",
    rating: 5,
  },
  {
    text: "Amazing craftsmanship! The Victorian earrings I got are so elegant and comfortable to wear. The silver quality is genuine and hallmarked.",
    author: "Meera Nair",
    location: "Kochi",
    rating: 5,
  },
  {
    text: "Ordered a daily wear bracelet and it's beautiful. Minimalist yet elegant. The customer service was very helpful in helping me choose the right size.",
    author: "Kavitha Rao",
    location: "Visakhapatnam",
    rating: 5,
  },
];

export function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-wide">
        <div className="section-divider mb-6">
          <span className="section-divider__motif">✻</span>
          <span className="section-divider__line" />
          <span className="section-divider__title">Hear From Our Customers</span>
          <span className="section-divider__line" />
          <span className="section-divider__motif">✻</span>
        </div>

        <div className="text-center mt-4 mb-10">
          <h2 className="display-md" style={{ color: "var(--chocolate)" }}>
            Loved By Customers Across Celebrations
          </h2>
          <p className="text-[14px] mt-3 max-w-lg mx-auto" style={{ color: "var(--muted-foreground)" }}>
            The trust and happiness of our customers inspire everything we do.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            className="carousel-arrow carousel-arrow--left hidden md:flex"
            onClick={() => scroll("left")}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <div key={review.author} className="review-card">
                <div className="review-card__stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="inline w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="review-card__text">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="review-card__author">{review.author}</p>
                  <p className="text-[11px]" style={{ color: "var(--taupe)" }}>{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow--right hidden md:flex"
            onClick={() => scroll("right")}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-8">
          <a href="#" className="cta-btn cta-btn--outline">
            View More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
