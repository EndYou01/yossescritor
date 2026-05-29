import Link from "next/link";
import { books } from "@/data/books";

const genreColors: Record<string, string> = {
  CF: "text-cyan border-cyan/40",
  Fantasía: "text-gold border-gold/40",
  Juvenil: "text-bone-dim border-bone-dim/40",
  Antología: "text-blood-bright border-blood/40",
  Ensayo: "text-bone border-bone/40",
};

const featured = books.filter((b) => b.award).slice(0, 3);

export function BooksTeaser() {
  return (
    <section className="relative py-28 px-6 bg-ink-soft border-y border-bone/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
              La obra
            </p>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
              Treinta libros.
              <br />
              <span className="text-blood-bright italic font-serif font-normal">
                Una sola voz.
              </span>
            </h2>
          </div>
          <Link
            href="/obra"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-bone hover:text-gold transition-colors"
          >
            Ver toda la obra
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <ul className="grid sm:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {featured.map((b) => (
            <li key={b.title} className="bg-ink p-7 flex flex-col gap-3">
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
              <h3 className="font-display font-bold text-bone text-xl leading-tight">
                {b.title}
              </h3>
              {b.award && (
                <p className="font-sans text-[11px] uppercase tracking-widest text-gold">
                  ★ {b.award}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
