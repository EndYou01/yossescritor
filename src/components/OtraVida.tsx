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
      className="relative py-32 px-6 bg-ink-soft border-y border-bone/10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
            §05 — Otra vida
          </p>
          <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
            No solo de letras
            <br />
            <span className="text-blood-bright italic font-serif font-normal">
              vive el hombre.
            </span>
          </h2>
          <p className="mt-6 font-serif text-bone-dim text-lg">
            Pelo largo, pentagrama al cuello, gafas amarillas. Hay un
            ecosistema entero alrededor de la escritura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {pillars.map((p) => (
            <div key={p.title} className="bg-ink p-8 flex flex-col gap-3">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
                {p.tag}
              </span>
              <h3 className="font-display font-bold text-bone text-3xl">
                {p.title}
              </h3>
              <p className="font-serif text-bone-dim leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
