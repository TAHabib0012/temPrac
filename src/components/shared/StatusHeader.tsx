"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function StatusHeader() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-8 left-0 z-20 w-full px-6 md:px-10 lg:px-20">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-4">
        {/* Left: System Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">
            System: <span className="text-primary">Operational</span>
          </p>
          <span className="hidden h-4 w-[1px] bg-border/60 sm:block" />
          <p className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Mode: <span className="text-foreground">Strategic Coordination</span>
          </p>
        </div>

        {/* Right: Live Data */}
        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-2">
            <span className="text-muted-foreground/60">Local Time:</span>
            <span className="text-foreground tabular-nums">{time}</span>
          </div>
          <div className="hidden gap-2 md:flex">
            <span className="text-muted-foreground/60">Origin:</span>
            <span className="text-foreground">Sylhet, BD</span>
          </div>
        </div>
      </div>
    </div>
  );
}