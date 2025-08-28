import { useTranslation } from "react-i18next";
import Section from "../atoms/Section";
import Image from "next/image";

export function HardSkills() {
  const { t } = useTranslation("technologies");
  const frontEndDevTools = [
    "Visual Studio Code",
    "Git",
    "Codepen",
    "Chrome Dev Tools",
    "Google Fonts",
    "Bootstrap",
    "Material UI",
    "Github",
  ];

  const backEndDevTools = [
    "Docker",
    "Postman",
    "Heroku",
    "GitLab",
    "Visual Studio",
    "IntelliJ",
    "Redis",
    "Github",
  ];

  return (
    <Section className="flex-col items-start justify-center" id="hard-skills">
      <h2 className="heading text-3xl">{t("section:hard-skills")}</h2>
      <div className="w-full h-full">
        <div className="md:grid md:grid-cols-2">
          <div className="flex justify-center align-middle w-full h-full text-center">
            <div className="grid p-8 gap-7 align-webkit-center">
              <div>
                <Image
                  aria-label="front end icon"
                  alt="front end icon"
                  src="/images/icon-front-end.png"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h5 className="font-black">Front-end</h5>
              </div>
              <div>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {t("front-end-intro")}
                </p>
              </div>
              <div>
                <p className="text-purple-700">{t("languages")}</p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  React, Angular, TypeScript, Next.JS
                </p>
              </div>
              <div>
                <p className="text-purple-700">{t("dev-tools")}</p>
                <ul className="ml-0 mt-0 list-none">
                  {frontEndDevTools.map((skill) => (
                    <li
                      className="tech-list text-zinc-600 dark:text-zinc-300"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center align-middle w-full h-full text-center">
            <div className="grid p-8 gap-7 align-webkit-center">
              <div>
                <Image
                  aria-label="back end icon"
                  alt="back end icon"
                  src="/images/icon-back-end.png"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h5 className="font-black">Back-end</h5>
              </div>
              <div>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {t("back-end-intro")}
                </p>
              </div>
              <div>
                <p className="text-purple-700">{t("languages")}</p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Node.JS, Java, C#, .NET
                </p>
              </div>
              <div>
                <p className="text-purple-700">{t("dev-tools")}</p>
                <ul className="ml-0 mt-0 list-none">
                  {backEndDevTools.map((skill) => (
                    <li
                      className="tech-list text-zinc-600 dark:text-zinc-300"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
