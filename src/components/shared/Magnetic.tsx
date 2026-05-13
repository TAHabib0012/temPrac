"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagnetic, type UseMagneticOptions } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type MagneticProps = UseMagneticOptions & {
  children: ReactNode;
  className?: string;
};

export function Magnetic({
  children,
  className,
  strength,
  spring,
}: MagneticProps) {
  const { ref, motionStyle, onMouseMove, onMouseLeave } = useMagnetic({
    strength,
    spring,
  });

  return (
    <motion.div
      ref={ref}
      style={motionStyle}
      className={cn("inline-flex", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}
