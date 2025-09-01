"use client";

import type { Metric } from "web-vitals";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { MetricKey, MetricState } from "@/lib/cwv/types";
import { Badge } from "../atoms/Badge";
import { formatValue } from "@/lib/ui/cwv/utils";

export default function CoreWebVitalsClient() {
  const { t } = useTranslation("corewv");
  const [metrics, setMetrics] = useState<
    Partial<Record<MetricKey, MetricState>>
  >({});

  useEffect(() => {
    const upd = (m: Metric) =>
      setMetrics((prev) => ({
        ...prev,
        [m.name as MetricKey]: {
          id: m.id,
          name: m.name as MetricKey,
          value: m.value,
          delta: m.delta,
        },
      }));
    onLCP(upd);
    onINP(upd);
    onCLS(upd);
    onFCP(upd);
    onTTFB(upd);
  }, []);

  const cards: MetricKey[] = ["LCP", "INP", "CLS", "FCP", "TTFB"];

  const raw = t("tips", { returnObjects: true }) as unknown;
  const tipList: string[] = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <>
      <section
        aria-label="Métricas em tempo real"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {cards.map((key) => {
          const m = metrics[key];
          return (
            <article
              key={key}
              className="rounded-2xl border border-zinc-200/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/60"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  {t(`labels.${key}`)}
                </h2>
                <Badge
                  name={key}
                  value={m?.value ?? (key === "CLS" ? 0 : 9999)}
                />
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-bold tabular-nums">
                  {m ? formatValue(key, m.value) : "—"}
                </span>
                {typeof m?.delta === "number" && m.delta !== 0 && (
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {m.delta > 0 ? "▲" : "▼"}{" "}
                    {formatValue(key, Math.abs(m.delta))}
                  </span>
                )}
              </div>

              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                {t(`goals.${key}`)}
              </p>
            </article>
          );
        })}

        <article className="col-span-full rounded-2xl border border-zinc-200/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/60">
          <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            {t("tipsTitle")}
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-600 dark:text-zinc-300">
            {tipList?.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </article>
      </section>
      <section
        aria-label="Explicações dos Core Web Vitals"
        className="mt-8 space-y-3"
      >
        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {t("aboutTitle")}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((key) => (
            <article
              key={key}
              className="rounded-xl border border-zinc-200/70 bg-white/70 p-4 text-sm shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/60"
            >
              <h4 className="font-medium text-zinc-800 dark:text-zinc-100">
                {t(`labels.${key}`)}
              </h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                {t(`about.${key}`)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
