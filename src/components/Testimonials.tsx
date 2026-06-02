import { testimonials } from "@/data/site";
import { Kicker } from "@/components/Kicker";

const cardAccents = [
  { text: "text-acid", border: "border-t-acid", bar: "bg-acid" },
  { text: "text-teal", border: "border-t-teal", bar: "bg-teal" },
  { text: "text-flare", border: "border-t-flare", bar: "bg-flare" },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-20 sm:py-28 lg:py-32 px-6 bg-ink-soft border-y border-bone/10 grain overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16 reveal">
          <Kicker accent="acid" className="mb-6">
            Testimonios
          </Kicker>
          <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
            Lo que pasa
            <br />
            <span className="text-acid italic font-serif font-normal">
              cuando lo lee él.
            </span>
          </h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-5 reveal-stagger">
          {testimonials.map((t, i) => {
            const a = cardAccents[i % cardAccents.length];
            return (
              <li
                key={t.author + t.quote.slice(0, 12)}
                className={`group relative bg-ink border border-bone/10 border-t-2 ${a.border} p-8 flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-1`}
                style={{ ["--d" as string]: i }}
              >
                <span
                  className={`font-display ${a.text} text-7xl leading-[0.6] h-8`}
                >
                  &ldquo;
                </span>
                <blockquote className="font-serif text-bone text-lg leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-3 border-t border-bone/10 pt-4">
                  <span aria-hidden className={`h-8 w-1 ${a.bar} shrink-0`} />
                  <div>
                    <p className="font-display font-bold text-bone">{t.author}</p>
                    <p className="font-sans text-xs uppercase tracking-widest text-bone-dim mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
