import { useTranslation } from "react-i18next";
import Section from "../atoms/Section";
import Image from "next/image";
import Link from "next/link";

export function About() {
  const { t } = useTranslation(["section", "introduction"]);
  return (
    <Section className="flex-col items-start justify-center" id="about">
      <h2 className="heading md:text-3xl text-2xl">{t("section:about")}</h2>
      <div className="md:grid md:gap-12 grid-cols-2">
        <div>
          <p className="md:text-xl">{t("introduction:intro")}</p>
          <p className="md:text-xl md:mt-2">
            {t("introduction:current-work")}{" "}
            <Link
              className="company-link md:text-xl text-base text-purple-700 m-0 font-bold"
              href="https://www.globant.com"
              style={{ transitionDelay: `${1}00ms` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("introduction:company")}
            </Link>{" "}
            {t("introduction:clients")}
          </p>
        </div>
        <Image
          className="md:mt-0 md:ml-0 mt-2 ml-5"
          alt="Alisson"
          width={300}
          height={300}
          src={"/images/me.jpg"}
        />
      </div>
    </Section>
  );
}
