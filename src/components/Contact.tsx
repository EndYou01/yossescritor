import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-32 px-6 bg-ink-soft border-t border-bone/10"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
          §07 — Contacto
        </p>
        <h2 className="font-display font-bold text-bone text-5xl sm:text-7xl leading-[0.95] text-balance">
          ¿Lector, editor,
          <br />
          alumno o
          <br />
          <span className="text-blood-bright italic font-serif font-normal">
            periodista?
          </span>
        </h2>
        <p className="mt-8 font-serif text-bone-dim text-lg max-w-2xl mx-auto">
          Escríbele directo. Si es por asesoría, incluye un resumen del
          proyecto y la extensión. Si es prensa, tu medio y plazo.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4 font-sans text-sm">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-gold transition-colors"
          >
            {site.email}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-bone/30 text-bone px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:border-bone hover:bg-bone/5 transition-colors"
          >
            Instagram · {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
