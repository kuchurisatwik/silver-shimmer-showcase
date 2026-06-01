import React from 'react';

const pillars = [
  {
    n: "I",
    title: "Sourcing",
    italic: "honest",
    body: "Hallmarked 925 silver, conflict-free emeralds, and ethically sourced stones — chosen one ingot, one carat at a time.",
    image: "/images/craft-sourcing.png",
    bgText: "ARTISTRY",
    align: "left",
  },
  {
    n: "II",
    title: "Hand-finishing",
    italic: "patient",
    body: "Each piece is hammered, lost-wax cast, soldered, and engraved by artisans who have known silver for years.",
    image: "/images/craft-hand-finishing.png",
    bgText: "ATELIER",
    align: "right",
  },
  {
    n: "III",
    title: "Polishing",
    italic: "unhurried",
    body: "A slow rouge-and-cloth finish gives every surface the warm, living gleam that only patient hands can coax from silver.",
    image: "/images/craft-polishing.png",
    bgText: "SILVER",
    align: "left",
  },
];

export function Craft() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-125 saturate-110"
        >
          <source src="/make_it_in_fps_ultra_high_.mp4" type="video/mp4" />
        </video>
        {/* Reduced Black Overlay for sunlight visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Intro Header */}
      <div className="container-wide relative pt-24 pb-4 z-10">
        <div className="grid grid-cols-12 gap-6 reveal">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow opacity-50">N° 03 — Atelier</p>
          </div>
          <div className="col-span-12 md:col-span-9 text-center md:text-left">
            <div className="headline-stack mb-6">
              <h2 className="display-lg">The Craft, Held In</h2>
              <span className="script-lg script-overlay md:pl-[14%] block" style={{ color: "var(--silver-warm)" }}>
                three hands
              </span>
            </div>
            <div className="max-w-md md:ml-[14%]">
              <div className="h-px w-24 mb-6 bg-gradient-to-r from-white to-transparent opacity-40" />
              <p className="text-[14px] leading-[1.85] opacity-70">
                From ingot to masterpiece — every piece passes through
                three quiet disciplines. Not manufactured, but manifested through patient ceremony.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Panels */}
      <div className="relative z-10 container-wide pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-4 md:mt-4 reveal">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`group relative w-full aspect-square flex flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:bg-white/30 hover:border-white/40 hover:backdrop-blur-2xl hover:-translate-y-3`}
            >
              {/* Background Typography */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                <span className="font-display font-bold text-[8vw] md:text-[4vw] leading-none text-white opacity-[0.15] tracking-tighter group-hover:scale-105 transition-transform duration-1000 ease-out rotate-[-90deg] whitespace-nowrap origin-center glow-text">
                  {p.bgText}
                </span>
              </div>

              <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                <div className="flex flex-col mb-10 gap-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display italic text-3xl glow-text">
                      {p.n}
                    </span>
                    
                    {/* Custom Luxury Symbols */}
                    <svg
                      viewBox="0 0 64 64"
                      className="w-10 h-10 opacity-100 glow-icon transition-all duration-1000 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      {i === 0 && (
                        <>
                          <path d="M32 4 L4 32 L32 60 L60 32 Z" className="group-hover:stroke-[1.5px] transition-all" />
                          <circle cx="32" cy="32" r="14" strokeDasharray="2 4" />
                          <circle cx="32" cy="32" r="4" fill="currentColor" />
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <path d="M12 12 L52 52 M12 52 L52 12" className="group-hover:stroke-[1.5px] transition-all" />
                          <circle cx="32" cy="32" r="24" />
                          <rect x="22" y="22" width="20" height="20" transform="rotate(45 32 32)" />
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <circle cx="32" cy="32" r="28" className="group-hover:stroke-[1.5px] transition-all" />
                          <circle cx="32" cy="32" r="18" />
                          <path d="M32 14 L32 4 M32 60 L32 50 M14 32 L4 32 M60 32 L50 32" />
                          <circle cx="32" cy="32" r="2" fill="currentColor" />
                        </>
                      )}
                    </svg>
                  </div>
                  <span
                    className="h-px w-full block shadow-sm"
                    style={{
                      background: "linear-gradient(90deg, white 0%, transparent 100%)",
                      opacity: 1,
                      boxShadow: "0 0 8px 1px rgba(255,255,255,0.8)"
                    }}
                  />
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="font-display text-2xl lg:text-3xl mb-4 leading-[1.1] glow-text font-bold">
                    {p.title} 
                    <span className="italic block mt-2 text-xl lg:text-2xl glow-text font-medium text-white">
                      {p.italic}
                    </span>
                  </h3>

                  <p className="text-[13px] lg:text-[14px] leading-[1.8] glow-text font-semibold tracking-wide">
                    {p.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
