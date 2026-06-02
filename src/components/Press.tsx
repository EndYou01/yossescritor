import { press } from "@/data/site";
import { Kicker } from "@/components/Kicker";

export function Press() {
  return (
    <section id="prensa" className="relative py-20 sm:py-28 lg:py-32 px-6 grain overflow-hidden">
      {/* Teal glow */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-[30rem] w-[30rem] rounded-full opacity-[0.10] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-teal), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16 reveal">
          <div>
            <Kicker accent="teal" className="mb-6">
              Prensa
            </Kicker>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
              Lo que dicen
              <br />
              <span className="text-teal italic font-serif font-normal">
                de él.
              </span>
            </h2>
          </div>
        </div>

        <ul className="border-y border-bone/10 divide-y divide-bone/10">
          {press.map((p, i) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-4 sm:grid sm:grid-cols-[3rem_12rem_1fr_auto] sm:items-baseline sm:gap-8 py-5 sm:py-6 hover:bg-ink-soft transition-colors px-2 -mx-2"
              >
                <span className="font-display font-black text-teal text-lg tabular-nums stroke-text shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hidden sm:block font-sans text-xs uppercase tracking-[0.3em] text-teal">
                  {p.outlet}
                </span>
                <div className="min-w-0">
                  <span className="sm:hidden block font-sans text-[10px] uppercase tracking-[0.3em] text-teal mb-1">
                    {p.outlet}
                  </span>
                  <span className="font-serif text-bone text-lg group-hover:text-teal transition-colors">
                    {p.title}
                  </span>
                </div>
                <span className="hidden sm:block font-sans text-bone-dim group-hover:text-teal group-hover:translate-x-1 transition-all">
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
