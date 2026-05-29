import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-20 sm:py-28 lg:py-32 px-6 bg-ink-soft border-y border-bone/10 grain"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
            Testimonios
          </p>
          <h2 className="font-display font-bold text-bone text-4xl sm:text-6xl leading-tight">
            Lo que pasa
            <br />
            <span className="text-blood-bright italic font-serif font-normal">
              cuando lo lee él.
            </span>
          </h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {testimonials.map((t) => (
            <li
              key={t.author + t.quote.slice(0, 12)}
              className="bg-ink p-8 flex flex-col gap-6"
            >
              <span className="font-display text-blood-bright text-6xl leading-none">
                &ldquo;
              </span>
              <blockquote className="font-serif text-bone text-lg leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <div className="border-t border-bone/10 pt-4">
                <p className="font-display font-bold text-bone">{t.author}</p>
                <p className="font-sans text-xs uppercase tracking-widest text-bone-dim mt-1">
                  {t.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
