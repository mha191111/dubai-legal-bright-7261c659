import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { WhyMe } from "@/components/site/WhyMe";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Showreel } from "@/components/site/Showreel";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileStickyBar } from "@/components/site/MobileStickyBar";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CONTACT } from "@/lib/contact";

const title = "Mohammad Moslem — Tennis & Fitness Coach in Dubai | Private Lessons";
const description =
  "Private tennis lessons and personalized fitness coaching in Dubai. Adults, juniors, and competitive players. Book your free intro session today.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Mohammad Moslem — Tennis & Fitness Coach",
  description,
  url: "https://coach-mohammad.lovable.app",
  telephone: CONTACT.phoneE164,
  email: CONTACT.email,
  areaServed: "Dubai, UAE",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  sport: ["Tennis", "Fitness Training"],
  priceRange: "$$",
  image: "/icon-512.png",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "tennis coach dubai, tennis lessons dubai, private tennis dubai, fitness coach dubai, junior tennis dubai, مدرب تنس دبي" },
      { name: "author", content: CONTACT.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/icon-512.png" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_AE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/icon-512.png" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://coach-mohammad.lovable.app/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhyMe />
        <Services />
        <About />
        <Gallery />
        <Showreel />
        <InstagramFeed />
        <Pricing />
        <Testimonials />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppButton
        message="Hello! I would like to book a tennis session."
        label=""
        className="fixed left-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] lg:bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 inline-flex h-14 w-14 items-center justify-center rounded-full p-0 text-[var(--ball-foreground)] shadow-glow transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
