"use client";

import { motion } from "framer-motion";
import { FileText, Code2, Terminal } from "lucide-react";

const LOG_ENTRIES = [
  {
    category: "Graphics Engineering",
    title: "Algorithm Implementation & Optimization",
    problem: "Merging Bresenham’s line and circle algorithms into a unified interactive C++ system.",
    result: "Achieved seamless real-time rendering with user-defined coordinate inputs via OpenGL.",
    tech: ["C++", "OpenGL", "Algorithms"]
  },
  {
    category: "System Configuration",
    title: "Environment Architecting",
    problem: "Resolving complex dependency conflicts between SFML, CMake, and MinGW compilers.",
    result: "Developed a stable build-pipeline for course-specific graphics implementations.",
    tech: ["CMake", "MinGW", "SFML"]
  },
  {
    category: "System Logic",
    title: "Version Synchronization",
    problem: "Troubleshooting library versioning and camera index overhead in Python-based environments.",
    result: "Stabilized real-time processing feeds for localized hardware deployment.",
    tech: ["Python", "OpenCV", "NumPy"]
  }
];

export function Research() {
  return (
    <section id="research" className="bg-background py-24 px-6 lg:px-20 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-4 text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Technical Documentation</p>
          <h2 className="font-heading-display text-5xl md:text-6xl font-medium text-foreground">Logic & Execution</h2>
        </div>

        <div className="space-y-12">
          {LOG_ENTRIES.map((entry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-border/50 last:border-0"
            >
              <div className="md:col-span-3 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">{entry.category}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.tech.map(t => (
                    <span key={t} className="text-[9px] px-2 py-0.5 rounded-full border border-border bg-card/50 text-muted-foreground font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {entry.title}
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Terminal size={14} className="text-primary mt-1 shrink-0" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="text-foreground font-semibold">Constraint:</span> {entry.problem}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Code2 size={14} className="text-primary mt-1 shrink-0" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="text-foreground font-semibold">Resolution:</span> {entry.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 flex items-start justify-end hidden md:flex">
                <div className="p-4 rounded-2xl bg-card border border-border opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <FileText className="text-primary" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}