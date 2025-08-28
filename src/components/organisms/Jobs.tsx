import { useTranslation } from "react-i18next";
import Section from "../atoms/Section";

export interface JobProps {
  company: string;
  title: string;
  url: string;
  range: string;
  html: string;
}

export function Jobs() {
  const { t } = useTranslation("job");
  const jobs = t("job_list", { returnObjects: true }) as JobProps[];
  return (
    <Section className="block md:flex" id="jobs">
      <h4 className="heading text-3xl">{t("section:hard-skills")}</h4>
      <div role="tablist" className="job-tab-list">
        {jobs.map(({ company }) => (
          <button className="job-button" key={company}>
            <span key={`${company} span`}>{company}</span>
          </button>
        ))}
      </div>
      <div className="relative md:ml-5 ml-0">
        {jobs.map(({ title, url, company, range, html }) => (
          <div role="tabpanel" className="job-list" key={`${title}-${company}`}>
            <span> {title}</span>
            <span key={`${company} - company`} className="text-purple-700">
              &nbsp;
              <a key={`${url} - link`} href={url} className="company-link">
                @&nbsp;{company}
              </a>
            </span>
            <p key={`${range} - range`} className="text-purple-700 font-bold">
              {range}
            </p>
            <div
              key={`${html} - html`}
              className="text-zinc-600 dark:text-zinc-300"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
