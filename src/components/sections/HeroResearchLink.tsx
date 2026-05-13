"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { executiveCssTransition } from "@/lib/motion/transitions";

export function HeroResearchLink() {
  return (
    <Link
      href="#research"
      className={cn(
        "inline-flex rounded-full border border-border bg-muted/35 px-7 py-3 text-sm font-medium tracking-tight text-foreground/78 transition-[border-color,background-color,color,box-shadow] hover:border-border hover:bg-muted/55 hover:text-foreground dark:border-white/12 dark:bg-white/[0.03] dark:text-foreground/78 dark:hover:border-white/22 dark:hover:bg-white/[0.06] dark:hover:text-foreground sm:px-8 sm:text-[15px]",
        executiveCssTransition,
      )}
    >
      Read Research
    </Link>
  );
}
