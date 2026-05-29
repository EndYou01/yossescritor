import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { AboutTeaser } from "@/components/AboutTeaser";
import { BooksTeaser } from "@/components/BooksTeaser";
import { OtraVidaTeaser } from "@/components/OtraVidaTeaser";
import { PressTeaser } from "@/components/PressTeaser";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <AboutTeaser />
      <BooksTeaser />
      <OtraVidaTeaser />
      <PressTeaser />
      <CtaBand />
    </>
  );
}
