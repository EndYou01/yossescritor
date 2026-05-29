import Link from "next/link";
import { press } from "@/data/site";

const featured = press.slice(0, 3);

export function PressTeaser() {
  return (
    <section className="relative py-28 px-6 bg-ink-soft border-y border-bone/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
              Prensa
            </p>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
              Lo que dicen
              <br />
              <span className="text-blood-bright italic font-serif font-normal">
                de él.
              </span>
            </h2>
          </div>
          <Link
            href="/prensa"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-bone hover:text-gold transition-colors"
          >
            Ver toda la prensa
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {featured.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[12rem_1fr_auto] items-baseline gap-4 sm:gap-8 py-5 hover:bg-ink transition-colors px-2 -mx-2"
              >
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
                  {p.outlet}
                </span>
                <span className="font-serif text-bone text-lg group-hover:text-gold transition-colors">
                  {p.title}
                </span>
                <span className="font-sans text-bone-dim group-hover:text-bone group-hover:translate-x-1 transition-all">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
