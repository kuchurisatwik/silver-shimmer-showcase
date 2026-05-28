import { useState } from "react";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const all = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const pick = (n: number) => all[(n - 1) % all.length];

const cats = [
  {
    name: "Necklaces",
    italic: "layered",
    material: "925 Silver · Hand-soldered links",
    desc: "Sculptural silhouettes — from delicate everyday chains to bold heirloom collars finished by hand.",
    img: pick(1),
    count: "67 pieces",
  },
  {
    name: "Bracelets",
    italic: "everyday",
    material: "925 Silver · Lost-wax cast",
    desc: "Linked with patience, finished with rouge. Wear one — or stack them like a quiet diary.",
    img: pick(10),
    count: "32 pieces",
  },
  {
    name: "Statement",
    italic: "bib",
    material: "925 Silver · Hand-engraved",
    desc: "Heirloom silhouettes for the moments that ask to be remembered — and the ones that will be.",
    img: pick(17),
    count: "18 pieces",
  },
  {
    name: "Emerald",
    italic: "edit",
    material: "925 Silver · Hand-set Emeralds",
    desc: "Conflict-free emeralds nested into hand-polished silver. A study in green and shadow.",
    img: pick(26),
    count: "14 pieces",
  },
];

export function Categories() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "var(--beige)" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 90% 0%, color-mix(in oklab, var(--silver) 18%, transparent), transparent 55%)",
        }}
      />
      <div className="container-wide relative">
        <div className="grid grid-cols-12 gap-6 mb-12 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">N° 02 — Index</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display-lg">
              Categories — <span className="italic font-display">an unhurried</span> index.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-2 md:pt-4">
            <div className="shimmer-divider" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Left: vertical category list */}
          <div className="col-span-12 lg:col-span-5">
            <ul>
              {cats.map((c, i) => {
                const isActive = active === i;
                return (
                  <li
                    key={c.name}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group py-6 cursor-pointer border-t transition-all"
                    style={{
                      borderColor: isActive
                        ? "color-mix(in oklab, var(--silver) 70%, transparent)"
                        : "color-mix(in oklab, var(--chocolate) 12%, transparent)",
                    }}
                  >
                    <div className="flex items-baseline gap-3 sm:gap-5 flex-wrap">
                      <span
                        className="text-[9px] tracking-[0.5em] uppercase shrink-0 transition-colors"
                        style={{ color: isActive ? "var(--chocolate)" : "var(--taupe)" }}
                      >
                        0{i + 1}
                      </span>
                      <h3
                        className={`font-display text-2xl sm:text-3xl md:text-4xl leading-none transition-all duration-700 ${
                          isActive ? "translate-x-2" : "opacity-65"
                        }`}
                        style={{ color: "var(--chocolate)" }}
                      >
                        {c.name} <span className="italic">{c.italic}</span>
                      </h3>
                      <span
                        className="ml-auto text-[9px] tracking-[0.5em] uppercase shrink-0"
                        style={{ color: "var(--taupe)" }}
                      >
                        {c.count}
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-700 ease-out pl-7 sm:pl-12 ${
                        isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p
                        className="text-[10px] tracking-[0.4em] uppercase mb-2"
                        style={{ color: "var(--emerald)" }}
                      >
                        {c.material}
                      </p>
                      <p
                        className="text-[13px] leading-[1.85] max-w-md"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {c.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
              <li
                className="border-t"
                style={{
                  borderColor: "color-mix(in oklab, var(--chocolate) 12%, transparent)",
                }}
              />
            </ul>
          </div>

          {/* Right: dynamic image — luxury frame, silver vignette */}
          <div className="col-span-12 lg:col-span-7 lg:sticky lg:top-28">
            <div
              className="relative aspect-[4/5] overflow-hidden bg-[var(--chocolate)] jewel-glow"
              style={{ boxShadow: "var(--shadow-jewel)" }}
            >
              {cats.map((c, i) => (
                <img
                  key={c.name}
                  src={c.img}
                  alt={`${c.name} ${c.italic}`}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              {/* Silver vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 45%, color-mix(in oklab, var(--chocolate) 70%, transparent) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--chocolate) 75%, transparent) 100%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="eyebrow-luxe text-[9px]" style={{ color: "var(--silver)" }}>
                    Featured · {cats[active].material}
                  </p>
                  <p
                    className="font-display italic text-2xl sm:text-3xl mt-2"
                    style={{ color: "var(--ivory)" }}
                  >
                    {cats[active].name} {cats[active].italic}
                  </p>
                </div>
                <span
                  className="text-[9px] tracking-[0.5em] uppercase"
                  style={{ color: "var(--cream)" }}
                >
                  0{active + 1} / 0{cats.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
