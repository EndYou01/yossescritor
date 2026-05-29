import { books } from "@/data/books";

const genreColors: Record<string, string> = {
  CF: "text-cyan border-cyan/40",
  Fantasía: "text-gold border-gold/40",
  Juvenil: "text-bone-dim border-bone-dim/40",
  Antología: "text-blood-bright border-blood/40",
  Ensayo: "text-bone border-bone/40",
};

export function Books() {
  return (
    <section
      id="obra"
      className="relative py-32 px-6 bg-ink-soft border-y border-bone/10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
              La obra
            </p>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
              Treinta libros.
              <br />
              <span className="text-blood-bright italic font-serif font-normal">
                Una sola voz.
              </span>
            </h2>
          </div>
          <p className="max-w-md font-serif text-bone-dim text-lg">
            La misma mirada que pongo en tu manuscrito la llevo aplicando a la
            mía desde 1988: space opera, cyberpunk, fantasía heroica, juvenil y
            antologías. Pídeme la bibliografía completa por correo.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {books.map((b) => (
            <li
              key={b.title}
              className="bg-ink p-8 flex flex-col gap-4 hover:bg-ink-soft transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`font-sans text-[10px] uppercase tracking-widest border px-2 py-1 ${
                    genreColors[b.genre] ?? "border-bone/40 text-bone"
                  }`}
                >
                  {b.genre}
                </span>
                <span className="font-display text-bone-dim text-sm tabular-nums">
                  {b.year ?? "—"}
                </span>
              </div>
              <h3 className="font-display font-bold text-bone text-2xl leading-tight group-hover:text-gold transition-colors">
                {b.title}
              </h3>
              {b.award && (
                <p className="font-sans text-xs uppercase tracking-widest text-gold">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
