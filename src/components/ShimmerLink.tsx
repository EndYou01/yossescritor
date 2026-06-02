import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The Magic UI ShimmerButton effect rendered as a Next.js Link, so the
 * primary lead-gen CTAs stay real anchors (prefetch + a11y) while getting
 * the bone shimmer sweep over a blood-red body. Drives the `shimmer-slide`
 * / `spin-around` keyframes registered in globals.css.
 */
export function ShimmerLink({
  href,
  children,
  className,
  background = "var(--color-blood)",
  shimmerColor = "#f4ecd8",
  shimmerSize = "0.05em",
  shimmerDuration = "2.6s",
  borderRadius = "0px",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  background?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  borderRadius?: string;
}) {
  return (
    <Link
      href={href}
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 inline-flex cursor-pointer items-center justify-center gap-3 overflow-hidden whitespace-nowrap border border-bone/15 px-7 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-bone [background:var(--bg)] [border-radius:var(--radius)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className,
      )}
    >
      {/* spark container */}
      <div className="-z-30 absolute inset-0 overflow-visible blur-[2px] [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1]">
          <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      <span className="relative z-10 inline-flex items-center gap-3">
        {children}
      </span>

      {/* Highlight */}
      <div className="absolute size-full rounded-[inherit] shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />

      {/* backdrop */}
      <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
    </Link>
  );
}
