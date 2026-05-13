"use client";

import { useState } from "react";
import { Geist } from "next/font/google";
import Image from "next/image";
import { ProjectModal } from "@/components/shared/ProjectModal";

const geistSans = Geist({ subsets: ["latin"] });

const PROJECTS = [
  {
    category: "AI Research & NLP",
    title: "MSED Multimodal AI Research",
    image: "/projects/msed.jfif",
    brief: "Ongoing investigation into human emotion and desire inference using BERT and ResNet18, focused on multimodal fusion patterns within the MSED dataset.",
    technicalCore: [
      "Objective: infer emotion/desire signals from text + vision inputs",
      "Models: BERT (language) + ResNet18 (vision) with fusion exploration",
      "Focus: multimodal representation alignment and fusion strategy tuning",
    ],
    stack: ["Python", "PyTorch", "BERT", "Computer Vision"],
  },
  {
    category: "Graphics Engineering",
    title: "Tactical Engine: Zombie Protocol",
    image: "/projects/zombie.jpg",
    brief: "A real-time survival simulation developed in C++/OpenGL featuring a custom collision detection system and callback-driven input handling.",
    technicalCore: [
      "Runtime: real-time simulation loop with deterministic state updates",
      "Systems: custom collision detection and response logic",
      "Input: callback-driven handling for responsive control + events",
    ],
    stack: ["C++", "OpenGL", "GLUT", "Systems Logic"],
  },
  {
    category: "Lead Coordination / Full Stack",
    title: "Institutional Operations Platform",
    image: "/projects/university.jpg",
    brief: "A collaborative university ecosystem designed to centralize academic resources. Managed team synchronization and feature integration as a lead contributor.",
    technicalCore: [
      "System: centralized platform for academic resources and collaboration",
      "Leadership: coordinated team execution + integration checkpoints",
      "Delivery: version-controlled workflow to reduce merge friction and drift",
    ],
    stack: ["Full Stack Web", "Team Leadership", "Version Control"],
  },
];

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="research" className={`relative w-full scroll-mt-24 px-6 py-24 md:px-10 lg:px-16 ${geistSans.className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 space-y-4 md:mb-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">Strategic Deliverables</p>
          <h3 className="font-heading-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">Engineering & Research Initiatives</h3>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((p) => (
            <article 
              key={p.title} 
              className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card/40 backdrop-blur-2xl transition-all duration-500 hover:border-primary/30 hover:bg-card/70 hover:shadow-xl"
            >
              <div className="grid grid-cols-1 gap-10 p-8 lg:grid-cols-10 lg:p-14">
                {/* Image Container */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-muted">
                    <Image 
                      src={p.image} 
                      alt={p.title} 
                      fill 
                      className="object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col justify-center lg:col-span-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">{p.category}</p>
                  <h3 className="mt-4 text-3xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.brief}</p>
                  
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="mt-8 w-fit rounded-full border border-primary/20 bg-primary/5 px-8 py-3 text-[12px] font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
}