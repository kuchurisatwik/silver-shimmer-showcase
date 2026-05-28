import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

// Real Drive assets (downloaded as webp)
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
  // grid placement (only used for the 2-row visible grid)
  col: string;
  row: string;
};

const CATEGORY_CYCLE: Category[] = [
  "Necklaces",
  "Earrings",
  "Bracelets",
  "Rings",
  "Chokers",
];

// Stable category for every asset (used for mapping references too)
// Curated order — pulls a different set of drive photos for the grid
const CURATED_ORDER = [2, 5, 10, 13, 18, 22, 25, 7, 15, 20, 3, 26, 11, 8, 16, 0, 23, 4, 19, 1, 12, 6, 14, 21, 9, 17, 24, 27];
const allCategorized = CURATED_ORDER
  .filter((i) => i < allImages.length)
  .map((i, idx) => ({
    src: allImages[i],
    category: CATEGORY_CYCLE[idx % CATEGORY_CYCLE.length] as Category,
  }));

/**
 * 2-row asymmetrical masonry — uses a 12-col x 2-row CSS grid.
 * Total column-spans per row sum to 12. Heights are governed by row count.
 * Only the first N images are visible in the grid; the rest become reference
 * material in the popup.
 */
const VISIBLE_LAYOUT: Array<{ col: string; row: string }> = [
  // Row 1
  { col: "col-span-3", row: "row-span-1" },
  { col: "col-span-2", row: "row-span-1" },
  { col: "col-span-4", row: "row-span-1" },
  { col: "col-span-3", row: "row-span-1" },
  // Row 2
  { col: "col-span-2", row: "row-span-1" },
  { col: "col-span-4", row: "row-span-1" },
  { col: "col-span-3", row: "row-span-1" },
  { col: "col-span-3", row: "row-span-1" },
];

// Shrunken layout when popup is open (still 2 rows, 12 cols)
const VISIBLE_LAYOUT_OPEN: Array<{ col: string; row: string }> = [
  { col: "col-span-4", row: "row-span-1" },
  { col: "col-span-4", row: "row-span-1" },
  { col: "col-span-4", row: "row-span-1" },
  { col: "col-span-6", row: "row-span-1" },
  { col: "col-span-6", row: "row-span-1" },
];

export function Collections() {
  const [active, setActive] = useState<{ src: string; category: Category } | null>(null);
  const isOpen = !!active;

  const layout = isOpen ? VISIBLE_LAYOUT_OPEN : VISIBLE_LAYOUT;

  const visibleTiles: Tile[] = useMemo(
    () =>
      layout.map((slot, i) => ({
        ...allCategorized[i % allCategorized.length],
        col: slot.col,
        row: slot.row,
      })),
    [layout]
  );

  // Context-aware references: same category first, then same category overflow.
  // No random cross-category fill.
  const references = useMemo(() => {
    if (!active) return [];
    return allCategorized
      .filter((t) => t.category === active.category && t.src !== active.src)
      .map((t) => t.src);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="collections"
      className="relative py-16 md:py-24"
      style={{ background: "var(--cream)" }}
    >
      {/* Editorial header */}
      <div className="container-wide mb-10 md:mb-14">
        <div className="grid grid-cols-12 gap-6 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">N° 01 — Collections</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-lg" style={{ color: "var(--chocolate)" }}>
              The <span className="italic font-display">collections</span> —<br />
              a study in restraint.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:pt-4">
            <div className="shimmer-divider mb-3" />
            <p
              className="text-[12.5px] leading-[1.9] max-w-[260px]"
              style={{ color: "var(--muted-foreground)" }}
            >
              Pure signature works. Each piece is bound with a story
              as weightless as it is timeless.
            </p>
          </div>
        </div>
      </div>


      {/* Split-stage container */}
      <div className="relative w-full">
        {/* LEFT — 2-row constrained masonry grid */}
        <div
          className={`transition-[width,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-4 md:px-8 ${
            isOpen ? "md:w-[58%] md:pr-3" : "w-full"
          }`}
          style={{ willChange: "width" }}
        >
          {/* Mobile: clean single-column editorial stack */}
          <div className="reveal flex flex-col gap-4 md:hidden">
            {visibleTiles.map((tile, i) => {
              const isActive = active?.src === tile.src;
              return (
                <button
                  key={`m-${tile.src}-${i}`}
                  type="button"
                  onClick={() => setActive({ src: tile.src, category: tile.category })}
                  className="group relative block w-full overflow-hidden bg-[var(--beige)] cursor-pointer focus:outline-none"
                  aria-label={`Open ${tile.category}`}
                  style={{
                    boxShadow: isActive
                      ? "0 0 0 2px color-mix(in oklab, var(--chocolate) 60%, transparent)"
                      : undefined,
                  }}
                >
                  <img
                    src={tile.src}
                    alt={tile.category}
                    loading="lazy"
                    className="block w-full h-auto object-contain"
                  />
                  <span
                    className="absolute left-3 bottom-3 text-[10px] tracking-[0.32em] uppercase"
                    style={{ color: "var(--cream)", textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
                  >
                    {tile.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop / tablet: original 2-row 12-col masonry (unchanged) */}
          <div
            className="reveal hidden md:grid grid-cols-12 grid-rows-2 gap-2"
            style={{
              // Strict 2-row band — heights scale with viewport
              height: "min(78vh, 720px)",
            }}
          >
            {visibleTiles.map((tile, i) => {
              const isActive = active?.src === tile.src;
              return (
                <button
                  key={`${tile.src}-${i}`}
                  type="button"
                  onClick={() => setActive({ src: tile.src, category: tile.category })}
                  className={`group relative block overflow-hidden bg-[var(--beige)] cursor-pointer focus:outline-none ${tile.col} ${tile.row}`}
                  aria-label={`Open ${tile.category}`}
                  style={{
                    boxShadow: isActive
                      ? "0 0 0 2px color-mix(in oklab, var(--chocolate) 60%, transparent)"
                      : undefined,
                  }}
                >
                  <img
                    src={tile.src}
                    alt={tile.category}
                    loading="lazy"
                    className="block w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--chocolate) 55%, transparent) 100%)",
                    }}
                  />
                  <span
                    className="absolute left-3 bottom-3 text-[10px] tracking-[0.32em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ color: "var(--cream)" }}
                  >
                    {tile.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT — popup panel (fully fills its side, no blank space) */}
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <div
              className="fixed inset-0 z-[70] md:hidden animate-fade-in"
              onClick={() => setActive(null)}
              style={{
                background: "color-mix(in oklab, var(--chocolate) 50%, transparent)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            />

            <aside
              className="fixed top-0 right-0 z-[80] h-screen w-full md:w-[42%] flex flex-col"
              style={{
                background:
                  "color-mix(in oklab, var(--cream) 88%, transparent)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow:
                  "-30px 0 80px -20px color-mix(in oklab, var(--chocolate) 35%, transparent)",
                animation: "slide-in-right 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
              }}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 h-9 w-9 grid place-items-center rounded-full transition-colors hover:bg-[var(--beige)]"
                style={{ color: "var(--chocolate)" }}
              >
                <X className="h-4 w-4" />
              </button>

              {/* Main image — fills entire top region, contain to preserve ratio */}
              <div className="flex-1 min-h-0 w-full bg-[var(--beige)] relative overflow-hidden">
                <img
                  key={active.src}
                  src={active.src}
                  alt={active.category}
                  className="absolute inset-0 block w-full h-full object-contain animate-fade-in"
                />
              </div>

              {/* Caption + horizontal references (same category only) */}
              <div
                className="shrink-0 px-5 md:px-6 py-4 md:py-5 border-t"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--taupe) 25%, transparent)",
                }}
              >
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <p
                      className="text-[10px] tracking-[0.4em] uppercase mb-1"
                      style={{ color: "var(--taupe)" }}
                    >
                      {active.category}
                    </p>
                    <h3
                      className="font-display text-xl md:text-2xl italic leading-none"
                      style={{ color: "var(--chocolate)" }}
                    >
                      {active.category}
                    </h3>
                  </div>
                  <p
                    className="text-[10px] tracking-[0.4em] uppercase"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {references.length} references
                  </p>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
                  {references.length === 0 && (
                    <p
                      className="text-[11px] tracking-[0.2em] uppercase py-4"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      No further pieces in this category.
                    </p>
                  )}
                  {references.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        setActive({ src, category: active.category })
                      }
                      className="relative shrink-0 h-16 w-16 md:h-20 md:w-20 overflow-hidden bg-[var(--beige)] transition-opacity hover:opacity-80"
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
            </aside>
          </>
        )}
      </div>
    </section>
  );
}
