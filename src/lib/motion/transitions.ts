import type { Transition } from "framer-motion";

/** Smooth, heavy out-expo — restrained, cinematic pacing */
export const executiveEase = [0.16, 1, 0.3, 1] as const;

export const executiveTransition = {
  duration: 0.8,
  ease: executiveEase,
} satisfies Transition;

/** For Tailwind `transition-*` utilities — matches `executiveTransition` */
export const executiveCssTransition =
  "duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]" as const;

/** Theme toggle icon crossfade — matches `executiveTransition` */
export const executiveTransitionThemeToggle =
  "transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]" as const;
