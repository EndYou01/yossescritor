import type { ReactNode } from "react";

type Accent = "gold" | "teal" | "acid" | "flare" | "cyan";

const text: Record<Accent, string> = {
  gold: "text-gold",
  teal: "text-teal",
  acid: "text-acid",
  flare: "text-flare",
  cyan: "text-cyan",
};
const bg: Record<Accent, string> = {
  gold: "bg-gold",
  teal: "bg-teal",
  acid: "bg-acid",
  flare: "bg-flare",
  cyan: "bg-cyan",
};

/**
 * Section eyebrow with a small stamped accent block. The accent color
 * changes per section so scrolling the page reads as a sequence of
 * distinct "rooms" rather than one uniform corridor.
 */
export function Kicker({
  children,
  accent = "gold",
  className = "",
}: {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <p
      className={`font-sans text-xs uppercase tracking-[0.4em] ${text[accent]} flex items-center gap-3 ${className}`}
    >
      <span aria-hidden className={`inline-block h-2.5 w-2.5 ${bg[accent]} shadow-[2px_2px_0_0_rgba(0,0,0,0.6)]`} />
      {children}
    </p>
  );
}
