"use client";

import { Geist } from "next/font/google";
import { ArrowUpRight, Send } from "lucide-react"; 
import { motion } from "framer-motion";

const geistSans = Geist({
  subsets: ["latin"],
});

// Zero-dependency SVG Icons for stability
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Contact() {
  return (
    <section
      id="contact"
      className={`relative w-full scroll-mt-24 bg-background px-6 py-24 md:px-10 md:py-32 lg:px-20 ${geistSans.className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="space-y-10 lg:col-span-7">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                Final Protocol
              </p>
              <h2 className="font-heading-display text-5xl font-medium leading-[0.95] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
                Initiate <br />
                Coordination.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
              Open to <span className="text-foreground font-medium">Strategic Roles</span> and orchestration.
            </p>

            <div className="pt-4">
              <motion.a
                href="mailto:tahmidahmed0012@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-6 overflow-hidden rounded-full bg-foreground px-8 py-5 text-sm font-bold uppercase tracking-[0.3em] text-background transition-all hover:shadow-[0_20px_40px_rgba(var(--primary),0.15)]"
              >
                {/* Subtle Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                
                <span className="relative z-10">Get In Touch</span>
                
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/10 transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-background">
                  <Send size={14} className="ml-0.5 mt-[-1px]" />
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] border border-border bg-card/50 p-8 backdrop-blur-md md:p-10"
            >
              <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                Authorized Nodes
              </h4>

              <ul className="space-y-3">
                {[
                  { name: "LinkedIn Professional", icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/tahmidhabib" },
                  { name: "GitHub Repository", icon: <GithubIcon />, href: "https://github.com/TAHabib0012" },
                  { name: "Executive Briefing", icon: <ArrowUpRight size={18} />, href: "#hero" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all hover:border-border hover:bg-background"
                    >
                      <div className="flex items-center gap-4 text-sm font-semibold text-foreground">
                        <span className="text-primary">{link.icon}</span>
                        {link.name}
                      </div>
                      <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Footer Detail */}
        <div className="mt-32 flex flex-col items-center justify-between gap-6 border-t border-border pt-10 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
            © 2026 Md. Tahmid Ahmed Habib — Sylhet, Bangladesh
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
            <span>24.8949° N</span>
            <span>91.8687° E</span>
          </div>
        </div>
      </div>
    </section>
  );
}