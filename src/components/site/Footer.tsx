import logo from "@/assets/logo.png";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerSections = [
  {
    title: "Information",
    links: ["About Us", "Contact Us", "FAQs", "Our Store"],
  },
  {
    title: "Services",
    links: ["Book An Appointment", "Bridal Jewellery Assistance", "Jewellery Consultation", "Request A Callback"],
  },
  {
    title: "Policies",
    links: ["Shipping Policy", "Return & Exchange Policy", "Privacy Policy", "Terms & Conditions"],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="pt-16 pb-8 relative overflow-hidden"
      style={{ background: "var(--chocolate)", color: "var(--cream)" }}
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-30" />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="Vineeth Silver Jewellery" className="h-10 w-10 object-contain" />
              <div>
                <p className="font-serif text-xl leading-none" style={{ color: "var(--cream)" }}>Vineeth</p>
                <p
                  className="text-[9px] tracking-[0.3em] uppercase mt-0.5"
                  style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}
                >
                  Silver Jewellery
                </p>
              </div>
            </div>
            <p
              className="text-[13px] leading-[1.8] max-w-xs mb-6"
              style={{ color: "color-mix(in oklab, var(--cream) 65%, transparent)" }}
            >
              Beautifully crafted silver jewellery for weddings, celebrations, gifting, and everyday wear. Based in Hyderabad, India.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1px solid color-mix(in oklab, var(--cream) 25%, transparent)",
                    color: "color-mix(in oklab, var(--cream) 65%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--gold-accent)";
                    e.currentTarget.style.borderColor = "var(--gold-accent)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "color-mix(in oklab, var(--cream) 25%, transparent)";
                    e.currentTarget.style.color = "color-mix(in oklab, var(--cream) 65%, transparent)";
                  }}
                >
                  <s.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4
                className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-5"
                style={{ color: "var(--cream)" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] transition-colors duration-200 hover:text-white"
                      style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4
              className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "var(--cream)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--gold-light)" }} strokeWidth={1.5} />
                <span
                  className="text-[13px] leading-[1.6]"
                  style={{ color: "color-mix(in oklab, var(--cream) 65%, transparent)" }}
                >
                  BN Reddy Nagar,
                  <br />
                  Hyderabad, Telangana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--gold-light)" }} strokeWidth={1.5} />
                <span
                  className="text-[13px]"
                  style={{ color: "color-mix(in oklab, var(--cream) 65%, transparent)" }}
                >
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--gold-light)" }} strokeWidth={1.5} />
                <span
                  className="text-[13px]"
                  style={{ color: "color-mix(in oklab, var(--cream) 65%, transparent)" }}
                >
                  info@vineethsilverjewellery.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.06em]"
          style={{
            borderColor: "color-mix(in oklab, var(--cream) 12%, transparent)",
            color: "color-mix(in oklab, var(--cream) 40%, transparent)",
          }}
        >
          <p>© {new Date().getFullYear()} Vineeth Silver Jewellery. All Rights Reserved.</p>
          <p className="font-display italic text-sm" style={{ color: "var(--gold-light)" }}>
            Crafted with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
