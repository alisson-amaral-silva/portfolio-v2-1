import { useTranslation } from "react-i18next";
import Section from "../atoms/Section";
import Link from "next/link";

export interface JobProps {
  company: string;
  title: string;
  url: string;
  range: string;
  html: string;
}

export function Jobs() {
  const { t } = useTranslation("jobs");
  const raw = t("job_list", { returnObjects: true }) as unknown;
  const job_list: JobProps[] = Array.isArray(raw) ? (raw as JobProps[]) : [];
  return (
    <Section className="flex-col align-middle justify-center" id="experience">
      <h4 className="heading md:text-3xl text-2xl mb-3">{t("section:work")}</h4>
      <div className="relative md:ml-5 ml-0">
        {job_list?.map(({ title, url, company, range, html }) => (
          <div role="tabpanel" className="job-list" key={`${title}-${company}`}>
            <span className="md:text-2xl"> {title}</span>
            <span
              key={`${company} - company`}
              className="text-purple-700 text-base md:text-2xl font-bold"
            >
              <Link
                key={`${url} - link`}
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className="company-link"
              >
                @{company}
              </Link>
            </span>
            <p key={`${range} - range`} className="text-purple-700 font-bold">
              {range}
            </p>
            <div
              key={`${html} - html`}
              className="text-zinc-600 dark:text-zinc-300 mt-3"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
