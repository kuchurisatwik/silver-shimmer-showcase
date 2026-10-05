import { Star } from "lucide-react";
import { SectionHeading, LineLink } from "./ui";

const reviews = [
  {
    text: "Beautiful collection and excellent service. The necklace set was exactly as shown and the quality is outstanding.",
    author: "Priya Sharma",
    location: "Hyderabad",
  },
  {
    text: "Loved the quality and finishing. Bought a temple set for my daughter's wedding and everyone complimented it.",
    author: "Lakshmi Reddy",
    location: "Bangalore",
  },
  {
    text: "Perfect jewellery for special occasions. The Kundan set was breathtaking and the packaging felt premium.",
    author: "Ananya Iyer",
    location: "Chennai",
  },
];

export function CustomerReviews() {
  return (
    <section id="reviews" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved Across Celebrations"
          subtitle="The trust of our customers inspires everything we do"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-11">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="reveal"
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "clamp(26px, 3vw, 36px)",
                boxShadow: "var(--aa-shadow-sm)",
              }}
            >
              <div className="flex gap-1" style={{ color: "var(--gold-accent)" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p
                className="font-display"
                style={{
                  fontStyle: "italic",
                  fontSize: "19px",
                  lineHeight: 1.6,
                  color: "var(--chocolate)",
                  margin: "18px 0 22px",
                }}
              >
                “{r.text}”
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--taupe)",
                }}
              >
                — {r.author}, {r.location}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <LineLink href="#">Read more reviews</LineLink>
        </div>
      </div>
    </section>
  );
}
