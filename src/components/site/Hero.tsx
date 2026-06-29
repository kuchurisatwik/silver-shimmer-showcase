import { useState, useEffect, useCallback } from "react";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const slides = [
  {
    bg: allImages[0] || "",
    eyebrow: "Vineeth Silver Jewellery",
    title: "Jewellery For Every Occasion",
    desc: "From bridal jewellery and temple collections to everyday elegance, discover beautifully crafted silver jewellery designed for every celebration.",
    cta1: { label: "Shop Now", href: "#featured" },
    cta2: { label: "Explore Collections", href: "#collections" },
  },
  {
    bg: allImages[5] || "",
    eyebrow: "New Season Collection",
    title: "Timeless Craftsmanship",
    desc: "Each piece is meticulously hand-finished by skilled artisans, blending traditional techniques with modern design sensibilities.",
    cta1: { label: "Shop Collection", href: "#collections" },
    cta2: { label: "View Categories", href: "#categories" },
  },
  {
    bg: allImages[12] || "",
    eyebrow: "Bridal Jewellery",
    title: "Your Special Day",
    desc: "From bridal sets and layered haarams to chokers and vaddanams — jewellery designed to complete your wedding look.",
    cta1: { label: "Shop Bridal", href: "#bridal" },
    cta2: { label: "Book Appointment", href: "#visit" },
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero-slider" id="hero">
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === active ? "active" : ""}`}>
          <img
            src={slide.bg}
            alt=""
            className="hero-slide__bg"
            style={{
              transform: i === active ? "scale(1.05)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
          <div className="hero-slide__overlay" />
          <div className="hero-slide__content">
            <p
              className="text-[11px] tracking-[0.4em] uppercase mb-4 font-medium"
              style={{
                color: "var(--gold-light)",
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.8s ease 0.3s",
              }}
            >
              {slide.eyebrow}
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] mb-5"
              style={{
                color: "var(--cream)",
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease 0.5s",
              }}
            >
              {slide.title}
            </h1>
            <p
              className="text-[14px] sm:text-[15px] leading-[1.8] max-w-md mb-8"
              style={{
                color: "color-mix(in oklab, var(--cream) 80%, transparent)",
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(15px)",
                transition: "all 0.8s ease 0.7s",
              }}
            >
              {slide.desc}
            </p>
            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(15px)",
                transition: "all 0.8s ease 0.9s",
              }}
            >
              <a href={slide.cta1.href} className="cta-btn cta-btn--light">
                {slide.cta1.label}
              </a>
              <a
                href={slide.cta2.href}
                className="cta-btn"
                style={{
                  background: "transparent",
                  color: "var(--cream)",
                  border: "1.5px solid color-mix(in oklab, var(--cream) 60%, transparent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--cream)";
                  e.currentTarget.style.color = "var(--chocolate)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--cream)";
                }}
              >
                {slide.cta2.label}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Dot pagination */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
