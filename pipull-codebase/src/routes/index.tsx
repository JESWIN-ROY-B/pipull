import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/pipull/Header";
import { Hero } from "@/components/pipull/Hero";
import { Promos } from "@/components/pipull/Promos";
import { FeaturedServices } from "@/components/pipull/FeaturedServices";
import { Trust } from "@/components/pipull/Trust";
import { CartDrawer } from "@/components/pipull/CartDrawer";
import { ViewCartBar } from "@/components/pipull/ViewCartBar";
import { LoginModal } from "@/components/pipull/LoginModal";
import { Footer } from "@/components/pipull/Footer";

const TITLE = "Pipull — Professional home services at your doorstep";
const DESCRIPTION =
  "Book verified, trained professionals for AC repair, cleaning, salon at home, plumbing and painting. Transparent pricing and the Pipull Guarantee.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("Bengaluru");
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-dvh bg-background">
        <Header
          query={query}
          onQueryChange={setQuery}
          city={city}
          onCityChange={setCity}
          onLogin={() => setLoginOpen(true)}
        />
        <main>
          <Hero city={city} />
          <Promos />
          <FeaturedServices query={query} />
          <Trust />
        </main>
        <Footer />
        <ViewCartBar />
        <CartDrawer />
        <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      </div>
    </CartProvider>
  );
}
