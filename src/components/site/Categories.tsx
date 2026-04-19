import { useState } from "react";
import necklaceLayered from "@/assets/editorial-necklace-layered.png";
import necklaceEmerald from "@/assets/editorial-necklace-emerald.png";
import necklaceBib from "@/assets/editorial-necklace-emerald-bib.png";
import bracelet from "@/assets/editorial-bracelet.png";

const cats = [
  {
    name: "Necklaces",
    italic: "layered",
    desc: "Sculptural silhouettes in silver — from delicate everyday studs to bold statement collars.",
    img: necklaceLayered,
    count: "67 pieces",
  },
  {
    name: "Bracelets",
    italic: "everyday",
    desc: "Linked with patience, finished by hand. Wear one — or stack them all.",
    img: bracelet,
    count: "32 pieces",
  },
  {
    name: "Statement",
    italic: "bib",
    desc: "Heirloom silhouettes for the moments that ask to be remembered.",
    img: necklaceBib,
    count: "18 pieces",
  },
  {
    name: "Emerald",
    italic: "edit",
    desc: "Hand-set emeralds nested into hand-polished silver. A study in green and shadow.",
    img: necklaceEmerald,
    count: "14 pieces",
  },
];

export function Categories() {
  const [active, setActive] = useState(0);
  return (
    <section className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-14 reveal">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">N° 02 — Index</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display-md">
              Categories — <span className="italic font-display">an unhurried</span> index.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Left: vertical category list */}
          <div className="col-span-12 lg:col-span-5">
            <ul className="divide-y" style={{ borderColor: "color-mix(in oklab, var(--chocolate) 14%, transparent)" }}>
              {cats.map((c, i) => {
                const isActive = active === i;
                return (
                  <li
                    key={c.name}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group py-7 cursor-pointer border-t first:border-t-0 transition-colors"
                    style={{ borderColor: "color-mix(in oklab, var(--chocolate) 14%, transparent)" }}
                  >
                    <div className="flex items-baseline gap-6">
                      <span
                        className="text-[10px] tracking-[0.4em] uppercase shrink-0"
                        style={{ color: isActive ? "var(--chocolate)" : "var(--taupe)" }}
                      >
                        0{i + 1}
                      </span>
                      <h3
                        className={`font-display text-3xl md:text-5xl leading-none transition-all duration-500 ${
                          isActive ? "translate-x-2" : "opacity-70"
                        }`}
                        style={{ color: "var(--chocolate)" }}
                      >
                        {c.name} <span className="italic">{c.italic}</span>
                      </h3>
                      <span className="ml-auto text-[10px] tracking-[0.4em] uppercase shrink-0" style={{ color: "var(--taupe)" }}>
                        {c.count}
                      </span>
                    </div>
                    <p
                      className={`overflow-hidden transition-all duration-700 ease-out text-[15px] leading-[1.8] pl-12 mt-0 ${
                        isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                      }`}
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {c.desc}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: dynamic image */}
          <div className="col-span-12 lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--cream)]">
              {cats.map((c, i) => (
                <img
                  key={c.name}
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-contain object-center p-8 md:p-12 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--chocolate) 50%, transparent) 100%)",
                }}
              />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <p className="eyebrow" style={{ color: "var(--silver)" }}>
                    Featured
                  </p>
                  <p className="font-display italic text-2xl mt-1" style={{ color: "var(--cream)" }}>
                    {cats[active].name} {cats[active].italic}
                  </p>
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--cream)" }}>
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
