"use client";
import { About } from "@/components/organisms/About";
import { Contact } from "@/components/organisms/Contact";
import { Experiments } from "@/components/organisms/Experiments";
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

      <Experiments />

      <Contact />
    </>
  );
}
