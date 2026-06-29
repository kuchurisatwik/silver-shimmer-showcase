import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { ShopByCollection } from "@/components/site/ShopByCollection";
import { ShopByCategory } from "@/components/site/ShopByCategory";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { BridalCollection } from "@/components/site/BridalCollection";
import { TempleCollection } from "@/components/site/TempleCollection";
import { DailyWearCollection } from "@/components/site/DailyWearCollection";
import { GiftingCollection } from "@/components/site/GiftingCollection";
import { WhyVSJ } from "@/components/site/WhyVSJ";
import { CustomerReviews } from "@/components/site/CustomerReviews";
import { VisitStore } from "@/components/site/VisitStore";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Footer } from "@/components/site/Footer";

import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vineeth Silver Jewellery — Hallmarked Silver Jewellery for Every Occasion" },
      {
        name: "description",
        content:
          "Shop beautifully crafted hallmarked silver jewellery — Nakshi, Victorian, Kundan, Temple, Bridal & Daily Wear collections. Free shipping across India.",
      },
      { property: "og:title", content: "Vineeth Silver Jewellery" },
      {
        property: "og:description",
        content: "Discover hallmarked silver jewellery for weddings, celebrations, gifting, and everyday elegance.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <ShopByCollection />
      <ShopByCategory />
      <FeaturedProducts />
      <BridalCollection />
      <TempleCollection />
      <DailyWearCollection />
      <GiftingCollection />
      <WhyVSJ />
      <CustomerReviews />
      <VisitStore />
      <InstagramFeed />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
