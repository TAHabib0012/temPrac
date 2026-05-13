"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Globe, GitBranch } from "lucide-react";

export function ProjectModal({ isOpen, onClose, project }: any) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop - Softened to match the beige theme */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative h-full max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-10 rounded-full bg-background/50 p-2 text-foreground transition-colors hover:bg-primary hover:text-background"
            >
              <X size={20} />
            </button>

            <div className="h-full overflow-y-auto p-8 md:p-12">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Left Side: Context */}
                <div className="space-y-8">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                      {project.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Technical Core</h4>
                    <ul className="space-y-3">
                      {project.technicalCore.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Stack & Metrics */}
                <div className="space-y-8 rounded-3xl bg-background/50 p-8 border border-border">
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      <Cpu size={16} className="text-primary" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech: string) => (
                        <span key={tech} className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-medium text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Project Status</span>
                      <span className="font-medium text-primary">Verified Baseline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}