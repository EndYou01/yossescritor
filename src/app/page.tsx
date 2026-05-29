import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Books } from "@/components/Books";
import { Services } from "@/components/Services";
import { OtraVida } from "@/components/OtraVida";
import { Press } from "@/components/Press";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Books />
        <Services />
        <OtraVida />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
