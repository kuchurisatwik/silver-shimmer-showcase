import bracelet from "@/assets/bracelet-emerald.png";
import necklaceDiamond from "@/assets/necklace-diamond.png";
import necklaceLayered from "@/assets/necklace-layered.png";
import necklaceEmerald from "@/assets/necklace-emerald.png";

const items = [
  { name: "Heritage Necklaces", count: "12 pieces", img: necklaceLayered },
  { name: "Emerald Reverie", count: "08 pieces", img: necklaceEmerald },
  { name: "Diamond Cascades", count: "10 pieces", img: necklaceDiamond },
  { name: "Bracelets & Bangles", count: "14 pieces", img: bracelet },
];

export function Collections() {
  return (
    <section
      id="collections"
      className="section-pad"
      style={{ background: "var(--beige)" }}
    >
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow">The House of Vineeth</p>
          <div className="hairline mx-auto mt-5 mb-7" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Our <span className="italic text-[var(--accent)]">Collections</span>
          </h2>
          <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
            Four signature edits — each a study in restraint, light, and the
            quiet luxury of pure silver.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-2xl bg-white reveal aspect-[4/5] cursor-pointer"
              style={{
                transitionDelay: `${i * 80}ms`,
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              {/* Bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--chocolate) 85%, transparent) 100%)",
                }}
              />
              {/* Shine sweep */}
              <div className="shine-overlay" />

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <p
                  className="text-[10px] tracking-[0.4em] uppercase mb-3"
                  style={{ color: "var(--silver)" }}
                >
                  {item.count}
                </p>
                <h3
                  className="font-serif text-2xl md:text-3xl text-cream"
                  style={{ color: "var(--cream)" }}
                >
                  {item.name}
                </h3>
                <div
                  className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                  style={{ color: "var(--cream)" }}
                >
                  Discover <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
