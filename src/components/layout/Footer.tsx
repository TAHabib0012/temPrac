export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-sm font-medium tracking-tight text-foreground">
              Tahmid Ahmed Habib
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Lead Coordinator | AI Researcher
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/tahmidhabib"
                className="text-xs font-medium text-muted-foreground underline-offset-4 transition-[color,text-decoration-color] hover:text-foreground hover:underline hover:decoration-muted-emerald/60"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/TAHabib0012"
                className="text-xs font-medium text-muted-foreground underline-offset-4 transition-[color,text-decoration-color] hover:text-foreground hover:underline hover:decoration-muted-emerald/60"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-muted-foreground md:text-[13px]">
            <span className="tabular-nums">{year}</span>{" "}
            <span className="text-foreground/20">·</span>{" "}
            Built with Next.js &amp; Executive Design
          </div>

          <div className="flex items-center justify-start gap-2 md:justify-end">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-[ping_2.8s_ease-in-out_infinite] rounded-full bg-muted-emerald/35" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-muted-emerald shadow-[0_0_18px_-8px_rgba(46,77,67,0.7)]" />
            </span>
            <span className="text-xs font-medium text-muted-foreground md:text-[13px]">
              All Systems Nominal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

