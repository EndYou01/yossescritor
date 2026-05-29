import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Books } from "@/components/Books";
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
        <Services />
        <About />
        <Testimonials />
        <Books />
        <OtraVida />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
