"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { getLabel } from "@/lib/nav/getLabel";

type Props = {
  href?: string;
  label?: string;
  labelKey?: string;
  t: (k: string) => string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

export default function NavItemLink({
  href = "#",
  label,
  labelKey,
  t,
  className,
  onClick,
  children,
}: Props) {
  return (
    <Link href={href} onClick={onClick} className={className}>
      {children ?? getLabel(t, label, labelKey)}
    </Link>
  );
}
