import storyImg from "@/assets/necklace-emerald.png";

export function Story() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div className="reveal relative">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ boxShadow: "var(--shadow-luxe)" }}
          >
            <img
              src={storyImg}
              alt="Vineeth atelier — emerald necklace"
              className="w-full h-[520px] md:h-[640px] object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="hidden md:block absolute -bottom-8 -right-8 px-7 py-6 rounded-xl"
            style={{
              background: "var(--cream)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <p className="font-serif text-3xl">Est. 1978</p>
            <p className="eyebrow mt-1">Three generations</p>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "150ms" }}>
          <p className="eyebrow">Our Atelier</p>
          <div className="hairline mt-5 mb-7" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
            Quiet hands.{" "}
            <span className="italic text-[var(--accent)]">Patient silver.</span>
          </h2>
          <p className="mt-7 text-[var(--muted-foreground)] leading-[1.85] text-base md:text-lg">
            For nearly five decades, Vineeth has shaped silver by hand — slowly,
            with the kind of patience that machines cannot mimic. Every clasp,
            every prong, every polished curve carries the imprint of an artisan
            who has spent a lifetime listening to the metal.
          </p>
          <p className="mt-5 text-[var(--muted-foreground)] leading-[1.85] text-base md:text-lg">
            We do not chase trends. We chase a single, unhurried idea: that
            silver, when treated with reverence, becomes something more than
            ornament. It becomes inheritance.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "47", l: "Years" },
              { n: "1200+", l: "Pieces" },
              { n: "100%", l: "Hand-set" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-serif text-3xl md:text-4xl">{s.n}</p>
                <p className="eyebrow mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
