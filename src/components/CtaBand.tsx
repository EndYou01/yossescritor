import Link from "next/link";
import { Kicker } from "@/components/Kicker";

export function CtaBand() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 px-6 grain border-t border-bone/10 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(236,59,36,0.35) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="halftone-lg text-acid/15 absolute inset-x-0 top-0 h-40 halftone-fade-b pointer-events-none"
      />
      <div className="relative mx-auto max-w-3xl text-center reveal">
        <Kicker accent="acid" className="mb-6 justify-center">
          ¿Tienes un manuscrito?
        </Kicker>
        <h2 className="font-display font-black text-bone text-4xl sm:text-6xl leading-[0.95] text-balance">
          Hablemos de tu
          <br />
          <span className="text-flare italic font-serif font-normal">
            próximo libro.
          </span>
        </h2>
        <p className="mt-8 font-serif text-bone-dim text-lg max-w-xl mx-auto">
          Cuéntame en qué punto está y te respondo con una propuesta de trabajo
          y tarifa. Sin compromiso.
        </p>
        <Link
          href="/contacto"
          className="sheen group mt-10 inline-flex items-center gap-3 bg-acid text-ink px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-flare hover:text-bone transition-colors font-sans print-shadow [--pc:#0b0a08]"
        >
          Cuéntame tu proyecto
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
