import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col overflow-hidden grain"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 30% 35%, #2a1208 0%, #0b0a08 65%)",
          }}
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 scanlines opacity-30" />
      </div>

      {/* Big background wordmark */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[40%] sm:top-1/2 -translate-y-1/2 z-0 flex justify-center pointer-events-none select-none"
      >
        <span className="font-display font-black tracking-[0.15em] text-blood/15 text-[36vw] lg:text-[28vw] leading-none">
          YOSS
        </span>
      </div>

      {/* Figure + glow (visible at every breakpoint) */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 flex items-end justify-center lg:justify-end pointer-events-none select-none"
      >
        <div className="relative flex items-end lg:mr-[3%]">
          {/* radial glow / spotlight behind the figure */}
          <div
            className="hero-glow absolute bottom-0 left-1/2 -translate-x-1/2 h-[62%] w-[150%]"
            style={{
              background:
                "radial-gradient(ellipse at bottom, rgba(160,24,24,0.55) 0%, rgba(200,163,90,0.14) 38%, transparent 70%)",
            }}
          />
          <div className="hero-figure relative h-[54svh] sm:h-[64svh] lg:h-[92svh] aspect-[1536/2752]">
            <Image
              src="/yoss-hero.png"
              alt="Ilustración de Yoss: sombrero rojo, gafas, camiseta de Superman y botas"
              fill
              priority
              sizes="(max-width: 1024px) 75vw, 42vw"
              className="object-contain object-bottom drop-shadow-[0_14px_55px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
      </div>

      {/* Legibility scrims */}
      <div aria-hidden className="absolute inset-0 z-[1] pointer-events-none">
        {/* mobile: darken the top, where the text sits — figure stays clear below */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-ink from-20% via-ink/55 via-60% to-transparent" />
        {/* desktop: darken only the left third so the headline reads; figure on the right stays bright */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ink via-ink/35 via-30% to-transparent to-55%" />
        {/* bottom fade so the boots melt into the page */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-28 pb-16 lg:pb-24 lg:pt-40 flex-1 flex flex-col justify-start lg:justify-end">
        <div className="max-w-3xl">
          <p
            className="hero-rise font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6 flex items-center gap-3"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="inline-block h-px w-12 bg-gold" />
            Asesoría y coaching literario
          </p>
          <h1 className="font-display font-black text-bone leading-[0.95] text-4xl sm:text-7xl lg:text-8xl lg:text-balance">
            <span className="hero-rise block" style={{ animationDelay: "0.12s" }}>
              Tu manuscrito
            </span>
            <span className="hero-rise block" style={{ animationDelay: "0.19s" }}>
              merece un lector
            </span>
            <span
              className="hero-rise block text-blood-bright italic font-serif font-normal"
              style={{ animationDelay: "0.26s" }}
            >
              con oficio.
            </span>
          </h1>
          <p
            className="hero-rise mt-8 max-w-xl font-serif text-bone-dim text-lg leading-relaxed"
            style={{ animationDelay: "0.34s" }}
          >
            Soy <span className="text-bone">Yoss</span> —el autor de ciencia
            ficción cubano más premiado, con más de treinta libros publicados en
            siete países. Trabajo contigo tu novela, tus cuentos o tu guion
            hasta que estén listos para el editor.
          </p>
          <div
            className="hero-rise mt-10 flex flex-wrap gap-4 font-sans text-sm"
            style={{ animationDelay: "0.42s" }}
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 bg-blood text-bone px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-blood-bright transition-colors"
            >
              Trabaja conmigo
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#asesoria"
              className="inline-flex items-center gap-3 border border-bone/30 text-bone px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:border-bone hover:bg-bone/5 transition-colors backdrop-blur-sm"
            >
              Cómo trabajo
            </a>
          </div>
        </div>
      </div>

      {/* Editorial vertical caption */}
      <span
        aria-hidden
        className="hidden lg:block absolute right-7 top-1/2 -translate-y-1/2 rotate-90 origin-center font-sans text-[10px] uppercase tracking-[0.5em] text-bone-dim/50 z-10"
      >
        Est. 1969 · La Habana
      </span>

      {/* Bottom rule */}
      <div className="relative z-10 h-px rule-blood" />
    </section>
  );
}
