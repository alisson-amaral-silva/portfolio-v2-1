"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-hidden
        className="rounded-xl opacity-0 pointer-events-none"
      >
        PT
      </Button>
    );
  }

  const lang = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "pt-BR"
  ).toLowerCase();
  const itPtBr = lang.startsWith("pt");

  const toggle = () => {
    i18n.changeLanguage(itPtBr ? "en" : "pt-BR");
    if (typeof document !== "undefined") {
      document.documentElement.lang = itPtBr ? "en" : "pt-BR";
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={
        itPtBr ? "Switch language to English" : "Trocar idioma para Português"
      }
      className="rounded-xl font-semibold"
      onClick={toggle}
    >
      {itPtBr ? "PT" : "EN"}
    </Button>
  );
}
