"use client";

import { motion } from "framer-motion";
import { Shield, Target, Zap, Layout } from "lucide-react";

const SKILLS = [
  {
    title: "Project Execution",
    desc: "End-to-end management of high-stakes technical deliverables.",
    icon: <Target className="w-5 h-5" />,
    metrics: "98% Milestone Accuracy"
  },
  {
    title: "System Coordination",
    desc: "Aligning multimodal AI research with institutional infrastructure.",
    icon: <Zap className="w-5 h-5" />,
    metrics: "Cross-Functional Sync"
  },
  {
    title: "Strategic Research",
    desc: "Deep-dive analysis into NLP patterns and computer vision fusion.",
    icon: <Shield className="w-5 h-5" />,
    metrics: "Evidence-Based Design"
  },
  {
    title: "Product Strategy",
    desc: "Bridging the gap between technical complexity and user value.",
    icon: <Layout className="w-5 h-5" />,
    metrics: "Scale-Ready Architectures"
  },
];

export function Expertise() {
  return (
    <section id="management" className="relative w-full py-24 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Operational Matrix</p>
          <h2 className="font-heading-display text-4xl md:text-5xl font-medium text-foreground">Strategic Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-background border border-border text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{skill.desc}</p>
              
              <div className="pt-6 border-t border-border/50">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{skill.metrics}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}