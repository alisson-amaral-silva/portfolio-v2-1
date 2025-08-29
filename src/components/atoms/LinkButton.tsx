import Link from "next/link";
import { CustomButton } from "./HoverButton";

interface LinkButtonProps {
  href: string;
  aria: string;
  content: string;
}

export function LinkButton({ href, aria, content }: LinkButtonProps) {
  return (
    <CustomButton>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={aria}
      >
        {content}
      </Link>
    </CustomButton>
  );
}
