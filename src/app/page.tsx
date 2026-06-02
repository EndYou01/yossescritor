import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { AboutTeaser } from "@/components/AboutTeaser";
import { BooksTeaser } from "@/components/BooksTeaser";
import { OtraVidaTeaser } from "@/components/OtraVidaTeaser";
import { PressTeaser } from "@/components/PressTeaser";
import { CtaBand } from "@/components/CtaBand";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Marquee
        tone="flare"
        items={[
          "Ciencia ficción",
          "Fantasía",
          "Space opera",
          "Cuentos",
          "Guion",
          "Asesoría literaria",
        ]}
      />
      <Testimonials />
      <AboutTeaser />
      <BooksTeaser />
      <OtraVidaTeaser />
      <Marquee
        tone="teal"
        reverse
        items={[
          "Heavy metal",
          "Artes marciales",
          "Juegos de rol",
          "La Habana",
          "Cuarenta libros",
          "Doce idiomas",
        ]}
      />
      <PressTeaser />
      <CtaBand />
    </>
  );
}
