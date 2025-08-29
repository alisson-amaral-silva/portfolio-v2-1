"use client";
import Section from "@/components/atoms/Section";
import { About } from "@/components/organisms/About";
import { HardSkills } from "@/components/organisms/HardSkills";
import Home from "@/components/organisms/Home";
import { Jobs } from "@/components/organisms/Jobs";

export default function Page() {
  return (
    <>
      <Home />

      <About />

      <HardSkills />

      <Jobs />

      <Section id="footer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Footer</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Contato, redes sociais, direitos autorais, etc.
          </p>
        </div>
      </Section>
    </>
  );
}
