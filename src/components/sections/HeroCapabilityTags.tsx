"use client";

import { Geist } from "next/font/google";
import { Magnetic } from "@/components/shared/Magnetic";
import {
  MAGNETIC_SUBTLE_SPRING,
  MAGNETIC_SUBTLE_STRENGTH,
} from "@/lib/motion/magnetic";

const geistSans = Geist({
  subsets: ["latin"],
});

const CAPABILITY_TAGS = [
  "Project Execution",
  "System Coordination",
  "Strategic Research",
  "Product Strategy",
] as const;

export function HeroCapabilityTags() {
  return (
    <ul
      className={`flex list-none flex-wrap gap-2.5 md:gap-3 ${geistSans.className}`}
      aria-label="Core capabilities"
    >
      {CAPABILITY_TAGS.map((tag) => (
        <li key={tag}>
          <Magnetic strength={MAGNETIC_SUBTLE_STRENGTH} spring={MAGNETIC_SUBTLE_SPRING}>
            <span className="inline-flex rounded-full border border-border bg-muted/45 px-3.5 py-2 text-[13px] font-medium tracking-tight text-foreground/72 shadow-none transition-[box-shadow,border-color,background-color,color] duration-300 ease-out hover:border-muted-emerald/50 hover:bg-muted-emerald/14 hover:text-foreground hover:shadow-[0_0_28px_-8px_rgba(46,77,67,0.32)] dark:border-white/10 dark:bg-white/[0.035] dark:text-foreground/74 dark:hover:bg-muted-emerald/[0.08] dark:hover:text-foreground dark:hover:shadow-[0_0_36px_-4px_rgba(46,77,67,0.65),0_0_14px_-6px_rgba(46,77,67,0.35)] sm:px-4">
              {tag}
            </span>
          </Magnetic>
        </li>
      ))}
    </ul>
  );
}
