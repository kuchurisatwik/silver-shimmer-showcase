import { useEffect, useMemo, useState } from "react";
import logo from "@/assets/vineeth-silver-hero-logo.png";
import { useReveal } from "@/hooks/use-reveal";

const imageModules = import.meta.glob("../../assets/lookbook/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const layout = [
  "lookbook-hero-frame md:col-span-7 md:row-span-2 md:mt-10",
  "lookbook-portrait md:col-span-5",
  "lookbook-detail md:col-span-3 md:mt-24",
  "lookbook-tall md:col-span-4 md:row-span-2",
  "lookbook-portrait md:col-span-5 md:mt-14",
  "lookbook-wide md:col-span-8",
  "lookbook-detail md:col-span-4 md:mt-20",
  "lookbook-large md:col-span-6 md:row-span-2",
  "lookbook-portrait md:col-span-6 md:mt-12",
  "lookbook-detail md:col-span-3",
  "lookbook-tall md:col-span-5 md:row-span-2 md:mt-16",
  "lookbook-medium md:col-span-4",
  "lookbook-wide md:col-span-7 md:mt-8",
  "lookbook-detail md:col-span-5 md:mt-28",
];

const captions = [
  "Campaign portrait",
  "Heritage necklace",
  "Silver detail",
  "Atelier light",
  "Emerald setting",
  "Evening edit",
  "Quiet shimmer",
  "Model study",
  "Layered silver",
  "Hand-finished detail",
  "Heirloom mood",
  "Editorial frame",
];

export function Lookbook() {
  useReveal();
  const [active, setActive] = useState<number | null>(null);

  const images = useMemo(
    () =>
      Object.entries(imageModules)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, src], index) => ({
          src,
          caption: captions[index % captions.length],
          className: layout[index % layout.length],
          parallax: index % 5 === 0 || index % 7 === 0,
        })),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => (current === null ? 0 : (current + 1) % images.length));
      if (event.key === "ArrowLeft") setActive((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, images.length]);

  const heroImage = images[0]?.src;
  const highlightImage = images[7]?.src ?? images[0]?.src;

  return (
    <main className="lookbook-page min-h-screen">
      <section className="lookbook-hero relative min-h-[96svh] overflow-hidden px-5 pb-16 pt-24 sm:px-8 md:px-12 md:pt-10">
        <div className="absolute inset-0 grain opacity-60" />
        <div className="lookbook-hero-orb" aria-hidden />
        {heroImage && (
          <div className="lookbook-hero-image-wrap" aria-hidden>
            <img
              src={heroImage}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
        <div className="relative z-10 mx-auto grid min-h-[82svh] max-w-[1500px] grid-cols-12 content-between gap-y-10">
          <div className="col-span-12 flex items-start justify-between gap-6 pt-1">
            <p className="eyebrow max-w-[220px] leading-loose">Editorial Lookbook<br />Vineeth Silver Jewellery</p>
            <img
              src={logo}
              alt="Vineeth Silver Jewellery"
              className="lookbook-hero-logo"
            />
          </div>

          <div className="col-span-12 pb-6 md:col-span-9 lg:col-span-8">
            <p className="mb-8 font-display text-[clamp(20px,2.4vw,34px)] italic leading-tight text-[color-mix(in_oklab,var(--chocolate)_68%,transparent)]">
              A refined visual archive.
            </p>
            <h1 className="font-display text-[clamp(62px,13vw,176px)] leading-[0.82] text-[var(--chocolate)]">
              Silver in<br />motion.
            </h1>
            <div className="mt-8 grid max-w-[760px] grid-cols-12 gap-6 md:ml-[12vw] md:mt-10">
              <p className="col-span-12 text-[15px] leading-[1.9] text-[var(--muted-foreground)] md:col-span-8">
                Model-worn heirlooms, close details and quiet ceremonial light — composed as a campaign story with space, rhythm and restraint.
              </p>
              <p className="col-span-12 hidden text-[10px] uppercase tracking-[0.34em] text-[color-mix(in_oklab,var(--chocolate)_48%,transparent)] md:col-span-4 md:block">
                28 frames<br />Warm silver<br />Campaign edit
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="lookbook-archive relative px-5 py-16 sm:px-8 md:px-12 md:py-28">
        {highlightImage && (
          <button
            type="button"
            onClick={() => setActive(7)}
            className="reveal lookbook-floating group hidden lg:block"
            aria-label="Open featured jewellery image"
          >
            <img src={highlightImage} alt="Featured Vineeth Silver campaign visual" className="h-full w-full object-cover" loading="lazy" />
          </button>
        )}

        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 grid grid-cols-12 gap-6 md:mb-28">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">Twenty eight frames</p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <h2 className="display-lg text-[var(--chocolate)]">
                Pieces worn close to skin, ceremony and light.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-2 md:pt-5">
              <p className="text-[13px] leading-[1.9] text-[color-mix(in_oklab,var(--chocolate)_55%,transparent)]">
                An editorial flow of portrait, detail, and heirloom shimmer.
              </p>
            </div>
          </div>

          <div className="lookbook-grid grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActive(index)}
                className={`reveal group lookbook-frame ${image.className} ${image.parallax ? "lookbook-parallax" : ""}`}
                style={{ transitionDelay: `${(index % 8) * 70}ms` }}
                aria-label={`Open ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt={`${image.caption} from Vineeth Silver jewellery lookbook`}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <span className="lookbook-glow" aria-hidden />
                <span className="lookbook-caption">{image.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[color-mix(in_oklab,var(--chocolate)_82%,transparent)] p-4 backdrop-blur-xl md:p-8" role="dialog" aria-modal="true">
          <button className="absolute inset-0 cursor-default" aria-label="Close viewer" onClick={() => setActive(null)} />
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--cream)_12%,transparent)] text-2xl leading-none text-[var(--cream)] backdrop-blur-md transition-transform hover:scale-105"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            type="button"
            onClick={() => setActive((active - 1 + images.length) % images.length)}
            className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--cream)_12%,transparent)] text-[var(--cream)] backdrop-blur-md transition-transform hover:scale-105 md:left-8"
            aria-label="Previous image"
          >
            ←
          </button>
          <img
            src={images[active].src}
            alt={images[active].caption}
            className="relative z-[1] max-h-[88svh] max-w-[92vw] object-contain shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          />
          <button
            type="button"
            onClick={() => setActive((active + 1) % images.length)}
            className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--cream)_12%,transparent)] text-[var(--cream)] backdrop-blur-md transition-transform hover:scale-105 md:right-8"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}
