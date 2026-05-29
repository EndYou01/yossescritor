import Link from "next/link";

export function CtaBand() {
  return (
    <section className="relative py-32 px-6 grain border-t border-bone/10 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(160,24,24,0.4) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
          ¿Tienes un manuscrito?
        </p>
        <h2 className="font-display font-black text-bone text-4xl sm:text-6xl leading-[0.95] text-balance">
          Hablemos de tu
          <br />
          <span className="text-blood-bright italic font-serif font-normal">
            próximo libro.
          </span>
        </h2>
        <p className="mt-8 font-serif text-bone-dim text-lg max-w-xl mx-auto">
          Cuéntame en qué punto está y te respondo con una propuesta de trabajo
          y tarifa. Sin compromiso.
        </p>
        <Link
          href="/contacto"
          className="group mt-10 inline-flex items-center gap-3 bg-blood text-bone px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-blood-bright transition-colors font-sans"
        >
          Cuéntame tu proyecto
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
