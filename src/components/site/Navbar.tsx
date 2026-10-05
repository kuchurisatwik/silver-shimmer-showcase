import { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "New Arrivals", href: "#new-arrivals" },
  {
    label: "Collections",
    href: "#collections",
    hasMega: true,
    columns: [
      {
        title: "Neckwear",
        items: ["Necklace Sets", "Chokers", "Long Haaraams", "Pendant Sets", "Layered Sets"],
      },
      {
        title: "Earrings",
        items: ["Chandbalis", "Jhumkas", "Studs & Tops", "Danglers & Drops", "Ear Cuffs"],
      },
      { title: "Hand & Arm", items: ["Bangles & Kadas", "Bracelets", "Rings", "Bajubandh"] },
      { title: "Collections", items: ["Temple", "Nakshi", "Victorian", "Kundan", "Diamond"] },
      { title: "Occasion", items: ["Bridal", "Festive", "Daily Wear", "Gifting"] },
    ],
  },
  { label: "Temple", href: "#temple-collection" },
  { label: "Bridal", href: "#bridal" },
  { label: "Daily Wear", href: "#daily-wear" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);

  useEffect(() => {
    // Sections flagged with data-nav-dark get light nav text when they sit under the bar.
    const darkEls = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-dark]"));
    const probe = 30; // ~ the navbar's vertical centre

    const update = () => {
      setScrolled(window.scrollY > 20);
      let dark = false;
      for (const el of darkEls) {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom >= probe) {
          dark = true;
          break;
        }
      }
      setOnDark(dark);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`ecom-nav aa-nav ${scrolled ? "scrolled" : ""} ${onDark ? "on-dark" : "on-light"}`}>
        <div className="ecom-nav__inner">
          {/* Left: hamburger + wordmark */}
          <div className="ecom-nav__left">
            <button
              type="button"
              className="ecom-nav__icon-btn lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <a
              href="#hero"
              className="flex flex-col items-start justify-center leading-none shrink-0"
            >
              <span className="aa-wordmark" style={{ fontSize: "22px" }}>
                VINEETH
              </span>
              <span className="aa-wordmark-sub" style={{ fontSize: "8px", marginTop: "3px" }}>
                SILVER JEWELLERY
              </span>
            </a>
          </div>

          {/* Desktop links */}
          <div className="ecom-nav__links">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasMega && setMegaOpen(link.label)}
                onMouseLeave={() => link.hasMega && setMegaOpen(null)}
              >
                <a href={link.href} className="ecom-nav__link">
                  {link.label}
                  {link.hasMega && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </a>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="ecom-nav__icons">
            <button type="button" className="ecom-nav__icon-btn hidden sm:flex" aria-label="Search">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="ecom-nav__icon-btn hidden sm:flex"
              aria-label="Account"
            >
              <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button type="button" className="ecom-nav__icon-btn" aria-label="Wishlist">
              <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button type="button" className="ecom-nav__icon-btn relative" aria-label="Cart">
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                style={{ background: "var(--gold-accent)", color: "white" }}
              >
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {navLinks
          .filter((l) => l.hasMega)
          .map((link) => (
            <div
              key={link.label}
              className={`mega-menu ${megaOpen === link.label ? "is-open" : ""}`}
              onMouseEnter={() => setMegaOpen(link.label)}
              onMouseLeave={() => setMegaOpen(null)}
            >
              <div className="mega-menu__inner">
                {link.columns?.map((col) => (
                  <div key={col.title} className="mega-menu__col">
                    <h4>{col.title}</h4>
                    {col.items.map((item) => (
                      <a key={item} href="#collections">
                        {item}
                      </a>
                    ))}
                    <a
                      href="#collections"
                      className="mt-2 font-medium"
                      style={{ color: "var(--gold-accent)" }}
                    >
                      View All
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? "is-open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`mobile-menu-drawer ${mobileOpen ? "is-open" : ""}`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <img src={logo} alt="VSJ" className="h-8 w-8 object-contain" />
            <span className="font-serif text-lg" style={{ color: "var(--chocolate)" }}>
              Vineeth
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" style={{ color: "var(--chocolate)" }} />
          </button>
        </div>

        <div className="mb-6">
          <div
            className="flex items-center gap-2 px-0 py-3 border-b"
            style={{ borderColor: "var(--beige)" }}
          >
            <Search className="w-4 h-4" style={{ color: "var(--taupe)" }} strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search jewellery..."
              className="w-full bg-transparent text-sm outline-none"
              style={{ color: "var(--chocolate)" }}
            />
          </div>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-menu-drawer__link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--beige)" }}>
          <a href="#" className="mobile-menu-drawer__link flex items-center gap-3">
            <User className="w-4 h-4" strokeWidth={1.5} /> My Account
          </a>
          <a href="#" className="mobile-menu-drawer__link flex items-center gap-3">
            <Heart className="w-4 h-4" strokeWidth={1.5} /> Wishlist
          </a>
        </div>
      </div>
    </>
  );
}
