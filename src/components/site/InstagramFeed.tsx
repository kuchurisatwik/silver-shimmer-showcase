import { Instagram } from "lucide-react";
import { SectionHeading } from "./ui";

const imageModules = import.meta.glob("@/assets/lookbook/lookbook-*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const feedImages = [
  allImages[1],
  allImages[4],
  allImages[7],
  allImages[10],
  allImages[13],
  allImages[16],
].filter(Boolean);

export function InstagramFeed() {
  return (
    <section id="instagram" className="section-pad" style={{ background: "var(--beige)" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="@vineethsilver"
          title="Follow Our Journey"
          subtitle="New arrivals & styling, every day"
        />

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mt-8 sm:mt-11">
          {feedImages.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
              style={{ aspectRatio: "1 / 1", borderRadius: "8px" }}
            >
              <img
                src={img}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "color-mix(in oklab, var(--chocolate) 42%, transparent)" }}
              >
                <Instagram className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="aa-btn aa-btn--outline"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
}
