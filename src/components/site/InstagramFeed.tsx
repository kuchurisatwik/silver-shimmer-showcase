import { Instagram } from "lucide-react";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

// Pick a diverse set of images for the Instagram feed
const feedImages = [
  allImages[1], allImages[4], allImages[7], allImages[10],
  allImages[13], allImages[16], allImages[19], allImages[22],
].filter(Boolean);

export function InstagramFeed() {
  return (
    <section id="instagram" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-wide mb-8">
        <div className="section-divider mb-6">
          <span className="section-divider__motif">✻</span>
          <span className="section-divider__line" />
          <span className="section-divider__title">Follow Us On Instagram</span>
          <span className="section-divider__line" />
          <span className="section-divider__motif">✻</span>
        </div>

        <div className="text-center mt-4">
          <h2 className="display-md" style={{ color: "var(--chocolate)" }}>
            Stay Connected
          </h2>
          <p className="text-[14px] mt-3 max-w-lg mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Discover new arrivals, bridal inspirations, styling ideas, and our latest collections.
          </p>
        </div>
      </div>

      {/* Instagram grid */}
      <div className="insta-grid">
        {feedImages.map((img, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-card"
          >
            <img
              src={img}
              alt={`Instagram post ${i + 1}`}
              loading="lazy"
            />
            <div className="insta-card__overlay">
              <Instagram className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--outline"
        >
          <Instagram className="w-4 h-4" strokeWidth={1.5} />
          Follow Us
        </a>
      </div>
    </section>
  );
}
