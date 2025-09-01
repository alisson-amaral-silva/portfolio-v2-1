import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import I18nProvider from "@/components/providers/I18nProvider";
import HeaderNav from "@/components/templates/HeaderNav";
import { type NavItem } from "@/lib/nav/types";
import { ReactNode } from "react";
import MetaTags from "@/components/organisms/MetaTags";

export const metadata: Metadata = {
  title: "Alisson | Software Engineer",
  description:
    "Alisson is a software engineer specializing in building (and occasionally designing) exceptional digital experiences.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/images/android-chrome-192x192.png" }],
  },
};

const navItems: NavItem[] = [
  { labelKey: "nav.home", href: "#home" },
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.hardSkills", href: "#hard-skills" },
  { labelKey: "nav.experience", href: "#experience" },
  { labelKey: "nav.experiments", href: "#experiments" },
  { labelKey: "nav.contact", href: "#contact" },
  { labelKey: "nav.vitals", href: "/core-web-vitals" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider>
          <I18nProvider>
            <MetaTags />
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
