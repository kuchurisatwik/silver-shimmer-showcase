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
};

// Cycle categories across all real assets — no fixed grid placement,
// the masonry (CSS columns) handles flow + density automatically.
const CATEGORY_CYCLE: Category[] = [
  "Necklaces",
  "Earrings",
  "Bracelets",
  "Rings",
  "Chokers",
];

const tiles: Tile[] = allImages.map((src, i) => ({
  src,
  category: CATEGORY_CYCLE[i % CATEGORY_CYCLE.length],
}));

function getReferences(category: Category, currentSrc: string): string[] {
  const same = tiles
    .filter((t) => t.category === category && t.src !== currentSrc)
    .map((t) => t.src);
  const others = allImages.filter((s) => s !== currentSrc && !same.includes(s));
  return [...same, ...others].slice(0, 8);
}

export function Collections() {
  const [active, setActive] = useState<Tile | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    // On mobile, popup is full-screen → lock body scroll.
    // On desktop, grid stays scrollable behind the side panel.
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const isOpen = !!active;

  return (
    <section
      id="collections"
      className="relative py-16 md:py-24"
      style={{ background: "var(--cream)" }}
    >
      {/* Editorial header */}
      <div className="container-wide mb-10 md:mb-14">
        <div className="grid grid-cols-12 gap-6 reveal">
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
      </div>

      {/* Split-stage: grid (left) shrinks when side panel (right) opens */}
      <div className="relative w-full">
        {/* Grid stage — width animates when popup is open (desktop only) */}
        <div
          className={`transition-[width,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen
              ? "md:w-[58%] md:pl-6 md:pr-3"
              : "w-full px-4 md:px-8"
          } w-full`}
          style={{ willChange: "width" }}
        >
          {/* True masonry via CSS columns — no fixed heights, no cropping.
              Density tightens automatically as available width shrinks. */}
          <div
            className={`reveal ${
              isOpen
                ? "columns-2 md:columns-3"
                : "columns-2 sm:columns-3 md:columns-4 lg:columns-5"
            }`}
            style={{ columnGap: "8px" }}
          >
            {tiles.map((tile, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(tile)}
                className="group relative block w-full mb-2 overflow-hidden bg-[var(--beige)] cursor-pointer focus:outline-none break-inside-avoid"
                aria-label={`Open ${tile.category}`}
              >
                <img
                  src={tile.src}
                  alt={tile.category}
                  loading="lazy"
                  className="block w-full h-auto transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                {/* hover gradient */}
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
            ))}
          </div>
        </div>

        {/* ===== Right-side popup panel ===== */}
        {isOpen && (
          <>
            {/* Mobile backdrop (hidden on desktop — grid stays visible) */}
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
                background: "var(--cream)",
                boxShadow:
                  "-30px 0 80px -20px color-mix(in oklab, var(--chocolate) 35%, transparent)",
                animation: "slide-in-right 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
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

              {/* Main image — dominant, fluid, full container */}
              <div
                className="flex-1 min-h-0 w-full flex items-center justify-center bg-[var(--beige)]"
                style={{ padding: "0" }}
              >
                <img
                  src={active.src}
                  alt={active.category}
                  className="w-full h-full object-contain"
                  style={{ display: "block" }}
                />
              </div>

              {/* Minimal caption + single horizontal reference row */}
              <div className="shrink-0 px-5 md:px-6 py-4 md:py-5 border-t" style={{ borderColor: "color-mix(in oklab, var(--taupe) 25%, transparent)" }}>
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
                    References
                  </p>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
                  {getReferences(active.category, active.src).map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive({ ...active, src })}
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
