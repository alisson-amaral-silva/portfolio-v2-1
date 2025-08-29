import { useTranslation } from "react-i18next";
import { LinkButton } from "../atoms/LinkButton";
import Section from "../atoms/Section";

export function Contact() {
  const { t } = useTranslation("contact");
  return (
    <Section
      className="flex flex-col align-middle justify-center max-w-6xl min-h-6xl"
      id="contact"
    >
      <h2 className="contact-heading font-bold">{t("session")}</h2>
      <h3 className="md:text-6xl text-4xl text-zinc-600 dark:text-zinc-300">
        {t("title")}
      </h3>
      <p className="text-xl text-zinc-600 dark:text-zinc-300 mt-4 text-center">
        {t("text")}
      </p>
      <div className="mt-4">
        <LinkButton
          href={`mailto:${process.env.EMAIL}`}
          aria="Alisson Mail"
          content={t("button-message")}
        />
      </div>
    </Section>
  );
}
