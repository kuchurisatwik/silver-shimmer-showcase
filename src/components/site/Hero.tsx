import { useEffect, useRef } from "react";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax — chocolate cinematic depth
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight) return;
      el.style.transform = `translate3d(0, ${y * 0.10}px, 0) scale(${1 + y * 0.00012})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="index" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[var(--chocolate)]">
      {/* Background video — parallax + slow zoom */}
      <div
        ref={bgRef}
        className="absolute inset-0 animate-slow-zoom will-change-transform"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[center_65%]"
        >
          <source src="/Luxury_fashion_film__Slow_cam.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic gradients — lift jewellery focal zone */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 48%, transparent 0%, transparent 100%)",
        }}
      />


      {/* Floating particles — silver dust */}
      <div className="float-particles" aria-hidden>
        <span /><span /><span /><span /><span /><span /><span /><span />
      </div>

      {/* Slow reflective silver light sweep */}
      <div className="light-sweep" aria-hidden />


      {/* Grain */}
      <div className="absolute inset-0 grain pointer-events-none" />



      {/* Headline composition */}
      <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-28 md:pb-32">
        <div className="max-w-[1180px]">
          <div className="mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img 
              src="/Vineeth_Logo_Only.svg" 
              alt="Vineeth Logo" 
              className="w-24 md:w-32 h-auto drop-shadow-2xl brightness-0 invert" 
            />
          </div>
          <p
            className="eyebrow-luxe animate-fade-in mb-7 text-[10px]"
            style={{ animationDelay: "0.4s", color: "var(--silver)" }}
          >
            — Silver Jewellery, Hand-finished
          </p>

          <div className="headline-stack">
            <h1
              className="display-hero animate-letter-reveal"
              style={{ color: "var(--cream)", animationDelay: "0.5s" }}
            >
              Vineeth Silver
            </h1>
            <h1
              className="script-xl script-overlay animate-letter-reveal pl-[28vw] md:pl-[50vw] py-12 -my-12"
              style={{ animationDelay: "1.05s", marginTop: "-0.12em" }}
            >
              <span 
                className="metallic-text inline-block"
                style={{
                  paddingLeft: "1.2em",
                  marginLeft: "0em",
                  paddingRight: "0.2em",
                  marginRight: "-0.2em",
                  paddingTop: "0.2em",
                  marginTop: "-0.2em",
                  paddingBottom: "0.4em",
                  marginBottom: "-0.4em"
                }}
              >
                Jewellery
              </span>
            </h1>
          </div>


          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 items-end">
            <p
              className="col-span-12 md:col-span-5 md:col-start-2 text-[13.5px] md:text-[15px] leading-[1.95] animate-fade-up font-light"
              style={{
                animationDelay: "1.3s",
                color: "color-mix(in oklab, var(--cream) 82%, transparent)",
              }}
            >
              An intimate maison of hand-finished silver and quiet adornment —
              created for those who value restraint, weight and the
              unhurried gleam of modern metalwork.
            </p>

            <div
              className="col-span-12 md:col-span-5 md:col-start-8 flex flex-wrap items-center gap-5 sm:gap-8 animate-fade-up"
              style={{ animationDelay: "1.55s" }}
            >
              <a
                href="#collections"
                className="group relative overflow-hidden inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-[11px] tracking-[0.4em] uppercase border transition-colors duration-700 rounded-full"
                style={{
                  color: "var(--cream)",
                  borderColor: "color-mix(in oklab, var(--silver) 55%, transparent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--ivory)";
                  e.currentTarget.style.color = "var(--chocolate)";
                  e.currentTarget.style.borderColor = "var(--ivory)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--cream)";
                  e.currentTarget.style.borderColor =
                    "color-mix(in oklab, var(--silver) 55%, transparent)";
                }}
              >
                <span className="relative z-10">Explore the Maison</span>
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#about"
                className="group relative text-[10px] sm:text-[11px] tracking-[0.4em] uppercase italic"
                style={{
                  color: "color-mix(in oklab, var(--cream) 75%, transparent)",
                  fontFamily: "var(--font-display)",
                }}
              >
                The Atelier Story
                <span
                  className="absolute left-0 -bottom-1 h-px w-0 group-hover:w-full transition-[width] duration-700"
                  style={{ background: "var(--silver)" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <span
          className="text-[9px] tracking-[0.5em] uppercase"
          style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}
        >
          01 / 04
        </span>
        <span className="block w-px h-12 bg-gradient-to-b from-[var(--silver)] to-transparent" />
      </div>
    </section>
  );
}
