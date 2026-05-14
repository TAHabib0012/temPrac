"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StrategicBrief() {
  return (
    <section 
      id="dossier" 
      className="relative w-full border-y border-border/40 bg-background px-6 py-24 sm:px-10 md:px-14 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Label Side - Personnel Photo & Hex ID */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Personnel Dossier
              </span>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-border/60 bg-muted/10 p-2 shadow-2xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl grayscale transition-all duration-700 hover:grayscale-0">
                {/* Ensure path is /temPrac/me.jpeg for GitHub Pages if needed */}
                <Image 
                  src="/me.jpeg" 
                  alt="Md. Tahmid Ahmed Habib"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[size:100%_4px,3px_100%]" />
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/5 bg-background/80 px-3 py-2.5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                      System Registry
                    </p>
                    <p className="font-mono text-[10px] font-bold tracking-tighter text-primary">
                      0x54.48.41.42.49.42
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex gap-[2px]">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-1 w-1 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                    <span className="text-[7px] font-bold uppercase tracking-widest text-primary/80">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading-display text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Architecting the synergy between <span className="text-primary italic">AI Intelligence</span> and technical project leadership.
            </motion.h3>
            
            <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border/60 pt-10 md:grid-cols-2">
              {/* PM Focus */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Project Orchestration
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I lead technical teams through complex development lifecycles. By blending Agile methodologies with a deep understanding of software architecture, I transform high-level vision into scalable, deployed systems.
                </p>
              </motion.div>
              
              {/* AI/ML Focus */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Neural Intelligence
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Specializing in multimodal deep learning, I leverage architectures like BERT and ResNet to solve real-world problems. My current work focuses on fusion-based classification and optimizing CV/NLP pipelines for performance.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}