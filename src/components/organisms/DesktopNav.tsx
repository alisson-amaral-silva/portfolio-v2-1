"use client";

import NavItemLink from "@/components/molecules/NavItemLink";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/lib/nav/types";
import { ReactNode } from "react";

export default function DesktopNav({
  items,
  t,
  endSlot,
}: {
  items: NavItem[];
  t: (k: string) => string;
  endSlot?: ReactNode;
}) {
  return (
    <div className="hidden w-full justify-end items-center md:flex">
      <NavigationMenu aria-label="Principal">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.labelKey ?? item.label}>
              <NavigationMenuLink asChild>
                <NavItemLink
                  href={item.href}
                  label={item.label}
                  labelKey={item.labelKey}
                  t={t}
                  className="rounded-md px-3 py-2 text-2xl font-medium text-zinc-700 hover:text-zinc-900 focus:outline-none focus:ring dark:text-zinc-200 dark:hover:text-white"
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {endSlot}
    </div>
  );
}
