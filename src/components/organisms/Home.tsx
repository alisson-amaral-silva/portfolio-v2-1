import Section from "@/components/atoms/Section";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation("introduction");
  return (
    <Section
      id="Home"
      className="flex flex-col justify-center items-start p-0 text-al"
    >
      <div>
        <h1 className="text-2xl text-purple-700 m-0">{t("greeting")}</h1>
        <h2 className="text-7xl text-zinc-600 dark:text-zinc-300">
          Alisson Alcântara Amaral da Silva
        </h2>
        <h3 className="text-7xl text-zinc-600 dark:text-zinc-300">
          {t("subtitle")}
        </h3>
        <h4 className="text-xl text-zinc-600 dark:text-zinc-300 mt-6 max-w-2xl">
          {t("opening")}{" "}
          <a
            className="text-xl text-purple-700 m-0"
            href="https://www.globant.com"
            target="_blank"
            rel="noreferrer"
          >
            {t("company")}
          </a>
        </h4>
      </div>
    </Section>
  );
}
