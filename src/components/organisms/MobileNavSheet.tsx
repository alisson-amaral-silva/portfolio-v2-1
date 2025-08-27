"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItemLink from "@/components/molecules/NavItemLink";
import NavAccordionGroup from "@/components/molecules/NavAccordionGroup";
import { CTA, NavItem } from "@/lib/nav/types";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import LanguageSwitch from "@/components/atoms/LanguageSwitch";
import { useState } from "react";

export default function MobileNavSheet({
  items,
  cta,
  t,
}: {
  items: NavItem[];
  cta?: CTA;
  t: (k: string) => string;
}) {
  const [open, setOpen] = useState(false);

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
          <LanguageSwitch />
          <ThemeToggle />
        </div>

        <nav aria-label={t("nav.mobileLabel")} className="space-y-2 px-4 pb-6">
          {items.map((item) =>
            item.children?.length ? (
              <NavAccordionGroup
                key={item.labelKey ?? item.label}
                item={item}
                t={t}
                onNavigate={() => setOpen(false)}
              />
            ) : (
              <Button
                key={item.labelKey ?? item.label}
                asChild
                variant="ghost"
                className="w-full justify-start rounded-xl px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-white/80 dark:text-zinc-100"
              >
                <NavItemLink
                  href={item.href}
                  label={item.label}
                  labelKey={item.labelKey}
                  t={t}
                  onClick={() => setOpen(false)}
                />
              </Button>
            )
          )}

          {cta && (
            <div className="pt-2">
              <Button
                asChild
                className="w-full rounded-xl border border-zinc-200 bg-zinc-900 text-white dark:border-zinc-700 dark:bg-white dark:text-zinc-900"
                onClick={() => setOpen(false)}
              >
                <NavItemLink
                  href={cta.href}
                  label={cta.label}
                  labelKey={cta.labelKey}
                  t={t}
                />
              </Button>
            </div>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
