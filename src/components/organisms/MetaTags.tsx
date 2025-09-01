"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MetaTags() {
  const { t, i18n } = useTranslation("seo");
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const lang = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "pt-BR"
  ).toLowerCase();

  const isPT = lang.startsWith("pt");
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://alissonalcantaraamaral.vercel.app";
  const url = `${origin}${pathname || "/"}`;

  const title = t("title");
  const description = t("description");
  const ogTitle = t("ogTitle");
  const ogDescription = t("ogDescription");
  const ogImage = t("ogImage");
  const twitterCard = t("twitterCard");

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />
      <meta httpEquiv="content-language" content={isPT ? "pt-BR" : "en"} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={isPT ? "pt_BR" : "en_US"} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
