"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";

export default function LanguageSwitch() {
  const { i18n, isPtBr } = useLanguageSwitch();
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

  const toggle = () => {
    i18n.changeLanguage(isPtBr ? "en" : "pt-BR");
    if (typeof document !== "undefined") {
      document.documentElement.lang = isPtBr ? "en" : "pt-BR";
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={
        isPtBr ? "Switch language to English" : "Trocar idioma para Português"
      }
      className="rounded-xl font-semibold"
      onClick={toggle}
    >
      {isPtBr ? (
        <Image
          alt="icone usa"
          width={20}
          height={20}
          src="/images/usa-icon.png"
        />
      ) : (
        <Image
          alt="icone brasil"
          width={20}
          height={20}
          src="/images/brazil-icon.png"
        />
      )}
    </Button>
  );
}
