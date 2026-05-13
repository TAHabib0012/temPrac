"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useRef } from "react";
import {
  MAGNETIC_PRIMARY_SPRING,
  MAGNETIC_PRIMARY_STRENGTH,
} from "@/lib/motion/magnetic";

export type MagneticSpringConfig = {
  stiffness?: number;
  damping?: number;
  mass?: number;
};

export type UseMagneticOptions = {
  strength?: number;
  spring?: MagneticSpringConfig;
};

export function useMagnetic(options: UseMagneticOptions = {}) {
  const strength = options.strength ?? MAGNETIC_PRIMARY_STRENGTH;
  const spring = {
    ...MAGNETIC_PRIMARY_SPRING,
    ...options.spring,
  };

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;
      const { left, top, width, height } = node.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      x.set((event.clientX - cx) * strength);
      y.set((event.clientY - cy) * strength);
    },
    [strength, x, y],
  );

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    motionStyle: { x: springX, y: springY },
    onMouseMove,
    onMouseLeave,
  };
}
