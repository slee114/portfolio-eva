import Link from "next/link";
import React from "react";
import { Url } from "url";

type StyledLinkProps = {
  className?: string;
  href: Url | string;
  children?: React.ReactNode;
};

export const StyledLink = ({ className, href, children }: StyledLinkProps) => {
  return (
    <Link
      href={href}
      className={`hover:underline hover:transition leading-relaxed text-4.5 ${className}`}
    >
      {children}
    </Link>
  );
};
