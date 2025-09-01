import { MetricKey } from "@/lib/cwv/types";

export function ratingFor(
  name: MetricKey,
  value: number
): "good" | "ni" | "poor" {
  switch (name) {
    case "LCP":
      return value <= 2500 ? "good" : value <= 4000 ? "ni" : "poor";
    case "INP":
      return value <= 200 ? "good" : value <= 500 ? "ni" : "poor";
    case "CLS":
      return value <= 0.1 ? "good" : value <= 0.25 ? "ni" : "poor";
    case "FCP":
      return value <= 1800 ? "good" : value <= 3000 ? "ni" : "poor";
    case "TTFB":
      return value <= 800 ? "good" : value <= 1800 ? "ni" : "poor";
  }
}

export function formatValue(name: MetricKey, value: number) {
  if (name === "CLS") return value.toFixed(3);
  if (name === "LCP" || name === "FCP") return `${(value / 1000).toFixed(2)}s`;
  return `${Math.round(value)} ms`;
}
