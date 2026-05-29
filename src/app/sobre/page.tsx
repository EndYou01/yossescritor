import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "Sobre Yoss — Biografía, premios y trayectoria",
  description:
    "Quién es Yoss (José Miguel Sánchez Gómez): biólogo de formación y el autor de ciencia ficción cubano más premiado, con más de treinta libros traducidos a seis idiomas.",
};

export default function SobrePage() {
  return <About />;
}
