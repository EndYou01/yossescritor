import Image from "next/image";
import Link from "next/link";
import { Kicker } from "@/components/Kicker";

export function OtraVidaTeaser() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-6 grain overflow-hidden">
      {/* Red stage glow from below — the metal-show energy */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 78% 100%, rgba(236,59,36,0.30) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row md:items-center gap-12">
        <div className="flex-1">
          <Kicker accent="flare" className="mb-6">
            Otra vida
          </Kicker>
          <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
            No solo de letras
            <br />
            <span className="text-flare italic font-serif font-normal">
              vive el hombre.
            </span>
          </h2>
          <p className="mt-6 max-w-lg font-serif text-bone-dim text-lg leading-relaxed">
            Vocalista de heavy metal en{" "}
            <strong className="text-bone">Tenaz</strong>, practicante de artes
            marciales y árbitro de partidas de rol. Hay un ecosistema entero
            alrededor de la escritura.
          </p>
          <Link
            href="/otra-vida"
            className="group mt-8 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-bone hover:text-flare transition-colors"
          >
            Conoce esa otra vida
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="relative flex items-end justify-center gap-2 shrink-0">
          {/* Ghost wordmark behind the figures */}
          <span
            aria-hidden
            className="absolute bottom-2 left-1/2 -translate-x-1/2 font-display font-black tracking-[0.1em] text-flare/15 text-[7rem] sm:text-[10rem] leading-none pointer-events-none select-none"
          >
            METAL
          </span>
          <Image
            src="/yoss-metal.png"
            alt=""
            aria-hidden
            width={186}
            height={508}
            className="relative h-40 sm:h-52 w-auto object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
          />
          <Image
            src="/yoss-outlaw.png"
            alt=""
            aria-hidden
            width={208}
            height={502}
            className="relative h-44 sm:h-60 w-auto object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>
    </section>
  );
}
