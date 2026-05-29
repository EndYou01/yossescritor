import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contacto — Cuéntale tu proyecto a Yoss",
  description:
    "Solicita asesoría literaria con Yoss. Cuéntale el tipo de proyecto, en qué punto está y su extensión, y recibe una propuesta de trabajo y tarifa.",
};

export default function ContactoPage() {
  return <Contact />;
}
