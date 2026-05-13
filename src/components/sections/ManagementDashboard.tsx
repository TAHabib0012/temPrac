import { Geist } from "next/font/google";
import { ManagementDashboardGrid } from "@/components/sections/ManagementDashboardGrid";

const geistSans = Geist({
  subsets: ["latin"],
});

export function ManagementDashboard() {
  return (
    <section
      id="management"
      aria-labelledby="management-dashboard-heading"
      className={`relative w-full scroll-mt-24 px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32 ${geistSans.className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-[12px] dark:border-white/10 dark:from-white/[0.06] dark:via-white/[0.03]">
          <div className="grid grid-cols-1 gap-14 px-7 py-12 md:px-10 md:py-14 lg:grid-cols-2 lg:gap-16 lg:px-14 lg:py-16">
            <div className="flex flex-col">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground opacity-60">
                NexÉtoile Era
              </p>
              <h2
                id="management-dashboard-heading"
                className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
              >
                Management &amp; Operations
              </h2>

              <p className="mt-7 max-w-prose text-base leading-relaxed text-muted-foreground md:text-[17px] md:leading-[1.85]">
                I designed a coordination-first operating rhythm built on{" "}
                <span className="font-medium text-foreground/90">
                  Operational Synchronization
                </span>{" "}
                and{" "}
                <span className="font-medium text-foreground/90">
                  Strategic Resource Allocation
                </span>
                —aligning people, priorities, and delivery systems so execution
                stays calm, visible, and consistently measurable.
              </p>
            </div>

            <div className="relative min-h-[240px] lg:min-h-[360px]">
              <ManagementDashboardGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

