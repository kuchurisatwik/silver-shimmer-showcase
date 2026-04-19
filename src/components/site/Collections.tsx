import bracelet from "@/assets/editorial-bracelet.png";
import necklaceLayered from "@/assets/editorial-necklace-layered.png";
import necklaceEmerald from "@/assets/editorial-necklace-emerald.png";
import necklaceBib from "@/assets/editorial-necklace-emerald-bib.png";

type Card = {
  name: string;
  count: string;
  img: string;
  size: "lg" | "md" | "sm";
  index: string;
};

const items: Card[] = [
  { name: "Heritage Layered", count: "12 Pieces", img: necklaceLayered, size: "lg", index: "N° 01" },
  { name: "Emerald Reverie", count: "08 Pieces", img: necklaceEmerald, size: "md", index: "N° 02" },
  { name: "Diamond Bib", count: "10 Pieces", img: necklaceBib, size: "md", index: "N° 03" },
  { name: "Bracelets & Bangles", count: "14 Pieces", img: bracelet, size: "lg", index: "N° 04" },
];

export function Collections() {
  return (
    <section
      id="collections"
      className="section-pad relative"
      style={{ background: "var(--cream)" }}
    >
      {/* Marquee ticker */}
      <div className="overflow-hidden border-y" style={{ borderColor: "color-mix(in oklab, var(--chocolate) 12%, transparent)" }}>
        <div className="marquee-track py-5">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 pr-12 shrink-0">
              {["Hand-finished", "Hyderabad atelier", "Numbered editions", "Pure silver 925", "Quiet adornment", "Since 1978"].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  <span className="font-display italic text-3xl md:text-4xl" style={{ color: "var(--chocolate)" }}>{t}</span>
                  <span className="text-xs tracking-[0.4em]" style={{ color: "var(--taupe)" }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide pt-24 md:pt-32">
        {/* Editorial header */}
        <div className="grid grid-cols-12 gap-6 mb-20 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">N° 01 — Catalogue</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-lg">
              The <span className="italic font-display">collections</span> — a<br />
              study in restraint.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:pt-4">
            <p className="text-[15px] leading-[1.85]" style={{ color: "var(--muted-foreground)" }}>
              Four signature edits. Each piece is hand-set by a single artisan
              and numbered before it leaves the atelier.
            </p>
          </div>
        </div>

        {/* Editorial mixed grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {items.map((item, i) => {
            const span =
              item.size === "lg"
                ? "col-span-12 md:col-span-7"
                : "col-span-12 md:col-span-5";
            const aspect = item.size === "lg" ? "aspect-[5/6]" : "aspect-[4/5]";
            // alternating offset for editorial rhythm
            const offset = i % 2 === 1 ? "md:mt-16" : "";
            return (
              <article
                key={item.name}
                className={`group relative overflow-hidden bg-[var(--beige)] reveal cursor-pointer ${span} ${aspect} ${offset}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                {/* gradient bottom */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--chocolate) 75%, transparent) 100%)",
                  }}
                />
                {/* index top */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span
                    className="text-[10px] tracking-[0.4em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md"
                    style={{
                      background: "color-mix(in oklab, var(--cream) 70%, transparent)",
                      color: "var(--chocolate)",
                    }}
                  >
                    {item.count}
                  </span>
                  <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--cream)" }}>
                    {item.index}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                  <h3
                    className="font-display text-3xl md:text-5xl leading-[1.05]"
                    style={{ color: "var(--cream)" }}
                  >
                    {item.name.split(" ")[0]}{" "}
                    <span className="italic">{item.name.split(" ").slice(1).join(" ")}</span>
                  </h3>
                  <div
                    className="mt-5 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase border-b pb-1 transition-all duration-500"
                    style={{
                      color: "var(--cream)",
                      borderColor: "color-mix(in oklab, var(--cream) 50%, transparent)",
                    }}
                  >
                    Discover
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
