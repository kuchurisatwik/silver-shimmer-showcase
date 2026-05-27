import logo from "@/assets/logo.png";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const all = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const socialPreviews = [all[2], all[8], all[15], all[21]].filter(Boolean);

export function Footer() {
  return (
    <footer
      id="contact"
      className="pt-24 pb-10 relative overflow-hidden"
      style={{ background: "var(--chocolate)", color: "var(--cream)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, var(--silver) 0%, transparent 35%), radial-gradient(circle at 80% 80%, var(--silver) 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />

      <div className="container-luxe relative">
        {/* Philosophy statement */}
        <div className="grid grid-cols-12 gap-8 mb-20 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow-luxe text-[9px]" style={{ color: "var(--silver)" }}>
              — Maison
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p
              className="font-display italic text-3xl md:text-5xl leading-[1.15]"
              style={{ color: "color-mix(in oklab, var(--cream) 92%, transparent)" }}
            >
              We make silver the way silver was meant to be worn —
              <span className="not-italic font-light"> slowly, honestly, and for keeps.</span>
            </p>
          </div>
        </div>

        <div className="shimmer-divider mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vineeth Silver" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-serif text-2xl leading-none">Vineeth</p>
                <p
                  className="eyebrow-luxe text-[9px] mt-1"
                  style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}
                >
                  Silver Couture
                </p>
              </div>
            </div>
            <p
              className="mt-8 max-w-sm leading-[1.9] text-[13px] font-light"
              style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}
            >
              An atelier of heirloom silver — crafted slowly in Hyderabad,
              worn always, anywhere on earth.
            </p>
          </div>

          <div className="md:col-span-2">
            <p
              className="font-display italic text-xl mb-6"
              style={{ color: "var(--silver)" }}
            >
              Maison
            </p>
            <ul className="space-y-3.5 font-sans text-[13px]">
              {["Collections", "Categories", "Atelier", "Heritage"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-[var(--ivory)]"
                    style={{ color: "color-mix(in oklab, var(--cream) 72%, transparent)" }}
                  >
                    {l}
                    <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p
              className="font-display italic text-xl mb-6"
              style={{ color: "var(--silver)" }}
            >
              Visit
            </p>
            <p
              className="font-sans text-[13px] leading-[1.9]"
              style={{ color: "color-mix(in oklab, var(--cream) 72%, transparent)" }}
            >
              The Vineeth Atelier
              <br />
              Jubilee Hills,
              <br />
              Hyderabad · India
              <br />
              <span className="eyebrow-luxe text-[9px] block mt-3" style={{ color: "var(--silver)" }}>
                By appointment
              </span>
            </p>
          </div>

          <div className="md:col-span-4">
            <p
              className="font-display italic text-xl mb-6"
              style={{ color: "var(--silver)" }}
            >
              The Journal
            </p>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {socialPreviews.map((src, i) => (
                <a
                  key={i}
                  href="#"
                  className="group relative aspect-square overflow-hidden bg-[var(--espresso)]"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                    style={{ background: "color-mix(in oklab, var(--chocolate) 35%, transparent)" }}
                  />
                </a>
              ))}
            </div>
            <div className="flex gap-5 text-[11px] tracking-[0.4em] uppercase">
              {["Instagram", "Pinterest", "Email"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="transition-colors hover:text-[var(--ivory)]"
                  style={{ color: "color-mix(in oklab, var(--cream) 65%, transparent)" }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="shimmer-divider" />

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-sans tracking-[0.3em] uppercase"
          style={{ color: "color-mix(in oklab, var(--cream) 45%, transparent)" }}
        >
          <p>© {new Date().getFullYear()} Vineeth Silver Couture</p>
          <p className="font-display italic normal-case tracking-normal text-sm" style={{ color: "var(--silver)" }}>
            Crafted, in India.
          </p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
