import Link from "next/link";
import { press } from "@/data/site";
import { Kicker } from "@/components/Kicker";

const featured = press.slice(0, 3);

export function PressTeaser() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-6 bg-ink-soft border-y border-bone/10">
      <div className="mx-auto max-w-7xl reveal">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Kicker accent="teal" className="mb-6">
              Prensa
            </Kicker>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
              Lo que dicen
              <br />
              <span className="text-teal italic font-serif font-normal">
                de él.
              </span>
            </h2>
          </div>
          <Link
            href="/prensa"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-bone hover:text-teal transition-colors"
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
                className="group flex flex-col gap-1 sm:grid sm:grid-cols-[12rem_1fr_auto] sm:items-baseline sm:gap-8 py-5 hover:bg-ink transition-colors px-2 -mx-2"
              >
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-teal">
                  {p.outlet}
                </span>
                <span className="font-serif text-bone text-lg group-hover:text-teal transition-colors">
                  {p.title}
                </span>
                <span className="hidden sm:block font-sans text-bone-dim group-hover:text-bone group-hover:translate-x-1 transition-all">
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
