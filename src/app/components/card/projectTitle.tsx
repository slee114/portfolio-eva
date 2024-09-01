import React from "react";
import { StyledLink } from "../styledLink";
import { Url } from "url";

type ProjectTitleProps = {
  className?: string;
  href: Url | string;
  title: string;
  children: React.ReactNode;
};

export const ProjectTitle = ({
  className,
  href,
  title,
  children,
}: ProjectTitleProps) => {
  return (
    <div className={`text-start pl-16 ${className}`}>
      <span className="text-2xl">{title}</span>
      <div className=" pt-10">
        <StyledLink href={href}>{children}</StyledLink>
      </div>
    </div>
  );
};
