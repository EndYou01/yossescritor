import { press } from "@/data/site";

export function Press() {
  return (
    <section id="prensa" className="relative py-32 px-6 grain">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
              §06 — Prensa
            </p>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
              Lo que dicen
              <br />
              <span className="text-blood-bright italic font-serif font-normal">
                de él.
              </span>
            </h2>
          </div>
        </div>

        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {press.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[12rem_1fr_auto] items-baseline gap-4 sm:gap-8 py-6 hover:bg-ink-soft transition-colors px-2 -mx-2"
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
