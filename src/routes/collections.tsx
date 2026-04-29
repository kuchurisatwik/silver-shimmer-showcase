import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Lookbook } from "@/components/site/Lookbook";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Editorial Jewellery Lookbook — Vineeth Silver" },
      {
        name: "description",
        content: "A luxury editorial lookbook of model-worn silver jewellery, campaign portraits, and refined heirloom details.",
      },
      { property: "og:title", content: "Editorial Jewellery Lookbook — Vineeth Silver" },
      {
        property: "og:description",
        content: "Browse a refined campaign lookbook of Vineeth Silver jewellery in warm, editorial light.",
      },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <>
      <Navbar />
      <Lookbook />
      <Footer />
    </>
  );
}
