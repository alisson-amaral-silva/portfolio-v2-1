export type MetricKey = "LCP" | "INP" | "CLS" | "FCP" | "TTFB";

export type MetricState = {
  id: string;
  name: MetricKey;
  value: number;
  delta?: number;
};
