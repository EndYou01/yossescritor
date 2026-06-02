import Image from "next/image";
import { Kicker } from "@/components/Kicker";
import { Particles } from "@/components/ui/particles";

const pillarAccents = [
  { kicker: "flare" as const, text: "text-flare", border: "border-t-flare" },
  { kicker: "teal" as const, text: "text-teal", border: "border-t-teal" },
  { kicker: "acid" as const, text: "text-acid", border: "border-t-acid" },
];

export function OtraVida() {
  const pillars = [
    {
      tag: "Música",
      title: "Tenaz",
      body: "Vocalista de la banda cubana de heavy metal Tenaz. El escenario es el otro taller donde se trabaja la voz.",
    },
    {
      tag: "Artes marciales",
      title: "Armas blancas",
      body: "Practicante de artes marciales y aficionado a las armas blancas. Espada, hacha y la disciplina del tatami.",
    },
    {
      tag: "Rol",
      title: "Árbitro de partidas",
      body: "El escritor —dice él mismo— es un árbitro de rol que decide qué pasa cuando los dados caen mal.",
    },
  ];

  return (
    <section
      id="otra-vida"
      className="relative py-20 sm:py-28 lg:py-32 px-6 bg-ink-soft border-y border-bone/10 grain overflow-hidden"
    >
      {/* Red stage glow from below */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 90%, rgba(236,59,36,0.28) 0%, transparent 60%)",
        }}
      />
      {/* Sparks rising off the stage */}
      <Particles
        className="absolute inset-0"
        quantity={55}
        color="#ec3b24"
        size={0.5}
        staticity={60}
        ease={70}
        vy={-0.25}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 reveal">
          <div className="max-w-2xl">
            <Kicker accent="flare" className="mb-6">
              Otra vida
            </Kicker>
            <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
              No solo de letras
              <br />
              <span className="text-flare italic font-serif font-normal">
                vive el hombre.
              </span>
            </h2>
            <p className="mt-6 font-serif text-bone-dim text-lg">
              Pelo largo, pentagrama al cuello, gafas amarillas. Hay un
              ecosistema entero alrededor de la escritura.
            </p>
          </div>

          {/* Character art with ghost wordmark */}
          <div
            aria-hidden
            className="relative flex items-end gap-2 shrink-0 self-center md:self-end"
          >
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-display font-black tracking-[0.1em] text-flare/15 text-[6rem] sm:text-[9rem] leading-none pointer-events-none select-none">
              METAL
            </span>
            <Image
              src="/yoss-metal.png"
              alt=""
              width={186}
              height={508}
              className="relative h-44 sm:h-56 w-auto object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
            />
            <Image
              src="/yoss-outlaw.png"
              alt=""
              width={208}
              height={502}
              className="relative h-48 sm:h-64 w-auto object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 reveal-stagger">
          {pillars.map((p, i) => {
            const a = pillarAccents[i % pillarAccents.length];
            return (
              <div
                key={p.title}
                className={`group relative bg-ink border border-bone/10 border-t-2 ${a.border} p-8 flex flex-col gap-3 overflow-hidden transition-transform duration-300 hover:-translate-y-1`}
                style={{ ["--d" as string]: i }}
              >
                <div
                  aria-hidden
                  className={`halftone ${a.text} opacity-20 absolute right-0 top-0 h-20 w-20 halftone-fade-t pointer-events-none`}
                />
                <span className={`font-sans text-xs uppercase tracking-[0.3em] ${a.text}`}>
                  {p.tag}
                </span>
                <h3 className="font-display font-bold text-bone text-3xl">
                  {p.title}
                </h3>
                <p className="font-serif text-bone-dim leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
