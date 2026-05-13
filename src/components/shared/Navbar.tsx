"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

const NAV_LINKS = [
  // Updated from "Strategic Path" to "Access Dossier"
  { label: "Access Dossier", href: "#dossier", sectionId: "dossier" },
  { label: "Management", href: "#management", sectionId: "management" },
  { label: "Research", href: "#research", sectionId: "research" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
] as const;

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("dossier");
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const sectionOffsets = NAV_LINKS.map((link) => {
        const el = document.getElementById(link.sectionId);
        if (!el) return { id: link.sectionId, offset: 0 };
        return { id: link.sectionId, offset: el.offsetTop };
      });

      // Find the section that is currently most visible in the viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      const currentSection = sectionOffsets.reduce((prev, curr) => {
        return scrollPosition >= curr.offset ? curr : prev;
      });

      if (currentSection.id !== activeId) {
        setActiveId(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    isScrolling.current = true;
    setActiveId(id);
    
    const el = document.getElementById(id);
    if (el) {
      // Offset adjusted to -80 to account for potential fixed headers 
      // or to center the dossier section nicely
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }

    // Allow observer to take back control after smooth scroll finishes
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-min -translate-x-1/2 justify-center px-0 sm:bottom-8 sm:w-auto"
    >
      <div
        className="pointer-events-auto flex w-full items-center justify-center rounded-full border border-border bg-card/60 px-2 py-1.5 shadow-2xl backdrop-blur-2xl dark:border-white/[0.08] dark:bg-card/40 sm:px-3 sm:py-2"
        style={{ WebkitBackdropFilter: "blur(28px) saturate(160%)" }}
      >
        <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          
          <li className="flex items-center justify-center border-r border-border/60 px-2 sm:px-3">
            <button 
              onClick={handleLogoClick}
              className="flex h-9 w-9 items-center justify-center rounded-full transition-all hover:bg-foreground/5 active:scale-90"
            >
              <div className="relative h-5 w-5 sm:h-6 sm:w-6">
                <Image 
                  src="/island.png" 
                  alt="Island Logo" 
                  fill
                  priority
                  className="object-contain invert dark:invert-0 transition-all duration-500" 
                />
              </div>
            </button>
          </li>

          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.sectionId;

            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                  className={cn(
                    "relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[12px] font-medium tracking-tight transition-all duration-500 sm:px-4 sm:text-sm",
                    isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {/* Background Highlight with Framer Motion LayoutId for smooth sliding */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute inset-0 z-0 rounded-full bg-primary/5 shadow-[inset_0_0_0_1px_rgba(46,77,67,0.1)] dark:bg-primary/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  <span
                    className={cn(
                      "relative z-10 h-1 w-1 shrink-0 rounded-full bg-primary transition-all duration-700 ease-in-out",
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )}
                  />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}

          <li className="ml-1 flex items-center border-l border-border/60 pl-1 dark:border-white/[0.1] sm:ml-1.5 sm:pl-2">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}