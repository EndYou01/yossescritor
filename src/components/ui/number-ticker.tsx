"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Magic UI — NumberTicker.
 * Counts up to `value` with a spring once scrolled into view.
 * Grouping is off by default so years (1988) don't render as "1,988".
 */
export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  grouping = false,
}: {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  grouping?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => {
      motionValue.set(direction === "down" ? startValue : value);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [motionValue, isInView, delay, value, direction, startValue]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = Intl.NumberFormat("en-US", {
        useGrouping: grouping,
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(latest.toFixed(decimalPlaces)));
    });
    return () => unsub();
  }, [springValue, decimalPlaces, grouping]);

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums", className)}
    >
      {startValue}
    </span>
  );
}
