import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import I18nProvider from "@/components/providers/I18nProvider";
import HeaderNav from "@/components/templates/HeaderNav";
import { type NavItem } from "@/lib/nav/types";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
};

const navItems: NavItem[] = [
  { labelKey: "nav.home", href: "#home" },
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.interest", href: "#interest" },
  { labelKey: "nav.footer", href: "#footer" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider>
          <I18nProvider>
            <HeaderNav items={navItems} />
            <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </main>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
