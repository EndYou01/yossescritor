import { awards, stats } from "@/data/site";

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28 lg:py-32 px-6 grain">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
              Sobre Yoss
            </p>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
              ¿Quién va a
              <br />
              leer tu <span className="text-blood-bright">manuscrito?</span>
            </h2>
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
              <strong className="text-bone">Premio David</strong> con la
              colección <em>Timshel</em>. Desde entonces ha publicado más de
              treinta libros traducidos al inglés, francés, italiano, polaco y
              japonés.
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
              Compagina la literatura con el heavy metal —es vocalista del
              grupo <strong className="text-bone">Tenaz</strong>— y con la
              práctica de artes marciales y armas blancas.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 border border-bone/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-ink p-8 flex flex-col items-start gap-2"
            >
              <div className="font-display text-gold text-4xl sm:text-5xl font-bold">
                {s.value}
              </div>
              <div className="font-sans text-xs uppercase tracking-widest text-bone-dim">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="mt-24">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display font-bold text-bone text-2xl sm:text-3xl">
              Premios
            </h3>
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-bone-dim">
              Reconocimientos
            </span>
          </div>
          <ul className="divide-y divide-bone/10 border-y border-bone/10">
            {awards.map((a) => (
              <li
                key={a.year + a.name}
                className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[5rem_1fr_auto] items-baseline gap-4 sm:gap-8 py-5"
              >
                <span className="font-display text-gold text-xl sm:text-2xl tabular-nums">
                  {a.year}
                </span>
                <span className="font-serif text-bone text-lg">{a.name}</span>
                <span className="font-sans text-xs sm:text-sm text-bone-dim text-right">
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
