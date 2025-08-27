"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavItemLink from "@/components/molecules/NavItemLink";
import { CTA, NavItem } from "@/lib/nav/types";
import { getLabel } from "@/lib/nav/getLabel";
import { ReactNode } from "react";

export default function DesktopNav({
  items,
  cta,
  t,
  endSlot,
}: {
  items: NavItem[];
  cta?: CTA;
  t: (k: string) => string;
  endSlot?: ReactNode;
}) {
  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <NavigationMenu aria-label="Principal">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.labelKey ?? item.label}>
              {item.children?.length ? (
                <>
                  <NavigationMenuTrigger className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white">
                    {getLabel(t, item.label, item.labelKey)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-xl border border-zinc-200/80 bg-white/95 p-2 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/95">
                    <ul className="grid w-64 gap-1 p-1">
                      {(item.children ?? []).map((c) => (
                        <li key={c.labelKey ?? c.label}>
                          <NavigationMenuLink asChild>
                            <NavItemLink
                              href={c.href}
                              label={c.label}
                              labelKey={c.labelKey}
                              t={t}
                              className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800/60"
                            />
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <NavItemLink
                    href={item.href}
                    label={item.label}
                    labelKey={item.labelKey}
                    t={t}
                    className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 focus:outline-none focus:ring dark:text-zinc-200 dark:hover:text-white"
                  />
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}

          {cta && (
            <NavigationMenuItem>
              <Button
                asChild
                className="rounded-xl border border-zinc-200 bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring dark:border-zinc-700 dark:bg-white dark:text-zinc-900"
              >
                <NavItemLink
                  href={cta.href}
                  label={cta.label}
                  labelKey={cta.labelKey}
                  t={t}
                />
              </Button>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
      {endSlot}
    </div>
  );
}
