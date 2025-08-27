"use client";

import BrandLogo from "@/components/atoms/BrandLogo";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import LanguageSwitch from "@/components/atoms/LanguageSwitch";
import DesktopNav from "@/components/organisms/DesktopNav";
import MobileNavSheet from "@/components/organisms/MobileNavSheet";
import { CTA, NavItem } from "@/lib/nav/types";
import { useTranslation } from "react-i18next";
import { ReactNode, useEffect, useState } from "react";

export default function HeaderNav({
  items,
  cta,
  logo,
  endSlot,
}: {
  items: NavItem[];
  cta?: CTA;
  logo?: ReactNode;
  endSlot?: ReactNode;
}) {
  const { t } = useTranslation("common");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-2xl border border-zinc-200/60 bg-white/75 px-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="flex items-center gap-3">
            <MobileNavSheet items={items} cta={cta} t={t} />
            <BrandLogo>{logo}</BrandLogo>
          </div>

          <DesktopNav
            items={items}
            cta={cta}
            t={t}
            endSlot={
              endSlot ?? (
                <div className="flex items-center gap-1.5">
                  <LanguageSwitch />
                  <ThemeToggle />
                </div>
              )
            }
          />
        </div>
      </div>
    </header>
  );
}
