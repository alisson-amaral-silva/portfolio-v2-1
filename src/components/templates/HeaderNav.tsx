"use client";

import BrandLogo from "@/components/atoms/BrandLogo";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import LanguageSwitch from "@/components/atoms/LanguageSwitch";
import DesktopNav from "@/components/organisms/DesktopNav";
import MobileNavSheet from "@/components/organisms/MobileNavSheet";
import { NavItem } from "@/lib/nav/types";
import { useTranslation } from "react-i18next";
import { ReactNode, useEffect, useState } from "react";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";
import Link from "next/link";
import { CustomButton } from "../atoms/HoverButton";

export default function HeaderNav({
  items,
  logo,
  endSlot,
}: {
  items: NavItem[];
  logo?: ReactNode;
  endSlot?: ReactNode;
}) {
  const { t } = useTranslation("common");
  const { isPtBr } = useLanguageSwitch();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50">
        <div className="mx-auto w-full ">
          <div className="h-16" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto w-full  ">
        <div className="flex h-16 items-center justify-between bg-white/75 px-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="flex items-center gap-3">
            <MobileNavSheet items={items} t={t} />
            <BrandLogo>{logo}</BrandLogo>
          </div>

          <DesktopNav
            items={items}
            t={t}
            endSlot={
              endSlot ?? (
                <div className="flex items-center gap-4 ml-4">
                  <CustomButton>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        isPtBr ? "/docs/resume_pt.pdf" : "/docs/resume_en.pdf"
                      }
                      aria-label={t("nav.resume")}
                    >
                      {t("nav.resume")}
                    </Link>
                  </CustomButton>
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
