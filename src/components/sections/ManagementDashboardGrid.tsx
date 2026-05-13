"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  BarChart3, 
  Activity, 
  Layers, 
  Target 
} from "lucide-react";

const METRICS = [
  {
    id: "01",
    label: "Strategic Alignment",
    value: "94%",
    icon: Target,
    trend: "+2.4%",
    description: "Ensuring consistency across high-stakes project milestones and coordination protocols."
  },
  {
    id: "02",
    label: "System Efficiency",
    value: "0.82ms",
    icon: Activity,
    trend: "-12%",
    description: "Drastic reduction in logic execution latency and communication overhead."
  },
  {
    id: "03",
    label: "Project Depth",
    value: "High",
    icon: Layers,
    trend: "Stable",
    description: "Management of high-dimensional research data and multimodal complexity."
  },
  {
    id: "04",
    label: "Execution Rate",
    value: "Optimum",
    icon: BarChart3,
    trend: "+5.1%",
    description: "Maximized resource coordination throughput for institutional delivery."
  }
];

export function ManagementDashboardGrid() {
  const [expandedId, setExpandedId] = useState<string | null>("01");
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col lg:flex-row gap-4 min-h-[450px] w-full py-12">
      {METRICS.map((metric) => {
        const isExpanded = expandedId === metric.id;

        return (
          <motion.div
            key={metric.id}
            layout={!shouldReduceMotion}
            onMouseEnter={() => setExpandedId(metric.id)}
            onClick={() => setExpandedId(metric.id)}
            className={`relative flex cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-500 ${
              isExpanded 
                ? "flex-[3.5] bg-card border-primary/30 shadow-2xl shadow-primary/5" 
                : "flex-1 bg-card/40 border-border hover:bg-card/60"
            }`}
          >
            <div className="flex h-full flex-col justify-between p-8">
              {/* Header Section */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-sm transition-transform duration-500 ${isExpanded ? 'scale-110' : 'scale-100'}`}>
                    <metric.icon size={22} />
                  </div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded-full"
                      >
                        {metric.trend}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60">
                    {metric.label}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {metric.value}
                  </h3>
                </div>
              </div>

              {/* Dynamic Content Section */}
              <div className="relative mt-12">
                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="h-px w-12 bg-primary/30" />
                      <p className="max-w-[320px] text-sm leading-relaxed text-muted-foreground md:text-base">
                        {metric.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-heading-display text-4xl font-medium tracking-tighter text-muted-foreground/10"
                    >
                      {metric.id}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Background Aesthetic ID */}
            {isExpanded && (
              <div className="absolute -bottom-4 -right-2 text-[120px] font-black text-primary/[0.03] select-none pointer-events-none">
                {metric.id}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}