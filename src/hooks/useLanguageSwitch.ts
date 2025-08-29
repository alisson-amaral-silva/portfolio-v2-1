import { useTranslation } from "react-i18next";

export function useLanguageSwitch() {
  const { i18n } = useTranslation();
  const lang = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "pt-BR"
  ).toLowerCase();
  const isPtBr = lang.startsWith("pt");
  return { isPtBr, i18n };
}
