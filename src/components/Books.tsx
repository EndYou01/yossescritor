import Image from "next/image";
import { books, genreLabels } from "@/data/books";
import { BookCover } from "@/components/BookCover";
import { Kicker } from "@/components/Kicker";

// Genre tags in the pulp-cover palette.
const genreColors: Record<string, string> = {
  CF: "text-teal border-teal/40",
  Fantasía: "text-gold border-gold/40",
  Terror: "text-flare border-flare/40",
  Erótica: "text-flare border-flare/40",
  Realismo: "text-bone border-bone-dim/40",
  Humor: "text-acid border-acid/40",
  Juvenil: "text-cyan border-cyan/40",
  Ensayo: "text-bone border-bone/40",
  Antología: "text-gold-dim border-gold-dim/40",
};

export function Books() {
  return (
    <section
      id="obra"
      className="relative py-20 sm:py-28 lg:py-32 px-6 bg-ink-soft border-y border-bone/10 grain overflow-hidden"
    >
      {/* Flare halftone wash up top — this is the pulp shelf */}
      <div
        aria-hidden
        className="halftone-lg text-flare/15 absolute inset-x-0 top-0 h-56 halftone-fade-b pointer-events-none"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16 reveal">
          <div>
            <Kicker accent="flare" className="mb-6">
              La obra
            </Kicker>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
              Más de cuarenta libros.
              <br />
              <span className="text-flare italic font-serif font-normal">
                Una sola voz.
              </span>
            </h2>
          </div>
          <p className="max-w-md font-serif text-bone-dim text-lg">
            La misma mirada que pongo en tu manuscrito la llevo aplicando a la
            mía desde 1988: space opera, cyberpunk, fantasía heroica, terror,
            realismo, juvenil y antologías. Una selección de la obra disponible
            en versión digital —escríbeme por el catálogo completo.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {books.map((b) => (
            <li
              key={b.title}
              className="bg-ink flex flex-row sm:flex-col group transition-colors hover:bg-ink-soft"
            >
              <div className="w-28 sm:w-full shrink-0 overflow-hidden">
                <BookCover
                  title={b.title}
                  genre={b.genre}
                  cover={b.cover}
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-7 flex flex-col gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`font-sans text-[10px] uppercase tracking-widest border px-2 py-1 ${
                      genreColors[b.genre] ?? "border-bone/40 text-bone"
                    }`}
                  >
                    {genreLabels[b.genre]}
                  </span>
                  <span className="font-display text-bone-dim text-sm tabular-nums">
                    {b.year ?? "—"}
                  </span>
                </div>
                <h3 className="font-display font-bold text-bone text-xl sm:text-2xl leading-tight group-hover:text-flare transition-colors">
                  {b.title}
                </h3>
                {b.award && (
                  <p className="font-sans text-xs uppercase tracking-widest text-acid">
                    ★ {b.award}
                  </p>
                )}
                <p className="font-serif text-bone-dim leading-relaxed">
                  {b.summary}
                </p>
                {b.translations && b.translations.length > 0 && (
                  <p className="mt-auto pt-4 border-t border-bone/10 font-sans text-xs uppercase tracking-widest text-bone-dim">
                    Traducciones · {b.translations.join(" · ")}
                  </p>
                )}
                {b.editions && b.editions.length > 0 && (
                  <div
                    className={`flex items-center gap-3 ${
                      b.translations && b.translations.length > 0
                        ? "pt-3"
                        : "mt-auto pt-4 border-t border-bone/10"
                    }`}
                  >
                    <span className="font-sans text-[10px] uppercase tracking-widest text-bone-dim shrink-0">
                      Otras ediciones
                    </span>
                    <div className="flex gap-2">
                      {b.editions.map((e) => (
                        <div
                          key={e.cover}
                          className="relative aspect-[2/3] w-9 overflow-hidden border border-bone/15 bg-ink-soft"
                          title={`${e.title} · ${e.label}`}
                        >
                          <Image
                            src={e.cover}
                            alt={`Portada de ${e.title} (${e.label})`}
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
