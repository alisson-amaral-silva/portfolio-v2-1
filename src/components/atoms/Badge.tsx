import { MetricKey } from "@/lib/cwv/types";
import { ratingFor } from "@/lib/ui/cwv/utils";
import { useTranslation } from "react-i18next";

export function Badge({ name, value }: { name: MetricKey; value: number }) {
  const { t } = useTranslation("corewv");
  const rating = ratingFor(name, value);
  const cls =
    rating === "good"
      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
      : rating === "ni"
      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      : "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300";
  const label = t(`rating.${rating}`);
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${cls}`}
    >
      {label}
    </span>
  );
}
