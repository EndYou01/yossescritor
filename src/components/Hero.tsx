import Image from "next/image";
import Link from "next/link";

function Eyebrow() {
  return (
    <p
      className="hero-rise font-sans text-xs uppercase tracking-[0.25em] sm:tracking-[0.4em] text-gold flex items-center gap-3"
      style={{ animationDelay: "0.05s" }}
    >
      <span className="inline-block h-px w-12 bg-gold" />
      Asesoría y coaching literario
    </p>
  );
}

function Headline() {
  return (
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
  );
}

function Lede() {
  return (
    <p className="hero-rise font-serif text-bone-dim text-lg leading-relaxed" style={{ animationDelay: "0.34s" }}>
      Soy <span className="text-bone">Yoss</span> —el autor de ciencia ficción
      cubano más premiado, con más de cuarenta libros publicados y traducidos a
      una docena de idiomas. Trabajo contigo tu novela, tus cuentos o tu guion
      hasta que estén listos para el editor.
    </p>
  );
}

function Ctas() {
  return (
    <div className="hero-rise flex flex-wrap gap-4 font-sans text-sm" style={{ animationDelay: "0.42s" }}>
      <Link
        href="/contacto"
        className="group inline-flex items-center gap-3 bg-blood text-bone px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-blood-bright transition-colors"
      >
        Trabaja conmigo
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
      <a
        href="#asesoria"
        className="inline-flex items-center gap-3 border border-bone/30 text-bone px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:border-bone hover:bg-bone/5 transition-colors backdrop-blur-sm"
      >
        Cómo trabajo
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col overflow-hidden grain"
    >
      {/* Background layers (shared) */}
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

      {/* ─────────────────────────────────────────────────────────────
          MOBILE / TABLET LAYOUT (vertical stack: text → figure)
          The figure is a deliberate, fully-visible element below the
          copy — never crammed behind the headline.
      ───────────────────────────────────────────────────────────── */}
      <div className="lg:hidden relative z-10 flex flex-col min-h-[100svh]">
        {/* Copy */}
        <div className="px-6 pt-24 pb-4 space-y-5">
          <Eyebrow />
          <Headline />
          <div className="max-w-xl">
            <Lede />
          </div>
          <div className="pt-1">
            <Ctas />
          </div>
        </div>

        {/* Figure stage — full body shown as a deliberate, framed element */}
        <div className="relative flex-1 min-h-[50svh] flex items-end justify-center">
          {/* Wordmark behind the figure for depth */}
          <span
            aria-hidden
            className="absolute bottom-[18%] left-1/2 -translate-x-1/2 font-display font-black tracking-[0.12em] text-blood/12 text-[44vw] leading-none pointer-events-none select-none"
          >
            YOSS
          </span>
          {/* Spotlight glow at the feet */}
          <div
            aria-hidden
            className="hero-glow absolute bottom-0 left-1/2 -translate-x-1/2 h-[55%] w-[120%]"
            style={{
              background:
                "radial-gradient(ellipse at bottom, rgba(160,24,24,0.5) 0%, rgba(200,163,90,0.12) 40%, transparent 70%)",
            }}
          />
          <Image
            src="/yoss-hero.png"
            alt="Ilustración de Yoss: sombrero rojo, gafas, camiseta de Superman y botas"
            width={1536}
            height={2752}
            priority
            sizes="(max-width: 1024px) 80vw, 42vw"
            className="hero-figure relative z-[1] h-full w-auto object-contain object-bottom drop-shadow-[0_14px_55px_rgba(0,0,0,0.9)]"
          />
          {/* Base fade so the boots melt into the page */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent pointer-events-none z-[2]"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          DESKTOP LAYOUT (figure on the right, copy on the left)
      ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex relative z-0 flex-col flex-1">
        {/* Big background wordmark */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex justify-center pointer-events-none select-none"
        >
          <span className="font-display font-black tracking-[0.15em] text-blood/15 text-[28vw] leading-none">
            YOSS
          </span>
        </div>

        {/* Figure + glow */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 flex items-end justify-end pointer-events-none select-none"
        >
          <div className="relative flex items-end mr-[3%]">
            <div
              className="hero-glow absolute bottom-0 left-1/2 -translate-x-1/2 h-[62%] w-[150%]"
              style={{
                background:
                  "radial-gradient(ellipse at bottom, rgba(160,24,24,0.55) 0%, rgba(200,163,90,0.14) 38%, transparent 70%)",
              }}
            />
            <Image
              src="/yoss-hero.png"
              alt="Ilustración de Yoss: sombrero rojo, gafas, camiseta de Superman y botas"
              width={1536}
              height={2752}
              priority
              sizes="42vw"
              className="hero-figure relative h-[92svh] w-auto object-contain object-bottom drop-shadow-[0_14px_55px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* Legibility scrims */}
        <div aria-hidden className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/35 via-30% to-transparent to-55%" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-24 pt-40 flex-1 flex flex-col justify-end">
          <div className="max-w-3xl space-y-8">
            <Eyebrow />
            <Headline />
            <div className="max-w-xl">
              <Lede />
            </div>
            <div className="pt-2">
              <Ctas />
            </div>
          </div>
        </div>

        {/* Editorial vertical caption */}
        <span
          aria-hidden
          className="absolute right-7 top-1/2 -translate-y-1/2 rotate-90 origin-center font-sans text-[10px] uppercase tracking-[0.5em] text-bone-dim/50 z-10"
        >
          Est. 1969 · La Habana
        </span>
      </div>

      {/* Bottom rule */}
      <div className="relative z-10 h-px rule-blood mt-auto" />
    </section>
  );
}
