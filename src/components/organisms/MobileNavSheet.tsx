"use client";

import LanguageSwitch from "@/components/atoms/LanguageSwitch";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import NavItemLink from "@/components/molecules/NavItemLink";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItem } from "@/lib/nav/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CustomButton } from "../atoms/HoverButton";
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";

export default function MobileNavSheet({
  items,
  t,
}: {
  items: NavItem[];
  t: (k: string) => string;
}) {
  const [open, setOpen] = useState(false);
  const { isPtBr } = useLanguageSwitch();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden border-zinc-200/60 bg-white/70 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          aria-label={open ? t("nav.close") : t("nav.open")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-md border-l border-zinc-200/70 bg-white/95 p-0 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/95"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader className="px-6 pb-2 pt-6">
          <SheetTitle className="text-base">{t("nav.menu")}</SheetTitle>
        </SheetHeader>

        <div className="flex items-center gap-2 px-6 pb-3">
          <CustomButton>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={isPtBr ? "/docs/resume_pt.pdf" : "/docs/resume_en.pdf"}
              aria-label={t("nav.resume")}
            >
              {t("nav.resume")}
            </Link>
          </CustomButton>
          <LanguageSwitch />
          <ThemeToggle />
        </div>

        <nav aria-label={t("nav.mobileLabel")} className="space-y-2 px-4 pb-6">
          {items.map((item) => (
            <Button
              key={item.labelKey ?? item.label}
              asChild
              variant="ghost"
              className="w-full justify-start rounded-xl px-3 py-2 text-2xl font-medium text-zinc-800 hover:bg-white/80 dark:text-zinc-100"
            >
              <NavItemLink
                href={item.href}
                label={item.label}
                labelKey={item.labelKey}
                t={t}
                onClick={() => setOpen(false)}
              />
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
