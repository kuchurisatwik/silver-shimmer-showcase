import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Collections } from "@/components/site/Collections";
import { Categories } from "@/components/site/Categories";
import { Gallery } from "@/components/site/Gallery";
import { Offer } from "@/components/site/Offer";
import { Story } from "@/components/site/Story";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vineeth Silver Jewellery — Timeless Silver, Rooted in Elegance" },
      {
        name: "description",
        content:
          "An heirloom atelier of hand-crafted silver jewellery. Limited collections, cinematic craftsmanship, quiet luxury.",
      },
      { property: "og:title", content: "Vineeth Silver Jewellery" },
      {
        property: "og:description",
        content: "Heirloom silver, hand-finished. Timeless pieces from the Vineeth atelier.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <Categories />
      <Gallery />
      <Offer />
      <Story />
      <Footer />
    </main>
  );
}
