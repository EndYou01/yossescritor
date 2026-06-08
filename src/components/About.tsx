import Image from "next/image";
import { awards, stats } from "@/data/site";
import { Kicker } from "@/components/Kicker";
import { NumberTicker } from "@/components/ui/number-ticker";

const statColors = ["text-acid", "text-teal", "text-flare", "text-gold"];

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28 lg:py-32 px-6 grain overflow-hidden">
      {/* Gold glow anchoring the biography's refined register */}
      <div
        aria-hidden
        className="absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full opacity-[0.10] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 reveal">
          <div className="lg:col-span-4">
            <Kicker accent="gold" className="mb-6">
              Sobre Yoss
            </Kicker>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
              ¿Quién va a
              <br />
              leer tu{" "}
              <span className="text-gold italic font-serif font-normal">
                manuscrito?
              </span>
            </h2>

            {/* Editorial portrait — Yoss en el trono del Malecón */}
            <figure className="group relative mt-10 max-w-sm overflow-hidden border border-gold/25">
              <Image
                src="/yoss-malecon.webp"
                alt="Yoss sentado en la escultura del Malecón de La Habana"
                width={1256}
                height={1800}
                sizes="(max-width: 1024px) 90vw, 30vw"
                className="w-full h-auto object-cover contrast-[1.05] saturate-[0.92] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
              />
              <div aria-hidden className="absolute inset-0 grain pointer-events-none" />
              <div
                aria-hidden
                className="halftone text-gold opacity-20 absolute right-0 top-0 h-20 w-20 halftone-fade-t pointer-events-none"
              />
              <figcaption className="absolute bottom-3 left-4 font-sans text-[10px] uppercase tracking-[0.35em] text-bone/70">
                El Malecón · La Habana
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-8 space-y-6 font-serif text-bone-dim text-lg leading-relaxed">
            <p>
              <span className="font-display text-bone text-2xl">Yoss</span>{" "}
              (La Habana, 1969) —seudónimo de José Miguel Sánchez Gómez— es
              licenciado en Ciencias Biológicas por la Universidad de La Habana
              y graduado del primer curso de Técnicas Narrativas del Centro de
              Formación Literaria{" "}
              <em className="text-bone">Onelio Jorge Cardoso</em>.
            </p>
            <p>
              Comenzó a escribir a los quince años en los Talleres Literarios.
              Se dio a conocer en 1988 al ganar el{" "}
              <strong className="text-gold">Premio David</strong> con la
              colección <em>Timshel</em>. Desde entonces ha publicado más de
              cuarenta libros, traducidos a una docena de idiomas —del inglés y
              el francés al japonés, el polaco o el chino.
            </p>
            <p>
              Es el autor de ciencia ficción cubano más prolífico y premiado, y
              el único residente en la Isla que vive de su pluma. Imparte
              talleres en Chile, España, Italia, Andorra y Cuba, y dirige los
              talleres cubanos de ciencia ficción{" "}
              <em className="text-bone">Espiral</em> y{" "}
              <em className="text-bone">Espacio Abierto</em>.
            </p>
            <p>
              Ha compaginado la literatura con el heavy metal —fue vocalista
              del grupo <strong className="text-flare">Tenaz</strong> entre 2007
              y 2016— y con la práctica de artes marciales y armas blancas.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 border border-bone/10 reveal">
          {stats.map((s, i) => {
            const numeric = Number(s.value);
            return (
              <div
                key={s.label}
                className="bg-ink p-8 flex flex-col items-start gap-2"
              >
                <div className={`font-display ${statColors[i % statColors.length]} text-4xl sm:text-5xl font-bold`}>
                  {Number.isFinite(numeric) ? (
                    <NumberTicker value={numeric} delay={0.1 * i} />
                  ) : (
                    s.value
                  )}
                </div>
                <div className="font-sans text-xs uppercase tracking-widest text-bone-dim">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards */}
        <div className="mt-24 reveal">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display font-bold text-bone text-2xl sm:text-3xl">
              Premios
            </h3>
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-gold">
              Reconocimientos
            </span>
          </div>
          <ul className="divide-y divide-bone/10 border-y border-bone/10">
            {awards.map((a) => (
              <li
                key={a.year + a.name}
                className="group py-5 sm:grid sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-8 hover:bg-ink-soft transition-colors px-2 -mx-2"
              >
                <div className="flex items-baseline gap-4 sm:contents">
                  <span className="font-display text-gold text-xl sm:text-2xl tabular-nums shrink-0">
                    {a.year}
                  </span>
                  <span className="font-serif text-bone text-lg group-hover:text-gold transition-colors">
                    {a.name}
                  </span>
                </div>
                <span className="mt-1.5 block pl-[3.5rem] sm:mt-0 sm:pl-0 font-sans text-xs sm:text-sm text-bone-dim sm:text-right">
                  {a.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
