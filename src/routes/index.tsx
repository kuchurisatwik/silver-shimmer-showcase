import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Lookbook } from "@/components/site/Lookbook";
import { Footer } from "@/components/site/Footer";

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
  return (
    <>
      <Navbar />
      <Lookbook />
      <Footer />
    </>
  );
}
