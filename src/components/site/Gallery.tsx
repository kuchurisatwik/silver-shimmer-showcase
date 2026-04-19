import bracelet from "@/assets/editorial-bracelet.png";
import necklaceBib from "@/assets/editorial-necklace-emerald-bib.png";
import necklaceLayered from "@/assets/editorial-necklace-layered.png";
import necklaceEmerald from "@/assets/editorial-necklace-emerald.png";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        {/* Editorial header */}
        <div className="grid grid-cols-12 gap-6 mb-16 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">N° 03 — Gallery</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-lg">
              Light, captured <span className="italic font-display">in silver.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:pt-4">
            <p className="text-[15px] leading-[1.85]" style={{ color: "var(--muted-foreground)" }}>
              A curated frame of moments — light bending across hand-set stones
              and precious metalwork.
            </p>
          </div>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {/* Row 1 */}
          <figure className="col-span-12 md:col-span-7 reveal relative overflow-hidden group aspect-[5/6]">
            <img
              src={necklaceLayered}
              alt="Layered diamond necklace"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <figcaption className="absolute bottom-5 left-5 text-[10px] tracking-[0.4em] uppercase px-3 py-1.5 backdrop-blur-md rounded-full" style={{ background: "color-mix(in oklab, var(--cream) 65%, transparent)", color: "var(--chocolate)" }}>
              N° 01 · Layered
            </figcaption>
          </figure>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-5 md:gap-6 md:pt-16">
            <figure className="reveal relative overflow-hidden group aspect-[4/5]" style={{ transitionDelay: "120ms" }}>
              <video
                className="h-full w-full object-cover"
                src="/videos/jewel-slow.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <figcaption className="absolute bottom-5 left-5 text-[10px] tracking-[0.4em] uppercase italic font-display" style={{ color: "var(--cream)" }}>
                In motion
              </figcaption>
            </figure>
            <figure className="reveal relative overflow-hidden group aspect-[16/11]" style={{ transitionDelay: "200ms" }}>
              <img
                src={bracelet}
                alt="Emerald bracelet"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.05]"
              />
            </figure>
          </div>

          {/* Row 2 — quote / typographic break */}
          <div className="col-span-12 md:col-span-4 md:row-span-2 reveal flex items-center md:pl-2" style={{ transitionDelay: "120ms" }}>
            <blockquote className="font-display italic text-3xl md:text-4xl leading-[1.15]" style={{ color: "var(--chocolate)" }}>
              “Silver, when treated with reverence, becomes inheritance.”
              <footer className="not-italic mt-6 text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--taupe)", fontFamily: "var(--font-sans)" }}>
                — The Atelier
              </footer>
            </blockquote>
          </div>

          <figure className="col-span-12 md:col-span-4 reveal relative overflow-hidden group aspect-[4/5]" style={{ transitionDelay: "200ms" }}>
            <img
              src={necklaceEmerald}
              alt="Emerald and diamond necklace"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.05]"
            />
          </figure>

          <figure className="col-span-12 md:col-span-4 reveal relative overflow-hidden group aspect-[4/5]" style={{ transitionDelay: "280ms" }}>
            <video
              className="h-full w-full object-cover"
              src="/videos/bangle.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </figure>

          <figure className="col-span-12 md:col-span-8 md:col-start-5 reveal relative overflow-hidden group aspect-[16/9]" style={{ transitionDelay: "200ms" }}>
            <img
              src={necklaceBib}
              alt="Diamond bib necklace"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-[1.04]"
            />
            <figcaption className="absolute bottom-5 right-5 text-[10px] tracking-[0.4em] uppercase italic font-display" style={{ color: "var(--cream)" }}>
              Bib · N° 03
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
