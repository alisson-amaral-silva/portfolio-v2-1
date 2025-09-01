"use client";

import CoreWebVitalsClient from "@/components/organisms/CoreWebVitalsClient";
import { useTranslation } from "react-i18next";

export default function CoreWebVitalsPage() {
  const { t } = useTranslation("corewv");
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {t("description")}
        </p>
      </header>
      <CoreWebVitalsClient />
    </main>
  );
}
