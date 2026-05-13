"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/shared/Magnetic";
import { cn } from "@/lib/utils";
import { MAGNETIC_PRIMARY_STRENGTH } from "@/lib/motion/magnetic";

type MagneticPrimaryLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function MagneticPrimaryLink({
  href,
  children,
  className,
}: MagneticPrimaryLinkProps) {
  return (
    <Magnetic strength={MAGNETIC_PRIMARY_STRENGTH}>
      <Link
        href={href}
        className={cn(
          "rounded-full border border-muted-emerald/35 bg-muted-emerald/85 px-7 py-3 text-sm font-medium tracking-tight text-white shadow-[0_0_0_1px_rgba(46,77,67,0.25)] transition-[background-color,box-shadow,border-color] duration-300 hover:border-muted-emerald/55 hover:bg-muted-emerald hover:shadow-[0_0_36px_-8px_rgba(46,77,67,0.55)] sm:px-8 sm:text-[15px]",
          className,
        )}
      >
        {children}
      </Link>
    </Magnetic>
  );
}
