import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Divider } from "./ui";

const footerSections = [
  { title: "Information", links: ["About Us", "Contact Us", "FAQs", "Our Store"] },
  {
    title: "Services",
    links: [
      "Book An Appointment",
      "Bridal Assistance",
      "Jewellery Consultation",
      "Request A Callback",
    ],
  },
  {
    title: "Policies",
    links: ["Shipping Policy", "Return & Exchange", "Privacy Policy", "Terms & Conditions"],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      data-nav-dark
      className="pt-14 pb-9"
      style={{ background: "var(--chocolate)", color: "var(--cream)" }}
    >
      <div className="container-wide">
        <Divider className="mb-14" />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="aa-wordmark" style={{ fontSize: "26px", color: "var(--cream)" }}>
              VINEETH
            </p>
            <p
              className="aa-wordmark-sub"
              style={{ fontSize: "9px", marginTop: "4px", color: "var(--gold-light)" }}
            >
              SILVER JEWELLERY · HYDERABAD
            </p>
            <p
              className="font-display"
              style={{
                fontStyle: "italic",
                fontSize: "17px",
                lineHeight: 1.7,
                maxWidth: "20rem",
                margin: "20px 0 24px",
                color: "color-mix(in oklab, var(--cream) 72%, transparent)",
              }}
            >
              Hallmarked silver jewellery for weddings, celebrations, gifting and everyday wear.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1px solid color-mix(in oklab, var(--cream) 22%, transparent)",
                    color: "color-mix(in oklab, var(--cream) 70%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--gold-accent)";
                    e.currentTarget.style.borderColor = "var(--gold-accent)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor =
                      "color-mix(in oklab, var(--cream) 22%, transparent)";
                    e.currentTarget.style.color =
                      "color-mix(in oklab, var(--cream) 70%, transparent)";
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
                className="aa-eyebrow"
                style={{ color: "var(--gold-light)", marginBottom: "20px" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-white"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "color-mix(in oklab, var(--cream) 62%, transparent)",
                      }}
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
            <h4 className="aa-eyebrow" style={{ color: "var(--gold-light)", marginBottom: "20px" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "var(--gold-light)" }}
                  strokeWidth={1.5}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "color-mix(in oklab, var(--cream) 62%, transparent)",
                  }}
                >
                  BN Reddy Nagar,
                  <br />
                  Hyderabad, Telangana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--gold-light)" }}
                  strokeWidth={1.5}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "color-mix(in oklab, var(--cream) 62%, transparent)",
                  }}
                >
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--gold-light)" }}
                  strokeWidth={1.5}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "color-mix(in oklab, var(--cream) 62%, transparent)",
                  }}
                >
                  info@vineethsilverjewellery.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "color-mix(in oklab, var(--cream) 12%, transparent)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "color-mix(in oklab, var(--cream) 42%, transparent)",
            }}
          >
            © {new Date().getFullYear()} Vineeth Silver Jewellery. All Rights Reserved.
          </p>
          <p
            className="font-display"
            style={{ fontStyle: "italic", fontSize: "14px", color: "var(--gold-light)" }}
          >
            Crafted with devotion in India
          </p>
        </div>
      </div>
    </footer>
  );
}
