import type { Metadata } from "next";
import { Press } from "@/components/Press";

export const metadata: Metadata = {
  title: "Prensa y entrevistas — Yoss",
  description:
    "Selección de entrevistas y reseñas sobre Yoss en LA Review of Books, Restless Books, Remezcla, Words Without Borders y La Jiribilla.",
};

export default function PrensaPage() {
  return <Press />;
}
