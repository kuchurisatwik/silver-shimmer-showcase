import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Import all real Drive assets (already downloaded as webp)
const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

type Category = "Necklaces" | "Earrings" | "Bracelets" | "Rings" | "Chokers";

type Tile = {
  src: string;
  category: Category;
  // grid placement (12-col, row-spans for masonry rhythm)
  col: string;
  row: string;
  anchor?: boolean; // larger category-anchor tile
};

// Curated layout — mirrors reference: anchors + medium + thin verticals,
// arranged so categories cluster naturally (no separate sections).
const tiles: Tile[] = ([
  // Row band 1 — Necklaces anchor + necklace cluster + earring + necklace anchor
  { src: allImages[0],  category: "Necklaces",  col: "col-span-12 md:col-span-4", row: "md:row-span-12", anchor: true },
  { src: allImages[1],  category: "Necklaces",  col: "col-span-6 md:col-span-3",  row: "md:row-span-7" },
  { src: allImages[2],  category: "Earrings",   col: "col-span-6 md:col-span-3",  row: "md:row-span-7" },
  { src: allImages[12], category: "Necklaces",  col: "col-span-12 md:col-span-2", row: "md:row-span-12", anchor: true },

  // Row band 2 — earrings small + necklace tall + bracelet + ring
  { src: allImages[3],  category: "Earrings",   col: "col-span-6 md:col-span-2", row: "md:row-span-5" },
  { src: allImages[4],  category: "Necklaces",  col: "col-span-6 md:col-span-2", row: "md:row-span-5" },
  { src: allImages[5],  category: "Bracelets",  col: "col-span-12 md:col-span-3", row: "md:row-span-5" },
  { src: allImages[6],  category: "Rings",      col: "col-span-6 md:col-span-3", row: "md:row-span-5" },
  { src: allImages[13], category: "Bracelets",  col: "col-span-6 md:col-span-1", row: "md:row-span-5" },
  { src: allImages[14], category: "Bracelets",  col: "col-span-6 md:col-span-1", row: "md:row-span-5" },

  // Row band 3 — bracelet wide + choker + ring anchor + necklace anchor
  { src: allImages[7],  category: "Bracelets",  col: "col-span-12 md:col-span-4", row: "md:row-span-6" },
  { src: allImages[8],  category: "Chokers",    col: "col-span-6 md:col-span-3", row: "md:row-span-6" },
  { src: allImages[9],  category: "Rings",      col: "col-span-6 md:col-span-2", row: "md:row-span-6", anchor: true },
  { src: allImages[15], category: "Bracelets",  col: "col-span-12 md:col-span-3", row: "md:row-span-6" },

  // Row band 4 — three medium tiles spanning full width
  { src: allImages[10], category: "Chokers",    col: "col-span-12 md:col-span-4", row: "md:row-span-6" },
  { src: allImages[11], category: "Necklaces",  col: "col-span-6 md:col-span-4", row: "md:row-span-6" },
  { src: allImages[16], category: "Bracelets",  col: "col-span-6 md:col-span-4", row: "md:row-span-6" },
] as Tile[]).filter((t) => t.src);

// Category → reference thumbnails for the popup row
function getReferences(category: Category, currentSrc: string): string[] {
  const same = tiles
    .filter((t) => t.category === category && t.src !== currentSrc)
    .map((t) => t.src);
  // pad with other images if needed
  const others = allImages.filter((s) => s !== currentSrc && !same.includes(s));
  return [...same, ...others].slice(0, 6);
}

export function Collections() {
  const [active, setActive] = useState<Tile | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="collections"
      className="section-pad relative"
      style={{ background: "var(--cream)" }}
    >
      <div className="container-wide">
        {/* Editorial header — matches reference */}
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20 reveal">
          <div className="col-span-12 md:col-span-8">
            <h2 className="display-lg" style={{ color: "var(--chocolate)" }}>
              The <span className="italic font-display">collections</span> —<br />
              a study in restraint.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-3 md:flex md:justify-end">
            <p
              className="text-[13px] leading-[1.9] max-w-[260px]"
              style={{ color: "var(--muted-foreground)" }}
            >
              Pure signature works. Each piece is bound with a story
              as weightless as it is timeless.
            </p>
          </div>
        </div>

        {/* Full-width asymmetrical masonry grid */}
        <div className="grid grid-cols-12 auto-rows-[34px] gap-2 md:gap-3 reveal">
          {tiles.map((tile, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(tile)}
              className={`group relative overflow-hidden bg-[var(--beige)] ${tile.col} ${tile.row} cursor-pointer focus:outline-none`}
              style={{ minHeight: 120 }}
              aria-label={`Open ${tile.category}`}
            >
              <img
                src={tile.src}
                alt={tile.category}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              {/* hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--chocolate) 55%, transparent) 100%)",
                }}
              />
              {/* subtle category label on hover */}
              <span
                className="absolute left-3 bottom-3 text-[10px] tracking-[0.32em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ color: "var(--cream)" }}
              >
                {tile.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== Popup overlay (only renders when active) ===== */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8 md:px-10 animate-fade-in"
          onClick={() => setActive(null)}
          style={{
            background: "color-mix(in oklab, var(--chocolate) 35%, transparent)",
            backdropFilter: "blur(18px) saturate(1.05)",
            WebkitBackdropFilter: "blur(18px) saturate(1.05)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[920px] max-h-[92vh] overflow-y-auto rounded-[2px]"
            style={{
              background:
                "color-mix(in oklab, var(--cream) 88%, transparent)",
              boxShadow:
                "0 40px 120px -30px color-mix(in oklab, var(--chocolate) 60%, transparent)",
              animation: "fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 h-9 w-9 grid place-items-center rounded-full transition-colors hover:bg-[var(--beige)]"
              style={{ color: "var(--chocolate)" }}
            >
              <X className="h-4 w-4" />
            </button>

            {/* Main image — dominant focus */}
            <div className="w-full bg-[var(--beige)]">
              <img
                src={active.src}
                alt={active.category}
                className="w-full h-auto max-h-[68vh] object-contain"
              />
            </div>

            {/* Minimal caption */}
            <div className="px-6 md:px-10 pt-6 md:pt-8">
              <p
                className="text-[10px] tracking-[0.4em] uppercase mb-2"
                style={{ color: "var(--taupe)" }}
              >
                {active.category} Collection
              </p>
              <h3
                className="font-display text-2xl md:text-3xl"
                style={{ color: "var(--chocolate)" }}
              >
                <span className="italic">{active.category}</span>
              </h3>
              <div
                className="mt-3 h-px w-12"
                style={{
                  background:
                    "color-mix(in oklab, var(--taupe) 60%, transparent)",
                }}
              />
            </div>

            {/* References — single horizontal row */}
            <div className="px-6 md:px-10 py-6 md:py-8">
              <p
                className="text-[10px] tracking-[0.4em] uppercase mb-3"
                style={{ color: "var(--muted-foreground)" }}
              >
                References
              </p>
              <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]">
                {getReferences(active.category, active.src).map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() =>
                      setActive({ ...active, src })
                    }
                    className="relative shrink-0 h-20 w-20 md:h-24 md:w-24 overflow-hidden bg-[var(--beige)] transition-opacity hover:opacity-80"
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
