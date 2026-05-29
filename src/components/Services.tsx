import { services, audience, process } from "@/data/site";

export function Services() {
  return (
    <section id="asesoria" className="relative py-32 px-6 grain">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
              §01 — Asesoría
            </p>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
              Trabajo tu
              <br />
              texto contigo,
              <br />
              <span className="text-blood-bright italic font-serif font-normal">
                no por ti.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif text-bone-dim text-lg leading-relaxed">
              Si tienes un manuscrito atascado, una idea sin forma o un libro
              de cuentos que no termina de encajar, lo leo, lo discuto contigo
              y te devuelvo un plan para terminarlo.
            </p>
            <blockquote className="border-l-2 border-blood pl-6 py-2 font-serif italic text-bone text-xl leading-relaxed">
              &laquo;…y paño de lágrimas. Experto en escuchar lo que te pase,
              ocurrírsele ideas nuevas y darte opciones.&raquo;
            </blockquote>
          </div>
        </div>

        {/* Para quién es */}
        <div className="mb-20 border border-bone/10 bg-ink-soft p-8 sm:p-10">
          <h3 className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
            Esto es para ti si…
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {audience.map((a) => (
              <li
                key={a}
                className="flex gap-3 font-serif text-bone text-lg leading-relaxed"
              >
                <span className="text-blood-bright shrink-0">→</span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <h3 className="font-display font-bold text-bone text-2xl sm:text-3xl mb-8">
          Qué hago con tu manuscrito
        </h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="bg-ink p-8 flex flex-col gap-3 hover:bg-ink-soft transition-colors"
            >
              <span className="font-display text-gold text-sm tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="font-display font-bold text-bone text-xl">
                {s.title}
              </h4>
              <p className="font-serif text-bone-dim leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Cómo trabajamos */}
        <h3 className="font-display font-bold text-bone text-2xl sm:text-3xl mt-24 mb-8">
          Cómo trabajamos
        </h3>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 border border-bone/10">
          {process.map((p) => (
            <li key={p.step} className="bg-ink p-8 flex flex-col gap-3">
              <span className="font-display text-blood-bright text-4xl font-black tabular-nums">
                {p.step}
              </span>
              <h4 className="font-display font-bold text-bone text-lg">
                {p.title}
              </h4>
              <p className="font-serif text-bone-dim leading-relaxed">
                {p.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-bone/10 pt-10">
          <p className="font-serif text-bone-dim text-lg max-w-xl">
            Las tarifas se cotizan según el manuscrito y el alcance. Cuéntame
            tu proyecto y te respondo con una propuesta.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 bg-blood text-bone px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-blood-bright transition-colors font-sans"
          >
            Cuéntame tu proyecto →
          </a>
        </div>
      </div>
    </section>
  );
}
