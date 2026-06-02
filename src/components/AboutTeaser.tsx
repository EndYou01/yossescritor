import Link from "next/link";
import { stats } from "@/data/site";
import { Kicker } from "@/components/Kicker";
import { NumberTicker } from "@/components/ui/number-ticker";

const statColors = ["text-acid", "text-teal", "text-flare", "text-gold"];

export function AboutTeaser() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-6 grain border-t border-bone/10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-start reveal">
        <div className="lg:col-span-7">
          <Kicker accent="gold" className="mb-6">
            Sobre Yoss
          </Kicker>
          <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
            Biólogo de formación.
            <br />
            <span className="text-gold italic font-serif font-normal">Escritor</span> por vocación.
          </h2>
          <p className="mt-6 max-w-xl font-serif text-bone-dim text-lg leading-relaxed">
            El autor de ciencia ficción cubano más prolífico y premiado —y el
            único residente en la Isla que vive de su pluma. Más de cuarenta
            libros, traducidos a una docena de idiomas.
          </p>
          <Link
            href="/sobre"
            className="group mt-8 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-bone hover:text-gold transition-colors"
          >
            Conoce a Yoss
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-bone/10 border border-bone/10 w-full">
          {stats.map((s, i) => {
            const numeric = Number(s.value);
            return (
              <div key={s.label} className="bg-ink p-6 flex flex-col gap-1">
                <div className={`font-display ${statColors[i % statColors.length]} text-3xl sm:text-4xl font-bold`}>
                  {Number.isFinite(numeric) ? (
                    <NumberTicker value={numeric} delay={0.1 * i} />
                  ) : (
                    s.value
                  )}
                </div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-bone-dim">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
