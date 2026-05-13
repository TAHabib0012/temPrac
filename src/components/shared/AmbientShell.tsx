"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { executiveTransition } from "@/lib/motion/transitions";

type AmbientShellProps = {
  children: ReactNode;
};

export function AmbientShell({ children }: AmbientShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex min-h-full flex-1 flex-col"
      initial={{ opacity: reduceMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={
        reduceMotion ? { duration: 0 } : executiveTransition
      }
    >
      {children}
    </motion.div>
  );
}
