"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVanishStarted, setIsVanishStarted] = useState(false);

  useEffect(() => {
    // Phase 1: Draw-on simulation (Fade in) & Phase 2: The Hold
    const vanishTimer = setTimeout(() => {
      setIsVanishStarted(true);
    }, 1600); // The "Ceremony" duration before dissolving

    // Phase 3: Complete sequence and unmount
    const completeTimer = setTimeout(onComplete, 3000);

    return () => {
      clearTimeout(vanishTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0c0c0c]"
    >
      <div className="relative flex flex-col items-center">
        {/* THE CREST (island.png) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: isVanishStarted ? 0 : 1, 
            scale: isVanishStarted ? 1.08 : 1, // Phase 3c: Scale Micro-Burst
            filter: isVanishStarted ? "blur(8px)" : "blur(0px)" // Phase 3d: Blur
          }}
          transition={{ 
            duration: isVanishStarted ? 1.2 : 1.2, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="relative h-32 w-32 md:h-48 md:w-48"
          style={{
            // PHASE 3a: RADIAL UN-DRAW
            // This mask expands a transparent hole from the center outward
            WebkitMaskImage: isVanishStarted 
              ? "radial-gradient(circle, transparent 0%, black 30%, black 100%)" 
              : "radial-gradient(circle, black 100%, black 100%)",
            WebkitMaskSize: isVanishStarted ? "600% 600%" : "100% 100%",
            WebkitMaskPosition: "center",
            maskImage: isVanishStarted 
              ? "radial-gradient(circle, transparent 0%, black 30%, black 100%)" 
              : "radial-gradient(circle, black 100%, black 100%)",
            maskSize: isVanishStarted ? "600% 600%" : "100% 100%",
            maskPosition: "center",
            transition: "mask-size 1.4s cubic-bezier(0.4, 0, 0.2, 1), -webkit-mask-size 1.4s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <Image
            src="/island.png" // Updated source
            alt="Island Crest"
            fill
            className="object-contain brightness-110 sepia-[0.1]" 
            priority
          />
        </motion.div>

        {/* Phase 3b: Subtext Dissolve */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVanishStarted ? 0 : 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 overflow-hidden"
        >
          <p className="font-heading-display text-[10px] font-bold uppercase tracking-[0.8em] text-[#E8E0D4]/40">
            System Initialization
          </p>
        </motion.div>
      </div>

      {/* Subtle Film Grain (Optional for that Saisei texture) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </motion.div>
  );
}