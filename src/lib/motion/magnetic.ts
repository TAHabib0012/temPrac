/** Primary CTAs — full magnetic pull */
export const MAGNETIC_PRIMARY_STRENGTH = 0.42;

/** Capability tags — ~27.5% of primary (between 25–30%) */
export const MAGNETIC_SUBTLE_STRENGTH = MAGNETIC_PRIMARY_STRENGTH * 0.275;

export const MAGNETIC_PRIMARY_SPRING = {
  stiffness: 280,
  damping: 24,
  mass: 0.55,
} as const;

/** Softer spring so tags lean gently */
export const MAGNETIC_SUBTLE_SPRING = {
  stiffness: 200,
  damping: 32,
  mass: 0.48,
} as const;
