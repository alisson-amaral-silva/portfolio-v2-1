"use client";
import Section from "@/components/atoms/Section";

export default function Page() {
  return (
    <>
      <Section id="home">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Home</h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Bem-vindo! Esta é a seção inicial.
          </p>
        </div>
      </Section>

      <Section id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Um pouco sobre o projeto/empresa.
          </p>
        </div>
      </Section>

      <Section id="interest">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Interest</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Tópicos de interesse, serviços, produtos…
          </p>
        </div>
      </Section>

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
