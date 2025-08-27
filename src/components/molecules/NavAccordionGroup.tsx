"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import NavItemLink from "@/components/molecules/NavItemLink";
import { ChildItem, NavItem as Item } from "@/lib/nav/types";
import { getLabel } from "@/lib/nav/getLabel";
import { ChevronRight } from "lucide-react";

export default function NavAccordionGroup({
  item,
  t,
  onNavigate,
}: {
  item: Item;
  t: (k: string) => string;
  onNavigate?: () => void;
}) {
  const children: ChildItem[] = item.children ?? [];
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-xl border border-zinc-200/70 bg-white/70 p-1 dark:border-zinc-800/70 dark:bg-zinc-900/70"
    >
      <AccordionItem value="sub">
        <AccordionTrigger className="px-3 py-2 text-left text-sm font-medium text-zinc-800 dark:text-zinc-100">
          {getLabel(t, item.label, item.labelKey)}
        </AccordionTrigger>
        <AccordionContent className="px-2 pb-2">
          <ul className="space-y-1">
            {children.map((c) => (
              <li key={c.labelKey ?? c.label}>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800/60"
                >
                  <NavItemLink
                    href={c.href}
                    label={c.label}
                    labelKey={c.labelKey}
                    t={t}
                    onClick={onNavigate}
                  >
                    <span className="inline-flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />{" "}
                      {getLabel(t, c.label, c.labelKey)}
                    </span>
                  </NavItemLink>
                </Button>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
