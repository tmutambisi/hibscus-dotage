import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Work } from "@/components/site/Work";
import { Impact } from "@/components/site/Impact";
import { Leadership } from "@/components/site/Leadership";
import { GetInvolved } from "@/components/site/GetInvolved";
// import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Impact />
      <Leadership />
      <GetInvolved />
      {/* <Partners /> */}
      <Footer />
    </main>
  );
}
