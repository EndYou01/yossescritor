import Image from "next/image";
import Link from "next/link";

export function OtraVidaTeaser() {
  return (
    <section className="relative py-28 px-6 grain overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center gap-12">
        <div className="flex-1">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
            Otra vida
          </p>
          <h2 className="font-display font-bold text-bone text-4xl sm:text-5xl leading-tight">
            No solo de letras
            <br />
            <span className="text-blood-bright italic font-serif font-normal">
              vive el hombre.
            </span>
          </h2>
          <p className="mt-6 max-w-lg font-serif text-bone-dim text-lg leading-relaxed">
            Vocalista de heavy metal en <strong className="text-bone">Tenaz</strong>,
            practicante de artes marciales y árbitro de partidas de rol. Hay un
            ecosistema entero alrededor de la escritura.
          </p>
          <Link
            href="/otra-vida"
            className="group mt-8 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-bone hover:text-gold transition-colors"
          >
            Conoce esa otra vida
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div aria-hidden className="flex items-end justify-center gap-2 shrink-0">
          <Image
            src="/yoss-metal.png"
            alt=""
            width={186}
            height={508}
            className="h-40 sm:h-52 w-auto object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
          />
          <Image
            src="/yoss-outlaw.png"
            alt=""
            width={208}
            height={502}
            className="h-44 sm:h-60 w-auto object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>
    </section>
  );
}
