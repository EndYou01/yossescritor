import type { Metadata } from "next";
import { Books } from "@/components/Books";

export const metadata: Metadata = {
  title: "Obra — Libros de Yoss",
  description:
    "Bibliografía de Yoss: novelas, cuentos, antologías y juvenil. Space opera, cyberpunk y fantasía heroica, con títulos traducidos al inglés por Restless Books.",
};

export default function ObraPage() {
  return <Books />;
}
