import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function VisitStore() {
  return (
    <section id="visit" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <div className="section-divider mb-6">
          <span className="section-divider__motif">✻</span>
          <span className="section-divider__line" />
          <span className="section-divider__title">Visit Our Store</span>
          <span className="section-divider__line" />
          <span className="section-divider__motif">✻</span>
        </div>

        <div className="text-center mt-4 mb-12">
          <h2 className="display-md" style={{ color: "var(--chocolate)" }}>
            Experience The Collection In Person
          </h2>
          <p className="text-[14px] mt-3 max-w-lg mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Visit our showroom and explore our latest collections with personalised assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="text-center p-6 rounded-lg" style={{ background: "var(--beige)" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "color-mix(in oklab, var(--gold-accent) 15%, transparent)" }}
            >
              <MapPin className="w-5 h-5" style={{ color: "var(--gold-accent)" }} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg mb-2" style={{ color: "var(--chocolate)" }}>
              Our Location
            </h3>
            <p className="text-[13px] leading-[1.7]" style={{ color: "var(--muted-foreground)" }}>
              BN Reddy Nagar,
              <br />
              Hyderabad, Telangana
            </p>
          </div>

          {/* Phone */}
          <div className="text-center p-6 rounded-lg" style={{ background: "var(--beige)" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "color-mix(in oklab, var(--gold-accent) 15%, transparent)" }}
            >
              <Phone className="w-5 h-5" style={{ color: "var(--gold-accent)" }} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg mb-2" style={{ color: "var(--chocolate)" }}>
              Call Us
            </h3>
            <p className="text-[13px] leading-[1.7]" style={{ color: "var(--muted-foreground)" }}>
              +91 XXXXX XXXXX
            </p>
          </div>

          {/* Email */}
          <div className="text-center p-6 rounded-lg" style={{ background: "var(--beige)" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "color-mix(in oklab, var(--gold-accent) 15%, transparent)" }}
            >
              <Mail className="w-5 h-5" style={{ color: "var(--gold-accent)" }} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg mb-2" style={{ color: "var(--chocolate)" }}>
              Email Us
            </h3>
            <p className="text-[13px] leading-[1.7]" style={{ color: "var(--muted-foreground)" }}>
              info@vineethsilverjewellery.com
            </p>
          </div>

          {/* Timings */}
          <div className="text-center p-6 rounded-lg" style={{ background: "var(--beige)" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "color-mix(in oklab, var(--gold-accent) 15%, transparent)" }}
            >
              <Clock className="w-5 h-5" style={{ color: "var(--gold-accent)" }} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg mb-2" style={{ color: "var(--chocolate)" }}>
              Store Timings
            </h3>
            <p className="text-[13px] leading-[1.7]" style={{ color: "var(--muted-foreground)" }}>
              Monday – Sunday
              <br />
              11:00 AM – 9:00 PM
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--primary"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
