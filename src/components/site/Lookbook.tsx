import { useEffect, useMemo, useState } from "react";
import logo from "@/assets/vineeth-silver-logo.png";
import { useReveal } from "@/hooks/use-reveal";

const imageModules = import.meta.glob("../../assets/lookbook/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const layout = [
  "lookbook-large md:col-span-7 md:row-span-2",
  "lookbook-medium md:col-span-5",
  "lookbook-small md:col-span-3",
  "lookbook-tall md:col-span-4 md:row-span-2",
  "lookbook-medium md:col-span-5",
  "lookbook-wide md:col-span-8",
  "lookbook-small md:col-span-4",
  "lookbook-large md:col-span-6 md:row-span-2",
  "lookbook-medium md:col-span-6",
  "lookbook-small md:col-span-3",
  "lookbook-tall md:col-span-5 md:row-span-2",
  "lookbook-medium md:col-span-4",
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
      <section className="relative min-h-[92svh] overflow-hidden px-5 pb-16 pt-24 sm:px-8 md:px-12 md:pt-12">
        <div className="absolute inset-0 grain opacity-70" />
        {heroImage && (
          <img
            src={heroImage}
            alt="Vineeth Silver editorial jewellery campaign"
            className="absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-[0.28] mix-blend-multiply md:w-[58%]"
          />
        )}
        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-[1500px] flex-col justify-between">
          <div className="flex justify-end">
            <img
              src={logo}
              alt="Vineeth Silver Jewellery"
              className="h-20 w-20 object-contain opacity-80 mix-blend-multiply sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
          </div>

          <div className="max-w-[940px] pb-6">
            <p className="eyebrow mb-7">Editorial Lookbook</p>
            <h1 className="font-display text-[clamp(56px,12vw,168px)] leading-[0.86] text-[var(--chocolate)]">
              Silver in<br />motion.
            </h1>
            <p className="mt-8 max-w-[520px] text-[15px] leading-[1.9] text-[var(--muted-foreground)] md:ml-[18vw]">
              A campaign edit of model-worn jewels, close details and quiet heirloom light — composed with space, rhythm and restraint.
            </p>
          </div>
        </div>
      </section>

      <section id="collections" className="relative px-5 py-14 sm:px-8 md:px-12 md:py-24">
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
          <div className="mb-14 grid grid-cols-12 gap-6 md:mb-24">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">Twenty eight frames</p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <h2 className="display-lg text-[var(--chocolate)]">
                A refined visual archive of pieces worn close to skin and light.
              </h2>
            </div>
          </div>

          <div className="lookbook-grid grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-7">
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
