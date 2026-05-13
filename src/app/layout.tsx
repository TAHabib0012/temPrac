"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { AmbientShell } from "@/components/shared/AmbientShell";
import { Navbar } from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { BackToTop } from "@/components/shared/BackToTop";
import { Preloader } from "@/components/shared/Preloader"; // Ensure you create this file next
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body 
        className="flex min-h-full flex-col bg-background antialiased selection:bg-primary/20 selection:text-primary"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <AnimatePresence mode="wait">
            {loading ? (
              <Preloader key="loader" onComplete={() => setLoading(false)} />
            ) : (
              <AmbientShell key="main-content">
                {/* Executive Logo Overlay */}
                <Link 
                  href="/" 
                  className="fixed top-8 left-8 z-[110] transition-all hover:opacity-80 active:scale-95 group"
                >
                  <div className="relative">
                    <Image 
                      src="/logof.png" 
                      alt="Tahmid Logo" 
                      width={180}   
                      height={45} 
                      priority 
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03] dark:invert-0 invert" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                  </div>
                </Link>

                <main className="flex-grow">
                  {children}
                </main>
                
                <Navbar />
                <BackToTop />
              </AmbientShell>
            )}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}