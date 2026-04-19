import bracelet from "@/assets/bracelet-emerald.png";
import necklaceDiamond from "@/assets/necklace-diamond.png";
import necklaceLayered from "@/assets/necklace-layered.png";
import necklaceEmerald from "@/assets/necklace-emerald.png";

type Item =
  | { kind: "img"; src: string; alt: string; ratio: string }
  | { kind: "video"; src: string; ratio: string };

const items: Item[] = [
  { kind: "img", src: necklaceLayered, alt: "Layered diamond necklace", ratio: "3/4" },
  { kind: "video", src: "/videos/jewel-1.mp4", ratio: "4/5" },
  { kind: "img", src: bracelet, alt: "Emerald bracelet", ratio: "16/10" },
  { kind: "img", src: necklaceEmerald, alt: "Emerald and diamond necklace", ratio: "4/5" },
  { kind: "video", src: "/videos/jewel-2.mp4", ratio: "3/4" },
  { kind: "img", src: necklaceDiamond, alt: "Diamond bib necklace", ratio: "16/11" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-xl">
            <p className="eyebrow">Featured Gallery</p>
            <div className="hairline mt-5 mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Light, captured in <span className="italic text-[var(--accent)]">silver</span>.
            </h2>
          </div>
          <p className="md:max-w-sm text-[var(--muted-foreground)] leading-relaxed">
            A curated frame of moments — light bending across hand-set stones
            and precious metalwork.
          </p>
        </div>

        <div className="mt-14 masonry">
          {items.map((it, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-xl bg-white reveal"
              style={{
                aspectRatio: it.ratio,
                transitionDelay: `${i * 80}ms`,
                boxShadow: "var(--shadow-soft)",
              }}
            >
              {it.kind === "img" ? (
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                />
              ) : (
                <video
                  className="h-full w-full object-cover"
                  src={it.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--chocolate) 60%, transparent) 100%)",
                }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
