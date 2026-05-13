"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  executiveCssTransition,
  executiveTransitionThemeToggle,
} from "@/lib/motion/transitions";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-9 w-9 shrink-0 rounded-full border border-transparent"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={cn(
        "relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/90 bg-background/35 text-foreground shadow-sm backdrop-blur-md transition-all dark:border-white/[0.12] dark:bg-white/[0.06] dark:shadow-none",
        executiveCssTransition,
      )}
    >
      <Sun
        strokeWidth={1.75}
        className={cn(
          "absolute h-[17px] w-[17px]",
          executiveTransitionThemeToggle,
          isDark ? "scale-100 opacity-100" : "scale-90 opacity-0",
        )}
        aria-hidden
      />
      <Moon
        strokeWidth={1.75}
        className={cn(
          "absolute h-[17px] w-[17px]",
          executiveTransitionThemeToggle,
          isDark ? "scale-90 opacity-0" : "scale-100 opacity-100",
        )}
        aria-hidden
      />
    </button>
  );
}
