import type { CSSProperties } from "react";
import Image from "next/image";
import { genreLabels, type Genre } from "@/data/books";

export function BookCover({
  title,
  genre,
  cover,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  title: string;
  genre: string;
  cover?: string;
  sizes?: string;
}) {
  if (cover) {
    return (
      <div className="relative aspect-[2/3] overflow-hidden bg-ink-soft">
        <Image
          src={cover}
          alt={`Portada de ${title}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  // Vintage clothbound book for titles without available cover art.
  // Cloth color shifts per genre so the shelf reads as a varied collection.
  const cloth = clothByGenre[genre] ?? "#241c14";

  return (
    <div
      className="book-cloth book-sheen relative aspect-[2/3] overflow-hidden"
      style={
        {
          "--cloth": cloth,
          containerType: "inline-size",
        } as CSSProperties
      }
    >
      {/* Spine hinge down the left edge */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-black/65 via-black/25 to-transparent"
      />
      <div aria-hidden className="absolute inset-y-0 left-[8%] w-px bg-black/50" />
      <div
        aria-hidden
        className="absolute inset-y-0 left-[calc(8%+1px)] w-px bg-bone/10"
      />

      {/* Paper grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.09] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Foxing — aged blooms */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 24% 28%, rgba(58,40,20,0.55) 0 2px, transparent 4px), radial-gradient(circle at 79% 64%, rgba(54,36,18,0.45) 0 2px, transparent 4px), radial-gradient(circle at 63% 16%, rgba(48,33,16,0.4) 0 1.5px, transparent 3px), radial-gradient(circle at 38% 82%, rgba(48,33,16,0.4) 0 1.5px, transparent 3px)",
        }}
      />
      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 38%, transparent 42%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Gilt double-rule frame */}
      <div aria-hidden className="absolute inset-[5.5%] border border-gold/45" />
      <div aria-hidden className="absolute inset-[8%] border border-gold/20" />

      {/* Stamped content */}
      <div className="absolute inset-[8%] flex flex-col items-center justify-between text-center px-[7%] py-[8%]">
        <span
          className="book-foil font-display font-bold"
          style={{ fontSize: "clamp(0.5rem, 3cqi, 0.85rem)", letterSpacing: "0.35em" }}
        >
          YOSS
        </span>

        <div
          className="flex flex-col items-center"
          style={{ gap: "clamp(0.3rem, 2.6cqi, 0.85rem)" }}
        >
          <span
            aria-hidden
            className="book-foil leading-none"
            style={{ fontSize: "clamp(0.6rem, 3.6cqi, 1rem)" }}
          >
            ❧
          </span>
          <span
            className="book-foil font-display font-bold leading-[1.06] text-balance"
            style={{ fontSize: "clamp(0.82rem, 9cqi, 1.95rem)" }}
          >
            {title}
          </span>
          <span
            aria-hidden
            className="bg-gold/55 h-px"
            style={{ width: "clamp(1.1rem, 16cqi, 2.75rem)" }}
          />
        </div>

        <span
          className="book-foil font-sans uppercase leading-tight max-w-[88%]"
          style={{ fontSize: "clamp(0.4rem, 2.5cqi, 0.66rem)", letterSpacing: "0.22em" }}
        >
          {genreLabels[genre as Genre] ?? genre}
        </span>
      </div>
    </div>
  );
}

// Aged book-cloth tones, one per genre — muted, dark, gilt-friendly.
const clothByGenre: Record<string, string> = {
  CF: "#152a2e",
  Fantasía: "#1c2b18",
  Terror: "#181312",
  Erótica: "#2b1622",
  Realismo: "#2a2417",
  Humor: "#33270f",
  Juvenil: "#172634",
  Ensayo: "#20252b",
  Antología: "#291c11",
};
