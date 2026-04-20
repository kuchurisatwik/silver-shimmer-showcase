import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer
      id="contact"
      className="pt-24 pb-10"
      style={{ background: "var(--chocolate)", color: "var(--cream)" }}
    >
      <div className="container-luxe">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vineeth Silver" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-serif text-2xl leading-none">Vineeth</p>
                <p
                  className="eyebrow mt-1"
                  style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}
                >
                  Silver Jewellery
                </p>
              </div>
            </div>
            <p
              className="mt-7 max-w-sm leading-relaxed text-sm"
              style={{ color: "color-mix(in oklab, var(--cream) 65%, transparent)" }}
            >
              An atelier of heirloom silver — crafted slowly, worn always.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-display italic text-xl mb-5" style={{ color: "var(--silver)" }}>Visit</p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}>
              The Vineeth Atelier
              <br />
              Jubilee Hills, Hyderabad
              <br />
              India
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-display italic text-xl mb-5" style={{ color: "var(--silver)" }}>Explore</p>
            <ul className="space-y-3 font-sans text-sm">
              {["Collections", "Gallery", "Atelier", "Journal"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-display italic text-xl mb-5" style={{ color: "var(--silver)" }}>Connect</p>
            <ul className="space-y-3 font-sans text-sm">
              {["Instagram", "Pinterest", "Email", "WhatsApp"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans"
          style={{ color: "color-mix(in oklab, var(--cream) 50%, transparent)" }}
        >
          <p>© {new Date().getFullYear()} Vineeth Silver Jewellery. All rights reserved.</p>
          <p className="tracking-[0.3em] uppercase">Crafted in India</p>
        </div>
      </div>
    </footer>
  );
}
