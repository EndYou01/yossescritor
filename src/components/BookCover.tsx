import Image from "next/image";

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

  // Typographic placeholder for titles without available cover art
  return (
    <div className="relative aspect-[2/3] overflow-hidden bg-ink-soft grain flex flex-col items-center justify-center p-3 sm:p-6 text-center">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, rgba(160,24,24,0.28) 0%, transparent 55%)",
        }}
      />
      <div aria-hidden className="absolute inset-2 sm:inset-3 border border-bone/15" />
      <span className="relative font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gold mb-2 sm:mb-4">
        {genre}
      </span>
      <span className="relative font-display font-bold text-bone text-base sm:text-2xl leading-tight text-balance">
        {title}
      </span>
      <span aria-hidden className="relative mt-2 sm:mt-4 h-px w-8 sm:w-10 bg-blood" />
    </div>
  );
}
