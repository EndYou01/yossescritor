import type { CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

/**
 * Magic UI — AnimatedShinyText. A highlight sweeps across the text.
 * Re-themed: the base is gold-dim and the sweep is bone, so it reads as
 * gilt catching light rather than the stock grey/white.
 */
export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <span
      style={{ "--shiny-width": `${shimmerWidth}px` } as CSSProperties}
      className={cn(
        "text-gold-dim",
        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shine gradient — bone highlight travelling across the gilt
        "bg-gradient-to-r from-transparent via-bone/90 via-50% to-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
};
