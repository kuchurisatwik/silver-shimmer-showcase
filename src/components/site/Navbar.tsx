import { useEffect, useState } from "react";

const links = [
  { label: "Collections", href: "/collections", id: "collections" },
  { label: "Gallery", href: "/#gallery", id: "gallery" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Track which section is in view to highlight in the rail
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname === "/collections") {
      setActiveIdx(0);
      return;
    }
    const sections = links
      .map((l) => document.querySelector(`#${l.id}`))
      .filter((el): el is Element => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = links.findIndex((l) => l.id === e.target.id);
            if (idx >= 0) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const handleClick = (i: number) => {
    setActiveIdx(i);
    if (isMobile) setOpen(false);
  };

  return (
    <header className="fixed top-3 right-3 sm:top-6 sm:right-6 z-50">
      <div
        className="flex items-start gap-2 sm:gap-3"
        onMouseEnter={() => !isMobile && setOpen(true)}
        onMouseLeave={() => !isMobile && setOpen(false)}
      >
        {/* Section rail — horizontal on desktop (hover), vertical dropdown on mobile (tap) */}
        <nav
          aria-label="Section navigation"
          className={[
            "relative rounded-2xl sm:rounded-full backdrop-blur-xl overflow-hidden",
            "border border-white/15 bg-[var(--chocolate)]/70 shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
            "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          ].join(" ")}
        >
          {/* Mobile toggle button (visible only when collapsed on mobile) */}
          {isMobile && !open && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 h-10 px-4 text-[10px] tracking-[0.32em] uppercase text-[var(--cream)]"
              aria-label="Open menu"
            >
              <span>{links[activeIdx].label}</span>
              <span className="flex flex-col gap-[3px]">
                <span className="block h-px w-3.5 bg-[var(--cream)]" />
                <span className="block h-px w-3.5 bg-[var(--cream)]" />
                <span className="block h-px w-3.5 bg-[var(--cream)]" />
              </span>
            </button>
          )}

          {/* Desktop horizontal collapsing list */}
          {!isMobile && (
            <ul className="relative flex items-center h-11 gap-1 px-2">
              {links.map((l, i) => {
                const isActive = i === activeIdx;
                const visible = open || isActive;
                return (
                  <li
                    key={l.label}
                    className={[
                      "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      visible
                        ? "opacity-100 max-w-[180px]"
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
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Mobile expanded vertical list */}
          {isMobile && open && (
            <ul className="flex flex-col py-2 min-w-[180px]">
              {links.map((l, i) => {
                const isActive = i === activeIdx;
                return (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={() => handleClick(i)}
                      className={[
                        "flex items-center justify-between px-5 py-3",
                        "text-[10px] tracking-[0.32em] uppercase whitespace-nowrap",
                        "transition-colors duration-300",
                        isActive
                          ? "text-[var(--cream)]"
                          : "text-[color-mix(in_oklab,var(--cream)_65%,transparent)]",
                      ].join(" ")}
                    >
                      <span>{l.label}</span>
                      {isActive && (
                        <span
                          className="h-px w-4 ml-3"
                          style={{ background: "var(--silver)" }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>

        {/* Shiny Enquire button */}
        <a
          href="#contact"
          className="enquire-btn group relative inline-flex items-center justify-center overflow-hidden rounded-full h-10 sm:h-11 px-4 sm:px-5 text-[10px] tracking-[0.32em] uppercase font-medium shrink-0"
          style={{ color: "var(--chocolate)" }}
        >
          <span className="relative z-10">Enquire</span>
          <span className="enquire-sheen pointer-events-none absolute inset-0 z-10" aria-hidden />
        </a>
      </div>
    </header>
  );
}
