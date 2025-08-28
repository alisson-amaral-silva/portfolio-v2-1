"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function BrandLogo({ children }: { children?: ReactNode }) {
  return (
    <div className="text-2xl font-bold tracking-tight">
      {children ?? (
        <Link
          href="/"
          className="text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring "
        >
          Portf<span className="text-purple-700">olio.</span>
        </Link>
      )}
    </div>
  );
}
