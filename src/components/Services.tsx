import { services, site } from "@/data/site";

export function Services() {
  return (
    <section id="asesoria" className="relative py-32 px-6 grain">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
              §04 — Asesoría
            </p>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
              Coach &amp;
              <br />
              asesor
              <br />
              <span className="text-blood-bright italic font-serif font-normal">
                literario.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif text-bone-dim text-lg leading-relaxed">
              Si tienes un manuscrito atascado, una idea sin forma o un libro
              de cuentos que no termina de encajar, Yoss lo lee, lo discute
              contigo y te devuelve un plan.
            </p>
            <blockquote className="border-l-2 border-blood pl-6 py-2 font-serif italic text-bone text-xl leading-relaxed">
              &laquo;…y paño de lágrimas. Experto en escuchar lo que te pase,
              ocurrírsele ideas nuevas y darte opciones.&raquo;
            </blockquote>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="bg-ink p-8 flex flex-col gap-3 hover:bg-ink-soft transition-colors"
            >
              <span className="font-display text-gold text-sm tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-bold text-bone text-xl">
                {s.title}
              </h3>
              <p className="font-serif text-bone-dim leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-bone/10 pt-10">
          <p className="font-serif text-bone-dim text-lg max-w-xl">
            Tarifas y paquetes se cotizan según el manuscrito. Escríbele con un
            resumen del proyecto y la extensión.
          </p>
          <a
            href={`mailto:${site.email}?subject=Asesor%C3%ADa%20literaria`}
            className="inline-flex items-center gap-3 bg-blood text-bone px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-blood-bright transition-colors font-sans"
          >
            Solicitar asesoría →
          </a>
        </div>
      </div>
    </section>
  );
}
