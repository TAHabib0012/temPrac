"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Dark — muted emerald depth wash */
const RADIAL_DARK =
  "absolute inset-0 hidden bg-[radial-gradient(ellipse_140%_95%_at_50%_20%,rgba(46,77,67,0.06)_0%,rgba(46,77,67,0.022)_38%,transparent_58%)] dark:block";

/** Light — crisp studio white top-light */
const RADIAL_LIGHT =
  "absolute inset-0 bg-[radial-gradient(ellipse_125%_95%_at_50%_6%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.44)_26%,rgba(245,245,240,0)_56%)] dark:hidden";

const BLOB_A =
  "absolute -right-[28%] top-[6%] h-[min(100vw,560px)] w-[min(115vw,640px)] rounded-[50%] bg-white/[0.38] blur-[110px] dark:bg-muted-emerald/[0.2] sm:-right-[22%] sm:blur-[130px] md:blur-[150px]";

const BLOB_B =
  "absolute -left-[18%] bottom-[8%] h-[min(90vw,420px)] w-[min(100vw,480px)] rounded-[50%] bg-white/[0.2] blur-[90px] dark:bg-muted-emerald/[0.12] sm:blur-[110px]";

export function HeroAmbientLight() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className={RADIAL_LIGHT} />
      <div className={RADIAL_DARK} />

      {reduceMotion ? (
        <>
          <div className={BLOB_A} />
          <div className={BLOB_B} />
        </>
      ) : (
        <>
          <motion.div
            className={BLOB_A}
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.72, 1, 0.72],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={BLOB_B}
            animate={{
              scale: [1.04, 1, 1.04],
              opacity: [0.62, 0.95, 0.62],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}
    </div>
  );
}
