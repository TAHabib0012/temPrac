"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { label: "Systems Engineered", value: 12, suffix: "+" },
  { label: "Research Accuracy", value: 98, suffix: "%" },
  { label: "Uptime Coordination", value: 99, suffix: "%" },
];

function Counter({ target }: { target: number }) {
  const [display, setDisplay] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 1500; // 1.5 seconds
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplay(end);
          clearInterval(timer);
        } else {
          setDisplay(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{display}</span>;
}

export function TrustMetrics() {
  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl border-y border-white/5 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-5xl font-bold tracking-tighter text-white">
                <Counter target={m.value} />
                <span className="text-emerald-500">{m.suffix}</span>
              </div>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}