"use client";

import { Geist } from "next/font/google";
import { motion } from "framer-motion";
import { MagneticPrimaryLink } from "@/components/shared/MagneticPrimaryLink";
import { HeroCapabilityTags } from "./HeroCapabilityTags";
import { HeroResearchLink } from "./HeroResearchLink";
import { StatusHeader } from "@/components/shared/StatusHeader";

const geistSans = Geist({
  subsets: ["latin"],
});

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex w-full min-h-screen flex-col justify-center overflow-hidden bg-background px-6 py-20 sm:px-10 md:px-14 lg:px-20 transition-colors duration-500"
    >
      <StatusHeader />

      {/* UPDATED TIMING:
          - Delay dropped from 2.2s to 0.4s (instant feeling)
          - Duration shortened to 0.8s for a snappier "pop"
          - Scale reduced to 1.02 so it doesn't have as far to travel
      */}
      <motion.div 
        initial={{ scale: 1.02, opacity: 0, filter: "brightness(0.8) blur(4px)" }}
        animate={{ scale: 1, opacity: 1, filter: "brightness(1) blur(0px)" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1], 
          delay: 0.4 // This triggers while the preloader is still finishing its vanish
        }}
        className="relative z-10 mx-auto w-full max-w-6xl mt-12 sm:mt-0"
      >
        <div className="space-y-12 md:space-y-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
            
            {/* Left Side: Name & Identity */}
            <div className="lg:col-span-8 space-y-6 md:space-y-10">
              <h1
                id="hero-heading"
                className="font-heading-display text-balance text-6xl font-medium tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]"
              >
                Md. Tahmid <br /> Ahmed Habib
              </h1>

              <div className="pt-2">
                <HeroCapabilityTags />
              </div>
            </div>

            {/* Right Side: Description & Actions */}
            <div className="lg:col-span-4 lg:pt-4 space-y-10">
              <p
                className={`${geistSans.className} text-pretty text-lg leading-relaxed text-muted-foreground border-l-2 border-primary/20 pl-6 md:text-xl lg:text-[1.3rem]`}
              >
                Management-Focused <br />
                <span className="text-foreground font-semibold">Technology Professional</span> <br />
                & Project Coordinator
              </p>

              <div className={`flex flex-col items-start gap-5 ${geistSans.className}`}>
                <MagneticPrimaryLink href="#management">
                  View Strategic Map
                </MagneticPrimaryLink>
                
                <div className="pl-1">
                  <HeroResearchLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Subtle Aesthetic Detail */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }} // Comes in almost immediately
        className="absolute bottom-12 left-6 md:left-14 lg:left-20 hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30"
      >
        <span className="text-primary">System Ver 1.6.2</span>
        <div className="h-px w-8 bg-border" />
        <span>Operational Alignment</span>
      </motion.div>
    </section>
  );
}