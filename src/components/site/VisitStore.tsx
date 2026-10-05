import { MapPin, Phone, Mail, Clock } from "lucide-react";

const details = [
  { icon: MapPin, title: "Our Location", lines: ["BN Reddy Nagar", "Hyderabad, Telangana"] },
  { icon: Phone, title: "Call Us", lines: ["+91 XXXXX XXXXX"] },
  { icon: Mail, title: "Email", lines: ["info@vineethsilverjewellery.com"] },
  { icon: Clock, title: "Store Timings", lines: ["Monday – Sunday", "11:00 AM – 9:00 PM"] },
];

export function VisitStore() {
  return (
    <section id="visit" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Details */}
          <div className="reveal">
            <span className="aa-eyebrow">Visit Us</span>
            <h2 className="aa-title" style={{ marginTop: "16px" }}>
              Experience it in Person
            </h2>
            <p className="aa-sub" style={{ marginTop: "14px" }}>
              Explore our latest collections with personalised assistance at our Hyderabad showroom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {details.map((d) => (
                <div key={d.title} className="flex items-start gap-3.5">
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: "42px",
                      height: "42px",
                      border: "1px solid var(--aa-hair)",
                      color: "var(--gold-accent)",
                    }}
                  >
                    <d.icon className="w-[18px] h-[18px]" strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3
                      className="font-display"
                      style={{ fontSize: "18px", color: "var(--chocolate)", lineHeight: 1.2 }}
                    >
                      {d.title}
                    </h3>
                    {d.lines.map((l) => (
                      <p
                        key={l}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "13px",
                          color: "var(--muted-foreground)",
                          lineHeight: 1.7,
                        }}
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="aa-btn aa-btn--dark"
              style={{ marginTop: "36px" }}
            >
              Get Directions
            </a>
          </div>

          {/* Map placeholder */}
          <div
            className="relative reveal overflow-hidden"
            style={{
              borderRadius: "14px",
              background: "var(--champagne)",
              aspectRatio: "4 / 3",
              border: "1px solid var(--aa-hair)",
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ opacity: 0.5 }}
              aria-hidden="true"
            >
              <defs>
                <pattern id="mapgrid" width="56" height="56" patternUnits="userSpaceOnUse">
                  <path d="M56 0 L0 0 0 56" fill="none" stroke="var(--aa-hair)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapgrid)" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg width="34" height="44" viewBox="0 0 34 44" aria-hidden="true">
                <path
                  d="M17 2 C8 2 2 9 2 17 c0 10 15 25 15 25 s15 -15 15 -25 C32 9 26 2 17 2 Z"
                  fill="var(--kumkum)"
                />
                <circle cx="17" cy="17" r="6" fill="var(--cream)" />
              </svg>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "var(--taupe)",
                  marginTop: "10px",
                }}
              >
                BN Reddy Nagar, Hyderabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
