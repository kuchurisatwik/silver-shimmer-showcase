import bracelet from "@/assets/editorial-bracelet.png";

export function Offer() {
  return (
    <>
      {/* Centered editorial campaign */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: "var(--chocolate)" }}
      >
        <div className="absolute inset-0 grain pointer-events-none opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, var(--silver) 0%, transparent 35%), radial-gradient(circle at 75% 80%, var(--silver) 0%, transparent 40%)",
          }}
        />

        <div className="container-wide relative">
          <div className="grid grid-cols-12 gap-6 mb-10 reveal">
            <p className="eyebrow-luxe col-span-6 text-[9px]" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
              N° 05 — Spring Campaign
            </p>
            <p className="eyebrow-luxe col-span-6 text-right text-[9px]" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
              MMXXVI · 24 numbered
            </p>
          </div>


          <div className="text-center reveal">
            <h2
              className="display-xl"
              style={{ color: "var(--cream)" }}
            >
              Quiet statements,
            </h2>
            <h2
              className="display-xl italic font-display -mt-3 md:-mt-6"
              style={{ color: "color-mix(in oklab, var(--cream) 75%, var(--taupe))" }}
            >
              bold presence.
            </h2>
          </div>

          {/* Image with side captions */}
          <div className="mt-14 grid grid-cols-12 gap-6 items-end reveal" style={{ transitionDelay: "150ms" }}>
            <div className="col-span-12 md:col-span-2 md:pb-12">
              <p className="font-display italic text-2xl" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
                ( Limited )
              </p>
              <p className="mt-3 text-[11px] tracking-[0.4em] uppercase" style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}>
                24 numbered<br />pieces
              </p>
            </div>

            <figure className="col-span-12 md:col-span-8 relative overflow-hidden aspect-[16/10]">
              <img
                src={bracelet}
                alt="Spring campaign bracelet"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--chocolate) 60%, transparent) 100%)",
                }}
              />
            </figure>

            <div className="col-span-12 md:col-span-2 md:pb-12 text-right">
              <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}>
                Hand-finished in our atelier and released in a single drop — never reproduced.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase border-b pb-1 transition-all duration-500"
                style={{
                  color: "var(--cream)",
                  borderColor: "color-mix(in oklab, var(--cream) 50%, transparent)",
                }}
              >
                Discover
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
