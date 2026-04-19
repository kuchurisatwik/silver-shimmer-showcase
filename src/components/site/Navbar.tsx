import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[var(--chocolate)]/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Vineeth Silver Jewellery" className="h-10 w-10 object-contain" />
          <span
            className="hidden sm:block font-serif text-cream tracking-[0.18em] text-sm"
            style={{ color: "var(--cream)" }}
          >
            VINEETH&nbsp;·&nbsp;SILVER
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[11px] tracking-[0.32em] uppercase transition-colors relative group"
                style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--silver)] transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-[11px] tracking-[0.32em] uppercase border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
          style={{ color: "var(--cream)" }}
        >
          Enquire
        </a>
      </nav>
    </header>
  );
}
