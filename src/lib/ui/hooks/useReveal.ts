"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2, ...options }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  const className = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-2";

  return { ref, visible, className };
}
