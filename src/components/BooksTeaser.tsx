import Link from "next/link";
import { books } from "@/data/books";
import { BookCover } from "@/components/BookCover";
import { Kicker } from "@/components/Kicker";

const featured = books.filter((b) => b.cover).slice(0, 3);

// Hard sticker-shadow color per cover, sampled from each one.
const shadow = ["#f3cf12", "#ec3b24", "#2bb8b3"];

export function BooksTeaser() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-6 bg-ink border-y border-bone/10 overflow-hidden">
      {/* Pulp halftone wash behind the shelf */}
      <div
        aria-hidden
        className="halftone-lg text-flare/15 absolute inset-x-0 top-0 h-48 halftone-fade-b pointer-events-none"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
          <div>
            <Kicker accent="flare" className="mb-6">
              La obra
            </Kicker>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
              Cuarenta libros.
              <br />
              <span className="text-flare italic font-serif font-normal">
                Una sola voz.
              </span>
            </h2>
          </div>
          <Link
            href="/obra"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-bone hover:text-acid transition-colors"
          >
            Ver toda la obra
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <ul className="grid grid-cols-3 gap-4 sm:gap-8 reveal-stagger">
          {featured.map((b, i) => (
            <li key={b.title} className="group" style={{ ["--d" as string]: i }}>
              <Link href="/obra" className="block">
                <div
                  className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 [--pc:transparent] group-hover:[--pc:var(--sc)] print-shadow"
                  style={{ ["--sc" as string]: shadow[i % shadow.length] }}
                >
                  <BookCover
                    title={b.title}
                    genre={b.genre}
                    cover={b.cover}
                    sizes="(max-width: 768px) 33vw, 320px"
                  />
                </div>
                <h3 className="mt-4 font-display font-bold text-bone text-base sm:text-xl leading-tight group-hover:text-acid transition-colors">
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
