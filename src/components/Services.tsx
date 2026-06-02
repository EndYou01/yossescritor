import Link from "next/link";
import { services, audience, process } from "@/data/site";
import { Kicker } from "@/components/Kicker";

// Accent rotation pulled from the cover palette. Full literal class
// strings (never build Tailwind names by concatenation) so the JIT
// keeps them.
const accents = [
  { text: "text-acid", bg: "bg-acid", border: "border-acid", soft: "bg-acid/10" },
  { text: "text-teal", bg: "bg-teal", border: "border-teal", soft: "bg-teal/10" },
  { text: "text-flare", bg: "bg-flare", border: "border-flare", soft: "bg-flare/10" },
  { text: "text-gold", bg: "bg-gold", border: "border-gold", soft: "bg-gold/10" },
];

export function Services() {
  return (
    <section
      id="asesoria"
      className="relative py-20 sm:py-28 lg:py-32 px-6 grain overflow-hidden"
    >
      {/* Teal screenprint glow anchoring the section's color identity */}
      <div
        aria-hidden
        className="absolute -top-32 -left-40 h-[34rem] w-[34rem] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16 reveal">
          <div className="lg:col-span-5">
            <Kicker accent="teal" className="mb-6">
              Asesoría
            </Kicker>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
              Trabajo tu
              <br />
              texto contigo,
              <br />
              <span className="text-teal italic font-serif font-normal">
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
            <blockquote className="border-l-4 border-teal pl-6 py-2 font-serif italic text-bone text-xl leading-relaxed">
              &laquo;…y paño de lágrimas. Experto en escuchar lo que te pase,
              ocurrírsele ideas nuevas y darte opciones.&raquo;
            </blockquote>
          </div>
        </div>

        {/* Para quién es */}
        <div className="reveal relative mb-20 border-y-2 border-teal/40 bg-ink-soft p-8 sm:p-10 overflow-hidden">
          <div
            aria-hidden
            className="halftone-lg text-teal/25 absolute -right-6 -top-6 h-32 w-32 halftone-fade-b pointer-events-none"
          />
          <h3 className="font-sans text-xs uppercase tracking-[0.4em] text-teal mb-6">
            Esto es para ti si…
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {audience.map((a) => (
              <li
                key={a}
                className="flex gap-3 font-serif text-bone text-lg leading-relaxed"
              >
                <span className="text-teal shrink-0 font-bold">→</span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div className="reveal">
          <h3 className="font-display font-bold text-bone text-2xl sm:text-3xl mb-8">
            Qué hago con tu manuscrito
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
            {services.map((s, i) => {
              const a = accents[i % accents.length];
              return (
                <li
                  key={s.title}
                  className="group relative bg-ink p-8 flex flex-col gap-3 overflow-hidden transition-colors hover:bg-ink-soft"
                >
                  {/* Accent edge that grows on hover */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 h-full w-1 ${a.bg} scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100`}
                  />
                  <span
                    className={`font-display font-black text-5xl leading-none ${a.text} stroke-text`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display font-bold text-bone text-xl">
                    {s.title}
                  </h4>
                  <p className="font-serif text-bone-dim leading-relaxed">
                    {s.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Cómo trabajamos — horizontal step-by-step.
            Mobile/tablet: a snap carousel you swipe through.
            Desktop: a connected 4-up timeline. */}
        <div className="mt-24">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h3 className="font-display font-bold text-bone text-2xl sm:text-3xl">
              Cómo trabajamos
            </h3>
            <span className="lg:hidden font-sans text-[10px] uppercase tracking-[0.35em] text-bone-dim flex items-center gap-2 animate-pulse">
              Desliza <span aria-hidden>→</span>
            </span>
          </div>

          <ol className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 pb-2 lg:grid lg:grid-cols-4 lg:gap-5 lg:mx-0 lg:px-0 lg:overflow-visible">
            {process.map((p, i) => {
              const a = accents[i % accents.length];
              const last = i === process.length - 1;
              return (
                <li
                  key={p.step}
                  className={`group relative snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-auto bg-ink-soft border-t-2 ${a.border} p-7 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1`}
                >
                  {/* Halftone accent corner */}
                  <div
                    aria-hidden
                    className={`halftone ${a.text} opacity-25 absolute right-0 top-0 h-20 w-20 halftone-fade-t pointer-events-none`}
                  />
                  {/* Connector arrow to the next step (desktop) */}
                  {!last && (
                    <span
                      aria-hidden
                      className={`hidden lg:block absolute -right-5 top-7 ${a.text} text-2xl font-black z-10`}
                    >
                      →
                    </span>
                  )}
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-display font-black text-6xl leading-none ${a.text}`}
                    >
                      {p.step}
                    </span>
                    <span className={`h-2.5 w-2.5 ${a.bg} mb-2 shadow-[2px_2px_0_0_rgba(0,0,0,0.6)]`} />
                  </div>
                  <h4 className="font-display font-bold text-bone text-lg">
                    {p.title}
                  </h4>
                  <p className="font-serif text-bone-dim leading-relaxed">
                    {p.body}
                  </p>
                </li>
              );
            })}
            {/* trailing breathing room so the last card can fully snap */}
            <li aria-hidden className="shrink-0 w-1 lg:hidden" />
          </ol>

          {/* Progress dots (mobile affordance) */}
          <div className="lg:hidden mt-4 flex justify-center gap-2">
            {process.map((p, i) => (
              <span
                key={p.step}
                aria-hidden
                className={`h-1.5 w-1.5 rounded-full ${accents[i % accents.length].bg} opacity-50`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-bone/10 pt-10">
          <p className="font-serif text-bone-dim text-lg max-w-xl">
            Las tarifas se cotizan según el manuscrito y el alcance. Cuéntame
            tu proyecto y te respondo con una propuesta.
          </p>
          <Link
            href="/contacto"
            className="sheen group inline-flex items-center gap-3 bg-flare text-ink px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-acid transition-colors font-sans print-shadow-sm [--pc:#0b0a08]"
          >
            Cuéntame tu proyecto
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
