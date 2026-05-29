import Link from "next/link";
import { books } from "@/data/books";
import { BookCover } from "@/components/BookCover";

const featured = books.filter((b) => b.cover).slice(0, 3);

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

        <ul className="grid grid-cols-3 gap-4 sm:gap-8">
          {featured.map((b) => (
            <li key={b.title} className="group">
              <Link href="/obra" className="block">
                <BookCover
                  title={b.title}
                  genre={b.genre}
                  cover={b.cover}
                  sizes="(max-width: 768px) 33vw, 320px"
                />
                <h3 className="mt-4 font-display font-bold text-bone text-base sm:text-xl leading-tight group-hover:text-gold transition-colors">
                  {b.title}
                </h3>
                {b.translations && (
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-widest text-bone-dim">
                    Traducido al inglés
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
