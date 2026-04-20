import { useEffect, useState } from "react";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  // Track which section is currently in view to highlight in the rail
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = links.findIndex((l) => l.href === `#${e.target.id}`);
            if (idx >= 0) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed top-5 right-5 sm:top-7 sm:right-8 z-50">
      <div
        className="flex items-center gap-3"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Minimal section rail with hover-expand */}
        <nav
          aria-label="Section navigation"
          className={[
            "relative rounded-full backdrop-blur-xl transition-all duration-500 ease-out",
            "border border-white/15 bg-[var(--chocolate)]/55 shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
            open ? "px-5 py-3" : "px-3 py-3",
          ].join(" ")}
        >
          {/* Collapsed: vertical dot indicators */}
          <div
            className={[
              "flex flex-col items-center gap-2 transition-all duration-300",
              open ? "opacity-0 pointer-events-none h-0 overflow-hidden" : "opacity-100",
            ].join(" ")}
            aria-hidden={open}
          >
            {links.map((_, i) => (
              <span
                key={i}
                className={[
                  "block rounded-full transition-all duration-500",
                  i === activeIdx
                    ? "w-1.5 h-5 bg-[var(--silver)]"
                    : "w-1.5 h-1.5 bg-white/40",
                ].join(" ")}
              />
            ))}
          </div>

          {/* Expanded: section list */}
          <ul
            className={[
              "flex flex-col gap-2.5 transition-all duration-500",
              open ? "opacity-100 max-h-80" : "opacity-0 max-h-0 overflow-hidden",
            ].join(" ")}
            aria-hidden={!open}
          >
            {links.map((l, i) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase whitespace-nowrap transition-colors"
                  style={{
                    color:
                      i === activeIdx
                        ? "var(--cream)"
                        : "color-mix(in oklab, var(--cream) 65%, transparent)",
                  }}
                >
                  <span
                    className={[
                      "h-px transition-all duration-500",
                      i === activeIdx
                        ? "w-6 bg-[var(--silver)]"
                        : "w-3 bg-white/30 group-hover:w-6 group-hover:bg-[var(--silver)]",
                    ].join(" ")}
                  />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Shiny Enquire button */}
        <a
          href="#contact"
          className="enquire-btn group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-3 text-[10px] tracking-[0.32em] uppercase font-medium"
          style={{ color: "var(--chocolate)" }}
        >
          <span className="relative z-10">Enquire</span>
          {/* Sheen sweep */}
          <span className="enquire-sheen pointer-events-none absolute inset-0 z-10" aria-hidden />
        </a>
      </div>
    </header>
  );
}
