import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden grain"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, #2a1208 0%, #0b0a08 65%)",
          }}
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 scanlines opacity-30" />
      </div>

      {/* Big background type */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex justify-center pointer-events-none select-none"
      >
        <span className="font-display font-black tracking-[0.15em] text-blood/15 text-[28vw] leading-none">
          YOSS
        </span>
      </div>

      {/* Yoss figure */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 z-0 hidden lg:flex items-end justify-end pointer-events-none select-none w-[42%] xl:w-[38%]"
      >
        {/* glow behind the figure */}
        <div
          className="absolute bottom-0 right-[8%] h-[70%] w-[60%]"
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(160,24,24,0.45) 0%, transparent 70%)",
          }}
        />
        <Image
          src="/yoss-figure.png"
          alt="Yoss"
          width={404}
          height={1254}
          priority
          className="relative h-[94%] w-auto object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,0,0,0.85)]"
        />
      </div>

      {/* fade so the figure melts into the page bottom */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-ink to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-24 pt-40">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-12 bg-gold" />
            Asesoría y coaching literario
          </p>
          <h1 className="font-display font-black text-bone leading-[0.95] text-balance text-5xl sm:text-7xl lg:text-8xl">
            Tu manuscrito
            <br />
            merece un lector
            <br />
            <span className="text-blood-bright italic font-serif font-normal">
              con oficio.
            </span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-bone-dim text-lg leading-relaxed">
            Soy <span className="text-bone">Yoss</span> —el autor de ciencia
            ficción cubano más premiado, con más de treinta libros publicados en
            siete países. Trabajo contigo tu novela, tus cuentos o tu guion
            hasta que estén listos para el editor.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 font-sans text-sm">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 bg-blood text-bone px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-blood-bright transition-colors"
            >
              Trabaja conmigo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#asesoria"
              className="inline-flex items-center gap-3 border border-bone/30 text-bone px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:border-bone hover:bg-bone/5 transition-colors"
            >
              Cómo trabajo
            </a>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 h-px rule-blood" />
    </section>
  );
}
