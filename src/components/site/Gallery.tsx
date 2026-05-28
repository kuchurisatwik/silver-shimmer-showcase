// Editorial gallery — asymmetric rhythm using real lookbook assets
const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const all = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const pick = (n: number) => all[(n - 1) % all.length];

const macro = pick(3);       // dominant macro shot
const portraitA = pick(6);   // editorial portrait
const portraitB = pick(14);  // detail / texture
const detailA = pick(19);    // texture crop
const detailB = pick(25);    // closeup
const cinematic = pick(27);  // wide cinematic still

export function Gallery() {
  return (
    <section
      id="gallery"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-14 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">N° 04 — Gallery</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-lg">
              Light, captured <span className="italic font-display">in silver.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:pt-4">
            <div className="shimmer-divider mb-3" />
            <p className="text-[13px] leading-[1.9]" style={{ color: "var(--muted-foreground)" }}>
              A curated frame — light bending across hand-set stones,
              engravings, and the quiet weight of precious metalwork.
            </p>
          </div>
        </div>

        {/* Asymmetric editorial composition */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Macro hero — dominant left */}
          <figure
            className="col-span-12 md:col-span-8 reveal relative overflow-hidden group aspect-[4/5] md:aspect-[6/7] jewel-glow"
            style={{ background: "var(--chocolate)" }}
          >
            <img
              src={macro}
              alt="Macro craftsmanship — engraved silver detail"
              loading="lazy"
              className="lux-img absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0 cinematic-vignette opacity-100"
            />
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
              <div>
                <p className="eyebrow-luxe text-[9px]" style={{ color: "var(--silver)" }}>
                  N° 01 · Macro
                </p>
                <p className="font-display italic text-2xl md:text-3xl mt-2" style={{ color: "var(--ivory)" }}>
                  Hand-engraved
                </p>
              </div>
              <p className="eyebrow-luxe text-[9px]" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
                925 Silver · Emerald
              </p>
            </figcaption>
          </figure>

          {/* Right column — portrait + detail */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-6">
            <figure
              className="reveal relative overflow-hidden group aspect-[4/5]"
              style={{ transitionDelay: "120ms", background: "var(--beige)" }}
            >
              <img
                src={portraitA}
                alt="Editorial portrait"
                loading="lazy"
                className="lux-img absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-4 left-4 text-[10px] tracking-[0.4em] uppercase italic font-display opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: "var(--cream)" }}>
                Worn · N° 02
              </figcaption>
            </figure>
            <figure
              className="reveal relative overflow-hidden group aspect-square"
              style={{ transitionDelay: "200ms", background: "var(--beige)" }}
            >
              <img
                src={detailA}
                alt="Silver texture detail"
                loading="lazy"
                className="lux-img absolute inset-0 h-full w-full object-cover object-center"
              />
            </figure>
          </div>

          {/* Quote break */}
          <div
            className="col-span-12 md:col-span-4 reveal flex items-center md:px-4 py-8 md:py-0"
            style={{ transitionDelay: "120ms" }}
          >
            <blockquote
              className="font-display italic text-2xl md:text-3xl leading-[1.25]"
              style={{ color: "var(--chocolate)" }}
            >
              “Silver, when treated with reverence, <br className="hidden md:block" />becomes inheritance.”
              <footer
                className="not-italic mt-6 text-[10px] tracking-[0.5em] uppercase"
                style={{ color: "var(--taupe)", fontFamily: "var(--font-sans)" }}
              >
                — The Atelier
              </footer>
            </blockquote>
          </div>

          {/* Two detail crops */}
          <figure
            className="col-span-6 md:col-span-4 reveal relative overflow-hidden group aspect-[4/5]"
            style={{ transitionDelay: "200ms", background: "var(--beige)" }}
          >
            <img
              src={portraitB}
              alt="Detail — emerald and silver"
              loading="lazy"
              className="lux-img absolute inset-0 h-full w-full object-cover object-center"
            />
            <figcaption
              className="absolute bottom-4 left-4 text-[10px] tracking-[0.4em] uppercase italic font-display opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ color: "var(--cream)" }}
            >
              Emerald · N° 03
            </figcaption>
          </figure>

          <figure
            className="col-span-6 md:col-span-4 reveal relative overflow-hidden group aspect-[4/5]"
            style={{ transitionDelay: "280ms", background: "var(--beige)" }}
          >
            <img
              src={detailB}
              alt="Hand-set stone detail"
              loading="lazy"
              className="lux-img absolute inset-0 h-full w-full object-cover object-center"
            />
          </figure>

          {/* Wide cinematic close */}
          <figure
            className="col-span-12 reveal relative overflow-hidden group aspect-[16/7]"
            style={{ transitionDelay: "200ms", background: "var(--beige)" }}
          >
            <img
              src={cinematic}
              alt="Cinematic still"
              loading="lazy"
              className="lux-img absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, color-mix(in oklab, var(--chocolate) 35%, transparent) 0%, transparent 45%)",
              }}
            />
            <figcaption className="absolute bottom-6 left-6 max-w-sm">
              <p className="eyebrow-luxe text-[9px]" style={{ color: "var(--silver)" }}>
                N° 04 · Cinematic
              </p>
              <p
                className="font-display italic text-2xl md:text-3xl mt-2"
                style={{ color: "var(--ivory)" }}
              >
                The light, slowed.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
