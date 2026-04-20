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

  // Track which section is in view to highlight in the rail
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

  const handleClick = (i: number) => setActiveIdx(i);

  return (
    <header className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50">
      <div
        className="flex items-center gap-3"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Horizontal section rail — collapses to show only active section, expands on hover */}
        <nav
          aria-label="Section navigation"
          className={[
            "relative h-11 rounded-full backdrop-blur-xl overflow-hidden",
            "border border-white/15 bg-[var(--chocolate)]/60 shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
            "transition-[width,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          ].join(" ")}
          style={{
            width: open ? "max-content" : "auto",
            paddingLeft: open ? "0.5rem" : "1rem",
            paddingRight: open ? "0.5rem" : "1rem",
          }}
        >
          <ul className="relative flex items-center h-full gap-1">
            {links.map((l, i) => {
              const isActive = i === activeIdx;
              const visible = open || isActive;
              return (
                <li
                  key={l.label}
                  className={[
                    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    visible
                      ? "opacity-100 max-w-[160px]"
                      : "opacity-0 max-w-0 overflow-hidden",
                  ].join(" ")}
                >
                  <a
                    href={l.href}
                    onClick={() => handleClick(i)}
                    className={[
                      "relative flex items-center h-9 px-4 rounded-full",
                      "text-[10px] tracking-[0.32em] uppercase whitespace-nowrap",
                      "transition-colors duration-300",
                      isActive
                        ? "bg-[var(--cream)]/10 text-[var(--cream)]"
                        : "text-[color-mix(in_oklab,var(--cream)_65%,transparent)] hover:text-[var(--cream)]",
                    ].join(" ")}
                  >
                    {l.label}
                    {isActive && (
                      <span
                        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-px w-5"
                        style={{ background: "var(--silver)" }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Shiny Enquire button */}
        <a
          href="#contact"
          className="enquire-btn group relative inline-flex items-center justify-center overflow-hidden rounded-full h-11 px-5 text-[10px] tracking-[0.32em] uppercase font-medium"
          style={{ color: "var(--chocolate)" }}
        >
          <span className="relative z-10">Enquire</span>
          <span className="enquire-sheen pointer-events-none absolute inset-0 z-10" aria-hidden />
        </a>
      </div>
    </header>
  );
}
