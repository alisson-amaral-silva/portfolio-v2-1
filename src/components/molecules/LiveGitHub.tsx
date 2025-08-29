import { useTranslation } from "react-i18next";
import { LinkButton } from "../atoms/LinkButton";

interface LiveGitHubProps {
  url: string;
  github: string;
}

export function LiveGitHub({ url, github }: LiveGitHubProps) {
  const { t } = useTranslation("common");
  return url && github ? (
    <div className="flex align-middle gap-2">
      <LinkButton href={url} aria="Demo Link" content={t("buttons.live")} />
      <LinkButton
        href={github}
        aria="Github Link"
        content={t("buttons.source")}
      />
    </div>
  ) : (
    <LinkButton
      href={github}
      aria="Github Link"
      content={t("buttons.source")}
    />
  );
}
