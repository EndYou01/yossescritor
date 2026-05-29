import type { Metadata } from "next";
import { OtraVida } from "@/components/OtraVida";

export const metadata: Metadata = {
  title: "Otra vida — Tenaz, artes marciales y rol",
  description:
    "El lado músico y guerrero de Yoss: vocalista de la banda de heavy metal Tenaz, practicante de artes marciales y árbitro de partidas de rol.",
};

export default function OtraVidaPage() {
  return <OtraVida />;
}
