"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function BrandLogo({ children }: { children?: ReactNode }) {
  return (
    <div className="text-lg font-bold tracking-tight">
      {children ?? (
        <Link href="/" className="focus:outline-none focus:ring">
          suaMarca
        </Link>
      )}
    </div>
  );
}
