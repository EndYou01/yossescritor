type Tone = "flare" | "acid" | "teal" | "ink";

const surface: Record<Tone, string> = {
  flare: "bg-flare text-ink",
  acid: "bg-acid text-ink",
  teal: "bg-teal text-ink",
  ink: "bg-ink-soft text-bone",
};

/**
 * A screenprint-poster marquee band. Words scroll edge to edge with a
 * diamond separator, pausing on hover. Used between sections to inject
 * motion and color into an otherwise dark, text-heavy page.
 */
export function Marquee({
  items,
  tone = "flare",
  reverse = false,
  duration = 34,
}: {
  items: string[];
  tone?: Tone;
  reverse?: boolean;
  duration?: number;
}) {
  // Duplicated once so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div
      className={`group/marquee relative overflow-hidden border-y-2 border-ink/80 py-3 ${surface[tone]}`}
      aria-hidden
    >
      <div
        className={`marquee ${reverse ? "marquee-rev" : ""}`}
        style={{ ["--dur" as string]: `${duration}s` }}
      >
        {loop.map((word, i) => (
          <span
            key={i}
            className="font-display font-black uppercase tracking-[0.12em] text-2xl sm:text-3xl px-6 flex items-center gap-6"
          >
            {word}
            <span className="text-[0.7em] opacity-70">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
