import storyImg from "@/assets/editorial-necklace-emerald.png";
import detailImg from "@/assets/editorial-bracelet.png";

export function Story() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-16 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">N° 05 — Maison</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display-lg">
              Quiet hands. <span className="italic font-display">Patient silver.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Image stack — left, with overlap */}
          <div className="col-span-12 lg:col-span-7 relative reveal">
            <div className="relative overflow-hidden aspect-[4/5]" style={{ boxShadow: "var(--shadow-luxe)" }}>
              <img
                src={storyImg}
                alt="Vineeth atelier — emerald necklace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Overlapping detail image */}
            <div className="hidden md:block absolute -bottom-10 -right-6 w-[42%] aspect-[4/3] overflow-hidden" style={{ boxShadow: "var(--shadow-soft)" }}>
              <img
                src={detailImg}
                alt="Hand-set bracelet detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Trust badge */}
            <div
              className="hidden md:flex absolute -top-6 -left-6 w-32 h-32 rounded-full items-center justify-center flex-col text-center px-3"
              style={{ background: "var(--cream)", boxShadow: "var(--shadow-soft)" }}
            >
              <p className="font-display italic text-2xl leading-none">Pure</p>
              <p className="font-display text-2xl leading-none mt-1">925 Silver</p>
            </div>
          </div>

          {/* Text — right */}
          <div className="col-span-12 lg:col-span-5 reveal" style={{ transitionDelay: "150ms" }}>
            <p className="font-display italic text-2xl md:text-3xl leading-[1.4]" style={{ color: "var(--chocolate)" }}>
              Jewellery you can trust — every piece hallmarked, every stone
              honest, every promise kept in pure silver.
            </p>

            <div className="hairline mt-10 mb-8" />

            <div className="space-y-5 text-[15px] leading-[1.9]" style={{ color: "var(--muted-foreground)" }}>
              <p>
                Trust is the quietest metal we work with. Each piece is
                hallmarked, weight-verified, and finished by hands that have
                known silver longer than they have known anything else.
              </p>
              <p>
                We believe a jewel should outlive the moment it was bought in.
                That is why every clasp holds, every stone sits true, and every
                Vineeth piece leaves the atelier ready to become an heirloom.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t" style={{ borderColor: "color-mix(in oklab, var(--chocolate) 14%, transparent)" }}>
              {[
                { n: "925", l: "Pure Silver" },
                { n: "100%", l: "Hallmarked" },
                { n: "∞", l: "Heirloom" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl md:text-5xl leading-none">{s.n}</p>
                  <p className="eyebrow mt-3">{s.l}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-12 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase border-b pb-1"
              style={{ color: "var(--chocolate)", borderColor: "color-mix(in oklab, var(--chocolate) 30%, transparent)" }}
            >
              Visit the Atelier
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
