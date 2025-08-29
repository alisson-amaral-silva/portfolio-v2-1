"use client";

import { useReveal } from "@/lib/ui/hooks/useReveal";
import { ReactNode } from "react";

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, className, children }: Props) {
  const { ref, className: anim } = useReveal({
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-16 min-h-[calc(100vh-4rem)] md:flex items-center transition-all duration-700 ease-out will-change-transform ${anim} ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  );
}
