import type { Metadata } from "next";
import { Cinzel, Lora, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yoss — Escritor cubano de ciencia ficción y fantasía",
  description:
    "Sitio oficial de Yoss (José Miguel Sánchez Gómez): novelas, cuentos y ensayos de ciencia ficción y fantasía, asesoría literaria y coaching narrativo desde La Habana.",
  metadataBase: new URL("https://yossescritor.com"),
  openGraph: {
    title: "Yoss — Escritor cubano de ciencia ficción y fantasía",
    description:
      "Novelas, cuentos, asesoría literaria y heavy metal desde La Habana.",
    type: "website",
    locale: "es_CU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone">
        {children}
      </body>
    </html>
  );
}
