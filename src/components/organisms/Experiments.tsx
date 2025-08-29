import { useTranslation } from "react-i18next";
import Section from "../atoms/Section";
import Link from "next/link";
import { LiveGitHub } from "../molecules/LiveGitHub";
import Image from "next/image";

interface ExperimentProps {
  overline: string;
  title: string;
  html: string;
  image: string;
  github: string;
  url: string;
}

export function Experiments() {
  const { t } = useTranslation("experiment_course");
  const raw = t("list", { returnObjects: true }) as unknown;
  const experimentList: ExperimentProps[] = Array.isArray(raw)
    ? (raw as ExperimentProps[])
    : [];
  return (
    <Section className="flex-col align-middle justify-center" id="experiments">
      <h4 className="heading md:text-3xl text-2xl mb-3">
        {t("section:experiments")}
      </h4>
      {experimentList.map(({ title, overline, github, image, html, url }) => (
        <div className="mt-8 md:flex" key={title}>
          <div>
            <span className="text-sm text-purple-700 font-bold">
              {overline}
            </span>
            <h5 className="md:text-2xl text-xl">{title}</h5>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: html }} />
            <div className="mt-3">
              <LiveGitHub url={url} github={github} />
            </div>
          </div>
          <div>
            <Link
              href={url ?? github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={image}
                width={800}
                height={400}
                sizes="(max-width: 768px) auto"
                alt={title}
                className="rounded brightness-30 hover:brightness-100 focus:brightness-100 transition duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      ))}
    </Section>
  );
}
